"""The tutorials page: the seraph.to series, in order, linked rather than copied."""

from silverpoint_web import tutorials as tt
from silverpoint_web.components.layout import DOCS_NAV, NAV


def test_the_series_is_complete_and_in_order():
    assert [t.number for t in tt.TUTORIALS] == list(range(1, 30))
    assert [level.key for level in tt.LEVELS] == ["beginner", "intermediate", "advanced", "expert"]
    assert all(level.tutorials for level in tt.LEVELS)


def test_every_tutorial_links_to_its_article_on_the_blog():
    for t in tt.TUTORIALS:
        assert t.url == f"https://www.seraph.to/blog/silverpoint_serie_{t.number}"
        assert t.url_es == f"https://www.seraph.to/es/blog/silverpoint_serie_{t.number}"
        assert t.title and len(t.summary) > 80, t.number
        assert set(t.frameworks) <= set(tt.ALL), t.number


def test_the_page_is_routed_and_in_both_navigations():
    from silverpoint_web.silverpoint_web import app

    assert "tutorials" in app._unevaluated_pages
    assert ("/tutorials", "Tutorials") in NAV
    assert "/tutorials" in [href for _, entries in DOCS_NAV for href, _ in entries]


def test_the_page_shows_every_summary_and_link():
    from silverpoint_web.pages import tutorials as page

    text = str(page.tutorials())
    for t in tt.TUTORIALS:
        assert t.url in text, t.number
        assert t.summary[:40] in text, t.number
