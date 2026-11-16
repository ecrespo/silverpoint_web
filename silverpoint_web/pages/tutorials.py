"""Tutorials: the series published on seraph.to, from beginner to expert, each with a summary and its link.

The articles stay on the blog (one canonical copy); the data of this page is ``tutorials.py``.
"""

import reflex as rx

from .. import tutorials as tt
from ..components.layout import docs_page
from ..components.ui import ext_link, pill, section

ROUTE = "/tutorials"


def card(tutorial: tt.Tutorial) -> rx.Component:
    return rx.el.li(
        rx.el.span(f"{tutorial.number:02d}", class_name="spw-tutorial-number", aria_hidden="true"),
        rx.el.div(
            rx.el.h3(ext_link(tutorial.title, tutorial.url), id=tutorial.anchor),
            rx.el.p(tutorial.summary),
            rx.el.p(
                *[pill(framework) for framework in tutorial.frameworks],
                ext_link("Read the tutorial ↗", tutorial.url, class_name="spw-tutorial-read"),
                ext_link("En español ↗", tutorial.url_es, class_name="spw-tutorial-es", lang="es"),
                class_name="spw-tutorial-meta",
            ),
        ),
        class_name="spw-card spw-tutorial",
    )


def level_section(level: tt.Level) -> rx.Component:
    first, last = level.tutorials[0].number, level.tutorials[-1].number
    return section(
        level.key,
        f"{level.title} · {first:02d}–{last:02d}",
        rx.el.p(level.intro),
        rx.el.ol(*[card(t) for t in level.tutorials], start=first, class_name="spw-tutorials"),
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
        *[level_section(level) for level in tt.LEVELS],
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
