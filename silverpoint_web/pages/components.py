"""The UI component reference: an index and one page per component, the 17 of 0.3 and the 21 of 0.7."""

from collections.abc import Callable
from urllib.parse import quote

import reflex as rx
from reflex_silverpoint_react import (
    UI_COMMON_PROPS,
    UI_COMPONENTS,
    UI_GROUPS,
    UI_VALUE_COMPONENTS,
    PropDoc,
    UiComponentInfo,
    sp_badge,
)

from .. import composed_code as cc
from .. import reflex_only as ro
from .. import site_data as sd
from .. import ui_examples as ux
from ..components.layout import docs_page
from ..components.ui import (
    callout,
    choice,
    ext_link,
    framework_tabs,
    md_inline,
    paper_card,
    props_table,
    section,
    table,
)
from .reflex_docs import (
    COMPOSED_GROUND,
    COMPOSED_MODE,
    COMPOSED_PALETTE,
    COMPOSED_SUBSTRATE,
    composed_surface,
)


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


# ── The 21 components of 0.7 ─────────────────────────────────────────────────────────────

#: Every UI component's common props, with the palette 0.7 adds to them.
COMMON_PROPS_0_7 = (
    *UI_COMMON_PROPS,
    PropDoc(
        "palette",
        "palette",
        "Palette",
        "Colours over the ground's, merged over the dashboard's and the provider's.",
    ),
)


def composed_issue_url(name: str) -> str:
    body = (
        f"**Component:** {name}\n"
        f"**Package and version:** @silverpoint/<react|vue|angular>@{sd.LATEST.version}\n"
        "**Framework and version:** \n"
        "**Ground / substrate / mode / size:** silverpoint / cream / ink / md\n"
        "**Browser and OS:** \n\n"
        "### What happened\n\n\n### What you expected\n\n\n### Minimal reproduction\n\n```tsx\n\n```\n"
    )
    return f"{sd.REPO_ISSUES}/new?title={quote(f'[{name}] ')}&labels=bug&body={quote(body)}"


def props_rows(props: list[dict]) -> rx.Component:
    """A 0.7 component's own props: camelCase in React and Angular, kebab-case in Vue templates."""
    rows = [
        rx.el.tr(
            rx.el.td(rx.el.code(p["js"]), " ", rx.el.small("required") if p["required"] else ""),
            rx.el.td(rx.el.code("".join("-" + ch.lower() if ch.isupper() else ch for ch in p["js"]))),
            rx.el.td(rx.el.code(p["type"]), class_name="spw-type"),
            rx.el.td(md_inline(p["doc"]) or "—"),
        )
        for p in props
        if not p.get("react")
    ]
    return rx.el.div(
        rx.el.table(
            rx.el.thead(rx.el.tr(*[rx.el.th(h) for h in ("React / Angular", "Vue", "Type", "Description")])),
            rx.el.tbody(*rows),
            class_name="spw-table",
        ),
        class_name="spw-table-wrap",
    )


def composed_page(item: ro.Composed) -> Callable[[], rx.Component]:
    index = cc.REFERENCE.index(item)
    prev_item = cc.REFERENCE[index - 1] if index > 0 else None
    next_item = cc.REFERENCE[index + 1] if index + 1 < len(cc.REFERENCE) else None
    names, subpath, selector = cc.ADAPTER_NAMES[item.slug]
    name = cc.component_name(item.slug)
    family = "Overlays" if item.level == "B" else "Composed"
    imports = ", ".join(names.split(" · "))
    events = cc.EVENTS.get(item.slug, ())
    own_props = cc.UI_PROPS[item.slug]

    def render() -> rx.Component:
        return docs_page(
            f"/components/{item.slug}",
            names,
            rx.el.span(
                item.summary,
                " ",
                rx.el.a(f"Group: {family}", href="/components#new-0-7"),
                f" · new in silverpoint 0.7, in React, Vue, Angular and Reflex ({item.name}).",
            ),
            section(
                "live",
                "Live",
                rx.el.p(
                    "Drawn here with the Reflex version, ",
                    rx.el.code(item.name),
                    ", on the ground you pick:",
                ),
                rx.el.div(
                    choice("Ground", COMPOSED_GROUND, sd.GROUNDS),
                    choice("Substrate", COMPOSED_SUBSTRATE, sd.SUBSTRATES),
                    choice("Mode", COMPOSED_MODE, sd.MODES),
                    choice("Palette", COMPOSED_PALETTE, ro.PALETTE_CHOICES),
                    class_name="spw-controls",
                ),
                paper_card(
                    ux.panel(
                        ro.demo(item.slug, composed_surface()),
                        ground=COMPOSED_GROUND.value,
                        substrate=COMPOSED_SUBSTRATE.value,
                    ),
                    class_name="spw-live",
                ),
            ),
            section(
                "code",
                "Code",
                rx.el.p(
                    "The same example in each framework; pick one once and every example on the site follows it."
                ),
                framework_tabs({**cc.FRAMEWORK_CODE[item.slug], "reflex": item.code}),
            ),
            section(
                "import",
                "Import",
                rx.el.p(
                    "Import ",
                    rx.el.code("@silverpoint/grounds/ui.css"),
                    " once, beside ",
                    rx.el.code("styles.css"),
                    "; Reflex adds it for you. Every adapter also exports it from the ",
                    rx.el.code("ui"),
                    " barrel.",
                ),
                table(
                    ["Framework", "Import"],
                    [
                        [
                            "React",
                            rx.el.code(f"import {{ {imports} }} from '@silverpoint/react/ui/{subpath}';"),
                        ],
                        ["Vue", rx.el.code(f"import {{ {imports} }} from '@silverpoint/vue/ui/{subpath}';")],
                        [
                            "Angular",
                            rx.el.span(
                                rx.el.code(
                                    f"import {{ {imports} }} from '@silverpoint/angular/ui/{subpath}';"
                                ),
                                " · ",
                                rx.el.code(selector),
                            ),
                        ],
                        [
                            "Reflex",
                            rx.el.code(
                                f"from reflex_silverpoint_react import {item.name.replace(' · ', ', ')}"
                            ),
                        ],
                    ],
                ),
            ),
            section(
                "events",
                "Events, values and slots",
                rx.el.p(
                    "Each framework's own way. A change carries the new value itself (a key, a page, a number, "
                    "a bool), never a DOM event."
                ),
                table(
                    ["", "React", "Vue", "Angular", "Reflex"],
                    [[r[0], *[rx.el.code(x) for x in r[1:]]] for r in events],
                ),
            )
            if events
            else rx.fragment(),
            section(
                "props",
                "Props",
                *[
                    part
                    for component, props in own_props.items()
                    for part in (
                        rx.el.h3(component, id=f"props-{component}") if len(own_props) > 1 else rx.fragment(),
                        props_rows(props)
                        if any(not p.get("react") for p in props)
                        else rx.el.p(f"{component} takes only the common props."),
                    )
                ],
                rx.el.p(
                    "In Reflex the names are snake_case; ",
                    rx.el.a("the Reflex column of Composed components", href=f"/docs/composed#{item.slug}"),
                    " shows the builder's arguments.",
                    class_name="spw-small",
                ),
            ),
            section(
                "common-props",
                "Common props",
                rx.el.p(
                    "Every UI component also takes these, falling back to the dashboard it sits in, then to the "
                    "provider. In Reflex they read silverpoint_provider too; only sp_trigger does not: pass them to it."
                ),
                props_table(COMMON_PROPS_0_7),
            ),
            callout(
                "Found something wrong with ",
                rx.el.strong(name),
                "? ",
                ext_link("Open an issue on GitHub", composed_issue_url(name)),
                " — the form comes pre-filled with the component and the version.",
                kind="bug",
            ),
            rx.el.nav(
                rx.el.a("← " + cc.ADAPTER_NAMES[prev_item.slug][0], href=f"/components/{prev_item.slug}")
                if prev_item
                else rx.el.span(),
                rx.el.a(cc.ADAPTER_NAMES[next_item.slug][0] + " →", href=f"/components/{next_item.slug}")
                if next_item
                else rx.el.span(),
                class_name="spw-pager",
            ),
            toc_entries=[
                ("live", "Live"),
                ("code", "Code"),
                ("import", "Import"),
                *([("events", "Events, values and slots")] if events else []),
                ("props", "Props"),
                ("common-props", "Common props"),
            ],
            eyebrow=f"UI components · {family} · new in 0.7",
        )

    render.__name__ = f"component_{item.slug.replace('-', '_')}"
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
        f"The {len(UI_COMPONENTS)} form and display components silverpoint has shipped since 0.3 in React, Vue and "
        "Angular (and in Reflex through reflex-silverpoint-react), drawn with the charts' language: an exact frame, "
        "tone by hatching or by line weight, keyboard and screen-reader semantics from the native element. The 21 "
        "composed components and overlays of 0.7 are indexed at the end.",
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
        section(
            "new-0-7",
            "Composed components and overlays (0.7)",
            rx.el.p(
                f"silverpoint {sd.LATEST.version} adds {len(cc.REFERENCE)} more on the same subpaths, for "
                f"{len(UI_COMPONENTS) + len(cc.REFERENCE)} in all: SpSurface and SpGlyph, the building blocks, the "
                "composed components and the overlays. Each has a page with a live demo, its code in React, Vue, "
                "Angular and Reflex, its events and its props; ",
                rx.el.a("Composed components", href="/docs/composed"),
                " shows them all on one page.",
            ),
            table(
                ["Component", "What it is", "React subpath", "Angular selector", "Reflex"],
                [
                    [
                        rx.el.a(cc.ADAPTER_NAMES[i.slug][0], href=f"/components/{i.slug}"),
                        i.summary,
                        rx.el.code(f"@silverpoint/react/ui/{cc.ADAPTER_NAMES[i.slug][1]}")
                        if cc.ADAPTER_NAMES[i.slug][1]
                        else "—",
                        rx.el.code(cc.ADAPTER_NAMES[i.slug][2]),
                        rx.el.code(i.name),
                    ]
                    for i in cc.REFERENCE
                ],
            ),
        ),
        toc_entries=[
            *[(f"group-{g}", t) for g, t in UI_GROUPS],
            ("all-components", "All components"),
            ("new-0-7", "Composed & overlays (0.7)"),
        ],
        eyebrow="UI components",
    )


def register(app: rx.App) -> None:
    app.add_page(
        components_index,
        route="/components",
        title="UI component reference · silverpoint",
        description=f"The {len(UI_COMPONENTS) + len(cc.REFERENCE)} silverpoint UI components for React, Vue, Angular and Reflex.",
    )
    for item in cc.REFERENCE:
        name = cc.ADAPTER_NAMES[item.slug][0]
        app.add_page(
            composed_page(item),
            route=f"/components/{item.slug}",
            title=f"{cc.component_name(item.slug)} · silverpoint",
            description=f"{name}: {item.summary} silverpoint UI component for React, Vue, Angular and Reflex.",
        )
    for info in UI_COMPONENTS:
        app.add_page(
            component_page(info),
            route=f"/components/{info.slug}",
            title=f"{info.component} · silverpoint",
            description=f"{info.component}: {info.summary} silverpoint UI component for React, Vue, Angular and Reflex.",
        )
