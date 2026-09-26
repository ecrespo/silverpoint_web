import{G as e,J as t}from"./components-DzQT6F3y.js";import{n,r,t as i}from"./state-05ANjcUM.js";import{n as a}from"./emotion-react.browser.esm-alFgrGzY.js";import{r as o}from"./context-BXa-k1p8.js";import{i as ee}from"./tabs-DlU6gJ4q.js";var s=t(e(),1),c=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_line_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-line-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "line-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),l=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/react @silverpoint/grounds @silverpoint/fonts`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),u=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { LineChart } from '@silverpoint/react/line-chart';

const data = [
  { hour: '00', hits: 18, baseline: 22 },
  { hour: '02', hits: 14, baseline: 18 },
  { hour: '04', hits: 11, baseline: 15 },
  { hour: '06', hits: 16, baseline: 17 },
  { hour: '08', hits: 34, baseline: 30 },
  { hour: '10', hits: 58, baseline: 48 },
  { hour: '12', hits: 71, baseline: 60 },
  { hour: '14', hits: 66, baseline: 62 },
  { hour: '16', hits: 74, baseline: 64 },
  { hour: '18', hits: 88, baseline: 70 },
  { hour: '20', hits: 62, baseline: 55 },
  { hour: '22', hits: 41, baseline: 40 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <LineChart
        data={data}
        xKey="hour"
        valueKey="hits"
        secondaryKey="baseline"
        title="Hits per hour"
        unit="hits"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),d=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/vue @silverpoint/grounds @silverpoint/fonts`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),te=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpLineChart } from '@silverpoint/vue/line-chart';

const data = [
  { hour: '00', hits: 18, baseline: 22 },
  { hour: '02', hits: 14, baseline: 18 },
  { hour: '04', hits: 11, baseline: 15 },
  { hour: '06', hits: 16, baseline: 17 },
  { hour: '08', hits: 34, baseline: 30 },
  { hour: '10', hits: 58, baseline: 48 },
  { hour: '12', hits: 71, baseline: 60 },
  { hour: '14', hits: 66, baseline: 62 },
  { hour: '16', hits: 74, baseline: 64 },
  { hour: '18', hits: 88, baseline: 70 },
  { hour: '20', hits: 62, baseline: 55 },
  { hour: '22', hits: 41, baseline: 40 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpLineChart
      :data="data"
      x-key="hour"
      value-key="hits"
      secondary-key="baseline"
      title="Hits per hour"
      unit="hits"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),f=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/angular @silverpoint/grounds @silverpoint/fonts`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),p=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpLineChart } from '@silverpoint/angular/line-chart';

@Component({
  selector: 'app-root',
  imports: [SpLineChart],
  template: \`
    <div style="width: 480px">
      <sp-line-chart
        [data]="data"
        xKey="hour"
        valueKey="hits"
        secondaryKey="baseline"
        title="Hits per hour"
        unit="hits"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { hour: '00', hits: 18, baseline: 22 },
    { hour: '02', hits: 14, baseline: 18 },
    { hour: '04', hits: 11, baseline: 15 },
    { hour: '06', hits: 16, baseline: 17 },
    { hour: '08', hits: 34, baseline: 30 },
    { hour: '10', hits: 58, baseline: 48 },
    { hour: '12', hits: 71, baseline: 60 },
    { hour: '14', hits: 66, baseline: 62 },
    { hour: '16', hits: 74, baseline: 64 },
    { hour: '18', hits: 88, baseline: 70 },
    { hour: '20', hits: 62, baseline: 55 },
    { hour: '22', hits: 41, baseline: 40 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),m=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`pip install reflex-silverpoint-react`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),h=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import line_chart

DATA = [
    {"hour": "00", "hits": 18, "baseline": 22},
    {"hour": "02", "hits": 14, "baseline": 18},
    {"hour": "04", "hits": 11, "baseline": 15},
    {"hour": "06", "hits": 16, "baseline": 17},
    {"hour": "08", "hits": 34, "baseline": 30},
    {"hour": "10", "hits": 58, "baseline": 48},
    {"hour": "12", "hits": 71, "baseline": 60},
    {"hour": "14", "hits": 66, "baseline": 62},
    {"hour": "16", "hits": 74, "baseline": 64},
    {"hour": "18", "hits": 88, "baseline": 70},
    {"hour": "20", "hits": 62, "baseline": 55},
    {"hour": "22", "hits": 41, "baseline": 40},
]


def index() -> rx.Component:
    return rx.box(
        line_chart(
            data=DATA,
            x_key="hour",
            value_key="hits",
            secondary_key="baseline",
            title="Hits per hour",
            unit="hits",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),g=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let c=(0,s.useCallback)((e=>(e=>r._client_state_setSp_framework(e))(e)),[o,i]),l=(0,s.useId)(),[u,d]=(0,s.useState)(`react`);return r._client_state_setSp_framework=(e=>Array.prototype.forEach.call([...Object.values(r._client_state_dict_setSp_framework),e=>{r._client_state_sp_framework=e}],(t=>t(e)))),r._client_state_sp_framework??=u,r._client_state_dict_sp_framework??={},r._client_state_dict_setSp_framework??={},r._client_state_dict_sp_framework[l]=r._client_state_sp_framework,r._client_state_dict_setSp_framework[l]=d,a(ee,{...n(t,{className:`spw-tabs`,css:{"&[data-orientation='vertical']":{display:`flex`}},onValueChange:c,value:r._client_state_dict_sp_framework[l]})},e)});return e.displayName=`TabsRoot`,e})(),_=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_step_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-step-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "step-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),v=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { StepChart } from '@silverpoint/react/step-chart';

const data = [
  { x: 'Jan', value: 12 },
  { x: 'Feb', value: 12 },
  { x: 'Mar', value: 18 },
  { x: 'Apr', value: 18 },
  { x: 'May', value: 15 },
  { x: 'Jun', value: 24 },
  { x: 'Jul', value: 24 },
  { x: 'Aug', value: 30 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <StepChart
        data={data}
        xKey="x"
        valueKey="value"
        title="Active plans"
        step="after"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),y=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpStepChart } from '@silverpoint/vue/step-chart';

const data = [
  { x: 'Jan', value: 12 },
  { x: 'Feb', value: 12 },
  { x: 'Mar', value: 18 },
  { x: 'Apr', value: 18 },
  { x: 'May', value: 15 },
  { x: 'Jun', value: 24 },
  { x: 'Jul', value: 24 },
  { x: 'Aug', value: 30 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpStepChart
      :data="data"
      x-key="x"
      value-key="value"
      title="Active plans"
      step="after"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),b=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpStepChart } from '@silverpoint/angular/step-chart';

@Component({
  selector: 'app-root',
  imports: [SpStepChart],
  template: \`
    <div style="width: 480px">
      <sp-step-chart
        [data]="data"
        xKey="x"
        valueKey="value"
        title="Active plans"
        step="after"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 'Jan', value: 12 },
    { x: 'Feb', value: 12 },
    { x: 'Mar', value: 18 },
    { x: 'Apr', value: 18 },
    { x: 'May', value: 15 },
    { x: 'Jun', value: 24 },
    { x: 'Jul', value: 24 },
    { x: 'Aug', value: 30 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),x=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import step_chart

DATA = [
    {"x": "Jan", "value": 12},
    {"x": "Feb", "value": 12},
    {"x": "Mar", "value": 18},
    {"x": "Apr", "value": 18},
    {"x": "May", "value": 15},
    {"x": "Jun", "value": 24},
    {"x": "Jul", "value": 24},
    {"x": "Aug", "value": 30},
]


def index() -> rx.Component:
    return rx.box(
        step_chart(
            data=DATA,
            x_key="x",
            value_key="value",
            title="Active plans",
            step="after",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),S=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_sparkline_rows"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-sparkline-rows");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "sparkline-rows.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),C=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SparklineRows } from '@silverpoint/react/sparkline-rows';

const data = [
  { name: 'API', readout: '99.9%', points: [98, 99, 99, 97, 99, 100, 99, 100] },
  { name: 'Queue', points: [12, 18, 15, 22, 19, 25, 21, 17] },
  { name: 'Cache', readout: '84%', points: [70, 72, 78, 75, 80, 83, 81, 84] },
  { name: 'Search', points: [240, 220, 260, 210, 190, 205, 180, 170] },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <SparklineRows
        data={data}
        nameKey="name"
        readoutKey="readout"
        seriesKey="points"
        title="Service health"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),w=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpSparklineRows } from '@silverpoint/vue/sparkline-rows';

const data = [
  { name: 'API', readout: '99.9%', points: [98, 99, 99, 97, 99, 100, 99, 100] },
  { name: 'Queue', points: [12, 18, 15, 22, 19, 25, 21, 17] },
  { name: 'Cache', readout: '84%', points: [70, 72, 78, 75, 80, 83, 81, 84] },
  { name: 'Search', points: [240, 220, 260, 210, 190, 205, 180, 170] },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpSparklineRows
      :data="data"
      name-key="name"
      readout-key="readout"
      series-key="points"
      title="Service health"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),T=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpSparklineRows } from '@silverpoint/angular/sparkline-rows';

@Component({
  selector: 'app-root',
  imports: [SpSparklineRows],
  template: \`
    <div style="width: 480px">
      <sp-sparkline-rows
        [data]="data"
        nameKey="name"
        readoutKey="readout"
        seriesKey="points"
        title="Service health"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { name: 'API', readout: '99.9%', points: [98, 99, 99, 97, 99, 100, 99, 100] },
    { name: 'Queue', points: [12, 18, 15, 22, 19, 25, 21, 17] },
    { name: 'Cache', readout: '84%', points: [70, 72, 78, 75, 80, 83, 81, 84] },
    { name: 'Search', points: [240, 220, 260, 210, 190, 205, 180, 170] },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),E=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import sparkline_rows

DATA = [
    {"name": "API", "readout": "99.9%", "points": [98, 99, 99, 97, 99, 100, 99, 100]},
    {"name": "Queue", "points": [12, 18, 15, 22, 19, 25, 21, 17]},
    {"name": "Cache", "readout": "84%", "points": [70, 72, 78, 75, 80, 83, 81, 84]},
    {"name": "Search", "points": [240, 220, 260, 210, 190, 205, 180, 170]},
]


def index() -> rx.Component:
    return rx.box(
        sparkline_rows(
            data=DATA,
            name_key="name",
            readout_key="readout",
            series_key="points",
            title="Service health",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),D=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_kpi_card"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-kpi-card");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "kpi-card.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),O=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { KpiCard } from '@silverpoint/react/kpi-card';

const data = [
  { value: 118 },
  { value: 124 },
  { value: 121 },
  { value: 132 },
  { value: 140 },
  { value: 136 },
  { value: 129 },
  { value: 142 },
  { value: 151 },
  { value: 147 },
  { value: 155 },
  { value: 162 },
  // … 2 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <KpiCard
        data={data}
        valueKey="value"
        title="Orders"
        metric="orders per day"
        delta={8.2}
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),k=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpKpiCard } from '@silverpoint/vue/kpi-card';

const data = [
  { value: 118 },
  { value: 124 },
  { value: 121 },
  { value: 132 },
  { value: 140 },
  { value: 136 },
  { value: 129 },
  { value: 142 },
  { value: 151 },
  { value: 147 },
  { value: 155 },
  { value: 162 },
  // … 2 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpKpiCard
      :data="data"
      value-key="value"
      title="Orders"
      metric="orders per day"
      :delta="8.2"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),A=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpKpiCard } from '@silverpoint/angular/kpi-card';

@Component({
  selector: 'app-root',
  imports: [SpKpiCard],
  template: \`
    <div style="width: 480px">
      <sp-kpi-card
        [data]="data"
        valueKey="value"
        title="Orders"
        metric="orders per day"
        [delta]="8.2"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { value: 118 },
    { value: 124 },
    { value: 121 },
    { value: 132 },
    { value: 140 },
    { value: 136 },
    { value: 129 },
    { value: 142 },
    { value: 151 },
    { value: 147 },
    { value: 155 },
    { value: 162 },
    // … 2 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),j=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import kpi_card

DATA = [
    {"value": 118},
    {"value": 124},
    {"value": 121},
    {"value": 132},
    {"value": 140},
    {"value": 136},
    {"value": 129},
    {"value": 142},
    {"value": 151},
    {"value": 147},
    {"value": 155},
    {"value": 162},
    # … 2 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        kpi_card(
            data=DATA,
            value_key="value",
            title="Orders",
            metric="orders per day",
            delta=8.2,
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),M=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_bar_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-bar-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "bar-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),N=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { BarChart } from '@silverpoint/react/bar-chart';

const data = [
  { x: 'Q1', value: 42, previous: 35 },
  { x: 'Q2', value: 58, previous: 44 },
  { x: 'Q3', value: 51, previous: 49 },
  { x: 'Q4', value: 73, previous: 60 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <BarChart
        data={data}
        xKey="x"
        valueKey="value"
        secondaryKey="previous"
        title="Revenue by quarter"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),P=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpBarChart } from '@silverpoint/vue/bar-chart';

const data = [
  { x: 'Q1', value: 42, previous: 35 },
  { x: 'Q2', value: 58, previous: 44 },
  { x: 'Q3', value: 51, previous: 49 },
  { x: 'Q4', value: 73, previous: 60 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpBarChart
      :data="data"
      x-key="x"
      value-key="value"
      secondary-key="previous"
      title="Revenue by quarter"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),F=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpBarChart } from '@silverpoint/angular/bar-chart';

@Component({
  selector: 'app-root',
  imports: [SpBarChart],
  template: \`
    <div style="width: 480px">
      <sp-bar-chart
        [data]="data"
        xKey="x"
        valueKey="value"
        secondaryKey="previous"
        title="Revenue by quarter"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 'Q1', value: 42, previous: 35 },
    { x: 'Q2', value: 58, previous: 44 },
    { x: 'Q3', value: 51, previous: 49 },
    { x: 'Q4', value: 73, previous: 60 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),I=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import bar_chart

DATA = [
    {"x": "Q1", "value": 42, "previous": 35},
    {"x": "Q2", "value": 58, "previous": 44},
    {"x": "Q3", "value": 51, "previous": 49},
    {"x": "Q4", "value": 73, "previous": 60},
]


def index() -> rx.Component:
    return rx.box(
        bar_chart(
            data=DATA,
            x_key="x",
            value_key="value",
            secondary_key="previous",
            title="Revenue by quarter",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),L=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_stacked_bar_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-stacked-bar-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "stacked-bar-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),R=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { StackedBarChart } from '@silverpoint/react/stacked-bar-chart';

const data = [
  { x: 'Jan', free: 40, pro: 18, team: 6 },
  { x: 'Feb', free: 46, pro: 21, team: 9 },
  { x: 'Mar', free: 38, pro: 26, team: 11 },
  { x: 'Apr', free: 52, pro: 24, team: 14 },
  { x: 'May', free: 49, pro: 31, team: 15 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <StackedBarChart
        data={data}
        xKey="x"
        keys={['free', 'pro', 'team']}
        names={['Free', 'Pro', 'Team']}
        title="Sign-ups by plan"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),z=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpStackedBarChart } from '@silverpoint/vue/stacked-bar-chart';

const data = [
  { x: 'Jan', free: 40, pro: 18, team: 6 },
  { x: 'Feb', free: 46, pro: 21, team: 9 },
  { x: 'Mar', free: 38, pro: 26, team: 11 },
  { x: 'Apr', free: 52, pro: 24, team: 14 },
  { x: 'May', free: 49, pro: 31, team: 15 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpStackedBarChart
      :data="data"
      x-key="x"
      :keys="['free', 'pro', 'team']"
      :names="['Free', 'Pro', 'Team']"
      title="Sign-ups by plan"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),B=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpStackedBarChart } from '@silverpoint/angular/stacked-bar-chart';

@Component({
  selector: 'app-root',
  imports: [SpStackedBarChart],
  template: \`
    <div style="width: 480px">
      <sp-stacked-bar-chart
        [data]="data"
        xKey="x"
        [keys]="['free', 'pro', 'team']"
        [names]="['Free', 'Pro', 'Team']"
        title="Sign-ups by plan"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 'Jan', free: 40, pro: 18, team: 6 },
    { x: 'Feb', free: 46, pro: 21, team: 9 },
    { x: 'Mar', free: 38, pro: 26, team: 11 },
    { x: 'Apr', free: 52, pro: 24, team: 14 },
    { x: 'May', free: 49, pro: 31, team: 15 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),V=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import stacked_bar_chart

DATA = [
    {"x": "Jan", "free": 40, "pro": 18, "team": 6},
    {"x": "Feb", "free": 46, "pro": 21, "team": 9},
    {"x": "Mar", "free": 38, "pro": 26, "team": 11},
    {"x": "Apr", "free": 52, "pro": 24, "team": 14},
    {"x": "May", "free": 49, "pro": 31, "team": 15},
]


def index() -> rx.Component:
    return rx.box(
        stacked_bar_chart(
            data=DATA,
            x_key="x",
            keys=["free", "pro", "team"],
            names=["Free", "Pro", "Team"],
            title="Sign-ups by plan",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),H=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_composed_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-composed-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "composed-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),U=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { ComposedChart } from '@silverpoint/react/composed-chart';

const data = [
  { x: 'Jan', revenue: 42, margin: 18 },
  { x: 'Feb', revenue: 48, margin: 21 },
  { x: 'Mar', revenue: 39, margin: 17 },
  { x: 'Apr', revenue: 55, margin: 26 },
  { x: 'May', revenue: 61, margin: 30 },
  { x: 'Jun', revenue: 58, margin: 27 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <ComposedChart
        data={data}
        xKey="x"
        barKey="revenue"
        lineKey="margin"
        title="Revenue and margin"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),W=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpComposedChart } from '@silverpoint/vue/composed-chart';

const data = [
  { x: 'Jan', revenue: 42, margin: 18 },
  { x: 'Feb', revenue: 48, margin: 21 },
  { x: 'Mar', revenue: 39, margin: 17 },
  { x: 'Apr', revenue: 55, margin: 26 },
  { x: 'May', revenue: 61, margin: 30 },
  { x: 'Jun', revenue: 58, margin: 27 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpComposedChart
      :data="data"
      x-key="x"
      bar-key="revenue"
      line-key="margin"
      title="Revenue and margin"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),G=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpComposedChart } from '@silverpoint/angular/composed-chart';

@Component({
  selector: 'app-root',
  imports: [SpComposedChart],
  template: \`
    <div style="width: 480px">
      <sp-composed-chart
        [data]="data"
        xKey="x"
        barKey="revenue"
        lineKey="margin"
        title="Revenue and margin"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 'Jan', revenue: 42, margin: 18 },
    { x: 'Feb', revenue: 48, margin: 21 },
    { x: 'Mar', revenue: 39, margin: 17 },
    { x: 'Apr', revenue: 55, margin: 26 },
    { x: 'May', revenue: 61, margin: 30 },
    { x: 'Jun', revenue: 58, margin: 27 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),K=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import composed_chart

DATA = [
    {"x": "Jan", "revenue": 42, "margin": 18},
    {"x": "Feb", "revenue": 48, "margin": 21},
    {"x": "Mar", "revenue": 39, "margin": 17},
    {"x": "Apr", "revenue": 55, "margin": 26},
    {"x": "May", "revenue": 61, "margin": 30},
    {"x": "Jun", "revenue": 58, "margin": 27},
]


def index() -> rx.Component:
    return rx.box(
        composed_chart(
            data=DATA,
            x_key="x",
            bar_key="revenue",
            line_key="margin",
            title="Revenue and margin",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),q=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_waterfall_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-waterfall-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "waterfall-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),J=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { WaterfallChart } from '@silverpoint/react/waterfall-chart';

const data = [
  { step: 'Opening', base: 120 },
  { step: 'Sales', delta: 64 },
  { step: 'Services', delta: 22 },
  { step: 'Payroll', delta: -58 },
  { step: 'Rent', delta: -24 },
  { step: 'Closing', base: 124 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <WaterfallChart
        data={data}
        stepKey="step"
        baseKey="base"
        deltaKey="delta"
        title="Cash flow"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Y=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpWaterfallChart } from '@silverpoint/vue/waterfall-chart';

const data = [
  { step: 'Opening', base: 120 },
  { step: 'Sales', delta: 64 },
  { step: 'Services', delta: 22 },
  { step: 'Payroll', delta: -58 },
  { step: 'Rent', delta: -24 },
  { step: 'Closing', base: 124 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpWaterfallChart
      :data="data"
      step-key="step"
      base-key="base"
      delta-key="delta"
      title="Cash flow"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),X=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpWaterfallChart } from '@silverpoint/angular/waterfall-chart';

@Component({
  selector: 'app-root',
  imports: [SpWaterfallChart],
  template: \`
    <div style="width: 480px">
      <sp-waterfall-chart
        [data]="data"
        stepKey="step"
        baseKey="base"
        deltaKey="delta"
        title="Cash flow"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { step: 'Opening', base: 120 },
    { step: 'Sales', delta: 64 },
    { step: 'Services', delta: 22 },
    { step: 'Payroll', delta: -58 },
    { step: 'Rent', delta: -24 },
    { step: 'Closing', base: 124 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Z=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import waterfall_chart

DATA = [
    {"step": "Opening", "base": 120},
    {"step": "Sales", "delta": 64},
    {"step": "Services", "delta": 22},
    {"step": "Payroll", "delta": -58},
    {"step": "Rent", "delta": -24},
    {"step": "Closing", "base": 124},
]


def index() -> rx.Component:
    return rx.box(
        waterfall_chart(
            data=DATA,
            step_key="step",
            base_key="base",
            delta_key="delta",
            title="Cash flow",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Q=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_funnel_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-funnel-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "funnel-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),ne=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { FunnelChart } from '@silverpoint/react/funnel-chart';

const data = [
  { stage: 'Visits', value: 12400 },
  { stage: 'Product', value: 6800 },
  { stage: 'Cart', value: 2900 },
  { stage: 'Checkout', value: 1500 },
  { stage: 'Paid', value: 980 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <FunnelChart
        data={data}
        stageKey="stage"
        valueKey="value"
        title="Checkout funnel"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),re=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpFunnelChart } from '@silverpoint/vue/funnel-chart';

const data = [
  { stage: 'Visits', value: 12400 },
  { stage: 'Product', value: 6800 },
  { stage: 'Cart', value: 2900 },
  { stage: 'Checkout', value: 1500 },
  { stage: 'Paid', value: 980 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpFunnelChart
      :data="data"
      stage-key="stage"
      value-key="value"
      title="Checkout funnel"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ie=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpFunnelChart } from '@silverpoint/angular/funnel-chart';

@Component({
  selector: 'app-root',
  imports: [SpFunnelChart],
  template: \`
    <div style="width: 480px">
      <sp-funnel-chart
        [data]="data"
        stageKey="stage"
        valueKey="value"
        title="Checkout funnel"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { stage: 'Visits', value: 12400 },
    { stage: 'Product', value: 6800 },
    { stage: 'Cart', value: 2900 },
    { stage: 'Checkout', value: 1500 },
    { stage: 'Paid', value: 980 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ae=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import funnel_chart

DATA = [
    {"stage": "Visits", "value": 12400},
    {"stage": "Product", "value": 6800},
    {"stage": "Cart", "value": 2900},
    {"stage": "Checkout", "value": 1500},
    {"stage": "Paid", "value": 980},
]


def index() -> rx.Component:
    return rx.box(
        funnel_chart(
            data=DATA,
            stage_key="stage",
            value_key="value",
            title="Checkout funnel",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),oe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_bullet_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-bullet-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "bullet-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),se=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { BulletChart } from '@silverpoint/react/bullet-chart';

const data = [
  { title: 'Revenue', actual: 72, target: 80 },
  { title: 'Profit', actual: 58, target: 65 },
  { title: 'New users', actual: 86, target: 75 },
  { title: 'Retention', actual: 41, target: 60 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <BulletChart
        data={data}
        titleKey="title"
        actualKey="actual"
        targetKey="target"
        title="Quarter targets"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ce=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpBulletChart } from '@silverpoint/vue/bullet-chart';

const data = [
  { title: 'Revenue', actual: 72, target: 80 },
  { title: 'Profit', actual: 58, target: 65 },
  { title: 'New users', actual: 86, target: 75 },
  { title: 'Retention', actual: 41, target: 60 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpBulletChart
      :data="data"
      title-key="title"
      actual-key="actual"
      target-key="target"
      title="Quarter targets"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),le=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpBulletChart } from '@silverpoint/angular/bullet-chart';

@Component({
  selector: 'app-root',
  imports: [SpBulletChart],
  template: \`
    <div style="width: 480px">
      <sp-bullet-chart
        [data]="data"
        titleKey="title"
        actualKey="actual"
        targetKey="target"
        title="Quarter targets"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { title: 'Revenue', actual: 72, target: 80 },
    { title: 'Profit', actual: 58, target: 65 },
    { title: 'New users', actual: 86, target: 75 },
    { title: 'Retention', actual: 41, target: 60 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ue=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import bullet_chart

DATA = [
    {"title": "Revenue", "actual": 72, "target": 80},
    {"title": "Profit", "actual": 58, "target": 65},
    {"title": "New users", "actual": 86, "target": 75},
    {"title": "Retention", "actual": 41, "target": 60},
]


def index() -> rx.Component:
    return rx.box(
        bullet_chart(
            data=DATA,
            title_key="title",
            actual_key="actual",
            target_key="target",
            title="Quarter targets",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),de=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_pyramid_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-pyramid-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "pyramid-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),fe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { PyramidChart } from '@silverpoint/react/pyramid-chart';

const data = [
  { label: 'Leads', width: 18 },
  { label: 'Managers', width: 42 },
  { label: 'Specialists', width: 70 },
  { label: 'Staff', width: 100 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <PyramidChart
        data={data}
        labelKey="label"
        widthKey="width"
        title="Headcount"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),pe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpPyramidChart } from '@silverpoint/vue/pyramid-chart';

const data = [
  { label: 'Leads', width: 18 },
  { label: 'Managers', width: 42 },
  { label: 'Specialists', width: 70 },
  { label: 'Staff', width: 100 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpPyramidChart
      :data="data"
      label-key="label"
      width-key="width"
      title="Headcount"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),me=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpPyramidChart } from '@silverpoint/angular/pyramid-chart';

@Component({
  selector: 'app-root',
  imports: [SpPyramidChart],
  template: \`
    <div style="width: 480px">
      <sp-pyramid-chart
        [data]="data"
        labelKey="label"
        widthKey="width"
        title="Headcount"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { label: 'Leads', width: 18 },
    { label: 'Managers', width: 42 },
    { label: 'Specialists', width: 70 },
    { label: 'Staff', width: 100 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),he=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import pyramid_chart

DATA = [
    {"label": "Leads", "width": 18},
    {"label": "Managers", "width": 42},
    {"label": "Specialists", "width": 70},
    {"label": "Staff", "width": 100},
]


def index() -> rx.Component:
    return rx.box(
        pyramid_chart(
            data=DATA,
            label_key="label",
            width_key="width",
            title="Headcount",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ge=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_candlestick_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-candlestick-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "candlestick-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),_e=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { CandlestickChart } from '@silverpoint/react/candlestick-chart';

const data = [
  { time: 'Mon', open: 102, high: 108, low: 99, close: 106 },
  { time: 'Tue', open: 106, high: 109, low: 101, close: 103 },
  { time: 'Wed', open: 103, high: 105, low: 97, close: 99 },
  { time: 'Thu', open: 99, high: 104, low: 96, close: 103 },
  { time: 'Fri', open: 103, high: 111, low: 102, close: 110 },
  { time: 'Mon', open: 110, high: 114, low: 107, close: 108 },
  { time: 'Tue', open: 108, high: 110, low: 104, close: 109 },
  { time: 'Wed', open: 109, high: 116, low: 108, close: 115 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <CandlestickChart
        data={data}
        timeKey="time"
        openKey="open"
        highKey="high"
        lowKey="low"
        closeKey="close"
        title="Share price"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ve=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpCandlestickChart } from '@silverpoint/vue/candlestick-chart';

const data = [
  { time: 'Mon', open: 102, high: 108, low: 99, close: 106 },
  { time: 'Tue', open: 106, high: 109, low: 101, close: 103 },
  { time: 'Wed', open: 103, high: 105, low: 97, close: 99 },
  { time: 'Thu', open: 99, high: 104, low: 96, close: 103 },
  { time: 'Fri', open: 103, high: 111, low: 102, close: 110 },
  { time: 'Mon', open: 110, high: 114, low: 107, close: 108 },
  { time: 'Tue', open: 108, high: 110, low: 104, close: 109 },
  { time: 'Wed', open: 109, high: 116, low: 108, close: 115 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpCandlestickChart
      :data="data"
      time-key="time"
      open-key="open"
      high-key="high"
      low-key="low"
      close-key="close"
      title="Share price"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ye=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpCandlestickChart } from '@silverpoint/angular/candlestick-chart';

@Component({
  selector: 'app-root',
  imports: [SpCandlestickChart],
  template: \`
    <div style="width: 480px">
      <sp-candlestick-chart
        [data]="data"
        timeKey="time"
        openKey="open"
        highKey="high"
        lowKey="low"
        closeKey="close"
        title="Share price"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { time: 'Mon', open: 102, high: 108, low: 99, close: 106 },
    { time: 'Tue', open: 106, high: 109, low: 101, close: 103 },
    { time: 'Wed', open: 103, high: 105, low: 97, close: 99 },
    { time: 'Thu', open: 99, high: 104, low: 96, close: 103 },
    { time: 'Fri', open: 103, high: 111, low: 102, close: 110 },
    { time: 'Mon', open: 110, high: 114, low: 107, close: 108 },
    { time: 'Tue', open: 108, high: 110, low: 104, close: 109 },
    { time: 'Wed', open: 109, high: 116, low: 108, close: 115 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),be=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import candlestick_chart

DATA = [
    {"time": "Mon", "open": 102, "high": 108, "low": 99, "close": 106},
    {"time": "Tue", "open": 106, "high": 109, "low": 101, "close": 103},
    {"time": "Wed", "open": 103, "high": 105, "low": 97, "close": 99},
    {"time": "Thu", "open": 99, "high": 104, "low": 96, "close": 103},
    {"time": "Fri", "open": 103, "high": 111, "low": 102, "close": 110},
    {"time": "Mon", "open": 110, "high": 114, "low": 107, "close": 108},
    {"time": "Tue", "open": 108, "high": 110, "low": 104, "close": 109},
    {"time": "Wed", "open": 109, "high": 116, "low": 108, "close": 115},
]


def index() -> rx.Component:
    return rx.box(
        candlestick_chart(
            data=DATA,
            time_key="time",
            open_key="open",
            high_key="high",
            low_key="low",
            close_key="close",
            title="Share price",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),xe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_area_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-area-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "area-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Se=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { AreaChart } from '@silverpoint/react/area-chart';

const data = [
  { x: 'Mon', value: 32 },
  { x: 'Tue', value: 45 },
  { x: 'Wed', value: 41 },
  { x: 'Thu', value: 58 },
  { x: 'Fri', value: 66 },
  { x: 'Sat', value: 38 },
  { x: 'Sun', value: 29 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <AreaChart
        data={data}
        xKey="x"
        valueKey="value"
        title="Sessions this week"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ce=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpAreaChart } from '@silverpoint/vue/area-chart';

const data = [
  { x: 'Mon', value: 32 },
  { x: 'Tue', value: 45 },
  { x: 'Wed', value: 41 },
  { x: 'Thu', value: 58 },
  { x: 'Fri', value: 66 },
  { x: 'Sat', value: 38 },
  { x: 'Sun', value: 29 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpAreaChart
      :data="data"
      x-key="x"
      value-key="value"
      title="Sessions this week"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),we=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpAreaChart } from '@silverpoint/angular/area-chart';

@Component({
  selector: 'app-root',
  imports: [SpAreaChart],
  template: \`
    <div style="width: 480px">
      <sp-area-chart
        [data]="data"
        xKey="x"
        valueKey="value"
        title="Sessions this week"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 'Mon', value: 32 },
    { x: 'Tue', value: 45 },
    { x: 'Wed', value: 41 },
    { x: 'Thu', value: 58 },
    { x: 'Fri', value: 66 },
    { x: 'Sat', value: 38 },
    { x: 'Sun', value: 29 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Te=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import area_chart

DATA = [
    {"x": "Mon", "value": 32},
    {"x": "Tue", "value": 45},
    {"x": "Wed", "value": 41},
    {"x": "Thu", "value": 58},
    {"x": "Fri", "value": 66},
    {"x": "Sat", "value": 38},
    {"x": "Sun", "value": 29},
]


def index() -> rx.Component:
    return rx.box(
        area_chart(
            data=DATA,
            x_key="x",
            value_key="value",
            title="Sessions this week",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ee=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_range_band_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-range-band-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "range-band-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),De=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { RangeBandChart } from '@silverpoint/react/range-band-chart';

const data = [
  { x: 'Mon', low: 11, high: 19 },
  { x: 'Tue', low: 12, high: 22 },
  { x: 'Wed', low: 14, high: 24 },
  { x: 'Thu', low: 13, high: 21 },
  { x: 'Fri', low: 10, high: 18 },
  { x: 'Sat', low: 9, high: 20 },
  { x: 'Sun', low: 12, high: 23 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <RangeBandChart
        data={data}
        xKey="x"
        lowKey="low"
        highKey="high"
        title="Daily temperature"
        unit="°C"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Oe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpRangeBandChart } from '@silverpoint/vue/range-band-chart';

const data = [
  { x: 'Mon', low: 11, high: 19 },
  { x: 'Tue', low: 12, high: 22 },
  { x: 'Wed', low: 14, high: 24 },
  { x: 'Thu', low: 13, high: 21 },
  { x: 'Fri', low: 10, high: 18 },
  { x: 'Sat', low: 9, high: 20 },
  { x: 'Sun', low: 12, high: 23 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpRangeBandChart
      :data="data"
      x-key="x"
      low-key="low"
      high-key="high"
      title="Daily temperature"
      unit="°C"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ke=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpRangeBandChart } from '@silverpoint/angular/range-band-chart';

@Component({
  selector: 'app-root',
  imports: [SpRangeBandChart],
  template: \`
    <div style="width: 480px">
      <sp-range-band-chart
        [data]="data"
        xKey="x"
        lowKey="low"
        highKey="high"
        title="Daily temperature"
        unit="°C"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 'Mon', low: 11, high: 19 },
    { x: 'Tue', low: 12, high: 22 },
    { x: 'Wed', low: 14, high: 24 },
    { x: 'Thu', low: 13, high: 21 },
    { x: 'Fri', low: 10, high: 18 },
    { x: 'Sat', low: 9, high: 20 },
    { x: 'Sun', low: 12, high: 23 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ae=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import range_band_chart

DATA = [
    {"x": "Mon", "low": 11, "high": 19},
    {"x": "Tue", "low": 12, "high": 22},
    {"x": "Wed", "low": 14, "high": 24},
    {"x": "Thu", "low": 13, "high": 21},
    {"x": "Fri", "low": 10, "high": 18},
    {"x": "Sat", "low": 9, "high": 20},
    {"x": "Sun", "low": 12, "high": 23},
]


def index() -> rx.Component:
    return rx.box(
        range_band_chart(
            data=DATA,
            x_key="x",
            low_key="low",
            high_key="high",
            title="Daily temperature",
            unit="°C",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),je=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_stream_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-stream-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "stream-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Me=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { StreamChart } from '@silverpoint/react/stream-chart';

const data = [
  { x: 'Mon', organic: 22, paid: 14 },
  { x: 'Tue', organic: 28, paid: 18 },
  { x: 'Wed', organic: 35, paid: 16 },
  { x: 'Thu', organic: 31, paid: 24 },
  { x: 'Fri', organic: 38, paid: 29 },
  { x: 'Sat', organic: 26, paid: 21 },
  { x: 'Sun', organic: 19, paid: 12 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <StreamChart
        data={data}
        xKey="x"
        keys={['organic', 'paid']}
        stacked={true}
        title="Traffic sources"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ne=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpStreamChart } from '@silverpoint/vue/stream-chart';

const data = [
  { x: 'Mon', organic: 22, paid: 14 },
  { x: 'Tue', organic: 28, paid: 18 },
  { x: 'Wed', organic: 35, paid: 16 },
  { x: 'Thu', organic: 31, paid: 24 },
  { x: 'Fri', organic: 38, paid: 29 },
  { x: 'Sat', organic: 26, paid: 21 },
  { x: 'Sun', organic: 19, paid: 12 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpStreamChart
      :data="data"
      x-key="x"
      :keys="['organic', 'paid']"
      :stacked="true"
      title="Traffic sources"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Pe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpStreamChart } from '@silverpoint/angular/stream-chart';

@Component({
  selector: 'app-root',
  imports: [SpStreamChart],
  template: \`
    <div style="width: 480px">
      <sp-stream-chart
        [data]="data"
        xKey="x"
        [keys]="['organic', 'paid']"
        [stacked]="true"
        title="Traffic sources"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 'Mon', organic: 22, paid: 14 },
    { x: 'Tue', organic: 28, paid: 18 },
    { x: 'Wed', organic: 35, paid: 16 },
    { x: 'Thu', organic: 31, paid: 24 },
    { x: 'Fri', organic: 38, paid: 29 },
    { x: 'Sat', organic: 26, paid: 21 },
    { x: 'Sun', organic: 19, paid: 12 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Fe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import stream_chart

DATA = [
    {"x": "Mon", "organic": 22, "paid": 14},
    {"x": "Tue", "organic": 28, "paid": 18},
    {"x": "Wed", "organic": 35, "paid": 16},
    {"x": "Thu", "organic": 31, "paid": 24},
    {"x": "Fri", "organic": 38, "paid": 29},
    {"x": "Sat", "organic": 26, "paid": 21},
    {"x": "Sun", "organic": 19, "paid": 12},
]


def index() -> rx.Component:
    return rx.box(
        stream_chart(
            data=DATA,
            x_key="x",
            keys=["organic", "paid"],
            stacked=True,
            title="Traffic sources",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ie=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_scatter_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-scatter-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "scatter-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Le=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { ScatterChart } from '@silverpoint/react/scatter-chart';

const data = [
  { x: 152, y: 51, size: 2 },
  { x: 158, y: 56, size: 4 },
  { x: 161, y: 54, size: 3 },
  { x: 165, y: 62, size: 6 },
  { x: 168, y: 60, size: 5 },
  { x: 171, y: 68, size: 8 },
  { x: 175, y: 71, size: 7 },
  { x: 178, y: 69, size: 9 },
  { x: 182, y: 77, size: 10 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <ScatterChart
        data={data}
        xKey="x"
        yKey="y"
        sizeKey="size"
        title="Height and weight"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Re=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpScatterChart } from '@silverpoint/vue/scatter-chart';

const data = [
  { x: 152, y: 51, size: 2 },
  { x: 158, y: 56, size: 4 },
  { x: 161, y: 54, size: 3 },
  { x: 165, y: 62, size: 6 },
  { x: 168, y: 60, size: 5 },
  { x: 171, y: 68, size: 8 },
  { x: 175, y: 71, size: 7 },
  { x: 178, y: 69, size: 9 },
  { x: 182, y: 77, size: 10 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpScatterChart
      :data="data"
      x-key="x"
      y-key="y"
      size-key="size"
      title="Height and weight"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ze=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpScatterChart } from '@silverpoint/angular/scatter-chart';

@Component({
  selector: 'app-root',
  imports: [SpScatterChart],
  template: \`
    <div style="width: 480px">
      <sp-scatter-chart
        [data]="data"
        xKey="x"
        yKey="y"
        sizeKey="size"
        title="Height and weight"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 152, y: 51, size: 2 },
    { x: 158, y: 56, size: 4 },
    { x: 161, y: 54, size: 3 },
    { x: 165, y: 62, size: 6 },
    { x: 168, y: 60, size: 5 },
    { x: 171, y: 68, size: 8 },
    { x: 175, y: 71, size: 7 },
    { x: 178, y: 69, size: 9 },
    { x: 182, y: 77, size: 10 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Be=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import scatter_chart

DATA = [
    {"x": 152, "y": 51, "size": 2},
    {"x": 158, "y": 56, "size": 4},
    {"x": 161, "y": 54, "size": 3},
    {"x": 165, "y": 62, "size": 6},
    {"x": 168, "y": 60, "size": 5},
    {"x": 171, "y": 68, "size": 8},
    {"x": 175, "y": 71, "size": 7},
    {"x": 178, "y": 69, "size": 9},
    {"x": 182, "y": 77, "size": 10},
]


def index() -> rx.Component:
    return rx.box(
        scatter_chart(
            data=DATA,
            x_key="x",
            y_key="y",
            size_key="size",
            title="Height and weight",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ve=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_bubble_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-bubble-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "bubble-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),He=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { BubbleChart } from '@silverpoint/react/bubble-chart';

const data = [
  { x: 2, y: 18, size: 40 },
  { x: 5, y: 24, size: 120 },
  { x: 8, y: 12, size: 65 },
  { x: 11, y: 30, size: 210 },
  { x: 14, y: 21, size: 90 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <BubbleChart
        data={data}
        xKey="x"
        yKey="y"
        sizeKey="size"
        title="Markets"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ue=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpBubbleChart } from '@silverpoint/vue/bubble-chart';

const data = [
  { x: 2, y: 18, size: 40 },
  { x: 5, y: 24, size: 120 },
  { x: 8, y: 12, size: 65 },
  { x: 11, y: 30, size: 210 },
  { x: 14, y: 21, size: 90 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpBubbleChart
      :data="data"
      x-key="x"
      y-key="y"
      size-key="size"
      title="Markets"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),We=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpBubbleChart } from '@silverpoint/angular/bubble-chart';

@Component({
  selector: 'app-root',
  imports: [SpBubbleChart],
  template: \`
    <div style="width: 480px">
      <sp-bubble-chart
        [data]="data"
        xKey="x"
        yKey="y"
        sizeKey="size"
        title="Markets"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 2, y: 18, size: 40 },
    { x: 5, y: 24, size: 120 },
    { x: 8, y: 12, size: 65 },
    { x: 11, y: 30, size: 210 },
    { x: 14, y: 21, size: 90 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ge=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import bubble_chart

DATA = [
    {"x": 2, "y": 18, "size": 40},
    {"x": 5, "y": 24, "size": 120},
    {"x": 8, "y": 12, "size": 65},
    {"x": 11, "y": 30, "size": 210},
    {"x": 14, "y": 21, "size": 90},
]


def index() -> rx.Component:
    return rx.box(
        bubble_chart(
            data=DATA,
            x_key="x",
            y_key="y",
            size_key="size",
            title="Markets",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ke=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_heatmap_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-heatmap-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "heatmap-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),qe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { HeatmapChart } from '@silverpoint/react/heatmap-chart';

const data = [
  { label: 'Mon', values: [12, 34, 58, 71, 66, 40] },
  { label: 'Tue', values: [18, 42, 77, 88, 70, 35] },
  { label: 'Wed', values: [9, 38, 64, 93, 81, 47] },
  { label: 'Thu', values: [15, 29, 55, 68, 59, 31] },
  { label: 'Fri', values: [6, 21, 43, 49, 37, 14] },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <HeatmapChart
        data={data}
        labelKey="label"
        valuesKey="values"
        columnLabels={['00', '04', '08', '12', '16', '20']}
        title="Load by day and hour"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Je=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpHeatmapChart } from '@silverpoint/vue/heatmap-chart';

const data = [
  { label: 'Mon', values: [12, 34, 58, 71, 66, 40] },
  { label: 'Tue', values: [18, 42, 77, 88, 70, 35] },
  { label: 'Wed', values: [9, 38, 64, 93, 81, 47] },
  { label: 'Thu', values: [15, 29, 55, 68, 59, 31] },
  { label: 'Fri', values: [6, 21, 43, 49, 37, 14] },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpHeatmapChart
      :data="data"
      label-key="label"
      values-key="values"
      :column-labels="['00', '04', '08', '12', '16', '20']"
      title="Load by day and hour"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ye=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpHeatmapChart } from '@silverpoint/angular/heatmap-chart';

@Component({
  selector: 'app-root',
  imports: [SpHeatmapChart],
  template: \`
    <div style="width: 480px">
      <sp-heatmap-chart
        [data]="data"
        labelKey="label"
        valuesKey="values"
        [columnLabels]="['00', '04', '08', '12', '16', '20']"
        title="Load by day and hour"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { label: 'Mon', values: [12, 34, 58, 71, 66, 40] },
    { label: 'Tue', values: [18, 42, 77, 88, 70, 35] },
    { label: 'Wed', values: [9, 38, 64, 93, 81, 47] },
    { label: 'Thu', values: [15, 29, 55, 68, 59, 31] },
    { label: 'Fri', values: [6, 21, 43, 49, 37, 14] },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Xe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import heatmap_chart

DATA = [
    {"label": "Mon", "values": [12, 34, 58, 71, 66, 40]},
    {"label": "Tue", "values": [18, 42, 77, 88, 70, 35]},
    {"label": "Wed", "values": [9, 38, 64, 93, 81, 47]},
    {"label": "Thu", "values": [15, 29, 55, 68, 59, 31]},
    {"label": "Fri", "values": [6, 21, 43, 49, 37, 14]},
]


def index() -> rx.Component:
    return rx.box(
        heatmap_chart(
            data=DATA,
            label_key="label",
            values_key="values",
            column_labels=["00", "04", "08", "12", "16", "20"],
            title="Load by day and hour",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ze=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_treemap_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-treemap-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "treemap-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Qe=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { TreemapChart } from '@silverpoint/react/treemap-chart';

const data = [
  { label: 'Search', share: 48, cols: 3, rows: 4 },
  { label: 'Direct', share: 26, cols: 3, rows: 2 },
  { label: 'Social', share: 17, cols: 2, rows: 2 },
  { label: 'Email', share: 9, cols: 1, rows: 2 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <TreemapChart
        data={data}
        labelKey="label"
        shareKey="share"
        title="Traffic share"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),$e=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpTreemapChart } from '@silverpoint/vue/treemap-chart';

const data = [
  { label: 'Search', share: 48, cols: 3, rows: 4 },
  { label: 'Direct', share: 26, cols: 3, rows: 2 },
  { label: 'Social', share: 17, cols: 2, rows: 2 },
  { label: 'Email', share: 9, cols: 1, rows: 2 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpTreemapChart
      :data="data"
      label-key="label"
      share-key="share"
      title="Traffic share"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),et=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpTreemapChart } from '@silverpoint/angular/treemap-chart';

@Component({
  selector: 'app-root',
  imports: [SpTreemapChart],
  template: \`
    <div style="width: 480px">
      <sp-treemap-chart
        [data]="data"
        labelKey="label"
        shareKey="share"
        title="Traffic share"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { label: 'Search', share: 48, cols: 3, rows: 4 },
    { label: 'Direct', share: 26, cols: 3, rows: 2 },
    { label: 'Social', share: 17, cols: 2, rows: 2 },
    { label: 'Email', share: 9, cols: 1, rows: 2 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),tt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import treemap_chart

DATA = [
    {"label": "Search", "share": 48, "cols": 3, "rows": 4},
    {"label": "Direct", "share": 26, "cols": 3, "rows": 2},
    {"label": "Social", "share": 17, "cols": 2, "rows": 2},
    {"label": "Email", "share": 9, "cols": 1, "rows": 2},
]


def index() -> rx.Component:
    return rx.box(
        treemap_chart(
            data=DATA,
            label_key="label",
            share_key="share",
            title="Traffic share",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),nt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_activity_grid"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-activity-grid");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "activity-grid.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),rt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { ActivityGrid } from '@silverpoint/react/activity-grid';

const data = [
  { date: '2026-03-30', count: 0 },
  { date: '2026-03-31', count: 7 },
  { date: '2026-04-01', count: 3 },
  { date: '2026-04-02', count: 10 },
  { date: '2026-04-03', count: 6 },
  { date: '2026-04-04', count: 0 },
  { date: '2026-04-05', count: 3 },
  { date: '2026-04-06', count: 8 },
  { date: '2026-04-07', count: 4 },
  { date: '2026-04-08', count: 0 },
  { date: '2026-04-09', count: 7 },
  { date: '2026-04-10', count: 3 },
  // … 170 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <ActivityGrid
        data={data}
        dateKey="date"
        countKey="count"
        title="Contributions"
        weeks={26}
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),it=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpActivityGrid } from '@silverpoint/vue/activity-grid';

const data = [
  { date: '2026-03-30', count: 0 },
  { date: '2026-03-31', count: 7 },
  { date: '2026-04-01', count: 3 },
  { date: '2026-04-02', count: 10 },
  { date: '2026-04-03', count: 6 },
  { date: '2026-04-04', count: 0 },
  { date: '2026-04-05', count: 3 },
  { date: '2026-04-06', count: 8 },
  { date: '2026-04-07', count: 4 },
  { date: '2026-04-08', count: 0 },
  { date: '2026-04-09', count: 7 },
  { date: '2026-04-10', count: 3 },
  // … 170 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpActivityGrid
      :data="data"
      date-key="date"
      count-key="count"
      title="Contributions"
      :weeks="26"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),at=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpActivityGrid } from '@silverpoint/angular/activity-grid';

@Component({
  selector: 'app-root',
  imports: [SpActivityGrid],
  template: \`
    <div style="width: 480px">
      <sp-activity-grid
        [data]="data"
        dateKey="date"
        countKey="count"
        title="Contributions"
        [weeks]="26"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { date: '2026-03-30', count: 0 },
    { date: '2026-03-31', count: 7 },
    { date: '2026-04-01', count: 3 },
    { date: '2026-04-02', count: 10 },
    { date: '2026-04-03', count: 6 },
    { date: '2026-04-04', count: 0 },
    { date: '2026-04-05', count: 3 },
    { date: '2026-04-06', count: 8 },
    { date: '2026-04-07', count: 4 },
    { date: '2026-04-08', count: 0 },
    { date: '2026-04-09', count: 7 },
    { date: '2026-04-10', count: 3 },
    // … 170 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ot=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import activity_grid

DATA = [
    {"date": "2026-03-30", "count": 0},
    {"date": "2026-03-31", "count": 7},
    {"date": "2026-04-01", "count": 3},
    {"date": "2026-04-02", "count": 10},
    {"date": "2026-04-03", "count": 6},
    {"date": "2026-04-04", "count": 0},
    {"date": "2026-04-05", "count": 3},
    {"date": "2026-04-06", "count": 8},
    {"date": "2026-04-07", "count": 4},
    {"date": "2026-04-08", "count": 0},
    {"date": "2026-04-09", "count": 7},
    {"date": "2026-04-10", "count": 3},
    # … 170 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        activity_grid(
            data=DATA,
            date_key="date",
            count_key="count",
            title="Contributions",
            weeks=26,
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),st=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_sankey_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-sankey-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "sankey-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),ct=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SankeyChart } from '@silverpoint/react/sankey-chart';

const data = [
  { source: 'Search', target: 'Visit', value: 48 },
  { source: 'Social', target: 'Visit', value: 27 },
  { source: 'Email', target: 'Visit', value: 15 },
  { source: 'Visit', target: 'Signup', value: 42 },
  { source: 'Visit', target: 'Bounce', value: 48 },
  { source: 'Signup', target: 'Paid', value: 18 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <SankeyChart
        data={data}
        sourceKey="source"
        targetKey="target"
        valueKey="value"
        title="Visitor flow"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),lt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpSankeyChart } from '@silverpoint/vue/sankey-chart';

const data = [
  { source: 'Search', target: 'Visit', value: 48 },
  { source: 'Social', target: 'Visit', value: 27 },
  { source: 'Email', target: 'Visit', value: 15 },
  { source: 'Visit', target: 'Signup', value: 42 },
  { source: 'Visit', target: 'Bounce', value: 48 },
  { source: 'Signup', target: 'Paid', value: 18 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpSankeyChart
      :data="data"
      source-key="source"
      target-key="target"
      value-key="value"
      title="Visitor flow"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ut=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpSankeyChart } from '@silverpoint/angular/sankey-chart';

@Component({
  selector: 'app-root',
  imports: [SpSankeyChart],
  template: \`
    <div style="width: 480px">
      <sp-sankey-chart
        [data]="data"
        sourceKey="source"
        targetKey="target"
        valueKey="value"
        title="Visitor flow"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { source: 'Search', target: 'Visit', value: 48 },
    { source: 'Social', target: 'Visit', value: 27 },
    { source: 'Email', target: 'Visit', value: 15 },
    { source: 'Visit', target: 'Signup', value: 42 },
    { source: 'Visit', target: 'Bounce', value: 48 },
    { source: 'Signup', target: 'Paid', value: 18 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),dt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import sankey_chart

DATA = [
    {"source": "Search", "target": "Visit", "value": 48},
    {"source": "Social", "target": "Visit", "value": 27},
    {"source": "Email", "target": "Visit", "value": 15},
    {"source": "Visit", "target": "Signup", "value": 42},
    {"source": "Visit", "target": "Bounce", "value": 48},
    {"source": "Signup", "target": "Paid", "value": 18},
]


def index() -> rx.Component:
    return rx.box(
        sankey_chart(
            data=DATA,
            source_key="source",
            target_key="target",
            value_key="value",
            title="Visitor flow",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ft=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_chord_ring"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-chord-ring");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "chord-ring.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),pt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { ChordRing } from '@silverpoint/react/chord-ring';

const data = [
  { source: 'Home', target: 'Shop', value: 42 },
  { source: 'Home', target: 'Blog', value: 28 },
  { source: 'Blog', target: 'Shop', value: 16 },
  { source: 'Shop', target: 'Cart', value: 35 },
  { source: 'Cart', target: 'Shop', value: 12 },
  { source: 'Blog', target: 'Home', value: 9 },
  { source: 'Help', target: 'Cart', value: 7 },
  { source: 'Shop', target: 'Help', value: 11 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <ChordRing
        data={data}
        sourceKey="source"
        targetKey="target"
        valueKey="value"
        title="Navigation between sections"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),mt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpChordRing } from '@silverpoint/vue/chord-ring';

const data = [
  { source: 'Home', target: 'Shop', value: 42 },
  { source: 'Home', target: 'Blog', value: 28 },
  { source: 'Blog', target: 'Shop', value: 16 },
  { source: 'Shop', target: 'Cart', value: 35 },
  { source: 'Cart', target: 'Shop', value: 12 },
  { source: 'Blog', target: 'Home', value: 9 },
  { source: 'Help', target: 'Cart', value: 7 },
  { source: 'Shop', target: 'Help', value: 11 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpChordRing
      :data="data"
      source-key="source"
      target-key="target"
      value-key="value"
      title="Navigation between sections"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ht=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpChordRing } from '@silverpoint/angular/chord-ring';

@Component({
  selector: 'app-root',
  imports: [SpChordRing],
  template: \`
    <div style="width: 480px">
      <sp-chord-ring
        [data]="data"
        sourceKey="source"
        targetKey="target"
        valueKey="value"
        title="Navigation between sections"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { source: 'Home', target: 'Shop', value: 42 },
    { source: 'Home', target: 'Blog', value: 28 },
    { source: 'Blog', target: 'Shop', value: 16 },
    { source: 'Shop', target: 'Cart', value: 35 },
    { source: 'Cart', target: 'Shop', value: 12 },
    { source: 'Blog', target: 'Home', value: 9 },
    { source: 'Help', target: 'Cart', value: 7 },
    { source: 'Shop', target: 'Help', value: 11 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),gt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import chord_ring

DATA = [
    {"source": "Home", "target": "Shop", "value": 42},
    {"source": "Home", "target": "Blog", "value": 28},
    {"source": "Blog", "target": "Shop", "value": 16},
    {"source": "Shop", "target": "Cart", "value": 35},
    {"source": "Cart", "target": "Shop", "value": 12},
    {"source": "Blog", "target": "Home", "value": 9},
    {"source": "Help", "target": "Cart", "value": 7},
    {"source": "Shop", "target": "Help", "value": 11},
]


def index() -> rx.Component:
    return rx.box(
        chord_ring(
            data=DATA,
            source_key="source",
            target_key="target",
            value_key="value",
            title="Navigation between sections",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),_t=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_donut_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-donut-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "donut-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),vt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { DonutChart } from '@silverpoint/react/donut-chart';

const data = [
  { name: 'Rent', value: 38 },
  { name: 'Food', value: 22 },
  { name: 'Savings', value: 15 },
  { name: 'Transport', value: 14 },
  { name: 'Leisure', value: 11 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <DonutChart
        data={data}
        nameKey="name"
        valueKey="value"
        title="Monthly budget"
        centerLabel="percent"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),yt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpDonutChart } from '@silverpoint/vue/donut-chart';

const data = [
  { name: 'Rent', value: 38 },
  { name: 'Food', value: 22 },
  { name: 'Savings', value: 15 },
  { name: 'Transport', value: 14 },
  { name: 'Leisure', value: 11 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpDonutChart
      :data="data"
      name-key="name"
      value-key="value"
      title="Monthly budget"
      center-label="percent"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),bt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpDonutChart } from '@silverpoint/angular/donut-chart';

@Component({
  selector: 'app-root',
  imports: [SpDonutChart],
  template: \`
    <div style="width: 480px">
      <sp-donut-chart
        [data]="data"
        nameKey="name"
        valueKey="value"
        title="Monthly budget"
        centerLabel="percent"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { name: 'Rent', value: 38 },
    { name: 'Food', value: 22 },
    { name: 'Savings', value: 15 },
    { name: 'Transport', value: 14 },
    { name: 'Leisure', value: 11 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),xt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import donut_chart

DATA = [
    {"name": "Rent", "value": 38},
    {"name": "Food", "value": 22},
    {"name": "Savings", "value": 15},
    {"name": "Transport", "value": 14},
    {"name": "Leisure", "value": 11},
]


def index() -> rx.Component:
    return rx.box(
        donut_chart(
            data=DATA,
            name_key="name",
            value_key="value",
            title="Monthly budget",
            center_label="percent",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),St=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_radar_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-radar-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "radar-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Ct=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { RadarChart } from '@silverpoint/react/radar-chart';

const data = [
  { subject: 'Speed', value: 8 },
  { subject: 'Range', value: 6 },
  { subject: 'Comfort', value: 7 },
  { subject: 'Safety', value: 9 },
  { subject: 'Cost', value: 4 },
  { subject: 'Style', value: 6 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <RadarChart
        data={data}
        subjectKey="subject"
        valueKey="value"
        title="Car profile"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),wt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpRadarChart } from '@silverpoint/vue/radar-chart';

const data = [
  { subject: 'Speed', value: 8 },
  { subject: 'Range', value: 6 },
  { subject: 'Comfort', value: 7 },
  { subject: 'Safety', value: 9 },
  { subject: 'Cost', value: 4 },
  { subject: 'Style', value: 6 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpRadarChart
      :data="data"
      subject-key="subject"
      value-key="value"
      title="Car profile"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Tt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpRadarChart } from '@silverpoint/angular/radar-chart';

@Component({
  selector: 'app-root',
  imports: [SpRadarChart],
  template: \`
    <div style="width: 480px">
      <sp-radar-chart
        [data]="data"
        subjectKey="subject"
        valueKey="value"
        title="Car profile"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { subject: 'Speed', value: 8 },
    { subject: 'Range', value: 6 },
    { subject: 'Comfort', value: 7 },
    { subject: 'Safety', value: 9 },
    { subject: 'Cost', value: 4 },
    { subject: 'Style', value: 6 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Et=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import radar_chart

DATA = [
    {"subject": "Speed", "value": 8},
    {"subject": "Range", "value": 6},
    {"subject": "Comfort", "value": 7},
    {"subject": "Safety", "value": 9},
    {"subject": "Cost", "value": 4},
    {"subject": "Style", "value": 6},
]


def index() -> rx.Component:
    return rx.box(
        radar_chart(
            data=DATA,
            subject_key="subject",
            value_key="value",
            title="Car profile",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Dt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_polar_bar_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-polar-bar-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "polar-bar-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Ot=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { PolarBarChart } from '@silverpoint/react/polar-bar-chart';

const data = [
  { name: 'Jan', value: 32 },
  { name: 'Feb', value: 28 },
  { name: 'Mar', value: 41 },
  { name: 'Apr', value: 47 },
  { name: 'May', value: 55 },
  { name: 'Jun', value: 61 },
  { name: 'Jul', value: 66 },
  { name: 'Aug', value: 63 },
  { name: 'Sep', value: 52 },
  { name: 'Oct', value: 44 },
  { name: 'Nov', value: 37 },
  { name: 'Dec', value: 49 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <PolarBarChart
        data={data}
        nameKey="name"
        valueKey="value"
        title="Rainfall by month"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),kt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpPolarBarChart } from '@silverpoint/vue/polar-bar-chart';

const data = [
  { name: 'Jan', value: 32 },
  { name: 'Feb', value: 28 },
  { name: 'Mar', value: 41 },
  { name: 'Apr', value: 47 },
  { name: 'May', value: 55 },
  { name: 'Jun', value: 61 },
  { name: 'Jul', value: 66 },
  { name: 'Aug', value: 63 },
  { name: 'Sep', value: 52 },
  { name: 'Oct', value: 44 },
  { name: 'Nov', value: 37 },
  { name: 'Dec', value: 49 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpPolarBarChart
      :data="data"
      name-key="name"
      value-key="value"
      title="Rainfall by month"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),At=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpPolarBarChart } from '@silverpoint/angular/polar-bar-chart';

@Component({
  selector: 'app-root',
  imports: [SpPolarBarChart],
  template: \`
    <div style="width: 480px">
      <sp-polar-bar-chart
        [data]="data"
        nameKey="name"
        valueKey="value"
        title="Rainfall by month"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { name: 'Jan', value: 32 },
    { name: 'Feb', value: 28 },
    { name: 'Mar', value: 41 },
    { name: 'Apr', value: 47 },
    { name: 'May', value: 55 },
    { name: 'Jun', value: 61 },
    { name: 'Jul', value: 66 },
    { name: 'Aug', value: 63 },
    { name: 'Sep', value: 52 },
    { name: 'Oct', value: 44 },
    { name: 'Nov', value: 37 },
    { name: 'Dec', value: 49 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),jt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import polar_bar_chart

DATA = [
    {"name": "Jan", "value": 32},
    {"name": "Feb", "value": 28},
    {"name": "Mar", "value": 41},
    {"name": "Apr", "value": 47},
    {"name": "May", "value": 55},
    {"name": "Jun", "value": 61},
    {"name": "Jul", "value": 66},
    {"name": "Aug", "value": 63},
    {"name": "Sep", "value": 52},
    {"name": "Oct", "value": 44},
    {"name": "Nov", "value": 37},
    {"name": "Dec", "value": 49},
]


def index() -> rx.Component:
    return rx.box(
        polar_bar_chart(
            data=DATA,
            name_key="name",
            value_key="value",
            title="Rainfall by month",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Mt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_radial_arc_group"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-radial-arc-group");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "radial-arc-group.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Nt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { RadialArcGroup } from '@silverpoint/react/radial-arc-group';

const data = [
  { name: 'Direct', value: 84 },
  { name: 'Partners', value: 62 },
  { name: 'Online', value: 47 },
  { name: 'Events', value: 23 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <RadialArcGroup
        data={data}
        nameKey="name"
        valueKey="value"
        title="Sales by channel"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Pt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpRadialArcGroup } from '@silverpoint/vue/radial-arc-group';

const data = [
  { name: 'Direct', value: 84 },
  { name: 'Partners', value: 62 },
  { name: 'Online', value: 47 },
  { name: 'Events', value: 23 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpRadialArcGroup
      :data="data"
      name-key="name"
      value-key="value"
      title="Sales by channel"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ft=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpRadialArcGroup } from '@silverpoint/angular/radial-arc-group';

@Component({
  selector: 'app-root',
  imports: [SpRadialArcGroup],
  template: \`
    <div style="width: 480px">
      <sp-radial-arc-group
        [data]="data"
        nameKey="name"
        valueKey="value"
        title="Sales by channel"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { name: 'Direct', value: 84 },
    { name: 'Partners', value: 62 },
    { name: 'Online', value: 47 },
    { name: 'Events', value: 23 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),It=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import radial_arc_group

DATA = [
    {"name": "Direct", "value": 84},
    {"name": "Partners", "value": 62},
    {"name": "Online", "value": 47},
    {"name": "Events", "value": 23},
]


def index() -> rx.Component:
    return rx.box(
        radial_arc_group(
            data=DATA,
            name_key="name",
            value_key="value",
            title="Sales by channel",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Lt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_radial_rings"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-radial-rings");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "radial-rings.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Rt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { RadialRings } from '@silverpoint/react/radial-rings';

const data = [
  { name: 'Move', value: 82 },
  { name: 'Exercise', value: 64 },
  { name: 'Stand', value: 100 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <RadialRings
        data={data}
        nameKey="name"
        valueKey="value"
        title="Daily activity"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),zt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpRadialRings } from '@silverpoint/vue/radial-rings';

const data = [
  { name: 'Move', value: 82 },
  { name: 'Exercise', value: 64 },
  { name: 'Stand', value: 100 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpRadialRings
      :data="data"
      name-key="name"
      value-key="value"
      title="Daily activity"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Bt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpRadialRings } from '@silverpoint/angular/radial-rings';

@Component({
  selector: 'app-root',
  imports: [SpRadialRings],
  template: \`
    <div style="width: 480px">
      <sp-radial-rings
        [data]="data"
        nameKey="name"
        valueKey="value"
        title="Daily activity"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { name: 'Move', value: 82 },
    { name: 'Exercise', value: 64 },
    { name: 'Stand', value: 100 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Vt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import radial_rings

DATA = [
    {"name": "Move", "value": 82},
    {"name": "Exercise", "value": 64},
    {"name": "Stand", "value": 100},
]


def index() -> rx.Component:
    return rx.box(
        radial_rings(
            data=DATA,
            name_key="name",
            value_key="value",
            title="Daily activity",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ht=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_gauge_arc"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-gauge-arc");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "gauge-arc.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Ut=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { GaugeArc } from '@silverpoint/react/gauge-arc';

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <GaugeArc
        percent={72}
        caption="Capacity used"
        title="Capacity"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Wt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpGaugeArc } from '@silverpoint/vue/gauge-arc';
<\/script>

<template>
  <div style="width: 480px">
    <SpGaugeArc
      :percent="72"
      caption="Capacity used"
      title="Capacity"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Gt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpGaugeArc } from '@silverpoint/angular/gauge-arc';

@Component({
  selector: 'app-root',
  imports: [SpGaugeArc],
  template: \`
    <div style="width: 480px">
      <sp-gauge-arc
        [percent]="72"
        caption="Capacity used"
        title="Capacity"
      />
    </div>
  \`,
})
export class App {
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Kt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import gauge_arc


def index() -> rx.Component:
    return rx.box(
        gauge_arc(
            percent=72,
            caption="Capacity used",
            title="Capacity",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),qt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_meter_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-meter-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "meter-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),Jt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { MeterChart } from '@silverpoint/react/meter-chart';

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <MeterChart
        percent={64}
        caption="Load"
        title="Server load"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Yt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpMeterChart } from '@silverpoint/vue/meter-chart';
<\/script>

<template>
  <div style="width: 480px">
    <SpMeterChart
      :percent="64"
      caption="Load"
      title="Server load"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Xt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpMeterChart } from '@silverpoint/angular/meter-chart';

@Component({
  selector: 'app-root',
  imports: [SpMeterChart],
  template: \`
    <div style="width: 480px">
      <sp-meter-chart
        [percent]="64"
        caption="Load"
        title="Server load"
      />
    </div>
  \`,
})
export class App {
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Zt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import meter_chart


def index() -> rx.Component:
    return rx.box(
        meter_chart(
            percent=64,
            caption="Load",
            title="Server load",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Qt=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_coxcomb_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-coxcomb-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "coxcomb-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),$t=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { CoxcombChart } from '@silverpoint/react/coxcomb-chart';

const data = [
  { name: 'Mon', value: 42 },
  { name: 'Tue', value: 35 },
  { name: 'Wed', value: 31 },
  { name: 'Thu', value: 38 },
  { name: 'Fri', value: 27 },
  { name: 'Sat', value: 12 },
  { name: 'Sun', value: 9 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <CoxcombChart
        data={data}
        nameKey="name"
        valueKey="value"
        title="Visits by weekday"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),en=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpCoxcombChart } from '@silverpoint/vue/coxcomb-chart';

const data = [
  { name: 'Mon', value: 42 },
  { name: 'Tue', value: 35 },
  { name: 'Wed', value: 31 },
  { name: 'Thu', value: 38 },
  { name: 'Fri', value: 27 },
  { name: 'Sat', value: 12 },
  { name: 'Sun', value: 9 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpCoxcombChart
      :data="data"
      name-key="name"
      value-key="value"
      title="Visits by weekday"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),$=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpCoxcombChart } from '@silverpoint/angular/coxcomb-chart';

@Component({
  selector: 'app-root',
  imports: [SpCoxcombChart],
  template: \`
    <div style="width: 480px">
      <sp-coxcomb-chart
        [data]="data"
        nameKey="name"
        valueKey="value"
        title="Visits by weekday"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { name: 'Mon', value: 42 },
    { name: 'Tue', value: 35 },
    { name: 'Wed', value: 31 },
    { name: 'Thu', value: 38 },
    { name: 'Fri', value: 27 },
    { name: 'Sat', value: 12 },
    { name: 'Sun', value: 9 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),tn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import coxcomb_chart

DATA = [
    {"name": "Mon", "value": 42},
    {"name": "Tue", "value": 35},
    {"name": "Wed", "value": 31},
    {"name": "Thu", "value": 38},
    {"name": "Fri", "value": 27},
    {"name": "Sat", "value": 12},
    {"name": "Sun", "value": 9},
]


def index() -> rx.Component:
    return rx.box(
        coxcomb_chart(
            data=DATA,
            name_key="name",
            value_key="value",
            title="Visits by weekday",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),nn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_wind_rose"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-wind-rose");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "wind-rose.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),rn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { WindRose } from '@silverpoint/react/wind-rose';

const data = [
  { bearing: 180, speed: 11 },
  { bearing: 170, speed: 11 },
  { bearing: 180, speed: 9 },
  { bearing: 180, speed: 10 },
  { bearing: 170, speed: 7 },
  { bearing: 180, speed: 11 },
  { bearing: 180, speed: 10 },
  { bearing: 180, speed: 9 },
  { bearing: 160, speed: 7 },
  { bearing: 150, speed: 6 },
  { bearing: 140, speed: 9 },
  { bearing: 150, speed: 8 },
  // … 730 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <WindRose
        data={data}
        bearingKey="bearing"
        valueKey="speed"
        title="Wind, Des Moines, March 2024"
        unit="kt"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),an=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpWindRose } from '@silverpoint/vue/wind-rose';

const data = [
  { bearing: 180, speed: 11 },
  { bearing: 170, speed: 11 },
  { bearing: 180, speed: 9 },
  { bearing: 180, speed: 10 },
  { bearing: 170, speed: 7 },
  { bearing: 180, speed: 11 },
  { bearing: 180, speed: 10 },
  { bearing: 180, speed: 9 },
  { bearing: 160, speed: 7 },
  { bearing: 150, speed: 6 },
  { bearing: 140, speed: 9 },
  { bearing: 150, speed: 8 },
  // … 730 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpWindRose
      :data="data"
      bearing-key="bearing"
      value-key="speed"
      title="Wind, Des Moines, March 2024"
      unit="kt"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),on=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpWindRose } from '@silverpoint/angular/wind-rose';

@Component({
  selector: 'app-root',
  imports: [SpWindRose],
  template: \`
    <div style="width: 480px">
      <sp-wind-rose
        [data]="data"
        bearingKey="bearing"
        valueKey="speed"
        title="Wind, Des Moines, March 2024"
        unit="kt"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { bearing: 180, speed: 11 },
    { bearing: 170, speed: 11 },
    { bearing: 180, speed: 9 },
    { bearing: 180, speed: 10 },
    { bearing: 170, speed: 7 },
    { bearing: 180, speed: 11 },
    { bearing: 180, speed: 10 },
    { bearing: 180, speed: 9 },
    { bearing: 160, speed: 7 },
    { bearing: 150, speed: 6 },
    { bearing: 140, speed: 9 },
    { bearing: 150, speed: 8 },
    // … 730 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),sn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import wind_rose

DATA = [
    {"bearing": 180, "speed": 11},
    {"bearing": 170, "speed": 11},
    {"bearing": 180, "speed": 9},
    {"bearing": 180, "speed": 10},
    {"bearing": 170, "speed": 7},
    {"bearing": 180, "speed": 11},
    {"bearing": 180, "speed": 10},
    {"bearing": 180, "speed": 9},
    {"bearing": 160, "speed": 7},
    {"bearing": 150, "speed": 6},
    {"bearing": 140, "speed": 9},
    {"bearing": 150, "speed": 8},
    # … 730 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        wind_rose(
            data=DATA,
            bearing_key="bearing",
            value_key="speed",
            title="Wind, Des Moines, March 2024",
            unit="kt",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),cn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_volvelle_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-volvelle-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "volvelle-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),ln=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { VolvelleChart } from '@silverpoint/react/volvelle-chart';

const data = [
  { label: 'Day', segments: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  { label: 'Shift', segments: ['Early', 'Late', 'Night'] },
  { label: 'Team', segments: ['Atlas', 'Borealis', 'Cygnus', 'Draco', 'Eridanus'] },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <VolvelleChart
        data={data}
        indexRing={1}
        indexValue="Night"
        title="Duty rota"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),un=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpVolvelleChart } from '@silverpoint/vue/volvelle-chart';

const data = [
  { label: 'Day', segments: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  { label: 'Shift', segments: ['Early', 'Late', 'Night'] },
  { label: 'Team', segments: ['Atlas', 'Borealis', 'Cygnus', 'Draco', 'Eridanus'] },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpVolvelleChart
      :data="data"
      :index-ring="1"
      index-value="Night"
      title="Duty rota"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),dn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpVolvelleChart } from '@silverpoint/angular/volvelle-chart';

@Component({
  selector: 'app-root',
  imports: [SpVolvelleChart],
  template: \`
    <div style="width: 480px">
      <sp-volvelle-chart
        [data]="data"
        [indexRing]="1"
        indexValue="Night"
        title="Duty rota"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { label: 'Day', segments: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    { label: 'Shift', segments: ['Early', 'Late', 'Night'] },
    { label: 'Team', segments: ['Atlas', 'Borealis', 'Cygnus', 'Draco', 'Eridanus'] },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),fn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import volvelle_chart

DATA = [
    {"label": "Day", "segments": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]},
    {"label": "Shift", "segments": ["Early", "Late", "Night"]},
    {"label": "Team", "segments": ["Atlas", "Borealis", "Cygnus", "Draco", "Eridanus"]},
]


def index() -> rx.Component:
    return rx.box(
        volvelle_chart(
            data=DATA,
            index_ring=1,
            index_value="Night",
            title="Duty rota",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),pn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_orbit_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-orbit-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "orbit-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-button`,onClick:r,type:`button`})},e)});return e.displayName=`Button`,e})(),mn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { OrbitChart } from '@silverpoint/react/orbit-chart';

const data = [
  { label: '2023', markers: [{ period: 0.08, value: 12 }, { period: 0.33, value: 30 }, { period: 0.61, value: 18 }, { period: 0.9, value: 24 }] },
  { label: '2024', markers: [{ period: 0.12, value: 20 }, { period: 0.4, value: 42 }, { period: 0.66, value: 15 }, { period: 0.87, value: 33 }] },
  { label: '2025', markers: [{ period: 0.05, value: 26 }, { period: 0.29, value: 38 }, { period: 0.55, value: 50 }, { period: 0.81, value: 21 }] },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <OrbitChart
        data={data}
        markerKey="markers"
        periodKey="period"
        title="Seasonal peaks"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),hn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpOrbitChart } from '@silverpoint/vue/orbit-chart';

const data = [
  { label: '2023', markers: [{ period: 0.08, value: 12 }, { period: 0.33, value: 30 }, { period: 0.61, value: 18 }, { period: 0.9, value: 24 }] },
  { label: '2024', markers: [{ period: 0.12, value: 20 }, { period: 0.4, value: 42 }, { period: 0.66, value: 15 }, { period: 0.87, value: 33 }] },
  { label: '2025', markers: [{ period: 0.05, value: 26 }, { period: 0.29, value: 38 }, { period: 0.55, value: 50 }, { period: 0.81, value: 21 }] },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpOrbitChart
      :data="data"
      marker-key="markers"
      period-key="period"
      title="Seasonal peaks"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),gn=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpOrbitChart } from '@silverpoint/angular/orbit-chart';

@Component({
  selector: 'app-root',
  imports: [SpOrbitChart],
  template: \`
    <div style="width: 480px">
      <sp-orbit-chart
        [data]="data"
        markerKey="markers"
        periodKey="period"
        title="Seasonal peaks"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { label: '2023', markers: [{ period: 0.08, value: 12 }, { period: 0.33, value: 30 }, { period: 0.61, value: 18 }, { period: 0.9, value: 24 }] },
    { label: '2024', markers: [{ period: 0.12, value: 20 }, { period: 0.4, value: 42 }, { period: 0.66, value: 15 }, { period: 0.87, value: 33 }] },
    { label: '2025', markers: [{ period: 0.05, value: 26 }, { period: 0.29, value: 38 }, { period: 0.55, value: 50 }, { period: 0.81, value: 21 }] },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),_n=(()=>{let e=(0,s.memo)(({children:e,...t})=>{let r=(0,s.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import orbit_chart

DATA = [
    {"label": "2023", "markers": [{"period": 0.08, "value": 12}, {"period": 0.33, "value": 30}, {"period": 0.61, "value": 18}, {"period": 0.9, "value": 24}]},
    {"label": "2024", "markers": [{"period": 0.12, "value": 20}, {"period": 0.4, "value": 42}, {"period": 0.66, "value": 15}, {"period": 0.87, "value": 33}]},
    {"label": "2025", "markers": [{"period": 0.05, "value": 26}, {"period": 0.29, "value": 38}, {"period": 0.55, "value": 50}, {"period": 0.81, "value": 21}]},
]


def index() -> rx.Component:
    return rx.box(
        orbit_chart(
            data=DATA,
            marker_key="markers",
            period_key="period",
            title="Seasonal peaks",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...n(t,{className:`spw-copy`,onClick:r,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})();export{D as $,G as $n,dt as $t,Ye as A,qt as An,Ee as At,u as B,y as Bn,_ as Bt,_e as C,F as Cn,xe as Ct,M as D,ne as Dn,Mt as Dt,ut as E,Zt as En,q as Et,He as F,at as Fn,Ze as Ft,R as G,Oe as Gn,Ct as Gt,be as H,T as Hn,O as Ht,Lt as I,pe as In,on as It,Ht as J,Nt as Jn,gn as Jt,ze as K,ft as Kn,pn as Kt,Ge as L,we as Ln,ye as Lt,Te as M,Je as Mn,en as Mt,Dt as N,Re as Nn,nt as Nt,$t as O,un as On,ae as Ot,le as P,St as Pn,cn as Pt,Qt as Q,It as Qn,rn as Qt,ln as R,Yt as Rn,ct as Rt,me as S,p as Sn,Pt as St,Fe as T,Ae as Tn,$ as Tt,sn as U,Ie as Un,$e as Ut,Qe as V,re as Vn,Ne as Vt,k as W,mn as Wn,De as Wt,ve as X,Xt as Xn,P as Xt,Se as Y,et as Yn,lt as Yt,qe as Z,st as Zn,kt as Zt,an as _,Z as _n,oe as _t,C as a,Ve as an,Be as ar,ie as at,f as b,Ue as bn,it as bt,We as c,_n as cn,g as cr,dn as ct,h as d,te as dn,Jt as dt,m as en,H as er,x as et,Bt as f,de as fn,jt as ft,Ut as g,J as gn,je as gt,I as h,fn as hn,Kt as ht,c as i,xt as in,Et as ir,z as it,Y as j,Ke as jn,Wt as jt,ue as k,ot as kn,d as kt,Gt as l,_t as ln,Me as lt,Ce as m,tn as mn,Xe as mt,he as n,hn as nn,j as nr,fe as nt,W as o,V as on,b as or,Tt as ot,bt as p,ge as pn,l as pt,ke as q,Le as qn,nn as qt,rt as r,L as rn,gt as rr,A as rt,zt as s,S as sn,se as sr,Ot as st,Q as t,N as tn,At as tr,ce as tt,w as u,pt as un,U as ut,v,wt as vn,ht as vt,Vt as w,yt as wn,tt as wt,mt as x,B as xn,X as xt,Rt as y,K as yn,Pe as yt,E as z,Ft as zn,vt as zt};