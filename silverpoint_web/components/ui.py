"""Small building blocks drawn in the site's paper style.

The site's own controls are silverpoint's UI components (reflex-silverpoint-react 0.3): the code
tabs are an ``sp_tabs``, the callouts ``sp_alert``, the gallery's controls ``sp_segmented``, the
pills ``sp_tag``. They are driven by client-side state (``ClientStateVar``), as the site has no backend.
"""

from typing import Any

import reflex as rx
from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import PropDoc, sp_alert, sp_segmented, sp_tab_panel, sp_tabs, sp_tag, ui_item

#: The framework the reader picked. One value for the whole page, so every code tab follows it.
FRAMEWORK = ClientStateVar.create("sp_framework", "react")

FRAMEWORK_TABS: tuple[tuple[str, str], ...] = (
    ("react", "React"),
    ("vue", "Vue"),
    ("angular", "Angular"),
    ("reflex", "Reflex"),
)

LANG_LABEL = {"react": "tsx", "vue": "vue", "angular": "ts", "reflex": "python", "sh": "shell", "css": "css"}


GITHUB_PATH = (
    "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94"
    "-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07"
    "-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 "
    "1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25"
    ".54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
)


def github_icon(size: int = 18) -> rx.Component:
    """The GitHub mark (lucide no longer ships brand icons)."""
    return rx.el.svg(
        rx.el.path(d=GITHUB_PATH),
        view_box="0 0 16 16",
        width=str(size),
        height=str(size),
        fill="currentColor",
        aria_hidden="true",
        class_name="spw-gh",
    )


def ext_link(text: str | rx.Component, href: str, **props: Any) -> rx.Component:
    """A link that opens outside the site."""
    return rx.el.a(text, href=href, target="_blank", rel="noopener noreferrer", **props)


def code_block(code: str, label: str = "", *, compact: bool = False) -> rx.Component:
    """A block of code with a copy button."""
    return rx.el.div(
        rx.el.div(
            rx.el.span(label, class_name="spw-code-label"),
            rx.el.button(
                rx.icon("copy", size=14),
                rx.el.span("Copy"),
                on_click=rx.set_clipboard(code),
                class_name="spw-copy",
                type="button",
                title="Copy to clipboard",
            ),
            class_name="spw-code-bar",
        ),
        rx.el.pre(rx.el.code(code)),
        class_name="spw-code" + (" spw-code-compact" if compact else ""),
    )


def shell(command: str) -> rx.Component:
    return code_block(command, "shell", compact=True)


def framework_tabs(codes: dict[str, str], installs: dict[str, str] | None = None) -> rx.Component:
    """The same example in each framework, following the page-wide framework choice."""
    available = [(key, label) for key, label in FRAMEWORK_TABS if key in codes]
    return sp_tabs(
        *[
            sp_tab_panel(
                shell(installs[key]) if installs and key in installs else rx.fragment(),
                code_block(codes[key], LANG_LABEL.get(key, key)),
                value=key,
            )
            for key, _ in available
        ],
        items=[ui_item(key, label) for key, label in available],
        label="Framework",
        value=FRAMEWORK.value,
        on_change=FRAMEWORK.set_value,
        size="sm",
        class_name="spw-tabs",
    )


#: The site's callout kinds as sp_alert kinds. Every callout is a ``status`` (info / success), not
#: an ``alert``: they are part of the page, not news, so nothing is announced on load.
CALLOUT_KINDS = {"note": "info", "tip": "success", "warn": "info", "bug": "info"}
CALLOUT_TITLES = {"note": "Note", "tip": "Tip", "warn": "Mind this", "bug": "Report it"}


def callout(*children: Any, kind: str = "note") -> rx.Component:
    """A note in the text, drawn as an ``sp_alert``."""
    return sp_alert(
        rx.el.span(*children),
        kind=CALLOUT_KINDS.get(kind, "info"),
        title=CALLOUT_TITLES.get(kind, "Note"),
        size="sm",
        class_name=f"spw-callout spw-callout-{kind}",
    )


def props_table(props: tuple[PropDoc, ...] | list[PropDoc], framework_columns: bool = True) -> rx.Component:
    head = (
        ["React / Angular", "Vue", "Reflex", "Type", "Description"]
        if framework_columns
        else ["Prop", "Type", "Description"]
    )
    rows = []
    for p in props:
        kebab = "".join("-" + c.lower() if c.isupper() else c for c in p.js)
        cells = (
            [rx.el.td(rx.el.code(p.js)), rx.el.td(rx.el.code(kebab)), rx.el.td(rx.el.code(p.name))]
            if framework_columns
            else [rx.el.td(rx.el.code(p.js))]
        )
        rows.append(
            rx.el.tr(
                *cells, rx.el.td(rx.el.code(p.type), class_name="spw-type"), rx.el.td(md_inline(p.doc) or "—")
            )
        )
    return rx.el.div(
        rx.el.table(
            rx.el.thead(rx.el.tr(*[rx.el.th(h) for h in head])), rx.el.tbody(*rows), class_name="spw-table"
        ),
        class_name="spw-table-wrap",
    )


def md_inline(text: str) -> rx.Component | str:
    """Backticks to <code>, **bold** to <strong>. Enough for prop docs."""
    if not text:
        return ""
    parts: list[Any] = []
    for i, chunk in enumerate(text.split("`")):
        if i % 2:
            parts.append(rx.el.code(chunk))
        else:
            for j, bit in enumerate(chunk.split("**")):
                if bit:
                    parts.append(rx.el.strong(bit) if j % 2 else bit)
    return rx.el.span(*parts)


def table(head: list[str], rows: list[list[Any]]) -> rx.Component:
    return rx.el.div(
        rx.el.table(
            rx.el.thead(rx.el.tr(*[rx.el.th(h) for h in head])),
            rx.el.tbody(*[rx.el.tr(*[rx.el.td(c) for c in row]) for row in rows]),
            class_name="spw-table",
        ),
        class_name="spw-table-wrap",
    )


#: Tone of an ``sp_tag`` per pill kind: the darker the tone, the more it matters.
PILL_TONES = {"spw-pill-latest": 4, "spw-pill-adapter": 3, "spw-pill-required": 2, "spw-pill-optional": 1}


def pill(text: str, kind: str = "") -> rx.Component:
    """A small label, drawn as an ``sp_tag``."""
    return sp_tag(text, tone=PILL_TONES.get(kind, 1), size="sm", class_name=f"spw-pill {kind}".strip())


def choice(label: str, var: ClientStateVar, options: tuple[str, ...] | list[str]) -> rx.Component:
    """A client-side choice between a few values, drawn as an ``sp_segmented``."""
    return rx.el.div(
        # SpSegmented names itself with a screen-reader legend; this caption is for the eye only.
        rx.el.span(label, class_name="spw-choice-label", aria_hidden="true"),
        sp_segmented(
            items=[ui_item(o, o) for o in options],
            label=label,
            name="ctl-" + label.lower().replace(" ", "-"),
            value=var.value,
            on_change=var.set_value,
            size="sm",
        ),
        class_name="spw-choice",
    )


def paper_card(*children: Any, class_name: str = "", **props: Any) -> rx.Component:
    return rx.el.div(*children, class_name=f"spw-card {class_name}".strip(), **props)


def section(anchor: str, title: str, *children: Any, level: int = 2) -> rx.Component:
    heading = rx.el.h2 if level == 2 else rx.el.h3
    return rx.el.section(
        heading(rx.el.a(title, href=f"#{anchor}", class_name="spw-anchor"), id=anchor),
        *children,
        class_name="spw-section",
    )


def p(*children: Any, **props: Any) -> rx.Component:
    return rx.el.p(*children, **props)


def c(text: str) -> rx.Component:
    """Inline code."""
    return rx.el.code(text)
