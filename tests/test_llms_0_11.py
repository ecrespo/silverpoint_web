"""/llms.txt and /llms-full.txt at silverpoint 0.11 (REQ-564, feature-007), and the drift guard.

The host integrations come from the catalog's ``hosts`` (Data Model §2.43); what the catalog does not
carry about ``@silverpoint/embed`` comes from the hand-written template ``agent.EMBED_TEMPLATE``.
"""

import copy
import io
import json
import re
import urllib.error

import pytest

from silverpoint_web import agent
from silverpoint_web.components.layout import DOCS_NAV

CATALOG = agent.load_catalog()
LLMS = agent.llms_txt(CATALOG, DOCS_NAV)
LLMS_FULL = agent.llms_full_txt(CATALOG)
MINOR = ".".join(CATALOG["version"].split(".")[:2])


def section(markdown: str, heading: str) -> str:
    """The body under a Markdown heading, up to the next heading of the same or a higher level."""
    level = len(heading) - len(heading.lstrip("#"))
    start = markdown.index(heading + "\n")
    rest = markdown[start + len(heading) + 1 :]
    stop = re.search(rf"^#{{1,{level}}} ", rest, re.MULTILINE)
    return rest[: stop.start()] if stop else rest


@pytest.fixture
def drift():
    from scripts import check_mcp_latest

    return check_mcp_latest


# ── /llms-full.txt: hosts and embedding ──────────────────────────────────────────────────


def test_req_564_llms_full_has_a_hosts_and_embedding_section():
    assert "\n## Hosts and embedding\n" in LLMS_FULL
    assert "## Host integrations" not in LLMS_FULL


def test_req_564_hosts_are_grouped_by_status_so_planned_is_not_read_as_available():
    body = section(LLMS_FULL, "## Hosts and embedding")
    statuses = list(dict.fromkeys(host["status"] for host in CATALOG["hosts"]))
    for status in statuses:
        group = section(body, f"### {agent.STATUS_TITLES[status]}")
        for host in CATALOG["hosts"]:
            line = next((row for row in group.splitlines() if host["summary"] in row), None)
            if host["status"] != status:
                assert line is None, (status, host["id"])
                continue
            assert line is not None, host["id"]
            assert host["kind"] in line and f"`{host['via']}`" in line and host["status"] in line
            if host["repository"]:
                assert f"[{host['name']}]({host['repository']})" in line
            else:
                assert host["name"] in line


def test_req_564_hosts_section_lists_every_host_once():
    body = section(LLMS_FULL, "## Hosts and embedding")
    assert sum(body.count(host["summary"]) for host in CATALOG["hosts"]) == len(CATALOG["hosts"]) == 12


def test_req_564_embed_paragraph_comes_from_the_hand_written_template():
    template = agent.EMBED_TEMPLATE.read_text()
    assert agent.HAND_WRITTEN_MARK in template
    body = section(LLMS_FULL, "## Hosts and embedding")
    assert "@silverpoint/embed" in body and "<silverpoint-chart>" in body
    assert f"@silverpoint/embed@{CATALOG['version']}" in body  # the template's {version}, from the catalog
    assert agent.HAND_WRITTEN_MARK not in LLMS_FULL


def test_req_564_hosts_are_generated_from_the_catalog_not_retyped():
    changed = copy.deepcopy(CATALOG)
    changed["hosts"][0] = {**changed["hosts"][0], "name": "Retyped Host", "status": "released"}
    body = section(agent.llms_full_txt(changed), "## Hosts and embedding")
    assert "Retyped Host" in section(body, f"### {agent.STATUS_TITLES['released']}")


def test_req_564_every_diagnostic_comes_out_including_the_embeds():
    diagnostics = section(LLMS_FULL, "## Diagnostics")
    codes = re.findall(r"^\| `(SP\d{3})` \|", diagnostics, re.MULTILINE)
    assert codes == [d["code"] for d in CATALOG["diagnostics"]]
    assert len(codes) == 31 and {"SP030", "SP031"} <= set(codes)


def test_req_564_hosts_section_names_the_embeds_diagnostics():
    body = section(LLMS_FULL, "## Hosts and embedding")
    assert "`SP030`" in body and "`SP031`" in body


# ── /llms.txt ────────────────────────────────────────────────────────────────────────────


def test_req_564_llms_txt_summary_takes_its_version_from_the_catalog():
    changed = copy.deepcopy(CATALOG)
    changed["version"] = "0.11.87"
    assert agent.llms_txt(changed, DOCS_NAV).splitlines()[2].startswith("> silverpoint 0.11.87 ")


def test_req_564_llms_txt_has_new_in_the_current_minor_and_not_0_9():
    assert f"\n## New in {MINOR}\n" in LLMS
    assert "\n## New in 0.9\n" not in LLMS
    body = section(LLMS, f"## New in {MINOR}")
    assert f"]({agent.SITE_URL}/docs/embed)" in body
    assert "HTML" in body and "BI" in body


def test_req_564_new_in_section_exists_for_the_catalog_minor():
    # A new minor on the pin needs its hand-written "New in" entry before the files can be written.
    assert MINOR in agent.NEW_IN
    changed = copy.deepcopy(CATALOG)
    changed["version"] = "0.99.0"
    with pytest.raises(KeyError, match="0.99"):
        agent.llms_txt(changed, DOCS_NAV)


def test_req_564_new_in_links_the_release_when_the_site_has_no_embed_page():
    nav = tuple((title, tuple(e for e in entries if e[0] != "/docs/embed")) for title, entries in DOCS_NAV)
    body = section(agent.llms_txt(CATALOG, nav), f"## New in {MINOR}")
    assert "https://github.com/ecrespo/silverpoint/releases/tag/v0.11.0" in body


def test_req_564_llms_txt_still_links_the_older_new_in_pages():
    features = section(LLMS, "## Features")
    for path in ("/docs/decks", "/docs/ai", "/docs/palettes"):
        assert f"]({agent.SITE_URL}{path})" in features


def test_req_564_llms_txt_local_mcp_command_is_versioned_from_the_catalog():
    assert f"npx -y @silverpoint/mcp@{CATALOG['version']}" in LLMS
    changed = copy.deepcopy(CATALOG)
    changed["version"] = "0.11.87"
    assert "npx -y @silverpoint/mcp@0.11.87" in agent.llms_txt(changed, DOCS_NAV)


# ── The drift guard ──────────────────────────────────────────────────────────────────────


def registry(latest: str):
    def opener(url: str, timeout: float):
        assert url.startswith("https://registry.npmjs.org/") and timeout > 0
        return io.BytesIO(json.dumps({"dist-tags": {"latest": latest}}).encode())

    return opener


def test_drift_guard_queries_the_registry_not_npm_view(drift):
    assert drift.REGISTRY_URL == "https://registry.npmjs.org/@silverpoint%2Fmcp"


def test_drift_guard_passes_when_the_pin_is_the_latest(drift):
    assert drift.check(agent.CATALOG_VERSION, opener=registry(agent.CATALOG_VERSION)) == 0


def test_drift_guard_fails_when_the_registry_has_a_newer_release(drift):
    assert drift.check("0.11.1", opener=registry("0.12.0")) == 1


def test_drift_guard_only_warns_on_a_network_failure(drift, capsys):
    def offline(url: str, timeout: float):
        raise urllib.error.URLError("no network")

    assert drift.check("0.11.1", opener=offline) == 0
    assert "warning" in capsys.readouterr().err.lower()


@pytest.mark.parametrize("workflow", [".github/workflows/drift.yml"])
def test_drift_guard_runs_in_ci_on_push_and_on_a_schedule(workflow):
    from pathlib import Path

    text = (Path(__file__).resolve().parents[1] / workflow).read_text()
    assert "schedule:" in text and "push:" in text
    assert "scripts/check_mcp_latest.py" in text
