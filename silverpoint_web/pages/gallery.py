"""The gallery: every enabled chart, live, with the ground controls."""

import reflex as rx
from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import CHARTS, FAMILIES

from .. import site_data as sd
from ..components.layout import shell_page
from ..components.ui import select
from ..examples import live_props

GROUND = ClientStateVar.create("gallery_ground", "silverpoint")
SUBSTRATE = ClientStateVar.create("gallery_substrate", "cream")
MODE = ClientStateVar.create("gallery_mode", "ink")
HATCH = ClientStateVar.create("gallery_hatch", "tile")


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


def gallery() -> rx.Component:
    return shell_page(
        rx.el.div(
            rx.el.p("Gallery", class_name="spw-eyebrow"),
            rx.el.h1("Every chart, drawn live"),
            rx.el.p(
                f"The {len(CHARTS)} charts enabled in silverpoint {sd.LATEST.version}, in {len(FAMILIES)} families, each "
                "drawn from the same data as its example code. Change the ground, the substrate, the mode or the hatch "
                "fill: the geometry of the data never moves, only the drawing does.",
                class_name="spw-lede",
            ),
            class_name="spw-page-head",
        ),
        rx.el.div(
            select("Ground", GROUND, sd.GROUNDS),
            select("Substrate", SUBSTRATE, sd.SUBSTRATES),
            select("Mode", MODE, sd.MODES),
            select("Hatch fill", HATCH, sd.HATCH_FILLS),
            rx.el.p(
                "cyanotype has one substrate, prussian, whatever you pick here.",
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
        wide=True,
    )


def register(app: rx.App) -> None:
    app.add_page(
        gallery,
        route="/gallery",
        title="Gallery · silverpoint",
        description=f"All {len(CHARTS)} silverpoint charts, live, with ground, substrate and mode controls.",
    )
