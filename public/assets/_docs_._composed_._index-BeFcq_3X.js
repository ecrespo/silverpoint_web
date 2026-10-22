import{G as e,J as t,a as n}from"./components-B1lk-uNG.js";import{_ as r,s as i}from"./state-CGLhFzuZ.js";import{n as a}from"./emotion-react.browser.esm-BYj5ThIA.js";import"./context-BAeQthWz.js";import{t as o}from"./menu-BwNgKdV7.js";import{t as s}from"./copy-Cds54jvv.js";import{an as c}from"./styles-BU9xBO_L.js";import{ct as l,f as u,o as d,t as f}from"./ui-CqAo9em7.js";import{h as p,r as m}from"./chunk-6K4HSGXJ-BzdJ0f1J.js";import{a as h}from"./chunk-XZX2HZI7-DNyzqVm3.js";import{t as g}from"./chunk-MTXREPUM-CblKnpiv.js";import{n as _}from"./chunk-ARN5BO7U-NS8Fcx0e.js";import{$i as v,Ai as y,An as b,Ar as x,B as ee,Bn as te,Bt as ne,C as re,Cr as ie,Ct as ae,Di as oe,Dn as se,Dr as ce,E as le,Ei as ue,En as de,Er as fe,Et as pe,Ft as me,G as he,Gi as ge,Gn as _e,H as ve,Hn as ye,Ht as be,I as xe,In as S,Ji as C,Jn as w,Ki as T,Kr as E,Kt as D,L as O,Lr as k,M as A,Mi as j,Mr as M,Mt as Se,Ni as Ce,Nn as we,O as Te,Oi as Ee,On as De,Pi as Oe,Pn as ke,Pt as Ae,Q as je,Qi as Me,Qt as Ne,R as Pe,Ri as Fe,Rn as Ie,Rt as Le,S as Re,Sn as ze,Ut as Be,V as Ve,Vn as He,Wn as Ue,Wr as We,Xi as Ge,Xn as Ke,Xr as qe,Yn as Je,Yr as Ye,Zn as Xe,Zr as Ze,_ as Qe,_a as $e,_i as et,_n as tt,a as nt,aa as rt,an as it,ar as at,b as ot,ba as st,bn as ct,c as lt,cr as ut,ct as dt,dn as ft,dr as pt,dt as mt,ea as ht,fa as gt,fr as _t,ft as vt,ga as yt,gi as N,gr as bt,gt as xt,ha as St,hi as Ct,hn as wt,hr as Tt,in as Et,ir as Dt,ji as Ot,jn as kt,ki as At,kn as jt,kt as Mt,ln as Nt,lt as Pt,m as Ft,ma as It,mi as Lt,na as Rt,nn as zt,nr as Bt,o as Vt,oa as P,on as Ht,or as Ut,ot as Wt,pn as Gt,qn as Kt,qr as F,ra as qt,rn as Jt,rt as Yt,ta as Xt,tn as Zt,un as Qt,ut as $t,va as en,vi as tn,vr as nn,vt as rn,w as an,wi as on,wt as sn,xi as cn,xn as ln,xt as un,y as dn,ya as fn,yt as pn,zi as mn,zr as hn,zt as gn}from"./docs-DCrg4Muh.js";var I=t(e(),1),L={class:`className`,for:`htmlFor`,readonly:`readOnly`,tabindex:`tabIndex`};function R(e){let t={};for(let n of(e||``).split(`;`)){let e=n.indexOf(`:`);e>0&&(t[n.slice(0,e).trim()]=n.slice(e+1).trim())}return t}function z(e,t,n){if(`text`in e)return e.text;if(`slot`in e)return e.slot===`content`?t:null;let r={};for(let[t,n]of Object.entries(e.attrs))n!==void 0&&(r[L[t]||t]=t===`style`?R(n):n);if(n){let{style:e,...t}=n;Object.assign(r,t),e&&(r.style={...r.style||{},...e})}return(0,I.createElement)(e.tag,r,...e.children.map(e=>z(e,t)))}function B(){let[e,t]=(0,I.useState)(!1);return(0,I.useEffect)(()=>{if(typeof matchMedia!=`function`)return;let e=matchMedia(c),n=()=>t(e.matches);return n(),e.addEventListener?.(`change`,n),()=>e.removeEventListener?.(`change`,n)},[]),e}(0,I.forwardRef)(function({ground:e,substrate:t,mode:n,size:r,seed:i,palette:a,variant:o,chevron:s,disabled:c,label:f,children:p,className:m,id:h,...g},_){let v=B(),y={ground:e,substrate:t,mode:n,size:r,seed:i,palette:a,variant:o,disabled:c,label:f,className:m,id:h,type:`button`},b=d(y,{forcedPrecision:v}),x=u(y,b,{text:typeof p==`string`||typeof p==`number`?String(p):p==null?void 0:`·`});return z(s?{...x,children:[...x.children,{tag:`svg`,attrs:{part:`sp-mark`,"data-glyph":`chevronDown`,viewBox:`0 0 16 16`,"aria-hidden":`true`},children:[{tag:`path`,attrs:{d:l.chevronDown},children:[]}]}]}:x,p,{...g,ref:_})});function V(){let e=(0,I.useRef)(null);i.ref_about=e;let t=(0,I.useRef)(null);i.ref_surface=t;let n=(0,I.useRef)(null);i.ref_glyph=n;let c=(0,I.useRef)(null);i.ref_table=c;let l=(0,I.useRef)(null);i.ref_pagination=l;let u=(0,I.useRef)(null);i.ref_breadcrumb=u;let d=(0,I.useRef)(null);i.ref_avatar=d;let L=(0,I.useRef)(null);i.ref_statistic=L;let R=(0,I.useRef)(null);i.ref_descriptions=R;let z=(0,I.useRef)(null);i.ref_timeline_list=z;let B=(0,I.useRef)(null);i.ref_collapse=B;let V=(0,I.useRef)(null);i.ref_empty=V;let H=(0,I.useRef)(null);i.ref_result=H;let U=(0,I.useRef)(null);i.ref_textarea=U;let W=(0,I.useRef)(null);i.ref_input_number=W;let G=(0,I.useRef)(null);i.ref_modal=G;let K=(0,I.useRef)(null);i.ref_drawer=K;let q=(0,I.useRef)(null);i.ref_popover=q;let J=(0,I.useRef)(null);i.ref_tooltip=J;let Y=(0,I.useRef)(null);i.ref_select=Y;let X=(0,I.useRef)(null);i.ref_dropdown_menu=X;let Z=(0,I.useRef)(null);i.ref_toast=Z;let Q=(0,I.useRef)(null);i.ref_trigger=Q;let $=(0,I.useRef)(null);return i.ref_main=$,a(I.Fragment,{},a(`div`,{className:`spw-site`},a(r,{className:`spw-skip`,to:`#main`},`Skip to content`),a(`header`,{className:`spw-header`},a(r,{className:`spw-brand`,to:`/`},a(`svg`,{"aria-hidden":`true`,className:`spw-mark`,height:`26`,viewBox:`0 0 32 32`,width:`26`},a(`g`,{stroke:`currentColor`},a(`line`,{css:{strokeWidth:`0.8`},x1:`4.75`,x2:`18.25`,y1:`13.75`,y2:`27.25`}),a(`line`,{css:{strokeWidth:`0.8`},x1:`7.00`,x2:`20.50`,y1:`11.50`,y2:`25.00`}),a(`line`,{css:{strokeWidth:`0.8`},x1:`9.25`,x2:`22.75`,y1:`9.25`,y2:`22.75`}),a(`line`,{css:{strokeWidth:`0.8`},x1:`11.50`,x2:`25.00`,y1:`7.00`,y2:`20.50`}),a(`line`,{css:{strokeWidth:`0.8`},x1:`13.75`,x2:`27.25`,y1:`4.75`,y2:`18.25`})),a(`path`,{css:{fill:`none`,stroke:`currentColor`,strokeWidth:`1.1`},d:`M16 2.5 C22 8.4 25.6 12 29.5 16 C23.4 22 20 25.6 16 29.5 C10.1 23.6 6.4 20 2.5 16 C8.6 10 12 6.4 16 2.5Z`}),a(`circle`,{css:{fill:`#fff`,stroke:`currentColor`,strokeWidth:`1.1`},cx:`16`,cy:`16`,r:`3.2`})),a(`span`,{className:`spw-brand-name`},`silverpoint`)),a(`nav`,{"aria-label":`Main`,className:`spw-nav`},a(r,{to:`/docs`},`Docs`),a(r,{to:`/gallery`},`Gallery`),a(r,{to:`/charts`},`Charts`),a(r,{to:`/components`},`Components`),a(r,{to:`/docs/dashboard`},`Dashboard`),a(r,{to:`/docs/ai`},`Use with AI`),a(r,{to:`/packages`},`Packages`),a(r,{to:`/versions`},`Versions`),a(r,{to:`/support`},`Report a bug`)),a(`div`,{className:`spw-header-tools`},a(`details`,{className:`spw-version`},a(`summary`,{className:`spw-version-summary`},`v0.8.0`,a(`small`,{},` latest`)),a(`div`,{className:`spw-version-menu`},a(r,{to:`/versions#v0-8-0`},a(`span`,{},`v0.8.0`),a(`small`,{},`2026-10-21`)),a(r,{to:`/versions#v0-7-0`},a(`span`,{},`v0.7.0`),a(`small`,{},`2026-10-20`)),a(r,{to:`/versions#v0-6-0`},a(`span`,{},`v0.6.0`),a(`small`,{},`2026-10-10`)),a(r,{to:`/versions#v0-3-0`},a(`span`,{},`v0.3.0`),a(`small`,{},`2026-09-30`)),a(r,{to:`/versions#v0-2-0`},a(`span`,{},`v0.2.0`),a(`small`,{},`2026-09-26`)),a(r,{to:`/versions#v0-1-1`},a(`span`,{},`v0.1.1`),a(`small`,{},`2026-09-25`)),a(r,{to:`/versions#v0-1-0`},a(`span`,{},`v0.1.0`),a(`small`,{},`2026-09-25`)),a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/releases`},`All releases on GitHub ↗`))),a(r,{"aria-label":`silverpoint on GitHub`,className:`spw-icon-link`,rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint`},a(`svg`,{"aria-hidden":`true`,className:`spw-gh`,css:{fill:`currentColor`},height:`20`,viewBox:`0 0 16 16`,width:`20`},a(`path`,{d:`M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z`}))),a(r,{"aria-label":`silverpoint on npm`,className:`spw-icon-link`,rel:`noopener noreferrer`,target:`_blank`,to:`https://www.npmjs.com/search?q=silverpoint`},a(`span`,{className:`spw-npm`},`npm`))),a(`details`,{className:`spw-burger`},a(`summary`,{"aria-label":`Menu`},a(o,{size:22})),a(`nav`,{},a(r,{to:`/docs`},`Docs`),a(r,{to:`/gallery`},`Gallery`),a(r,{to:`/charts`},`Charts`),a(r,{to:`/components`},`Components`),a(r,{to:`/docs/dashboard`},`Dashboard`),a(r,{to:`/docs/ai`},`Use with AI`),a(r,{to:`/packages`},`Packages`),a(r,{to:`/versions`},`Versions`),a(r,{to:`/support`},`Report a bug`)))),a(`div`,{className:`spw-docs`},a(`details`,{className:`spw-sidebar-mobile`},a(`summary`,{},`Documentation menu`),a(`nav`,{"aria-label":`Documentation`,className:`spw-sidebar`},a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`Getting started`),a(r,{className:`spw-side-link`,to:`/docs`},`Overview`),a(r,{className:`spw-side-link`,to:`/docs/installation`},`Installation`),a(r,{className:`spw-side-link`,to:`/docs/react`},`React`),a(r,{className:`spw-side-link`,to:`/docs/vue`},`Vue`),a(r,{className:`spw-side-link`,to:`/docs/angular`},`Angular`),a(r,{className:`spw-side-link`,to:`/docs/reflex`},`Reflex (Python)`)),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`Concepts`),a(r,{className:`spw-side-link`,to:`/docs/grounds`},`Grounds & substrates`),a(r,{className:`spw-side-link`,to:`/docs/precision`},`Ink & precision`),a(r,{className:`spw-side-link`,to:`/docs/props`},`Common props`),a(r,{className:`spw-side-link`,to:`/docs/interaction`},`Interaction & readouts`),a(r,{className:`spw-side-link`,to:`/docs/export`},`Export & imperative handle`),a(r,{className:`spw-side-link`,to:`/docs/dashboard`},`Dashboards`),a(r,{className:`spw-side-link`,to:`/docs/drill-down`},`Drill-down & hierarchies`),a(r,{className:`spw-side-link`,to:`/docs/ui`},`UI components`),a(r,{className:`spw-side-link`,to:`/docs/ssr`},`Server rendering`),a(r,{className:`spw-side-link`,to:`/docs/accessibility`},`Accessibility`),a(r,{className:`spw-side-link`,to:`/docs/tailwind`},`Tailwind preset`)),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`New in 0.8`),a(r,{className:`spw-side-link`,to:`/docs/ai`},`Use with AI`)),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`Charts · 60`),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Lines · 4`),a(r,{className:`spw-side-link`,to:`/charts/line-chart`},`LineChart`),a(r,{className:`spw-side-link`,to:`/charts/step-chart`},`StepChart`),a(r,{className:`spw-side-link`,to:`/charts/sparkline-rows`},`SparklineRows`),a(r,{className:`spw-side-link`,to:`/charts/kpi-card`},`KpiCard`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Bars · 8`),a(r,{className:`spw-side-link`,to:`/charts/bar-chart`},`BarChart`),a(r,{className:`spw-side-link`,to:`/charts/stacked-bar-chart`},`StackedBarChart`),a(r,{className:`spw-side-link`,to:`/charts/composed-chart`},`ComposedChart`),a(r,{className:`spw-side-link`,to:`/charts/waterfall-chart`},`WaterfallChart`),a(r,{className:`spw-side-link`,to:`/charts/funnel-chart`},`FunnelChart`),a(r,{className:`spw-side-link`,to:`/charts/bullet-chart`},`BulletChart`),a(r,{className:`spw-side-link`,to:`/charts/pyramid-chart`},`PyramidChart`),a(r,{className:`spw-side-link`,to:`/charts/candlestick-chart`},`CandlestickChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Areas · 3`),a(r,{className:`spw-side-link`,to:`/charts/area-chart`},`AreaChart`),a(r,{className:`spw-side-link`,to:`/charts/range-band-chart`},`RangeBandChart`),a(r,{className:`spw-side-link`,to:`/charts/stream-chart`},`StreamChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Points & grids · 5`),a(r,{className:`spw-side-link`,to:`/charts/scatter-chart`},`ScatterChart`),a(r,{className:`spw-side-link`,to:`/charts/bubble-chart`},`BubbleChart`),a(r,{className:`spw-side-link`,to:`/charts/heatmap-chart`},`HeatmapChart`),a(r,{className:`spw-side-link`,to:`/charts/treemap-chart`},`TreemapChart`),a(r,{className:`spw-side-link`,to:`/charts/activity-grid`},`ActivityGrid`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Flows · 2`),a(r,{className:`spw-side-link`,to:`/charts/sankey-chart`},`SankeyChart`),a(r,{className:`spw-side-link`,to:`/charts/chord-ring`},`ChordRing`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Radial · 11`),a(r,{className:`spw-side-link`,to:`/charts/donut-chart`},`DonutChart`),a(r,{className:`spw-side-link`,to:`/charts/radar-chart`},`RadarChart`),a(r,{className:`spw-side-link`,to:`/charts/polar-bar-chart`},`PolarBarChart`),a(r,{className:`spw-side-link`,to:`/charts/radial-arc-group`},`RadialArcGroup`),a(r,{className:`spw-side-link`,to:`/charts/radial-rings`},`RadialRings`),a(r,{className:`spw-side-link`,to:`/charts/gauge-arc`},`GaugeArc`),a(r,{className:`spw-side-link`,to:`/charts/meter-chart`},`MeterChart`),a(r,{className:`spw-side-link`,to:`/charts/coxcomb-chart`},`CoxcombChart`),a(r,{className:`spw-side-link`,to:`/charts/wind-rose`},`WindRose`),a(r,{className:`spw-side-link`,to:`/charts/volvelle-chart`},`VolvelleChart`),a(r,{className:`spw-side-link`,to:`/charts/orbit-chart`},`OrbitChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Distributions & comparisons · 14`),a(r,{className:`spw-side-link`,to:`/charts/histogram-chart`},`HistogramChart`),a(r,{className:`spw-side-link`,to:`/charts/ecdf-chart`},`EcdfChart`),a(r,{className:`spw-side-link`,to:`/charts/box-plot-chart`},`BoxPlotChart`),a(r,{className:`spw-side-link`,to:`/charts/violin-chart`},`ViolinChart`),a(r,{className:`spw-side-link`,to:`/charts/ridgeline-chart`},`RidgelineChart`),a(r,{className:`spw-side-link`,to:`/charts/beeswarm-chart`},`BeeswarmChart`),a(r,{className:`spw-side-link`,to:`/charts/lollipop-chart`},`LollipopChart`),a(r,{className:`spw-side-link`,to:`/charts/dumbbell-chart`},`DumbbellChart`),a(r,{className:`spw-side-link`,to:`/charts/slope-chart`},`SlopeChart`),a(r,{className:`spw-side-link`,to:`/charts/bump-chart`},`BumpChart`),a(r,{className:`spw-side-link`,to:`/charts/error-bar-chart`},`ErrorBarChart`),a(r,{className:`spw-side-link`,to:`/charts/interval-chart`},`IntervalChart`),a(r,{className:`spw-side-link`,to:`/charts/diverging-bar-chart`},`DivergingBarChart`),a(r,{className:`spw-side-link`,to:`/charts/connected-scatter-chart`},`ConnectedScatterChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Hierarchies & dimensions · 8`),a(r,{className:`spw-side-link`,to:`/charts/waffle-chart`},`WaffleChart`),a(r,{className:`spw-side-link`,to:`/charts/marimekko-chart`},`MarimekkoChart`),a(r,{className:`spw-side-link`,to:`/charts/squarified-treemap`},`SquarifiedTreemap`),a(r,{className:`spw-side-link`,to:`/charts/sunburst-chart`},`SunburstChart`),a(r,{className:`spw-side-link`,to:`/charts/tree-chart`},`TreeChart`),a(r,{className:`spw-side-link`,to:`/charts/parallel-coordinates-chart`},`ParallelCoordinatesChart`),a(r,{className:`spw-side-link`,to:`/charts/polar-line-chart`},`PolarLineChart`),a(r,{className:`spw-side-link`,to:`/charts/polar-scatter-chart`},`PolarScatterChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Fields & networks · 5`),a(r,{className:`spw-side-link`,to:`/charts/density-bin-chart`},`DensityBinChart`),a(r,{className:`spw-side-link`,to:`/charts/contour-chart`},`ContourChart`),a(r,{className:`spw-side-link`,to:`/charts/delaunay-chart`},`DelaunayChart`),a(r,{className:`spw-side-link`,to:`/charts/vector-field-chart`},`VectorFieldChart`),a(r,{className:`spw-side-link`,to:`/charts/network-chart`},`NetworkChart`))),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`UI components · 38`),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Actions · 1`),a(r,{className:`spw-side-link`,to:`/components/button`},`Button`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Data entry · 7`),a(r,{className:`spw-side-link`,to:`/components/input`},`Input`),a(r,{className:`spw-side-link`,to:`/components/checkbox`},`Checkbox`),a(r,{className:`spw-side-link`,to:`/components/radio-group`},`RadioGroup`),a(r,{className:`spw-side-link`,to:`/components/switch`},`Switch`),a(r,{className:`spw-side-link`,to:`/components/slider`},`Slider`),a(r,{className:`spw-side-link`,to:`/components/rate`},`Rate`),a(r,{className:`spw-side-link`,to:`/components/segmented`},`Segmented`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Navigation · 2`),a(r,{className:`spw-side-link`,to:`/components/tabs`},`Tabs`),a(r,{className:`spw-side-link`,to:`/components/steps`},`Steps`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Data display · 4`),a(r,{className:`spw-side-link`,to:`/components/card`},`Card`),a(r,{className:`spw-side-link`,to:`/components/tag`},`Tag`),a(r,{className:`spw-side-link`,to:`/components/badge`},`Badge`),a(r,{className:`spw-side-link`,to:`/components/divider`},`Divider`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Feedback · 3`),a(r,{className:`spw-side-link`,to:`/components/progress`},`Progress`),a(r,{className:`spw-side-link`,to:`/components/alert`},`Alert`),a(r,{className:`spw-side-link`,to:`/components/skeleton`},`Skeleton`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Composed · 14`),a(r,{className:`spw-side-link`,to:`/components/surface`},`SpSurface`),a(r,{className:`spw-side-link`,to:`/components/glyph`},`SpGlyph`),a(r,{className:`spw-side-link`,to:`/components/table`},`SpTable`),a(r,{className:`spw-side-link`,to:`/components/pagination`},`SpPagination`),a(r,{className:`spw-side-link`,to:`/components/breadcrumb`},`SpBreadcrumb`),a(r,{className:`spw-side-link`,to:`/components/avatar`},`SpAvatar`),a(r,{className:`spw-side-link`,to:`/components/statistic`},`SpStatistic`),a(r,{className:`spw-side-link`,to:`/components/descriptions`},`SpDescriptions`),a(r,{className:`spw-side-link`,to:`/components/timeline-list`},`SpTimelineList`),a(r,{className:`spw-side-link`,to:`/components/collapse`},`SpCollapse`),a(r,{className:`spw-side-link`,to:`/components/empty`},`SpEmpty`),a(r,{className:`spw-side-link`,to:`/components/result`},`SpResult`),a(r,{className:`spw-side-link`,to:`/components/textarea`},`SpTextarea`),a(r,{className:`spw-side-link`,to:`/components/input-number`},`SpInputNumber`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Overlays · 7`),a(r,{className:`spw-side-link`,to:`/components/modal`},`SpModal`),a(r,{className:`spw-side-link`,to:`/components/drawer`},`SpDrawer`),a(r,{className:`spw-side-link`,to:`/components/popover`},`SpPopover`),a(r,{className:`spw-side-link`,to:`/components/tooltip`},`SpTooltip`),a(r,{className:`spw-side-link`,to:`/components/select`},`SpSelect`),a(r,{className:`spw-side-link`,to:`/components/dropdown-menu`},`SpDropdownMenu`),a(r,{className:`spw-side-link`,to:`/components/toast`},`SpToast`))),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`New in 0.7`),a(r,{className:`spw-side-link`,to:`/docs/palettes`},`Palettes`),a(r,{className:`spw-side-link is-current`,to:`/docs/composed`},`Composed components`),a(r,{className:`spw-side-link`,to:`/docs/timeline`},`Timeline`)))),a(`aside`,{className:`spw-sidebar-col`},a(`nav`,{"aria-label":`Documentation`,className:`spw-sidebar`},a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`Getting started`),a(r,{className:`spw-side-link`,to:`/docs`},`Overview`),a(r,{className:`spw-side-link`,to:`/docs/installation`},`Installation`),a(r,{className:`spw-side-link`,to:`/docs/react`},`React`),a(r,{className:`spw-side-link`,to:`/docs/vue`},`Vue`),a(r,{className:`spw-side-link`,to:`/docs/angular`},`Angular`),a(r,{className:`spw-side-link`,to:`/docs/reflex`},`Reflex (Python)`)),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`Concepts`),a(r,{className:`spw-side-link`,to:`/docs/grounds`},`Grounds & substrates`),a(r,{className:`spw-side-link`,to:`/docs/precision`},`Ink & precision`),a(r,{className:`spw-side-link`,to:`/docs/props`},`Common props`),a(r,{className:`spw-side-link`,to:`/docs/interaction`},`Interaction & readouts`),a(r,{className:`spw-side-link`,to:`/docs/export`},`Export & imperative handle`),a(r,{className:`spw-side-link`,to:`/docs/dashboard`},`Dashboards`),a(r,{className:`spw-side-link`,to:`/docs/drill-down`},`Drill-down & hierarchies`),a(r,{className:`spw-side-link`,to:`/docs/ui`},`UI components`),a(r,{className:`spw-side-link`,to:`/docs/ssr`},`Server rendering`),a(r,{className:`spw-side-link`,to:`/docs/accessibility`},`Accessibility`),a(r,{className:`spw-side-link`,to:`/docs/tailwind`},`Tailwind preset`)),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`New in 0.8`),a(r,{className:`spw-side-link`,to:`/docs/ai`},`Use with AI`)),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`Charts · 60`),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Lines · 4`),a(r,{className:`spw-side-link`,to:`/charts/line-chart`},`LineChart`),a(r,{className:`spw-side-link`,to:`/charts/step-chart`},`StepChart`),a(r,{className:`spw-side-link`,to:`/charts/sparkline-rows`},`SparklineRows`),a(r,{className:`spw-side-link`,to:`/charts/kpi-card`},`KpiCard`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Bars · 8`),a(r,{className:`spw-side-link`,to:`/charts/bar-chart`},`BarChart`),a(r,{className:`spw-side-link`,to:`/charts/stacked-bar-chart`},`StackedBarChart`),a(r,{className:`spw-side-link`,to:`/charts/composed-chart`},`ComposedChart`),a(r,{className:`spw-side-link`,to:`/charts/waterfall-chart`},`WaterfallChart`),a(r,{className:`spw-side-link`,to:`/charts/funnel-chart`},`FunnelChart`),a(r,{className:`spw-side-link`,to:`/charts/bullet-chart`},`BulletChart`),a(r,{className:`spw-side-link`,to:`/charts/pyramid-chart`},`PyramidChart`),a(r,{className:`spw-side-link`,to:`/charts/candlestick-chart`},`CandlestickChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Areas · 3`),a(r,{className:`spw-side-link`,to:`/charts/area-chart`},`AreaChart`),a(r,{className:`spw-side-link`,to:`/charts/range-band-chart`},`RangeBandChart`),a(r,{className:`spw-side-link`,to:`/charts/stream-chart`},`StreamChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Points & grids · 5`),a(r,{className:`spw-side-link`,to:`/charts/scatter-chart`},`ScatterChart`),a(r,{className:`spw-side-link`,to:`/charts/bubble-chart`},`BubbleChart`),a(r,{className:`spw-side-link`,to:`/charts/heatmap-chart`},`HeatmapChart`),a(r,{className:`spw-side-link`,to:`/charts/treemap-chart`},`TreemapChart`),a(r,{className:`spw-side-link`,to:`/charts/activity-grid`},`ActivityGrid`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Flows · 2`),a(r,{className:`spw-side-link`,to:`/charts/sankey-chart`},`SankeyChart`),a(r,{className:`spw-side-link`,to:`/charts/chord-ring`},`ChordRing`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Radial · 11`),a(r,{className:`spw-side-link`,to:`/charts/donut-chart`},`DonutChart`),a(r,{className:`spw-side-link`,to:`/charts/radar-chart`},`RadarChart`),a(r,{className:`spw-side-link`,to:`/charts/polar-bar-chart`},`PolarBarChart`),a(r,{className:`spw-side-link`,to:`/charts/radial-arc-group`},`RadialArcGroup`),a(r,{className:`spw-side-link`,to:`/charts/radial-rings`},`RadialRings`),a(r,{className:`spw-side-link`,to:`/charts/gauge-arc`},`GaugeArc`),a(r,{className:`spw-side-link`,to:`/charts/meter-chart`},`MeterChart`),a(r,{className:`spw-side-link`,to:`/charts/coxcomb-chart`},`CoxcombChart`),a(r,{className:`spw-side-link`,to:`/charts/wind-rose`},`WindRose`),a(r,{className:`spw-side-link`,to:`/charts/volvelle-chart`},`VolvelleChart`),a(r,{className:`spw-side-link`,to:`/charts/orbit-chart`},`OrbitChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Distributions & comparisons · 14`),a(r,{className:`spw-side-link`,to:`/charts/histogram-chart`},`HistogramChart`),a(r,{className:`spw-side-link`,to:`/charts/ecdf-chart`},`EcdfChart`),a(r,{className:`spw-side-link`,to:`/charts/box-plot-chart`},`BoxPlotChart`),a(r,{className:`spw-side-link`,to:`/charts/violin-chart`},`ViolinChart`),a(r,{className:`spw-side-link`,to:`/charts/ridgeline-chart`},`RidgelineChart`),a(r,{className:`spw-side-link`,to:`/charts/beeswarm-chart`},`BeeswarmChart`),a(r,{className:`spw-side-link`,to:`/charts/lollipop-chart`},`LollipopChart`),a(r,{className:`spw-side-link`,to:`/charts/dumbbell-chart`},`DumbbellChart`),a(r,{className:`spw-side-link`,to:`/charts/slope-chart`},`SlopeChart`),a(r,{className:`spw-side-link`,to:`/charts/bump-chart`},`BumpChart`),a(r,{className:`spw-side-link`,to:`/charts/error-bar-chart`},`ErrorBarChart`),a(r,{className:`spw-side-link`,to:`/charts/interval-chart`},`IntervalChart`),a(r,{className:`spw-side-link`,to:`/charts/diverging-bar-chart`},`DivergingBarChart`),a(r,{className:`spw-side-link`,to:`/charts/connected-scatter-chart`},`ConnectedScatterChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Hierarchies & dimensions · 8`),a(r,{className:`spw-side-link`,to:`/charts/waffle-chart`},`WaffleChart`),a(r,{className:`spw-side-link`,to:`/charts/marimekko-chart`},`MarimekkoChart`),a(r,{className:`spw-side-link`,to:`/charts/squarified-treemap`},`SquarifiedTreemap`),a(r,{className:`spw-side-link`,to:`/charts/sunburst-chart`},`SunburstChart`),a(r,{className:`spw-side-link`,to:`/charts/tree-chart`},`TreeChart`),a(r,{className:`spw-side-link`,to:`/charts/parallel-coordinates-chart`},`ParallelCoordinatesChart`),a(r,{className:`spw-side-link`,to:`/charts/polar-line-chart`},`PolarLineChart`),a(r,{className:`spw-side-link`,to:`/charts/polar-scatter-chart`},`PolarScatterChart`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Fields & networks · 5`),a(r,{className:`spw-side-link`,to:`/charts/density-bin-chart`},`DensityBinChart`),a(r,{className:`spw-side-link`,to:`/charts/contour-chart`},`ContourChart`),a(r,{className:`spw-side-link`,to:`/charts/delaunay-chart`},`DelaunayChart`),a(r,{className:`spw-side-link`,to:`/charts/vector-field-chart`},`VectorFieldChart`),a(r,{className:`spw-side-link`,to:`/charts/network-chart`},`NetworkChart`))),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`UI components · 38`),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Actions · 1`),a(r,{className:`spw-side-link`,to:`/components/button`},`Button`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Data entry · 7`),a(r,{className:`spw-side-link`,to:`/components/input`},`Input`),a(r,{className:`spw-side-link`,to:`/components/checkbox`},`Checkbox`),a(r,{className:`spw-side-link`,to:`/components/radio-group`},`RadioGroup`),a(r,{className:`spw-side-link`,to:`/components/switch`},`Switch`),a(r,{className:`spw-side-link`,to:`/components/slider`},`Slider`),a(r,{className:`spw-side-link`,to:`/components/rate`},`Rate`),a(r,{className:`spw-side-link`,to:`/components/segmented`},`Segmented`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Navigation · 2`),a(r,{className:`spw-side-link`,to:`/components/tabs`},`Tabs`),a(r,{className:`spw-side-link`,to:`/components/steps`},`Steps`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Data display · 4`),a(r,{className:`spw-side-link`,to:`/components/card`},`Card`),a(r,{className:`spw-side-link`,to:`/components/tag`},`Tag`),a(r,{className:`spw-side-link`,to:`/components/badge`},`Badge`),a(r,{className:`spw-side-link`,to:`/components/divider`},`Divider`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Feedback · 3`),a(r,{className:`spw-side-link`,to:`/components/progress`},`Progress`),a(r,{className:`spw-side-link`,to:`/components/alert`},`Alert`),a(r,{className:`spw-side-link`,to:`/components/skeleton`},`Skeleton`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Composed · 14`),a(r,{className:`spw-side-link`,to:`/components/surface`},`SpSurface`),a(r,{className:`spw-side-link`,to:`/components/glyph`},`SpGlyph`),a(r,{className:`spw-side-link`,to:`/components/table`},`SpTable`),a(r,{className:`spw-side-link`,to:`/components/pagination`},`SpPagination`),a(r,{className:`spw-side-link`,to:`/components/breadcrumb`},`SpBreadcrumb`),a(r,{className:`spw-side-link`,to:`/components/avatar`},`SpAvatar`),a(r,{className:`spw-side-link`,to:`/components/statistic`},`SpStatistic`),a(r,{className:`spw-side-link`,to:`/components/descriptions`},`SpDescriptions`),a(r,{className:`spw-side-link`,to:`/components/timeline-list`},`SpTimelineList`),a(r,{className:`spw-side-link`,to:`/components/collapse`},`SpCollapse`),a(r,{className:`spw-side-link`,to:`/components/empty`},`SpEmpty`),a(r,{className:`spw-side-link`,to:`/components/result`},`SpResult`),a(r,{className:`spw-side-link`,to:`/components/textarea`},`SpTextarea`),a(r,{className:`spw-side-link`,to:`/components/input-number`},`SpInputNumber`)),a(`details`,{className:`spw-side-family`,open:!1},a(`summary`,{},`Overlays · 7`),a(r,{className:`spw-side-link`,to:`/components/modal`},`SpModal`),a(r,{className:`spw-side-link`,to:`/components/drawer`},`SpDrawer`),a(r,{className:`spw-side-link`,to:`/components/popover`},`SpPopover`),a(r,{className:`spw-side-link`,to:`/components/tooltip`},`SpTooltip`),a(r,{className:`spw-side-link`,to:`/components/select`},`SpSelect`),a(r,{className:`spw-side-link`,to:`/components/dropdown-menu`},`SpDropdownMenu`),a(r,{className:`spw-side-link`,to:`/components/toast`},`SpToast`))),a(`div`,{className:`spw-side-group`},a(`p`,{className:`spw-side-title`},`New in 0.7`),a(r,{className:`spw-side-link`,to:`/docs/palettes`},`Palettes`),a(r,{className:`spw-side-link is-current`,to:`/docs/composed`},`Composed components`),a(r,{className:`spw-side-link`,to:`/docs/timeline`},`Timeline`)))),a(`main`,{className:`spw-docs-main`,id:`main`,ref:$},a(`article`,{className:`spw-article`},a(`p`,{className:`spw-eyebrow`},`New in 0.7`),a(`h1`,{},`Composed components`),a(`div`,{className:`spw-lede`},`New in silverpoint 0.7 and reflex-silverpoint-react 0.7. Components drawn on silverpoint's frames and tones: tables, pagination, statistics, collapse panels, and overlays — modal, drawer, popover, tooltip, select, menu and toast — in React, Vue, Angular and Reflex.`),a(`section`,{className:`spw-section`},a(`h2`,{id:`about`,ref:e},a(r,{className:`spw-anchor`,to:`#about`},`Drawn with silverpoint's own pieces`)),a(`p`,{},a(`code`,{},`@silverpoint/grounds/ui.css`),` draws its hand-inked frames, hatched tones and heightening on any element that follows its markup contract, so these components are drawn with exactly the same pieces as the first 17. silverpoint `,`0.8.0 ships them in React, Vue and Angular, on `,a(`code`,{},`@silverpoint/<framework>/ui/<name>`),` beside the others (38 UI components in all); `,a(`code`,{},`SpSurface`),` and `,a(`code`,{},`SpGlyph`),` (`,a(`code`,{},`sp_surface`),`, `,a(`code`,{},`sp_glyph`),`) are the building blocks, for components of your own.`),a(f,{className:`spw-callout spw-callout-note`,kind:`info`,size:`sm`,title:`Note`},a(`span`,{},`The live demos are the Reflex versions of reflex-silverpoint-react `,`0.8.0`,`: the same @silverpoint/react components, overlays on <dialog> and the Popover API included, and they read silverpoint_provider. Props are snake_case; a string `,a(`code`,{},`trigger`),` becomes an `,a(`code`,{},`sp_trigger`),`, a native button that keeps the ARIA the overlay clones onto it.`)),a(`div`,{className:`spw-table-wrap`},a(`table`,{className:`spw-table`},a(`thead`,{},a(`tr`,{},a(`th`,{},`Level`),a(`th`,{},`Components`))),a(`tbody`,{},a(`tr`,{},a(`td`,{},`Composed components · native markup`),a(`td`,{},a(`span`,{},a(r,{className:`spw-chip`,to:`#surface`},`sp_surface`),a(r,{className:`spw-chip`,to:`#glyph`},`sp_glyph`),a(r,{className:`spw-chip`,to:`#table`},`sp_table · sort_rows`),a(r,{className:`spw-chip`,to:`#pagination`},`sp_pagination`),a(r,{className:`spw-chip`,to:`#breadcrumb`},`sp_breadcrumb`),a(r,{className:`spw-chip`,to:`#avatar`},`sp_avatar · sp_avatar_group`),a(r,{className:`spw-chip`,to:`#statistic`},`sp_statistic`),a(r,{className:`spw-chip`,to:`#descriptions`},`sp_descriptions`),a(r,{className:`spw-chip`,to:`#timeline-list`},`sp_timeline_list`),a(r,{className:`spw-chip`,to:`#collapse`},`sp_collapse · sp_collapse_item`),a(r,{className:`spw-chip`,to:`#empty`},`sp_empty`),a(r,{className:`spw-chip`,to:`#result`},`sp_result`),a(r,{className:`spw-chip`,to:`#textarea`},`sp_textarea`),a(r,{className:`spw-chip`,to:`#input-number`},`sp_input_number`)))),a(`tr`,{},a(`td`,{},`Overlays`),a(`td`,{},a(`span`,{},a(r,{className:`spw-chip`,to:`#modal`},`sp_modal`),a(r,{className:`spw-chip`,to:`#drawer`},`sp_drawer`),a(r,{className:`spw-chip`,to:`#popover`},`sp_popover`),a(r,{className:`spw-chip`,to:`#tooltip`},`sp_tooltip`),a(r,{className:`spw-chip`,to:`#select`},`sp_select`),a(r,{className:`spw-chip`,to:`#dropdown-menu`},`sp_dropdown_menu`),a(r,{className:`spw-chip`,to:`#toast`},`sp_toast · sp_toaster`),a(r,{className:`spw-chip`,to:`#trigger`},`sp_trigger`))))))),a(`p`,{},`Every demo on this page follows these controls:`),a(`div`,{className:`spw-controls`},a(`div`,{className:`spw-choice`},a(`span`,{"aria-hidden":`true`,className:`spw-choice-label`},`Ground`),a(C,{})),a(`div`,{className:`spw-choice`},a(`span`,{"aria-hidden":`true`,className:`spw-choice-label`},`Substrate`),a(T,{})),a(`div`,{className:`spw-choice`},a(`span`,{"aria-hidden":`true`,className:`spw-choice-label`},`Mode`),a(mn,{})),a(`div`,{className:`spw-choice`},a(`span`,{"aria-hidden":`true`,className:`spw-choice-label`},`Palette`),a(ge,{})))),a(`section`,{className:`spw-section`},a(`h2`,{id:`surface`,ref:t},a(r,{className:`spw-anchor`,to:`#surface`},`sp_surface`)),a(`p`,{},`The root contract on any element: the ground's class, a hand-drawn frame (control, pill, box, card or round) and a hatched tone (1–4, or a state such as selected or primary).`,` `,a(r,{to:`/components/surface`},`SpSurface reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(`div`,{className:`spw-row spw-surface-demo`},a(Rt,{},a(`span`,{},`A card frame`)),a(Xt,{},a(`span`,{},`A pill, toned 2`)),a(ht,{},a(`span`,{},`Selected`)),a(qt,{},a(`span`,{},`4`))))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(je,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpSurface } from '@silverpoint/react/ui/surface';

<SpSurface frame="card">A card frame</SpSurface>
<SpSurface frame="pill" tone={2}>A pill, toned 2</SpSurface>
<SpSurface frame="control" tone="selected">Selected</SpSurface>
<SpSurface as="span" frame="round" tone={4}>4</SpSurface> {/* as: the HTML tag, div by default */}`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(xt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpSurface } from '@silverpoint/vue/ui/surface';
<\/script>

<template>
  <SpSurface frame="card">A card frame</SpSurface>
  <SpSurface frame="pill" :tone="2">A pill, toned 2</SpSurface>
  <SpSurface frame="control" tone="selected">Selected</SpSurface>
  <SpSurface as="span" frame="round" :tone="4">4</SpSurface>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(rn,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpSurface } from '@silverpoint/angular/ui/surface';

// [spSurface] goes on your own element: it is the root, as \`as\` names it in React and Vue.
@Component({
  selector: 'app-surfaces',
  imports: [SpSurface],
  template: \`
    <div spSurface frame="card">A card frame</div>
    <div spSurface frame="pill" [tone]="2">A pill, toned 2</div>
    <div spSurface frame="control" tone="selected">Selected</div>
    <span spSurface frame="round" [tone]="4">4</span>
  \`,
})
export class Surfaces {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(te,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_surface(rx.el.span("A card frame"), frame="card")
sp_surface(rx.el.span("A pill, toned 2"), frame="pill", tone=2)
sp_surface(rx.el.span("Selected"), frame="control", tone="selected")
sp_surface("4", frame="round", tone=4, element="span")  # element: the HTML tag (div by default)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`glyph`,ref:n},a(r,{className:`spw-anchor`,to:`#glyph`},`sp_glyph`)),a(`p`,{},`One exact 16×16 mark of UI_GLYPHS — tick, cross, chevrons, arrows, sort marks… — stroked with the text colour, never inked.`,` `,a(r,{to:`/components/glyph`},`SpGlyph reference →`)),a(`div`,{className:`spw-card spw-live`},a(We,{},a(`div`,{className:`spw-row`},a(`span`,{className:`spw-glyph-sample`},a(g,{glyph:`tick`}),a(`code`,{},`tick`)),a(`span`,{className:`spw-glyph-sample`},a(g,{glyph:`cross`}),a(`code`,{},`cross`)),a(`span`,{className:`spw-glyph-sample`},a(g,{glyph:`warning`}),a(`code`,{},`warning`)),a(`span`,{className:`spw-glyph-sample`},a(g,{glyph:`info`}),a(`code`,{},`info`)),a(`span`,{className:`spw-glyph-sample`},a(g,{glyph:`plus`}),a(`code`,{},`plus`)),a(`span`,{className:`spw-glyph-sample`},a(g,{glyph:`chevronDown`}),a(`code`,{},`chevronDown`)),a(`span`,{className:`spw-glyph-sample`},a(g,{glyph:`arrowUp`}),a(`code`,{},`arrowUp`)),a(`span`,{className:`spw-glyph-sample`},a(g,{glyph:`sort`}),a(`code`,{},`sort`)),a(`span`,{className:`spw-glyph-sample`},a(g,{glyph:`ellipsis`}),a(`code`,{},`ellipsis`))))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(mt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpGlyph } from '@silverpoint/react/ui/glyph';

<SpGlyph glyph="tick" />
<SpGlyph glyph="chevronDown" />
<SpGlyph glyph="sort" /> {/* any key of UI_GLYPHS, from '@silverpoint/core/ui' */}`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(wt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpGlyph } from '@silverpoint/vue/ui/glyph';
<\/script>

<template>
  <SpGlyph glyph="tick" />
  <SpGlyph glyph="chevronDown" />
  <SpGlyph glyph="sort" />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(un,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpGlyph } from '@silverpoint/angular/ui/glyph';

@Component({
  selector: 'app-marks',
  imports: [SpGlyph],
  template: \`
    <sp-glyph glyph="tick" />
    <sp-glyph glyph="chevronDown" />
    <sp-glyph glyph="sort" />
  \`,
})
export class Marks {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(ee,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_glyph(glyph="tick")
sp_glyph(glyph="chevronDown")
sp_glyph(glyph="sort")  # tick, dash, cross, warning, dot, lozenge, info, plus, chevron…, arrow…, sort…, ellipsis`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`table`,ref:c},a(r,{className:`spw-anchor`,to:`#table`},`sp_table · sort_rows`)),a(`p`,{},`Card-framed table: small-caps header, tabular figures, hatched striping, sortable headers with aria-sort.`,` `,a(r,{to:`/components/table`},`SpTable reference →`)),a(`div`,{className:`spw-card spw-live`},a(qe,{},a(rt,{}))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(ln,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { useState } from 'react';
import { uiSortRows } from '@silverpoint/core/ui';
import { SpTable } from '@silverpoint/react/ui/table';

const columns = [
  { key: 'team', title: 'Team', sortable: true },
  { key: 'region', title: 'Region' },
  { key: 'load', title: 'Load %', align: 'end', sortable: true },
  { key: 'incidents', title: 'Incidents', align: 'end', sortable: true },
] as const;

export function Teams({ teams }: { teams: Record<string, unknown>[] }) {
  const [sortKey, setSortKey] = useState('load');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const sort = (key: string) => {
    setSortOrder(key === sortKey && sortOrder === 'asc' ? 'desc' : 'asc');
    setSortKey(key);
  };
  return (
    <SpTable
      caption="On-call teams"
      columns={columns}
      data={uiSortRows(teams, sortKey, sortOrder)} // the table draws rows as given
      rowKey="team"
      sortKey={sortKey}
      sortOrder={sortOrder}
      onSort={sort}
      striped
    />
  );
}`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(ae,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { computed, ref } from 'vue';
import { uiSortRows } from '@silverpoint/core/ui';
import { SpTable } from '@silverpoint/vue/ui/table';

const props = defineProps<{ teams: Record<string, unknown>[] }>();
const columns = [
  { key: 'team', title: 'Team', sortable: true },
  { key: 'region', title: 'Region' },
  { key: 'load', title: 'Load %', align: 'end', sortable: true },
  { key: 'incidents', title: 'Incidents', align: 'end', sortable: true },
] as const;
const sortKey = ref('load');
const sortOrder = ref<'asc' | 'desc'>('desc');
const rows = computed(() => uiSortRows(props.teams, sortKey.value, sortOrder.value));
function sort(key: string) {
  sortOrder.value = key === sortKey.value && sortOrder.value === 'asc' ? 'desc' : 'asc';
  sortKey.value = key;
}
<\/script>

<template>
  <SpTable caption="On-call teams" :columns="columns" :data="rows" row-key="team"
    :sort-key="sortKey" :sort-order="sortOrder" striped @sort="sort" />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Yt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component, computed, input, signal } from '@angular/core';
import { uiSortRows } from '@silverpoint/core/ui';
import { SpTable } from '@silverpoint/angular/ui/table';

@Component({
  selector: 'app-teams',
  imports: [SpTable],
  template: \`
    <sp-table caption="On-call teams" [columns]="columns" [data]="rows()" rowKey="team"
      [sortKey]="sortKey()" [sortOrder]="sortOrder()" [striped]="true" (sort)="sort($event)" />
  \`,
})
export class Teams {
  readonly teams = input.required<Record<string, unknown>[]>();
  protected readonly columns = [
    { key: 'team', title: 'Team', sortable: true },
    { key: 'region', title: 'Region' },
    { key: 'load', title: 'Load %', align: 'end', sortable: true },
    { key: 'incidents', title: 'Incidents', align: 'end', sortable: true },
  ] as const;
  protected readonly sortKey = signal('load');
  protected readonly sortOrder = signal<'asc' | 'desc'>('desc');
  protected readonly rows = computed(() => uiSortRows(this.teams(), this.sortKey(), this.sortOrder()));

  protected sort(key: string) {
    this.sortOrder.set(key === this.sortKey() && this.sortOrder() === 'asc' ? 'desc' : 'asc');
    this.sortKey.set(key);
  }
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(be,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`class State(rx.State):
    rows: list[dict] = TEAMS
    sort_key: str = "load"
    sort_order: str = "desc"

    @rx.event
    def sort(self, key: str):
        same = key == self.sort_key and self.sort_order == "asc"
        self.sort_key, self.sort_order = key, "desc" if same else "asc"
        self.rows = sort_rows(TEAMS, self.sort_key, self.sort_order)


sp_table(
    [
        {"key": "team", "title": "Team", "sortable": True},
        {"key": "region", "title": "Region"},
        {"key": "load", "title": "Load %", "align": "end", "sortable": True},
        {"key": "incidents", "title": "Incidents", "align": "end", "sortable": True},
    ],
    State.rows,
    caption="On-call teams",
    sort_key=State.sort_key,
    sort_order=State.sort_order,
    on_sort=State.sort,  # receives the column key
    striped=True,
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`pagination`,ref:l},a(r,{className:`spw-anchor`,to:`#pagination`},`sp_pagination`)),a(`p`,{},`Previous and next, first and last, a window around the current page (heightened); on_change(page).`,` `,a(r,{to:`/components/pagination`},`SpPagination reference →`)),a(`div`,{className:`spw-card spw-live`},a(k,{},a(`div`,{className:`spw-stack`},a(Ce,{}),a(`p`,{className:`spw-small`},`Page `,a(`code`,{},a(Vt,{})))))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(Xe,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { useState } from 'react';
import { SpPagination } from '@silverpoint/react/ui/pagination';

export function Pages() {
  const [page, setPage] = useState(3);
  // total: items in all pages; pageSize defaults to 10. onChange receives the page number.
  return <SpPagination total={240} current={page} onChange={setPage} showTotal />;
}`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(b,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpPagination } from '@silverpoint/vue/ui/pagination';

const page = ref(3);
<\/script>

<template>
  <SpPagination v-model:current="page" :total="240" show-total />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Dt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component, signal } from '@angular/core';
import { SpPagination } from '@silverpoint/angular/ui/pagination';

@Component({
  selector: 'app-pages',
  imports: [SpPagination],
  template: \`<sp-pagination [(current)]="page" [total]="240" [showTotal]="true" />\`,
})
export class Pages {
  protected readonly page = signal(3);
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(ze,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_pagination(
    total=240,  # items in all pages; page_size=10 by default
    current=State.page,
    on_change=State.set_page,  # receives the page number
    show_total=True,  # "21–30 of 240"
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`breadcrumb`,ref:u},a(r,{className:`spw-anchor`,to:`#breadcrumb`},`sp_breadcrumb`)),a(`p`,{},`A <nav> of links separated by hairline slashes; the last item is the current page.`,` `,a(r,{to:`/components/breadcrumb`},`SpBreadcrumb reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(cn,{}))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(ut,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpBreadcrumb } from '@silverpoint/react/ui/breadcrumb';

const trail = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Composed components', href: '/docs/composed' }, // the last item is the current page
];

<SpBreadcrumb items={trail} />`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(Jt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpBreadcrumb } from '@silverpoint/vue/ui/breadcrumb';

const trail = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Composed components', href: '/docs/composed' },
];
<\/script>

<template>
  <SpBreadcrumb :items="trail" />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Et,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpBreadcrumb } from '@silverpoint/angular/ui/breadcrumb';

@Component({
  selector: 'app-trail',
  imports: [SpBreadcrumb],
  template: \`<sp-breadcrumb [items]="trail" />\`,
})
export class Trail {
  protected readonly trail = [
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/components' },
    { label: 'Composed components', href: '/docs/composed' },
  ];
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(_e,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_breadcrumb(
    [
        {"label": "Docs", "href": "/docs"},
        {"label": "Components", "href": "/components"},
        {"label": "Composed components", "href": "/docs/composed"},
    ]
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`avatar`,ref:d},a(r,{className:`spw-anchor`,to:`#avatar`},`sp_avatar · sp_avatar_group`)),a(`p`,{},`A portrait or the person's initials in a drawn round (or square) frame; groups overlap.`,` `,a(r,{to:`/components/avatar`},`SpAvatar reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(`div`,{className:`spw-row`},a(Lt,{}),a(tn,{}),a(m,{label:`Draughtsmen`},a(N,{}),a(Ct,{}),a(et,{}))))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(pn,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpAvatar, SpAvatarGroup } from '@silverpoint/react/ui/avatar';

<SpAvatar name="Ernesto Crespo" size="lg" /> {/* initials when there is no src */}
<SpAvatar name="Leonardo da Vinci" shape="square" />
<SpAvatar src="/portrait.png" name="Anna Atkins" />
<SpAvatarGroup label="Draughtsmen">
  <SpAvatar name="Albrecht Dürer" size="sm" />
  <SpAvatar name="Raphael Sanzio" size="sm" />
</SpAvatarGroup>`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(Te,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpAvatar, SpAvatarGroup } from '@silverpoint/vue/ui/avatar';
<\/script>

<template>
  <SpAvatar name="Ernesto Crespo" size="lg" />
  <SpAvatar name="Leonardo da Vinci" shape="square" />
  <SpAvatarGroup label="Draughtsmen">
    <SpAvatar name="Albrecht Dürer" size="sm" />
    <SpAvatar name="Raphael Sanzio" size="sm" />
  </SpAvatarGroup>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(dt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpAvatar, SpAvatarGroup } from '@silverpoint/angular/ui/avatar';

@Component({
  selector: 'app-people',
  imports: [SpAvatar, SpAvatarGroup],
  template: \`
    <sp-avatar name="Ernesto Crespo" size="lg" />
    <sp-avatar name="Leonardo da Vinci" shape="square" />
    <sp-avatar-group label="Draughtsmen">
      <sp-avatar name="Albrecht Dürer" size="sm" />
      <sp-avatar name="Raphael Sanzio" size="sm" />
    </sp-avatar-group>
  \`,
})
export class People {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(kt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_avatar(name="Ernesto Crespo", size="lg")  # initials when there is no src
sp_avatar(name="Leonardo da Vinci", shape="square")
sp_avatar(src="/portrait.png", name="Anna Atkins")
sp_avatar_group(
    sp_avatar(name="Albrecht Dürer", size="sm"),
    sp_avatar(name="Raphael Sanzio", size="sm"),
    label="Draughtsmen",
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`statistic`,ref:L},a(r,{className:`spw-anchor`,to:`#statistic`},`sp_statistic`)),a(`p`,{},`A small-caps title, a large tabular figure, prefix and suffix, and a trend arrow.`,` `,a(r,{to:`/components/statistic`},`SpStatistic reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(`div`,{className:`spw-row`},a(v,{}),a(Me,{})))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(S,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpStatistic } from '@silverpoint/react/ui/statistic';

<SpStatistic title="Revenue" value="48.2" prefix="$" suffix="k" trend="up" delta="+8.2 %" />
<SpStatistic title="Churn" value="2.1" suffix="%" trend="down" delta="−0.4 %" />`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(Bt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpStatistic } from '@silverpoint/vue/ui/statistic';
<\/script>

<template>
  <SpStatistic title="Revenue" value="48.2" prefix="$" suffix="k" trend="up" delta="+8.2 %" />
  <SpStatistic title="Churn" value="2.1" suffix="%" trend="down" delta="−0.4 %" />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(nn,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpStatistic } from '@silverpoint/angular/ui/statistic';

@Component({
  selector: 'app-figures',
  imports: [SpStatistic],
  template: \`
    <sp-statistic title="Revenue" value="48.2" prefix="$" suffix="k" trend="up" delta="+8.2 %" />
    <sp-statistic title="Churn" value="2.1" suffix="%" trend="down" delta="−0.4 %" />
  \`,
})
export class Figures {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(ie,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_statistic("Revenue", "48.2", prefix="$", suffix="k", trend="up", delta="+8.2 %")
sp_statistic("Churn", "2.1", suffix="%", trend="down", delta="−0.4 %")`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`descriptions`,ref:R},a(r,{className:`spw-anchor`,to:`#descriptions`},`sp_descriptions`)),a(`p`,{},`A label–value grid (a <dl>), optionally card-framed; one column on narrow containers.`,` `,a(r,{to:`/components/descriptions`},`SpDescriptions reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(oe,{}))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(at,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpDescriptions } from '@silverpoint/react/ui/descriptions';

const release = [
  { label: 'Ground', value: 'silverpoint' },
  { label: 'Substrate', value: 'cream' },
  { label: 'Charts', value: '60' },
];

<SpDescriptions title="The release" items={release} columns={3} />`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(dn,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpDescriptions } from '@silverpoint/vue/ui/descriptions';

const release = [
  { label: 'Ground', value: 'silverpoint' },
  { label: 'Substrate', value: 'cream' },
  { label: 'Charts', value: '60' },
];
<\/script>

<template>
  <SpDescriptions title="The release" :items="release" :columns="3" />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(He,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpDescriptions } from '@silverpoint/angular/ui/descriptions';

@Component({
  selector: 'app-release',
  imports: [SpDescriptions],
  template: \`<sp-descriptions title="The release" [items]="release" [columns]="3" />\`,
})
export class Release {
  protected readonly release = [
    { label: 'Ground', value: 'silverpoint' },
    { label: 'Substrate', value: 'cream' },
    { label: 'Charts', value: '60' },
  ];
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(Ue,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_descriptions(
    [
        {"label": "Ground", "value": "silverpoint"},
        {"label": "Substrate", "value": "cream"},
        {"label": "Charts", "value": "60"},
    ],
    title="The release",
    columns=3,
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`timeline-list`,ref:z},a(r,{className:`spw-anchor`,to:`#timeline-list`},`sp_timeline_list`)),a(`p`,{},`A vertical list of events: done (hatched), current (heightened), pending and error.`,` `,a(r,{to:`/components/timeline-list`},`SpTimelineList reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(It,{}))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(sn,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpTimelineList } from '@silverpoint/react/ui/timeline-list';

const steps = [
  { title: 'Drawn', time: '09:12', description: 'The ground is prepared.', status: 'done' },
  { title: 'Reviewed', time: '11:05', description: 'Precision mode checked.', status: 'current' },
  { title: 'Published', time: '—', description: 'Waiting for the release.', status: 'pending' },
] as const;

<SpTimelineList items={steps} label="Release steps" />`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(ne,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpTimelineList } from '@silverpoint/vue/ui/timeline-list';

const steps = [
  { title: 'Drawn', time: '09:12', description: 'The ground is prepared.', status: 'done' },
  { title: 'Reviewed', time: '11:05', description: 'Precision mode checked.', status: 'current' },
  { title: 'Published', time: '—', description: 'Waiting for the release.', status: 'pending' },
] as const;
<\/script>

<template>
  <SpTimelineList :items="steps" label="Release steps" />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Be,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpTimelineList } from '@silverpoint/angular/ui/timeline-list';

@Component({
  selector: 'app-steps',
  imports: [SpTimelineList],
  template: \`<sp-timeline-list [items]="steps" label="Release steps" />\`,
})
export class Steps {
  protected readonly steps = [
    { title: 'Drawn', time: '09:12', description: 'The ground is prepared.', status: 'done' },
    { title: 'Reviewed', time: '11:05', description: 'Precision mode checked.', status: 'current' },
    { title: 'Published', time: '—', description: 'Waiting for the release.', status: 'pending' },
  ] as const;
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(Ve,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_timeline_list(
    [
        {"title": "Drawn", "time": "09:12", "description": "The ground is prepared.", "status": "done"},
        {"title": "Reviewed", "time": "11:05", "description": "Precision mode checked.", "status": "current"},
        {"title": "Published", "time": "—", "description": "Waiting for the release.", "status": "pending"},
    ],
    label="Release steps",
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`collapse`,ref:B},a(r,{className:`spw-anchor`,to:`#collapse`},`sp_collapse · sp_collapse_item`)),a(`p`,{},`Panels that open and close, on native <details>; accordion=True keeps one open.`,` `,a(r,{to:`/components/collapse`},`SpCollapse reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(ue,{},a(h,{defaultOpen:!0,title:`What is silverpoint?`},a(`p`,{},`A fine silver line on a prepared ground.`)),a(h,{title:`And cyanotype?`},a(`p`,{},`A white line on Prussian blue; tone is its weight.`)),a(h,{title:`Precision mode`},a(`p`,{},`The inking switched off: exact rules only.`))))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(O,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpCollapse, SpCollapseItem } from '@silverpoint/react/ui/collapse';

<SpCollapse accordion> {/* native exclusive <details name> */}
  <SpCollapseItem title="What is silverpoint?" defaultOpen>
    <p>A fine silver line on a prepared ground.</p>
  </SpCollapseItem>
  <SpCollapseItem title="And cyanotype?">
    <p>A white line on Prussian blue; tone is its weight.</p>
  </SpCollapseItem>
</SpCollapse>`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(we,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpCollapse, SpCollapseItem } from '@silverpoint/vue/ui/collapse';
<\/script>

<template>
  <SpCollapse accordion>
    <SpCollapseItem title="What is silverpoint?" default-open>
      <p>A fine silver line on a prepared ground.</p>
    </SpCollapseItem>
    <SpCollapseItem title="And cyanotype?">
      <p>A white line on Prussian blue; tone is its weight.</p>
    </SpCollapseItem>
  </SpCollapse>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Ie,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpCollapse, SpCollapseItem } from '@silverpoint/angular/ui/collapse';

@Component({
  selector: 'app-faq',
  imports: [SpCollapse, SpCollapseItem],
  template: \`
    <sp-collapse [accordion]="true">
      <sp-collapse-item title="What is silverpoint?" [defaultOpen]="true">
        <p>A fine silver line on a prepared ground.</p>
      </sp-collapse-item>
      <sp-collapse-item title="And cyanotype?">
        <p>A white line on Prussian blue; tone is its weight.</p>
      </sp-collapse-item>
    </sp-collapse>
  \`,
})
export class Faq {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(Ke,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_collapse(
    sp_collapse_item("What is silverpoint?", rx.el.p("A fine silver line…"), open=True),
    sp_collapse_item("And cyanotype?", rx.el.p("A white line on Prussian blue…")),
    accordion=True,  # native exclusive <details name>
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`empty`,ref:V},a(r,{className:`spw-anchor`,to:`#empty`},`sp_empty`)),a(`p`,{},`The empty state: a lightly hatched, drawn tray, a line of italic text and actions.`,` `,a(r,{to:`/components/empty`},`SpEmpty reference →`)),a(`div`,{className:`spw-card spw-live`},a(fe,{},a(y,{}))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(A,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpButton } from '@silverpoint/react/ui/button';
import { SpEmpty } from '@silverpoint/react/ui/empty';

<SpEmpty description="No charts yet" extra={<SpButton size="sm">Add a chart</SpButton>} />`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(jt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpEmpty } from '@silverpoint/vue/ui/empty';
<\/script>

<template>
  <SpEmpty description="No charts yet">
    <template #extra><SpButton size="sm">Add a chart</SpButton></template>
  </SpEmpty>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(ke,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpCardExtra } from '@silverpoint/angular/ui';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpEmpty } from '@silverpoint/angular/ui/empty';

@Component({
  selector: 'app-no-charts',
  imports: [SpButton, SpCardExtra, SpEmpty],
  template: \`
    <sp-empty description="No charts yet">
      <ng-template spExtra><button spButton size="sm">Add a chart</button></ng-template>
    </sp-empty>
  \`,
})
export class NoCharts {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(it,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_empty(sp_button("Add a chart", size="sm"), description="No charts yet")`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`result`,ref:H},a(r,{className:`spw-anchor`,to:`#result`},`sp_result`)),a(`p`,{},`The outcome of an operation: a drawn round mark (tick, info, warning, cross), title and subtitle.`,` `,a(r,{to:`/components/result`},`SpResult reference →`)),a(`div`,{className:`spw-card spw-live`},a(x,{},a(Fe,{}))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(pe,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpButton } from '@silverpoint/react/ui/button';
import { SpResult } from '@silverpoint/react/ui/result';

<SpResult
  status="success" // success, info, warning or error
  title="Published"
  subtitle="Every package reached npm."
  extra={<SpButton size="sm" href="/gallery">Back to the gallery</SpButton>}
/>`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(Le,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpResult } from '@silverpoint/vue/ui/result';
<\/script>

<template>
  <SpResult status="success" title="Published" subtitle="Every package reached npm.">
    <template #extra><SpButton size="sm" href="/gallery">Back to the gallery</SpButton></template>
  </SpResult>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Re,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpCardExtra } from '@silverpoint/angular/ui';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpResult } from '@silverpoint/angular/ui/result';

@Component({
  selector: 'app-published',
  imports: [SpButton, SpCardExtra, SpResult],
  template: \`
    <sp-result status="success" title="Published" subtitle="Every package reached npm.">
      <ng-template spExtra><a spButton size="sm" href="/gallery">Back to the gallery</a></ng-template>
    </sp-result>
  \`,
})
export class Published {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(ot,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_result(
    sp_button("Back to the gallery", href="/gallery", size="sm"),
    status="success",  # success, info, warning or error
    title="Published",
    subtitle="Every package reached PyPI.",
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`textarea`,ref:U},a(r,{className:`spw-anchor`,to:`#textarea`},`sp_textarea`)),a(`p`,{},`Multi-line text on the SpInput contract: drawn frame, italic placeholder, counter and message.`,` `,a(r,{to:`/components/textarea`},`SpTextarea reference →`)),a(`div`,{className:`spw-card spw-live`},a(ce,{},a(gt,{}))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(Ne,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { useState } from 'react';
import { SpTextarea } from '@silverpoint/react/ui/textarea';

export function Note() {
  const [note, setNote] = useState('Drawn in silverpoint.');
  // onChange receives the text, not the DOM event
  return <SpTextarea label="Note" value={note} onChange={setNote} rows={3} maxLength={120} showCount />;
}`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(bt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpTextarea } from '@silverpoint/vue/ui/textarea';

const note = ref('Drawn in silverpoint.');
<\/script>

<template>
  <SpTextarea v-model="note" label="Note" :rows="3" :max-length="120" show-count />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(vt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component, signal } from '@angular/core';
import { SpTextarea } from '@silverpoint/angular/ui/textarea';

@Component({
  selector: 'app-note',
  imports: [SpTextarea],
  // or ngModel / formControlName: SpTextarea is a ControlValueAccessor
  template: \`<sp-textarea [(value)]="note" label="Note" [rows]="3" [maxLength]="120" [showCount]="true" />\`,
})
export class Note {
  protected readonly note = signal('Drawn in silverpoint.');
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(Mt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_textarea(
    label="Note",
    value=State.note,
    on_change=State.set_note,  # receives the text, not a DOM event
    rows=3,
    max_length=120,
    show_count=True,
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`input-number`,ref:W},a(r,{className:`spw-anchor`,to:`#input-number`},`sp_input_number`)),a(`p`,{},`A number field with exact − and + steppers, clamped to min and max; on_change receives the number.`,` `,a(r,{to:`/components/input-number`},`SpInputNumber reference →`)),a(`div`,{className:`spw-card spw-live`},a(M,{},a(`div`,{className:`spw-stack`},a(Ot,{}),a(`p`,{className:`spw-small`},`Value `,a(`code`,{},a(lt,{})))))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(Zt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { useState } from 'react';
import { SpInputNumber } from '@silverpoint/react/ui/input-number';

export function Copies() {
  const [copies, setCopies] = useState<number | null>(3); // null is an empty field
  return <SpInputNumber label="Copies" value={copies} onChange={setCopies} min={1} max={10} />;
}`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(ft,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpInputNumber } from '@silverpoint/vue/ui/input-number';

const copies = ref<number | null>(3);
<\/script>

<template>
  <SpInputNumber v-model="copies" label="Copies" :min="1" :max="10" />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Se,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component, signal } from '@angular/core';
import { SpInputNumber } from '@silverpoint/angular/ui/input-number';

@Component({
  selector: 'app-copies',
  imports: [SpInputNumber],
  template: \`<sp-input-number [(value)]="copies" label="Copies" [min]="1" [max]="10" />\`,
})
export class Copies {
  protected readonly copies = signal<number | null>(3);
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(D,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_input_number(label="Copies", value=State.copies, on_change=State.set_copies, min=1, max=10)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`modal`,ref:G},a(r,{className:`spw-anchor`,to:`#modal`},`sp_modal`)),a(`p`,{},`A dialog on a card frame over a hatched backdrop: focus trapped, Escape closes it.`,` `,a(r,{to:`/components/modal`},`SpModal reference →`)),a(`div`,{className:`spw-card spw-live`},a(Ye,{},a(j,{},a(`p`,{},`Apply the new ground to every chart on the page?`)))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(Ht,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { useState } from 'react';
import { SpButton } from '@silverpoint/react/ui/button';
import { SpModal } from '@silverpoint/react/ui/modal';

export function ApplyChanges() {
  const [open, setOpen] = useState(false);
  return (
    <SpModal
      title="Apply changes"
      description="The geometry of the data does not move."
      trigger={<button type="button">Open the modal</button>} // any element you write
      footer={<SpButton variant="primary" onClick={() => setOpen(false)}>Apply</SpButton>}
      open={open}
      onOpenChange={setOpen}
    >
      <p>Apply the new ground to every chart on the page?</p>
    </SpModal>
  );
}`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(Tt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpModal } from '@silverpoint/vue/ui/modal';

const open = ref(false);
<\/script>

<template>
  <SpModal v-model:open="open" title="Apply changes" description="The geometry of the data does not move.">
    <template #trigger><button type="button">Open the modal</button></template>
    <p>Apply the new ground to every chart on the page?</p>
    <template #footer><SpButton variant="primary" @click="open = false">Apply</SpButton></template>
  </SpModal>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(he,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component, signal } from '@angular/core';
import { SpCardFooter, SpTrigger } from '@silverpoint/angular/ui';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpModal } from '@silverpoint/angular/ui/modal';

@Component({
  selector: 'app-apply-changes',
  imports: [SpButton, SpCardFooter, SpModal, SpTrigger],
  template: \`
    <sp-modal [(open)]="open" title="Apply changes" description="The geometry of the data does not move.">
      <button type="button" spTrigger>Open the modal</button>
      <p>Apply the new ground to every chart on the page?</p>
      <ng-template spFooter>
        <button spButton variant="primary" (click)="open.set(false)">Apply</button>
      </ng-template>
    </sp-modal>
  \`,
})
export class ApplyChanges {
  protected readonly open = signal(false);
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(se,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_modal(
    rx.el.p("Apply the new ground to every chart on the page?"),
    trigger="Open the modal",  # a string becomes sp_trigger(...)
    title="Apply changes",
    description="The geometry of the data does not move.",
    footer=sp_trigger("Apply", variant="primary", on_click=State.confirm),
    open=State.modal_open,
    on_open_change=State.set_modal_open,
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`drawer`,ref:K},a(r,{className:`spw-anchor`,to:`#drawer`},`sp_drawer`)),a(`p`,{},`The same dialog, sliding in from any edge (side='end', the default, 'start', 'top' or 'bottom').`,` `,a(r,{to:`/components/drawer`},`SpDrawer reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(Ee,{},a(`p`,{},`A panel that slides in from any edge, over a hatched backdrop.`)))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(_t,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpDrawer } from '@silverpoint/react/ui/drawer';

// side: start, end (the default), top or bottom; uncontrolled here
<SpDrawer title="Settings" side="end" trigger={<button type="button">Open the drawer</button>}>
  <p>A panel that slides in from any edge, over a hatched backdrop.</p>
</SpDrawer>`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(Ae,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpDrawer } from '@silverpoint/vue/ui/drawer';
<\/script>

<template>
  <SpDrawer title="Settings" side="end">
    <template #trigger><button type="button">Open the drawer</button></template>
    <p>A panel that slides in from any edge, over a hatched backdrop.</p>
  </SpDrawer>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Pt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpTrigger } from '@silverpoint/angular/ui';
import { SpDrawer } from '@silverpoint/angular/ui/drawer';

@Component({
  selector: 'app-settings',
  imports: [SpDrawer, SpTrigger],
  template: \`
    <sp-drawer title="Settings" side="end">
      <button type="button" spTrigger>Open the drawer</button>
      <p>A panel that slides in from any edge, over a hatched backdrop.</p>
    </sp-drawer>
  \`,
})
export class Settings {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(ct,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_drawer(rx.el.p("A panel that slides in…"), trigger="Open the drawer", title="Settings", side="end")`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`popover`,ref:q},a(r,{className:`spw-anchor`,to:`#popover`},`sp_popover`)),a(`p`,{},`Anchored content on a card frame, placed by the core on the Popover API; Escape or a click outside closes it.`,` `,a(r,{to:`/components/popover`},`SpPopover reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(Oe,{},a(`p`,{},`Anchored content, on a card frame. Escape or a click outside closes it.`)))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(pt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpPopover } from '@silverpoint/react/ui/popover';

<SpPopover title="About this chart" closable width="260px" trigger={<button type="button">Details</button>}>
  <p>Anchored content, on a card frame. Escape or a click outside closes it.</p>
</SpPopover>`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(Qe,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpPopover } from '@silverpoint/vue/ui/popover';
<\/script>

<template>
  <SpPopover title="About this chart" closable width="260px">
    <template #trigger><button type="button">Details</button></template>
    <p>Anchored content, on a card frame. Escape or a click outside closes it.</p>
  </SpPopover>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Nt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpTrigger } from '@silverpoint/angular/ui';
import { SpPopover } from '@silverpoint/angular/ui/popover';

@Component({
  selector: 'app-about-chart',
  imports: [SpPopover, SpTrigger],
  template: \`
    <sp-popover title="About this chart" [closable]="true" width="260px">
      <button type="button" spTrigger>Details</button>
      <p>Anchored content, on a card frame. Escape or a click outside closes it.</p>
    </sp-popover>
  \`,
})
export class AboutChart {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(de,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_popover(
    rx.el.p("Anchored content, on a card frame."),
    trigger=sp_trigger("Details", chevron=True),
    title="About this chart",
    closable=True,
    width=260,
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`tooltip`,ref:J},a(r,{className:`spw-anchor`,to:`#tooltip`},`sp_tooltip`)),a(`p`,{},`A short label shown on hover or keyboard focus, after a delay.`,` `,a(r,{to:`/components/tooltip`},`SpTooltip reference →`)),a(`div`,{className:`spw-card spw-live`},a(F,{},a(yt,{}))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(Wt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpTooltip } from '@silverpoint/react/ui/tooltip';

<SpTooltip
  text="Drawn on the ground's own frame" // the trigger's accessible description
  trigger={<button type="button">Hover or focus me</button>}
  side="top"
  delay={300}
/>`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(tt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpTooltip } from '@silverpoint/vue/ui/tooltip';
<\/script>

<template>
  <SpTooltip text="Drawn on the ground's own frame" side="top" :delay="300">
    <template #trigger><button type="button">Hover or focus me</button></template>
  </SpTooltip>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(an,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpTrigger } from '@silverpoint/angular/ui';
import { SpTooltip } from '@silverpoint/angular/ui/tooltip';

@Component({
  selector: 'app-hint',
  imports: [SpTooltip, SpTrigger],
  template: \`
    <sp-tooltip text="Drawn on the ground's own frame" side="top" [delay]="300">
      <button type="button" spTrigger>Hover or focus me</button>
    </sp-tooltip>
  \`,
})
export class Hint {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(gn,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_tooltip("Hover or focus me", "Drawn on the ground's own frame", side="top", delay=300)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`select`,ref:Y},a(r,{className:`spw-anchor`,to:`#select`},`sp_select`)),a(`p`,{},`A single choice with typeahead: the chosen option ticked, the highlighted one heightened.`,` `,a(r,{to:`/components/select`},`SpSelect reference →`)),a(`div`,{className:`spw-card spw-live`},a(Ze,{},a(`div`,{className:`spw-stack`},a(Ge,{}),a(`p`,{className:`spw-small`},`Region `,a(`code`,{},a(nt,{})))))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a($t,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { useState } from 'react';
import { SpSelect } from '@silverpoint/react/ui/select';

export function Region() {
  const [region, setRegion] = useState<string | null>('North');
  // items: strings, or { key, label, disabled }; onChange receives the key
  return <SpSelect items={['North', 'East', 'South', 'West']} label="Region" value={region} onChange={setRegion} />;
}`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(w,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpSelect } from '@silverpoint/vue/ui/select';

const region = ref<string | null>('North');
<\/script>

<template>
  <SpSelect v-model="region" :items="['North', 'East', 'South', 'West']" label="Region" />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(De,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component, signal } from '@angular/core';
import { SpSelect } from '@silverpoint/angular/ui/select';

@Component({
  selector: 'app-region',
  imports: [SpSelect],
  template: \`<sp-select [(value)]="region" [items]="regions" label="Region" />\`,
})
export class Region {
  protected readonly regions = ['North', 'East', 'South', 'West'];
  protected readonly region = signal<string | null>('North');
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(xe,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_select(
    ["North", "East", "South", "West"],  # or [{"key", "label", "disabled"}]
    value=State.region,
    on_change=State.set_region,  # receives the value
    label="Region",
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`dropdown-menu`,ref:X},a(r,{className:`spw-anchor`,to:`#dropdown-menu`},`sp_dropdown_menu`)),a(`p`,{},`Commands with shortcuts, separators, labels and a danger item; on_select(key).`,` `,a(r,{to:`/components/dropdown-menu`},`SpDropdownMenu reference →`)),a(`div`,{className:`spw-card spw-live`},a(hn,{},a(`div`,{className:`spw-stack`},a(At,{}),a(`p`,{className:`spw-small`},`Last command `,a(`code`,{},a(Ft,{})))))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(me,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { SpDropdownMenu } from '@silverpoint/react/ui/dropdown-menu';

const actions = [
  { type: 'label', key: 'drawing', label: 'Drawing' },
  { key: 'duplicate', label: 'Duplicate', shortcut: '⌘D' },
  { key: 'export', label: 'Export SVG', shortcut: '⌘E' },
  { type: 'separator', key: 'sep' },
  { key: 'delete', label: 'Delete', danger: true },
] as const;

// label names the menu and is the built-in button's text; trigger={…} replaces that button
<SpDropdownMenu label="Actions" items={actions} onSelect={(key) => console.log(key)} />`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(ye,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { SpDropdownMenu } from '@silverpoint/vue/ui/dropdown-menu';

const actions = [
  { type: 'label', key: 'drawing', label: 'Drawing' },
  { key: 'duplicate', label: 'Duplicate', shortcut: '⌘D' },
  { key: 'export', label: 'Export SVG', shortcut: '⌘E' },
  { type: 'separator', key: 'sep' },
  { key: 'delete', label: 'Delete', danger: true },
] as const;
const run = (key: string) => console.log(key);
<\/script>

<template>
  <SpDropdownMenu label="Actions" :items="actions" @select="run" />
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Qt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component } from '@angular/core';
import { SpDropdownMenu } from '@silverpoint/angular/ui/dropdown-menu';

@Component({
  selector: 'app-actions',
  imports: [SpDropdownMenu],
  template: \`<sp-dropdown-menu label="Actions" [items]="actions" (select)="run($event)" />\`,
})
export class Actions {
  protected readonly actions = [
    { type: 'label', key: 'drawing', label: 'Drawing' },
    { key: 'duplicate', label: 'Duplicate', shortcut: '⌘D' },
    { key: 'export', label: 'Export SVG', shortcut: '⌘E' },
    { type: 'separator', key: 'sep' },
    { key: 'delete', label: 'Delete', danger: true },
  ] as const;

  protected run(key: string) {
    console.log(key);
  }
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(Je,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_dropdown_menu(
    "Actions",
    [
        {"type": "label", "label": "Drawing"},
        {"key": "duplicate", "label": "Duplicate", "shortcut": "⌘D"},
        {"key": "export", "label": "Export SVG", "shortcut": "⌘E"},
        {"type": "separator"},
        {"key": "delete", "label": "Delete", "danger": True},
    ],
    on_select=State.run,  # receives the item's key
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`toast`,ref:Z},a(r,{className:`spw-anchor`,to:`#toast`},`sp_toast · sp_toaster`)),a(`p`,{},`Notices that stack in a corner and dismiss themselves; error and warning are announced assertively.`,` `,a(r,{to:`/components/toast`},`SpToast reference →`)),a(`div`,{className:`spw-card spw-live`},a(E,{},a(`div`,{},a(on,{},`Show a toast`),a(p,{},a(St,{}))))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(Pe,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { useState } from 'react';
import { SpButton } from '@silverpoint/react/ui/button';
import { SpToast, SpToaster } from '@silverpoint/react/ui/toast';

export function Save() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SpButton onClick={() => setOpen(true)}>Save</SpButton>
      <SpToaster position="bottom-end">
        {/* error and warning are announced assertively; onOpenChange(false) when it closes */}
        <SpToast title="Saved" description="The drawing was saved." kind="success" open={open} onOpenChange={setOpen} />
      </SpToaster>
    </>
  );
}`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(Ut,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpToast, SpToaster } from '@silverpoint/vue/ui/toast';

const open = ref(false);
<\/script>

<template>
  <SpButton @click="open = true">Save</SpButton>
  <SpToaster position="bottom-end">
    <SpToast v-model:open="open" title="Saved" description="The drawing was saved." kind="success" />
  </SpToaster>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(Gt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`import { Component, signal } from '@angular/core';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpToast, SpToaster } from '@silverpoint/angular/ui/toast';

@Component({
  selector: 'app-save',
  imports: [SpButton, SpToast, SpToaster],
  template: \`
    <button spButton (click)="open.set(true)">Save</button>
    <sp-toaster position="bottom-end">
      <sp-toast [(open)]="open" title="Saved" description="The drawing was saved." kind="success" />
    </sp-toaster>
  \`,
})
export class Save {
  protected readonly open = signal(false);
}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(le,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_button("Save", on_click=State.save)  # sets toast_open = True

sp_toaster(
    sp_toast(
        "Saved",
        "The drawing was saved.",
        kind="success",
        open=State.toast_open,
        on_open_change=State.set_toast_open,  # False when it closes
    ),
    position="bottom-end",  # the default; logical, so it mirrors in right-to-left text
)`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`trigger`,ref:Q},a(r,{className:`spw-anchor`,to:`#trigger`},`sp_trigger`)),a(`p`,{},`The drawn button of every overlay: SpButton's drawing on a native button that keeps the ARIA and the toggle an overlay clones onto it (sp_button does not).`),a(`div`,{className:`spw-card spw-live`},a(F,{},a(`div`,{className:`spw-row`},a(st,{},`Default`),a($e,{},`Primary`),a(fn,{},`Danger`),a(en,{},`Menu`)))),a(P,{},a(_,{value:`react`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`tsx`),a(Kt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`// React has no trigger component: an overlay's trigger is any element you write,
// cloned with aria-haspopup, aria-expanded and aria-controls.
import { SpButton } from '@silverpoint/react/ui/button';
import { SpPopover } from '@silverpoint/react/ui/popover';

<SpPopover title="Details" trigger={<SpButton>Details</SpButton>}>
  <p>…</p>
</SpPopover>`)))),a(_,{value:`vue`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`vue`),a(ve,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`<!-- Vue has no trigger component: the trigger slot's first element opens the overlay. -->
<script setup lang="ts">
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpPopover } from '@silverpoint/vue/ui/popover';
<\/script>

<template>
  <SpPopover title="Details">
    <template #trigger><SpButton>Details</SpButton></template>
    <p>…</p>
  </SpPopover>
</template>`)))),a(_,{value:`angular`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`ts`),a(zt,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`// Angular marks the projected element that opens an overlay with the spTrigger directive.
import { Component } from '@angular/core';
import { SpTrigger } from '@silverpoint/angular/ui';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpPopover } from '@silverpoint/angular/ui/popover';

@Component({
  selector: 'app-details',
  imports: [SpButton, SpPopover, SpTrigger],
  template: \`
    <sp-popover title="Details">
      <button spButton spTrigger>Details</button>
      <p>…</p>
    </sp-popover>
  \`,
})
export class Details {}`)))),a(_,{value:`reflex`},a(I.Fragment,{}),a(`div`,{className:`spw-code`},a(`div`,{className:`spw-code-bar`},a(`span`,{className:`spw-code-label`},`python`),a(re,{},a(s,{size:14}),a(`span`,{},`Copy`))),a(`pre`,{},a(`code`,{},`sp_trigger("Default")
sp_trigger("Primary", variant="primary")  # light hatching
sp_trigger("Danger", variant="danger")
sp_trigger("Menu", chevron=True)  # a down chevron after the text

sp_popover(rx.el.p("…"), trigger=sp_trigger("Details", chevron=True))`)))))),a(`section`,{className:`spw-section`},a(`h2`,{id:`surface`,ref:t},a(r,{className:`spw-anchor`,to:`#surface`},`Surface props`)),a(`p`,{},`In React, Vue and Angular every component takes `,a(`code`,{},`ground`),`, `,a(`code`,{},`substrate`),`, `,a(`code`,{},`mode`),`, `,a(`code`,{},`size`),`, `,a(`code`,{},`palette`),` and `,a(`code`,{},`id`),`, and reads them from the provider. A value binds as each framework does it (`,a(`code`,{},`value`),` + `,a(`code`,{},`onChange`),`, `,a(`code`,{},`v-model`),`, `,a(`code`,{},`[(value)]`),` or a forms directive), and an overlay's open state with `,a(`code`,{},`open`),` + `,a(`code`,{},`onOpenChange`),`, `,a(`code`,{},`v-model:open`),` or `,a(`code`,{},`[(open)]`),` (or `,a(`code`,{},`defaultOpen`),`).`),a(`p`,{},`In Reflex every builder takes `,a(`code`,{},`ground`),`, `,a(`code`,{},`substrate`),`, `,a(`code`,{},`mode`),`, `,a(`code`,{},`size`),` (sm, md, lg), `,a(`code`,{},`seed`),`, `,a(`code`,{},`palette`),`, `,a(`code`,{},`id`),`, `,a(`code`,{},`class_name`),` and `,a(`code`,{},`style`),`. Values and lists (rows, items, options) can be static or state vars. Value components (`,a(`code`,{},`sp_textarea`),`, `,a(`code`,{},`sp_input_number`),`, `,a(`code`,{},`sp_select`),`, `,a(`code`,{},`sp_pagination`),`) send the new value itself to `,a(`code`,{},`on_change`),`, never a DOM event. Overlays are controlled with `,a(`code`,{},`open`),` + `,a(`code`,{},`on_open_change`),`, or uncontrolled with `,a(`code`,{},`default_open`),`.`)))),a(`aside`,{className:`spw-toc-col`},a(`nav`,{"aria-label":`On this page`,className:`spw-toc`},a(`p`,{className:`spw-toc-title`},`On this page`),a(r,{to:`#about`},`Drawn with silverpoint's own pieces`),a(r,{to:`#surface`},`sp_surface`),a(r,{to:`#glyph`},`sp_glyph`),a(r,{to:`#table`},`sp_table · sort_rows`),a(r,{to:`#pagination`},`sp_pagination`),a(r,{to:`#breadcrumb`},`sp_breadcrumb`),a(r,{to:`#avatar`},`sp_avatar · sp_avatar_group`),a(r,{to:`#statistic`},`sp_statistic`),a(r,{to:`#descriptions`},`sp_descriptions`),a(r,{to:`#timeline-list`},`sp_timeline_list`),a(r,{to:`#collapse`},`sp_collapse · sp_collapse_item`),a(r,{to:`#empty`},`sp_empty`),a(r,{to:`#result`},`sp_result`),a(r,{to:`#textarea`},`sp_textarea`),a(r,{to:`#input-number`},`sp_input_number`),a(r,{to:`#modal`},`sp_modal`),a(r,{to:`#drawer`},`sp_drawer`),a(r,{to:`#popover`},`sp_popover`),a(r,{to:`#tooltip`},`sp_tooltip`),a(r,{to:`#select`},`sp_select`),a(r,{to:`#dropdown-menu`},`sp_dropdown_menu`),a(r,{to:`#toast`},`sp_toast · sp_toaster`),a(r,{to:`#trigger`},`sp_trigger`),a(r,{to:`#surface`},`Surface props`)))),a(`footer`,{className:`spw-footer`},a(`div`,{className:`spw-footer-grid`},a(`div`,{},a(`p`,{className:`spw-footer-brand`},a(`svg`,{"aria-hidden":`true`,className:`spw-mark`,height:`22`,viewBox:`0 0 32 32`,width:`22`},a(`g`,{stroke:`currentColor`},a(`line`,{css:{strokeWidth:`0.8`},x1:`4.75`,x2:`18.25`,y1:`13.75`,y2:`27.25`}),a(`line`,{css:{strokeWidth:`0.8`},x1:`7.00`,x2:`20.50`,y1:`11.50`,y2:`25.00`}),a(`line`,{css:{strokeWidth:`0.8`},x1:`9.25`,x2:`22.75`,y1:`9.25`,y2:`22.75`}),a(`line`,{css:{strokeWidth:`0.8`},x1:`11.50`,x2:`25.00`,y1:`7.00`,y2:`20.50`}),a(`line`,{css:{strokeWidth:`0.8`},x1:`13.75`,x2:`27.25`,y1:`4.75`,y2:`18.25`})),a(`path`,{css:{fill:`none`,stroke:`currentColor`,strokeWidth:`1.1`},d:`M16 2.5 C22 8.4 25.6 12 29.5 16 C23.4 22 20 25.6 16 29.5 C10.1 23.6 6.4 20 2.5 16 C8.6 10 12 6.4 16 2.5Z`}),a(`circle`,{css:{fill:`#fff`,stroke:`currentColor`,strokeWidth:`1.1`},cx:`16`,cy:`16`,r:`3.2`})),a(`strong`,{},` silverpoint`)),a(`p`,{},`Charts and UI components for React, Vue and Angular whose visual language is historical drawing technique.`),a(`p`,{},`Developed by `,a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://www.seraph.to/`},`Ernesto Crespo`),` · `,a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://www.seraph.to/`},`seraph.to`),` · `,a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo`},`@ecrespo`)),a(`p`,{},a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/blob/main/LICENSE`},`MIT License`),` · Typeface: EB Garamond, SIL Open Font License`)),a(`div`,{},a(`h4`,{},`Library`),a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint`},`GitHub repository`),a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://www.npmjs.com/search?q=silverpoint`},`npm packages`),a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/releases`},`Releases`),a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/tree/main/specs`},`Specifications`)),a(`div`,{},a(`h4`,{},`Reflex`),a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/reflex-silverpoint-react`},`reflex-silverpoint-react`),a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://pypi.org/project/reflex-silverpoint-react/`},`on PyPI`),a(r,{to:`/docs/reflex`},`Reflex quickstart`)),a(`div`,{},a(`h4`,{},`Help`),a(r,{to:`/support`},`Report a bug`),a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/issues`},`Open issues`),a(r,{to:`/versions`},`Versions`),a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint_web`},`Source of this site`))),a(`p`,{className:`spw-footer-note`},`This site is built with Reflex and `,a(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/reflex-silverpoint-react`},`reflex-silverpoint-react`),` 0.8.0: every chart and every control on it is live silverpoint, drawn by @silverpoint/react 0.8.0.`))),a(`title`,{},`Composed components · silverpoint docs`),a(`meta`,{content:`favicon.ico`,property:`og:image`}))}V.displayName=`Component(docs/composed)`;var H=n(V);export{H as default};