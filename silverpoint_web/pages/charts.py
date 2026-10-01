"""The chart reference: an index of the 33 charts and one page per chart."""

from collections.abc import Callable
from urllib.parse import quote

import reflex as rx
from reflex_silverpoint_react import CHARTS, COMMON_PROPS, FAMILIES, ChartInfo, download_svg, sp_button

from .. import site_data as sd
from ..components.layout import docs_page
from ..components.ui import (
    callout,
    ext_link,
    framework_tabs,
    paper_card,
    props_table,
    section,
    table,
)
from ..examples import EXAMPLES, codes, import_paths, install_line, live_props


def issue_url(info: ChartInfo) -> str:
    body = (
        f"**Chart:** {info.chart}\n"
        f"**Package and version:** @silverpoint/<react|vue|angular>@{sd.LATEST.version}\n"
        "**Framework and version:** \n"
        "**Ground / substrate / mode:** silverpoint / cream / ink\n"
        "**Browser and OS:** \n\n"
        "### What happened\n\n\n### What you expected\n\n\n### Minimal reproduction\n\n```tsx\n\n```\n"
    )
    return f"{sd.REPO_ISSUES}/new?title={quote(f'[{info.chart}] ')}&labels=bug&body={quote(body)}"


def chart_card(info: ChartInfo, **overrides) -> rx.Component:
    props = live_props(info)
    props.update(overrides)
    return info.factory(**props)


def chart_page(info: ChartInfo) -> Callable[[], rx.Component]:
    index = CHARTS.index(info)
    prev_info = CHARTS[index - 1] if index > 0 else None
    next_info = CHARTS[index + 1] if index + 1 < len(CHARTS) else None
    example = EXAMPLES[info.slug]
    chart_id = f"chart-{info.slug}"
    fw_codes = codes(info)
    imports = import_paths(info)

    def render() -> rx.Component:
        return docs_page(
            f"/charts/{info.slug}",
            info.chart,
            rx.el.span(
                info.summary,
                " ",
                rx.el.a(f"Family: {info.family}", href=f"/gallery#{info.family.lower().replace(' & ', '-')}"),
                f" · chart {index + 1} of {len(CHARTS)}.",
            ),
            paper_card(
                chart_card(info, height=260, id=chart_id, footer_right="silverpoint"),
                rx.el.div(
                    sp_button(
                        "Download SVG",
                        on_click=download_svg(chart_id, f"{info.slug}.svg"),
                        variant="primary",
                        size="sm",
                        id=f"{chart_id}-download",
                    ),
                    rx.el.a(
                        rx.icon("bug", size=14),
                        " Report an issue with this chart",
                        href=issue_url(info),
                        target="_blank",
                        rel="noopener noreferrer",
                        class_name="spw-button spw-button-ghost",
                    ),
                    class_name="spw-row",
                ),
                class_name="spw-hero-chart",
            ),
            rx.el.div(
                rx.el.figure(
                    chart_card(info, mode="precision", height=140, chrome="bare"),
                    rx.el.figcaption('mode="precision"'),
                ),
                rx.el.figure(
                    chart_card(info, substrate="green", height=140, chrome="bare"),
                    rx.el.figcaption('substrate="green"'),
                ),
                rx.el.figure(
                    chart_card(info, ground="cyanotype", height=140, chrome="bare"),
                    rx.el.figcaption('ground="cyanotype"'),
                ),
                class_name="spw-variants",
            ),
            section(
                "example",
                "Example",
                rx.el.p(
                    "The chart above, in each framework. Pick a framework once and every example on the site follows it.",
                    " " + example.note if example.note else "",
                ),
                framework_tabs(fw_codes, {k: install_line(k) for k in fw_codes}),
            ),
            section(
                "import",
                "Import",
                rx.el.p(
                    "Each chart has its own subpath, so a bundle only carries the charts it uses. Every adapter also "
                    "exports every chart from its barrel."
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
                "props",
                "Props",
                rx.el.p(
                    f"The props {info.chart} adds to the ones every chart takes. Accessor props (",
                    rx.el.code("…Key"),
                    ", ",
                    rx.el.code("keys"),
                    ", ",
                    rx.el.code("names"),
                    ") name fields of your rows and are ignored without ",
                    rx.el.code("data"),
                    ".",
                )
                if info.props
                else rx.el.p(f"{info.chart} takes only the props every chart shares."),
                props_table(info.props) if info.props else rx.fragment(),
            ),
            section(
                "common-props",
                "Common props",
                rx.el.p(
                    "Every chart also takes these. Framework conventions: camelCase in React and Angular, kebab-case "
                    "in Vue templates, snake_case in Reflex. ",
                    rx.el.a("Read more about them", href="/docs/props"),
                    ".",
                ),
                rx.el.details(
                    rx.el.summary(f"Show the {len(COMMON_PROPS)} common props"),
                    props_table(COMMON_PROPS),
                    class_name="spw-disclosure",
                ),
            ),
            section(
                "events",
                "Events",
                rx.el.p(
                    "Pointer and keyboard exploration are built in. The item under the pointer or focus is reported, "
                    "and a click, Enter or Space selects it. The item is ",
                    rx.el.code("{ seriesKey, index, datum, value, point: { x, y } }"),
                    ".",
                ),
                table(
                    ["Framework", "Active item", "Selection", "Custom readout"],
                    [
                        [
                            "React",
                            rx.el.code("onActiveChange"),
                            rx.el.code("onSelect"),
                            rx.el.code("tooltip={(item, readout) => …}"),
                        ],
                        [
                            "Vue",
                            rx.el.code("@active-change"),
                            rx.el.code("@select"),
                            rx.el.code("<template #tooltip>"),
                        ],
                        [
                            "Angular",
                            rx.el.code("(activeChange)"),
                            rx.el.code("(select)"),
                            rx.el.code("<ng-template spTooltip>"),
                        ],
                        [
                            "Reflex",
                            rx.el.code("on_active_change"),
                            rx.el.code("on_select"),
                            rx.el.code("tooltip=tooltip_template(…)"),
                        ],
                    ],
                ),
                rx.el.a("Interaction and readouts →", href="/docs/interaction"),
            ),
            callout(
                "Found something wrong with ",
                rx.el.strong(info.chart),
                "? ",
                ext_link("Open an issue on GitHub", issue_url(info)),
                " — the form comes pre-filled with the chart and the version.",
                kind="bug",
            ),
            rx.el.nav(
                rx.el.a("← " + prev_info.chart, href=f"/charts/{prev_info.slug}")
                if prev_info
                else rx.el.span(),
                rx.el.a(next_info.chart + " →", href=f"/charts/{next_info.slug}")
                if next_info
                else rx.el.span(),
                class_name="spw-pager",
            ),
            toc_entries=[
                ("example", "Example"),
                ("import", "Import"),
                ("props", "Props"),
                ("common-props", "Common props"),
                ("events", "Events"),
            ],
            eyebrow=f"Charts · {info.family}",
        )

    render.__name__ = f"chart_{info.factory_name}"
    return render


def charts_index() -> rx.Component:
    rows = []
    for family in FAMILIES:
        for info in (c for c in CHARTS if c.family == family):
            rows.append(
                [
                    rx.el.a(info.chart, href=f"/charts/{info.slug}"),
                    family,
                    info.summary,
                    rx.el.code(f"@silverpoint/react/{info.slug}"),
                    rx.el.code(f"sp-{info.slug}"),
                    rx.el.code(info.factory_name),
                ]
            )
    return docs_page(
        "/charts",
        "Chart reference",
        f"The {len(CHARTS)} charts silverpoint {sd.LATEST.version} ships, enabled and identical in React, Vue and Angular "
        "(and in Reflex through reflex-silverpoint-react). Each one has a page with a live example, its code in the four "
        "frameworks, and the reference of its props.",
        rx.el.div(
            *[
                rx.el.div(
                    rx.el.strong(str(sum(1 for c in CHARTS if c.family == f))),
                    rx.el.span(f),
                    class_name="spw-stat",
                )
                for f in FAMILIES
            ],
            rx.el.div(
                rx.el.strong(str(len(CHARTS))), rx.el.span("in total"), class_name="spw-stat spw-stat-total"
            ),
            class_name="spw-stats",
        ),
        section(
            "all-charts",
            "All charts",
            table(["Chart", "Family", "What it draws", "React subpath", "Angular selector", "Reflex"], rows),
        ),
        toc_entries=[("all-charts", "All charts")],
        eyebrow="Charts",
    )


def register(app: rx.App) -> None:
    app.add_page(charts_index, route="/charts", title="Chart reference · silverpoint")
    for info in CHARTS:
        app.add_page(
            chart_page(info),
            route=f"/charts/{info.slug}",
            title=f"{info.chart} · silverpoint",
            description=f"{info.chart}: {info.summary} silverpoint chart for React, Vue, Angular and Reflex.",
        )
