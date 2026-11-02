"""Slide decks (silverpoint 0.9, feature-006): ``SpDeck`` and ``@silverpoint/marp``.

The live deck is ``sp_deck`` (reflex-silverpoint-react 0.9.1, wrapping @silverpoint/react 0.9.1)
on client-side state (``ClientStateVar``): the site has no backend. ``hash`` stays off, so the deck
never takes the URL's fragment from the page's own anchors.
"""

from collections.abc import Callable

import reflex as rx
from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import sp_deck

from .. import deck_examples as dx
from .. import site_data as sd
from ..components.ui import c, callout, choice, code_block, framework_tabs, table
from .docs import Section, page

EYEBROW = "New in 0.9"

DECK_GROUND = ClientStateVar.create("deck_ground", "silverpoint")
DECK_MODE = ClientStateVar.create("deck_mode", "ink")
DECK_PALETTE = ClientStateVar.create("deck_palette", "none")
DECK_SIZE = ClientStateVar.create("deck_size", "16:9")
DECK_NOTES = ClientStateVar.create("deck_notes", "hidden")
DECK_PAGE = ClientStateVar.create("deck_page", 1)
DECK_TOTAL = ClientStateVar.create("deck_total", 0)
DECK_STEP = ClientStateVar.create("deck_step", "0 / 0")


def palette_name(var: ClientStateVar) -> rx.Var:
    """The preset the deck's charts read, or nothing for the ground's own inks."""
    return rx.cond(var.value == "none", rx.Var("undefined"), var.value)


def live_deck() -> rx.Component:
    return sp_deck(
        dx.SHOWCASE,
        default_page=1,
        ground=DECK_GROUND.value,
        mode=DECK_MODE.value,
        palette=palette_name(DECK_PALETTE),
        size=DECK_SIZE.value,
        show_notes=DECK_NOTES.value == "shown",
        on_page_change=lambda page, total: [DECK_PAGE.set_value(page), DECK_TOTAL.set_value(total)],
        on_fragment_change=lambda page, step, steps: DECK_STEP.set_value(
            step.to_string() + " / " + steps.to_string()
        ),
        on_ready=lambda total: DECK_TOTAL.set_value(total),
        label="silverpoint slide decks: a showcase",
        id="docs-deck",
    )


def rows(items: tuple[tuple[str, ...], ...], code_columns: int = 1) -> list[list]:
    return [[*(c(cell) for cell in item[:code_columns]), *item[code_columns:]] for item in items]


def decks() -> Callable[[], rx.Component]:
    sections: list[Section] = [
        (
            "live",
            "Try it",
            [
                rx.el.p(
                    "A Marp deck drawn by ",
                    c("sp_deck"),
                    ". Click into it, then use the arrows, Space, PageUp/PageDown or Home/End; ",
                    c("o"),
                    " opens the overview, ",
                    c("f"),
                    " full screen and ",
                    c("n"),
                    " the notes. Each list item is a fragment, revealed a step at a time; each chart is a ",
                    c("silverpoint"),
                    " fence, hydrated in place. The controls set the deck's props; a slide's own directive wins.",
                ),
                rx.el.div(
                    choice("Ground", DECK_GROUND, sd.GROUNDS),
                    choice("Mode", DECK_MODE, sd.MODES),
                    choice("Palette", DECK_PALETTE, dx.PALETTE_CHOICES),
                    choice("Size", DECK_SIZE, ("16:9", "4:3")),
                    choice("Notes", DECK_NOTES, ("shown", "hidden")),
                    class_name="spw-controls",
                ),
                rx.el.div(live_deck(), class_name="spw-deck-wrap"),
                rx.el.p(
                    "on_page_change: page ",
                    c(DECK_PAGE.value.to_string()),
                    " of ",
                    c(DECK_TOTAL.value.to_string()),
                    " · on_fragment_change: ",
                    c(DECK_STEP.value),
                    class_name="spw-small",
                ),
            ],
        ),
        (
            "install",
            "Install",
            [
                rx.el.p(
                    "In React, Vue and Angular, ",
                    c("SpDeck"),
                    " is on the ",
                    c("deck"),
                    " subpath of the adapter, and its engine, ",
                    c("@silverpoint/marp"),
                    " (which brings ",
                    c("@marp-team/marpit"),
                    "), is an optional peer: install it only for decks. Import four stylesheets, in this order "
                    "(Angular lists them in the ",
                    c("styles"),
                    " array of angular.json):",
                ),
                code_block("\n".join(f"import '{sheet}';" for sheet in dx.STYLESHEETS), "ts"),
                rx.el.p(
                    "In Reflex, ",
                    c("sp_deck"),
                    " (reflex-silverpoint-react 0.9.0 or later) lists ",
                    c("@silverpoint/marp"),
                    " as its own npm dependency and imports the four stylesheets, so an app installs the engine "
                    "only when a page renders a deck. ",
                    c("MARP_VERSION"),
                    " and ",
                    c("DECK_STYLESHEETS"),
                    " say which.",
                ),
            ],
        ),
        ("code", "In your code", [framework_tabs(dx.CODES, dx.INSTALL)]),
        (
            "authoring",
            "Writing a deck",
            [
                rx.el.p(
                    "Slides are separated by ",
                    c("---"),
                    ". The front matter sets the deck's directives; a ",
                    c("<!-- key: value -->"),
                    " comment sets one from that slide on, and ",
                    c("<!-- _key: value -->"),
                    " on that slide only. Any other comment is a presenter note, and each list item a fragment.",
                ),
                code_block(dx.CHEAT, "markdown"),
                table(["Directive", "Values", "Default", "Effect"], rows(dx.DIRECTIVES)),
                rx.el.p("The silverpoint theme's classes, set with ", c("<!-- _class: lead -->"), ":"),
                table(["Class", "Effect"], rows(dx.CLASSES)),
                callout(
                    "Raw HTML is never rendered: it shows as text, and javascript: and non-image data: URLs are "
                    "dropped. A <style scoped> block still restyles one slide, and Marpit's background images "
                    "(bg, split backgrounds such as bg right:40%, sizing and filters) keep their meaning.",
                    kind="note",
                ),
            ],
        ),
        (
            "fence",
            "Charts in a slide: the silverpoint fence",
            [
                rx.el.p(
                    "A fenced block whose language is ",
                    c("silverpoint"),
                    " holds one chart as JSON, the same input as the MCP ",
                    c("render_chart"),
                    " tool. It is static SVG in the server's render and a live chart in the browser (unless ",
                    c("interactive"),
                    " is false), and it takes its slide's ground, substrate and mode unless it names its own.",
                ),
                code_block(
                    "```silverpoint\n"
                    '{"chart": "bar-chart", "props": {"title": "Visits by quarter"}, "height": 400}\n'
                    "```",
                    "markdown",
                ),
                table(["Field", "Value", "Default"], rows(dx.FENCE_FIELDS)),
                table(["Diagnostic", "When"], rows(dx.DIAGNOSTICS)),
            ],
        ),
        (
            "props",
            "Props and events",
            [
                rx.el.p(
                    "React and Angular use the camelCase names, Vue templates may write them in kebab-case, and "
                    "Reflex in snake_case. Use the deck controlled (",
                    c("page"),
                    " with ",
                    c("pageChange"),
                    "; ",
                    c("v-model:page"),
                    " in Vue) or uncontrolled (",
                    c("defaultPage"),
                    ").",
                ),
                table(["Prop", "Reflex", "Default", ""], rows(dx.PROPS, 2)),
                table(["Event", "React · Vue · Angular", "Reflex", "Payload"], rows(dx.EVENTS, 1)),
            ],
        ),
        (
            "ssr",
            "Server rendering and print",
            [
                rx.el.p(
                    "The server sends the current slide, its static charts and the controls; the browser adopts that "
                    "markup, adds the controller and hydrates the charts, with no mismatch. In Next.js ",
                    c("SpDeck"),
                    " renders in the App Router (a component that holds the page in state needs ",
                    c("'use client'"),
                    "); Vue renders it with @vue/server-renderer and Angular with @angular/ssr. This page is a "
                    "static export: its deck was rendered when the site was built.",
                ),
                rx.el.p(
                    "Printing lays every slide out at its own size, every fragment shown and the controls hidden.",
                ),
                rx.el.p(
                    "Without a framework, the engine is pure: the same Markdown, options and id give the same render "
                    "on the server and in the browser.",
                ),
                code_block(dx.ENGINE_CODE, "ts"),
            ],
        ),
        (
            "marp",
            "Marp CLI and VS Code",
            [
                rx.el.p(
                    c("@silverpoint/marp/theme.css"),
                    " carries both grounds as a plain Marp theme. There, backdrops (plate, hatched) draw no ink, a "
                    "fence is shown as code and there is no controller; with silverpoint's own engine, Marp CLI draws "
                    "the directives, the backdrops and the fences as static SVG.",
                ),
                code_block(dx.CLI_CODE, "shell"),
            ],
        ),
        (
            "agents",
            "Decks and agents",
            [
                rx.el.p(
                    "The silverpoint MCP server checks a deck with ",
                    c("validate_deck"),
                    " (its slide count and every diagnostic), renders it as a standalone HTML document with ",
                    c("render_deck"),
                    ", and writes the deck's code (SpDeck, or sp_deck in Reflex) with ",
                    c("generate_code"),
                    " and a ",
                    c("deck"),
                    " target. The silverpoint skill carries the same guide in references/deck.md, and "
                    "reflex-silverpoint-react's skill its Reflex version. ",
                    rx.el.a("Use with AI →", href="/docs/ai"),
                ),
            ],
        ),
    ]
    return page(
        "/docs/decks",
        "Slide decks",
        "New in silverpoint 0.9 and reflex-silverpoint-react 0.9. SpDeck draws a Marp/Marpit Markdown "
        "presentation in silverpoint: the silverpoint theme on the library's grounds and substrates, directives "
        "that move a slide to another ground or to precision, fragments, presenter notes, and silverpoint fences "
        "that become real charts inside a slide.",
        sections,
        eyebrow=EYEBROW,
    )


def register(app: rx.App) -> None:
    app.add_page(decks(), route="/docs/decks", title="Slide decks · silverpoint docs")
