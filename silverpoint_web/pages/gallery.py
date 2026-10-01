"""The gallery: every enabled chart and every UI component, live, with the ground controls."""

import reflex as rx
from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import CHARTS, FAMILIES, UI_COMPONENTS, UI_GROUPS

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
        ),
        rx.el.p(info.summary, class_name="spw-card-summary"),
        class_name="spw-card spw-gallery-card spw-ui-card",
    )


def gallery() -> rx.Component:
    return shell_page(
        rx.el.div(
            rx.el.p("Gallery", class_name="spw-eyebrow"),
            rx.el.h1("Every chart and component, drawn live"),
            rx.el.p(
                f"The {len(CHARTS)} charts enabled in silverpoint {sd.LATEST.version}, in {len(FAMILIES)} families, and "
                f"the {len(UI_COMPONENTS)} UI components, each drawn from the same props as its example code. Change the "
                "ground, the substrate, the mode or the hatch fill: the geometry of the data never moves, only the "
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
            rx.el.p(
                "cyanotype has one substrate, prussian, whatever you pick here. Hatch fill applies to charts, "
                "size to UI components.",
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
            class_name="spw-family-nav",
            aria_label="Families",
        ),
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
                "New in 0.3: interface components with frames hand-drawn by each ground's own inker. Each is a native "
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
        wide=True,
    )


def register(app: rx.App) -> None:
    app.add_page(
        gallery,
        route="/gallery",
        title="Gallery · silverpoint",
        description=(
            f"All {len(CHARTS)} silverpoint charts and {len(UI_COMPONENTS)} UI components, live, with ground, "
            "substrate and mode controls."
        ),
    )
