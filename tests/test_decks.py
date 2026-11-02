"""The site's documentation of silverpoint 0.9 (feature-006, slide decks) and its version pins.

REQ-591: a fence names a catalog chart and props it declares (the showcase's one wrong fence is on
purpose). REQ-602: the site's decks keep ``hash`` off, so the page's own anchors are never read as a
slide. REQ-608: SpDeck's names and imports are the catalog's.
"""

import json
import re
from importlib.metadata import version
from pathlib import Path

import reflex_silverpoint_react as rsr

from silverpoint_web import agent
from silverpoint_web import deck_examples as dx
from silverpoint_web import site_data as sd
from silverpoint_web.components.layout import DOCS_NAV

CATALOG = agent.load_catalog()
CHARTS = {chart["slug"]: chart for chart in CATALOG["charts"]}
FENCE = re.compile(r"^```silverpoint\n(.*?)\n```$", re.MULTILINE | re.DOTALL)
#: The showcase's deliberate SP026 example.
WRONG_ON_PURPOSE = {"pie-chart"}


def fences(markdown: str) -> list[dict]:
    return [json.loads(body) for body in FENCE.findall(markdown)]


def test_site_documents_the_installed_releases():
    assert sd.LATEST.version == agent.CATALOG_VERSION == "0.9.2"
    assert sd.REFLEX_LATEST.version == version("reflex-silverpoint-react")
    assert sd.REFLEX_LATEST.wraps == rsr.SILVERPOINT_VERSION
    wrapped = next(r for r in sd.VERSIONS if r.version == sd.REFLEX_LATEST.wraps)
    assert wrapped.reflex == sd.REFLEX_LATEST.version


def test_releases_are_newest_first_and_unique():
    for releases in (sd.VERSIONS, sd.REFLEX_VERSIONS):
        keys = [tuple(int(n) for n in r.version.split(".")) for r in releases]
        assert keys == sorted(keys, reverse=True)
        assert len(set(keys)) == len(keys)


def test_marp_package_is_listed():
    assert "@silverpoint/marp" in {p.name for p in sd.PACKAGES}


def test_decks_page_is_in_the_docs_navigation():
    hrefs = {href for _, links in DOCS_NAV for href, _ in links}
    assert "/docs/decks" in hrefs


def test_req_591_every_fence_names_a_catalog_chart_and_declared_props():
    common = {prop["name"] for prop in CATALOG["common"]["chart"]}
    for markdown in (dx.SHOWCASE, dx.HOME_DECK, dx.CHEAT):
        specs = fences(markdown)
        assert specs, "each deck draws at least one chart"
        for spec in specs:
            if spec["chart"] in WRONG_ON_PURPOSE:
                continue
            chart = CHARTS[spec["chart"]]
            declared = common | {prop["name"] for prop in chart["props"]}
            assert set(spec.get("props", {})) <= declared, spec
            assert 90 <= spec.get("height", 360) <= 720


def test_req_591_showcase_keeps_exactly_one_wrong_fence():
    wrong = [spec for spec in fences(dx.SHOWCASE) if spec["chart"] not in CHARTS]
    assert [spec["chart"] for spec in wrong] == ["pie-chart"]


def test_req_608_deck_names_and_imports_are_the_catalogs():
    deck = CATALOG["deck"]
    assert deck["peer"] == "@silverpoint/marp"
    assert tuple(deck["stylesheets"]) == dx.STYLESHEETS == rsr.DECK_STYLESHEETS
    for framework in ("react", "vue", "angular", "reflex"):
        assert deck["imports"][framework] in dx.CODES[framework]
    assert "SpDeckComponent" in dx.CODES["angular"]
    assert deck["names"]["reflex"] == "sp_deck" and "sp_deck" in dx.CODES["reflex"]


def test_catalog_reflex_names_are_the_installed_wrappers():
    assert CATALOG["reflex"] == {
        "version": sd.REFLEX_LATEST.version,
        "wraps": sd.REFLEX_LATEST.wraps,
        "stale": False,
    }


def test_deck_props_table_covers_the_catalog():
    documented = {row[0] for row in dx.PROPS}
    assert {prop["name"] for prop in CATALOG["deck"]["props"]} <= documented
    assert {event["name"] for event in CATALOG["deck"]["events"]} == {row[0] for row in dx.EVENTS}


def test_deck_palette_choices_are_the_presets():
    assert set(dx.PALETTE_CHOICES) - {"none"} == set(CATALOG["palettes"]["presets"])


def test_req_602_site_decks_never_take_the_url_hash():
    from silverpoint_web.pages import deck_docs, home

    for module in (deck_docs, home):
        source = Path(module.__file__).read_text()
        assert "hash=True" not in source


def test_llms_full_describes_the_deck():
    text = agent.llms_full_txt(CATALOG)
    assert "## Slide decks" in text
    assert "`@silverpoint/react/deck`" in text
    assert "### The silverpoint fence" in text
