"""The Reflex-only documentation of reflex-silverpoint-react 0.7: palettes, composed components, timeline.

silverpoint's React, Vue and Angular adapters do not have these, so the pages print Python only.
Their live examples run on client-side state (``ClientStateVar``): the site has no backend.
"""

from collections.abc import Callable

import reflex as rx
from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import (
    PALETTE_PROPERTIES,
    PALETTES,
    bar_chart,
    check_palette,
    contrast_ratio,
    kpi_card,
    line_chart,
    silverpoint_palette,
    sp_badge,
    sp_button,
    sp_card,
    sp_progress,
    sp_switch,
    sp_tag,
    sp_timeline,
)
from reflex_silverpoint_react.palette import CONTRAST_THRESHOLDS, DEFAULT_SUBSTRATE

from .. import datasets as ds
from .. import reflex_only as ro
from .. import site_data as sd
from .. import ui_examples as ux
from ..components.ui import c, callout, choice, code_block, ext_link, paper_card, shell, table
from .docs import QUICK_DATA, SALES, Section, live, page

EYEBROW = "Reflex (Python) only"

# ── Palettes ─────────────────────────────────────────────────────────────────────────────

SECTION_PALETTE = ClientStateVar.create("palettes_section", "sanguine")

#: The palette builder's colours, one client-side var per field (start: the sanguine preset).
BUILDER_FIELDS = ("substrate", "ink", "ink_secondary", "text", "text_muted")
BUILDER = {
    key: ClientStateVar.create(f"palette_builder_{key}", PALETTES["sanguine"].to_dict()[key])
    for key in BUILDER_FIELDS
}

PALETTE_CODE = """from reflex_silverpoint_react import PALETTES, Palette, bar_chart, check_palette, silverpoint_palette, sp_button

bar_chart(title="Orders", palette="sanguine")  # a preset
sp_button("Save", variant="primary", palette={"ink": "#2C6355"})  # a dict of fields
bar_chart(title="Orders", palette=State.palette)  # a state var holding a dict

MINE = Palette(substrate="#F2E8DC", ink="#8A3A24", ink_secondary="#6A4A3A", text="#4A2216")
assert not check_palette(MINE)  # [] when every field meets its contrast threshold

silverpoint_palette(dashboard(...), sp_card(...), palette="indigo")  # a whole section"""

STATE_PALETTE_CODE = """class Theme(rx.State):
    preset: str = "sanguine"

    @rx.var
    def palette(self) -> dict[str, str]:
        return PALETTES[self.preset].to_dict()

    @rx.event
    def set_preset(self, name: str):
        self.preset = name


sp_segmented(items=[ui_item(name, name) for name in PALETTES], value=Theme.preset, on_change=Theme.set_preset)
silverpoint_palette(dashboard(...), palette=Theme.palette)  # re-colours without re-rendering"""


def swatches(name: str) -> rx.Component:
    values = PALETTES[name].to_dict()
    return rx.el.div(
        *[
            rx.el.span(
                class_name="spw-swatch",
                style={"background": values[key]},
                title=f"{key} {values[key]}",
                aria_hidden="true",
            )
            for key in ("substrate", "ink", "ink_secondary", "text", "text_muted", "rule")
        ],
        class_name="spw-swatches",
    )


def preset_card(name: str) -> rx.Component:
    palette = PALETTES[name]
    ratio = contrast_ratio(palette.ink, palette.substrate)
    passes = not check_palette(palette)
    return paper_card(
        rx.el.div(
            rx.el.strong(c(name)),
            sp_tag("passes" if passes else "fails", tone=2, size="sm"),
            class_name="spw-row",
        ),
        rx.el.p(ro.PALETTE_BLURBS[name], class_name="spw-small"),
        swatches(name),
        line_chart(data=QUICK_DATA, x_key="hour", value_key="hits", title="Hits", height=90, palette=name),
        ux.panel(
            rx.el.div(
                sp_button("Save", variant="primary", size="sm", palette=name, id=f"palette-{name}-save"),
                sp_switch(label="Precision", size="sm", palette=name, id=f"palette-{name}-switch"),
                class_name="spw-row",
            ),
            style={"background": palette.substrate},
        ),
        rx.el.p("ink on substrate ", c(f"{ratio:.2f}:1"), class_name="spw-small"),
        class_name="spw-palette-card",
    )


def builder() -> rx.Component:
    value = {key: var.value for key, var in BUILDER.items()}
    pickers = [
        rx.el.label(
            rx.el.input(
                type="color",
                value=BUILDER[key].value,
                on_change=BUILDER[key].set_value,
                class_name="spw-color",
            ),
            rx.el.span(c(key), " ", rx.el.span(BUILDER[key].value, class_name="spw-muted")),
            class_name="spw-color-field",
        )
        for key in BUILDER_FIELDS
    ]
    code = rx.el.pre(
        rx.el.code(
            "Palette(\n",
            *[part for key in BUILDER_FIELDS for part in (f'    {key}="', BUILDER[key].value, '",\n')],
            ")",
        ),
        class_name="spw-code-live",
    )
    return rx.el.div(
        rx.el.div(*pickers, class_name="spw-color-fields"),
        live(
            rx.el.div(
                bar_chart(
                    data=SALES,
                    x_key="month",
                    value_key="units",
                    title="Units sold",
                    height=120,
                    palette=value,
                ),
                ux.panel(
                    sp_card(
                        sp_progress(label="Inked", value=64, size="sm", palette=value, id="builder-progress"),
                        rx.el.div(
                            sp_button(
                                "Primary", variant="primary", size="sm", palette=value, id="builder-primary"
                            ),
                            sp_badge(count=7, palette=value, id="builder-badge"),
                            class_name="spw-row",
                        ),
                        title="A card",
                        size="sm",
                        palette=value,
                        id="builder-card",
                    ),
                    style={"background": BUILDER["substrate"].value},
                ),
                class_name="spw-grid spw-grid-2",
            ),
        ),
        code,
    )


def palettes() -> Callable[[], rx.Component]:
    field_rows = [
        [
            c(key),
            c(prop),
            f"{CONTRAST_THRESHOLDS[key]}:1"
            if key in CONTRAST_THRESHOLDS
            else "— (what the others are measured on)"
            if key == "substrate"
            else "exempt (always outlined)",
        ]
        for key, prop in PALETTE_PROPERTIES.items()
    ]
    sections: list[Section] = [
        (
            "what",
            "Colour without re-rendering",
            [
                rx.el.p(
                    "silverpoint never writes a colour into its drawing: every stroke and fill is painted by CSS "
                    "through the ground's ",
                    c("--sp-"),
                    " custom properties. A palette sets them, so it re-colours a chart, a UI component, a dashboard, a "
                    "composed component or the timeline without re-rendering it. ",
                    c("palette="),
                    " takes a preset name, a ",
                    c("Palette"),
                    ", a dict of fields or a state var holding one.",
                ),
                code_block(PALETTE_CODE, "python"),
            ],
        ),
        (
            "presets",
            f"The {len(PALETTES)} presets",
            [
                rx.el.p(
                    "Named after historical drawing media, each verified by ",
                    c("check_palette"),
                    " against the contrast thresholds of the data model.",
                ),
                rx.el.div(
                    *[preset_card(name) for name in ro.PALETTE_NAMES], class_name="spw-grid spw-grid-3"
                ),
            ],
        ),
        (
            "section",
            "A whole section: silverpoint_palette",
            [
                rx.el.p(
                    c("silverpoint_palette(*children, palette=...)"),
                    " colours every chart, UI component, dashboard and surface inside it. The wrapper is ",
                    c("display: contents"),
                    ", so it takes no layout space, and an element's own ",
                    c("palette"),
                    " always wins over its section's. Pick a preset:",
                ),
                choice("Palette", SECTION_PALETTE, ro.PALETTE_NAMES),
                live(
                    silverpoint_palette(
                        rx.el.div(
                            kpi_card(
                                data=ds.KPI_CARD, title="Revenue", metric="thousands", delta=6.4, height=110
                            ),
                            bar_chart(
                                data=SALES, x_key="month", value_key="units", title="Units sold", height=110
                            ),
                            ux.panel(
                                sp_card(
                                    sp_progress(label="Upload", value=72, size="sm", id="section-progress"),
                                    sp_button("Publish", variant="primary", size="sm", id="section-publish"),
                                    title="Release",
                                    size="sm",
                                    id="section-card",
                                ),
                                style={"background": ro.palette_var(SECTION_PALETTE.value)["substrate"]},
                            ),
                            class_name="spw-grid spw-grid-3",
                        ),
                        palette=ro.palette_var(SECTION_PALETTE.value),
                    )
                ),
                code_block(STATE_PALETTE_CODE, "python"),
            ],
        ),
        (
            "builder",
            "Build your own",
            [
                rx.el.p(
                    "Unset fields keep the ground's own colour. Pick the five that matter most; the preview reads them "
                    "as a dict, as a state var would. Then measure the result with ",
                    c("check_palette"),
                    ": it returns one message per field below its threshold, and ",
                    c("[]"),
                    " when the palette passes (only hex colours can be measured; a palette without ",
                    c("substrate"),
                    f" is measured against cream, {DEFAULT_SUBSTRATE}).",
                ),
                builder(),
            ],
        ),
        (
            "fields",
            "Fields",
            [
                table(["Field", "Custom property", "Minimum contrast on the substrate"], field_rows),
                rx.el.p(
                    c("Palette.to_dict()"),
                    ", ",
                    c("to_css()"),
                    " and ",
                    c("merged(**changes)"),
                    " convert and copy palettes; ",
                    c("Palette.from_dict()"),
                    " rejects unknown fields. ",
                    c("palette_css(palette)"),
                    " returns the declarations as a style dict, and ",
                    c("contrast_ratio(fg, bg)"),
                    " is the WCAG ratio of two hex colours.",
                ),
            ],
        ),
        (
            "rules",
            "Rules",
            [
                rx.el.ul(
                    rx.el.li(
                        rx.el.strong("Monochrome by design."),
                        " Tone is built from hatch density, so a chart has two inks — ",
                        c("ink"),
                        " for the main series and ",
                        c("ink_secondary"),
                        " for the second — never a colour per series.",
                    ),
                    rx.el.li(
                        c("precision"),
                        " mode and the system's high-contrast modes still apply on top of any palette.",
                    ),
                    rx.el.li(
                        c("silverpoint_provider"),
                        " takes no palette (it renders no element): use ",
                        c("silverpoint_palette"),
                        ".",
                    ),
                    rx.el.li(
                        "Overlays (modal, drawer, popover, tooltip, select, menu, toast) render in a portal outside "
                        "any section: give them ",
                        c("palette"),
                        " directly.",
                    ),
                ),
                callout(
                    "Palettes are a Reflex feature of reflex-silverpoint-react 0.7. In React, Vue and Angular, set the "
                    "same --sp- custom properties in CSS (the Tailwind preset names them as tokens).",
                    kind="note",
                ),
            ],
        ),
    ]
    return page(
        "/docs/palettes",
        "Palettes",
        f"New in reflex-silverpoint-react {ro.REFLEX_VERSION}. Re-colour every chart, UI component, dashboard and "
        "composed component with six presets named after drawing media, or a palette of your own, checked against "
        "silverpoint's contrast thresholds.",
        sections,
        eyebrow=EYEBROW,
    )


# ── Composed components ──────────────────────────────────────────────────────────────────

COMPOSED_GROUND = ClientStateVar.create("composed_ground", "silverpoint")
COMPOSED_SUBSTRATE = ClientStateVar.create("composed_substrate", "cream")
COMPOSED_MODE = ClientStateVar.create("composed_mode", "ink")
COMPOSED_PALETTE = ClientStateVar.create("composed_palette", "none")


def composed_surface() -> dict:
    return {
        "ground": COMPOSED_GROUND.value,
        "substrate": COMPOSED_SUBSTRATE.value,
        "mode": COMPOSED_MODE.value,
        "palette": ro.palette_var(COMPOSED_PALETTE.value),
    }


def composed_entry(item: ro.Composed) -> Section:
    return (
        item.slug,
        item.name,
        [
            rx.el.p(item.summary),
            paper_card(
                ux.panel(
                    ro.demo(item.slug, composed_surface()),
                    ground=COMPOSED_GROUND.value,
                    substrate=COMPOSED_SUBSTRATE.value,
                ),
                class_name="spw-live",
            ),
            code_block(item.code, "python"),
        ],
    )


def composed() -> Callable[[], rx.Component]:
    level_a = [i for i in ro.COMPOSED if i.level == "A"]
    level_b = [i for i in ro.COMPOSED if i.level == "B"]
    overview: Section = (
        "about",
        "Drawn with silverpoint's own pieces",
        [
            rx.el.p(
                c("@silverpoint/grounds/ui.css"),
                " draws its hand-inked frames, hatched tones and heightening on any element that follows its markup "
                "contract. These components are built in Reflex on that contract, so they are drawn with exactly the "
                "same pieces as the Sp components. ",
                c("sp_surface"),
                " and ",
                c("sp_glyph"),
                " are the building blocks, for components of your own.",
            ),
            callout(
                "They are Reflex-only (silverpoint's React, Vue and Angular adapters do not have them) and, unlike the "
                "Sp components, they do not read silverpoint_provider: pass ground, substrate, mode and palette "
                "explicitly.",
                kind="warn",
            ),
            table(
                ["Level", "Components"],
                [
                    [
                        ro.LEVEL_TITLES["A"],
                        rx.el.span(
                            *[rx.el.a(i.name, href=f"#{i.slug}", class_name="spw-chip") for i in level_a]
                        ),
                    ],
                    [
                        ro.LEVEL_TITLES["B"],
                        rx.el.span(
                            *[rx.el.a(i.name, href=f"#{i.slug}", class_name="spw-chip") for i in level_b]
                        ),
                    ],
                ],
            ),
            rx.el.p("Every demo on this page follows these controls:"),
            rx.el.div(
                choice("Ground", COMPOSED_GROUND, sd.GROUNDS),
                choice("Substrate", COMPOSED_SUBSTRATE, sd.SUBSTRATES),
                choice("Mode", COMPOSED_MODE, sd.MODES),
                choice("Palette", COMPOSED_PALETTE, ro.PALETTE_CHOICES),
                class_name="spw-controls",
            ),
        ],
    )
    surface_props: Section = (
        "surface",
        "Surface props",
        [
            rx.el.p(
                "Every builder takes ",
                c("ground"),
                ", ",
                c("substrate"),
                ", ",
                c("mode"),
                ", ",
                c("size"),
                " (sm, md, lg), ",
                c("seed"),
                ", ",
                c("palette"),
                ", ",
                c("id"),
                ", ",
                c("class_name"),
                " and ",
                c("style"),
                ". Values and lists (rows, items, options) can be static or state vars. Value components (",
                c("sp_textarea"),
                ", ",
                c("sp_input_number"),
                ", ",
                c("sp_select"),
                ", ",
                c("sp_pagination"),
                ") send the new value itself to ",
                c("on_change"),
                ", never a DOM event. Overlays are controlled with ",
                c("open"),
                " + ",
                c("on_open_change"),
                ", or uncontrolled with ",
                c("default_open"),
                ".",
            ),
        ],
    )
    sections: list[Section] = [overview]
    sections += [composed_entry(i) for i in level_a]
    sections += [composed_entry(i) for i in level_b]
    sections.append(surface_props)
    return page(
        "/docs/composed",
        "Composed components",
        f"New in reflex-silverpoint-react {ro.REFLEX_VERSION}. {len(ro.COMPOSED)} components built in Reflex on "
        "silverpoint's frames and tones: tables, pagination, statistics, collapse panels, and overlays — modal, "
        "drawer, popover, tooltip, select, menu and toast — on Radix primitives.",
        sections,
        eyebrow=EYEBROW,
    )


# ── Timeline ─────────────────────────────────────────────────────────────────────────────

TIMELINE_GROUND = ClientStateVar.create("timeline_ground", "silverpoint")
TIMELINE_SUBSTRATE = ClientStateVar.create("timeline_substrate", "cream")
TIMELINE_MODE = ClientStateVar.create("timeline_mode", "ink")
TIMELINE_PALETTE = ClientStateVar.create("timeline_palette", "none")
TIMELINE_FRAMES = ClientStateVar.create("timeline_frames", "inked")
TIMELINE_SLIDE = ClientStateVar.create("timeline_slide", "")


def live_timeline(**props) -> rx.Component:
    return sp_timeline(
        ro.TIMELINE_DATA,
        {"start_at_slide": 1, "hash_bookmark": False},
        height=560,
        ground=TIMELINE_GROUND.value,
        substrate=TIMELINE_SUBSTRATE.value,
        mode=TIMELINE_MODE.value,
        palette=ro.palette_var(TIMELINE_PALETTE.value),
        inked_frames=TIMELINE_FRAMES.value == "inked",
        **props,
    )


def timeline() -> Callable[[], rx.Component]:
    sections: list[Section] = [
        (
            "live",
            "Try it",
            [
                rx.el.p(
                    "The Knight Lab timeline on every ground, mode and palette. Use the arrows, the markers or the "
                    "zoom buttons."
                ),
                rx.el.div(
                    choice("Ground", TIMELINE_GROUND, sd.GROUNDS),
                    choice("Substrate", TIMELINE_SUBSTRATE, sd.SUBSTRATES),
                    choice("Mode", TIMELINE_MODE, sd.MODES),
                    choice("Palette", TIMELINE_PALETTE, ro.PALETTE_CHOICES),
                    choice("Frames", TIMELINE_FRAMES, ("inked", "skin only")),
                    class_name="spw-controls",
                ),
                rx.el.div(live_timeline(on_change=TIMELINE_SLIDE.set_value), class_name="spw-timeline-wrap"),
                rx.el.p(
                    "on_change: ",
                    c(rx.cond(TIMELINE_SLIDE.value, TIMELINE_SLIDE.value, "—")),
                    class_name="spw-small",
                ),
            ],
        ),
        (
            "install",
            "Install",
            [
                rx.el.p(
                    c("sp_timeline"),
                    " wraps ",
                    ext_link(
                        "reflex-knightlab-timeline", "https://github.com/ecrespo/reflex-knightlab-timeline"
                    ),
                    ", an optional extra:",
                ),
                shell('pip install "reflex-silverpoint-react[timeline]"'),
                rx.el.p(
                    c("timeline_available()"),
                    " tells you whether it is installed; without it, ",
                    c("sp_timeline"),
                    " raises an ImportError that says how to add it.",
                ),
            ],
        ),
        ("code", "In your code", [code_block(ro.TIMELINE_CODE, "python")]),
        (
            "layers",
            "Two layers: the skin and the hand",
            [
                rx.el.ul(
                    rx.el.li(
                        rx.el.strong("The skin"),
                        " replaces TimelineJS's colours, type and rules with the ground's ",
                        c("--sp-"),
                        " properties: the substrate, the inks, EB Garamond, hairline rules, eras hatched by density, "
                        "the current marker heightened.",
                    ),
                    rx.el.li(
                        rx.el.strong("The hand"),
                        " reads the ground's own frame and tone masks from hidden probes and lays them on the markers, "
                        "eras and menubar, so they are drawn with the same pieces as the Sp components. ",
                        c("inked_frames=False"),
                        " keeps the skin only; ",
                        c("precision"),
                        ", ",
                        c("cyanotype"),
                        " and forced colours fall back to exact rules by themselves.",
                    ),
                )
            ],
        ),
        (
            "props",
            "Props and events",
            [
                table(
                    ["Prop", "Default", ""],
                    [
                        [
                            c("data"),
                            "—",
                            "TimelineJS data (title, events, eras, scale), a TimelineData, or a state var.",
                        ],
                        [
                            c("options"),
                            "{}",
                            "TimelineJS options; font and theme are ignored (the skin sets both).",
                        ],
                        [c("height"), "600", "Height of the whole timeline (px or a CSS length)."],
                        [c("inked_frames"), "True", "Lays the ground's hand-drawn frames and tone tiles."],
                        [c("card"), "True", "Frames the whole timeline as a card."],
                        [c("ground, substrate, mode, palette, seed"), "—", "The surface props."],
                        [c("on_change"), "—", "The unique_id of the slide shown."],
                        [c("on_loaded"), "—", "TimelineJS's loaded payload."],
                        [
                            c("on_nav_next, on_nav_previous, on_zoom_in, on_zoom_out, on_back_to_start"),
                            "—",
                            "The timeline's navigation.",
                        ],
                    ],
                ),
                callout(
                    "TimelineJS requests its icon font from a relative path (/css/icons/tl-icons.*). Where that path "
                    "answers with HTML, the browser logs font-decoding warnings and the buttons lose their icons. Copy "
                    "tl-icons.woff2, .woff and .ttf from @knight-lab/timelinejs/dist/css/icons into your app's "
                    "assets/css/icons/, as this site does. For a light list of events, use ",
                    c("sp_timeline_list"),
                    ".",
                    kind="note",
                ),
            ],
        ),
    ]
    return page(
        "/docs/timeline",
        "Timeline",
        f"New in reflex-silverpoint-react {ro.REFLEX_VERSION}. sp_timeline draws Knight Lab's TimelineJS in "
        "silverpoint: a skin on the ground's colours and type, and the ground's own hand-inked frames and tone tiles "
        "on its markers, eras and buttons.",
        sections,
        eyebrow=EYEBROW,
    )


def register(app: rx.App) -> None:
    pages: list[tuple[Callable[[], rx.Component], str, str]] = [
        (palettes(), "/docs/palettes", "Palettes"),
        (composed(), "/docs/composed", "Composed components"),
        (timeline(), "/docs/timeline", "Timeline"),
    ]
    for component, route, title in pages:
        app.add_page(component, route=route, title=f"{title} · silverpoint docs")
