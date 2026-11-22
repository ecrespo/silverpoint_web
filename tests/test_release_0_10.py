"""silverpoint 0.10 on the site: the docs fixes reported in ecrespo/silverpoint (#14, #15, #16, #21)."""

from silverpoint_web import composed_code as cc
from silverpoint_web import site_data as sd
from silverpoint_web.pages import docs


def test_issue_15_ssr_page_says_reflex_prerenders_on_export():
    assert "render on the client" not in docs.SSR["reflex"]
    assert "prerenders" in docs.SSR["reflex"]
    assert 'id="hits", width=480' in docs.SSR["reflex"]


def test_issue_16_angular_ssr_command_allows_localhost():
    assert "NG_ALLOWED_HOSTS=localhost node dist/my-charts/server/server.mjs" in docs.SSR["angular"]
    assert "allowedHosts" in docs.SSR["angular"]


def test_issue_14_export_code_writes_a_standalone_svg():
    # Since 0.11 (silverpoint#25) the handle's toStandaloneSVGString() is standaloneSVG + styles-text.
    for framework in ("react", "vue", "angular"):
        assert "await " in docs.EXPORT[framework], framework
        assert "toStandaloneSVGString()" in docs.EXPORT[framework], framework
    assert "standalone SVG" in docs.EXPORT["reflex"]


def test_issue_21_react_provider_comes_from_its_subpath():
    assert "from '@silverpoint/react/provider';" in docs.PROVIDER["react"]


def test_0_10_releases_are_documented():
    by_version = {release.version: release for release in sd.VERSIONS}
    assert by_version["0.10.0"].reflex == "0.10.0"
    assert by_version["0.10.1"].reflex == ""
    assert {r.version: r.wraps for r in sd.REFLEX_VERSIONS}["0.10.0"] == "0.10.0"
    assert set(cc.CHANGES) <= {item.slug for item in cc.REFERENCE}
