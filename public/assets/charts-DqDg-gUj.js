import{G as e,J as t}from"./components-B1lk-uNG.js";import{c as n,o as r,t as i}from"./state-BYRes_WV.js";import{n as a}from"./emotion-react.browser.esm-BYj5ThIA.js";import{r as o}from"./context-BE1vh4gk.js";import"./styles-BTaUpbmu.js";import{t as s}from"./chunk-INHBSJZX-B2g46XWF.js";import{t as c}from"./chunk-YRRWP5HL-Av3U8t1I.js";import"./ui-B0tXyone.js";import{r as l,t as u}from"./chunk-CWFUPKSS-BzadaREE.js";var d=t(e(),1),f=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_line_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-line-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),p=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/react @silverpoint/grounds @silverpoint/fonts`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ee=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),te=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/vue @silverpoint/grounds @silverpoint/fonts`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),m=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),h=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`npm install @silverpoint/angular @silverpoint/grounds @silverpoint/fonts`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),g=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),_=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`pip install reflex-silverpoint-react`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),v=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),y=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useId)(),[c,u]=(0,d.useState)(`react`);n._client_state_setSp_framework=(e=>Array.prototype.forEach.call([...Object.values(n._client_state_dict_setSp_framework),e=>{n._client_state_sp_framework=e}],(t=>t(e)))),n._client_state_sp_framework??=c,n._client_state_dict_sp_framework??={},n._client_state_dict_setSp_framework??={},n._client_state_dict_sp_framework[s]=n._client_state_sp_framework,n._client_state_dict_setSp_framework[s]=u;let f=(0,d.useCallback)((e=>(e=>n._client_state_setSp_framework(e))(e)),[o,i,s,c,u]);return a(l,{...r(t,{className:`spw-tabs`,items:[{key:`react`,label:`React`},{key:`vue`,label:`Vue`},{key:`angular`,label:`Angular`},{key:`reflex`,label:`Reflex`}],label:`Framework`,onChange:f,size:`sm`,value:n._client_state_dict_sp_framework[s]})},e)});return e.displayName=`SpTabs`,e})(),b=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_step_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-step-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),x=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),S=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),C=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),w=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),T=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_sparkline_rows_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-sparkline-rows-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),E=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),D=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),O=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),k=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),A=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_kpi_card_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-kpi-card-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),j=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),M=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),N=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),P=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),F=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_bar_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-bar-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),I=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),L=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),R=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),z=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),B=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_stacked_bar_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-stacked-bar-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),V=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),H=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),U=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),W=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),G=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_composed_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-composed-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),K=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),q=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),J=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Y=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),X=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_waterfall_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-waterfall-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Z=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Q=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ne=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),re=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ie=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_funnel_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-funnel-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),ae=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),oe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),se=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ce=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),le=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_bullet_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-bullet-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),ue=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),de=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),fe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),pe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),me=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_pyramid_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-pyramid-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),he=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ge=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),_e=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ve=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ye=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_candlestick_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-candlestick-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),be=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),xe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Se=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ce=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),we=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_area_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-area-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Te=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ee=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),De=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Oe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ke=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_range_band_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-range-band-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Ae=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),je=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Me=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ne=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Pe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_stream_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-stream-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Fe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ie=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Le=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Re=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ze=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_scatter_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-scatter-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Be=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ve=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),He=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ue=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),We=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_bubble_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-bubble-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Ge=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ke=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),qe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Je=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ye=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_heatmap_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-heatmap-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Xe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ze=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Qe=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),$e=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),et=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_treemap_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-treemap-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),tt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),nt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),rt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),it=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),at=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_activity_grid_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-activity-grid-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),ot=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),st=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ct=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),lt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ut=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_sankey_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-sankey-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),dt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ft=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),pt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),mt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ht=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_chord_ring_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-chord-ring-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),gt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),_t=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),vt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),yt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),bt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_donut_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-donut-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),xt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),St=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ct=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),wt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Tt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_radar_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-radar-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Et=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Dt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ot=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),kt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),At=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_polar_bar_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-polar-bar-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),jt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Mt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Nt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Pt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ft=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_radial_arc_group_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-radial-arc-group-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),It=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Lt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Rt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),zt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Bt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_radial_rings_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-radial-rings-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Vt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ht=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ut=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Wt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Gt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_gauge_arc_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-gauge-arc-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Kt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),qt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Jt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Yt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Xt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_meter_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-meter-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Zt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Qt=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),$t=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),en=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),tn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_coxcomb_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-coxcomb-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),nn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),rn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),an=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),on=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),sn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_wind_rose_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-wind-rose-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),cn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ln=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),un=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),dn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),$=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_volvelle_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-volvelle-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),fn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),pn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),mn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),hn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),gn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_orbit_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
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
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-orbit-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),_n=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),vn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
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
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),yn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
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
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),bn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
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
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),xn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_histogram_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_histogram_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-histogram-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "histogram-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-histogram-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Sn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { HistogramChart } from '@silverpoint/react/histogram-chart';

const data = [
  { reader: 'R001', device: 'desktop', minutes: 4 },
  { reader: 'R002', device: 'phone', minutes: 17 },
  { reader: 'R003', device: 'phone', minutes: 3 },
  { reader: 'R004', device: 'phone', minutes: 6.5 },
  { reader: 'R005', device: 'phone', minutes: 3.5 },
  { reader: 'R006', device: 'phone', minutes: 3 },
  { reader: 'R007', device: 'phone', minutes: 4.5 },
  { reader: 'R008', device: 'desktop', minutes: 23.5 },
  { reader: 'R009', device: 'phone', minutes: 1 },
  { reader: 'R010', device: 'desktop', minutes: 1 },
  { reader: 'R011', device: 'phone', minutes: 6.5 },
  { reader: 'R012', device: 'desktop', minutes: 4.5 },
  // … 228 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <HistogramChart
        data={data}
        valueKey="minutes"
        title="Reading time"
        unit="min"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Cn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpHistogramChart } from '@silverpoint/vue/histogram-chart';

const data = [
  { reader: 'R001', device: 'desktop', minutes: 4 },
  { reader: 'R002', device: 'phone', minutes: 17 },
  { reader: 'R003', device: 'phone', minutes: 3 },
  { reader: 'R004', device: 'phone', minutes: 6.5 },
  { reader: 'R005', device: 'phone', minutes: 3.5 },
  { reader: 'R006', device: 'phone', minutes: 3 },
  { reader: 'R007', device: 'phone', minutes: 4.5 },
  { reader: 'R008', device: 'desktop', minutes: 23.5 },
  { reader: 'R009', device: 'phone', minutes: 1 },
  { reader: 'R010', device: 'desktop', minutes: 1 },
  { reader: 'R011', device: 'phone', minutes: 6.5 },
  { reader: 'R012', device: 'desktop', minutes: 4.5 },
  // … 228 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpHistogramChart
      :data="data"
      value-key="minutes"
      title="Reading time"
      unit="min"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),wn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpHistogramChart } from '@silverpoint/angular/histogram-chart';

@Component({
  selector: 'app-root',
  imports: [SpHistogramChart],
  template: \`
    <div style="width: 480px">
      <sp-histogram-chart
        [data]="data"
        valueKey="minutes"
        title="Reading time"
        unit="min"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { reader: 'R001', device: 'desktop', minutes: 4 },
    { reader: 'R002', device: 'phone', minutes: 17 },
    { reader: 'R003', device: 'phone', minutes: 3 },
    { reader: 'R004', device: 'phone', minutes: 6.5 },
    { reader: 'R005', device: 'phone', minutes: 3.5 },
    { reader: 'R006', device: 'phone', minutes: 3 },
    { reader: 'R007', device: 'phone', minutes: 4.5 },
    { reader: 'R008', device: 'desktop', minutes: 23.5 },
    { reader: 'R009', device: 'phone', minutes: 1 },
    { reader: 'R010', device: 'desktop', minutes: 1 },
    { reader: 'R011', device: 'phone', minutes: 6.5 },
    { reader: 'R012', device: 'desktop', minutes: 4.5 },
    // … 228 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Tn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import histogram_chart

DATA = [
    {"reader": "R001", "device": "desktop", "minutes": 4},
    {"reader": "R002", "device": "phone", "minutes": 17},
    {"reader": "R003", "device": "phone", "minutes": 3},
    {"reader": "R004", "device": "phone", "minutes": 6.5},
    {"reader": "R005", "device": "phone", "minutes": 3.5},
    {"reader": "R006", "device": "phone", "minutes": 3},
    {"reader": "R007", "device": "phone", "minutes": 4.5},
    {"reader": "R008", "device": "desktop", "minutes": 23.5},
    {"reader": "R009", "device": "phone", "minutes": 1},
    {"reader": "R010", "device": "desktop", "minutes": 1},
    {"reader": "R011", "device": "phone", "minutes": 6.5},
    {"reader": "R012", "device": "desktop", "minutes": 4.5},
    # … 228 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        histogram_chart(
            data=DATA,
            value_key="minutes",
            title="Reading time",
            unit="min",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),En=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_ecdf_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_ecdf_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-ecdf-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "ecdf-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-ecdf-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Dn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { EcdfChart } from '@silverpoint/react/ecdf-chart';

const data = [
  { reader: 'R001', device: 'desktop', minutes: 4 },
  { reader: 'R002', device: 'phone', minutes: 17 },
  { reader: 'R003', device: 'phone', minutes: 3 },
  { reader: 'R004', device: 'phone', minutes: 6.5 },
  { reader: 'R005', device: 'phone', minutes: 3.5 },
  { reader: 'R006', device: 'phone', minutes: 3 },
  { reader: 'R007', device: 'phone', minutes: 4.5 },
  { reader: 'R008', device: 'desktop', minutes: 23.5 },
  { reader: 'R009', device: 'phone', minutes: 1 },
  { reader: 'R010', device: 'desktop', minutes: 1 },
  { reader: 'R011', device: 'phone', minutes: 6.5 },
  { reader: 'R012', device: 'desktop', minutes: 4.5 },
  // … 228 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <EcdfChart
        data={data}
        valueKey="minutes"
        groupKey="device"
        title="Reading time by device"
        unit="min"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),On=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpEcdfChart } from '@silverpoint/vue/ecdf-chart';

const data = [
  { reader: 'R001', device: 'desktop', minutes: 4 },
  { reader: 'R002', device: 'phone', minutes: 17 },
  { reader: 'R003', device: 'phone', minutes: 3 },
  { reader: 'R004', device: 'phone', minutes: 6.5 },
  { reader: 'R005', device: 'phone', minutes: 3.5 },
  { reader: 'R006', device: 'phone', minutes: 3 },
  { reader: 'R007', device: 'phone', minutes: 4.5 },
  { reader: 'R008', device: 'desktop', minutes: 23.5 },
  { reader: 'R009', device: 'phone', minutes: 1 },
  { reader: 'R010', device: 'desktop', minutes: 1 },
  { reader: 'R011', device: 'phone', minutes: 6.5 },
  { reader: 'R012', device: 'desktop', minutes: 4.5 },
  // … 228 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpEcdfChart
      :data="data"
      value-key="minutes"
      group-key="device"
      title="Reading time by device"
      unit="min"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),kn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpEcdfChart } from '@silverpoint/angular/ecdf-chart';

@Component({
  selector: 'app-root',
  imports: [SpEcdfChart],
  template: \`
    <div style="width: 480px">
      <sp-ecdf-chart
        [data]="data"
        valueKey="minutes"
        groupKey="device"
        title="Reading time by device"
        unit="min"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { reader: 'R001', device: 'desktop', minutes: 4 },
    { reader: 'R002', device: 'phone', minutes: 17 },
    { reader: 'R003', device: 'phone', minutes: 3 },
    { reader: 'R004', device: 'phone', minutes: 6.5 },
    { reader: 'R005', device: 'phone', minutes: 3.5 },
    { reader: 'R006', device: 'phone', minutes: 3 },
    { reader: 'R007', device: 'phone', minutes: 4.5 },
    { reader: 'R008', device: 'desktop', minutes: 23.5 },
    { reader: 'R009', device: 'phone', minutes: 1 },
    { reader: 'R010', device: 'desktop', minutes: 1 },
    { reader: 'R011', device: 'phone', minutes: 6.5 },
    { reader: 'R012', device: 'desktop', minutes: 4.5 },
    // … 228 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),An=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import ecdf_chart

DATA = [
    {"reader": "R001", "device": "desktop", "minutes": 4},
    {"reader": "R002", "device": "phone", "minutes": 17},
    {"reader": "R003", "device": "phone", "minutes": 3},
    {"reader": "R004", "device": "phone", "minutes": 6.5},
    {"reader": "R005", "device": "phone", "minutes": 3.5},
    {"reader": "R006", "device": "phone", "minutes": 3},
    {"reader": "R007", "device": "phone", "minutes": 4.5},
    {"reader": "R008", "device": "desktop", "minutes": 23.5},
    {"reader": "R009", "device": "phone", "minutes": 1},
    {"reader": "R010", "device": "desktop", "minutes": 1},
    {"reader": "R011", "device": "phone", "minutes": 6.5},
    {"reader": "R012", "device": "desktop", "minutes": 4.5},
    # … 228 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        ecdf_chart(
            data=DATA,
            value_key="minutes",
            group_key="device",
            title="Reading time by device",
            unit="min",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),jn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_box_plot_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_box_plot_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-box-plot-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "box-plot-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-box-plot-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Mn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { BoxPlotChart } from '@silverpoint/react/box-plot-chart';

const data = [
  { service: 'Search', ms: 220 },
  { service: 'Search', ms: 177 },
  { service: 'Search', ms: 158 },
  { service: 'Search', ms: 199 },
  { service: 'Search', ms: 171 },
  { service: 'Search', ms: 138 },
  { service: 'Search', ms: 186 },
  { service: 'Search', ms: 207 },
  { service: 'Search', ms: 181 },
  { service: 'Search', ms: 187 },
  { service: 'Search', ms: 176 },
  { service: 'Search', ms: 187 },
  // … 216 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <BoxPlotChart
        data={data}
        valueKey="ms"
        groupKey="service"
        title="Response time by service"
        unit="ms"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Nn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpBoxPlotChart } from '@silverpoint/vue/box-plot-chart';

const data = [
  { service: 'Search', ms: 220 },
  { service: 'Search', ms: 177 },
  { service: 'Search', ms: 158 },
  { service: 'Search', ms: 199 },
  { service: 'Search', ms: 171 },
  { service: 'Search', ms: 138 },
  { service: 'Search', ms: 186 },
  { service: 'Search', ms: 207 },
  { service: 'Search', ms: 181 },
  { service: 'Search', ms: 187 },
  { service: 'Search', ms: 176 },
  { service: 'Search', ms: 187 },
  // … 216 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpBoxPlotChart
      :data="data"
      value-key="ms"
      group-key="service"
      title="Response time by service"
      unit="ms"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Pn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpBoxPlotChart } from '@silverpoint/angular/box-plot-chart';

@Component({
  selector: 'app-root',
  imports: [SpBoxPlotChart],
  template: \`
    <div style="width: 480px">
      <sp-box-plot-chart
        [data]="data"
        valueKey="ms"
        groupKey="service"
        title="Response time by service"
        unit="ms"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { service: 'Search', ms: 220 },
    { service: 'Search', ms: 177 },
    { service: 'Search', ms: 158 },
    { service: 'Search', ms: 199 },
    { service: 'Search', ms: 171 },
    { service: 'Search', ms: 138 },
    { service: 'Search', ms: 186 },
    { service: 'Search', ms: 207 },
    { service: 'Search', ms: 181 },
    { service: 'Search', ms: 187 },
    { service: 'Search', ms: 176 },
    { service: 'Search', ms: 187 },
    // … 216 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Fn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import box_plot_chart

DATA = [
    {"service": "Search", "ms": 220},
    {"service": "Search", "ms": 177},
    {"service": "Search", "ms": 158},
    {"service": "Search", "ms": 199},
    {"service": "Search", "ms": 171},
    {"service": "Search", "ms": 138},
    {"service": "Search", "ms": 186},
    {"service": "Search", "ms": 207},
    {"service": "Search", "ms": 181},
    {"service": "Search", "ms": 187},
    {"service": "Search", "ms": 176},
    {"service": "Search", "ms": 187},
    # … 216 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        box_plot_chart(
            data=DATA,
            value_key="ms",
            group_key="service",
            title="Response time by service",
            unit="ms",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),In=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_violin_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_violin_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-violin-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "violin-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-violin-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Ln=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { ViolinChart } from '@silverpoint/react/violin-chart';

const data = [
  { service: 'Search', ms: 220 },
  { service: 'Search', ms: 177 },
  { service: 'Search', ms: 158 },
  { service: 'Search', ms: 199 },
  { service: 'Search', ms: 171 },
  { service: 'Search', ms: 138 },
  { service: 'Search', ms: 186 },
  { service: 'Search', ms: 207 },
  { service: 'Search', ms: 181 },
  { service: 'Search', ms: 187 },
  { service: 'Search', ms: 176 },
  { service: 'Search', ms: 187 },
  // … 216 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <ViolinChart
        data={data}
        valueKey="ms"
        groupKey="service"
        title="Response time by service"
        unit="ms"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Rn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpViolinChart } from '@silverpoint/vue/violin-chart';

const data = [
  { service: 'Search', ms: 220 },
  { service: 'Search', ms: 177 },
  { service: 'Search', ms: 158 },
  { service: 'Search', ms: 199 },
  { service: 'Search', ms: 171 },
  { service: 'Search', ms: 138 },
  { service: 'Search', ms: 186 },
  { service: 'Search', ms: 207 },
  { service: 'Search', ms: 181 },
  { service: 'Search', ms: 187 },
  { service: 'Search', ms: 176 },
  { service: 'Search', ms: 187 },
  // … 216 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpViolinChart
      :data="data"
      value-key="ms"
      group-key="service"
      title="Response time by service"
      unit="ms"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),zn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpViolinChart } from '@silverpoint/angular/violin-chart';

@Component({
  selector: 'app-root',
  imports: [SpViolinChart],
  template: \`
    <div style="width: 480px">
      <sp-violin-chart
        [data]="data"
        valueKey="ms"
        groupKey="service"
        title="Response time by service"
        unit="ms"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { service: 'Search', ms: 220 },
    { service: 'Search', ms: 177 },
    { service: 'Search', ms: 158 },
    { service: 'Search', ms: 199 },
    { service: 'Search', ms: 171 },
    { service: 'Search', ms: 138 },
    { service: 'Search', ms: 186 },
    { service: 'Search', ms: 207 },
    { service: 'Search', ms: 181 },
    { service: 'Search', ms: 187 },
    { service: 'Search', ms: 176 },
    { service: 'Search', ms: 187 },
    // … 216 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Bn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import violin_chart

DATA = [
    {"service": "Search", "ms": 220},
    {"service": "Search", "ms": 177},
    {"service": "Search", "ms": 158},
    {"service": "Search", "ms": 199},
    {"service": "Search", "ms": 171},
    {"service": "Search", "ms": 138},
    {"service": "Search", "ms": 186},
    {"service": "Search", "ms": 207},
    {"service": "Search", "ms": 181},
    {"service": "Search", "ms": 187},
    {"service": "Search", "ms": 176},
    {"service": "Search", "ms": 187},
    # … 216 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        violin_chart(
            data=DATA,
            value_key="ms",
            group_key="service",
            title="Response time by service",
            unit="ms",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Vn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_ridgeline_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_ridgeline_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-ridgeline-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "ridgeline-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-ridgeline-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Hn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { RidgelineChart } from '@silverpoint/react/ridgeline-chart';

const data = [
  { service: 'Search', ms: 220 },
  { service: 'Search', ms: 177 },
  { service: 'Search', ms: 158 },
  { service: 'Search', ms: 199 },
  { service: 'Search', ms: 171 },
  { service: 'Search', ms: 138 },
  { service: 'Search', ms: 186 },
  { service: 'Search', ms: 207 },
  { service: 'Search', ms: 181 },
  { service: 'Search', ms: 187 },
  { service: 'Search', ms: 176 },
  { service: 'Search', ms: 187 },
  // … 216 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <RidgelineChart
        data={data}
        valueKey="ms"
        groupKey="service"
        title="Response time by service"
        unit="ms"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Un=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpRidgelineChart } from '@silverpoint/vue/ridgeline-chart';

const data = [
  { service: 'Search', ms: 220 },
  { service: 'Search', ms: 177 },
  { service: 'Search', ms: 158 },
  { service: 'Search', ms: 199 },
  { service: 'Search', ms: 171 },
  { service: 'Search', ms: 138 },
  { service: 'Search', ms: 186 },
  { service: 'Search', ms: 207 },
  { service: 'Search', ms: 181 },
  { service: 'Search', ms: 187 },
  { service: 'Search', ms: 176 },
  { service: 'Search', ms: 187 },
  // … 216 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpRidgelineChart
      :data="data"
      value-key="ms"
      group-key="service"
      title="Response time by service"
      unit="ms"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Wn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpRidgelineChart } from '@silverpoint/angular/ridgeline-chart';

@Component({
  selector: 'app-root',
  imports: [SpRidgelineChart],
  template: \`
    <div style="width: 480px">
      <sp-ridgeline-chart
        [data]="data"
        valueKey="ms"
        groupKey="service"
        title="Response time by service"
        unit="ms"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { service: 'Search', ms: 220 },
    { service: 'Search', ms: 177 },
    { service: 'Search', ms: 158 },
    { service: 'Search', ms: 199 },
    { service: 'Search', ms: 171 },
    { service: 'Search', ms: 138 },
    { service: 'Search', ms: 186 },
    { service: 'Search', ms: 207 },
    { service: 'Search', ms: 181 },
    { service: 'Search', ms: 187 },
    { service: 'Search', ms: 176 },
    { service: 'Search', ms: 187 },
    // … 216 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Gn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import ridgeline_chart

DATA = [
    {"service": "Search", "ms": 220},
    {"service": "Search", "ms": 177},
    {"service": "Search", "ms": 158},
    {"service": "Search", "ms": 199},
    {"service": "Search", "ms": 171},
    {"service": "Search", "ms": 138},
    {"service": "Search", "ms": 186},
    {"service": "Search", "ms": 207},
    {"service": "Search", "ms": 181},
    {"service": "Search", "ms": 187},
    {"service": "Search", "ms": 176},
    {"service": "Search", "ms": 187},
    # … 216 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        ridgeline_chart(
            data=DATA,
            value_key="ms",
            group_key="service",
            title="Response time by service",
            unit="ms",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Kn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_beeswarm_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_beeswarm_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-beeswarm-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "beeswarm-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-beeswarm-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),qn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { BeeswarmChart } from '@silverpoint/react/beeswarm-chart';

const data = [
  { reader: 'R001', device: 'desktop', minutes: 4 },
  { reader: 'R002', device: 'phone', minutes: 17 },
  { reader: 'R003', device: 'phone', minutes: 3 },
  { reader: 'R004', device: 'phone', minutes: 6.5 },
  { reader: 'R005', device: 'phone', minutes: 3.5 },
  { reader: 'R006', device: 'phone', minutes: 3 },
  { reader: 'R007', device: 'phone', minutes: 4.5 },
  { reader: 'R008', device: 'desktop', minutes: 23.5 },
  { reader: 'R009', device: 'phone', minutes: 1 },
  { reader: 'R010', device: 'desktop', minutes: 1 },
  { reader: 'R011', device: 'phone', minutes: 6.5 },
  { reader: 'R012', device: 'desktop', minutes: 4.5 },
  // … 228 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <BeeswarmChart
        data={data}
        valueKey="minutes"
        labelKey="reader"
        title="Reading time per reader"
        unit="min"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Jn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpBeeswarmChart } from '@silverpoint/vue/beeswarm-chart';

const data = [
  { reader: 'R001', device: 'desktop', minutes: 4 },
  { reader: 'R002', device: 'phone', minutes: 17 },
  { reader: 'R003', device: 'phone', minutes: 3 },
  { reader: 'R004', device: 'phone', minutes: 6.5 },
  { reader: 'R005', device: 'phone', minutes: 3.5 },
  { reader: 'R006', device: 'phone', minutes: 3 },
  { reader: 'R007', device: 'phone', minutes: 4.5 },
  { reader: 'R008', device: 'desktop', minutes: 23.5 },
  { reader: 'R009', device: 'phone', minutes: 1 },
  { reader: 'R010', device: 'desktop', minutes: 1 },
  { reader: 'R011', device: 'phone', minutes: 6.5 },
  { reader: 'R012', device: 'desktop', minutes: 4.5 },
  // … 228 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpBeeswarmChart
      :data="data"
      value-key="minutes"
      label-key="reader"
      title="Reading time per reader"
      unit="min"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Yn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpBeeswarmChart } from '@silverpoint/angular/beeswarm-chart';

@Component({
  selector: 'app-root',
  imports: [SpBeeswarmChart],
  template: \`
    <div style="width: 480px">
      <sp-beeswarm-chart
        [data]="data"
        valueKey="minutes"
        labelKey="reader"
        title="Reading time per reader"
        unit="min"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { reader: 'R001', device: 'desktop', minutes: 4 },
    { reader: 'R002', device: 'phone', minutes: 17 },
    { reader: 'R003', device: 'phone', minutes: 3 },
    { reader: 'R004', device: 'phone', minutes: 6.5 },
    { reader: 'R005', device: 'phone', minutes: 3.5 },
    { reader: 'R006', device: 'phone', minutes: 3 },
    { reader: 'R007', device: 'phone', minutes: 4.5 },
    { reader: 'R008', device: 'desktop', minutes: 23.5 },
    { reader: 'R009', device: 'phone', minutes: 1 },
    { reader: 'R010', device: 'desktop', minutes: 1 },
    { reader: 'R011', device: 'phone', minutes: 6.5 },
    { reader: 'R012', device: 'desktop', minutes: 4.5 },
    // … 228 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Xn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import beeswarm_chart

DATA = [
    {"reader": "R001", "device": "desktop", "minutes": 4},
    {"reader": "R002", "device": "phone", "minutes": 17},
    {"reader": "R003", "device": "phone", "minutes": 3},
    {"reader": "R004", "device": "phone", "minutes": 6.5},
    {"reader": "R005", "device": "phone", "minutes": 3.5},
    {"reader": "R006", "device": "phone", "minutes": 3},
    {"reader": "R007", "device": "phone", "minutes": 4.5},
    {"reader": "R008", "device": "desktop", "minutes": 23.5},
    {"reader": "R009", "device": "phone", "minutes": 1},
    {"reader": "R010", "device": "desktop", "minutes": 1},
    {"reader": "R011", "device": "phone", "minutes": 6.5},
    {"reader": "R012", "device": "desktop", "minutes": 4.5},
    # … 228 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        beeswarm_chart(
            data=DATA,
            value_key="minutes",
            label_key="reader",
            title="Reading time per reader",
            unit="min",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Zn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_lollipop_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_lollipop_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-lollipop-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "lollipop-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-lollipop-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Qn=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { LollipopChart } from '@silverpoint/react/lollipop-chart';

const data = [
  { branch: 'Northgate', loans: 2969 },
  { branch: 'Riverside Commons', loans: 2695 },
  { branch: 'Old Mill', loans: 6096 },
  { branch: 'Harbour View Annex', loans: 7785 },
  { branch: 'Elm Street', loans: 3499 },
  { branch: 'Quarry Hill', loans: 7698 },
  { branch: 'Saint Brigid Reading Rooms', loans: 7279 },
  { branch: 'Westfield', loans: 3294 },
  { branch: 'Lantern Square', loans: 7695 },
  { branch: 'Copper Beech', loans: 5301 },
  { branch: 'Marsh Lane', loans: 3486 },
  { branch: 'Upper Fenwick Community Library', loans: 3917 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <LollipopChart
        data={data}
        xKey="branch"
        valueKey="loans"
        title="Loans by branch"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),$n=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpLollipopChart } from '@silverpoint/vue/lollipop-chart';

const data = [
  { branch: 'Northgate', loans: 2969 },
  { branch: 'Riverside Commons', loans: 2695 },
  { branch: 'Old Mill', loans: 6096 },
  { branch: 'Harbour View Annex', loans: 7785 },
  { branch: 'Elm Street', loans: 3499 },
  { branch: 'Quarry Hill', loans: 7698 },
  { branch: 'Saint Brigid Reading Rooms', loans: 7279 },
  { branch: 'Westfield', loans: 3294 },
  { branch: 'Lantern Square', loans: 7695 },
  { branch: 'Copper Beech', loans: 5301 },
  { branch: 'Marsh Lane', loans: 3486 },
  { branch: 'Upper Fenwick Community Library', loans: 3917 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpLollipopChart
      :data="data"
      x-key="branch"
      value-key="loans"
      title="Loans by branch"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),er=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpLollipopChart } from '@silverpoint/angular/lollipop-chart';

@Component({
  selector: 'app-root',
  imports: [SpLollipopChart],
  template: \`
    <div style="width: 480px">
      <sp-lollipop-chart
        [data]="data"
        xKey="branch"
        valueKey="loans"
        title="Loans by branch"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { branch: 'Northgate', loans: 2969 },
    { branch: 'Riverside Commons', loans: 2695 },
    { branch: 'Old Mill', loans: 6096 },
    { branch: 'Harbour View Annex', loans: 7785 },
    { branch: 'Elm Street', loans: 3499 },
    { branch: 'Quarry Hill', loans: 7698 },
    { branch: 'Saint Brigid Reading Rooms', loans: 7279 },
    { branch: 'Westfield', loans: 3294 },
    { branch: 'Lantern Square', loans: 7695 },
    { branch: 'Copper Beech', loans: 5301 },
    { branch: 'Marsh Lane', loans: 3486 },
    { branch: 'Upper Fenwick Community Library', loans: 3917 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),tr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import lollipop_chart

DATA = [
    {"branch": "Northgate", "loans": 2969},
    {"branch": "Riverside Commons", "loans": 2695},
    {"branch": "Old Mill", "loans": 6096},
    {"branch": "Harbour View Annex", "loans": 7785},
    {"branch": "Elm Street", "loans": 3499},
    {"branch": "Quarry Hill", "loans": 7698},
    {"branch": "Saint Brigid Reading Rooms", "loans": 7279},
    {"branch": "Westfield", "loans": 3294},
    {"branch": "Lantern Square", "loans": 7695},
    {"branch": "Copper Beech", "loans": 5301},
    {"branch": "Marsh Lane", "loans": 3486},
    {"branch": "Upper Fenwick Community Library", "loans": 3917},
]


def index() -> rx.Component:
    return rx.box(
        lollipop_chart(
            data=DATA,
            x_key="branch",
            value_key="loans",
            title="Loans by branch",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),nr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_dumbbell_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_dumbbell_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-dumbbell-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "dumbbell-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-dumbbell-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),rr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { DumbbellChart } from '@silverpoint/react/dumbbell-chart';

const data = [
  { clinic: 'Ashford', y2024: 59, y2025: 66 },
  { clinic: 'Brook Lane', y2024: 24, y2025: 30 },
  { clinic: 'Castlegate', y2024: 33, y2025: 47 },
  { clinic: 'Dunmore', y2024: 23, y2025: 16 },
  { clinic: 'Eastwick', y2024: 52, y2025: 60 },
  { clinic: 'Fairholm', y2024: 28, y2025: 43 },
  { clinic: 'Glenbrook', y2024: 32, y2025: 40 },
  { clinic: 'Hollins', y2024: 33, y2025: 25 },
  { clinic: 'Ivybridge', y2024: 25, y2025: 31 },
  { clinic: 'Juniper Row', y2024: 25, y2025: 32 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <DumbbellChart
        data={data}
        labelKey="clinic"
        startKey="y2024"
        endKey="y2025"
        names={['2024', '2025']}
        title="Patients seen, 2024 and 2025"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ir=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpDumbbellChart } from '@silverpoint/vue/dumbbell-chart';

const data = [
  { clinic: 'Ashford', y2024: 59, y2025: 66 },
  { clinic: 'Brook Lane', y2024: 24, y2025: 30 },
  { clinic: 'Castlegate', y2024: 33, y2025: 47 },
  { clinic: 'Dunmore', y2024: 23, y2025: 16 },
  { clinic: 'Eastwick', y2024: 52, y2025: 60 },
  { clinic: 'Fairholm', y2024: 28, y2025: 43 },
  { clinic: 'Glenbrook', y2024: 32, y2025: 40 },
  { clinic: 'Hollins', y2024: 33, y2025: 25 },
  { clinic: 'Ivybridge', y2024: 25, y2025: 31 },
  { clinic: 'Juniper Row', y2024: 25, y2025: 32 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpDumbbellChart
      :data="data"
      label-key="clinic"
      start-key="y2024"
      end-key="y2025"
      :names="['2024', '2025']"
      title="Patients seen, 2024 and 2025"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ar=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpDumbbellChart } from '@silverpoint/angular/dumbbell-chart';

@Component({
  selector: 'app-root',
  imports: [SpDumbbellChart],
  template: \`
    <div style="width: 480px">
      <sp-dumbbell-chart
        [data]="data"
        labelKey="clinic"
        startKey="y2024"
        endKey="y2025"
        [names]="['2024', '2025']"
        title="Patients seen, 2024 and 2025"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { clinic: 'Ashford', y2024: 59, y2025: 66 },
    { clinic: 'Brook Lane', y2024: 24, y2025: 30 },
    { clinic: 'Castlegate', y2024: 33, y2025: 47 },
    { clinic: 'Dunmore', y2024: 23, y2025: 16 },
    { clinic: 'Eastwick', y2024: 52, y2025: 60 },
    { clinic: 'Fairholm', y2024: 28, y2025: 43 },
    { clinic: 'Glenbrook', y2024: 32, y2025: 40 },
    { clinic: 'Hollins', y2024: 33, y2025: 25 },
    { clinic: 'Ivybridge', y2024: 25, y2025: 31 },
    { clinic: 'Juniper Row', y2024: 25, y2025: 32 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),or=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import dumbbell_chart

DATA = [
    {"clinic": "Ashford", "y2024": 59, "y2025": 66},
    {"clinic": "Brook Lane", "y2024": 24, "y2025": 30},
    {"clinic": "Castlegate", "y2024": 33, "y2025": 47},
    {"clinic": "Dunmore", "y2024": 23, "y2025": 16},
    {"clinic": "Eastwick", "y2024": 52, "y2025": 60},
    {"clinic": "Fairholm", "y2024": 28, "y2025": 43},
    {"clinic": "Glenbrook", "y2024": 32, "y2025": 40},
    {"clinic": "Hollins", "y2024": 33, "y2025": 25},
    {"clinic": "Ivybridge", "y2024": 25, "y2025": 31},
    {"clinic": "Juniper Row", "y2024": 25, "y2025": 32},
]


def index() -> rx.Component:
    return rx.box(
        dumbbell_chart(
            data=DATA,
            label_key="clinic",
            start_key="y2024",
            end_key="y2025",
            names=["2024", "2025"],
            title="Patients seen, 2024 and 2025",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),sr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_slope_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_slope_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-slope-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "slope-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-slope-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),cr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SlopeChart } from '@silverpoint/react/slope-chart';

const data = [
  { clinic: 'Ashford', y2024: 59, y2025: 66 },
  { clinic: 'Brook Lane', y2024: 24, y2025: 30 },
  { clinic: 'Castlegate', y2024: 33, y2025: 47 },
  { clinic: 'Dunmore', y2024: 23, y2025: 16 },
  { clinic: 'Eastwick', y2024: 52, y2025: 60 },
  { clinic: 'Fairholm', y2024: 28, y2025: 43 },
  { clinic: 'Glenbrook', y2024: 32, y2025: 40 },
  { clinic: 'Hollins', y2024: 33, y2025: 25 },
  { clinic: 'Ivybridge', y2024: 25, y2025: 31 },
  { clinic: 'Juniper Row', y2024: 25, y2025: 32 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <SlopeChart
        data={data}
        labelKey="clinic"
        startKey="y2024"
        endKey="y2025"
        names={['2024', '2025']}
        title="Patients seen, 2024 to 2025"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),lr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpSlopeChart } from '@silverpoint/vue/slope-chart';

const data = [
  { clinic: 'Ashford', y2024: 59, y2025: 66 },
  { clinic: 'Brook Lane', y2024: 24, y2025: 30 },
  { clinic: 'Castlegate', y2024: 33, y2025: 47 },
  { clinic: 'Dunmore', y2024: 23, y2025: 16 },
  { clinic: 'Eastwick', y2024: 52, y2025: 60 },
  { clinic: 'Fairholm', y2024: 28, y2025: 43 },
  { clinic: 'Glenbrook', y2024: 32, y2025: 40 },
  { clinic: 'Hollins', y2024: 33, y2025: 25 },
  { clinic: 'Ivybridge', y2024: 25, y2025: 31 },
  { clinic: 'Juniper Row', y2024: 25, y2025: 32 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpSlopeChart
      :data="data"
      label-key="clinic"
      start-key="y2024"
      end-key="y2025"
      :names="['2024', '2025']"
      title="Patients seen, 2024 to 2025"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ur=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpSlopeChart } from '@silverpoint/angular/slope-chart';

@Component({
  selector: 'app-root',
  imports: [SpSlopeChart],
  template: \`
    <div style="width: 480px">
      <sp-slope-chart
        [data]="data"
        labelKey="clinic"
        startKey="y2024"
        endKey="y2025"
        [names]="['2024', '2025']"
        title="Patients seen, 2024 to 2025"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { clinic: 'Ashford', y2024: 59, y2025: 66 },
    { clinic: 'Brook Lane', y2024: 24, y2025: 30 },
    { clinic: 'Castlegate', y2024: 33, y2025: 47 },
    { clinic: 'Dunmore', y2024: 23, y2025: 16 },
    { clinic: 'Eastwick', y2024: 52, y2025: 60 },
    { clinic: 'Fairholm', y2024: 28, y2025: 43 },
    { clinic: 'Glenbrook', y2024: 32, y2025: 40 },
    { clinic: 'Hollins', y2024: 33, y2025: 25 },
    { clinic: 'Ivybridge', y2024: 25, y2025: 31 },
    { clinic: 'Juniper Row', y2024: 25, y2025: 32 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),dr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import slope_chart

DATA = [
    {"clinic": "Ashford", "y2024": 59, "y2025": 66},
    {"clinic": "Brook Lane", "y2024": 24, "y2025": 30},
    {"clinic": "Castlegate", "y2024": 33, "y2025": 47},
    {"clinic": "Dunmore", "y2024": 23, "y2025": 16},
    {"clinic": "Eastwick", "y2024": 52, "y2025": 60},
    {"clinic": "Fairholm", "y2024": 28, "y2025": 43},
    {"clinic": "Glenbrook", "y2024": 32, "y2025": 40},
    {"clinic": "Hollins", "y2024": 33, "y2025": 25},
    {"clinic": "Ivybridge", "y2024": 25, "y2025": 31},
    {"clinic": "Juniper Row", "y2024": 25, "y2025": 32},
]


def index() -> rx.Component:
    return rx.box(
        slope_chart(
            data=DATA,
            label_key="clinic",
            start_key="y2024",
            end_key="y2025",
            names=["2024", "2025"],
            title="Patients seen, 2024 to 2025",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),fr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_bump_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_bump_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-bump-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "bump-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-bump-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),pr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { BumpChart } from '@silverpoint/react/bump-chart';

const data = [
  { season: 2018, team: 'Kestrel', points: 57 },
  { season: 2018, team: 'Otter', points: 53 },
  { season: 2018, team: 'Lynx', points: 52 },
  { season: 2018, team: 'Heron', points: 54 },
  { season: 2018, team: 'Badger', points: 73 },
  { season: 2018, team: 'Marten', points: 62 },
  { season: 2019, team: 'Kestrel', points: 65 },
  { season: 2019, team: 'Otter', points: 49 },
  { season: 2019, team: 'Lynx', points: 44 },
  { season: 2019, team: 'Heron', points: 58 },
  { season: 2019, team: 'Badger', points: 81 },
  { season: 2019, team: 'Marten', points: 66 },
  // … 36 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <BumpChart
        data={data}
        xKey="season"
        seriesKey="team"
        valueKey="points"
        title="League rank by season"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),mr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpBumpChart } from '@silverpoint/vue/bump-chart';

const data = [
  { season: 2018, team: 'Kestrel', points: 57 },
  { season: 2018, team: 'Otter', points: 53 },
  { season: 2018, team: 'Lynx', points: 52 },
  { season: 2018, team: 'Heron', points: 54 },
  { season: 2018, team: 'Badger', points: 73 },
  { season: 2018, team: 'Marten', points: 62 },
  { season: 2019, team: 'Kestrel', points: 65 },
  { season: 2019, team: 'Otter', points: 49 },
  { season: 2019, team: 'Lynx', points: 44 },
  { season: 2019, team: 'Heron', points: 58 },
  { season: 2019, team: 'Badger', points: 81 },
  { season: 2019, team: 'Marten', points: 66 },
  // … 36 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpBumpChart
      :data="data"
      x-key="season"
      series-key="team"
      value-key="points"
      title="League rank by season"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),hr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpBumpChart } from '@silverpoint/angular/bump-chart';

@Component({
  selector: 'app-root',
  imports: [SpBumpChart],
  template: \`
    <div style="width: 480px">
      <sp-bump-chart
        [data]="data"
        xKey="season"
        seriesKey="team"
        valueKey="points"
        title="League rank by season"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { season: 2018, team: 'Kestrel', points: 57 },
    { season: 2018, team: 'Otter', points: 53 },
    { season: 2018, team: 'Lynx', points: 52 },
    { season: 2018, team: 'Heron', points: 54 },
    { season: 2018, team: 'Badger', points: 73 },
    { season: 2018, team: 'Marten', points: 62 },
    { season: 2019, team: 'Kestrel', points: 65 },
    { season: 2019, team: 'Otter', points: 49 },
    { season: 2019, team: 'Lynx', points: 44 },
    { season: 2019, team: 'Heron', points: 58 },
    { season: 2019, team: 'Badger', points: 81 },
    { season: 2019, team: 'Marten', points: 66 },
    // … 36 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),gr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import bump_chart

DATA = [
    {"season": 2018, "team": "Kestrel", "points": 57},
    {"season": 2018, "team": "Otter", "points": 53},
    {"season": 2018, "team": "Lynx", "points": 52},
    {"season": 2018, "team": "Heron", "points": 54},
    {"season": 2018, "team": "Badger", "points": 73},
    {"season": 2018, "team": "Marten", "points": 62},
    {"season": 2019, "team": "Kestrel", "points": 65},
    {"season": 2019, "team": "Otter", "points": 49},
    {"season": 2019, "team": "Lynx", "points": 44},
    {"season": 2019, "team": "Heron", "points": 58},
    {"season": 2019, "team": "Badger", "points": 81},
    {"season": 2019, "team": "Marten", "points": 66},
    # … 36 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        bump_chart(
            data=DATA,
            x_key="season",
            series_key="team",
            value_key="points",
            title="League rank by season",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),_r=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_error_bar_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_error_bar_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-error-bar-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "error-bar-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-error-bar-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),vr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { ErrorBarChart } from '@silverpoint/react/error-bar-chart';

const data = [
  { arm: 'Arm A', effect: 1.61, low: 1.01, high: 2.07 },
  { arm: 'Arm B', effect: 0.2, low: -0.16, high: 1.04 },
  { arm: 'Arm C', effect: 1.25, low: 0.35, high: 2.79 },
  { arm: 'Arm D', effect: 1.64, low: 0.74, high: 2.26 },
  { arm: 'Arm E', effect: 0.45, low: -0.52, high: 2.54 },
  { arm: 'Arm F', effect: 0.34, low: -0.57, high: 2.41 },
  { arm: 'Arm G', effect: 1.03, low: 0.14, high: 1.85 },
  { arm: 'Arm H', effect: 1.04, low: -0.44, high: 2.67 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <ErrorBarChart
        data={data}
        labelKey="arm"
        estimateKey="effect"
        lowKey="low"
        highKey="high"
        title="Effect by trial arm"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),yr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpErrorBarChart } from '@silverpoint/vue/error-bar-chart';

const data = [
  { arm: 'Arm A', effect: 1.61, low: 1.01, high: 2.07 },
  { arm: 'Arm B', effect: 0.2, low: -0.16, high: 1.04 },
  { arm: 'Arm C', effect: 1.25, low: 0.35, high: 2.79 },
  { arm: 'Arm D', effect: 1.64, low: 0.74, high: 2.26 },
  { arm: 'Arm E', effect: 0.45, low: -0.52, high: 2.54 },
  { arm: 'Arm F', effect: 0.34, low: -0.57, high: 2.41 },
  { arm: 'Arm G', effect: 1.03, low: 0.14, high: 1.85 },
  { arm: 'Arm H', effect: 1.04, low: -0.44, high: 2.67 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpErrorBarChart
      :data="data"
      label-key="arm"
      estimate-key="effect"
      low-key="low"
      high-key="high"
      title="Effect by trial arm"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),br=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpErrorBarChart } from '@silverpoint/angular/error-bar-chart';

@Component({
  selector: 'app-root',
  imports: [SpErrorBarChart],
  template: \`
    <div style="width: 480px">
      <sp-error-bar-chart
        [data]="data"
        labelKey="arm"
        estimateKey="effect"
        lowKey="low"
        highKey="high"
        title="Effect by trial arm"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { arm: 'Arm A', effect: 1.61, low: 1.01, high: 2.07 },
    { arm: 'Arm B', effect: 0.2, low: -0.16, high: 1.04 },
    { arm: 'Arm C', effect: 1.25, low: 0.35, high: 2.79 },
    { arm: 'Arm D', effect: 1.64, low: 0.74, high: 2.26 },
    { arm: 'Arm E', effect: 0.45, low: -0.52, high: 2.54 },
    { arm: 'Arm F', effect: 0.34, low: -0.57, high: 2.41 },
    { arm: 'Arm G', effect: 1.03, low: 0.14, high: 1.85 },
    { arm: 'Arm H', effect: 1.04, low: -0.44, high: 2.67 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),xr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import error_bar_chart

DATA = [
    {"arm": "Arm A", "effect": 1.61, "low": 1.01, "high": 2.07},
    {"arm": "Arm B", "effect": 0.2, "low": -0.16, "high": 1.04},
    {"arm": "Arm C", "effect": 1.25, "low": 0.35, "high": 2.79},
    {"arm": "Arm D", "effect": 1.64, "low": 0.74, "high": 2.26},
    {"arm": "Arm E", "effect": 0.45, "low": -0.52, "high": 2.54},
    {"arm": "Arm F", "effect": 0.34, "low": -0.57, "high": 2.41},
    {"arm": "Arm G", "effect": 1.03, "low": 0.14, "high": 1.85},
    {"arm": "Arm H", "effect": 1.04, "low": -0.44, "high": 2.67},
]


def index() -> rx.Component:
    return rx.box(
        error_bar_chart(
            data=DATA,
            label_key="arm",
            estimate_key="effect",
            low_key="low",
            high_key="high",
            title="Effect by trial arm",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Sr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_interval_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_interval_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-interval-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "interval-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-interval-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Cr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { IntervalChart } from '@silverpoint/react/interval-chart';

const data = [
  { crew: 'North crew', task: 'Signage', from: '2026-03-15', to: '2026-03-21' },
  { crew: 'North crew', task: 'Grading', from: '2026-02-17', to: '2026-03-07' },
  { crew: 'North crew', task: 'Signage', from: '2026-03-09', to: '2026-03-31' },
  { crew: 'North crew', task: 'Drainage', from: '2026-02-19', to: '2026-02-24' },
  { crew: 'North crew', task: 'Grading', from: '2026-02-21', to: '2026-03-16' },
  { crew: 'South crew', task: 'Fencing', from: '2026-02-20', to: '2026-03-05' },
  { crew: 'South crew', task: 'Paving', from: '2026-01-02', to: '2026-01-16' },
  { crew: 'South crew', task: 'Paving', from: '2026-03-03', to: '2026-03-09' },
  { crew: 'South crew', task: 'Formwork', from: '2026-03-06', to: '2026-03-10' },
  { crew: 'Bridge team', task: 'Lighting', from: '2026-01-26', to: '2026-02-08' },
  { crew: 'Bridge team', task: 'Drainage', from: '2026-02-26', to: '2026-03-16' },
  { crew: 'Bridge team', task: 'Fencing', from: '2026-02-04', to: '2026-02-19' },
  // … 4 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <IntervalChart
        data={data}
        laneKey="crew"
        startKey="from"
        endKey="to"
        labelKey="task"
        axis="date"
        title="Crew schedule"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),wr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpIntervalChart } from '@silverpoint/vue/interval-chart';

const data = [
  { crew: 'North crew', task: 'Signage', from: '2026-03-15', to: '2026-03-21' },
  { crew: 'North crew', task: 'Grading', from: '2026-02-17', to: '2026-03-07' },
  { crew: 'North crew', task: 'Signage', from: '2026-03-09', to: '2026-03-31' },
  { crew: 'North crew', task: 'Drainage', from: '2026-02-19', to: '2026-02-24' },
  { crew: 'North crew', task: 'Grading', from: '2026-02-21', to: '2026-03-16' },
  { crew: 'South crew', task: 'Fencing', from: '2026-02-20', to: '2026-03-05' },
  { crew: 'South crew', task: 'Paving', from: '2026-01-02', to: '2026-01-16' },
  { crew: 'South crew', task: 'Paving', from: '2026-03-03', to: '2026-03-09' },
  { crew: 'South crew', task: 'Formwork', from: '2026-03-06', to: '2026-03-10' },
  { crew: 'Bridge team', task: 'Lighting', from: '2026-01-26', to: '2026-02-08' },
  { crew: 'Bridge team', task: 'Drainage', from: '2026-02-26', to: '2026-03-16' },
  { crew: 'Bridge team', task: 'Fencing', from: '2026-02-04', to: '2026-02-19' },
  // … 4 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpIntervalChart
      :data="data"
      lane-key="crew"
      start-key="from"
      end-key="to"
      label-key="task"
      axis="date"
      title="Crew schedule"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Tr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpIntervalChart } from '@silverpoint/angular/interval-chart';

@Component({
  selector: 'app-root',
  imports: [SpIntervalChart],
  template: \`
    <div style="width: 480px">
      <sp-interval-chart
        [data]="data"
        laneKey="crew"
        startKey="from"
        endKey="to"
        labelKey="task"
        axis="date"
        title="Crew schedule"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { crew: 'North crew', task: 'Signage', from: '2026-03-15', to: '2026-03-21' },
    { crew: 'North crew', task: 'Grading', from: '2026-02-17', to: '2026-03-07' },
    { crew: 'North crew', task: 'Signage', from: '2026-03-09', to: '2026-03-31' },
    { crew: 'North crew', task: 'Drainage', from: '2026-02-19', to: '2026-02-24' },
    { crew: 'North crew', task: 'Grading', from: '2026-02-21', to: '2026-03-16' },
    { crew: 'South crew', task: 'Fencing', from: '2026-02-20', to: '2026-03-05' },
    { crew: 'South crew', task: 'Paving', from: '2026-01-02', to: '2026-01-16' },
    { crew: 'South crew', task: 'Paving', from: '2026-03-03', to: '2026-03-09' },
    { crew: 'South crew', task: 'Formwork', from: '2026-03-06', to: '2026-03-10' },
    { crew: 'Bridge team', task: 'Lighting', from: '2026-01-26', to: '2026-02-08' },
    { crew: 'Bridge team', task: 'Drainage', from: '2026-02-26', to: '2026-03-16' },
    { crew: 'Bridge team', task: 'Fencing', from: '2026-02-04', to: '2026-02-19' },
    // … 4 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Er=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import interval_chart

DATA = [
    {"crew": "North crew", "task": "Signage", "from": "2026-03-15", "to": "2026-03-21"},
    {"crew": "North crew", "task": "Grading", "from": "2026-02-17", "to": "2026-03-07"},
    {"crew": "North crew", "task": "Signage", "from": "2026-03-09", "to": "2026-03-31"},
    {"crew": "North crew", "task": "Drainage", "from": "2026-02-19", "to": "2026-02-24"},
    {"crew": "North crew", "task": "Grading", "from": "2026-02-21", "to": "2026-03-16"},
    {"crew": "South crew", "task": "Fencing", "from": "2026-02-20", "to": "2026-03-05"},
    {"crew": "South crew", "task": "Paving", "from": "2026-01-02", "to": "2026-01-16"},
    {"crew": "South crew", "task": "Paving", "from": "2026-03-03", "to": "2026-03-09"},
    {"crew": "South crew", "task": "Formwork", "from": "2026-03-06", "to": "2026-03-10"},
    {"crew": "Bridge team", "task": "Lighting", "from": "2026-01-26", "to": "2026-02-08"},
    {"crew": "Bridge team", "task": "Drainage", "from": "2026-02-26", "to": "2026-03-16"},
    {"crew": "Bridge team", "task": "Fencing", "from": "2026-02-04", "to": "2026-02-19"},
    # … 4 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        interval_chart(
            data=DATA,
            lane_key="crew",
            start_key="from",
            end_key="to",
            label_key="task",
            axis="date",
            title="Crew schedule",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Dr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_diverging_bar_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_diverging_bar_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-diverging-bar-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "diverging-bar-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-diverging-bar-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Or=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { DivergingBarChart } from '@silverpoint/react/diverging-bar-chart';

const data = [
  { question: 'The site is easy to use', Strongly disagree: 43, Disagree: 53, Neutral: 50, Agree: 24, Strongly agree: 29 },
  { question: 'Prices are fair', Strongly disagree: 38, Disagree: 36, Neutral: 62, Agree: 42, Strongly agree: 21 },
  { question: 'Delivery was on time', Strongly disagree: 40, Disagree: 42, Neutral: 45, Agree: 31, Strongly agree: 41 },
  { question: 'Support solved my issue', Strongly disagree: 37, Disagree: 39, Neutral: 43, Agree: 41, Strongly agree: 39 },
  { question: 'I would recommend it', Strongly disagree: 55, Disagree: 36, Neutral: 50, Agree: 20, Strongly agree: 38 },
  { question: 'The app is reliable', Strongly disagree: 49, Disagree: 33, Neutral: 46, Agree: 40, Strongly agree: 31 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <DivergingBarChart
        data={data}
        labelKey="question"
        levels={['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']}
        title="Customer survey"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),kr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpDivergingBarChart } from '@silverpoint/vue/diverging-bar-chart';

const data = [
  { question: 'The site is easy to use', Strongly disagree: 43, Disagree: 53, Neutral: 50, Agree: 24, Strongly agree: 29 },
  { question: 'Prices are fair', Strongly disagree: 38, Disagree: 36, Neutral: 62, Agree: 42, Strongly agree: 21 },
  { question: 'Delivery was on time', Strongly disagree: 40, Disagree: 42, Neutral: 45, Agree: 31, Strongly agree: 41 },
  { question: 'Support solved my issue', Strongly disagree: 37, Disagree: 39, Neutral: 43, Agree: 41, Strongly agree: 39 },
  { question: 'I would recommend it', Strongly disagree: 55, Disagree: 36, Neutral: 50, Agree: 20, Strongly agree: 38 },
  { question: 'The app is reliable', Strongly disagree: 49, Disagree: 33, Neutral: 46, Agree: 40, Strongly agree: 31 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpDivergingBarChart
      :data="data"
      label-key="question"
      :levels="['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']"
      title="Customer survey"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ar=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpDivergingBarChart } from '@silverpoint/angular/diverging-bar-chart';

@Component({
  selector: 'app-root',
  imports: [SpDivergingBarChart],
  template: \`
    <div style="width: 480px">
      <sp-diverging-bar-chart
        [data]="data"
        labelKey="question"
        [levels]="['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree']"
        title="Customer survey"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { question: 'The site is easy to use', Strongly disagree: 43, Disagree: 53, Neutral: 50, Agree: 24, Strongly agree: 29 },
    { question: 'Prices are fair', Strongly disagree: 38, Disagree: 36, Neutral: 62, Agree: 42, Strongly agree: 21 },
    { question: 'Delivery was on time', Strongly disagree: 40, Disagree: 42, Neutral: 45, Agree: 31, Strongly agree: 41 },
    { question: 'Support solved my issue', Strongly disagree: 37, Disagree: 39, Neutral: 43, Agree: 41, Strongly agree: 39 },
    { question: 'I would recommend it', Strongly disagree: 55, Disagree: 36, Neutral: 50, Agree: 20, Strongly agree: 38 },
    { question: 'The app is reliable', Strongly disagree: 49, Disagree: 33, Neutral: 46, Agree: 40, Strongly agree: 31 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),jr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import diverging_bar_chart

DATA = [
    {"question": "The site is easy to use", "Strongly disagree": 43, "Disagree": 53, "Neutral": 50, "Agree": 24, "Strongly agree": 29},
    {"question": "Prices are fair", "Strongly disagree": 38, "Disagree": 36, "Neutral": 62, "Agree": 42, "Strongly agree": 21},
    {"question": "Delivery was on time", "Strongly disagree": 40, "Disagree": 42, "Neutral": 45, "Agree": 31, "Strongly agree": 41},
    {"question": "Support solved my issue", "Strongly disagree": 37, "Disagree": 39, "Neutral": 43, "Agree": 41, "Strongly agree": 39},
    {"question": "I would recommend it", "Strongly disagree": 55, "Disagree": 36, "Neutral": 50, "Agree": 20, "Strongly agree": 38},
    {"question": "The app is reliable", "Strongly disagree": 49, "Disagree": 33, "Neutral": 46, "Agree": 40, "Strongly agree": 31},
]


def index() -> rx.Component:
    return rx.box(
        diverging_bar_chart(
            data=DATA,
            label_key="question",
            levels=["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
            title="Customer survey",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Mr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_connected_scatter_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_connected_scatter_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-connected-scatter-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "connected-scatter-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-connected-scatter-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Nr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { ConnectedScatterChart } from '@silverpoint/react/connected-scatter-chart';

const data = [
  { year: 2012, fare: 1.5, riders: 39.8 },
  { year: 2013, fare: 1.62, riders: 41.8 },
  { year: 2014, fare: 1.72, riders: 42.7 },
  { year: 2015, fare: 1.85, riders: 44.7 },
  { year: 2016, fare: 1.97, riders: 45.9 },
  { year: 2017, fare: 2.09, riders: 47.6 },
  { year: 2018, fare: 2.73, riders: 53.1 },
  { year: 2019, fare: 2.42, riders: 58.2 },
  { year: 2020, fare: 1.87, riders: 55.9 },
  { year: 2021, fare: 2.26, riders: 48.6 },
  { year: 2022, fare: 2.7, riders: 55.2 },
  { year: 2023, fare: 2.83, riders: 56.3 },
  // … 2 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <ConnectedScatterChart
        data={data}
        xKey="fare"
        yKey="riders"
        labelKey="year"
        title="Fare and ridership"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Pr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpConnectedScatterChart } from '@silverpoint/vue/connected-scatter-chart';

const data = [
  { year: 2012, fare: 1.5, riders: 39.8 },
  { year: 2013, fare: 1.62, riders: 41.8 },
  { year: 2014, fare: 1.72, riders: 42.7 },
  { year: 2015, fare: 1.85, riders: 44.7 },
  { year: 2016, fare: 1.97, riders: 45.9 },
  { year: 2017, fare: 2.09, riders: 47.6 },
  { year: 2018, fare: 2.73, riders: 53.1 },
  { year: 2019, fare: 2.42, riders: 58.2 },
  { year: 2020, fare: 1.87, riders: 55.9 },
  { year: 2021, fare: 2.26, riders: 48.6 },
  { year: 2022, fare: 2.7, riders: 55.2 },
  { year: 2023, fare: 2.83, riders: 56.3 },
  // … 2 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpConnectedScatterChart
      :data="data"
      x-key="fare"
      y-key="riders"
      label-key="year"
      title="Fare and ridership"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Fr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpConnectedScatterChart } from '@silverpoint/angular/connected-scatter-chart';

@Component({
  selector: 'app-root',
  imports: [SpConnectedScatterChart],
  template: \`
    <div style="width: 480px">
      <sp-connected-scatter-chart
        [data]="data"
        xKey="fare"
        yKey="riders"
        labelKey="year"
        title="Fare and ridership"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { year: 2012, fare: 1.5, riders: 39.8 },
    { year: 2013, fare: 1.62, riders: 41.8 },
    { year: 2014, fare: 1.72, riders: 42.7 },
    { year: 2015, fare: 1.85, riders: 44.7 },
    { year: 2016, fare: 1.97, riders: 45.9 },
    { year: 2017, fare: 2.09, riders: 47.6 },
    { year: 2018, fare: 2.73, riders: 53.1 },
    { year: 2019, fare: 2.42, riders: 58.2 },
    { year: 2020, fare: 1.87, riders: 55.9 },
    { year: 2021, fare: 2.26, riders: 48.6 },
    { year: 2022, fare: 2.7, riders: 55.2 },
    { year: 2023, fare: 2.83, riders: 56.3 },
    // … 2 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ir=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import connected_scatter_chart

DATA = [
    {"year": 2012, "fare": 1.5, "riders": 39.8},
    {"year": 2013, "fare": 1.62, "riders": 41.8},
    {"year": 2014, "fare": 1.72, "riders": 42.7},
    {"year": 2015, "fare": 1.85, "riders": 44.7},
    {"year": 2016, "fare": 1.97, "riders": 45.9},
    {"year": 2017, "fare": 2.09, "riders": 47.6},
    {"year": 2018, "fare": 2.73, "riders": 53.1},
    {"year": 2019, "fare": 2.42, "riders": 58.2},
    {"year": 2020, "fare": 1.87, "riders": 55.9},
    {"year": 2021, "fare": 2.26, "riders": 48.6},
    {"year": 2022, "fare": 2.7, "riders": 55.2},
    {"year": 2023, "fare": 2.83, "riders": 56.3},
    # … 2 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        connected_scatter_chart(
            data=DATA,
            x_key="fare",
            y_key="riders",
            label_key="year",
            title="Fare and ridership",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Lr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_waffle_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_waffle_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-waffle-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "waffle-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-waffle-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Rr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { WaffleChart } from '@silverpoint/react/waffle-chart';

const data = [
  { use: 'Heating', kwh: 412 },
  { use: 'Water heating', kwh: 263 },
  { use: 'Appliances', kwh: 158 },
  { use: 'Lighting', kwh: 97 },
  { use: 'Cooking', kwh: 70 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <WaffleChart
        data={data}
        nameKey="use"
        valueKey="kwh"
        title="Household energy"
        unit="kWh"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),zr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpWaffleChart } from '@silverpoint/vue/waffle-chart';

const data = [
  { use: 'Heating', kwh: 412 },
  { use: 'Water heating', kwh: 263 },
  { use: 'Appliances', kwh: 158 },
  { use: 'Lighting', kwh: 97 },
  { use: 'Cooking', kwh: 70 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpWaffleChart
      :data="data"
      name-key="use"
      value-key="kwh"
      title="Household energy"
      unit="kWh"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Br=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpWaffleChart } from '@silverpoint/angular/waffle-chart';

@Component({
  selector: 'app-root',
  imports: [SpWaffleChart],
  template: \`
    <div style="width: 480px">
      <sp-waffle-chart
        [data]="data"
        nameKey="use"
        valueKey="kwh"
        title="Household energy"
        unit="kWh"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { use: 'Heating', kwh: 412 },
    { use: 'Water heating', kwh: 263 },
    { use: 'Appliances', kwh: 158 },
    { use: 'Lighting', kwh: 97 },
    { use: 'Cooking', kwh: 70 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Vr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import waffle_chart

DATA = [
    {"use": "Heating", "kwh": 412},
    {"use": "Water heating", "kwh": 263},
    {"use": "Appliances", "kwh": 158},
    {"use": "Lighting", "kwh": 97},
    {"use": "Cooking", "kwh": 70},
]


def index() -> rx.Component:
    return rx.box(
        waffle_chart(
            data=DATA,
            name_key="use",
            value_key="kwh",
            title="Household energy",
            unit="kWh",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Hr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_marimekko_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_marimekko_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-marimekko-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "marimekko-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-marimekko-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Ur=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { MarimekkoChart } from '@silverpoint/react/marimekko-chart';

const data = [
  { region: 'North', channel: 'Retail', sales: 115 },
  { region: 'North', channel: 'Online', sales: 80 },
  { region: 'North', channel: 'Wholesale', sales: 37 },
  { region: 'North', channel: 'Direct', sales: 67 },
  { region: 'South', channel: 'Retail', sales: 178 },
  { region: 'South', channel: 'Online', sales: 133 },
  { region: 'South', channel: 'Wholesale', sales: 168 },
  { region: 'South', channel: 'Direct', sales: 108 },
  { region: 'East', channel: 'Retail', sales: 90 },
  { region: 'East', channel: 'Online', sales: 72 },
  { region: 'East', channel: 'Wholesale', sales: 21 },
  { region: 'East', channel: 'Direct', sales: 213 },
  // … 4 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <MarimekkoChart
        data={data}
        columnKey="region"
        segmentKey="channel"
        valueKey="sales"
        title="Sales by region"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Wr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpMarimekkoChart } from '@silverpoint/vue/marimekko-chart';

const data = [
  { region: 'North', channel: 'Retail', sales: 115 },
  { region: 'North', channel: 'Online', sales: 80 },
  { region: 'North', channel: 'Wholesale', sales: 37 },
  { region: 'North', channel: 'Direct', sales: 67 },
  { region: 'South', channel: 'Retail', sales: 178 },
  { region: 'South', channel: 'Online', sales: 133 },
  { region: 'South', channel: 'Wholesale', sales: 168 },
  { region: 'South', channel: 'Direct', sales: 108 },
  { region: 'East', channel: 'Retail', sales: 90 },
  { region: 'East', channel: 'Online', sales: 72 },
  { region: 'East', channel: 'Wholesale', sales: 21 },
  { region: 'East', channel: 'Direct', sales: 213 },
  // … 4 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpMarimekkoChart
      :data="data"
      column-key="region"
      segment-key="channel"
      value-key="sales"
      title="Sales by region"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Gr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpMarimekkoChart } from '@silverpoint/angular/marimekko-chart';

@Component({
  selector: 'app-root',
  imports: [SpMarimekkoChart],
  template: \`
    <div style="width: 480px">
      <sp-marimekko-chart
        [data]="data"
        columnKey="region"
        segmentKey="channel"
        valueKey="sales"
        title="Sales by region"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { region: 'North', channel: 'Retail', sales: 115 },
    { region: 'North', channel: 'Online', sales: 80 },
    { region: 'North', channel: 'Wholesale', sales: 37 },
    { region: 'North', channel: 'Direct', sales: 67 },
    { region: 'South', channel: 'Retail', sales: 178 },
    { region: 'South', channel: 'Online', sales: 133 },
    { region: 'South', channel: 'Wholesale', sales: 168 },
    { region: 'South', channel: 'Direct', sales: 108 },
    { region: 'East', channel: 'Retail', sales: 90 },
    { region: 'East', channel: 'Online', sales: 72 },
    { region: 'East', channel: 'Wholesale', sales: 21 },
    { region: 'East', channel: 'Direct', sales: 213 },
    // … 4 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Kr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import marimekko_chart

DATA = [
    {"region": "North", "channel": "Retail", "sales": 115},
    {"region": "North", "channel": "Online", "sales": 80},
    {"region": "North", "channel": "Wholesale", "sales": 37},
    {"region": "North", "channel": "Direct", "sales": 67},
    {"region": "South", "channel": "Retail", "sales": 178},
    {"region": "South", "channel": "Online", "sales": 133},
    {"region": "South", "channel": "Wholesale", "sales": 168},
    {"region": "South", "channel": "Direct", "sales": 108},
    {"region": "East", "channel": "Retail", "sales": 90},
    {"region": "East", "channel": "Online", "sales": 72},
    {"region": "East", "channel": "Wholesale", "sales": 21},
    {"region": "East", "channel": "Direct", "sales": 213},
    # … 4 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        marimekko_chart(
            data=DATA,
            column_key="region",
            segment_key="channel",
            value_key="sales",
            title="Sales by region",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),qr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_squarified_treemap=s;let l=(0,d.useId)(),[u,f]=(0,d.useState)(null);n._client_state_setRoot_squarified_treemap=(e=>Array.prototype.forEach.call([...Object.values(n._client_state_dict_setRoot_squarified_treemap),e=>{n._client_state_root_squarified_treemap=e}],(t=>t(e)))),n._client_state_root_squarified_treemap??=u,n._client_state_dict_root_squarified_treemap??={},n._client_state_dict_setRoot_squarified_treemap??={},n._client_state_dict_root_squarified_treemap[l]=n._client_state_root_squarified_treemap,n._client_state_dict_setRoot_squarified_treemap[l]=f;let p=(0,d.useCallback)((e=>(e=>n._client_state_setRoot_squarified_treemap(e))(e)),[o,i,l,u,f]);return a(c,{...r(t,{data:[{id:`budget`,parent:null,name:`City budget`},{id:`works`,parent:`budget`,name:`Public works`},{id:`works-01`,parent:`works`,name:`Roads`},{id:`works-01-a`,parent:`works-01`,name:`Roads: staff`,amount:1760},{id:`works-01-b`,parent:`works-01`,name:`Roads: materials`,amount:390},{id:`works-02`,parent:`works`,name:`Bridges`,amount:6154},{id:`works-03`,parent:`works`,name:`Water mains`},{id:`works-03-a`,parent:`works-03`,name:`Water mains: staff`,amount:2069},{id:`works-03-b`,parent:`works-03`,name:`Water mains: materials`,amount:809},{id:`works-04`,parent:`works`,name:`Street lighting`,amount:8015},{id:`parks`,parent:`budget`,name:`Parks`},{id:`parks-05`,parent:`parks`,name:`Playgrounds`},{id:`parks-05-a`,parent:`parks-05`,name:`Playgrounds: staff`,amount:2165},{id:`parks-05-b`,parent:`parks-05`,name:`Playgrounds: materials`,amount:2865},{id:`parks-06`,parent:`parks`,name:`Tree care`,amount:2835},{id:`parks-07`,parent:`parks`,name:`Sports fields`},{id:`parks-07-a`,parent:`parks-07`,name:`Sports fields: staff`,amount:2455},{id:`parks-07-b`,parent:`parks-07`,name:`Sports fields: materials`,amount:306},{id:`safety`,parent:`budget`,name:`Safety`},{id:`safety-08`,parent:`safety`,name:`Fire service`,amount:1805},{id:`safety-09`,parent:`safety`,name:`Lifeguards`},{id:`safety-09-a`,parent:`safety-09`,name:`Lifeguards: staff`,amount:2271},{id:`safety-09-b`,parent:`safety-09`,name:`Lifeguards: materials`,amount:2953},{id:`safety-10`,parent:`safety`,name:`Emergency planning`,amount:6265},{id:`culture`,parent:`budget`,name:`Culture`},{id:`culture-11`,parent:`culture`,name:`Libraries`},{id:`culture-11-a`,parent:`culture-11`,name:`Libraries: staff`,amount:912},{id:`culture-11-b`,parent:`culture-11`,name:`Libraries: materials`,amount:2265},{id:`culture-12`,parent:`culture`,name:`Museum`,amount:2999},{id:`culture-13`,parent:`culture`,name:`Festivals`},{id:`culture-13-a`,parent:`culture-13`,name:`Festivals: staff`,amount:1275},{id:`culture-13-b`,parent:`culture-13`,name:`Festivals: materials`,amount:185},{id:`admin`,parent:`budget`,name:`Administration`},{id:`admin-14`,parent:`admin`,name:`Payroll`,amount:6768},{id:`admin-15`,parent:`admin`,name:`Records`},{id:`admin-15-a`,parent:`admin-15`,name:`Records: staff`,amount:3281},{id:`admin-15-b`,parent:`admin-15`,name:`Records: materials`,amount:310},{id:`admin-16`,parent:`admin`,name:`IT services`,amount:8252}],footerRight:`silverpoint`,height:260,id:`chart-squarified-treemap`,idKey:`id`,labelKey:`name`,onRootChange:p,parentKey:`parent`,ref:s,rootId:n._client_state_dict_root_squarified_treemap[l],title:`City budget`,valueKey:`amount`})})});return e.displayName=`SquarifiedTreemap`,e})(),Jr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_squarified_treemap_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_squarified_treemap"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-squarified-treemap");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "squarified-treemap.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-squarified-treemap-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Yr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SquarifiedTreemap } from '@silverpoint/react/squarified-treemap';

const data = [
  { id: 'budget', parent: null, name: 'City budget' },
  { id: 'works', parent: 'budget', name: 'Public works' },
  { id: 'works-01', parent: 'works', name: 'Roads' },
  { id: 'works-01-a', parent: 'works-01', name: 'Roads: staff', amount: 1760 },
  { id: 'works-01-b', parent: 'works-01', name: 'Roads: materials', amount: 390 },
  { id: 'works-02', parent: 'works', name: 'Bridges', amount: 6154 },
  { id: 'works-03', parent: 'works', name: 'Water mains' },
  { id: 'works-03-a', parent: 'works-03', name: 'Water mains: staff', amount: 2069 },
  { id: 'works-03-b', parent: 'works-03', name: 'Water mains: materials', amount: 809 },
  { id: 'works-04', parent: 'works', name: 'Street lighting', amount: 8015 },
  { id: 'parks', parent: 'budget', name: 'Parks' },
  { id: 'parks-05', parent: 'parks', name: 'Playgrounds' },
  // … 26 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <SquarifiedTreemap
        data={data}
        idKey="id"
        parentKey="parent"
        labelKey="name"
        valueKey="amount"
        title="City budget"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Xr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpSquarifiedTreemap } from '@silverpoint/vue/squarified-treemap';

const data = [
  { id: 'budget', parent: null, name: 'City budget' },
  { id: 'works', parent: 'budget', name: 'Public works' },
  { id: 'works-01', parent: 'works', name: 'Roads' },
  { id: 'works-01-a', parent: 'works-01', name: 'Roads: staff', amount: 1760 },
  { id: 'works-01-b', parent: 'works-01', name: 'Roads: materials', amount: 390 },
  { id: 'works-02', parent: 'works', name: 'Bridges', amount: 6154 },
  { id: 'works-03', parent: 'works', name: 'Water mains' },
  { id: 'works-03-a', parent: 'works-03', name: 'Water mains: staff', amount: 2069 },
  { id: 'works-03-b', parent: 'works-03', name: 'Water mains: materials', amount: 809 },
  { id: 'works-04', parent: 'works', name: 'Street lighting', amount: 8015 },
  { id: 'parks', parent: 'budget', name: 'Parks' },
  { id: 'parks-05', parent: 'parks', name: 'Playgrounds' },
  // … 26 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpSquarifiedTreemap
      :data="data"
      id-key="id"
      parent-key="parent"
      label-key="name"
      value-key="amount"
      title="City budget"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Zr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpSquarifiedTreemap } from '@silverpoint/angular/squarified-treemap';

@Component({
  selector: 'app-root',
  imports: [SpSquarifiedTreemap],
  template: \`
    <div style="width: 480px">
      <sp-squarified-treemap
        [data]="data"
        idKey="id"
        parentKey="parent"
        labelKey="name"
        valueKey="amount"
        title="City budget"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { id: 'budget', parent: null, name: 'City budget' },
    { id: 'works', parent: 'budget', name: 'Public works' },
    { id: 'works-01', parent: 'works', name: 'Roads' },
    { id: 'works-01-a', parent: 'works-01', name: 'Roads: staff', amount: 1760 },
    { id: 'works-01-b', parent: 'works-01', name: 'Roads: materials', amount: 390 },
    { id: 'works-02', parent: 'works', name: 'Bridges', amount: 6154 },
    { id: 'works-03', parent: 'works', name: 'Water mains' },
    { id: 'works-03-a', parent: 'works-03', name: 'Water mains: staff', amount: 2069 },
    { id: 'works-03-b', parent: 'works-03', name: 'Water mains: materials', amount: 809 },
    { id: 'works-04', parent: 'works', name: 'Street lighting', amount: 8015 },
    { id: 'parks', parent: 'budget', name: 'Parks' },
    { id: 'parks-05', parent: 'parks', name: 'Playgrounds' },
    // … 26 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Qr=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import squarified_treemap

DATA = [
    {"id": "budget", "parent": None, "name": "City budget"},
    {"id": "works", "parent": "budget", "name": "Public works"},
    {"id": "works-01", "parent": "works", "name": "Roads"},
    {"id": "works-01-a", "parent": "works-01", "name": "Roads: staff", "amount": 1760},
    {"id": "works-01-b", "parent": "works-01", "name": "Roads: materials", "amount": 390},
    {"id": "works-02", "parent": "works", "name": "Bridges", "amount": 6154},
    {"id": "works-03", "parent": "works", "name": "Water mains"},
    {"id": "works-03-a", "parent": "works-03", "name": "Water mains: staff", "amount": 2069},
    {"id": "works-03-b", "parent": "works-03", "name": "Water mains: materials", "amount": 809},
    {"id": "works-04", "parent": "works", "name": "Street lighting", "amount": 8015},
    {"id": "parks", "parent": "budget", "name": "Parks"},
    {"id": "parks-05", "parent": "parks", "name": "Playgrounds"},
    # … 26 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        squarified_treemap(
            data=DATA,
            id_key="id",
            parent_key="parent",
            label_key="name",
            value_key="amount",
            title="City budget",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),$r=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let c=(0,d.useRef)(null);n.ref_chart_sunburst_chart=c;let l=(0,d.useId)(),[u,f]=(0,d.useState)(null);n._client_state_setRoot_sunburst_chart=(e=>Array.prototype.forEach.call([...Object.values(n._client_state_dict_setRoot_sunburst_chart),e=>{n._client_state_root_sunburst_chart=e}],(t=>t(e)))),n._client_state_root_sunburst_chart??=u,n._client_state_dict_root_sunburst_chart??={},n._client_state_dict_setRoot_sunburst_chart??={},n._client_state_dict_root_sunburst_chart[l]=n._client_state_root_sunburst_chart,n._client_state_dict_setRoot_sunburst_chart[l]=f;let p=(0,d.useCallback)((e=>(e=>n._client_state_setRoot_sunburst_chart(e))(e)),[o,i,l,u,f]);return a(s,{...r(t,{data:[{id:`budget`,parent:null,name:`City budget`},{id:`works`,parent:`budget`,name:`Public works`},{id:`works-01`,parent:`works`,name:`Roads`},{id:`works-01-a`,parent:`works-01`,name:`Roads: staff`,amount:1760},{id:`works-01-b`,parent:`works-01`,name:`Roads: materials`,amount:390},{id:`works-02`,parent:`works`,name:`Bridges`,amount:6154},{id:`works-03`,parent:`works`,name:`Water mains`},{id:`works-03-a`,parent:`works-03`,name:`Water mains: staff`,amount:2069},{id:`works-03-b`,parent:`works-03`,name:`Water mains: materials`,amount:809},{id:`works-04`,parent:`works`,name:`Street lighting`,amount:8015},{id:`parks`,parent:`budget`,name:`Parks`},{id:`parks-05`,parent:`parks`,name:`Playgrounds`},{id:`parks-05-a`,parent:`parks-05`,name:`Playgrounds: staff`,amount:2165},{id:`parks-05-b`,parent:`parks-05`,name:`Playgrounds: materials`,amount:2865},{id:`parks-06`,parent:`parks`,name:`Tree care`,amount:2835},{id:`parks-07`,parent:`parks`,name:`Sports fields`},{id:`parks-07-a`,parent:`parks-07`,name:`Sports fields: staff`,amount:2455},{id:`parks-07-b`,parent:`parks-07`,name:`Sports fields: materials`,amount:306},{id:`safety`,parent:`budget`,name:`Safety`},{id:`safety-08`,parent:`safety`,name:`Fire service`,amount:1805},{id:`safety-09`,parent:`safety`,name:`Lifeguards`},{id:`safety-09-a`,parent:`safety-09`,name:`Lifeguards: staff`,amount:2271},{id:`safety-09-b`,parent:`safety-09`,name:`Lifeguards: materials`,amount:2953},{id:`safety-10`,parent:`safety`,name:`Emergency planning`,amount:6265},{id:`culture`,parent:`budget`,name:`Culture`},{id:`culture-11`,parent:`culture`,name:`Libraries`},{id:`culture-11-a`,parent:`culture-11`,name:`Libraries: staff`,amount:912},{id:`culture-11-b`,parent:`culture-11`,name:`Libraries: materials`,amount:2265},{id:`culture-12`,parent:`culture`,name:`Museum`,amount:2999},{id:`culture-13`,parent:`culture`,name:`Festivals`},{id:`culture-13-a`,parent:`culture-13`,name:`Festivals: staff`,amount:1275},{id:`culture-13-b`,parent:`culture-13`,name:`Festivals: materials`,amount:185},{id:`admin`,parent:`budget`,name:`Administration`},{id:`admin-14`,parent:`admin`,name:`Payroll`,amount:6768},{id:`admin-15`,parent:`admin`,name:`Records`},{id:`admin-15-a`,parent:`admin-15`,name:`Records: staff`,amount:3281},{id:`admin-15-b`,parent:`admin-15`,name:`Records: materials`,amount:310},{id:`admin-16`,parent:`admin`,name:`IT services`,amount:8252}],footerRight:`silverpoint`,height:260,id:`chart-sunburst-chart`,idKey:`id`,labelKey:`name`,onRootChange:p,parentKey:`parent`,ref:c,rootId:n._client_state_dict_root_sunburst_chart[l],title:`City budget`,valueKey:`amount`})})});return e.displayName=`SunburstChart`,e})(),ei=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_sunburst_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_sunburst_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-sunburst-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "sunburst-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-sunburst-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),ti=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SunburstChart } from '@silverpoint/react/sunburst-chart';

const data = [
  { id: 'budget', parent: null, name: 'City budget' },
  { id: 'works', parent: 'budget', name: 'Public works' },
  { id: 'works-01', parent: 'works', name: 'Roads' },
  { id: 'works-01-a', parent: 'works-01', name: 'Roads: staff', amount: 1760 },
  { id: 'works-01-b', parent: 'works-01', name: 'Roads: materials', amount: 390 },
  { id: 'works-02', parent: 'works', name: 'Bridges', amount: 6154 },
  { id: 'works-03', parent: 'works', name: 'Water mains' },
  { id: 'works-03-a', parent: 'works-03', name: 'Water mains: staff', amount: 2069 },
  { id: 'works-03-b', parent: 'works-03', name: 'Water mains: materials', amount: 809 },
  { id: 'works-04', parent: 'works', name: 'Street lighting', amount: 8015 },
  { id: 'parks', parent: 'budget', name: 'Parks' },
  { id: 'parks-05', parent: 'parks', name: 'Playgrounds' },
  // … 26 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <SunburstChart
        data={data}
        idKey="id"
        parentKey="parent"
        labelKey="name"
        valueKey="amount"
        title="City budget"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ni=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpSunburstChart } from '@silverpoint/vue/sunburst-chart';

const data = [
  { id: 'budget', parent: null, name: 'City budget' },
  { id: 'works', parent: 'budget', name: 'Public works' },
  { id: 'works-01', parent: 'works', name: 'Roads' },
  { id: 'works-01-a', parent: 'works-01', name: 'Roads: staff', amount: 1760 },
  { id: 'works-01-b', parent: 'works-01', name: 'Roads: materials', amount: 390 },
  { id: 'works-02', parent: 'works', name: 'Bridges', amount: 6154 },
  { id: 'works-03', parent: 'works', name: 'Water mains' },
  { id: 'works-03-a', parent: 'works-03', name: 'Water mains: staff', amount: 2069 },
  { id: 'works-03-b', parent: 'works-03', name: 'Water mains: materials', amount: 809 },
  { id: 'works-04', parent: 'works', name: 'Street lighting', amount: 8015 },
  { id: 'parks', parent: 'budget', name: 'Parks' },
  { id: 'parks-05', parent: 'parks', name: 'Playgrounds' },
  // … 26 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpSunburstChart
      :data="data"
      id-key="id"
      parent-key="parent"
      label-key="name"
      value-key="amount"
      title="City budget"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ri=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpSunburstChart } from '@silverpoint/angular/sunburst-chart';

@Component({
  selector: 'app-root',
  imports: [SpSunburstChart],
  template: \`
    <div style="width: 480px">
      <sp-sunburst-chart
        [data]="data"
        idKey="id"
        parentKey="parent"
        labelKey="name"
        valueKey="amount"
        title="City budget"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { id: 'budget', parent: null, name: 'City budget' },
    { id: 'works', parent: 'budget', name: 'Public works' },
    { id: 'works-01', parent: 'works', name: 'Roads' },
    { id: 'works-01-a', parent: 'works-01', name: 'Roads: staff', amount: 1760 },
    { id: 'works-01-b', parent: 'works-01', name: 'Roads: materials', amount: 390 },
    { id: 'works-02', parent: 'works', name: 'Bridges', amount: 6154 },
    { id: 'works-03', parent: 'works', name: 'Water mains' },
    { id: 'works-03-a', parent: 'works-03', name: 'Water mains: staff', amount: 2069 },
    { id: 'works-03-b', parent: 'works-03', name: 'Water mains: materials', amount: 809 },
    { id: 'works-04', parent: 'works', name: 'Street lighting', amount: 8015 },
    { id: 'parks', parent: 'budget', name: 'Parks' },
    { id: 'parks-05', parent: 'parks', name: 'Playgrounds' },
    // … 26 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ii=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import sunburst_chart

DATA = [
    {"id": "budget", "parent": None, "name": "City budget"},
    {"id": "works", "parent": "budget", "name": "Public works"},
    {"id": "works-01", "parent": "works", "name": "Roads"},
    {"id": "works-01-a", "parent": "works-01", "name": "Roads: staff", "amount": 1760},
    {"id": "works-01-b", "parent": "works-01", "name": "Roads: materials", "amount": 390},
    {"id": "works-02", "parent": "works", "name": "Bridges", "amount": 6154},
    {"id": "works-03", "parent": "works", "name": "Water mains"},
    {"id": "works-03-a", "parent": "works-03", "name": "Water mains: staff", "amount": 2069},
    {"id": "works-03-b", "parent": "works-03", "name": "Water mains: materials", "amount": 809},
    {"id": "works-04", "parent": "works", "name": "Street lighting", "amount": 8015},
    {"id": "parks", "parent": "budget", "name": "Parks"},
    {"id": "parks-05", "parent": "parks", "name": "Playgrounds"},
    # … 26 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        sunburst_chart(
            data=DATA,
            id_key="id",
            parent_key="parent",
            label_key="name",
            value_key="amount",
            title="City budget",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ai=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_tree_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_tree_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-tree-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "tree-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-tree-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),oi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { TreeChart } from '@silverpoint/react/tree-chart';

const data = [
  { id: 'budget', parent: null, name: 'City budget' },
  { id: 'works', parent: 'budget', name: 'Public works' },
  { id: 'works-01', parent: 'works', name: 'Roads' },
  { id: 'works-01-a', parent: 'works-01', name: 'Roads: staff', amount: 1760 },
  { id: 'works-01-b', parent: 'works-01', name: 'Roads: materials', amount: 390 },
  { id: 'works-02', parent: 'works', name: 'Bridges', amount: 6154 },
  { id: 'works-03', parent: 'works', name: 'Water mains' },
  { id: 'works-03-a', parent: 'works-03', name: 'Water mains: staff', amount: 2069 },
  { id: 'works-03-b', parent: 'works-03', name: 'Water mains: materials', amount: 809 },
  { id: 'works-04', parent: 'works', name: 'Street lighting', amount: 8015 },
  { id: 'parks', parent: 'budget', name: 'Parks' },
  { id: 'parks-05', parent: 'parks', name: 'Playgrounds' },
  // … 26 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <TreeChart
        data={data}
        idKey="id"
        parentKey="parent"
        labelKey="name"
        valueKey="amount"
        title="City budget"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),si=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpTreeChart } from '@silverpoint/vue/tree-chart';

const data = [
  { id: 'budget', parent: null, name: 'City budget' },
  { id: 'works', parent: 'budget', name: 'Public works' },
  { id: 'works-01', parent: 'works', name: 'Roads' },
  { id: 'works-01-a', parent: 'works-01', name: 'Roads: staff', amount: 1760 },
  { id: 'works-01-b', parent: 'works-01', name: 'Roads: materials', amount: 390 },
  { id: 'works-02', parent: 'works', name: 'Bridges', amount: 6154 },
  { id: 'works-03', parent: 'works', name: 'Water mains' },
  { id: 'works-03-a', parent: 'works-03', name: 'Water mains: staff', amount: 2069 },
  { id: 'works-03-b', parent: 'works-03', name: 'Water mains: materials', amount: 809 },
  { id: 'works-04', parent: 'works', name: 'Street lighting', amount: 8015 },
  { id: 'parks', parent: 'budget', name: 'Parks' },
  { id: 'parks-05', parent: 'parks', name: 'Playgrounds' },
  // … 26 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpTreeChart
      :data="data"
      id-key="id"
      parent-key="parent"
      label-key="name"
      value-key="amount"
      title="City budget"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ci=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpTreeChart } from '@silverpoint/angular/tree-chart';

@Component({
  selector: 'app-root',
  imports: [SpTreeChart],
  template: \`
    <div style="width: 480px">
      <sp-tree-chart
        [data]="data"
        idKey="id"
        parentKey="parent"
        labelKey="name"
        valueKey="amount"
        title="City budget"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { id: 'budget', parent: null, name: 'City budget' },
    { id: 'works', parent: 'budget', name: 'Public works' },
    { id: 'works-01', parent: 'works', name: 'Roads' },
    { id: 'works-01-a', parent: 'works-01', name: 'Roads: staff', amount: 1760 },
    { id: 'works-01-b', parent: 'works-01', name: 'Roads: materials', amount: 390 },
    { id: 'works-02', parent: 'works', name: 'Bridges', amount: 6154 },
    { id: 'works-03', parent: 'works', name: 'Water mains' },
    { id: 'works-03-a', parent: 'works-03', name: 'Water mains: staff', amount: 2069 },
    { id: 'works-03-b', parent: 'works-03', name: 'Water mains: materials', amount: 809 },
    { id: 'works-04', parent: 'works', name: 'Street lighting', amount: 8015 },
    { id: 'parks', parent: 'budget', name: 'Parks' },
    { id: 'parks-05', parent: 'parks', name: 'Playgrounds' },
    // … 26 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),li=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import tree_chart

DATA = [
    {"id": "budget", "parent": None, "name": "City budget"},
    {"id": "works", "parent": "budget", "name": "Public works"},
    {"id": "works-01", "parent": "works", "name": "Roads"},
    {"id": "works-01-a", "parent": "works-01", "name": "Roads: staff", "amount": 1760},
    {"id": "works-01-b", "parent": "works-01", "name": "Roads: materials", "amount": 390},
    {"id": "works-02", "parent": "works", "name": "Bridges", "amount": 6154},
    {"id": "works-03", "parent": "works", "name": "Water mains"},
    {"id": "works-03-a", "parent": "works-03", "name": "Water mains: staff", "amount": 2069},
    {"id": "works-03-b", "parent": "works-03", "name": "Water mains: materials", "amount": 809},
    {"id": "works-04", "parent": "works", "name": "Street lighting", "amount": 8015},
    {"id": "parks", "parent": "budget", "name": "Parks"},
    {"id": "parks-05", "parent": "parks", "name": "Playgrounds"},
    # … 26 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        tree_chart(
            data=DATA,
            id_key="id",
            parent_key="parent",
            label_key="name",
            value_key="amount",
            title="City budget",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ui=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_parallel_coordinates_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_parallel_coordinates_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-parallel-coordinates-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "parallel-coordinates-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-parallel-coordinates-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),di=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { ParallelCoordinatesChart } from '@silverpoint/react/parallel-coordinates-chart';

const data = [
  { model: 'Model 01', mass: 13.9, gears: 15, price: 3434, range: 125, rating: 1.5 },
  { model: 'Model 02', mass: 8.6, gears: 22, price: 3897, range: 29, rating: 3.8 },
  { model: 'Model 03', mass: 19.5, gears: 13, price: 3202, range: 62, rating: 2.9 },
  { model: 'Model 04', mass: 12.7, gears: 15, price: 2760, range: 28, rating: 2.2 },
  { model: 'Model 05', mass: 22.8, gears: 21, price: 485, range: 39, rating: 2.9 },
  { model: 'Model 06', mass: 20.1, gears: 22, price: 1178, range: 60, rating: 3.1 },
  { model: 'Model 07', mass: 22.5, gears: 8, price: 3952, range: 40, rating: 4.8 },
  { model: 'Model 08', mass: 22.6, gears: 16, price: 1407, range: 133, rating: 1.7 },
  { model: 'Model 09', mass: 18.3, gears: 18, price: 2982, range: 126, rating: 3.4 },
  { model: 'Model 10', mass: 19.1, gears: 11, price: 2060, range: 24, rating: 2.1 },
  { model: 'Model 11', mass: 13.9, gears: 9, price: 2430, range: 78, rating: 2.5 },
  { model: 'Model 12', mass: 18.4, gears: 11, price: 1046, range: 42, rating: 1.3 },
  // … 18 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <ParallelCoordinatesChart
        data={data}
        labelKey="model"
        dimensions={['mass', 'gears', 'price', 'range', 'rating']}
        title="Bicycles"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),fi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpParallelCoordinatesChart } from '@silverpoint/vue/parallel-coordinates-chart';

const data = [
  { model: 'Model 01', mass: 13.9, gears: 15, price: 3434, range: 125, rating: 1.5 },
  { model: 'Model 02', mass: 8.6, gears: 22, price: 3897, range: 29, rating: 3.8 },
  { model: 'Model 03', mass: 19.5, gears: 13, price: 3202, range: 62, rating: 2.9 },
  { model: 'Model 04', mass: 12.7, gears: 15, price: 2760, range: 28, rating: 2.2 },
  { model: 'Model 05', mass: 22.8, gears: 21, price: 485, range: 39, rating: 2.9 },
  { model: 'Model 06', mass: 20.1, gears: 22, price: 1178, range: 60, rating: 3.1 },
  { model: 'Model 07', mass: 22.5, gears: 8, price: 3952, range: 40, rating: 4.8 },
  { model: 'Model 08', mass: 22.6, gears: 16, price: 1407, range: 133, rating: 1.7 },
  { model: 'Model 09', mass: 18.3, gears: 18, price: 2982, range: 126, rating: 3.4 },
  { model: 'Model 10', mass: 19.1, gears: 11, price: 2060, range: 24, rating: 2.1 },
  { model: 'Model 11', mass: 13.9, gears: 9, price: 2430, range: 78, rating: 2.5 },
  { model: 'Model 12', mass: 18.4, gears: 11, price: 1046, range: 42, rating: 1.3 },
  // … 18 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpParallelCoordinatesChart
      :data="data"
      label-key="model"
      :dimensions="['mass', 'gears', 'price', 'range', 'rating']"
      title="Bicycles"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),pi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpParallelCoordinatesChart } from '@silverpoint/angular/parallel-coordinates-chart';

@Component({
  selector: 'app-root',
  imports: [SpParallelCoordinatesChart],
  template: \`
    <div style="width: 480px">
      <sp-parallel-coordinates-chart
        [data]="data"
        labelKey="model"
        [dimensions]="['mass', 'gears', 'price', 'range', 'rating']"
        title="Bicycles"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { model: 'Model 01', mass: 13.9, gears: 15, price: 3434, range: 125, rating: 1.5 },
    { model: 'Model 02', mass: 8.6, gears: 22, price: 3897, range: 29, rating: 3.8 },
    { model: 'Model 03', mass: 19.5, gears: 13, price: 3202, range: 62, rating: 2.9 },
    { model: 'Model 04', mass: 12.7, gears: 15, price: 2760, range: 28, rating: 2.2 },
    { model: 'Model 05', mass: 22.8, gears: 21, price: 485, range: 39, rating: 2.9 },
    { model: 'Model 06', mass: 20.1, gears: 22, price: 1178, range: 60, rating: 3.1 },
    { model: 'Model 07', mass: 22.5, gears: 8, price: 3952, range: 40, rating: 4.8 },
    { model: 'Model 08', mass: 22.6, gears: 16, price: 1407, range: 133, rating: 1.7 },
    { model: 'Model 09', mass: 18.3, gears: 18, price: 2982, range: 126, rating: 3.4 },
    { model: 'Model 10', mass: 19.1, gears: 11, price: 2060, range: 24, rating: 2.1 },
    { model: 'Model 11', mass: 13.9, gears: 9, price: 2430, range: 78, rating: 2.5 },
    { model: 'Model 12', mass: 18.4, gears: 11, price: 1046, range: 42, rating: 1.3 },
    // … 18 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),mi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import parallel_coordinates_chart

DATA = [
    {"model": "Model 01", "mass": 13.9, "gears": 15, "price": 3434, "range": 125, "rating": 1.5},
    {"model": "Model 02", "mass": 8.6, "gears": 22, "price": 3897, "range": 29, "rating": 3.8},
    {"model": "Model 03", "mass": 19.5, "gears": 13, "price": 3202, "range": 62, "rating": 2.9},
    {"model": "Model 04", "mass": 12.7, "gears": 15, "price": 2760, "range": 28, "rating": 2.2},
    {"model": "Model 05", "mass": 22.8, "gears": 21, "price": 485, "range": 39, "rating": 2.9},
    {"model": "Model 06", "mass": 20.1, "gears": 22, "price": 1178, "range": 60, "rating": 3.1},
    {"model": "Model 07", "mass": 22.5, "gears": 8, "price": 3952, "range": 40, "rating": 4.8},
    {"model": "Model 08", "mass": 22.6, "gears": 16, "price": 1407, "range": 133, "rating": 1.7},
    {"model": "Model 09", "mass": 18.3, "gears": 18, "price": 2982, "range": 126, "rating": 3.4},
    {"model": "Model 10", "mass": 19.1, "gears": 11, "price": 2060, "range": 24, "rating": 2.1},
    {"model": "Model 11", "mass": 13.9, "gears": 9, "price": 2430, "range": 78, "rating": 2.5},
    {"model": "Model 12", "mass": 18.4, "gears": 11, "price": 1046, "range": 42, "rating": 1.3},
    # … 18 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        parallel_coordinates_chart(
            data=DATA,
            label_key="model",
            dimensions=["mass", "gears", "price", "range", "rating"],
            title="Bicycles",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),hi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_polar_line_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_polar_line_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-polar-line-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "polar-line-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-polar-line-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),gi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { PolarLineChart } from '@silverpoint/react/polar-line-chart';

const data = [
  { month: 0, rain: 82 },
  { month: 1, rain: 62 },
  { month: 2, rain: 54 },
  { month: 3, rain: 45 },
  { month: 4, rain: 57 },
  { month: 5, rain: 38 },
  { month: 6, rain: 27 },
  { month: 7, rain: 30 },
  { month: 8, rain: 48 },
  { month: 9, rain: 71 },
  { month: 10, rain: 91 },
  { month: 11, rain: 86 },
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <PolarLineChart
        data={data}
        angleKey="month"
        valueKey="rain"
        period={12}
        title="Rain by month"
        unit="mm"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),_i=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpPolarLineChart } from '@silverpoint/vue/polar-line-chart';

const data = [
  { month: 0, rain: 82 },
  { month: 1, rain: 62 },
  { month: 2, rain: 54 },
  { month: 3, rain: 45 },
  { month: 4, rain: 57 },
  { month: 5, rain: 38 },
  { month: 6, rain: 27 },
  { month: 7, rain: 30 },
  { month: 8, rain: 48 },
  { month: 9, rain: 71 },
  { month: 10, rain: 91 },
  { month: 11, rain: 86 },
];
<\/script>

<template>
  <div style="width: 480px">
    <SpPolarLineChart
      :data="data"
      angle-key="month"
      value-key="rain"
      :period="12"
      title="Rain by month"
      unit="mm"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),vi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpPolarLineChart } from '@silverpoint/angular/polar-line-chart';

@Component({
  selector: 'app-root',
  imports: [SpPolarLineChart],
  template: \`
    <div style="width: 480px">
      <sp-polar-line-chart
        [data]="data"
        angleKey="month"
        valueKey="rain"
        [period]="12"
        title="Rain by month"
        unit="mm"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { month: 0, rain: 82 },
    { month: 1, rain: 62 },
    { month: 2, rain: 54 },
    { month: 3, rain: 45 },
    { month: 4, rain: 57 },
    { month: 5, rain: 38 },
    { month: 6, rain: 27 },
    { month: 7, rain: 30 },
    { month: 8, rain: 48 },
    { month: 9, rain: 71 },
    { month: 10, rain: 91 },
    { month: 11, rain: 86 },
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),yi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import polar_line_chart

DATA = [
    {"month": 0, "rain": 82},
    {"month": 1, "rain": 62},
    {"month": 2, "rain": 54},
    {"month": 3, "rain": 45},
    {"month": 4, "rain": 57},
    {"month": 5, "rain": 38},
    {"month": 6, "rain": 27},
    {"month": 7, "rain": 30},
    {"month": 8, "rain": 48},
    {"month": 9, "rain": 71},
    {"month": 10, "rain": 91},
    {"month": 11, "rain": 86},
]


def index() -> rx.Component:
    return rx.box(
        polar_line_chart(
            data=DATA,
            angle_key="month",
            value_key="rain",
            period=12,
            title="Rain by month",
            unit="mm",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),bi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_polar_scatter_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_polar_scatter_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-polar-scatter-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "polar-scatter-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-polar-scatter-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),xi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { PolarScatterChart } from '@silverpoint/react/polar-scatter-chart';

const data = [
  { bearing: 28, distance: 2.5 },
  { bearing: 149.6, distance: 1.4 },
  { bearing: 229.3, distance: 19.6 },
  { bearing: 15.5, distance: 1.6 },
  { bearing: 130.5, distance: 16.6 },
  { bearing: 250.7, distance: 7 },
  { bearing: 348.7, distance: 2.6 },
  { bearing: 115.9, distance: 16.3 },
  { bearing: 242.6, distance: 3.8 },
  { bearing: 39.1, distance: 2.3 },
  { bearing: 136.4, distance: 1.6 },
  { bearing: 243.8, distance: 1.7 },
  // … 138 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <PolarScatterChart
        data={data}
        angleKey="bearing"
        radiusKey="distance"
        title="Sightings"
        unit="km"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Si=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpPolarScatterChart } from '@silverpoint/vue/polar-scatter-chart';

const data = [
  { bearing: 28, distance: 2.5 },
  { bearing: 149.6, distance: 1.4 },
  { bearing: 229.3, distance: 19.6 },
  { bearing: 15.5, distance: 1.6 },
  { bearing: 130.5, distance: 16.6 },
  { bearing: 250.7, distance: 7 },
  { bearing: 348.7, distance: 2.6 },
  { bearing: 115.9, distance: 16.3 },
  { bearing: 242.6, distance: 3.8 },
  { bearing: 39.1, distance: 2.3 },
  { bearing: 136.4, distance: 1.6 },
  { bearing: 243.8, distance: 1.7 },
  // … 138 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpPolarScatterChart
      :data="data"
      angle-key="bearing"
      radius-key="distance"
      title="Sightings"
      unit="km"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ci=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpPolarScatterChart } from '@silverpoint/angular/polar-scatter-chart';

@Component({
  selector: 'app-root',
  imports: [SpPolarScatterChart],
  template: \`
    <div style="width: 480px">
      <sp-polar-scatter-chart
        [data]="data"
        angleKey="bearing"
        radiusKey="distance"
        title="Sightings"
        unit="km"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { bearing: 28, distance: 2.5 },
    { bearing: 149.6, distance: 1.4 },
    { bearing: 229.3, distance: 19.6 },
    { bearing: 15.5, distance: 1.6 },
    { bearing: 130.5, distance: 16.6 },
    { bearing: 250.7, distance: 7 },
    { bearing: 348.7, distance: 2.6 },
    { bearing: 115.9, distance: 16.3 },
    { bearing: 242.6, distance: 3.8 },
    { bearing: 39.1, distance: 2.3 },
    { bearing: 136.4, distance: 1.6 },
    { bearing: 243.8, distance: 1.7 },
    // … 138 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),wi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import polar_scatter_chart

DATA = [
    {"bearing": 28, "distance": 2.5},
    {"bearing": 149.6, "distance": 1.4},
    {"bearing": 229.3, "distance": 19.6},
    {"bearing": 15.5, "distance": 1.6},
    {"bearing": 130.5, "distance": 16.6},
    {"bearing": 250.7, "distance": 7},
    {"bearing": 348.7, "distance": 2.6},
    {"bearing": 115.9, "distance": 16.3},
    {"bearing": 242.6, "distance": 3.8},
    {"bearing": 39.1, "distance": 2.3},
    {"bearing": 136.4, "distance": 1.6},
    {"bearing": 243.8, "distance": 1.7},
    # … 138 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        polar_scatter_chart(
            data=DATA,
            angle_key="bearing",
            radius_key="distance",
            title="Sightings",
            unit="km",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ti=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_density_bin_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_density_bin_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-density-bin-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "density-bin-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-density-bin-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Ei=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { DensityBinChart } from '@silverpoint/react/density-bin-chart';

const data = [
  { x: 18.48, y: 44.44 },
  { x: 38.26, y: 64.71 },
  { x: 39.92, y: 61.68 },
  { x: 38.71, y: 58.23 },
  { x: 42.91, y: 56.15 },
  { x: 47.49, y: 71.55 },
  { x: 26.68, y: 41.44 },
  { x: 31.44, y: 62.22 },
  { x: 32.33, y: 55.33 },
  { x: 44.8, y: 73.12 },
  { x: 25.8, y: 32.3 },
  { x: 33.77, y: 60.57 },
  // … 1188 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <DensityBinChart
        data={data}
        xKey="x"
        yKey="y"
        binShape="hexagon"
        title="Point density"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Di=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpDensityBinChart } from '@silverpoint/vue/density-bin-chart';

const data = [
  { x: 18.48, y: 44.44 },
  { x: 38.26, y: 64.71 },
  { x: 39.92, y: 61.68 },
  { x: 38.71, y: 58.23 },
  { x: 42.91, y: 56.15 },
  { x: 47.49, y: 71.55 },
  { x: 26.68, y: 41.44 },
  { x: 31.44, y: 62.22 },
  { x: 32.33, y: 55.33 },
  { x: 44.8, y: 73.12 },
  { x: 25.8, y: 32.3 },
  { x: 33.77, y: 60.57 },
  // … 1188 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpDensityBinChart
      :data="data"
      x-key="x"
      y-key="y"
      bin-shape="hexagon"
      title="Point density"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Oi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpDensityBinChart } from '@silverpoint/angular/density-bin-chart';

@Component({
  selector: 'app-root',
  imports: [SpDensityBinChart],
  template: \`
    <div style="width: 480px">
      <sp-density-bin-chart
        [data]="data"
        xKey="x"
        yKey="y"
        binShape="hexagon"
        title="Point density"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 18.48, y: 44.44 },
    { x: 38.26, y: 64.71 },
    { x: 39.92, y: 61.68 },
    { x: 38.71, y: 58.23 },
    { x: 42.91, y: 56.15 },
    { x: 47.49, y: 71.55 },
    { x: 26.68, y: 41.44 },
    { x: 31.44, y: 62.22 },
    { x: 32.33, y: 55.33 },
    { x: 44.8, y: 73.12 },
    { x: 25.8, y: 32.3 },
    { x: 33.77, y: 60.57 },
    // … 1188 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),ki=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import density_bin_chart

DATA = [
    {"x": 18.48, "y": 44.44},
    {"x": 38.26, "y": 64.71},
    {"x": 39.92, "y": 61.68},
    {"x": 38.71, "y": 58.23},
    {"x": 42.91, "y": 56.15},
    {"x": 47.49, "y": 71.55},
    {"x": 26.68, "y": 41.44},
    {"x": 31.44, "y": 62.22},
    {"x": 32.33, "y": 55.33},
    {"x": 44.8, "y": 73.12},
    {"x": 25.8, "y": 32.3},
    {"x": 33.77, "y": 60.57},
    # … 1188 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        density_bin_chart(
            data=DATA,
            x_key="x",
            y_key="y",
            bin_shape="hexagon",
            title="Point density",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ai=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_contour_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_contour_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-contour-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "contour-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-contour-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),ji=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { ContourChart } from '@silverpoint/react/contour-chart';

const data = [
  { x: 18.48, y: 44.44 },
  { x: 38.26, y: 64.71 },
  { x: 39.92, y: 61.68 },
  { x: 38.71, y: 58.23 },
  { x: 42.91, y: 56.15 },
  { x: 47.49, y: 71.55 },
  { x: 26.68, y: 41.44 },
  { x: 31.44, y: 62.22 },
  { x: 32.33, y: 55.33 },
  { x: 44.8, y: 73.12 },
  { x: 25.8, y: 32.3 },
  { x: 33.77, y: 60.57 },
  // … 1188 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <ContourChart
        data={data}
        xKey="x"
        yKey="y"
        source="points"
        title="Point density"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Mi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpContourChart } from '@silverpoint/vue/contour-chart';

const data = [
  { x: 18.48, y: 44.44 },
  { x: 38.26, y: 64.71 },
  { x: 39.92, y: 61.68 },
  { x: 38.71, y: 58.23 },
  { x: 42.91, y: 56.15 },
  { x: 47.49, y: 71.55 },
  { x: 26.68, y: 41.44 },
  { x: 31.44, y: 62.22 },
  { x: 32.33, y: 55.33 },
  { x: 44.8, y: 73.12 },
  { x: 25.8, y: 32.3 },
  { x: 33.77, y: 60.57 },
  // … 1188 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpContourChart
      :data="data"
      x-key="x"
      y-key="y"
      source="points"
      title="Point density"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ni=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpContourChart } from '@silverpoint/angular/contour-chart';

@Component({
  selector: 'app-root',
  imports: [SpContourChart],
  template: \`
    <div style="width: 480px">
      <sp-contour-chart
        [data]="data"
        xKey="x"
        yKey="y"
        source="points"
        title="Point density"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 18.48, y: 44.44 },
    { x: 38.26, y: 64.71 },
    { x: 39.92, y: 61.68 },
    { x: 38.71, y: 58.23 },
    { x: 42.91, y: 56.15 },
    { x: 47.49, y: 71.55 },
    { x: 26.68, y: 41.44 },
    { x: 31.44, y: 62.22 },
    { x: 32.33, y: 55.33 },
    { x: 44.8, y: 73.12 },
    { x: 25.8, y: 32.3 },
    { x: 33.77, y: 60.57 },
    // … 1188 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Pi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import contour_chart

DATA = [
    {"x": 18.48, "y": 44.44},
    {"x": 38.26, "y": 64.71},
    {"x": 39.92, "y": 61.68},
    {"x": 38.71, "y": 58.23},
    {"x": 42.91, "y": 56.15},
    {"x": 47.49, "y": 71.55},
    {"x": 26.68, "y": 41.44},
    {"x": 31.44, "y": 62.22},
    {"x": 32.33, "y": 55.33},
    {"x": 44.8, "y": 73.12},
    {"x": 25.8, "y": 32.3},
    {"x": 33.77, "y": 60.57},
    # … 1188 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        contour_chart(
            data=DATA,
            x_key="x",
            y_key="y",
            source="points",
            title="Point density",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Fi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_delaunay_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_delaunay_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-delaunay-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "delaunay-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-delaunay-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Ii=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { DelaunayChart } from '@silverpoint/react/delaunay-chart';

const data = [
  { label: 'P01', x: 45, y: 27.3 },
  { label: 'P02', x: 37.4, y: 55.6 },
  { label: 'P03', x: 90.6, y: 39.1 },
  { label: 'P04', x: 27.4, y: 1.7 },
  { label: 'P05', x: 0.2, y: 31.8 },
  { label: 'P06', x: 40.8, y: 17.6 },
  { label: 'P07', x: 63.2, y: 56.9 },
  { label: 'P08', x: 65.5, y: 52.9 },
  { label: 'P09', x: 38.7, y: 42.3 },
  { label: 'P10', x: 6.1, y: 17.1 },
  { label: 'P11', x: 92.8, y: 39 },
  { label: 'P12', x: 54.3, y: 58 },
  // … 48 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <DelaunayChart
        data={data}
        xKey="x"
        yKey="y"
        labelKey="label"
        title="Stations"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Li=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpDelaunayChart } from '@silverpoint/vue/delaunay-chart';

const data = [
  { label: 'P01', x: 45, y: 27.3 },
  { label: 'P02', x: 37.4, y: 55.6 },
  { label: 'P03', x: 90.6, y: 39.1 },
  { label: 'P04', x: 27.4, y: 1.7 },
  { label: 'P05', x: 0.2, y: 31.8 },
  { label: 'P06', x: 40.8, y: 17.6 },
  { label: 'P07', x: 63.2, y: 56.9 },
  { label: 'P08', x: 65.5, y: 52.9 },
  { label: 'P09', x: 38.7, y: 42.3 },
  { label: 'P10', x: 6.1, y: 17.1 },
  { label: 'P11', x: 92.8, y: 39 },
  { label: 'P12', x: 54.3, y: 58 },
  // … 48 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpDelaunayChart
      :data="data"
      x-key="x"
      y-key="y"
      label-key="label"
      title="Stations"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ri=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpDelaunayChart } from '@silverpoint/angular/delaunay-chart';

@Component({
  selector: 'app-root',
  imports: [SpDelaunayChart],
  template: \`
    <div style="width: 480px">
      <sp-delaunay-chart
        [data]="data"
        xKey="x"
        yKey="y"
        labelKey="label"
        title="Stations"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { label: 'P01', x: 45, y: 27.3 },
    { label: 'P02', x: 37.4, y: 55.6 },
    { label: 'P03', x: 90.6, y: 39.1 },
    { label: 'P04', x: 27.4, y: 1.7 },
    { label: 'P05', x: 0.2, y: 31.8 },
    { label: 'P06', x: 40.8, y: 17.6 },
    { label: 'P07', x: 63.2, y: 56.9 },
    { label: 'P08', x: 65.5, y: 52.9 },
    { label: 'P09', x: 38.7, y: 42.3 },
    { label: 'P10', x: 6.1, y: 17.1 },
    { label: 'P11', x: 92.8, y: 39 },
    { label: 'P12', x: 54.3, y: 58 },
    // … 48 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),zi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import delaunay_chart

DATA = [
    {"label": "P01", "x": 45, "y": 27.3},
    {"label": "P02", "x": 37.4, "y": 55.6},
    {"label": "P03", "x": 90.6, "y": 39.1},
    {"label": "P04", "x": 27.4, "y": 1.7},
    {"label": "P05", "x": 0.2, "y": 31.8},
    {"label": "P06", "x": 40.8, "y": 17.6},
    {"label": "P07", "x": 63.2, "y": 56.9},
    {"label": "P08", "x": 65.5, "y": 52.9},
    {"label": "P09", "x": 38.7, "y": 42.3},
    {"label": "P10", "x": 6.1, "y": 17.1},
    {"label": "P11", "x": 92.8, "y": 39},
    {"label": "P12", "x": 54.3, "y": 58},
    # … 48 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        delaunay_chart(
            data=DATA,
            x_key="x",
            y_key="y",
            label_key="label",
            title="Stations",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Bi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_vector_field_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_vector_field_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-vector-field-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "vector-field-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-vector-field-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Vi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { VectorFieldChart } from '@silverpoint/react/vector-field-chart';

const data = [
  { x: 0, y: 0, u: 0.852, v: -1.246 },
  { x: 1, y: 0, u: 0.967, v: -1.264 },
  { x: 2, y: 0, u: 1.097, v: -1.266 },
  { x: 3, y: 0, u: 1.244, v: -1.244 },
  { x: 4, y: 0, u: 1.405, v: -1.189 },
  { x: 5, y: 0, u: 1.576, v: -1.091 },
  { x: 6, y: 0, u: 1.745, v: -0.94 },
  { x: 7, y: 0, u: 1.898, v: -0.73 },
  { x: 8, y: 0, u: 2.016, v: -0.465 },
  { x: 9, y: 0, u: 2.08, v: -0.16 },
  { x: 10, y: 0, u: 2.08, v: 0.16 },
  { x: 11, y: 0, u: 2.016, v: 0.465 },
  // … 268 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <VectorFieldChart
        data={data}
        xKey="x"
        yKey="y"
        uKey="u"
        vKey="v"
        title="Wind field"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Hi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpVectorFieldChart } from '@silverpoint/vue/vector-field-chart';

const data = [
  { x: 0, y: 0, u: 0.852, v: -1.246 },
  { x: 1, y: 0, u: 0.967, v: -1.264 },
  { x: 2, y: 0, u: 1.097, v: -1.266 },
  { x: 3, y: 0, u: 1.244, v: -1.244 },
  { x: 4, y: 0, u: 1.405, v: -1.189 },
  { x: 5, y: 0, u: 1.576, v: -1.091 },
  { x: 6, y: 0, u: 1.745, v: -0.94 },
  { x: 7, y: 0, u: 1.898, v: -0.73 },
  { x: 8, y: 0, u: 2.016, v: -0.465 },
  { x: 9, y: 0, u: 2.08, v: -0.16 },
  { x: 10, y: 0, u: 2.08, v: 0.16 },
  { x: 11, y: 0, u: 2.016, v: 0.465 },
  // … 268 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpVectorFieldChart
      :data="data"
      x-key="x"
      y-key="y"
      u-key="u"
      v-key="v"
      title="Wind field"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ui=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpVectorFieldChart } from '@silverpoint/angular/vector-field-chart';

@Component({
  selector: 'app-root',
  imports: [SpVectorFieldChart],
  template: \`
    <div style="width: 480px">
      <sp-vector-field-chart
        [data]="data"
        xKey="x"
        yKey="y"
        uKey="u"
        vKey="v"
        title="Wind field"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { x: 0, y: 0, u: 0.852, v: -1.246 },
    { x: 1, y: 0, u: 0.967, v: -1.264 },
    { x: 2, y: 0, u: 1.097, v: -1.266 },
    { x: 3, y: 0, u: 1.244, v: -1.244 },
    { x: 4, y: 0, u: 1.405, v: -1.189 },
    { x: 5, y: 0, u: 1.576, v: -1.091 },
    { x: 6, y: 0, u: 1.745, v: -0.94 },
    { x: 7, y: 0, u: 1.898, v: -0.73 },
    { x: 8, y: 0, u: 2.016, v: -0.465 },
    { x: 9, y: 0, u: 2.08, v: -0.16 },
    { x: 10, y: 0, u: 2.08, v: 0.16 },
    { x: 11, y: 0, u: 2.016, v: 0.465 },
    // … 268 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Wi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import vector_field_chart

DATA = [
    {"x": 0, "y": 0, "u": 0.852, "v": -1.246},
    {"x": 1, "y": 0, "u": 0.967, "v": -1.264},
    {"x": 2, "y": 0, "u": 1.097, "v": -1.266},
    {"x": 3, "y": 0, "u": 1.244, "v": -1.244},
    {"x": 4, "y": 0, "u": 1.405, "v": -1.189},
    {"x": 5, "y": 0, "u": 1.576, "v": -1.091},
    {"x": 6, "y": 0, "u": 1.745, "v": -0.94},
    {"x": 7, "y": 0, "u": 1.898, "v": -0.73},
    {"x": 8, "y": 0, "u": 2.016, "v": -0.465},
    {"x": 9, "y": 0, "u": 2.08, "v": -0.16},
    {"x": 10, "y": 0, "u": 2.08, "v": 0.16},
    {"x": 11, "y": 0, "u": 2.016, "v": 0.465},
    # … 268 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        vector_field_chart(
            data=DATA,
            x_key="x",
            y_key="y",
            u_key="u",
            v_key="v",
            title="Wind field",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Gi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let s=(0,d.useRef)(null);n.ref_chart_network_chart_download=s;let c=(0,d.useCallback)((e=>o([i(`_call_script`,{javascript_code:`(() => {
  const handle = refs["ref_chart_network_chart"]?.current;
  if (!handle || typeof handle.toSVGString !== "function") {
    console.warn("silverpoint: no chart with id chart-network-chart");
    return null;
  }
  const svg = handle.toSVGString();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "network-chart.svg";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return svg.length;
})()`,callback:null},{})],[e],{})),[o,i]);return a(u,{...r(t,{id:`chart-network-chart-download`,onClick:c,ref:s,size:`sm`,variant:`primary`})},e)});return e.displayName=`SpButton`,e})(),Ki=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { NetworkChart } from '@silverpoint/react/network-chart';

const data = [
  { source: 's05', target: 's02', weight: 5 },
  { source: 'p10', target: 'a06', weight: 1 },
  { source: 'p01', target: 'p07', weight: 5 },
  { source: 's06', target: 's04', weight: 1 },
  { source: 'p03', target: 'l06', weight: 1 },
  { source: 's08', target: 's05', weight: 5 },
  { source: 'a05', target: 'a07', weight: 2 },
  { source: 'p02', target: 'p01', weight: 3 },
  { source: 'a04', target: 'a02', weight: 5 },
  { source: 'l08', target: 's08', weight: 2 },
  { source: 'a04', target: 'a01', weight: 1 },
  { source: 'p03', target: 's09', weight: 5 },
  // … 78 more rows of the same shape
];

const nodes = [
  { id: 'a01', label: 'Archive 1', group: 'Archive' },
  { id: 'a02', label: 'Archive 2', group: 'Archive' },
  { id: 'a03', label: 'Archive 3', group: 'Archive' },
  { id: 'a04', label: 'Archive 4', group: 'Archive' },
  { id: 'a05', label: 'Archive 5', group: 'Archive' },
  { id: 'a06', label: 'Archive 6', group: 'Archive' },
  { id: 'a07', label: 'Archive 7', group: 'Archive' },
  { id: 'a08', label: 'Archive 8', group: 'Archive' },
  { id: 'a09', label: 'Archive 9', group: 'Archive' },
  { id: 'a10', label: 'Archive 10', group: 'Archive' },
  { id: 's01', label: 'Studio 1', group: 'Studio' },
  { id: 's02', label: 'Studio 2', group: 'Studio' },
  // … 28 more rows of the same shape
];

export default function App() {
  return (
    <div style={{ width: 480 }}>
      <NetworkChart
        data={data}
        sourceKey="source"
        targetKey="target"
        valueKey="weight"
        nodes={nodes}
        title="Library network"
      />
    </div>
  );
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),qi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`<script setup lang="ts">
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import { SpNetworkChart } from '@silverpoint/vue/network-chart';

const data = [
  { source: 's05', target: 's02', weight: 5 },
  { source: 'p10', target: 'a06', weight: 1 },
  { source: 'p01', target: 'p07', weight: 5 },
  { source: 's06', target: 's04', weight: 1 },
  { source: 'p03', target: 'l06', weight: 1 },
  { source: 's08', target: 's05', weight: 5 },
  { source: 'a05', target: 'a07', weight: 2 },
  { source: 'p02', target: 'p01', weight: 3 },
  { source: 'a04', target: 'a02', weight: 5 },
  { source: 'l08', target: 's08', weight: 2 },
  { source: 'a04', target: 'a01', weight: 1 },
  { source: 'p03', target: 's09', weight: 5 },
  // … 78 more rows of the same shape
];

const nodes = [
  { id: 'a01', label: 'Archive 1', group: 'Archive' },
  { id: 'a02', label: 'Archive 2', group: 'Archive' },
  { id: 'a03', label: 'Archive 3', group: 'Archive' },
  { id: 'a04', label: 'Archive 4', group: 'Archive' },
  { id: 'a05', label: 'Archive 5', group: 'Archive' },
  { id: 'a06', label: 'Archive 6', group: 'Archive' },
  { id: 'a07', label: 'Archive 7', group: 'Archive' },
  { id: 'a08', label: 'Archive 8', group: 'Archive' },
  { id: 'a09', label: 'Archive 9', group: 'Archive' },
  { id: 'a10', label: 'Archive 10', group: 'Archive' },
  { id: 's01', label: 'Studio 1', group: 'Studio' },
  { id: 's02', label: 'Studio 2', group: 'Studio' },
  // … 28 more rows of the same shape
];
<\/script>

<template>
  <div style="width: 480px">
    <SpNetworkChart
      :data="data"
      source-key="source"
      target-key="target"
      value-key="weight"
      :nodes="nodes"
      title="Library network"
    />
  </div>
</template>`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Ji=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`// src/styles.css:
//   @import '@silverpoint/fonts/fonts.css';
//   @import '@silverpoint/grounds/styles.css';

import { Component } from '@angular/core';
import { SpNetworkChart } from '@silverpoint/angular/network-chart';

@Component({
  selector: 'app-root',
  imports: [SpNetworkChart],
  template: \`
    <div style="width: 480px">
      <sp-network-chart
        [data]="data"
        sourceKey="source"
        targetKey="target"
        valueKey="weight"
        [nodes]="nodes"
        title="Library network"
      />
    </div>
  \`,
})
export class App {
  protected readonly data = [
    { source: 's05', target: 's02', weight: 5 },
    { source: 'p10', target: 'a06', weight: 1 },
    { source: 'p01', target: 'p07', weight: 5 },
    { source: 's06', target: 's04', weight: 1 },
    { source: 'p03', target: 'l06', weight: 1 },
    { source: 's08', target: 's05', weight: 5 },
    { source: 'a05', target: 'a07', weight: 2 },
    { source: 'p02', target: 'p01', weight: 3 },
    { source: 'a04', target: 'a02', weight: 5 },
    { source: 'l08', target: 's08', weight: 2 },
    { source: 'a04', target: 'a01', weight: 1 },
    { source: 'p03', target: 's09', weight: 5 },
    // … 78 more rows of the same shape
  ];
  protected readonly nodes = [
    { id: 'a01', label: 'Archive 1', group: 'Archive' },
    { id: 'a02', label: 'Archive 2', group: 'Archive' },
    { id: 'a03', label: 'Archive 3', group: 'Archive' },
    { id: 'a04', label: 'Archive 4', group: 'Archive' },
    { id: 'a05', label: 'Archive 5', group: 'Archive' },
    { id: 'a06', label: 'Archive 6', group: 'Archive' },
    { id: 'a07', label: 'Archive 7', group: 'Archive' },
    { id: 'a08', label: 'Archive 8', group: 'Archive' },
    { id: 'a09', label: 'Archive 9', group: 'Archive' },
    { id: 'a10', label: 'Archive 10', group: 'Archive' },
    { id: 's01', label: 'Studio 1', group: 'Studio' },
    { id: 's02', label: 'Studio 2', group: 'Studio' },
    // … 28 more rows of the same shape
  ];
}`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})(),Yi=(()=>{let e=(0,d.memo)(({children:e,...t})=>{let n=(0,d.useCallback)((e=>o([i(`_call_function`,{function:(()=>navigator?.clipboard?.writeText(`import reflex as rx
from reflex_silverpoint_react import network_chart

DATA = [
    {"source": "s05", "target": "s02", "weight": 5},
    {"source": "p10", "target": "a06", "weight": 1},
    {"source": "p01", "target": "p07", "weight": 5},
    {"source": "s06", "target": "s04", "weight": 1},
    {"source": "p03", "target": "l06", "weight": 1},
    {"source": "s08", "target": "s05", "weight": 5},
    {"source": "a05", "target": "a07", "weight": 2},
    {"source": "p02", "target": "p01", "weight": 3},
    {"source": "a04", "target": "a02", "weight": 5},
    {"source": "l08", "target": "s08", "weight": 2},
    {"source": "a04", "target": "a01", "weight": 1},
    {"source": "p03", "target": "s09", "weight": 5},
    # … 78 more rows of the same shape
]

NODES = [
    {"id": "a01", "label": "Archive 1", "group": "Archive"},
    {"id": "a02", "label": "Archive 2", "group": "Archive"},
    {"id": "a03", "label": "Archive 3", "group": "Archive"},
    {"id": "a04", "label": "Archive 4", "group": "Archive"},
    {"id": "a05", "label": "Archive 5", "group": "Archive"},
    {"id": "a06", "label": "Archive 6", "group": "Archive"},
    {"id": "a07", "label": "Archive 7", "group": "Archive"},
    {"id": "a08", "label": "Archive 8", "group": "Archive"},
    {"id": "a09", "label": "Archive 9", "group": "Archive"},
    {"id": "a10", "label": "Archive 10", "group": "Archive"},
    {"id": "s01", "label": "Studio 1", "group": "Studio"},
    {"id": "s02", "label": "Studio 2", "group": "Studio"},
    # … 28 more rows of the same shape
]


def index() -> rx.Component:
    return rx.box(
        network_chart(
            data=DATA,
            source_key="source",
            target_key="target",
            value_key="weight",
            nodes=NODES,
            title="Library network",
        ),
        width="480px",
    )


app = rx.App()
app.add_page(index)`)),callback:null},{})],[e],{})),[o,i]);return a(`button`,{...r(t,{className:`spw-copy`,onClick:n,title:`Copy to clipboard`,type:`button`})},e)});return e.displayName=`Button`,e})();export{Dn as $,A as $i,oi as $n,zi as $r,ne as $t,_e as A,Dr as Aa,sr as Ai,Ae as An,Ln as Ar,H as At,pe as B,hi as Bi,ft as Bn,Ve as Br,Cn as Bt,Yi as C,nr as Ca,kt as Ci,dt as Cn,Dt as Cr,Er as Ct,hr as D,ke as Da,ue as Di,Ie as Dn,Ke as Dr,mi as Dt,wi as E,jn as Ea,C as Ei,ji as En,di as Er,wn as Et,pt as F,y as Fa,Mr as Fi,Ji as Fn,en as Fr,Ot as Ft,Xr as G,f as Gi,L as Gn,ct as Gr,p as Gt,Q as H,ie as Hi,Kr as Hn,kr as Hr,gi as Ht,ir as I,qr as Ia,ei as Ii,Zr as In,ae as Ir,jt as It,Ge as J,Kn as Ji,cn as Jn,Qt as Jr,Yt as Jt,Qr as K,We as Ki,li as Kn,ge as Kr,$e as Kt,Nr as L,$r as La,we as Li,Wn as Ln,pn as Lr,mn as Lt,vr as M,Sr as Ma,ht as Mi,cr as Mn,R as Mr,si as Mt,Wt as N,En as Na,bi as Ni,ci as Nn,St as Nr,ar as Nt,h as O,X as Oa,Pn as Oi,j as On,An as Or,N as Ot,Re as P,Ft as Pa,Jr as Pi,Ei as Pn,Ne as Pr,se as Pt,lr as Q,T as Qi,or as Qn,yr as Qr,st as Qt,nn as R,F as Ri,yn as Rn,lt as Rr,Fe as Rt,ln as S,le as Sa,yt as Si,Se as Sn,$n as Sr,de as St,Vt as T,Hr as Ta,Ue as Ti,xt as Tn,Y as Tr,he as Tt,Oe as U,Gi as Ui,Hi as Un,_i as Ur,Pt as Ut,Qe as V,Bi as Vi,Ir as Vn,tr as Vr,Zt as Vt,ur as W,ye as Wi,fi as Wn,zr as Wr,Tr as Wt,Di as X,B as Xi,kn as Xn,S as Xr,vt as Xt,Je as Y,G as Yi,br as Yn,Rt as Yr,Wi as Yt,er as Z,Bt as Zi,mt as Zn,pr as Zr,Le as Zt,Ee as _,sn as _a,zt as _i,Gr as _n,Nn as _r,Te as _t,ri as a,_r as aa,Rr as ai,an,vi as ar,ee as at,Pr as b,Ti as ba,qi as bi,un as bn,xr as br,Ar as bt,qe as c,xn as ca,je as ci,te as cn,wt as cr,Ce as ct,D as d,Ai as da,pi as di,Xn as dn,bn as dr,V as dt,ze as ea,Ii as ei,ti as en,_ as er,qn as et,Br as f,at as fa,It as fi,Vi as fn,gt as fr,Jn as ft,Ct as g,At as ga,Ni as gi,jr as gn,on as gr,xi as gt,mr as h,Fi as ha,$t as hi,ki as hn,Ui as hr,Me as ht,E as i,Pe as ia,Vr as ii,On as in,wr as ir,rr as it,be as j,Vn as ja,$ as ji,Et as jn,g as jr,gr as jt,_t as k,ai as ka,fr as ki,nt as kn,U as kr,Li as kt,Jt as l,In as la,ii as li,Ur as ln,Si as lr,dn as lt,Ut as m,Tt as ma,Yr as mi,rn as mn,m as mr,He as mt,ve as n,gn as na,oe as ni,Lt as nn,ni as nr,fn as nt,q as o,b as oa,_n as oi,ce as on,vn as or,tt as ot,v as p,ui as pa,rt as pi,qt as pn,Ci as pr,Cr as pt,fe as q,Lr as qi,Mt as qn,De as qr,Mi as qt,ot as r,bt as ra,O as ri,it as rn,Or as rr,k as rt,Ht as s,et as sa,Wr as si,Qn as sn,Fr as sr,Pi as st,Rn as t,tn as ta,zn as ti,Mn as tn,I as tr,Fn as tt,Tn as u,me as ua,Be as ui,Gn as un,W as ur,M as ut,z as v,Gt as va,J as vi,Un as vn,hn as vr,xe as vt,x as w,ut as wa,dr as wi,Sn as wn,Oi as wr,Bn as wt,Ri as x,Zn as xa,P as xi,Yn as xn,re as xr,w as xt,Kt as y,Xt as ya,Nt as yi,Hn as yn,Z as yr,Xe as yt,Ki as z,Ye as zi,yi as zn,Ze as zr,K as zt};