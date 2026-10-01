"""The UI components concept page: /docs/ui.

Its "Try it" panel is built from the components themselves, bound to client-side state: a
segmented control re-grounds the panel, a switch turns the inking off, a slider drives a gauge
and a progress bar, tabs swap the chart. Nothing reaches a server.
"""

from typing import Any

import reflex as rx
from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import (
    UI_COMMON_PROPS,
    UI_COMPONENTS,
    UI_GROUPS,
    bar_chart,
    gauge_arc,
    line_chart,
    sp_alert,
    sp_badge,
    sp_button,
    sp_card,
    sp_divider,
    sp_progress,
    sp_rate,
    sp_segmented,
    sp_slider,
    sp_steps,
    sp_switch,
    sp_tab_panel,
    sp_tabs,
    sp_tag,
    step_item,
    ui_item,
)

from .. import datasets as ds
from .. import site_data as sd
from .. import ui_examples as ux
from ..components.ui import c, callout, framework_tabs, props_table, table
from .docs import live, page

TRY_GROUND = ClientStateVar.create("ui_try_ground", "silverpoint")
TRY_PRECISION = ClientStateVar.create("ui_try_precision", False)
TRY_LOAD = ClientStateVar.create("ui_try_load", 64)
TRY_VIEW = ClientStateVar.create("ui_try_view", "traffic")
TRY_RATE = ClientStateVar.create("ui_try_rate", 4)

STATIC_CODE = """from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import gauge_arc, sp_slider

# A site exported with enable_state=False has no backend: keep the value in the browser.
LOAD = ClientStateVar.create("load", 64)

sp_slider(label="Load", value=LOAD.value, on_change=LOAD.set_value, marks=[0, 25, 50, 75, 100])
gauge_arc(percent=LOAD.value, caption="Load", title="Capacity")"""


def try_it() -> rx.Component:
    """A control panel made of the UI components, driving charts and other components."""
    ground = TRY_GROUND.value
    mode = rx.cond(TRY_PRECISION.value, "precision", "ink")
    shared: dict[str, Any] = {"ground": ground, "mode": mode}
    controls = rx.el.div(
        sp_segmented(
            items=[ui_item(g, g) for g in sd.GROUNDS],
            label="Ground",
            name="ground",
            value=ground,
            on_change=TRY_GROUND.set_value,
            id="try-ground",
            **shared,
        ),
        sp_switch(
            label="Precision",
            name="precision",
            checked=TRY_PRECISION.value,
            on_change=TRY_PRECISION.set_value,
            id="try-precision",
            **shared,
        ),
        sp_slider(
            label="Load",
            name="load",
            value=TRY_LOAD.value,
            on_change=TRY_LOAD.set_value,
            marks=[0, 25, 50, 75, 100],
            id="try-load",
            **shared,
        ),
        sp_rate(
            label="How does it look?",
            name="rating",
            value=TRY_RATE.value,
            on_change=TRY_RATE.set_value,
            id="try-rate",
            **shared,
        ),
        class_name="spw-try-controls",
    )
    output = rx.el.div(
        sp_tabs(
            sp_tab_panel(
                line_chart(
                    data=ds.OPS_HOURLY, x_key="hour", value_key="hits", title="Traffic", height=150, **shared
                ),
                value="traffic",
            ),
            sp_tab_panel(
                bar_chart(
                    data=ds.OPS_HOURLY, x_key="hour", value_key="errors", title="Errors", height=150, **shared
                ),
                value="errors",
            ),
            sp_tab_panel(
                gauge_arc(percent=TRY_LOAD.value, caption="Load", title="Capacity", height=150, **shared),
                value="capacity",
            ),
            items=[
                ui_item("traffic", "Traffic"),
                ui_item("errors", "Errors"),
                ui_item("capacity", "Capacity"),
            ],
            label="Views",
            value=TRY_VIEW.value,
            on_change=TRY_VIEW.set_value,
            id="try-views",
            **shared,
        ),
        sp_progress(label="Load", value=TRY_LOAD.value, id="try-progress", **shared),
        rx.el.div(
            sp_badge(sp_tag("rating", tone=3, **shared), count=TRY_RATE.value, id="try-badge", **shared),
            sp_tag(mode, tone=2, id="try-mode", **shared),
            sp_tag(ground, tone=1, id="try-ground-tag", **shared),
            class_name="spw-row",
        ),
        rx.cond(
            TRY_LOAD.value > 85,
            sp_alert(
                "Above 85: add capacity before the evening peak.", kind="warning", title="High load", **shared
            ),
            sp_alert("Move the slider above 85.", kind="success", title="Load is fine", **shared),
        ),
        class_name="spw-try-output",
    )
    return rx.el.form(
        controls,
        output,
        on_submit=rx.prevent_default,
        class_name=rx.cond(
            TRY_GROUND.value == "cyanotype",
            "spw-try spw-ui-sample sp-ground-cyanotype",
            "spw-try spw-ui-sample sp-ground-silverpoint",
        ),
        data_substrate=rx.cond(TRY_GROUND.value == "cyanotype", "prussian", "cream"),
    )


def catalog_rows() -> list[list[Any]]:
    return [
        [
            rx.el.strong(title),
            rx.el.span(
                *[
                    item
                    for i, info in enumerate(ux.components_in(group))
                    for item in ((", " if i else ""), rx.el.a(info.name, href=f"/components/{info.slug}"))
                ]
            ),
            ux.GROUP_BLURBS[group],
        ]
        for group, title in UI_GROUPS
    ]


def ui_docs():
    return page(
        "/docs/ui",
        "UI components",
        f"New in 0.3. {len(UI_COMPONENTS)} interface components drawn as the charts are: frames hand-drawn by each "
        "ground's own inker, tone laid as hatching (silverpoint) or as the weight of an exact white line (cyanotype), "
        "and a native control underneath every one. The controls on this site are these components.",
        [
            (
                "try",
                "Try it",
                [
                    rx.el.p(
                        "Every control here is a silverpoint component bound to client-side state: the segmented "
                        "control re-grounds the panel, the switch turns the inking off on the components and the charts "
                        "alike, the slider drives the gauge and the progress bar.",
                    ),
                    try_it(),
                ],
            ),
            (
                "catalog",
                "The catalog",
                [
                    table(["Group", "Components", ""], catalog_rows()),
                    rx.el.p(
                        rx.el.a("The UI component reference", href="/components"),
                        " has a page per component with every declared state live on both grounds, its code in the four "
                        "frameworks and its props.",
                    ),
                ],
            ),
            (
                "install",
                "Install and import",
                [
                    rx.el.p(
                        "The UI components ship in the same adapter packages as the charts, on the ",
                        c("ui"),
                        " subpath. Their stylesheet is opt-in: import ",
                        c("@silverpoint/grounds/ui.css"),
                        " once, beside ",
                        c("styles.css"),
                        ". The Angular adapter takes ",
                        c("@angular/forms"),
                        " as a peer, for its ControlValueAccessors.",
                    ),
                    framework_tabs(ux.INSTALL_CODE),
                ],
            ),
            (
                "values",
                "Values, forms and events",
                [
                    rx.el.p(
                        "Value components (Input, Checkbox, RadioGroup, Switch, Slider, Rate, Segmented, Tabs) are "
                        "controlled or uncontrolled. The change event carries the new value itself (a string, a bool "
                        "or a number), never a DOM event. The native inputs submit under their ",
                        c("name"),
                        ", so a plain form works. Tag and Alert take ",
                        c("closable"),
                        " and emit a close event.",
                    ),
                    framework_tabs(ux.FORM_CODE),
                    table(
                        ["Framework", "Controlled", "Uncontrolled", "Close"],
                        [
                            [
                                "React",
                                c("value / checked + onChange"),
                                c("defaultValue / defaultChecked"),
                                c("onClose"),
                            ],
                            ["Vue", c("v-model"), c("default-value"), c("@close")],
                            [
                                "Angular",
                                c("[(value)], ngModel, formControl"),
                                c("[defaultValue]"),
                                c("(close)"),
                            ],
                            [
                                "Reflex",
                                c("value= / checked= + on_change="),
                                c("default_value= / default_checked="),
                                c("on_close="),
                            ],
                        ],
                    ),
                    rx.el.p(
                        "Items are plain objects: ",
                        c("{ key, label, disabled? }"),
                        " for Tabs, Segmented and RadioGroup, ",
                        c("{ key, title, description?, status? }"),
                        " for Steps. In Reflex, ",
                        c("ui_item(key, label, disabled=False)"),
                        " and ",
                        c("step_item(key, title, description=None, status=None)"),
                        " build them.",
                    ),
                ],
            ),
            (
                "grounds",
                "Grounds, modes and sizes",
                [
                    rx.el.p(
                        "Every UI component takes ",
                        c("ground"),
                        ", ",
                        c("substrate"),
                        ", ",
                        c("mode"),
                        ", ",
                        c("seed"),
                        " and ",
                        c("size"),
                        ". Like a chart's, they fall back to the dashboard the component sits in, then to the provider. ",
                        c("size"),
                        " is ",
                        c("sm"),
                        ", ",
                        c("md"),
                        " (the default) or ",
                        c("lg"),
                        ". The frame's hand derives from ",
                        c("id"),
                        ", so the same id draws the same frame on server and client.",
                    ),
                    live(
                        rx.el.div(
                            *[
                                ux.panel(
                                    sp_button(f'size="{s}"', size=s, variant="primary", id=f"size-{s}"),
                                    sp_steps(
                                        items=[
                                            step_item("draw", "Draw"),
                                            step_item("ink", "Ink"),
                                            step_item("ship", "Ship"),
                                        ],
                                        current=1,
                                        label="Release",
                                        size=s,
                                        id=f"steps-{s}",
                                    ),
                                )
                                for s in sd.UI_SIZES
                            ],
                            class_name="spw-grid spw-grid-3",
                        )
                    ),
                    rx.el.div(
                        *[
                            ux.panel(
                                sp_card(
                                    sp_divider(text=label, id=f"div-{key}", **props),
                                    "Revenue rose through the afternoon and eased at night.",
                                    title="Revenue",
                                    extra="Q3",
                                    id=f"card-{key}",
                                    **props,
                                ),
                                ground=props.get("ground", "silverpoint"),
                                substrate=props.get("substrate", "cream"),
                            )
                            for key, label, props in (
                                ("ink", "ink", {}),
                                ("precision", "precision", {"mode": "precision"}),
                                ("ochre", "ochre", {"substrate": "ochre"}),
                                ("cyanotype", "cyanotype", {"ground": "cyanotype", "substrate": "prussian"}),
                            )
                        ],
                        class_name="spw-grid spw-grid-4",
                    ),
                ],
            ),
            (
                "accessibility",
                "Keyboard and accessibility",
                [
                    rx.el.ul(
                        rx.el.li(
                            "A native element underneath: a ",
                            c("<button>"),
                            ", an ",
                            c("<input>"),
                            ", a ",
                            c("<fieldset>"),
                            " of radios. Forms, autofill and assistive technology work as with plain HTML.",
                        ),
                        rx.el.li(
                            "Tabs, Segmented, RadioGroup and Rate follow the WAI-ARIA patterns: one tab stop, the arrows "
                            "move (and select), Home and End jump, disabled items are skipped, and ",
                            c('dir="rtl"'),
                            " mirrors the arrows.",
                        ),
                        rx.el.li(
                            "One exact focus ring, drawn on the item, the box or the thumb; at most one heightened "
                            "element per component."
                        ),
                        rx.el.li(
                            "Alerts are ",
                            c("alert"),
                            " (warning, error) or ",
                            c("status"),
                            " (info, success); Progress is a ",
                            c("progressbar"),
                            "; Skeleton sets ",
                            c("aria-busy"),
                            ". An indeterminate Progress only moves when reduced motion is off.",
                        ),
                        rx.el.li(
                            "Verified on the example apps with axe (A/AA), keyboard, native submit, target size and "
                            "reduced motion."
                        ),
                    ),
                ],
            ),
            (
                "ssr",
                "Server rendering",
                [
                    rx.el.p(
                        "The components render on the server like the charts. React also ships pure-server entry points "
                        "for the components that hold no state: ",
                        c("@silverpoint/react/server/ui/<name>"),
                        " for card, divider, steps, tag, badge, progress, alert and skeleton.",
                    )
                ],
            ),
            (
                "reflex",
                "In Reflex",
                [
                    rx.el.p(
                        "reflex-silverpoint-react 0.3 wraps all 17: ",
                        *[
                            item
                            for i, info in enumerate(UI_COMPONENTS)
                            for item in (
                                (", " if i else ""),
                                rx.el.a(c(info.factory_name), href=f"/components/{info.slug}"),
                            )
                        ],
                        ", plus ",
                        c("sp_tab_panel"),
                        ". ",
                        c("UI_COMPONENTS"),
                        " is the catalog (group, states, props), ",
                        c("UI_DEMOS"),
                        " the 45 reference states, and ",
                        c('ui_demo("radio-group", "selected", ground="cyanotype")'),
                        " renders one: this site's reference pages are built from them.",
                    ),
                    callout(
                        "A text input controlled from state makes a round trip per keystroke. For long text, prefer ",
                        c("default_value"),
                        " and read the value on submit.",
                        kind="tip",
                    ),
                    rx.el.p(
                        "This site has no backend (",
                        c("rx.App(enable_state=False)"),
                        "), so its components are bound to client-side state instead of an ",
                        c("rx.State"),
                        ":",
                    ),
                    framework_tabs({"reflex": STATIC_CODE}),
                ],
            ),
            ("props", "Props every component takes", [props_table(UI_COMMON_PROPS)]),
        ],
        eyebrow="Concepts",
    )


def register(app: rx.App) -> None:
    app.add_page(ui_docs(), route="/docs/ui", title="UI components · silverpoint docs")
