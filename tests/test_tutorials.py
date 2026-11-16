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


def test_tutorials_sort_by_date_then_by_number():
    assert [t.number for t in tt.by_date(tt.TUTORIALS)] == list(range(1, 30))
    assert [t.number for t in tt.by_date(tt.TUTORIALS, newest_first=True)] == list(range(29, 0, -1))
    later = tt.Tutorial(30, "A later article", "x" * 90, date="2026-12-01")
    earlier = tt.Tutorial(31, "An earlier article", "x" * 90, date="2026-10-01")
    assert [t.number for t in tt.by_date((later, earlier))] == [31, 30]
    assert later.date_label == "December 1, 2026"


def test_the_framework_filter_keeps_the_articles_about_the_library_itself():
    by_number = {t.number: t for t in tt.TUTORIALS}
    assert by_number[1].covers == tt.ALL
    assert by_number[6].covers == ("Reflex",)
    reflex = [t.number for t in tt.TUTORIALS if "Reflex" in t.covers]
    assert 6 in reflex and 26 in reflex and 3 not in reflex and 24 not in reflex


def test_the_search_looks_in_number_title_and_summary():
    by_number = {t.number: t for t in tt.TUTORIALS}
    assert "sankey" in by_number[15].search_text
    assert by_number[22].search_text.startswith("22 markdown presentations")


def test_the_controls_are_client_side_state_only():
    import reflex as rx

    from silverpoint_web.pages import tutorials as page

    text = str(page.tutorials())
    for name in ("tutorials_framework", "tutorials_query", "tutorials_order"):
        assert name in text
    assert not rx.State.get_substates() or all(
        "tutorials" not in state.get_full_name() for state in rx.State.get_substates()
    )
