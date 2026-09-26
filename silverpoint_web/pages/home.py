"""The landing page."""

import reflex as rx
from reflex_silverpoint_react import (
    CHARTS,
    FAMILIES,
    area_chart,
    chart_by_slug,
    donut_chart,
    gauge_arc,
    kpi_card,
    line_chart,
    radar_chart,
    wind_rose,
)

from .. import datasets as ds
from .. import site_data as sd
from ..components.layout import shell_page
from ..components.ui import code_block, ext_link, framework_tabs, github_icon, shell
from ..examples import live_props

QUICK = {
    "react": """import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { LineChart } from '@silverpoint/react/line-chart';

<LineChart data={data} xKey="hour" valueKey="hits" title="Hits per hour" />""",
    "vue": """<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpLineChart } from '@silverpoint/vue/line-chart';
</script>

<SpLineChart :data="data" x-key="hour" value-key="hits" title="Hits per hour" />""",
    "angular": """import { SpLineChart } from '@silverpoint/angular/line-chart';

@Component({
  imports: [SpLineChart],
  template: `<sp-line-chart [data]="data" xKey="hour" valueKey="hits" title="Hits per hour" />`,
})""",
    "reflex": """from reflex_silverpoint_react import line_chart

line_chart(data=DATA, x_key="hour", value_key="hits", title="Hits per hour")""",
}

FEATURES: tuple[tuple[str, str, str], ...] = (
    (
        "ruler",
        "Exact data, drawn ornament",
        "The hand irregularity lives only in strokes that carry no data. Every encoded vertex is exact.",
    ),
    (
        "scan-eye",
        "A precision mode",
        'mode="precision" switches the inking off. Charts switch by themselves under prefers-contrast and forced-colors.',
    ),
    (
        "sprout",
        "Deterministic",
        "No Math.random on the render path: the seed derives from the id, so the same props draw the same strokes, on server and client.",
    ),
    (
        "accessibility",
        "Accessible",
        "An accessible name and description, a hidden data table, keyboard exploration and announced readouts.",
    ),
    (
        "server",
        "Server-rendered",
        "React Server Components, @vue/server-renderer and @angular/ssr, hydrating without a mismatch.",
    ),
    (
        "package",
        "Pay for what you use",
        "One subpath per chart, a framework-free core, tree-shakeable. The core's full bundle stays under 45 kB.",
    ),
)


def hero_panel() -> rx.Component:
    return rx.el.div(
        rx.el.div(kpi_card(**live_props(chart_by_slug("kpi-card")), height=110), class_name="spw-hero-a"),
        rx.el.div(
            gauge_arc(percent=72, caption="Capacity used", title="Capacity", height=110),
            class_name="spw-hero-b",
        ),
        rx.el.div(line_chart(**live_props(chart_by_slug("line-chart")), height=150), class_name="spw-hero-c"),
        class_name="spw-hero-panel",
    )


def stat(value: str, label: str, href: str) -> rx.Component:
    return rx.el.a(rx.el.strong(value), rx.el.span(label), href=href, class_name="spw-stat")


def framework_card(fw: sd.Framework) -> rx.Component:
    return rx.el.div(
        rx.el.h3(fw.label),
        rx.el.p(rx.el.code(fw.prefix), " · ", fw.peers, class_name="spw-muted"),
        shell(fw.install),
        rx.el.p(fw.integration, class_name="spw-small"),
        rx.el.a(f"{fw.label} guide →", href=f"/docs/{fw.key}"),
        class_name="spw-card spw-fw-card",
    )


def teaser(slug: str, **extra) -> rx.Component:
    info = chart_by_slug(slug)
    props = live_props(info)
    props.update(extra)
    return rx.el.a(
        info.factory(**props), href=f"/charts/{slug}", class_name="spw-teaser", aria_label=info.chart
    )


def index() -> rx.Component:
    return shell_page(
        rx.el.section(
            rx.el.div(
                rx.el.p(
                    f"v{sd.LATEST.version} · {sd.LICENSE} · React · Vue · Angular · Reflex",
                    class_name="spw-eyebrow",
                ),
                rx.el.h1("Charts drawn in silverpoint", class_name="spw-hero-title"),
                rx.el.p(
                    "A charting library whose visual language is historical drawing technique. The first ground "
                    "reproduces Renaissance silverpoint: a prepared middle-tone substrate, a fine silver line, tone "
                    "built from hatching, and white heightening reserved for the live value. The second, cyanotype, "
                    "prints a white line on Prussian blue.",
                    class_name="spw-hero-lede",
                ),
                rx.el.div(
                    rx.el.a("Get started", href="/docs", class_name="spw-button spw-button-solid"),
                    rx.el.a("Browse the gallery", href="/gallery", class_name="spw-button"),
                    ext_link(
                        rx.fragment(github_icon(16), " GitHub"),
                        sd.REPO,
                        class_name="spw-button spw-button-ghost",
                    ),
                    class_name="spw-row",
                ),
                class_name="spw-hero-text",
            ),
            hero_panel(),
            class_name="spw-hero",
        ),
        rx.el.div(
            stat(str(len(CHARTS)), "charts enabled", "/charts"),
            stat(str(len(FAMILIES)), "families", "/gallery"),
            stat("3 + 1", "frameworks + Reflex", "/docs/installation"),
            stat("2", "grounds · 4 substrates", "/docs/grounds"),
            stat(str(len(sd.PACKAGES)), "npm packages", "/packages"),
            stat(f"v{sd.LATEST.version}", sd.LATEST.date, "/versions"),
            class_name="spw-stats spw-stats-home",
        ),
        rx.el.section(
            rx.el.h2("One chart, four frameworks"),
            rx.el.p(
                "Seven packages share one version. The engine, @silverpoint/core, computes every scale and arc; the "
                "adapters only translate its geometry into JSX, Vue nodes or Angular templates, so the three render the "
                "same SVG, compared as trees in CI.",
                class_name="spw-lede",
            ),
            rx.el.div(*[framework_card(fw) for fw in sd.FRAMEWORKS], class_name="spw-grid spw-grid-4"),
            framework_tabs(QUICK),
            class_name="spw-home-section",
        ),
        rx.el.section(
            rx.el.h2("From the gallery"),
            rx.el.div(
                teaser("donut-chart"),
                teaser("radar-chart"),
                teaser("wind-rose", ground="cyanotype"),
                teaser("area-chart", substrate="green"),
                teaser("sankey-chart"),
                teaser("volvelle-chart", substrate="ochre"),
                class_name="spw-grid",
            ),
            rx.el.a(f"See all {len(CHARTS)} charts →", href="/gallery", class_name="spw-more"),
            class_name="spw-home-section",
        ),
        rx.el.section(
            rx.el.h2("Why silverpoint"),
            rx.el.div(
                *[
                    rx.el.div(
                        rx.icon(icon, size=22), rx.el.h3(title), rx.el.p(text), class_name="spw-feature"
                    )
                    for icon, title, text in FEATURES
                ],
                class_name="spw-grid spw-grid-3",
            ),
            class_name="spw-home-section",
        ),
        rx.el.section(
            rx.el.div(
                rx.el.div(
                    rx.el.h2("Two grounds"),
                    rx.el.p(
                        "Tone is hatch density on the silverpoint ground, and line weight on cyanotype. No chart code "
                        'changes between them: ground="cyanotype" on a chart, the provider or a dashboard.',
                    ),
                    rx.el.a("Grounds & substrates →", href="/docs/grounds"),
                ),
                rx.el.div(
                    area_chart(data=ds.AREA_CHART, title="silverpoint · cream", height=120),
                    area_chart(
                        data=ds.AREA_CHART, title="cyanotype · prussian", ground="cyanotype", height=120
                    ),
                    class_name="spw-grid spw-grid-2",
                ),
                class_name="spw-split",
            ),
            class_name="spw-home-section",
        ),
        rx.el.section(
            rx.el.div(
                rx.el.div(
                    rx.el.h2("Also in Python, with Reflex"),
                    rx.el.p(
                        "reflex-silverpoint-react wraps @silverpoint/react as a Reflex custom component: the 33 charts, "
                        "the Dashboard, the provider, events, custom readouts and SVG export, as Python. This site is "
                        "built with it.",
                    ),
                    rx.el.div(
                        rx.el.a("Reflex guide", href="/docs/reflex", class_name="spw-button"),
                        ext_link(
                            "reflex-silverpoint-react on GitHub",
                            sd.REFLEX_REPO,
                            class_name="spw-button spw-button-ghost",
                        ),
                        ext_link("PyPI", sd.REFLEX_PYPI, class_name="spw-button spw-button-ghost"),
                        class_name="spw-row",
                    ),
                ),
                code_block(
                    """import reflex as rx
from reflex_silverpoint_react import donut_chart, radar_chart

rx.hstack(
    donut_chart(data=budget, name_key="name", value_key="value", title="Budget"),
    radar_chart(data=profile, subject_key="subject", value_key="value", title="Profile"),
)""",
                    "python",
                ),
                class_name="spw-split",
            ),
            rx.el.div(
                donut_chart(data=ds.DONUT_CHART, title="Budget", height=150),
                radar_chart(data=ds.RADAR_CHART, title="Profile", height=150),
                wind_rose(
                    data=ds.WIND_ROSE,
                    bearing_key="bearing",
                    value_key="speed",
                    title="Wind",
                    height=150,
                    substrate="blue",
                ),
                class_name="spw-grid spw-grid-3",
            ),
            class_name="spw-home-section",
        ),
        rx.el.section(
            rx.el.div(
                rx.el.h2("Made by Ernesto Crespo"),
                rx.el.p(
                    "silverpoint is designed and developed by ",
                    ext_link(sd.AUTHOR, sd.AUTHOR_URL),
                    ", released under the ",
                    ext_link("MIT license", sd.REPO_LICENSE),
                    ". Found a bug or a chart that draws wrong? ",
                    rx.el.a("Report it", href="/support"),
                    ".",
                ),
                rx.el.div(
                    ext_link("seraph.to", sd.AUTHOR_URL, class_name="spw-button"),
                    ext_link(
                        "github.com/ecrespo", sd.AUTHOR_GITHUB, class_name="spw-button spw-button-ghost"
                    ),
                    class_name="spw-row",
                ),
                class_name="spw-author",
            ),
            class_name="spw-home-section",
        ),
        wide=True,
    )


def register(app: rx.App) -> None:
    app.add_page(
        index,
        route="/",
        title="silverpoint · Renaissance-drawn charts for React, Vue and Angular",
        description=(
            f"silverpoint: {len(CHARTS)} charts for React, Vue, Angular and Reflex drawn in the manner of a Renaissance "
            "silverpoint drawing. Exact geometry, hand-drawn ornament, accessible and server-rendered."
        ),
    )
