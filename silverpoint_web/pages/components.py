"""The UI component reference: an index of the 17 components and one page per component."""

from collections.abc import Callable
from urllib.parse import quote

import reflex as rx
from reflex_silverpoint_react import (
    UI_COMMON_PROPS,
    UI_COMPONENTS,
    UI_GROUPS,
    UI_VALUE_COMPONENTS,
    UiComponentInfo,
    sp_badge,
)

from .. import site_data as sd
from .. import ui_examples as ux
from ..components.layout import docs_page
from ..components.ui import callout, ext_link, framework_tabs, props_table, section, table


def issue_url(info: UiComponentInfo) -> str:
    body = (
        f"**Component:** {info.component}\n"
        f"**Package and version:** @silverpoint/<react|vue|angular>@{sd.LATEST.version}\n"
        "**Framework and version:** \n"
        "**Ground / substrate / mode / size:** silverpoint / cream / ink / md\n"
        "**Browser and OS:** \n\n"
        "### What happened\n\n\n### What you expected\n\n\n### Minimal reproduction\n\n```tsx\n\n```\n"
    )
    return f"{sd.REPO_ISSUES}/new?title={quote(f'[{info.component}] ')}&labels=bug&body={quote(body)}"


def binding_rows(info: UiComponentInfo) -> list[list[rx.Component | str]]:
    """How each framework binds the component's value, controlled and uncontrolled."""
    checked = info.slug in ux.CHECKABLE
    react_value = "checked / onChange" if checked else "value / onChange"
    react_default = "defaultChecked" if checked else "defaultValue"
    reflex_value = (
        "checked=State.x, on_change=State.set_x" if checked else "value=State.x, on_change=State.set_x"
    )
    reflex_default = "default_checked=…" if checked else "default_value=…"
    return [
        ["React", rx.el.code(react_value), rx.el.code(react_default)],
        ["Vue", rx.el.code('v-model="x"'), rx.el.code("default-value")],
        ["Angular", rx.el.code('[(value)]="x", ngModel, formControl'), rx.el.code("[defaultValue]")],
        ["Reflex", rx.el.code(reflex_value), rx.el.code(reflex_default)],
    ]


def component_page(info: UiComponentInfo) -> Callable[[], rx.Component]:
    index = UI_COMPONENTS.index(info)
    prev_info = UI_COMPONENTS[index - 1] if index > 0 else None
    next_info = UI_COMPONENTS[index + 1] if index + 1 < len(UI_COMPONENTS) else None
    imports = ux.import_paths(info)
    first = info.states[0]

    def state_section(state: str) -> rx.Component:
        return rx.el.section(
            rx.el.h3(
                rx.el.a(rx.el.code(state), href=f"#state-{state}", class_name="spw-anchor"),
                id=f"state-{state}",
            ),
            rx.el.div(
                rx.el.figure(
                    ux.panel(ux.live(info.slug, state, id=f"{info.slug}--{state}--sp")),
                    rx.el.figcaption("silverpoint · cream"),
                ),
                rx.el.figure(
                    ux.panel(
                        ux.live(info.slug, state, id=f"{info.slug}--{state}--cy", ground="cyanotype"),
                        ground="cyanotype",
                        substrate="prussian",
                    ),
                    rx.el.figcaption("cyanotype · prussian"),
                ),
                class_name="spw-grid spw-grid-2",
            ),
            framework_tabs(ux.codes(info, state)),
            class_name="spw-ui-state",
        )

    def render() -> rx.Component:
        return docs_page(
            f"/components/{info.slug}",
            info.name,
            rx.el.span(
                info.summary,
                " ",
                rx.el.a(f"Group: {ux.group_title(info.group)}", href=f"/gallery#ui-{info.group}"),
                f" · component {index + 1} of {len(UI_COMPONENTS)}, new in silverpoint 0.3.",
            ),
            rx.el.div(
                rx.el.figure(
                    ux.panel(ux.live(info.slug, first, id=f"{info.slug}-hero", size="lg")),
                    rx.el.figcaption('size="lg"'),
                ),
                rx.el.figure(
                    ux.panel(ux.live(info.slug, first, id=f"{info.slug}-precision", mode="precision")),
                    rx.el.figcaption('mode="precision"'),
                ),
                rx.el.figure(
                    ux.panel(
                        ux.live(info.slug, first, id=f"{info.slug}-green", substrate="green"),
                        substrate="green",
                    ),
                    rx.el.figcaption('substrate="green"'),
                ),
                class_name="spw-variants spw-ui-variants",
            ),
            section(
                "states",
                "States",
                rx.el.p(
                    f"The {len(info.states)} reference states silverpoint declares for {info.name}, live on both grounds, "
                    "with their code. As in upstream's documentation the examples are uncontrolled: the state's value "
                    "is the default value. Pick a framework once and every example on the site follows it.",
                ),
                *[state_section(s) for s in info.states],
            ),
            section(
                "import",
                "Import",
                rx.el.p(
                    "Each component has its own subpath under ",
                    rx.el.code("ui/"),
                    ", and every adapter exports them all from ",
                    rx.el.code("ui"),
                    ". Import ",
                    rx.el.code("@silverpoint/grounds/ui.css"),
                    " once, beside ",
                    rx.el.code("styles.css"),
                    "; Reflex adds it for you.",
                ),
                table(
                    ["Framework", "Import"],
                    [
                        ["React", rx.el.code(imports["react"])],
                        ["Vue", rx.el.code(imports["vue"])],
                        ["Angular", rx.el.code(imports["angular"])],
                        ["Reflex", rx.el.code(imports["reflex"])],
                    ],
                ),
            ),
            section(
                "value",
                "Binding the value",
                rx.el.p(
                    "Controlled or uncontrolled, the way each framework does it. The change event carries the new "
                    "value itself (a string, a bool or a number), never a DOM event.",
                ),
                table(["Framework", "Controlled", "Uncontrolled"], binding_rows(info)),
            )
            if info.slug in UI_VALUE_COMPONENTS
            else rx.fragment(),
            section(
                "props",
                "Props",
                rx.el.p(f"The props {info.name} adds to the ones every UI component takes.")
                if info.props
                else rx.el.p(f"{info.name} takes only the props every UI component shares."),
                props_table(info.props) if info.props else rx.fragment(),
            ),
            section(
                "common-props",
                "Common props",
                rx.el.p(
                    "Every UI component also takes these. Like a chart's, they fall back to the dashboard the component "
                    "sits in, then to the provider. ",
                    rx.el.a("Read more about the UI components", href="/docs/ui"),
                    ".",
                ),
                props_table(UI_COMMON_PROPS),
            ),
            callout(
                "Found something wrong with ",
                rx.el.strong(info.component),
                "? ",
                ext_link("Open an issue on GitHub", issue_url(info)),
                " — the form comes pre-filled with the component and the version.",
                kind="bug",
            ),
            rx.el.nav(
                rx.el.a("← " + prev_info.name, href=f"/components/{prev_info.slug}")
                if prev_info
                else rx.el.span(),
                rx.el.a(next_info.name + " →", href=f"/components/{next_info.slug}")
                if next_info
                else rx.el.span(),
                class_name="spw-pager",
            ),
            toc_entries=[
                ("states", "States"),
                *[(f"state-{s}", f"· {s}") for s in info.states],
                ("import", "Import"),
                *([("value", "Binding the value")] if info.slug in UI_VALUE_COMPONENTS else []),
                ("props", "Props"),
                ("common-props", "Common props"),
            ],
            eyebrow=f"UI components · {ux.group_title(info.group)}",
        )

    render.__name__ = f"component_{info.factory_name}"
    return render


def components_index() -> rx.Component:
    rows = []
    for group, title in UI_GROUPS:
        for info in ux.components_in(group):
            rows.append(
                [
                    rx.el.a(info.name, href=f"/components/{info.slug}"),
                    title,
                    info.summary,
                    rx.el.code(f"@silverpoint/react/ui/{info.slug}"),
                    rx.el.code(ux.selector(info)),
                    rx.el.code(info.factory_name),
                ]
            )
    return docs_page(
        "/components",
        "UI component reference",
        f"The {len(UI_COMPONENTS)} interface components silverpoint {sd.LATEST.version} ships in React, Vue and Angular "
        "(and in Reflex through reflex-silverpoint-react), drawn with the charts' language: an exact frame, tone by "
        "hatching or by line weight, keyboard and screen-reader semantics from the native element.",
        rx.el.div(
            *[
                rx.el.a(
                    sp_badge(
                        rx.el.span(title),
                        count=len(ux.components_in(group)),
                        label="components",
                        size="sm",
                        id=f"badge-{group}",
                    ),
                    href=f"#group-{group}",
                    class_name="spw-stat spw-stat-badge",
                )
                for group, title in UI_GROUPS
            ],
            rx.el.div(
                rx.el.strong(str(len(UI_COMPONENTS))),
                rx.el.span(f"in total · {sum(len(i.states) for i in UI_COMPONENTS)} states"),
                class_name="spw-stat spw-stat-total",
            ),
            class_name="spw-stats",
        ),
        *[
            section(
                f"group-{group}",
                title,
                rx.el.p(ux.GROUP_BLURBS[group]),
                rx.el.div(
                    *[
                        rx.el.div(
                            rx.el.div(
                                rx.el.a(info.name, href=f"/components/{info.slug}"),
                                rx.el.span(f"{len(info.states)} states", class_name="spw-card-code"),
                                class_name="spw-card-title",
                            ),
                            ux.panel(ux.live(info.slug, info.states[0], id=f"index-{info.slug}")),
                            rx.el.p(info.summary, class_name="spw-card-summary"),
                            class_name="spw-card spw-ui-card",
                        )
                        for info in ux.components_in(group)
                    ],
                    class_name="spw-grid",
                ),
            )
            for group, title in UI_GROUPS
        ],
        section(
            "all-components",
            "All components",
            table(["Component", "Group", "What it is", "React subpath", "Angular selector", "Reflex"], rows),
        ),
        toc_entries=[*[(f"group-{g}", t) for g, t in UI_GROUPS], ("all-components", "All components")],
        eyebrow="UI components",
    )


def register(app: rx.App) -> None:
    app.add_page(
        components_index,
        route="/components",
        title="UI component reference · silverpoint",
        description=f"The {len(UI_COMPONENTS)} silverpoint UI components for React, Vue, Angular and Reflex.",
    )
    for info in UI_COMPONENTS:
        app.add_page(
            component_page(info),
            route=f"/components/{info.slug}",
            title=f"{info.component} · silverpoint",
            description=f"{info.component}: {info.summary} silverpoint UI component for React, Vue, Angular and Reflex.",
        )
