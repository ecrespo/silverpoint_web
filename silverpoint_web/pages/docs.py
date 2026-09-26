"""The documentation: getting started, the four framework guides, and the concepts."""

from collections.abc import Callable
from typing import Any

import reflex as rx
from reflex_silverpoint_react import (
    CHARTS,
    COMMON_PROPS,
    FAMILIES,
    area_chart,
    bar_chart,
    dashboard,
    dashboard_cell,
    dashboard_cell_layout,
    dashboard_layout,
    donut_chart,
    download_svg,
    gauge_arc,
    kpi_card,
    line_chart,
    meter_chart,
    silverpoint_provider,
    tooltip_template,
)

from .. import datasets as ds
from .. import site_data as sd
from ..components.layout import docs_page
from ..components.ui import (
    c,
    callout,
    code_block,
    ext_link,
    framework_tabs,
    paper_card,
    props_table,
    section,
    shell,
    table,
)

Section = tuple[str, str, list[Any]]  # (anchor, title, children)

DATA_JS = """const data = [
  { hour: '00', hits: 18 },
  { hour: '04', hits: 11 },
  { hour: '08', hits: 42 },
  { hour: '12', hits: 64 },
  { hour: '16', hits: 57 },
  { hour: '20', hits: 30 },
];"""

DATA_PY = """DATA = [
    {"hour": "00", "hits": 18},
    {"hour": "04", "hits": 11},
    {"hour": "08", "hits": 42},
    {"hour": "12", "hits": 64},
    {"hour": "16", "hits": 57},
    {"hour": "20", "hits": 30},
]"""

QUICK_DATA = [
    {"hour": "00", "hits": 18},
    {"hour": "04", "hits": 11},
    {"hour": "08", "hits": 42},
    {"hour": "12", "hits": 64},
    {"hour": "16", "hits": 57},
    {"hour": "20", "hits": 30},
]

SALES = [{"month": "Jan", "units": 120}, {"month": "Feb", "units": 98}, {"month": "Mar", "units": 143}]
CHANNELS = [
    {"channel": "Web", "share": 54},
    {"channel": "Stores", "share": 31},
    {"channel": "Partners", "share": 15},
]


def page(
    route: str, title: str, lede: Any, sections: list[Section], eyebrow: str = "Documentation"
) -> Callable[[], rx.Component]:
    def render() -> rx.Component:
        return docs_page(
            route,
            title,
            lede,
            *[section(anchor, heading, *children) for anchor, heading, children in sections],
            toc_entries=[(anchor, heading) for anchor, heading, _ in sections],
            eyebrow=eyebrow,
        )

    render.__name__ = "docs_" + (route.strip("/").replace("/", "_").replace("-", "_") or "index")
    return render


# ── Code shared by several pages ─────────────────────────────────────────────────────────

QUICKSTART_FILES = {
    "react": f"""// src/App.tsx
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import {{ LineChart }} from '@silverpoint/react/line-chart';

{DATA_JS}

export default function App() {{
  return (
    <div style={{{{ width: 480 }}}}>
      <LineChart data={{data}} xKey="hour" valueKey="hits" title="Hits per hour" />
    </div>
  );
}}""",
    "vue": f"""<!-- src/App.vue -->
<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import {{ SpLineChart }} from '@silverpoint/vue/line-chart';

{DATA_JS}
</script>

<template>
  <div style="width: 480px">
    <SpLineChart :data="data" x-key="hour" value-key="hits" title="Hits per hour" />
  </div>
</template>""",
    "angular": """/* src/styles.css */
@import '@silverpoint/fonts/fonts.css';
@import '@silverpoint/grounds/styles.css';

// src/app/app.ts
import { Component } from '@angular/core';
import { SpLineChart } from '@silverpoint/angular/line-chart';

@Component({
  selector: 'app-root',
  imports: [SpLineChart],
  template: `
    <div style="width: 480px">
      <sp-line-chart [data]="data" xKey="hour" valueKey="hits" title="Hits per hour" />
    </div>
  `,
})
export class App {
  protected readonly data = [
    { hour: '00', hits: 18 },
    { hour: '04', hits: 11 },
    { hour: '08', hits: 42 },
    { hour: '12', hits: 64 },
    { hour: '16', hits: 57 },
    { hour: '20', hits: 30 },
  ];
}""",
    "reflex": f"""# my_app/my_app.py
import reflex as rx
from reflex_silverpoint_react import line_chart

{DATA_PY}


def index() -> rx.Component:
    return rx.box(
        line_chart(data=DATA, x_key="hour", value_key="hits", title="Hits per hour"),
        width="480px",
    )


app = rx.App()
app.add_page(index)""",
}

INSTALLS = {fw.key: fw.install for fw in sd.FRAMEWORKS}
CREATES = {
    "react": "npm create vite@latest my-charts -- --template react-ts\ncd my-charts\nnpm install @silverpoint/react @silverpoint/grounds @silverpoint/fonts\nnpm run dev",
    "vue": "npm create vite@latest my-charts -- --template vue-ts\ncd my-charts\nnpm install @silverpoint/vue @silverpoint/grounds @silverpoint/fonts\nnpm run dev",
    "angular": "npx @angular/cli@22 new my-charts --defaults --skip-git\ncd my-charts\nnpm install @silverpoint/angular @silverpoint/grounds @silverpoint/fonts\nnpm start",
    "reflex": "mkdir my_app && cd my_app\npip install reflex reflex-silverpoint-react\nreflex init\nreflex run",
}

PROVIDER = {
    "react": """import { SilverpointProvider } from '@silverpoint/react';
import { BarChart } from '@silverpoint/react/bar-chart';
import { DonutChart } from '@silverpoint/react/donut-chart';

export function Dashboard() {
  return (
    <SilverpointProvider ground="silverpoint" substrate="green" locale="en-GB">
      <BarChart data={sales} xKey="month" valueKey="units" title="Units sold" unit="units" />
      <DonutChart data={channels} nameKey="channel" valueKey="share" title="Sales by channel" centerLabel="%" />
    </SilverpointProvider>
  );
}""",
    "vue": """// src/main.ts
import { createApp } from 'vue';
import { provideSilverpoint } from '@silverpoint/vue';
import App from './App.vue';

createApp(App)
  .use(provideSilverpoint({ ground: 'silverpoint', substrate: 'green', locale: 'en-GB' }))
  .mount('#app');

<!-- any component -->
<SpBarChart :data="sales" x-key="month" value-key="units" title="Units sold" unit="units" />
<SpDonutChart :data="channels" name-key="channel" value-key="share" title="Sales by channel" center-label="%" />""",
    "angular": """// src/app/app.config.ts
import { type ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideSilverpoint } from '@silverpoint/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideSilverpoint({ ground: 'silverpoint', substrate: 'green', locale: 'en-GB' }),
  ],
};

<!-- any template -->
<sp-bar-chart [data]="sales" xKey="month" valueKey="units" title="Units sold" unit="units" />
<sp-donut-chart [data]="channels" nameKey="channel" valueKey="share" title="Sales by channel" centerLabel="%" />""",
    "reflex": """from reflex_silverpoint_react import bar_chart, donut_chart, silverpoint_provider

silverpoint_provider(
    bar_chart(data=sales, x_key="month", value_key="units", title="Units sold", unit="units"),
    donut_chart(data=channels, name_key="channel", value_key="share",
                title="Sales by channel", center_label="%"),
    ground="silverpoint",
    substrate="green",
    locale="en-GB",
)""",
}

PRECISION = {
    "react": '<LineChart data={data} xKey="hour" valueKey="hits" title="Hits per hour" mode="precision" />',
    "vue": '<SpLineChart :data="data" x-key="hour" value-key="hits" title="Hits per hour" mode="precision" />',
    "angular": '<sp-line-chart [data]="data" xKey="hour" valueKey="hits" title="Hits per hour" mode="precision" />',
    "reflex": 'line_chart(data=DATA, x_key="hour", value_key="hits", title="Hits per hour", mode="precision")',
}

INTERACTION = {
    "react": """import { useState } from 'react';
import { LineChart } from '@silverpoint/react/line-chart';

export function Explorer({ data }: { data: { hour: string; hits: number }[] }) {
  const [active, setActive] = useState<string>('—');
  return (
    <>
      <LineChart
        data={data}
        xKey="hour"
        valueKey="hits"
        title="Hits per hour"
        onActiveChange={(item) => setActive(item ? `${item.datum.hour}: ${item.value}` : '—')}
        onSelect={(item) => console.log('selected', item.datum)}
        tooltip={(item) => <strong>{item.value} hits</strong>}
      />
      <p>Under the pointer: {active}</p>
    </>
  );
}""",
    "vue": """<script setup lang="ts">
import { ref } from 'vue';
import { SpLineChart } from '@silverpoint/vue/line-chart';
import type { ActiveItem } from '@silverpoint/vue';

defineProps<{ data: { hour: string; hits: number }[] }>();
const active = ref<ActiveItem | null>(null);
</script>

<template>
  <SpLineChart
    :data="data"
    x-key="hour"
    value-key="hits"
    title="Hits per hour"
    @active-change="active = $event"
    @select="(item) => console.log('selected', item.datum)"
  >
    <template #tooltip="{ active: item }">
      <strong>{{ item.value }} hits</strong>
    </template>
  </SpLineChart>
  <p>Under the pointer: {{ active ? `${active.datum.hour}: ${active.value}` : '—' }}</p>
</template>""",
    "angular": """import { Component, input, signal } from '@angular/core';
import { SpTooltip } from '@silverpoint/angular';
import { SpLineChart } from '@silverpoint/angular/line-chart';

type Row = { hour: string; hits: number };

@Component({
  selector: 'app-explorer',
  imports: [SpLineChart, SpTooltip],
  template: `
    <sp-line-chart
      [data]="data()"
      xKey="hour"
      valueKey="hits"
      title="Hits per hour"
      (activeChange)="active.set($event ? $event.datum['hour'] + ': ' + $event.value : '—')"
      (select)="selected($event.datum)"
    >
      <ng-template spTooltip let-item>
        <strong>{{ item.value }} hits</strong>
      </ng-template>
    </sp-line-chart>
    <p>Under the pointer: {{ active() }}</p>
  `,
})
export class Explorer {
  readonly data = input.required<Row[]>();
  protected readonly active = signal('—');
  protected selected(datum: unknown) {
    console.log('selected', datum);
  }
}""",
    "reflex": """import reflex as rx
from reflex_silverpoint_react import line_chart, tooltip_template


class State(rx.State):
    active: str = "—"

    @rx.event
    def on_active(self, item: dict | None):
        self.active = "—" if item is None else f"{item['datum']['hour']}: {item['value']}"

    @rx.event
    def on_select(self, item: dict):
        print("selected", item["datum"])


line_chart(
    data=DATA,
    x_key="hour",
    value_key="hits",
    on_active_change=State.on_active,
    on_select=State.on_select,
    tooltip=tooltip_template("{datum.hour} h · {value} hits"),
)""",
}

EXPORT = {
    "react": """import { useRef } from 'react';
import { LineChart, type ChartHandle } from '@silverpoint/react/line-chart';

export function Exportable({ data }: { data: { hour: string; hits: number }[] }) {
  const chart = useRef<ChartHandle>(null);
  const download = () => {
    const svg = chart.current?.toSVGString() ?? '';
    window.open(URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' })));
  };
  return (
    <>
      <LineChart ref={chart} data={data} xKey="hour" valueKey="hits" title="Hits per hour" />
      <button onClick={download}>Export SVG</button>
    </>
  );
}""",
    "vue": """<script setup lang="ts">
import { ref } from 'vue';
import { SpLineChart } from '@silverpoint/vue/line-chart';

defineProps<{ data: { hour: string; hits: number }[] }>();
const chart = ref<InstanceType<typeof SpLineChart>>();

function download() {
  const svg = chart.value?.toSVGString() ?? '';
  window.open(URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' })));
}
</script>

<template>
  <SpLineChart ref="chart" :data="data" x-key="hour" value-key="hits" title="Hits per hour" />
  <button @click="download">Export SVG</button>
</template>""",
    "angular": """import { Component, viewChild } from '@angular/core';
import { SpLineChart } from '@silverpoint/angular/line-chart';

@Component({
  selector: 'app-exportable',
  imports: [SpLineChart],
  template: `
    <sp-line-chart #chart [data]="data" xKey="hour" valueKey="hits" title="Hits per hour" />
    <button (click)="download()">Export SVG</button>
  `,
})
export class Exportable {
  protected readonly data = [
    { hour: '00', hits: 18 },
    { hour: '12', hits: 64 },
  ];
  private readonly chart = viewChild.required<SpLineChart>('chart');

  protected download() {
    const svg = this.chart().toSVGString();
    window.open(URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' })));
  }
}""",
    "reflex": """from reflex_silverpoint_react import download_svg, get_geometry, get_svg, line_chart

line_chart(id="hits", data=DATA, x_key="hour", value_key="hits")

rx.button("Download SVG", on_click=download_svg("hits", "hits.svg"))           # in the browser
rx.button("SVG to Python", on_click=get_svg("hits", State.receive_svg))         # handler gets a str
rx.button("Geometry", on_click=get_geometry("hits", State.receive_geometry))    # handler gets a dict""",
}

SSR = {
    "react": """// app/page.tsx — a React Server Component (Next.js App Router)
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { LineChart } from '@silverpoint/react/server/line-chart';

const data = [
  { hour: '00', hits: 18 },
  { hour: '12', hits: 64 },
  { hour: '20', hits: 30 },
];

export default function Page() {
  return <LineChart id="hits" width={480} height={160} data={data} xKey="hour" valueKey="hits" title="Hits per hour" />;
}""",
    "vue": """// entry-server.ts
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { provideSilverpoint } from '@silverpoint/vue';
import App from './App.vue';

export function render(): Promise<string> {
  return renderToString(createSSRApp(App).use(provideSilverpoint({ locale: 'en' })));
}""",
    "angular": """# Angular CLI with @angular/ssr: nothing silverpoint-specific to configure.
ng add @angular/ssr
# angular.json: "outputMode": "server"
npm run build && node dist/my-charts/server/server.mjs""",
    "reflex": """# Reflex compiles your pages to a React app; the charts render on the client.
reflex export --frontend-only     # a static build, as this site is deployed on Vercel""",
}

DASHBOARD_CODE = {
    "react": """import { Dashboard, DashboardCell } from '@silverpoint/react/dashboard';
import { KpiCard } from '@silverpoint/react/kpi-card';
import { LineChart } from '@silverpoint/react/line-chart';
import { BarChart } from '@silverpoint/react/bar-chart';

<Dashboard
  id="ops"
  title="Operations"
  description="Service health over the last day."
  layout={{
    columns: { sm: 1, md: 2, lg: 4 },
    cells: [{ id: 'revenue' }, { id: 'traffic', colSpan: { md: 2, lg: 3 }, rowSpan: 2 }, { id: 'errors' }],
  }}
  link={{ key: 'hour' }}
  onLinkChange={(linked) => console.log(linked)}   // { key: 'hour', value: '18' } or null
>
  <DashboardCell cell="revenue"><KpiCard title="Revenue" metric="thousands" delta={6.4} /></DashboardCell>
  <DashboardCell cell="traffic"><LineChart data={ops} xKey="hour" valueKey="hits" title="Traffic" /></DashboardCell>
  <DashboardCell cell="errors"><BarChart data={ops} xKey="hour" valueKey="errors" title="Errors" /></DashboardCell>
</Dashboard>""",
    "vue": """<script setup lang="ts">
import { SpDashboard, SpDashboardCell } from '@silverpoint/vue/dashboard';
import { SpKpiCard } from '@silverpoint/vue/kpi-card';
import { SpLineChart } from '@silverpoint/vue/line-chart';
import { SpBarChart } from '@silverpoint/vue/bar-chart';

const layout = {
  columns: { sm: 1, md: 2, lg: 4 },
  cells: [{ id: 'revenue' }, { id: 'traffic', colSpan: { md: 2, lg: 3 }, rowSpan: 2 }, { id: 'errors' }],
};
</script>

<template>
  <SpDashboard id="ops" title="Operations" :layout="layout" :link="{ key: 'hour' }" @link-change="console.log">
    <SpDashboardCell cell="revenue"><SpKpiCard title="Revenue" metric="thousands" :delta="6.4" /></SpDashboardCell>
    <SpDashboardCell cell="traffic"><SpLineChart :data="ops" x-key="hour" value-key="hits" title="Traffic" /></SpDashboardCell>
    <SpDashboardCell cell="errors"><SpBarChart :data="ops" x-key="hour" value-key="errors" title="Errors" /></SpDashboardCell>
  </SpDashboard>
</template>""",
    "angular": """import { Component } from '@angular/core';
import { SpDashboard, SpDashboardCell } from '@silverpoint/angular/dashboard';
import { SpKpiCard } from '@silverpoint/angular/kpi-card';
import { SpLineChart } from '@silverpoint/angular/line-chart';
import { SpBarChart } from '@silverpoint/angular/bar-chart';

@Component({
  selector: 'app-ops',
  imports: [SpDashboard, SpDashboardCell, SpKpiCard, SpLineChart, SpBarChart],
  template: `
    <sp-dashboard id="ops" title="Operations" [layout]="layout" [link]="{ key: 'hour' }" (linkChange)="linked = $event">
      <sp-dashboard-cell cell="revenue"><sp-kpi-card title="Revenue" metric="thousands" [delta]="6.4" /></sp-dashboard-cell>
      <sp-dashboard-cell cell="traffic"><sp-line-chart [data]="ops" xKey="hour" valueKey="hits" title="Traffic" /></sp-dashboard-cell>
      <sp-dashboard-cell cell="errors"><sp-bar-chart [data]="ops" xKey="hour" valueKey="errors" title="Errors" /></sp-dashboard-cell>
    </sp-dashboard>
  `,
})
export class Ops {
  protected linked: { key: string; value: unknown } | null = null;
  protected readonly layout = {
    columns: { sm: 1, md: 2, lg: 4 },
    cells: [{ id: 'revenue' }, { id: 'traffic', colSpan: { md: 2, lg: 3 }, rowSpan: 2 }, { id: 'errors' }],
  };
  protected readonly ops = [/* { hour: '00', hits: 18, errors: 2 }, … */];
}""",
    "reflex": """from reflex_silverpoint_react import (
    bar_chart, dashboard, dashboard_cell, dashboard_cell_layout, dashboard_layout, kpi_card, line_chart,
)

dashboard(
    dashboard_cell(kpi_card(title="Revenue", metric="thousands", delta=6.4), cell="revenue"),
    dashboard_cell(line_chart(data=OPS, x_key="hour", value_key="hits", title="Traffic"), cell="traffic"),
    dashboard_cell(bar_chart(data=OPS, x_key="hour", value_key="errors", title="Errors"), cell="errors"),
    id="ops",
    title="Operations",
    description="Service health over the last day.",
    layout=dashboard_layout(
        ["revenue", dashboard_cell_layout("traffic", col_span={"md": 2, "lg": 3}, row_span=2), "errors"],
        columns={"sm": 1, "md": 2, "lg": 4},
    ),
    link="hour",                    # link the charts on the rows' "hour" field
    on_link_change=State.on_link,   # {"key": "hour", "value": "18"} or None
)""",
}


# ── Live pieces ──────────────────────────────────────────────────────────────────────────


def live(*children: Any) -> rx.Component:
    return paper_card(*children, class_name="spw-live")


def ops_dashboard() -> rx.Component:
    keys = {"x_key": "hour"}
    return dashboard(
        dashboard_cell(
            kpi_card(data=ds.KPI_CARD, title="Revenue", metric="thousands", delta=6.4), cell="revenue"
        ),
        dashboard_cell(
            kpi_card(data=ds.KPI_CARD[::-1], title="Churn", metric="per cent", delta=-0.4), cell="churn"
        ),
        dashboard_cell(
            line_chart(data=ds.OPS_HOURLY, **keys, value_key="hits", title="Traffic", unit="hits"),
            cell="traffic",
        ),
        dashboard_cell(
            bar_chart(data=ds.OPS_HOURLY, **keys, value_key="errors", title="Errors"), cell="errors"
        ),
        dashboard_cell(gauge_arc(percent=99, caption="Uptime", title="Uptime"), cell="uptime"),
        dashboard_cell(
            area_chart(data=ds.OPS_HOURLY, **keys, value_key="load", title="Load", unit="%"), cell="load"
        ),
        dashboard_cell(meter_chart(percent=64, caption="Capacity used", title="Capacity"), cell="capacity"),
        id="ops",
        title="Operations",
        description="Service health over the last day. Hover or focus an hour in any chart: the others mark the same hour.",
        layout=dashboard_layout(
            [
                "revenue",
                "churn",
                dashboard_cell_layout("traffic", col_span={"md": 2, "lg": 2}, row_span=2),
                "errors",
                "uptime",
                dashboard_cell_layout("load", col_span={"md": 2, "lg": 2}),
                "capacity",
            ],
            columns={"sm": 1, "md": 2, "lg": 4},
        ),
        link="hour",
        heading_level=3,
    )


# ── Pages ────────────────────────────────────────────────────────────────────────────────


def overview() -> Callable[[], rx.Component]:
    return page(
        "/docs",
        "Overview",
        "silverpoint draws charts for React, Vue and Angular in the manner of historical drawing technique. "
        "This documentation covers installing it, the four ways to use it (the three frameworks and Reflex), "
        "the concepts every chart shares, and a reference page for each chart.",
        [
            (
                "what",
                "What silverpoint is",
                [
                    rx.el.p(
                        "The first ground reproduces the mechanics of Renaissance ",
                        rx.el.em("silverpoint"),
                        ": a prepared middle-tone substrate, a fine silver line, tonal value built from hatch density, "
                        "and white heightening reserved for the live value. The second, ",
                        rx.el.em("cyanotype"),
                        ", prints a white line on Prussian blue whose tone is its weight.",
                    ),
                    rx.el.p(
                        "Unlike every other hand-drawn charting library, the irregularity lives only in the ornament: "
                        "the geometry of the data is exact, and every chart offers a ",
                        c("precision"),
                        " mode with the inking switched off entirely.",
                    ),
                    live(
                        rx.el.div(
                            line_chart(
                                data=ds.LINE_CHART,
                                x_key="hour",
                                value_key="hits",
                                secondary_key="baseline",
                                title="ink",
                                height=130,
                            ),
                            line_chart(
                                data=ds.LINE_CHART,
                                x_key="hour",
                                value_key="hits",
                                secondary_key="baseline",
                                title="precision",
                                mode="precision",
                                height=130,
                            ),
                            class_name="spw-grid spw-grid-2",
                        )
                    ),
                ],
            ),
            (
                "features",
                "At a glance",
                [
                    table(
                        ["", ""],
                        [
                            [
                                "Charts",
                                f"{len(CHARTS)}, enabled in every adapter, in {len(FAMILIES)} families: "
                                + ", ".join(FAMILIES),
                            ],
                            [
                                "Frameworks",
                                "React 18.2+ / 19 · Vue 3.5 · Angular 21–22 · and Python through Reflex",
                            ],
                            [
                                "Integrations",
                                "Vite, Next.js (App Router, RSC), Angular CLI (with @angular/ssr)",
                            ],
                            ["Grounds", "silverpoint (cream, green, blue, ochre) · cyanotype (prussian)"],
                            [
                                "Composition",
                                "Dashboard: a responsive, linkable grid laid out from plain data",
                            ],
                            [
                                "Accessibility",
                                "Accessible names, hidden data tables, keyboard navigation, contrast fallbacks",
                            ],
                            [
                                "Current version",
                                rx.el.a(f"{sd.LATEST.version} ({sd.LATEST.date})", href="/versions"),
                            ],
                            ["License", ext_link("MIT", sd.REPO_LICENSE)],
                        ],
                    )
                ],
            ),
            (
                "architecture",
                "How it is built",
                [
                    rx.el.p(
                        "Seven packages share one version. ",
                        c("@silverpoint/core"),
                        " computes every scale, arc and layout, with no DOM and no framework. ",
                        c("@silverpoint/grounds"),
                        " holds the grounds, their inkers and the stylesheet. The adapters (",
                        c("@silverpoint/react"),
                        ", ",
                        c("@silverpoint/vue"),
                        ", ",
                        c("@silverpoint/angular"),
                        ") only translate the core's geometry into their own markup: no maths in the adapters. "
                        "CI parses each adapter's SVG and compares it as a tree against the canonical render.",
                    ),
                    code_block(
                        "@silverpoint/core ──► @silverpoint/grounds ──► @silverpoint/react   (JSX)\n"
                        "                                           ├─► @silverpoint/vue     (VNodes)\n"
                        "                                           └─► @silverpoint/angular (templates)\n"
                        "                                                   │\n"
                        "      reflex-silverpoint-react (Python) ◄──────────┘ wraps @silverpoint/react",
                        "packages",
                    ),
                    rx.el.a("All the packages →", href="/packages"),
                ],
            ),
            (
                "next",
                "Where to go next",
                [
                    rx.el.ul(
                        rx.el.li(
                            rx.el.a("Installation", href="/docs/installation"),
                            " — what to install for each framework.",
                        ),
                        rx.el.li(
                            "Quickstarts: ",
                            rx.el.a("React", href="/docs/react"),
                            " · ",
                            rx.el.a("Vue", href="/docs/vue"),
                            " · ",
                            rx.el.a("Angular", href="/docs/angular"),
                            " · ",
                            rx.el.a("Reflex", href="/docs/reflex"),
                            ".",
                        ),
                        rx.el.li(rx.el.a("Gallery", href="/gallery"), f" — the {len(CHARTS)} charts, live."),
                        rx.el.li(
                            rx.el.a("Chart reference", href="/charts"), " — props and code for each chart."
                        ),
                        rx.el.li(rx.el.a("Report a bug", href="/support"), " — how to open a useful issue."),
                    )
                ],
            ),
        ],
        eyebrow="Getting started",
    )


def installation() -> Callable[[], rx.Component]:
    fw_rows = [
        [rx.el.strong(fw.label), rx.el.code(fw.package), fw.peers, fw.integration] for fw in sd.FRAMEWORKS
    ]
    return page(
        "/docs/installation",
        "Installation",
        "Install the adapter for your framework, the grounds stylesheet, and (optionally) the typeface. A bundler is "
        "required: Vite, Next.js or the Angular CLI.",
        [
            (
                "requirements",
                "Requirements",
                [table(["Framework", "Package", "Peers", "Integration"], fw_rows)],
            ),
            (
                "install",
                "Install",
                [
                    rx.el.p("Pick your framework; the choice is remembered on every page of the site."),
                    framework_tabs(INSTALLS),
                    table(
                        ["Package", "Why"],
                        [
                            [
                                c("@silverpoint/<adapter>"),
                                "The components. Brings @silverpoint/core with it.",
                            ],
                            [
                                c("@silverpoint/grounds"),
                                "The stylesheet (styles.css) that colours the strokes. Required.",
                            ],
                            [
                                c("@silverpoint/fonts"),
                                "Optional. Self-hosted EB Garamond, the typeface the charts are designed for.",
                            ],
                        ],
                    ),
                ],
            ),
            (
                "stylesheets",
                "Import the stylesheets once",
                [
                    rx.el.p(
                        "Import the two stylesheets once, at the root of the app: in ",
                        c("main.tsx"),
                        " / ",
                        c("main.ts"),
                        " or the root component for React and Vue, in ",
                        c("src/styles.css"),
                        " for Angular. The packages declare ",
                        c("sideEffects: false"),
                        " except for .css, so no bundler drops the import.",
                    ),
                    code_block(
                        "// React / Vue\nimport '@silverpoint/fonts/fonts.css';\nimport '@silverpoint/grounds/styles.css';\n\n"
                        "/* Angular: src/styles.css */\n@import '@silverpoint/fonts/fonts.css';\n@import '@silverpoint/grounds/styles.css';",
                        "css",
                    ),
                    callout(
                        "In Reflex there is nothing to import: ",
                        c("reflex-silverpoint-react"),
                        " installs the npm packages and adds both stylesheets for you.",
                        kind="tip",
                    ),
                ],
            ),
            (
                "cdn",
                "No CDN, no Tailwind",
                [
                    rx.el.p(
                        "silverpoint is distributed as ES modules for bundlers. It needs no CDN and no Tailwind; the "
                        "optional ",
                        rx.el.a("Tailwind preset", href="/docs/tailwind"),
                        " only names its variables for the rest of your page.",
                    )
                ],
            ),
        ],
        eyebrow="Getting started",
    )


def framework_guide(key: str) -> Callable[[], rx.Component]:
    fw = next(f for f in sd.FRAMEWORKS if f.key == key)
    names = {
        "react": ("LineChart", "@silverpoint/react/<chart>", "SilverpointProvider"),
        "vue": ("SpLineChart", "@silverpoint/vue/<chart>", "provideSilverpoint (plugin)"),
        "angular": (
            "SpLineChart · <sp-line-chart>",
            "@silverpoint/angular/<chart>",
            "provideSilverpoint (provider)",
        ),
        "reflex": ("line_chart / LineChart", "reflex_silverpoint_react", "silverpoint_provider"),
    }[key]

    def one(code: str, label: str) -> rx.Component:
        return code_block(code, label)

    lang = {"react": "tsx", "vue": "vue", "angular": "ts", "reflex": "python"}[key]
    sections: list[Section] = [
        (
            "install",
            "Install",
            [
                table(
                    ["", ""],
                    [
                        [
                            "Package",
                            ext_link(
                                fw.package, sd.REFLEX_PYPI if key == "reflex" else sd.npm_url(fw.package)
                            ),
                        ],
                        ["Peers", fw.peers],
                        ["Integration", fw.integration],
                        ["Components", c(names[0])],
                        ["Import from", c(names[1])],
                        ["App-wide configuration", c(names[2])],
                    ],
                ),
                shell(fw.install),
            ],
        ),
        (
            "quickstart",
            "Quickstart",
            [
                rx.el.p("Create a fresh app and install silverpoint:"),
                shell(CREATES[key]),
                rx.el.p("Then replace the app's entry with:"),
                one(QUICKSTART_FILES[key], lang),
                live(line_chart(data=QUICK_DATA, x_key="hour", value_key="hits", title="Hits per hour")),
                rx.el.p(
                    "The chart takes the width of its container. ",
                    c("height"),
                    " is the height of the drawing area and defaults to 160 px. Omit ",
                    c("data"),
                    " and a chart draws its own demo dataset.",
                ),
            ],
        ),
        (
            "provider",
            "One ground for the whole app",
            [
                rx.el.p(
                    "Set the ground, the substrate, the mode and the locale once for every chart. A prop on a chart always wins."
                ),
                one(PROVIDER[key], lang),
                live(
                    silverpoint_provider(
                        rx.el.div(
                            bar_chart(
                                data=SALES, x_key="month", value_key="units", title="Units sold", unit="units"
                            ),
                            donut_chart(
                                data=CHANNELS,
                                name_key="channel",
                                value_key="share",
                                title="Sales by channel",
                                center_label="%",
                            ),
                            class_name="spw-grid spw-grid-2",
                        ),
                        ground="silverpoint",
                        substrate="green",
                        locale="en-GB",
                    )
                ),
            ],
        ),
        ("precision", "Precision mode", [one(PRECISION[key], lang)]),
        (
            "interaction",
            "Interaction and a custom readout",
            [one(INTERACTION[key], lang)],
        ),
        ("export", "Export: the imperative handle", [one(EXPORT[key], lang)]),
        ("ssr", "Server rendering", [one(SSR[key], "shell" if key in ("angular", "reflex") else lang)]),
        (
            "charts",
            f"The {len(CHARTS)} charts",
            [
                rx.el.p("Every chart has a reference page with its example in this framework:"),
                rx.el.div(
                    *[
                        rx.el.a(
                            {
                                "react": info.chart,
                                "vue": "Sp" + info.chart,
                                "angular": f"sp-{info.slug}",
                                "reflex": info.factory_name,
                            }[key],
                            href=f"/charts/{info.slug}",
                        )
                        for info in CHARTS
                    ],
                    class_name="spw-chip-list",
                ),
            ],
        ),
    ]
    if key == "reflex":
        sections.insert(
            1,
            (
                "about",
                "About the Reflex component",
                [
                    rx.el.p(
                        ext_link("reflex-silverpoint-react", sd.REFLEX_REPO),
                        " is a Reflex custom component that wraps @silverpoint/react ",
                        sd.LATEST.version,
                        ". It exposes all 33 charts, the Dashboard (with linking), the provider, both grounds, the "
                        "interaction events, custom readouts (tooltip_template) and the imperative handle (download_svg, "
                        "get_svg, get_geometry) as Python.",
                    ),
                    rx.el.p(
                        "Props are the React props in snake_case: ",
                        c("xKey → x_key"),
                        ", ",
                        c("hatchFill → hatch_fill"),
                        ", ",
                        c("centerLabel → center_label"),
                        ". Every prop, data included, can be a state var. ",
                        c("reflex_silverpoint_react.CHARTS"),
                        " is the whole catalog, with each chart's family and props: this site is built from it.",
                    ),
                    callout(
                        "Accessors are field names (strings). The JavaScript API also takes functions; from Python, shape your rows instead.",
                        kind="note",
                    ),
                ],
            ),
        )
    if key == "react":
        sections.insert(
            -1,
            (
                "nextjs",
                "Next.js and React Server Components",
                [
                    rx.el.p(
                        'The default subpaths are client components ("use client") that work in the App Router and hydrate '
                        "without a mismatch. For pure SVG with no client JavaScript, import from ",
                        c("@silverpoint/react/server/<chart>"),
                        ": no interaction, and id, width and height are required outside a Dashboard.",
                    )
                ],
            ),
        )
    return page(
        f"/docs/{key}",
        f"{fw.label}" if key != "reflex" else "Reflex (Python)",
        f"Everything you need to use silverpoint with {fw.label}: install, quickstart, app-wide configuration, "
        "precision mode, interaction, export and server rendering.",
        sections,
        eyebrow="Getting started · Frameworks",
    )


def grounds() -> Callable[[], rx.Component]:
    substrates = rx.el.div(
        *[
            rx.el.figure(
                area_chart(data=ds.AREA_CHART, title=s, substrate=s, height=100),
                rx.el.figcaption(f'substrate="{s}"'),
            )
            for s in sd.SUBSTRATES
        ],
        rx.el.figure(
            area_chart(data=ds.AREA_CHART, title="prussian", ground="cyanotype", height=100),
            rx.el.figcaption('ground="cyanotype"'),
        ),
        class_name="spw-grid spw-grid-5",
    )
    return page(
        "/docs/grounds",
        "Grounds & substrates",
        "A ground is a whole drawing technique: the prepared substrate, the inks, and how tone is made. A substrate is the "
        "colour the ground is prepared on. Neither changes the data geometry.",
        [
            (
                "grounds",
                "The two grounds",
                [
                    table(
                        ["Ground", "Tone is built by", "Substrates"],
                        [
                            [
                                c("silverpoint"),
                                "Hatching, drawn by hand (RoughInker). Default.",
                                "cream, green, blue, ochre",
                            ],
                            [
                                c("cyanotype"),
                                "The weight of an exact white line on Prussian blue (WeightInker); nothing is hatched.",
                                "prussian",
                            ],
                        ],
                    ),
                    substrates,
                ],
            ),
            (
                "setting",
                "Setting the ground",
                [
                    rx.el.p(
                        "On a chart (",
                        c('ground="cyanotype"'),
                        "), on the app-wide provider, or on a Dashboard, which passes it to every chart inside. A prop on a chart always wins.",
                    ),
                    framework_tabs(PROVIDER),
                ],
            ),
            (
                "css",
                "Re-theming with CSS",
                [
                    rx.el.p(
                        "Every stroke carries a part attribute bound to a public custom property. Overriding a property "
                        "re-themes the charts without re-rendering them:"
                    ),
                    code_block(
                        ".sp-ground-silverpoint[data-substrate='cream'] {\n  --sp-ink: #4d525a;\n  --sp-ink-secondary: #6b5a45;\n"
                        "  --sp-font-display: 'EB Garamond', Georgia, serif;\n}",
                        "css",
                    ),
                    rx.el.p(
                        "Public properties: ",
                        *[
                            item
                            for v in (
                                "--sp-substrate",
                                "--sp-ink",
                                "--sp-ink-secondary",
                                "--sp-heighten",
                                "--sp-rule",
                                "--sp-grid",
                                "--sp-text",
                                "--sp-text-muted",
                                "--sp-font-display",
                                "--sp-stroke-width",
                                "--sp-hatch-gap",
                                "--sp-radius",
                                "--sp-weight-1…4",
                            )
                            for item in (c(v), " ")
                        ],
                    ),
                    callout(
                        "The palette is computed for WCAG contrast, not chosen by eye. If you change an ink, check the contrast again. "
                        "Every white heightening carries an ink outline so it passes contrast on every substrate.",
                        kind="warn",
                    ),
                ],
            ),
        ],
        eyebrow="Concepts",
    )


def precision() -> Callable[[], rx.Component]:
    return page(
        "/docs/precision",
        "Ink & precision",
        "Every chart has two modes. ink (the default) draws by hand; precision switches the inking off entirely and "
        "draws exact, even strokes.",
        [
            (
                "compare",
                "Side by side",
                [
                    live(
                        rx.el.div(
                            bar_chart(
                                data=ds.BAR_CHART,
                                x_key="x",
                                value_key="value",
                                secondary_key="previous",
                                title='mode="ink"',
                                height=140,
                            ),
                            bar_chart(
                                data=ds.BAR_CHART,
                                x_key="x",
                                value_key="value",
                                secondary_key="previous",
                                title='mode="precision"',
                                mode="precision",
                                height=140,
                            ),
                            class_name="spw-grid spw-grid-2",
                        )
                    ),
                    framework_tabs(PRECISION),
                ],
            ),
            (
                "when",
                "When to use it",
                [
                    rx.el.ul(
                        rx.el.li("Print, and dense dashboards where many small charts sit together."),
                        rx.el.li("Readers who prefer it: offer it as a setting."),
                        rx.el.li(
                            "Automatically: a chart switches to precision by itself under ",
                            c("prefers-contrast: more"),
                            " or ",
                            c("forced-colors: active"),
                            ". No prop overrides that.",
                        ),
                    )
                ],
            ),
            (
                "determinism",
                "The drawing is deterministic",
                [
                    rx.el.p(
                        "The hand drawing never uses Math.random() or Date.now() on the render path. Its seed derives from ",
                        c("id"),
                        " (or is given as ",
                        c("seed"),
                        "), so the same props draw the same strokes on the server and in the browser, and a snapshot test stays stable.",
                    )
                ],
            ),
        ],
        eyebrow="Concepts",
    )


def common_props() -> Callable[[], rx.Component]:
    defaults = [
        [
            c("data"),
            "demo dataset",
            "The rows to draw. Without it the demo dataset renders; accessor props are ignored, every other prop applies.",
        ],
        [
            c("ground / substrate / mode"),
            "'silverpoint' / 'cream' / 'ink'",
            "Style; mode 'precision' turns off inking.",
        ],
        [c("seed, id"), "derived, stable", "The hand drawing is deterministic: same props, same strokes."],
        [c("height, width"), "160, container width", "Size of the drawing area in px."],
        [c("chrome"), "'card'", "'bare' draws only the plot."],
        [c("title, badge, value, unit, footerLeft, footerRight"), "—", "The card's text."],
        [c("label, description, dataTable"), "from title, —, 'hidden'", "Accessibility."],
        [c("locale, numberFormat"), "environment", "Number formatting (Intl.NumberFormatOptions)."],
        [c("hatchFill"), "'tile'", "'per-shape' gives richer hatching at a much greater weight."],
    ]
    return page(
        "/docs/props",
        "Common props",
        "The props every chart takes, besides its own. Names follow each framework: camelCase in React and Angular, "
        "kebab-case in Vue templates, snake_case in Reflex.",
        [
            ("defaults", "Defaults", [table(["Prop", "Default", "What it does"], defaults)]),
            ("reference", "Reference", [props_table(COMMON_PROPS)]),
            (
                "accessors",
                "Accessor props",
                [
                    rx.el.p(
                        "Each chart names the fields of your rows with accessor props: ",
                        c("xKey"),
                        ", ",
                        c("valueKey"),
                        ", ",
                        c("nameKey"),
                        ", ",
                        c("keys"),
                        "… Their names and meaning are on each ",
                        rx.el.a("chart's reference page", href="/charts"),
                        ". In JavaScript an accessor can also be a function of the row.",
                    )
                ],
            ),
        ],
        eyebrow="Concepts",
    )


def interaction() -> Callable[[], rx.Component]:
    return page(
        "/docs/interaction",
        "Interaction & readouts",
        "Charts are explorable by pointer and keyboard out of the box. You can listen to the item under the pointer or "
        "focus, react to a selection, and replace the built-in readout.",
        [
            (
                "try",
                "Try it",
                [
                    rx.el.p(
                        "Hover, or focus the chart with Tab and use the arrow keys. This readout is a custom template: ",
                        c('tooltip_template("{datum.hour} h · {value} hits")'),
                        ".",
                    ),
                    live(
                        line_chart(
                            data=ds.LINE_CHART,
                            x_key="hour",
                            value_key="hits",
                            title="Hits per hour",
                            tooltip=tooltip_template("{datum.hour} h · {value} hits"),
                            height=180,
                        )
                    ),
                ],
            ),
            (
                "events",
                "Events",
                [
                    table(
                        ["", "React", "Vue", "Angular", "Reflex"],
                        [
                            [
                                "Item under pointer/focus",
                                c("onActiveChange"),
                                c("@active-change"),
                                c("(activeChange)"),
                                c("on_active_change"),
                            ],
                            [
                                "Selection (click, Enter, Space)",
                                c("onSelect"),
                                c("@select"),
                                c("(select)"),
                                c("on_select"),
                            ],
                            [
                                "Custom readout",
                                c("tooltip={fn}"),
                                c("#tooltip slot"),
                                c("ng-template spTooltip"),
                                c("tooltip_template()"),
                            ],
                        ],
                    ),
                    rx.el.p(
                        "The item is ",
                        c("{ seriesKey, index, datum, value, point: { x, y } }"),
                        ", and the active item is ",
                        c("null"),
                        " when it leaves.",
                    ),
                ],
            ),
            ("code", "In your code", [framework_tabs(INTERACTION)]),
        ],
        eyebrow="Concepts",
    )


def export() -> Callable[[], rx.Component]:
    return page(
        "/docs/export",
        "Export & imperative handle",
        "Each chart exposes a handle with toSVGString() and getGeometry(). The exported SVG carries its own ground "
        "colours, so it renders the same outside the app.",
        [
            (
                "try",
                "Try it",
                [
                    live(
                        donut_chart(
                            data=ds.DONUT_CHART,
                            id="export-demo",
                            title="Monthly budget",
                            center_label="percent",
                        ),
                        rx.el.button(
                            rx.icon("download", size=14),
                            " Download this chart as SVG",
                            on_click=download_svg("export-demo", "silverpoint-donut.svg"),
                            class_name="spw-button",
                            type="button",
                        ),
                    )
                ],
            ),
            ("code", "In your code", [framework_tabs(EXPORT)]),
        ],
        eyebrow="Concepts",
    )


def dashboards() -> Callable[[], rx.Component]:
    dash_props = [
        [c("id"), "string, required", "Stable id; charts inside get derived ids (ops--traffic)."],
        [
            c("title / label"),
            "string",
            "A visible heading, or an accessible name without one. One of them is required.",
        ],
        [
            c("layout"),
            "DashboardLayout",
            "columns, rowHeight (240), gap (16) and cells: [{ id, colSpan, rowSpan }] — per breakpoint if you like.",
        ],
        [c("link"), "{ key: string }", "Links the charts on a datum field."],
        [c("description"), "string", "A line under the title."],
        [c("headingLevel"), "2–6", "The heading level of the title."],
        [c("ssrWidth"), "number", "The width the grid is laid out for before the browser measures it."],
        [
            c("ground, substrate, mode, locale"),
            "",
            "Passed to every chart inside, below the chart's own props.",
        ],
    ]
    return page(
        "/docs/dashboard",
        "Dashboards",
        "New in 0.2. A Dashboard lays charts out in a titled, responsive grid from a data-only layout, sizes each chart "
        "to its cell, passes the ground to every chart inside, and can link them on a field.",
        [
            (
                "live",
                "A linked dashboard",
                [
                    rx.el.p(
                        "Breakpoints are the dashboard's own width: sm below 640 px, md up to 1024 px, lg above. The "
                        "defaults are 1, 2 and 4 columns. Point at an hour in any chart: the others mark the same hour."
                    ),
                    rx.el.div(ops_dashboard(), class_name="spw-dashboard-wrap"),
                ],
            ),
            ("code", "In your code", [framework_tabs(DASHBOARD_CODE)]),
            ("props", "Props", [table(["Prop", "Type", "What it does"], dash_props)]),
            (
                "link",
                "Linking",
                [
                    rx.el.p(
                        "With ",
                        c("link={{ key: 'hour' }}"),
                        ", exploring an item in one chart marks, in every other chart, the items whose datum has the same ",
                        c("hour"),
                        ". The marks are hidden from assistive technology, and linked state never reaches the server render. "
                        "A chart whose rows have no such field warns SP016. In React the link is its own client boundary, ",
                        c("@silverpoint/react/dashboard-link"),
                        "; in Reflex, ",
                        c("dashboard_link(...)"),
                        " links charts you lay out yourself.",
                    )
                ],
            ),
        ],
        eyebrow="Concepts",
    )


def ssr() -> Callable[[], rx.Component]:
    return page(
        "/docs/ssr",
        "Server rendering",
        "The three adapters render on the server without touching the DOM and hydrate without a mismatch: the drawing is "
        "deterministic, so server and client draw the same strokes.",
        [
            (
                "frameworks",
                "Per framework",
                [
                    table(
                        ["Framework", "How"],
                        [
                            [
                                "React / Next.js",
                                "Default subpaths are client components; @silverpoint/react/server/<chart> renders pure SVG in a Server Component.",
                            ],
                            [
                                "Vue",
                                "@vue/server-renderer with createSSRApp; Nuxt consumes it like any Vue app (not a validated integration).",
                            ],
                            [
                                "Angular",
                                "@angular/ssr with outputMode 'server'; the example app is server-rendered in CI.",
                            ],
                            [
                                "Reflex",
                                "Charts render on the client; a static export (reflex export --frontend-only) works, as this site shows.",
                            ],
                        ],
                    )
                ],
            ),
            ("code", "In your code", [framework_tabs(SSR)]),
        ],
        eyebrow="Concepts",
    )


def accessibility() -> Callable[[], rx.Component]:
    return page(
        "/docs/accessibility",
        "Accessibility",
        "Every chart is an image with a name, a description and a data table, explorable from the keyboard.",
        [
            (
                "built-in",
                "Built in",
                [
                    rx.el.ul(
                        rx.el.li(
                            c('role="img"'),
                            " with an accessible name (",
                            c("label"),
                            ", from ",
                            c("title"),
                            " by default) and a generated description.",
                        ),
                        rx.el.li(
                            "A data table: hidden for assistive technology by default, or visible with ",
                            c('dataTable="visible"'),
                            ".",
                        ),
                        rx.el.li(
                            "Keyboard exploration: focus the chart, move with the arrow keys, select with Enter or Space; readouts are announced."
                        ),
                        rx.el.li(
                            "Automatic precision mode under prefers-contrast: more and forced-colors: active."
                        ),
                        rx.el.li(
                            "A palette computed for WCAG contrast, enforced in CI; white heightening always carries an ink outline."
                        ),
                        rx.el.li(
                            "Linked-dashboard marks are hidden from assistive technology so they never duplicate a readout."
                        ),
                    )
                ],
            ),
            (
                "props",
                "Props",
                [
                    table(
                        ["Prop", "Default", ""],
                        [
                            [c("label"), "from title", "Accessible name."],
                            [c("description"), "generated", "Long description for screen readers."],
                            [
                                c("dataTable"),
                                "'hidden'",
                                "'visible', 'hidden' (assistive technology only) or 'none'.",
                            ],
                        ],
                    ),
                    live(
                        bar_chart(
                            data=ds.BAR_CHART,
                            x_key="x",
                            value_key="value",
                            title="Revenue by quarter",
                            data_table="visible",
                            height=120,
                        )
                    ),
                ],
            ),
        ],
        eyebrow="Concepts",
    )


def tailwind() -> Callable[[], rx.Component]:
    return page(
        "/docs/tailwind",
        "Tailwind preset",
        "Optional. @silverpoint/tailwind names the charts' public --sp- variables as theme tokens, so the rest of your page "
        "can use the ink, the substrate and the typeface of the ground your charts are drawn on. silverpoint never requires Tailwind.",
        [
            ("install", "Install", [shell("npm install @silverpoint/tailwind")]),
            (
                "v4",
                "Tailwind 4",
                [
                    code_block(
                        "@import 'tailwindcss';\n@import '@silverpoint/grounds/styles.css';\n@import '@silverpoint/tailwind/theme.css';",
                        "css",
                    )
                ],
            ),
            (
                "v3",
                "Tailwind 3.4",
                [
                    code_block(
                        "// tailwind.config.js\nimport silverpoint from '@silverpoint/tailwind';\n\nexport default {\n"
                        "  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],\n  presets: [silverpoint],\n};",
                        "js",
                    )
                ],
            ),
            (
                "utilities",
                "Utilities",
                [
                    table(
                        ["Utilities", "Tokens", "Reads"],
                        [
                            [
                                "bg-, text-, border-, ring- …",
                                "sp-substrate, sp-ink, sp-ink-secondary, sp-heighten, sp-rule, sp-grid, sp-text, sp-text-muted",
                                c("var(--sp-<token>)"),
                            ],
                            [c("font-sp-display"), "", c("var(--sp-font-display)")],
                            [c("rounded-sp"), "", c("var(--sp-radius)")],
                        ],
                    ),
                    code_block(
                        '<section class="sp-ground-cyanotype bg-sp-substrate text-sp-text font-sp-display rounded-sp p-4">\n'
                        '  <h2 class="border-b border-sp-rule">Operations</h2>\n  <!-- charts … -->\n</section>',
                        "html",
                    ),
                ],
            ),
        ],
        eyebrow="Concepts",
    )


def register(app: rx.App) -> None:
    pages: list[tuple[Callable[[], rx.Component], str, str]] = [
        (overview(), "/docs", "Overview"),
        (installation(), "/docs/installation", "Installation"),
        (framework_guide("react"), "/docs/react", "React"),
        (framework_guide("vue"), "/docs/vue", "Vue"),
        (framework_guide("angular"), "/docs/angular", "Angular"),
        (framework_guide("reflex"), "/docs/reflex", "Reflex (Python)"),
        (grounds(), "/docs/grounds", "Grounds & substrates"),
        (precision(), "/docs/precision", "Ink & precision"),
        (common_props(), "/docs/props", "Common props"),
        (interaction(), "/docs/interaction", "Interaction & readouts"),
        (export(), "/docs/export", "Export & imperative handle"),
        (dashboards(), "/docs/dashboard", "Dashboards"),
        (ssr(), "/docs/ssr", "Server rendering"),
        (accessibility(), "/docs/accessibility", "Accessibility"),
        (tailwind(), "/docs/tailwind", "Tailwind preset"),
    ]
    for component, route, title in pages:
        app.add_page(component, route=route, title=f"{title} · silverpoint docs")
