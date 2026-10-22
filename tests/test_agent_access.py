"""The site's half of silverpoint's feature-005 (agent access): T-243 and T-244.

REQ-537: the agent catalog published at /agent-catalog.json. REQ-558: /mcp reaches the MCP server
while the site stays static. REQ-564: /llms.txt and /llms-full.txt, generated from the catalog.
REQ-565: the "Use with AI" page. REQ-569: its tool list read from the server's own definitions.
"""

import copy
import json
import re
from pathlib import Path

import pytest

from silverpoint_web import agent
from silverpoint_web import site_data as sd
from silverpoint_web.components.layout import DOCS_NAV

ROOT = Path(__file__).resolve().parents[1]
CATALOG = agent.load_catalog()
TOOLS = agent.load_tools()
LLMS = agent.llms_txt(CATALOG, DOCS_NAV)
LLMS_FULL = agent.llms_full_txt(CATALOG)
AGENT_PATHS = {"/mcp", "/agent-catalog.json", "/llms.txt", "/llms-full.txt"}


def site_routes() -> set[str]:
    from silverpoint_web.silverpoint_web import app

    return {"/" + route.strip("/") if route != "index" else "/" for route in app._unevaluated_pages}


def section(markdown: str, heading: str) -> str:
    """The body under a Markdown heading, up to the next heading of the same or a higher level."""
    level = len(heading) - len(heading.lstrip("#"))
    start = markdown.index(heading + "\n")
    rest = markdown[start + len(heading) + 1 :]
    stop = re.search(rf"^#{{1,{level}}} ", rest, re.MULTILINE)
    return rest[: stop.start()] if stop else rest


# ── REQ-537: the catalog ─────────────────────────────────────────────────────────────────


def test_req_537_pinned_catalog_version_is_the_version_the_site_documents():
    assert sd.LATEST.version == agent.CATALOG_VERSION
    assert CATALOG["version"] == agent.CATALOG_VERSION
    assert TOOLS["version"] == agent.CATALOG_VERSION


def test_req_537_catalog_is_fetched_from_the_published_package_at_the_pinned_version():
    assert agent.package_url("agent-catalog.json") == (
        f"https://unpkg.com/@silverpoint/mcp@{agent.CATALOG_VERSION}/agent-catalog.json"
    )


def test_req_537_export_publishes_the_committed_catalog_verbatim(tmp_path):
    agent.write_agent_files(tmp_path, DOCS_NAV)
    assert (tmp_path / "agent-catalog.json").read_bytes() == agent.CATALOG_FILE.read_bytes()


def test_req_537_build_writes_the_agent_files_into_public():
    build = (ROOT / "build_local.sh").read_text()
    unzip = build.index("unzip")
    call = build.index("scripts/agent_files.py write public")
    assert call > unzip


# ── REQ-558: hosting ─────────────────────────────────────────────────────────────────────


def vercel_rewrites() -> list[dict[str, str]]:
    return json.loads((ROOT / "vercel.json").read_text())["rewrites"]


def test_req_558_mcp_is_rewritten_to_the_mcp_project_before_the_catch_all():
    rewrites = vercel_rewrites()
    assert rewrites[0] == {"source": "/mcp", "destination": "https://silverpoint-mcp.vercel.app/mcp"}
    assert rewrites[-1]["destination"] == "/index.html"


def test_req_558_catch_all_leaves_the_agent_paths_alone():
    catch_all = vercel_rewrites()[-1]["source"]
    assert catch_all == r"/((?!mcp|agent-catalog\.json|llms).*)"
    pattern = re.compile(catch_all + "$")
    for path in AGENT_PATHS:
        assert not pattern.match(path), path
    for path in ("/", "/docs/ai", "/charts/line-chart", "/gallery"):
        assert pattern.match(path), path


def test_req_558_site_stays_a_static_frontend_only_export():
    import reflex as rx

    from silverpoint_web.silverpoint_web import app

    assert app.enable_state is False

    def subclasses(cls: type) -> set[type]:
        return {sub for direct in cls.__subclasses__() for sub in {direct} | subclasses(direct)}

    assert not [cls for cls in subclasses(rx.State) if cls.__module__.startswith("silverpoint_web")]


# ── REQ-564: /llms.txt ───────────────────────────────────────────────────────────────────


def test_req_564_llms_txt_follows_the_llmstxt_format():
    lines = LLMS.splitlines()
    assert lines[0] == "# silverpoint"
    assert lines[2].startswith("> ")
    assert re.search(r"^## ", LLMS, re.MULTILINE)
    links = re.findall(r"^- \[[^\]]+\]\((\S+)\)(?:: .+)?$", LLMS, re.MULTILINE)
    assert len(links) == len(re.findall(r"^- ", LLMS, re.MULTILINE))


def test_req_564_llms_txt_links_the_full_text_the_mcp_the_ai_page_and_the_docs():
    links = set(re.findall(r"\]\((\S+)\)", LLMS))
    for path in ("/llms-full.txt", "/mcp", "/docs/ai", "/agent-catalog.json"):
        assert agent.SITE_URL + path in links, path
    for _, entries in DOCS_NAV:
        for href, _ in entries:
            assert agent.SITE_URL + href in links, href


def test_req_564_llms_txt_says_what_silverpoint_is_from_the_catalog():
    summary = LLMS.splitlines()[2]
    assert f"{len(CATALOG['charts'])} charts" in summary
    assert f"{len(CATALOG['components'])} UI components" in summary
    assert CATALOG["version"] in LLMS


def test_req_564_llms_txt_site_links_are_pages_of_the_site():
    routes = site_routes() | AGENT_PATHS
    for link in re.findall(r"\]\((\S+)\)", LLMS):
        if link.startswith(agent.SITE_URL):
            path = link.removeprefix(agent.SITE_URL) or "/"
            assert path.split("#")[0] in routes, link


# ── REQ-564: /llms-full.txt ──────────────────────────────────────────────────────────────


@pytest.mark.parametrize("chart", CATALOG["charts"], ids=lambda chart: chart["slug"])
def test_req_564_llms_full_has_every_chart_with_its_props_per_framework(chart):
    body = section(LLMS_FULL, f"### {chart['names']['react']}")
    for framework in CATALOG["frameworks"]:
        assert f"`{chart['names'][framework]}`" in body
        assert f"`{chart['imports'][framework]}`" in body
    assert chart["summary"] in body
    for prop in chart["props"]:
        row = next(line for line in body.splitlines() if line.startswith(f"| `{prop['name']}` |"))
        if "reflex" in prop:
            assert f"`{prop['reflex']}`" in row
        if "default" in prop:
            assert f"`{prop['default']}`" in row


@pytest.mark.parametrize("component", CATALOG["components"], ids=lambda component: component["slug"])
def test_req_564_llms_full_has_every_component_with_its_props_per_framework(component):
    body = section(LLMS_FULL, f"### {component['names']['react']}")
    for framework in CATALOG["frameworks"]:
        assert f"`{component['names'][framework]}`" in body
        assert f"`{component['imports'][framework]}`" in body
    for prop in component["props"]:
        assert f"| `{prop['name']}` |" in body
    for kind, bindings in component.get("binding", {}).items():
        for framework, spelling in bindings.items():
            assert f"`{spelling}`" in body, (kind, framework)


def test_req_564_llms_full_has_the_grounds_palettes_and_diagnostics():
    grounds = section(LLMS_FULL, "## Grounds")
    for ground in CATALOG["grounds"]:
        assert f"`{ground['name']}`" in grounds
        for substrate in ground["substrates"]:
            assert f"`{substrate}`" in grounds
    palettes = section(LLMS_FULL, "## Palettes")
    for field in CATALOG["palettes"]["fields"]:
        assert f"| `{field['name']}` |" in palettes
    for preset, colours in CATALOG["palettes"]["presets"].items():
        assert f"| `{preset}` |" in palettes
        for colour in colours.values():
            assert colour in palettes
    diagnostics = section(LLMS_FULL, "## Diagnostics")
    for diagnostic in CATALOG["diagnostics"]:
        row = next(
            line for line in diagnostics.splitlines() if line.startswith(f"| `{diagnostic['code']}` |")
        )
        assert diagnostic["req"] in row


def test_req_564_llms_full_has_the_common_props_dashboard_and_timeline():
    for heading, props in (
        ("### Every chart", CATALOG["common"]["chart"]),
        ("### Every UI component", CATALOG["common"]["ui"]),
        ("## Dashboard", CATALOG["dashboard"]["props"]),
        ("## Timeline", CATALOG["timeline"]["props"]),
    ):
        body = section(LLMS_FULL, heading)
        for prop in props:
            assert f"| `{prop['name']}` |" in body, (heading, prop["name"])


def test_req_564_llms_full_names_the_versions_it_describes():
    head = LLMS_FULL.split("\n## ")[0]
    assert CATALOG["version"] in head
    assert CATALOG["reflex"]["version"] in head
    assert CATALOG["reflex"]["wraps"] in head


def test_req_564_llms_files_are_generated_from_the_catalog_not_retyped():
    changed = copy.deepcopy(CATALOG)
    changed["version"] = "9.9.9"
    changed["charts"][0]["names"]["react"] = "RetypedChart"
    changed["charts"][0]["props"][0]["name"] = "retypedProp"
    changed["diagnostics"][0]["code"] = "SP999"
    changed["components"].pop()
    full = agent.llms_full_txt(changed)
    assert f"{len(CATALOG['components']) - 1} UI components" in agent.llms_txt(changed, DOCS_NAV)
    assert "### RetypedChart" in full and "| `retypedProp` |" in full and "`SP999`" in full
    assert "9.9.9" in agent.llms_txt(changed, DOCS_NAV)
    assert "9.9.9" in full


def test_req_564_markdown_tables_escape_pipes_in_types():
    union = next(p for chart in CATALOG["charts"] for p in chart["props"] if "|" in p["type"])
    escaped = union["type"].replace("|", "\\|")
    assert f"`{escaped}`" in LLMS_FULL


# ── REQ-565 / REQ-569: the "Use with AI" page ────────────────────────────────────────────


def ai_page_text() -> str:
    from silverpoint_web.pages import ai_docs

    return str(ai_docs.ai_page()())


def test_req_565_ai_page_is_in_the_docs_navigation_and_routes():
    hrefs = [href for _, entries in DOCS_NAV for href, _ in entries]
    assert "/docs/ai" in hrefs
    assert "/docs/ai" in site_routes()


def test_req_565_ai_page_gives_the_mcp_url_and_every_client_config():
    text = ai_page_text()
    url = "https://silverpointweb.vercel.app/mcp"
    assert url == agent.MCP_URL
    for snippet in (
        f"claude mcp add --transport http silverpoint {url}",
        "Connectors",
        "mcpServers",
        ".vscode/mcp.json",
        "claude mcp add silverpoint -- npx -y @silverpoint/mcp",
    ):
        assert snippet in text, snippet
    assert agent.CLIENT_CONFIGS["Cursor"] == json.dumps(
        {"mcpServers": {"silverpoint": {"url": url}}}, indent=2
    )
    assert agent.CLIENT_CONFIGS["VS Code"] == json.dumps(
        {"servers": {"silverpoint": {"type": "http", "url": url}}}, indent=2
    )


def test_req_565_ai_page_installs_both_plugins():
    text = ai_page_text()
    for line in (
        "/plugin marketplace add ecrespo/silverpoint",
        "/plugin install silverpoint@silverpoint",
        "/plugin marketplace add ecrespo/reflex-silverpoint-react",
        "/plugin install reflex-silverpoint@reflex-silverpoint",
    ):
        assert line in text, line


def test_req_569_tools_are_read_from_the_server_definitions():
    readme = (
        "intro\n<!-- tools:start -->\n| Tool | What it answers |\n|---|---|\n"
        "| `get_version` | The version. |\n| `render_chart` | An SVG \\| a render. |\n<!-- tools:end -->\n"
    )
    assert agent.parse_tools_table(readme) == [
        {"name": "get_version", "description": "The version."},
        {"name": "render_chart", "description": "An SVG | a render."},
    ]
    assert TOOLS["source"] == agent.package_url("README.md")
    assert TOOLS["tools"]


def test_req_569_ai_page_lists_every_tool_from_the_definitions():
    text = ai_page_text()
    for tool in TOOLS["tools"]:
        assert tool["name"] in text
        for piece in tool["description"].split("`"):  # code spans render as <code>
            assert json.dumps(piece)[1:-1] in text, tool["name"]


# ── REQ-565: worked examples, answered by the server at the pinned version ──────────────

EXAMPLES = agent.load_examples()


def test_req_565_examples_were_answered_by_the_pinned_version():
    assert EXAMPLES["version"] == agent.CATALOG_VERSION
    assert EXAMPLES["endpoint"] == agent.MCP_URL
    assert {call["tool"] for call in EXAMPLES["calls"]} == {"recommend_chart", "generate_code"}
    for call in EXAMPLES["calls"]:
        assert call["result"]["version"] == agent.CATALOG_VERSION, call["tool"]


def test_req_565_recommendation_example_matches_the_catalog_table():
    call = next(call for call in EXAMPLES["calls"] if call["tool"] == "recommend_chart")
    rule = next(
        rule
        for rule in CATALOG["recommend"]
        if rule["shape"] == call["arguments"]["shape"] and rule["intent"] == call["arguments"]["intent"]
    )
    assert [r["slug"] for r in call["result"]["recommendations"]] == [c["slug"] for c in rule["charts"]][:5]


def test_req_565_code_example_covers_every_framework_and_is_on_the_page():
    calls = [call for call in EXAMPLES["calls"] if call["tool"] == "generate_code"]
    assert {call["arguments"]["framework"] for call in calls} == set(CATALOG["frameworks"])
    text = ai_page_text()
    for call in calls:
        first_line = call["result"]["code"].splitlines()[0]
        assert json.dumps(first_line)[1:-1] in text, call["arguments"]["framework"]
