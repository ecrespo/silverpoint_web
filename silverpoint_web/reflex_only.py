"""What reflex-silverpoint-react 0.7 adds in Reflex only: palettes, 20 composed components, the timeline.

None of it is in silverpoint's React, Vue or Angular adapters, so it has no framework tabs: each
demo is Python. The demos are driven by client-side state (``ClientStateVar``), as the site has no
backend; the code printed beside them is the usual ``rx.State`` version a Reflex app writes.

``demo(slug, surface)`` draws one composed component with the surface props of the page it is on
(ground, substrate, mode, palette), so the gallery and ``/docs/composed`` share every demo.
"""

from collections.abc import Callable
from dataclasses import dataclass
from typing import Any

import reflex as rx
from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import (
    PALETTES,
    sort_rows,
    sp_avatar,
    sp_avatar_group,
    sp_breadcrumb,
    sp_button,
    sp_collapse,
    sp_collapse_item,
    sp_descriptions,
    sp_drawer,
    sp_dropdown_menu,
    sp_empty,
    sp_input_number,
    sp_modal,
    sp_pagination,
    sp_popover,
    sp_result,
    sp_select,
    sp_statistic,
    sp_table,
    sp_textarea,
    sp_timeline_list,
    sp_toast,
    sp_toaster,
    sp_tooltip,
    sp_trigger,
)

#: The reflex-silverpoint-react release this module documents.
REFLEX_VERSION = "0.7.0"

# ── Palettes ─────────────────────────────────────────────────────────────────────────────

#: The presets, in the order the package lists them; "none" keeps the ground's own inks.
PALETTE_NAMES: tuple[str, ...] = tuple(PALETTES)
PALETTE_CHOICES: tuple[str, ...] = ("none", *PALETTE_NAMES)

PALETTE_BLURBS: dict[str, str] = {
    "silverpoint": "The silverpoint ground's own inks on cream: what a chart draws with no palette.",
    "sanguine": "Red chalk, as in Leonardo's and Andrea del Sarto's studies.",
    "sepia": "Sepia wash and bistre.",
    "iron_gall": "Iron-gall ink: the blue-black of manuscripts.",
    "verdigris": "Verdigris, the copper green of illuminators.",
    "indigo": "Indigo, the dyers' and printers' blue.",
}

#: Every preset as a dict of fields, plus "none" (an empty dict: every field stays the ground's).
_PALETTE_DICTS: dict[str, dict[str, str]] = {"none": {}, **{k: p.to_dict() for k, p in PALETTES.items()}}


def palette_var(name: Any) -> rx.Var:
    """The palette a client-side preset name stands for, as a var ``palette=`` accepts."""
    return rx.Var.create(_PALETTE_DICTS).to(dict)[name].to(dict)


# ── Sample data ──────────────────────────────────────────────────────────────────────────

TEAMS: list[dict[str, Any]] = [
    {"team": "Archive", "region": "North", "load": 72, "incidents": 3},
    {"team": "Billing", "region": "East", "load": 58, "incidents": 1},
    {"team": "Catalog", "region": "South", "load": 91, "incidents": 6},
    {"team": "Delivery", "region": "West", "load": 44, "incidents": 0},
    {"team": "Search", "region": "North", "load": 66, "incidents": 2},
]

TABLE_COLUMNS: list[dict[str, Any]] = [
    {"key": "team", "title": "Team", "sortable": True},
    {"key": "region", "title": "Region"},
    {"key": "load", "title": "Load %", "align": "end", "sortable": True},
    {"key": "incidents", "title": "Incidents", "align": "end", "sortable": True},
]

#: The table's rows in every order a header click can ask for: sorting is Python, the site has no
#: backend, so each order is computed at build time and picked in the browser.
SORTED_TEAMS: dict[str, list[dict[str, Any]]] = {
    f"{key}:{order}": sort_rows(TEAMS, key, order)
    for key in ("team", "load", "incidents")
    for order in ("asc", "desc")
}

REGIONS = ["North", "East", "South", "West"]

MENU_ITEMS: list[dict[str, Any]] = [
    {"type": "label", "label": "Drawing"},
    {"key": "duplicate", "label": "Duplicate", "shortcut": "⌘D"},
    {"key": "export", "label": "Export SVG", "shortcut": "⌘E"},
    {"type": "separator"},
    {"key": "archive", "label": "Archive", "disabled": True},
    {"key": "delete", "label": "Delete", "danger": True},
]

TIMELINE_ITEMS: list[dict[str, Any]] = [
    {"title": "Drawn", "time": "09:12", "description": "The ground is prepared.", "status": "done"},
    {"title": "Inked", "time": "10:40", "description": "Hatching and heightening.", "status": "done"},
    {"title": "Reviewed", "time": "11:05", "description": "Precision mode checked.", "status": "current"},
    {"title": "Published", "time": "—", "description": "Waiting for the release.", "status": "pending"},
]

DESCRIPTIONS: list[dict[str, Any]] = [
    {"label": "Ground", "value": "silverpoint"},
    {"label": "Substrate", "value": "cream"},
    {"label": "Charts", "value": "60"},
    {"label": "UI components", "value": "17"},
    {"label": "Composed", "value": "20"},
    {"label": "License", "value": "MIT"},
]

BREADCRUMB: list[dict[str, Any]] = [
    {"label": "Docs", "href": "/docs"},
    {"label": "Reflex", "href": "/docs/reflex"},
    {"label": "Composed components", "href": "/docs/composed"},
]

# ── Client-side state of the demos ───────────────────────────────────────────────────────

SORT_KEY = ClientStateVar.create("composed_sort_key", "load")
SORT_ORDER = ClientStateVar.create("composed_sort_order", "desc")
PAGE = ClientStateVar.create("composed_page", 3)
REGION = ClientStateVar.create("composed_region", "North")
COMMAND = ClientStateVar.create("composed_command", "")
NOTE = ClientStateVar.create("composed_note", "Drawn in silverpoint.")
COPIES = ClientStateVar.create("composed_copies", 3)
MODAL_OPEN = ClientStateVar.create("composed_modal_open", False)
TOAST_OPEN = ClientStateVar.create("composed_toast_open", False)


def _sort(key: str) -> list[Any]:
    """A header click: sort by that column, flipping the order when it is already the one sorted."""
    flipped = rx.cond((SORT_KEY.value == key) & (SORT_ORDER.value == "asc"), "desc", "asc")
    return [SORT_ORDER.set_value(flipped), SORT_KEY.set_value(key)]


def _sorted_rows() -> rx.Var:
    return (
        rx.Var.create(SORTED_TEAMS)
        .to(dict)[SORT_KEY.value.to(str) + ":" + SORT_ORDER.value.to(str)]
        .to(list[dict[str, Any]])
    )


# ── The 20 components ────────────────────────────────────────────────────────────────────


@dataclass(frozen=True)
class Composed:
    """One composed component: its builder, what it is, a live demo and its code."""

    slug: str
    name: str  # the Python builder(s)
    level: str  # "A" (native markup) or "B" (Radix primitives)
    summary: str
    render: Callable[[dict[str, Any]], rx.Component]
    code: str


def _table(s: dict[str, Any]) -> rx.Component:
    return sp_table(
        TABLE_COLUMNS,
        _sorted_rows(),
        caption="On-call teams",
        sort_key=SORT_KEY.value,
        sort_order=SORT_ORDER.value,
        on_sort=_sort,
        striped=True,
        **s,
    )


def _pagination(s: dict[str, Any]) -> rx.Component:
    return rx.el.div(
        sp_pagination(total=240, current=PAGE.value, on_change=PAGE.set_value, show_total=True, **s),
        rx.el.p("Page ", rx.el.code(PAGE.value), class_name="spw-small"),
        class_name="spw-stack",
    )


def _breadcrumb(s: dict[str, Any]) -> rx.Component:
    return sp_breadcrumb(BREADCRUMB, **s)


def _avatar(s: dict[str, Any]) -> rx.Component:
    return rx.el.div(
        sp_avatar(name="Ernesto Crespo", size="lg", **s),
        sp_avatar(name="Leonardo da Vinci", shape="square", **s),
        sp_avatar_group(
            sp_avatar(name="Albrecht Dürer", size="sm", **s),
            sp_avatar(name="Raphael Sanzio", size="sm", **s),
            sp_avatar(name="Anna Atkins", size="sm", **s),
            label="Draughtsmen",
        ),
        class_name="spw-row",
    )


def _statistic(s: dict[str, Any]) -> rx.Component:
    return rx.el.div(
        sp_statistic("Revenue", "48.2", prefix="$", suffix="k", trend="up", delta="+8.2 %", **s),
        sp_statistic("Churn", "2.1", suffix="%", trend="down", delta="−0.4 %", **s),
        class_name="spw-row",
    )


def _descriptions(s: dict[str, Any]) -> rx.Component:
    return sp_descriptions(DESCRIPTIONS, title="The release", columns=3, **s)


def _timeline_list(s: dict[str, Any]) -> rx.Component:
    return sp_timeline_list(TIMELINE_ITEMS, label="Release steps", **s)


def _collapse(s: dict[str, Any]) -> rx.Component:
    return sp_collapse(
        sp_collapse_item(
            "What is silverpoint?", rx.el.p("A fine silver line on a prepared ground."), open=True
        ),
        sp_collapse_item("And cyanotype?", rx.el.p("A white line on Prussian blue; tone is its weight.")),
        sp_collapse_item("Precision mode", rx.el.p("The inking switched off: exact rules only.")),
        accordion=True,
        **s,
    )


def _empty(s: dict[str, Any]) -> rx.Component:
    return sp_empty(
        sp_button("Add a chart", size="sm", id="composed-empty-add"), description="No charts yet", **s
    )


def _result(s: dict[str, Any]) -> rx.Component:
    return sp_result(
        sp_button("Back to the gallery", href="/gallery", size="sm", id="composed-result-back"),
        status="success",
        title="Published",
        subtitle="Every package reached PyPI.",
        **s,
    )


def _textarea(s: dict[str, Any]) -> rx.Component:
    return sp_textarea(
        label="Note",
        value=NOTE.value,
        on_change=NOTE.set_value,
        rows=3,
        max_length=120,
        show_count=True,
        textarea_id="composed-note",
        **s,
    )


def _input_number(s: dict[str, Any]) -> rx.Component:
    return rx.el.div(
        sp_input_number(
            label="Copies",
            value=COPIES.value,
            on_change=COPIES.set_value,
            min=1,
            max=10,
            input_id="composed-copies",
            **s,
        ),
        rx.el.p("Value ", rx.el.code(COPIES.value), class_name="spw-small"),
        class_name="spw-stack",
    )


def _modal(s: dict[str, Any]) -> rx.Component:
    return sp_modal(
        rx.el.p("Apply the new ground to every chart on the page?"),
        trigger=sp_trigger("Open the modal", **s),
        title="Apply changes",
        description="The geometry of the data does not move.",
        footer=sp_trigger("Apply", variant="primary", on_click=MODAL_OPEN.set_value(False), **s),
        open=MODAL_OPEN.value,
        on_open_change=MODAL_OPEN.set_value,
        **s,
    )


def _drawer(s: dict[str, Any]) -> rx.Component:
    return sp_drawer(
        rx.el.p("A panel that slides in from any edge, over a hatched backdrop."),
        trigger=sp_trigger("Open the drawer", **s),
        title="Settings",
        side="right",
        **s,
    )


def _popover(s: dict[str, Any]) -> rx.Component:
    return sp_popover(
        rx.el.p("Anchored content, on a card frame. Escape or a click outside closes it."),
        trigger=sp_trigger("Details", chevron=True, **s),
        title="About this chart",
        closable=True,
        width=260,
        **s,
    )


def _tooltip(s: dict[str, Any]) -> rx.Component:
    return sp_tooltip(sp_trigger("Hover or focus me", **s), "Drawn on the ground's own frame", **s)


def _select(s: dict[str, Any]) -> rx.Component:
    return rx.el.div(
        sp_select(REGIONS, value=REGION.value, on_change=REGION.set_value, label="Region", **s),
        rx.el.p("Region ", rx.el.code(REGION.value), class_name="spw-small"),
        class_name="spw-stack",
    )


def _dropdown_menu(s: dict[str, Any]) -> rx.Component:
    return rx.el.div(
        sp_dropdown_menu(
            sp_trigger("Actions", chevron=True, **s), MENU_ITEMS, on_select=COMMAND.set_value, **s
        ),
        rx.el.p(
            "Last command ", rx.el.code(rx.cond(COMMAND.value, COMMAND.value, "—")), class_name="spw-small"
        ),
        class_name="spw-stack",
    )


def _trigger(s: dict[str, Any]) -> rx.Component:
    return rx.el.div(
        sp_trigger("Default", **s),
        sp_trigger("Primary", variant="primary", **s),
        sp_trigger("Danger", variant="danger", **s),
        sp_trigger("Menu", chevron=True, **s),
        class_name="spw-row",
    )


def _toast(s: dict[str, Any]) -> rx.Component:
    return rx.el.div(
        sp_button("Show a toast", on_click=TOAST_OPEN.set_value(True), size="sm", id="composed-toast-show"),
        sp_toaster(
            sp_toast(
                "Saved",
                "The drawing was saved.",
                kind="success",
                open=TOAST_OPEN.value,
                on_open_change=TOAST_OPEN.set_value,
                **s,
            )
        ),
    )


COMPOSED: tuple[Composed, ...] = (
    # Level A: native markup.
    Composed(
        "table",
        "sp_table · sort_rows",
        "A",
        "Card-framed table: small-caps header, tabular figures, hatched striping, sortable headers with aria-sort.",
        _table,
        """class State(rx.State):
    rows: list[dict] = TEAMS
    sort_key: str = "load"
    sort_order: str = "desc"

    @rx.event
    def sort(self, key: str):
        same = key == self.sort_key and self.sort_order == "asc"
        self.sort_key, self.sort_order = key, "desc" if same else "asc"
        self.rows = sort_rows(TEAMS, self.sort_key, self.sort_order)


sp_table(
    [
        {"key": "team", "title": "Team", "sortable": True},
        {"key": "region", "title": "Region"},
        {"key": "load", "title": "Load %", "align": "end", "sortable": True},
        {"key": "incidents", "title": "Incidents", "align": "end", "sortable": True},
    ],
    State.rows,
    caption="On-call teams",
    sort_key=State.sort_key,
    sort_order=State.sort_order,
    on_sort=State.sort,  # receives the column key
    striped=True,
)""",
    ),
    Composed(
        "pagination",
        "sp_pagination",
        "A",
        "Previous and next, first and last, a window around the current page (heightened); on_change(page).",
        _pagination,
        """sp_pagination(
    total=240,  # items in all pages; page_size=10 by default
    current=State.page,
    on_change=State.set_page,  # receives the page number
    show_total=True,  # "21–30 of 240"
)""",
    ),
    Composed(
        "breadcrumb",
        "sp_breadcrumb",
        "A",
        "A <nav> of links separated by hairline slashes; the last item is the current page.",
        _breadcrumb,
        """sp_breadcrumb(
    [
        {"label": "Docs", "href": "/docs"},
        {"label": "Reflex", "href": "/docs/reflex"},
        {"label": "Composed components", "href": "/docs/composed"},
    ]
)""",
    ),
    Composed(
        "avatar",
        "sp_avatar · sp_avatar_group",
        "A",
        "A portrait or the person's initials in a drawn round (or square) frame; groups overlap.",
        _avatar,
        """sp_avatar(name="Ernesto Crespo", size="lg")  # initials when there is no src
sp_avatar(name="Leonardo da Vinci", shape="square")
sp_avatar(src="/portrait.png", name="Anna Atkins")
sp_avatar_group(
    sp_avatar(name="Albrecht Dürer", size="sm"),
    sp_avatar(name="Raphael Sanzio", size="sm"),
    label="Draughtsmen",
)""",
    ),
    Composed(
        "statistic",
        "sp_statistic",
        "A",
        "A small-caps title, a large tabular figure, prefix and suffix, and a trend arrow.",
        _statistic,
        """sp_statistic("Revenue", "48.2", prefix="$", suffix="k", trend="up", delta="+8.2 %")
sp_statistic("Churn", "2.1", suffix="%", trend="down", delta="−0.4 %")""",
    ),
    Composed(
        "descriptions",
        "sp_descriptions",
        "A",
        "A label–value grid (a <dl>), optionally card-framed; one column on narrow containers.",
        _descriptions,
        """sp_descriptions(
    [
        {"label": "Ground", "value": "silverpoint"},
        {"label": "Substrate", "value": "cream"},
        {"label": "Charts", "value": "60"},
    ],
    title="The release",
    columns=3,
)""",
    ),
    Composed(
        "timeline-list",
        "sp_timeline_list",
        "A",
        "A vertical list of events: done (hatched), current (heightened), pending and error.",
        _timeline_list,
        """sp_timeline_list(
    [
        {"title": "Drawn", "time": "09:12", "description": "The ground is prepared.", "status": "done"},
        {"title": "Reviewed", "time": "11:05", "description": "Precision mode checked.", "status": "current"},
        {"title": "Published", "time": "—", "description": "Waiting for the release.", "status": "pending"},
    ],
    label="Release steps",
)""",
    ),
    Composed(
        "collapse",
        "sp_collapse · sp_collapse_item",
        "A",
        "Panels that open and close, on native <details>; accordion=True keeps one open.",
        _collapse,
        """sp_collapse(
    sp_collapse_item("What is silverpoint?", rx.el.p("A fine silver line…"), open=True),
    sp_collapse_item("And cyanotype?", rx.el.p("A white line on Prussian blue…")),
    accordion=True,  # native exclusive <details name>
)""",
    ),
    Composed(
        "empty",
        "sp_empty",
        "A",
        "The empty state: a lightly hatched, drawn tray, a line of italic text and actions.",
        _empty,
        """sp_empty(sp_button("Add a chart", size="sm"), description="No charts yet")""",
    ),
    Composed(
        "result",
        "sp_result",
        "A",
        "The outcome of an operation: a drawn round mark (tick, info, warning, cross), title and subtitle.",
        _result,
        """sp_result(
    sp_button("Back to the gallery", href="/gallery", size="sm"),
    status="success",  # success, info, warning or error
    title="Published",
    subtitle="Every package reached PyPI.",
)""",
    ),
    Composed(
        "textarea",
        "sp_textarea",
        "A",
        "Multi-line text on the SpInput contract: drawn frame, italic placeholder, counter and message.",
        _textarea,
        """sp_textarea(
    label="Note",
    value=State.note,
    on_change=State.set_note,  # receives the text, not a DOM event
    rows=3,
    max_length=120,
    show_count=True,
)""",
    ),
    Composed(
        "input-number",
        "sp_input_number",
        "A",
        "A number field with exact − and + steppers, clamped to min and max; on_change receives the number.",
        _input_number,
        """sp_input_number(label="Copies", value=State.copies, on_change=State.set_copies, min=1, max=10)""",
    ),
    # Level B: overlays on Radix primitives.
    Composed(
        "modal",
        "sp_modal",
        "B",
        "A dialog on a card frame over a hatched backdrop: focus trapped, Escape closes it.",
        _modal,
        """sp_modal(
    rx.el.p("Apply the new ground to every chart on the page?"),
    trigger="Open the modal",  # a string becomes sp_trigger(...)
    title="Apply changes",
    description="The geometry of the data does not move.",
    footer=sp_trigger("Apply", variant="primary", on_click=State.confirm),
    open=State.modal_open,
    on_open_change=State.set_modal_open,
)""",
    ),
    Composed(
        "drawer",
        "sp_drawer",
        "B",
        "The same dialog, sliding in from any edge (side='right', 'left', 'top' or 'bottom').",
        _drawer,
        """sp_drawer(rx.el.p("A panel that slides in…"), trigger="Open the drawer", title="Settings", side="right")""",
    ),
    Composed(
        "popover",
        "sp_popover",
        "B",
        "Anchored content on a card frame, positioned by Radix; Escape or a click outside closes it.",
        _popover,
        """sp_popover(
    rx.el.p("Anchored content, on a card frame."),
    trigger=sp_trigger("Details", chevron=True),
    title="About this chart",
    closable=True,
    width=260,
)""",
    ),
    Composed(
        "tooltip",
        "sp_tooltip",
        "B",
        "A short label shown on hover or keyboard focus, after a delay.",
        _tooltip,
        """sp_tooltip("Hover or focus me", "Drawn on the ground's own frame", side="top", delay=300)""",
    ),
    Composed(
        "select",
        "sp_select",
        "B",
        "A single choice with typeahead: the chosen option ticked, the highlighted one heightened.",
        _select,
        """sp_select(
    ["North", "East", "South", "West"],  # or [{"value", "label", "disabled"}]
    value=State.region,
    on_change=State.set_region,  # receives the value
    label="Region",
)""",
    ),
    Composed(
        "dropdown-menu",
        "sp_dropdown_menu",
        "B",
        "Commands with shortcuts, separators, labels and a danger item; on_select(key).",
        _dropdown_menu,
        """sp_dropdown_menu(
    "Actions",
    [
        {"type": "label", "label": "Drawing"},
        {"key": "duplicate", "label": "Duplicate", "shortcut": "⌘D"},
        {"key": "export", "label": "Export SVG", "shortcut": "⌘E"},
        {"type": "separator"},
        {"key": "delete", "label": "Delete", "danger": True},
    ],
    on_select=State.run,  # receives the item's key
)""",
    ),
    Composed(
        "toast",
        "sp_toast · sp_toaster",
        "B",
        "Notices that stack in a corner and dismiss themselves; error and warning are announced assertively.",
        _toast,
        """sp_button("Save", on_click=State.save)  # sets toast_open = True

sp_toaster(
    sp_toast(
        "Saved",
        "The drawing was saved.",
        kind="success",
        open=State.toast_open,
        on_open_change=State.set_toast_open,  # False when it closes
    ),
    position="bottom-right",
)""",
    ),
    Composed(
        "trigger",
        "sp_trigger",
        "B",
        "The drawn button of every overlay: the SpButton look on a surface, and it forwards Radix's props "
        "(sp_button does not).",
        _trigger,
        """sp_trigger("Default")
sp_trigger("Primary", variant="primary")  # light hatching
sp_trigger("Danger", variant="danger")
sp_trigger("Menu", chevron=True)  # a down chevron after the text

sp_popover(rx.el.p("…"), trigger=sp_trigger("Details", chevron=True))""",
    ),
)
LEVEL_TITLES = {"A": "Level A · native markup", "B": "Level B · overlays on Radix primitives"}
LEVEL_BLURBS = {
    "A": "Native HTML underneath (a <table>, <details>, <textarea>…) or a few lines of JS; drawn with the ground's "
    "own hand-inked frames, hatched tones and heightening.",
    "B": "Behaviour — focus trapping, keyboard, dismissal, positioning, ARIA — is Radix's, at the versions Reflex "
    "already installs. They render in a portal at the end of <body>: give them ground and palette directly.",
}


def demo(slug: str, surface: dict[str, Any]) -> rx.Component:
    """One composed component, live, with the surface props of the page it is on."""
    return next(item for item in COMPOSED if item.slug == slug).render(surface)


# ── The Knight Lab timeline ──────────────────────────────────────────────────────────────

#: TimelineJS data: the two drawing techniques silverpoint is named after, and its releases.
TIMELINE_DATA: dict[str, Any] = {
    "title": {
        "text": {
            "headline": "From silverpoint to silverpoint",
            "text": "The two techniques the library draws in, and its own releases.",
        }
    },
    "events": [
        {
            "unique_id": "cennini",
            "start_date": {"year": 1400},
            "text": {
                "headline": "Cennini's handbook",
                "text": "Cennino Cennini's Il libro dell'arte describes preparing a ground with bone ash to draw on "
                "with a silver stylus.",
            },
        },
        {
            "unique_id": "durer",
            "start_date": {"year": 1484},
            "text": {
                "headline": "Dürer at thirteen",
                "text": "Albrecht Dürer draws his self-portrait in silverpoint: a line that cannot be erased.",
            },
        },
        {
            "unique_id": "graphite",
            "start_date": {"year": 1565},
            "text": {
                "headline": "The graphite pencil",
                "text": "Conrad Gessner describes a graphite pencil; it slowly displaces metalpoint.",
            },
        },
        {
            "unique_id": "herschel",
            "start_date": {"year": 1842},
            "text": {
                "headline": "The cyanotype",
                "text": "John Herschel invents the cyanotype: a white image on Prussian blue.",
            },
        },
        {
            "unique_id": "atkins",
            "start_date": {"year": 1843},
            "text": {
                "headline": "Anna Atkins",
                "text": "Photographs of British Algae: Cyanotype Impressions, the first book illustrated with "
                "photographic images.",
            },
        },
        {
            "unique_id": "sp-0-1",
            "start_date": {"year": 2026, "month": 9, "day": 25},
            "text": {"headline": "silverpoint 0.1", "text": "33 charts for React, Vue and Angular."},
        },
        {
            "unique_id": "sp-0-6",
            "start_date": {"year": 2026, "month": 10, "day": 10},
            "text": {
                "headline": "silverpoint 0.6",
                "text": "The second catalog: 60 charts, with drill-down.",
            },
        },
    ],
    "eras": [
        {
            "start_date": {"year": 1400},
            "end_date": {"year": 1600},
            "text": {"headline": "Metalpoint"},
        },
        {
            "start_date": {"year": 1842},
            "end_date": {"year": 1900},
            "text": {"headline": "Cyanotype"},
        },
    ],
}

TIMELINE_CODE = """from reflex_silverpoint_react import sp_timeline

DATA = {
    "title": {"text": {"headline": "From silverpoint to silverpoint"}},
    "events": [
        {"start_date": {"year": 1484}, "text": {"headline": "Dürer at thirteen", "text": "…"}},
        {"start_date": {"year": 1842}, "text": {"headline": "The cyanotype", "text": "…"}},
    ],
    "eras": [
        {"start_date": {"year": 1400}, "end_date": {"year": 1600}, "text": {"headline": "Metalpoint"}},
    ],
}

sp_timeline(
    DATA,  # TimelineJS data (or a TimelineData of reflex-knightlab-timeline)
    height=560,
    ground="silverpoint",
    substrate="cream",
    mode="ink",
    palette="sepia",
    inked_frames=True,  # the ground's hand-drawn frames and tone tiles
    on_change=State.on_slide,  # the unique_id of the slide shown
)"""
