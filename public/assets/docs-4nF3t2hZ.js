import{G as e,J as t}from"./components-DzQT6F3y.js";import{n,r,t as i}from"./state-05ANjcUM.js";import{n as a}from"./emotion-react.browser.esm-alFgrGzY.js";import{r as o}from"./context-BXa-k1p8.js";import{i as s}from"./tabs-DlU6gJ4q.js";var c=t(e(),1),l=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`@silverpoint/core ──► @silverpoint/grounds ──► @silverpoint/react   (JSX)
                                           ├─► @silverpoint/vue     (VNodes)
                                           └─► @silverpoint/angular (templates)
                                                   │
      reflex-silverpoint-react (Python) ◄──────────┘ wraps @silverpoint/react`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),u=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/react @silverpoint/grounds @silverpoint/fonts`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),d=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/vue @silverpoint/grounds @silverpoint/fonts`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),f=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/angular @silverpoint/grounds @silverpoint/fonts`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),p=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`pip install reflex-silverpoint-react`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),m=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let l=(0,c.useCallback)((e=>(e=>r._client_state_setSp_framework(e))(e)),[o,i]),u=(0,c.useId)(),[d,f]=(0,c.useState)(`react`);return r._client_state_setSp_framework=(e=>Array.prototype.forEach.call([...Object.values(r._client_state_dict_setSp_framework),e=>{r._client_state_sp_framework=e}],(t=>t(e)))),r._client_state_sp_framework??=d,r._client_state_dict_sp_framework??={},r._client_state_dict_setSp_framework??={},r._client_state_dict_sp_framework[u]=r._client_state_sp_framework,r._client_state_dict_setSp_framework[u]=f,a(s,{...n(t,{className:`spw-tabs`,css:{"&[data-orientation='vertical']":{display:`flex`}},onValueChange:l,value:r._client_state_dict_sp_framework[u]})},e)});return e.displayName=`TabsRoot`,e})(),h=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// React / Vue
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';

/* Angular: src/styles.css */
@import '@silverpoint/fonts/fonts.css';
@import '@silverpoint/grounds/styles.css';`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),g=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm create vite@latest my-charts -- --template react-ts
cd my-charts
npm install @silverpoint/react @silverpoint/grounds @silverpoint/fonts
npm run dev`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),_=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/App.tsx
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { LineChart } from '@silverpoint/react/line-chart';

const data = [
  { hour: '00', hits: 18 },
  { hour: '04', hits: 11 },
  { hour: '08', hits: 42 },
  { hour: '12', hits: 64 },
  { hour: '16', hits: 57 },
  { hour: '20', hits: 30 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <LineChart data={data} xKey="hour" valueKey="hits" title="Hits per hour" />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),v=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import { SilverpointProvider } from '@silverpoint/react';
import { BarChart } from '@silverpoint/react/bar-chart';
import { DonutChart } from '@silverpoint/react/donut-chart';

export function Dashboard() {
  return (
    <SilverpointProvider ground="silverpoint" substrate="green" locale="en-GB">
      <BarChart data={sales} xKey="month" valueKey="units" title="Units sold" unit="units" />
      <DonutChart data={channels} nameKey="channel" valueKey="share" title="Sales by channel" centerLabel="%" />
    </SilverpointProvider>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),y=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<LineChart data={data} xKey="hour" valueKey="hits" title="Hits per hour" mode="precision" />`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),b=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import { useState } from 'react';
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
        onActiveChange={(item) => setActive(item ? \`\${item.datum.hour}: \${item.value}\` : '—')}
        onSelect={(item) => console.log('selected', item.datum)}
        tooltip={(item) => <strong>{item.value} hits</strong>}
      />
      <p>Under the pointer: {active}</p>
    </>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),x=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import { useRef } from 'react';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),S=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// app/page.tsx — a React Server Component (Next.js App Router)
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),C=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm create vite@latest my-charts -- --template vue-ts
cd my-charts
npm install @silverpoint/vue @silverpoint/grounds @silverpoint/fonts
npm run dev`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),w=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<!-- src/App.vue -->
<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpLineChart } from '@silverpoint/vue/line-chart';

const data = [
  { hour: '00', hits: 18 },
  { hour: '04', hits: 11 },
  { hour: '08', hits: 42 },
  { hour: '12', hits: 64 },
  { hour: '16', hits: 57 },
  { hour: '20', hits: 30 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpLineChart :data="data" x-key="hour" value-key="hits" title="Hits per hour" />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),T=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/main.ts
import { createApp } from 'vue';
import { provideSilverpoint } from '@silverpoint/vue';
import App from './App.vue';

createApp(App)
  .use(provideSilverpoint({ ground: 'silverpoint', substrate: 'green', locale: 'en-GB' }))
  .mount('#app');

<!-- any component -->
<SpBarChart :data="sales" x-key="month" value-key="units" title="Units sold" unit="units" />
<SpDonutChart :data="channels" name-key="channel" value-key="share" title="Sales by channel" center-label="%" />`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),E=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<SpLineChart :data="data" x-key="hour" value-key="hits" title="Hits per hour" mode="precision" />`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),D=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import { ref } from 'vue';
import { SpLineChart } from '@silverpoint/vue/line-chart';
import type { ActiveItem } from '@silverpoint/vue';

defineProps<{ data: { hour: string; hits: number }[] }>();
const active = ref<ActiveItem | null>(null);
<\/script>

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
  <p>Under the pointer: {{ active ? \`\${active.datum.hour}: \${active.value}\` : '—' }}</p>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),O=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import { ref } from 'vue';
import { SpLineChart } from '@silverpoint/vue/line-chart';

defineProps<{ data: { hour: string; hits: number }[] }>();
const chart = ref<InstanceType<typeof SpLineChart>>();

function download() {
  const svg = chart.value?.toSVGString() ?? '';
  window.open(URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' })));
}
<\/script>

<template>
  <SpLineChart ref="chart" :data="data" x-key="hour" value-key="hits" title="Hits per hour" />
  <button @click="download">Export SVG</button>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),k=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// entry-server.ts
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { provideSilverpoint } from '@silverpoint/vue';
import App from './App.vue';

export function render(): Promise<string> {
  return renderToString(createSSRApp(App).use(provideSilverpoint({ locale: 'en' })));
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),A=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npx @angular/cli@22 new my-charts --defaults --skip-git
cd my-charts
npm install @silverpoint/angular @silverpoint/grounds @silverpoint/fonts
npm start`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),j=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`/* src/styles.css */
@import '@silverpoint/fonts/fonts.css';
@import '@silverpoint/grounds/styles.css';

// src/app/app.ts
import { Component } from '@angular/core';
import { SpLineChart } from '@silverpoint/angular/line-chart';

@Component({
  selector: 'app-root',
  imports: [SpLineChart],
  template: \`
    <div style="width: 480px">
      <sp-line-chart [data]="data" xKey="hour" valueKey="hits" title="Hits per hour" />
    </div>
  \`,
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),M=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/app/app.config.ts
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
<sp-donut-chart [data]="channels" nameKey="channel" valueKey="share" title="Sales by channel" centerLabel="%" />`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),N=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<sp-line-chart [data]="data" xKey="hour" valueKey="hits" title="Hits per hour" mode="precision" />`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),P=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import { Component, input, signal } from '@angular/core';
import { SpTooltip } from '@silverpoint/angular';
import { SpLineChart } from '@silverpoint/angular/line-chart';

type Row = { hour: string; hits: number };

@Component({
  selector: 'app-explorer',
  imports: [SpLineChart, SpTooltip],
  template: \`
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
  \`,
})
export class Explorer {
  readonly data = input.required<Row[]>();
  protected readonly active = signal('—');
  protected selected(datum: unknown) {
    console.log('selected', datum);
  }
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),F=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import { Component, viewChild } from '@angular/core';
import { SpLineChart } from '@silverpoint/angular/line-chart';

@Component({
  selector: 'app-exportable',
  imports: [SpLineChart],
  template: \`
    <sp-line-chart #chart [data]="data" xKey="hour" valueKey="hits" title="Hits per hour" />
    <button (click)="download()">Export SVG</button>
  \`,
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),I=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`# Angular CLI with @angular/ssr: nothing silverpoint-specific to configure.
ng add @angular/ssr
# angular.json: "outputMode": "server"
npm run build && node dist/my-charts/server/server.mjs`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),L=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`mkdir my_app && cd my_app
pip install reflex reflex-silverpoint-react
reflex init
reflex run`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),R=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`# my_app/my_app.py
import reflex as rx
from reflex_silverpoint_react import line_chart

DATA = [
    {"hour": "00", "hits": 18},
    {"hour": "04", "hits": 11},
    {"hour": "08", "hits": 42},
    {"hour": "12", "hits": 64},
    {"hour": "16", "hits": 57},
    {"hour": "20", "hits": 30},
]


def index() -> rx.Component:
    return rx.box(
        line_chart(data=DATA, x_key="hour", value_key="hits", title="Hits per hour"),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),z=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`from reflex_silverpoint_react import bar_chart, donut_chart, silverpoint_provider

silverpoint_provider(
    bar_chart(data=sales, x_key="month", value_key="units", title="Units sold", unit="units"),
    donut_chart(data=channels, name_key="channel", value_key="share",
                title="Sales by channel", center_label="%"),
    ground="silverpoint",
    substrate="green",
    locale="en-GB",
)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),B=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`line_chart(data=DATA, x_key="hour", value_key="hits", title="Hits per hour", mode="precision")`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),V=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),H=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`from reflex_silverpoint_react import download_svg, get_geometry, get_svg, line_chart

line_chart(id="hits", data=DATA, x_key="hour", value_key="hits")

rx.button("Download SVG", on_click=download_svg("hits", "hits.svg"))           # in the browser
rx.button("SVG to Python", on_click=get_svg("hits", State.receive_svg))         # handler gets a str
rx.button("Geometry", on_click=get_geometry("hits", State.receive_geometry))    # handler gets a dict`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),U=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`# Reflex compiles your pages to a React app; the charts render on the client.
reflex export --frontend-only     # a static build, as this site is deployed on Vercel`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),W=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`.sp-ground-silverpoint[data-substrate='cream'] {
  --sp-ink: #4d525a;
  --sp-ink-secondary: #6b5a45;
  --sp-font-display: 'EB Garamond', Georgia, serif;
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),G=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_export_demo"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id export-demo");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "silverpoint-donut.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),K=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import { Dashboard, DashboardCell } from '@silverpoint/react/dashboard';
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
</Dashboard>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),q=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import { SpDashboard, SpDashboardCell } from '@silverpoint/vue/dashboard';
import { SpKpiCard } from '@silverpoint/vue/kpi-card';
import { SpLineChart } from '@silverpoint/vue/line-chart';
import { SpBarChart } from '@silverpoint/vue/bar-chart';

const layout = {
  columns: { sm: 1, md: 2, lg: 4 },
  cells: [{ id: 'revenue' }, { id: 'traffic', colSpan: { md: 2, lg: 3 }, rowSpan: 2 }, { id: 'errors' }],
};
<\/script>

<template>
  <SpDashboard id="ops" title="Operations" :layout="layout" :link="{ key: 'hour' }" @link-change="console.log">
    <SpDashboardCell cell="revenue"><SpKpiCard title="Revenue" metric="thousands" :delta="6.4" /></SpDashboardCell>
    <SpDashboardCell cell="traffic"><SpLineChart :data="ops" x-key="hour" value-key="hits" title="Traffic" /></SpDashboardCell>
    <SpDashboardCell cell="errors"><SpBarChart :data="ops" x-key="hour" value-key="errors" title="Errors" /></SpDashboardCell>
  </SpDashboard>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),J=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import { Component } from '@angular/core';
import { SpDashboard, SpDashboardCell } from '@silverpoint/angular/dashboard';
import { SpKpiCard } from '@silverpoint/angular/kpi-card';
import { SpLineChart } from '@silverpoint/angular/line-chart';
import { SpBarChart } from '@silverpoint/angular/bar-chart';

@Component({
  selector: 'app-ops',
  imports: [SpDashboard, SpDashboardCell, SpKpiCard, SpLineChart, SpBarChart],
  template: \`
    <sp-dashboard id="ops" title="Operations" [layout]="layout" [link]="{ key: 'hour' }" (linkChange)="linked = $event">
      <sp-dashboard-cell cell="revenue"><sp-kpi-card title="Revenue" metric="thousands" [delta]="6.4" /></sp-dashboard-cell>
      <sp-dashboard-cell cell="traffic"><sp-line-chart [data]="ops" xKey="hour" valueKey="hits" title="Traffic" /></sp-dashboard-cell>
      <sp-dashboard-cell cell="errors"><sp-bar-chart [data]="ops" xKey="hour" valueKey="errors" title="Errors" /></sp-dashboard-cell>
    </sp-dashboard>
  \`,
})
export class Ops {
  protected linked: { key: string; value: unknown } | null = null;
  protected readonly layout = {
    columns: { sm: 1, md: 2, lg: 4 },
    cells: [{ id: 'revenue' }, { id: 'traffic', colSpan: { md: 2, lg: 3 }, rowSpan: 2 }, { id: 'errors' }],
  };
  protected readonly ops = [/* { hour: '00', hits: 18, errors: 2 }, … */];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Y=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`from reflex_silverpoint_react import (
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
)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),X=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/tailwind`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Z=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`@import 'tailwindcss';
@import '@silverpoint/grounds/styles.css';
@import '@silverpoint/tailwind/theme.css';`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Q=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// tailwind.config.js
import silverpoint from '@silverpoint/tailwind';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  presets: [silverpoint],
};`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),$=(()=>{let e=(0,c.memo)(({children:e,...t})=>{let r=(0,c.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<section class="sp-ground-cyanotype bg-sp-substrate text-sp-text font-sp-display rounded-sp p-4">
  <h2 class="border-b border-sp-rule">Operations</h2>
  <!-- charts … -->
</section>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})();export{I as A,K as B,d as C,Z as D,E,$ as F,m as G,X as H,_ as I,T as L,p as M,U as N,k as O,G as P,C as R,V as S,N as T,j as U,J as V,M as W,q as _,x as a,v as b,l as c,w as d,L as f,F as g,S as h,B as i,A as j,y as k,H as l,Y as m,Q as n,f as o,P as p,W as r,D as s,b as t,O as u,g as v,h as w,u as x,R as y,z};