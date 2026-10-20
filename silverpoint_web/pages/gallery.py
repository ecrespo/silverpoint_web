"""The gallery: every chart, UI component and composed component, live, with the ground controls."""

import reflex as rx
from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import (
    CHARTS,
    FAMILIES,
    UI_COMPONENTS,
    UI_GROUPS,
    silverpoint_palette,
    sp_timeline,
)

from .. import composed_code as cc
from .. import reflex_only as ro
from .. import site_data as sd
from .. import ui_examples as ux
from ..components.layout import shell_page
from ..components.ui import choice
from ..examples import live_props

GROUND = ClientStateVar.create("gallery_ground", "silverpoint")
SUBSTRATE = ClientStateVar.create("gallery_substrate", "cream")
MODE = ClientStateVar.create("gallery_mode", "ink")
HATCH = ClientStateVar.create("gallery_hatch", "tile")
SIZE = ClientStateVar.create("gallery_size", "md")
PALETTE = ClientStateVar.create("gallery_palette", "none")


def palette() -> rx.Var:
    """The palette picked in the controls, as a dict var ("none" is an empty dict)."""
    return ro.palette_var(PALETTE.value)


def substrate_style() -> dict:
    """A UI sample's background: the palette's substrate, else the ground's own (from its class)."""
    return {"background": palette()["substrate"]}


def family_anchor(family: str) -> str:
    return family.lower().replace(" & ", "-")


def gallery_card(info) -> rx.Component:
    props = live_props(info)
    props.update(
        ground=GROUND.value,
        substrate=SUBSTRATE.value,
        mode=MODE.value,
        hatch_fill=HATCH.value,
        footer_right="silverpoint",
    )
    return rx.el.div(
        rx.el.div(
            rx.el.a(info.chart, href=f"/charts/{info.slug}"),
            rx.el.a("code →", href=f"/charts/{info.slug}#example", class_name="spw-card-code"),
            class_name="spw-card-title",
        ),
        info.factory(**props),
        rx.el.p(info.summary, class_name="spw-card-summary"),
        class_name="spw-card spw-gallery-card",
    )


def ui_card(info) -> rx.Component:
    """A UI component in its first declared state, on the gallery's ground."""
    state = info.states[0]
    return rx.el.div(
        rx.el.div(
            rx.el.a(info.name, href=f"/components/{info.slug}"),
            rx.el.a("code →", href=f"/components/{info.slug}#states", class_name="spw-card-code"),
            class_name="spw-card-title",
        ),
        ux.panel(
            ux.live(
                info.slug,
                state,
                id=f"gallery-{info.slug}",
                ground=GROUND.value,
                substrate=SUBSTRATE.value,
                mode=MODE.value,
                size=SIZE.value,
            ),
            ground=GROUND.value,
            substrate=SUBSTRATE.value,
            style=substrate_style(),
        ),
        rx.el.p(info.summary, class_name="spw-card-summary"),
        class_name="spw-card spw-gallery-card spw-ui-card",
    )


def composed_card(item: ro.Composed) -> rx.Component:
    """A Reflex composed component, on the gallery's ground and palette (overlays take it directly)."""
    surface = {
        "ground": GROUND.value,
        "substrate": SUBSTRATE.value,
        "mode": MODE.value,
        "palette": palette(),
    }
    return rx.el.div(
        rx.el.div(
            rx.el.a(
                item.name if item.slug == "trigger" else cc.ADAPTER_NAMES[item.slug][0],
                href=f"/docs/composed#{item.slug}" if item.slug == "trigger" else f"/components/{item.slug}",
            ),
            rx.el.a("code →", href=f"/docs/composed#{item.slug}", class_name="spw-card-code"),
            class_name="spw-card-title",
        ),
        ux.panel(
            ro.demo(item.slug, surface),
            ground=GROUND.value,
            substrate=SUBSTRATE.value,
            style=substrate_style(),
        ),
        rx.el.p(item.summary, class_name="spw-card-summary"),
        class_name="spw-card spw-gallery-card spw-ui-card"
        + (" spw-card-wide" if item.slug == "table" else ""),
    )


def gallery() -> rx.Component:
    return shell_page(
        rx.el.div(
            rx.el.p("Gallery", class_name="spw-eyebrow"),
            rx.el.h1("Every chart and component, drawn live"),
            rx.el.p(
                f"The {len(CHARTS)} charts of silverpoint {sd.LATEST.version}, in {len(FAMILIES)} families, the "
                f"{len(UI_COMPONENTS)} UI components of 0.3, and the composed components, overlays and timeline new in "
                f"0.7 (drawn here by reflex-silverpoint-react {ro.REFLEX_VERSION}), each from the same props as its "
                "example code. Change the ground, the "
                "substrate, the mode, the hatch fill or the palette: the geometry of the data never moves, only the "
                "drawing does. The controls themselves are silverpoint's SpSegmented.",
                class_name="spw-lede",
            ),
            class_name="spw-page-head",
        ),
        rx.el.div(
            choice("Ground", GROUND, sd.GROUNDS),
            choice("Substrate", SUBSTRATE, sd.SUBSTRATES),
            choice("Mode", MODE, sd.MODES),
            choice("Hatch fill", HATCH, sd.HATCH_FILLS),
            choice("UI size", SIZE, sd.UI_SIZES),
            choice("Palette", PALETTE, ro.PALETTE_CHOICES),
            rx.el.p(
                "cyanotype has one substrate, prussian, whatever you pick here. Hatch fill applies to charts, "
                "size to UI components. Palettes (new in 0.7) re-colour everything; none keeps the ground's own "
                "inks.",
                class_name="spw-controls-note",
            ),
            class_name="spw-controls",
        ),
        rx.el.nav(
            *[
                rx.el.a(
                    f"{family} · {sum(1 for c in CHARTS if c.family == family)}",
                    href=f"#{family_anchor(family)}",
                )
                for family in FAMILIES
            ],
            rx.el.a(
                f"UI components · {len(UI_COMPONENTS)}", href="#ui-components", class_name="spw-family-ui"
            ),
            rx.el.a(
                f"Composed · {len(cc.REFERENCE)}", href="#composed-components", class_name="spw-family-ui"
            ),
            rx.el.a("Timeline", href="#timeline", class_name="spw-family-ui"),
            class_name="spw-family-nav",
            aria_label="Families",
        ),
        silverpoint_palette(*sections(), palette=palette()),
        wide=True,
    )


def sections() -> list[rx.Component]:
    return [
        *[
            rx.el.section(
                rx.el.h2(
                    family,
                    rx.el.span(f" · {sum(1 for c in CHARTS if c.family == family)}", class_name="spw-count"),
                    id=family_anchor(family),
                ),
                rx.el.p(sd.FAMILY_BLURBS.get(family, ""), class_name="spw-family-blurb"),
                rx.el.div(*[gallery_card(c) for c in CHARTS if c.family == family], class_name="spw-grid"),
                class_name="spw-family",
            )
            for family in FAMILIES
        ],
        rx.el.section(
            rx.el.h2(
                "UI components",
                rx.el.span(f" · {len(UI_COMPONENTS)}", class_name="spw-count"),
                id="ui-components",
            ),
            rx.el.p(
                "Since 0.3: interface components with frames hand-drawn by each ground's own inker. Each is a native "
                "control underneath: try them, they work. ",
                rx.el.a("All their states and props →", href="/components"),
                class_name="spw-family-blurb",
            ),
            *[
                rx.el.div(
                    rx.el.h3(title, id=f"ui-{group}"),
                    rx.el.p(ux.GROUP_BLURBS[group], class_name="spw-family-blurb"),
                    rx.el.div(*[ui_card(i) for i in ux.components_in(group)], class_name="spw-grid"),
                )
                for group, title in UI_GROUPS
            ],
            class_name="spw-family",
        ),
        rx.el.section(
            rx.el.h2(
                "Composed components",
                rx.el.span(f" · {len(cc.REFERENCE)}", class_name="spw-count"),
                id="composed-components",
            ),
            rx.el.p(
                f"New in {sd.LATEST.version}: components built on silverpoint's own frames, tones and heightening, in "
                "React, Vue, Angular and Reflex. The composed ones are native markup; the overlays open from a "
                "trigger you write. ",
                rx.el.a("Their code in four frameworks →", href="/docs/composed"),
                class_name="spw-family-blurb",
            ),
            *[
                rx.el.div(
                    rx.el.h3(ro.LEVEL_TITLES[level], id=f"composed-{level.lower()}"),
                    rx.el.p(ro.LEVEL_BLURBS[level], class_name="spw-family-blurb"),
                    rx.el.div(
                        *[composed_card(i) for i in cc.REFERENCE if i.level == level], class_name="spw-grid"
                    ),
                )
                for level in ("A", "B")
            ],
            class_name="spw-family",
        ),
        rx.el.section(
            rx.el.h2("Timeline", id="timeline"),
            rx.el.p(
                f"New in {sd.LATEST.version}: Knight Lab's TimelineJS drawn in silverpoint, on the gallery's ground, "
                "mode and palette. ",
                rx.el.a("SpTimeline →", href="/docs/timeline"),
                class_name="spw-family-blurb",
            ),
            rx.el.div(
                sp_timeline(
                    ro.TIMELINE_DATA,
                    {"hash_bookmark": False},
                    height=520,
                    ground=GROUND.value,
                    substrate=SUBSTRATE.value,
                    mode=MODE.value,
                    palette=palette(),
                ),
                class_name="spw-timeline-wrap",
            ),
            class_name="spw-family",
        ),
    ]


def register(app: rx.App) -> None:
    app.add_page(
        gallery,
        route="/gallery",
        title="Gallery · silverpoint",
        description=(
            f"All {len(CHARTS)} silverpoint charts, its UI, composed and overlay components and the timeline, "
            "live, with ground, substrate, mode and palette controls."
        ),
    )
