"""silverpoint 0.11 on the site: host embedding (feature-007), the handle's standalone export (#25),
the chart's name as a <desc> (#29) and reflex-silverpoint-react 0.11.0's string trigger (#50)."""

import base64
import hashlib
import json
import re

from silverpoint_web import agent
from silverpoint_web import composed_code as cc
from silverpoint_web import embed_examples as ex
from silverpoint_web import site_data as sd
from silverpoint_web.components.layout import DOCS_NAV
from silverpoint_web.pages import docs

CATALOG = agent.load_catalog()


def test_0_11_releases_are_documented():
    by_version = {release.version: release for release in sd.VERSIONS}
    assert by_version["0.11.0"].reflex == "0.11.0"
    assert by_version["0.11.1"].reflex == ""
    assert sd.REFLEX_VERSIONS[0].version == sd.REFLEX_VERSIONS[0].wraps == "0.11.0"
    assert not CATALOG["reflex"]["stale"]


def test_embed_is_a_package_and_a_docs_page():
    assert "@silverpoint/embed" in {package.name for package in sd.PACKAGES}
    assert ("/docs/embed", "Embed in any page") in [link for _, links in DOCS_NAV for link in links]


def test_vendored_standalone_file_matches_its_integrity():
    assert sd.LATEST.version == ex.EMBED_VERSION
    body = (ex.ASSETS / ex.STANDALONE_FILE).read_bytes()
    digest = "sha384-" + base64.b64encode(hashlib.sha384(body).digest()).decode()
    assert ex.INTEGRITY[ex.STANDALONE_FILE] == digest
    assert f'"{ex.EMBED_VERSION}"' in body.decode()
    assert digest in ex.PAGE


def test_demo_page_specs_name_catalog_charts():
    html = (ex.ASSETS / "demo.html").read_text()
    assert f'src="/embed/{ex.STANDALONE_FILE}"' in html
    specs = [
        json.loads(body) for body in re.findall(r'<script type="application/json">(.*?)</script>', html, re.S)
    ]
    charts = {chart["slug"]: chart for chart in CATALOG["charts"]}
    grounds = {ground["name"]: ground["substrates"] for ground in CATALOG["grounds"]}
    assert len(specs) == 3
    for spec in specs:
        chart = charts[spec["chart"]]
        declared = {prop["name"] for prop in chart["props"]} | {
            prop["name"] for prop in CATALOG["common"]["chart"]
        }
        assert set(spec["props"]) <= declared, spec["chart"]
        ground = spec.get("ground", "silverpoint")
        assert spec.get("substrate", grounds[ground][0]) in grounds[ground]


def test_issue_25_export_uses_the_handles_standalone_string():
    for framework in ("react", "vue", "angular"):
        assert "toStandaloneSVGString()" in docs.EXPORT[framework], framework
        assert "@silverpoint/grounds/styles-text" not in docs.EXPORT[framework], framework


def test_issue_50_string_trigger_is_noted_on_each_overlay():
    for slug in ("modal", "drawer", "popover", "tooltip"):
        assert any(since == "0.11" and "sp_button" in note for since, note in cc.CHANGES[slug]), slug
    assert set(cc.CHANGES) <= {item.slug for item in cc.REFERENCE}


def test_llms_full_lists_the_hosts():
    text = agent.llms_full_txt(CATALOG)
    assert "## Host integrations" in text
    for host in CATALOG["hosts"]:
        assert host["name"] in text
