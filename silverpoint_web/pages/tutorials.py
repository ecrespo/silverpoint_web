"""Tutorials: the series published on seraph.to, from beginner to expert, each with a summary and its link.

The articles stay on the blog (one canonical copy); the data of this page is ``tutorials.py``.

The page has a filter by framework, a search box and an order by date. The site has no backend, so
the three are client-side state (``rx.client_state``): every card is in the prerendered page and is
shown or hidden by a condition on that state, and the two orders are two renderings of the list.
"""

from functools import reduce

import reflex as rx
from reflex_silverpoint_react import sp_button, sp_input

from .. import tutorials as tt
from ..components.layout import docs_page
from ..components.ui import choice, ext_link, pill, section
from ..ui_examples import panel

ROUTE = "/tutorials"

EVERY = "All"
OLDEST, NEWEST = "Oldest first", "Newest first"

FRAMEWORK = rx.client_state(EVERY, name="tutorials_framework")
QUERY = rx.client_state("", name="tutorials_query")
ORDER = rx.client_state(OLDEST, name="tutorials_order")


def matches(tutorial: tt.Tutorial) -> rx.Var:
    """Whether the filter and the search keep this tutorial."""
    wanted = QUERY.value.to(str).strip().lower()
    found = rx.Var.create(tutorial.search_text).contains(wanted)
    if tutorial.covers == tt.ALL:
        return found
    in_framework = reduce(lambda a, b: a | b, [FRAMEWORK.value == name for name in (EVERY, *tutorial.covers)])
    return in_framework & found


def any_of(tutorials: tuple[tt.Tutorial, ...]) -> rx.Var:
    return reduce(lambda a, b: a | b, [matches(t) for t in tutorials])


def count() -> rx.Var:
    return reduce(lambda a, b: a + b, [rx.cond(matches(t), 1, 0).to(int) for t in tt.TUTORIALS])


def card(tutorial: tt.Tutorial) -> rx.Component:
    return rx.el.li(
        rx.el.span(f"{tutorial.number:02d}", class_name="spw-tutorial-number", aria_hidden="true"),
        rx.el.div(
            rx.el.h3(ext_link(tutorial.title, tutorial.url), id=tutorial.anchor),
            rx.el.p(tutorial.summary),
            rx.el.p(
                *[pill(framework) for framework in tutorial.frameworks],
                rx.el.time(tutorial.date_label, date_time=tutorial.date, class_name="spw-tutorial-date"),
                ext_link("Read the tutorial ↗", tutorial.url, class_name="spw-tutorial-read"),
                ext_link("En español ↗", tutorial.url_es, class_name="spw-tutorial-es", lang="es"),
                class_name="spw-tutorial-meta",
            ),
        ),
        class_name="spw-card spw-tutorial",
        hidden=~matches(tutorial),
    )


def level_section(level: tt.Level, newest_first: bool) -> rx.Component:
    first, last = level.tutorials[0].number, level.tutorials[-1].number
    return rx.el.div(
        section(
            level.key,
            f"{level.title} · {first:02d}–{last:02d}",
            rx.el.p(level.intro),
            rx.el.ol(
                *[card(t) for t in tt.by_date(level.tutorials, newest_first)],
                reversed=newest_first,
                class_name="spw-tutorials",
            ),
        ),
        hidden=~any_of(level.tutorials),
    )


def levels(newest_first: bool) -> rx.Component:
    ordered = tt.LEVELS[::-1] if newest_first else tt.LEVELS
    return rx.fragment(*[level_section(level, newest_first) for level in ordered])


def controls() -> rx.Component:
    return panel(
        rx.el.div(
            rx.el.div(
                # SpInput names itself for assistive technology; this caption is for the eye only.
                rx.el.span("Search", class_name="spw-choice-label", aria_hidden="true"),
                sp_input(
                    label="Search the tutorials",
                    name="tutorials-search",
                    type="search",
                    placeholder="Title, topic or number",
                    value=QUERY.value,
                    on_change=QUERY.set,
                    id="tutorials-search",
                ),
                class_name="spw-choice spw-tutorial-search",
            ),
            choice("Framework", FRAMEWORK, (EVERY, *tt.ALL)),
            choice("Date", ORDER, (OLDEST, NEWEST)),
            class_name="spw-tutorial-controls",
        ),
        rx.el.p(
            count().to_string(),
            f" of {len(tt.TUTORIALS)} tutorials",
            class_name="spw-tutorial-count",
            role="status",
        ),
        role="search",
        aria_label="Filter the tutorials",
    )


def nothing() -> rx.Component:
    return rx.el.div(
        rx.el.p("No tutorial matches that search and framework."),
        sp_button("Show all", on_click=[QUERY.set(""), FRAMEWORK.set(EVERY)], id="tutorials-reset"),
        class_name="spw-tutorial-none",
        hidden=any_of(tt.TUTORIALS),
    )


def tutorials() -> rx.Component:
    return docs_page(
        ROUTE,
        "Tutorials",
        rx.fragment(
            f"A series of {len(tt.TUTORIALS)} step-by-step articles, from a first chart to a complete application "
            "in React, Vue, Angular and Reflex. They are published on the author's blog, ",
            ext_link("seraph.to", tt.BLOG),
            "; this page orders them from beginner to expert and says what each one covers.",
        ),
        controls(),
        nothing(),
        rx.cond(ORDER.value == NEWEST, levels(True), levels(False)),
        toc_entries=[(level.key, level.title) for level in tt.LEVELS],
        eyebrow="Learn",
    )


def register(app: rx.App) -> None:
    app.add_page(
        tutorials,
        route=ROUTE,
        title="Tutorials · silverpoint",
        description=f"{len(tt.TUTORIALS)} silverpoint tutorials, from beginner to expert, in React, Vue, Angular "
        "and Reflex.",
    )
