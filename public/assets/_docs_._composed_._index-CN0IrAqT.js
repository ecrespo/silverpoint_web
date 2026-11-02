import{a as e}from"./rolldown-runtime-BWaJ3C7D.js";import{G as t,a as n}from"./components-BRno7RdY.js";import{b as r,c as i}from"./state-B8QVjnGr.js";import{t as a}from"./menu-_IuBjuFZ.js";import{t as o}from"./copy-BrzSISXO.js";import{sn as s}from"./styles-CC9PYie8.js";import{ct as c,f as l,o as u,t as d}from"./ui-djKjX-7N.js";import{h as f,r as p}from"./chunk-JONYVBSY-RbrOl6bo.js";import{a as m}from"./chunk-TJJRHTZV-CPehDPvl.js";import{t as h}from"./chunk-PU2BOKV6-B-uHMsE-.js";import{n as g}from"./chunk-B2PXXOBL-6AM3r-mt.js";import{A as _,Aa as v,Ai as y,An as b,Ar as x,At as ee,Ba as te,Bn as ne,Ca as re,Ct as ie,Da as ae,Dn as oe,E as se,En as ce,F as le,Fr as ue,Gi as de,Gr as fe,Ha as pe,Hi as me,Hn as he,Ht as ge,Ia as _e,Ir as ve,Ji as ye,Ki as be,Kn as xe,Kt as S,La as C,Li as w,Lr as T,Mi as E,Mn as D,Mt as O,N as k,Ni as A,Nn as j,On as M,P as Se,Pa as Ce,Pi as we,Pr as Te,Pt as Ee,Q as De,Qt as Oe,Ra as ke,Rn as Ae,S as je,Sa as Me,T as Ne,Ta as Pe,Tn as Fe,Tr as Ie,Ut as Le,Va as Re,Vn as ze,Vr as Be,Vt as Ve,W as He,Wi as Ue,Wn as We,Wt as Ge,X as Ke,Xi as qe,Xr as Je,Yi as Ye,Yt as Xe,Zi as Ze,Zn as Qe,Zt as $e,_ as et,_r as tt,ai as N,an as nt,at as rt,ba as it,br as at,bt as ot,ci as st,cn as ct,cr as lt,ct as ut,da as dt,di as ft,dn as pt,dt as mt,er as ht,et as gt,f as _t,fn as vt,ft as P,g as yt,gi as bt,gn as xt,gt as St,ha as Ct,hn as wt,hr as Tt,ir as Et,ji as Dt,jn as Ot,jr as kt,jt as At,la as jt,ln as Mt,mi as Nt,mn as Pt,mr as Ft,mt as It,na as Lt,nr as Rt,nt as zt,on as Bt,ot as Vt,pn as Ht,pr as Ut,q as Wt,qi as Gt,qn as Kt,qt,rr as Jt,si as Yt,sr as Xt,st as Zt,ta as Qt,ti as $t,tt as en,u as tn,va as nn,vi as rn,vn as an,vt as on,wa as sn,wt as cn,xa as ln,xt as un,yi as dn,yr as fn,za as pn,zi as mn,zr as hn,zt as gn}from"./docs-Bup8tC3H.js";import"./context-CUidz2C6.js";import{n as F}from"./emotion-react.browser.esm-BSmvw_3e.js";var I=e(t(),1),L={class:`className`,for:`htmlFor`,readonly:`readOnly`,tabindex:`tabIndex`};function R(e){let t={};for(let n of(e||``).split(`;`)){let e=n.indexOf(`:`);e>0&&(t[n.slice(0,e).trim()]=n.slice(e+1).trim())}return t}function z(e,t,n){if(`text`in e)return e.text;if(`slot`in e)return e.slot===`content`?t:null;let r={};for(let[t,n]of Object.entries(e.attrs))n!==void 0&&(r[L[t]||t]=t===`style`?R(n):n);if(n){let{style:e,...t}=n;Object.assign(r,t),e&&(r.style={...r.style||{},...e})}return(0,I.createElement)(e.tag,r,...e.children.map(e=>z(e,t)))}function B(){let[e,t]=(0,I.useState)(!1);return(0,I.useEffect)(()=>{if(typeof matchMedia!=`function`)return;let e=matchMedia(s),n=()=>t(e.matches);return n(),e.addEventListener?.(`change`,n),()=>e.removeEventListener?.(`change`,n)},[]),e}(0,I.forwardRef)(function({ground:e,substrate:t,mode:n,size:r,seed:i,palette:a,variant:o,chevron:s,disabled:d,label:f,children:p,className:m,id:h,...g},_){let v=B(),y={ground:e,substrate:t,mode:n,size:r,seed:i,palette:a,variant:o,disabled:d,label:f,className:m,id:h,type:`button`},b=u(y,{forcedPrecision:v}),x=l(y,b,{text:typeof p==`string`||typeof p==`number`?String(p):p==null?void 0:`·`});return z(s?{...x,children:[...x.children,{tag:`svg`,attrs:{part:`sp-mark`,"data-glyph":`chevronDown`,viewBox:`0 0 16 16`,"aria-hidden":`true`},children:[{tag:`path`,attrs:{d:c.chevronDown},children:[]}]}]}:x,p,{...g,ref:_})});function V(){let e=(0,I.useRef)(null);i.ref_about=e;let t=(0,I.useRef)(null);i.ref_surface=t;let n=(0,I.useRef)(null);i.ref_glyph=n;let s=(0,I.useRef)(null);i.ref_table=s;let c=(0,I.useRef)(null);i.ref_pagination=c;let l=(0,I.useRef)(null);i.ref_breadcrumb=l;let u=(0,I.useRef)(null);i.ref_avatar=u;let L=(0,I.useRef)(null);i.ref_statistic=L;let R=(0,I.useRef)(null);i.ref_descriptions=R;let z=(0,I.useRef)(null);i.ref_timeline_list=z;let B=(0,I.useRef)(null);i.ref_collapse=B;let V=(0,I.useRef)(null);i.ref_empty=V;let H=(0,I.useRef)(null);i.ref_result=H;let U=(0,I.useRef)(null);i.ref_textarea=U;let W=(0,I.useRef)(null);i.ref_input_number=W;let G=(0,I.useRef)(null);i.ref_modal=G;let K=(0,I.useRef)(null);i.ref_drawer=K;let q=(0,I.useRef)(null);i.ref_popover=q;let J=(0,I.useRef)(null);i.ref_tooltip=J;let Y=(0,I.useRef)(null);i.ref_select=Y;let X=(0,I.useRef)(null);i.ref_dropdown_menu=X;let Z=(0,I.useRef)(null);i.ref_toast=Z;let Q=(0,I.useRef)(null);i.ref_trigger=Q;let $=(0,I.useRef)(null);return i.ref_main=$,F(I.Fragment,{},F(`div`,{className:`spw-site`},F(r,{className:`spw-skip`,to:`#main`},`Skip to content`),F(`header`,{className:`spw-header`},F(r,{className:`spw-brand`,to:`/`},F(`svg`,{"aria-hidden":`true`,className:`spw-mark`,height:`26`,viewBox:`0 0 32 32`,width:`26`},F(`g`,{stroke:`currentColor`},F(`line`,{css:{strokeWidth:`0.8`},x1:`4.75`,x2:`18.25`,y1:`13.75`,y2:`27.25`}),F(`line`,{css:{strokeWidth:`0.8`},x1:`7.00`,x2:`20.50`,y1:`11.50`,y2:`25.00`}),F(`line`,{css:{strokeWidth:`0.8`},x1:`9.25`,x2:`22.75`,y1:`9.25`,y2:`22.75`}),F(`line`,{css:{strokeWidth:`0.8`},x1:`11.50`,x2:`25.00`,y1:`7.00`,y2:`20.50`}),F(`line`,{css:{strokeWidth:`0.8`},x1:`13.75`,x2:`27.25`,y1:`4.75`,y2:`18.25`})),F(`path`,{css:{fill:`none`,stroke:`currentColor`,strokeWidth:`1.1`},d:`M16 2.5 C22 8.4 25.6 12 29.5 16 C23.4 22 20 25.6 16 29.5 C10.1 23.6 6.4 20 2.5 16 C8.6 10 12 6.4 16 2.5Z`}),F(`circle`,{css:{fill:`#fff`,stroke:`currentColor`,strokeWidth:`1.1`},cx:`16`,cy:`16`,r:`3.2`})),F(`span`,{className:`spw-brand-name`},`silverpoint`)),F(`nav`,{"aria-label":`Main`,className:`spw-nav`},F(r,{to:`/docs`},`Docs`),F(r,{to:`/gallery`},`Gallery`),F(r,{to:`/charts`},`Charts`),F(r,{to:`/components`},`Components`),F(r,{to:`/docs/dashboard`},`Dashboard`),F(r,{to:`/docs/ai`},`Use with AI`),F(r,{to:`/packages`},`Packages`),F(r,{to:`/versions`},`Versions`),F(r,{to:`/support`},`Report a bug`)),F(`div`,{className:`spw-header-tools`},F(`details`,{className:`spw-version`},F(`summary`,{className:`spw-version-summary`},`v0.9.2`,F(`small`,{},` latest`)),F(`div`,{className:`spw-version-menu`},F(r,{to:`/versions#v0-9-2`},F(`span`,{},`v0.9.2`),F(`small`,{},`2026-11-01`)),F(r,{to:`/versions#v0-9-1`},F(`span`,{},`v0.9.1`),F(`small`,{},`2026-11-01`)),F(r,{to:`/versions#v0-9-0`},F(`span`,{},`v0.9.0`),F(`small`,{},`2026-11-01`)),F(r,{to:`/versions#v0-8-0`},F(`span`,{},`v0.8.0`),F(`small`,{},`2026-10-21`)),F(r,{to:`/versions#v0-7-0`},F(`span`,{},`v0.7.0`),F(`small`,{},`2026-10-20`)),F(r,{to:`/versions#v0-6-0`},F(`span`,{},`v0.6.0`),F(`small`,{},`2026-10-10`)),F(r,{to:`/versions#v0-3-0`},F(`span`,{},`v0.3.0`),F(`small`,{},`2026-09-30`)),F(r,{to:`/versions#v0-2-0`},F(`span`,{},`v0.2.0`),F(`small`,{},`2026-09-26`)),F(r,{to:`/versions#v0-1-1`},F(`span`,{},`v0.1.1`),F(`small`,{},`2026-09-25`)),F(r,{to:`/versions#v0-1-0`},F(`span`,{},`v0.1.0`),F(`small`,{},`2026-09-25`)),F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/releases`},`All releases on GitHub ↗`))),F(r,{"aria-label":`silverpoint on GitHub`,className:`spw-icon-link`,rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint`},F(`svg`,{"aria-hidden":`true`,className:`spw-gh`,css:{fill:`currentColor`},height:`20`,viewBox:`0 0 16 16`,width:`20`},F(`path`,{d:`M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z`}))),F(r,{"aria-label":`silverpoint on npm`,className:`spw-icon-link`,rel:`noopener noreferrer`,target:`_blank`,to:`https://www.npmjs.com/search?q=silverpoint`},F(`span`,{className:`spw-npm`},`npm`))),F(`details`,{className:`spw-burger`},F(`summary`,{"aria-label":`Menu`},F(a,{size:22})),F(`nav`,{},F(r,{to:`/docs`},`Docs`),F(r,{to:`/gallery`},`Gallery`),F(r,{to:`/charts`},`Charts`),F(r,{to:`/components`},`Components`),F(r,{to:`/docs/dashboard`},`Dashboard`),F(r,{to:`/docs/ai`},`Use with AI`),F(r,{to:`/packages`},`Packages`),F(r,{to:`/versions`},`Versions`),F(r,{to:`/support`},`Report a bug`)))),F(`div`,{className:`spw-docs`},F(`details`,{className:`spw-sidebar-mobile`},F(`summary`,{},`Documentation menu`),F(`nav`,{"aria-label":`Documentation`,className:`spw-sidebar`},F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`Getting started`),F(r,{className:`spw-side-link`,to:`/docs`},`Overview`),F(r,{className:`spw-side-link`,to:`/docs/installation`},`Installation`),F(r,{className:`spw-side-link`,to:`/docs/react`},`React`),F(r,{className:`spw-side-link`,to:`/docs/vue`},`Vue`),F(r,{className:`spw-side-link`,to:`/docs/angular`},`Angular`),F(r,{className:`spw-side-link`,to:`/docs/reflex`},`Reflex (Python)`)),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`Concepts`),F(r,{className:`spw-side-link`,to:`/docs/grounds`},`Grounds & substrates`),F(r,{className:`spw-side-link`,to:`/docs/precision`},`Ink & precision`),F(r,{className:`spw-side-link`,to:`/docs/props`},`Common props`),F(r,{className:`spw-side-link`,to:`/docs/interaction`},`Interaction & readouts`),F(r,{className:`spw-side-link`,to:`/docs/export`},`Export & imperative handle`),F(r,{className:`spw-side-link`,to:`/docs/dashboard`},`Dashboards`),F(r,{className:`spw-side-link`,to:`/docs/drill-down`},`Drill-down & hierarchies`),F(r,{className:`spw-side-link`,to:`/docs/ui`},`UI components`),F(r,{className:`spw-side-link`,to:`/docs/ssr`},`Server rendering`),F(r,{className:`spw-side-link`,to:`/docs/accessibility`},`Accessibility`),F(r,{className:`spw-side-link`,to:`/docs/tailwind`},`Tailwind preset`)),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`New in 0.9`),F(r,{className:`spw-side-link`,to:`/docs/decks`},`Slide decks`)),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`Charts · 60`),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Lines · 4`),F(r,{className:`spw-side-link`,to:`/charts/line-chart`},`LineChart`),F(r,{className:`spw-side-link`,to:`/charts/step-chart`},`StepChart`),F(r,{className:`spw-side-link`,to:`/charts/sparkline-rows`},`SparklineRows`),F(r,{className:`spw-side-link`,to:`/charts/kpi-card`},`KpiCard`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Bars · 8`),F(r,{className:`spw-side-link`,to:`/charts/bar-chart`},`BarChart`),F(r,{className:`spw-side-link`,to:`/charts/stacked-bar-chart`},`StackedBarChart`),F(r,{className:`spw-side-link`,to:`/charts/composed-chart`},`ComposedChart`),F(r,{className:`spw-side-link`,to:`/charts/waterfall-chart`},`WaterfallChart`),F(r,{className:`spw-side-link`,to:`/charts/funnel-chart`},`FunnelChart`),F(r,{className:`spw-side-link`,to:`/charts/bullet-chart`},`BulletChart`),F(r,{className:`spw-side-link`,to:`/charts/pyramid-chart`},`PyramidChart`),F(r,{className:`spw-side-link`,to:`/charts/candlestick-chart`},`CandlestickChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Areas · 3`),F(r,{className:`spw-side-link`,to:`/charts/area-chart`},`AreaChart`),F(r,{className:`spw-side-link`,to:`/charts/range-band-chart`},`RangeBandChart`),F(r,{className:`spw-side-link`,to:`/charts/stream-chart`},`StreamChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Points & grids · 5`),F(r,{className:`spw-side-link`,to:`/charts/scatter-chart`},`ScatterChart`),F(r,{className:`spw-side-link`,to:`/charts/bubble-chart`},`BubbleChart`),F(r,{className:`spw-side-link`,to:`/charts/heatmap-chart`},`HeatmapChart`),F(r,{className:`spw-side-link`,to:`/charts/treemap-chart`},`TreemapChart`),F(r,{className:`spw-side-link`,to:`/charts/activity-grid`},`ActivityGrid`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Flows · 2`),F(r,{className:`spw-side-link`,to:`/charts/sankey-chart`},`SankeyChart`),F(r,{className:`spw-side-link`,to:`/charts/chord-ring`},`ChordRing`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Radial · 11`),F(r,{className:`spw-side-link`,to:`/charts/donut-chart`},`DonutChart`),F(r,{className:`spw-side-link`,to:`/charts/radar-chart`},`RadarChart`),F(r,{className:`spw-side-link`,to:`/charts/polar-bar-chart`},`PolarBarChart`),F(r,{className:`spw-side-link`,to:`/charts/radial-arc-group`},`RadialArcGroup`),F(r,{className:`spw-side-link`,to:`/charts/radial-rings`},`RadialRings`),F(r,{className:`spw-side-link`,to:`/charts/gauge-arc`},`GaugeArc`),F(r,{className:`spw-side-link`,to:`/charts/meter-chart`},`MeterChart`),F(r,{className:`spw-side-link`,to:`/charts/coxcomb-chart`},`CoxcombChart`),F(r,{className:`spw-side-link`,to:`/charts/wind-rose`},`WindRose`),F(r,{className:`spw-side-link`,to:`/charts/volvelle-chart`},`VolvelleChart`),F(r,{className:`spw-side-link`,to:`/charts/orbit-chart`},`OrbitChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Distributions & comparisons · 14`),F(r,{className:`spw-side-link`,to:`/charts/histogram-chart`},`HistogramChart`),F(r,{className:`spw-side-link`,to:`/charts/ecdf-chart`},`EcdfChart`),F(r,{className:`spw-side-link`,to:`/charts/box-plot-chart`},`BoxPlotChart`),F(r,{className:`spw-side-link`,to:`/charts/violin-chart`},`ViolinChart`),F(r,{className:`spw-side-link`,to:`/charts/ridgeline-chart`},`RidgelineChart`),F(r,{className:`spw-side-link`,to:`/charts/beeswarm-chart`},`BeeswarmChart`),F(r,{className:`spw-side-link`,to:`/charts/lollipop-chart`},`LollipopChart`),F(r,{className:`spw-side-link`,to:`/charts/dumbbell-chart`},`DumbbellChart`),F(r,{className:`spw-side-link`,to:`/charts/slope-chart`},`SlopeChart`),F(r,{className:`spw-side-link`,to:`/charts/bump-chart`},`BumpChart`),F(r,{className:`spw-side-link`,to:`/charts/error-bar-chart`},`ErrorBarChart`),F(r,{className:`spw-side-link`,to:`/charts/interval-chart`},`IntervalChart`),F(r,{className:`spw-side-link`,to:`/charts/diverging-bar-chart`},`DivergingBarChart`),F(r,{className:`spw-side-link`,to:`/charts/connected-scatter-chart`},`ConnectedScatterChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Hierarchies & dimensions · 8`),F(r,{className:`spw-side-link`,to:`/charts/waffle-chart`},`WaffleChart`),F(r,{className:`spw-side-link`,to:`/charts/marimekko-chart`},`MarimekkoChart`),F(r,{className:`spw-side-link`,to:`/charts/squarified-treemap`},`SquarifiedTreemap`),F(r,{className:`spw-side-link`,to:`/charts/sunburst-chart`},`SunburstChart`),F(r,{className:`spw-side-link`,to:`/charts/tree-chart`},`TreeChart`),F(r,{className:`spw-side-link`,to:`/charts/parallel-coordinates-chart`},`ParallelCoordinatesChart`),F(r,{className:`spw-side-link`,to:`/charts/polar-line-chart`},`PolarLineChart`),F(r,{className:`spw-side-link`,to:`/charts/polar-scatter-chart`},`PolarScatterChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Fields & networks · 5`),F(r,{className:`spw-side-link`,to:`/charts/density-bin-chart`},`DensityBinChart`),F(r,{className:`spw-side-link`,to:`/charts/contour-chart`},`ContourChart`),F(r,{className:`spw-side-link`,to:`/charts/delaunay-chart`},`DelaunayChart`),F(r,{className:`spw-side-link`,to:`/charts/vector-field-chart`},`VectorFieldChart`),F(r,{className:`spw-side-link`,to:`/charts/network-chart`},`NetworkChart`))),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`UI components · 38`),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Actions · 1`),F(r,{className:`spw-side-link`,to:`/components/button`},`Button`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Data entry · 7`),F(r,{className:`spw-side-link`,to:`/components/input`},`Input`),F(r,{className:`spw-side-link`,to:`/components/checkbox`},`Checkbox`),F(r,{className:`spw-side-link`,to:`/components/radio-group`},`RadioGroup`),F(r,{className:`spw-side-link`,to:`/components/switch`},`Switch`),F(r,{className:`spw-side-link`,to:`/components/slider`},`Slider`),F(r,{className:`spw-side-link`,to:`/components/rate`},`Rate`),F(r,{className:`spw-side-link`,to:`/components/segmented`},`Segmented`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Navigation · 2`),F(r,{className:`spw-side-link`,to:`/components/tabs`},`Tabs`),F(r,{className:`spw-side-link`,to:`/components/steps`},`Steps`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Data display · 4`),F(r,{className:`spw-side-link`,to:`/components/card`},`Card`),F(r,{className:`spw-side-link`,to:`/components/tag`},`Tag`),F(r,{className:`spw-side-link`,to:`/components/badge`},`Badge`),F(r,{className:`spw-side-link`,to:`/components/divider`},`Divider`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Feedback · 3`),F(r,{className:`spw-side-link`,to:`/components/progress`},`Progress`),F(r,{className:`spw-side-link`,to:`/components/alert`},`Alert`),F(r,{className:`spw-side-link`,to:`/components/skeleton`},`Skeleton`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Composed · 14`),F(r,{className:`spw-side-link`,to:`/components/surface`},`SpSurface`),F(r,{className:`spw-side-link`,to:`/components/glyph`},`SpGlyph`),F(r,{className:`spw-side-link`,to:`/components/table`},`SpTable`),F(r,{className:`spw-side-link`,to:`/components/pagination`},`SpPagination`),F(r,{className:`spw-side-link`,to:`/components/breadcrumb`},`SpBreadcrumb`),F(r,{className:`spw-side-link`,to:`/components/avatar`},`SpAvatar`),F(r,{className:`spw-side-link`,to:`/components/statistic`},`SpStatistic`),F(r,{className:`spw-side-link`,to:`/components/descriptions`},`SpDescriptions`),F(r,{className:`spw-side-link`,to:`/components/timeline-list`},`SpTimelineList`),F(r,{className:`spw-side-link`,to:`/components/collapse`},`SpCollapse`),F(r,{className:`spw-side-link`,to:`/components/empty`},`SpEmpty`),F(r,{className:`spw-side-link`,to:`/components/result`},`SpResult`),F(r,{className:`spw-side-link`,to:`/components/textarea`},`SpTextarea`),F(r,{className:`spw-side-link`,to:`/components/input-number`},`SpInputNumber`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Overlays · 7`),F(r,{className:`spw-side-link`,to:`/components/modal`},`SpModal`),F(r,{className:`spw-side-link`,to:`/components/drawer`},`SpDrawer`),F(r,{className:`spw-side-link`,to:`/components/popover`},`SpPopover`),F(r,{className:`spw-side-link`,to:`/components/tooltip`},`SpTooltip`),F(r,{className:`spw-side-link`,to:`/components/select`},`SpSelect`),F(r,{className:`spw-side-link`,to:`/components/dropdown-menu`},`SpDropdownMenu`),F(r,{className:`spw-side-link`,to:`/components/toast`},`SpToast`))),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`New in 0.8`),F(r,{className:`spw-side-link`,to:`/docs/ai`},`Use with AI`)))),F(`aside`,{className:`spw-sidebar-col`},F(`nav`,{"aria-label":`Documentation`,className:`spw-sidebar`},F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`Getting started`),F(r,{className:`spw-side-link`,to:`/docs`},`Overview`),F(r,{className:`spw-side-link`,to:`/docs/installation`},`Installation`),F(r,{className:`spw-side-link`,to:`/docs/react`},`React`),F(r,{className:`spw-side-link`,to:`/docs/vue`},`Vue`),F(r,{className:`spw-side-link`,to:`/docs/angular`},`Angular`),F(r,{className:`spw-side-link`,to:`/docs/reflex`},`Reflex (Python)`)),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`Concepts`),F(r,{className:`spw-side-link`,to:`/docs/grounds`},`Grounds & substrates`),F(r,{className:`spw-side-link`,to:`/docs/precision`},`Ink & precision`),F(r,{className:`spw-side-link`,to:`/docs/props`},`Common props`),F(r,{className:`spw-side-link`,to:`/docs/interaction`},`Interaction & readouts`),F(r,{className:`spw-side-link`,to:`/docs/export`},`Export & imperative handle`),F(r,{className:`spw-side-link`,to:`/docs/dashboard`},`Dashboards`),F(r,{className:`spw-side-link`,to:`/docs/drill-down`},`Drill-down & hierarchies`),F(r,{className:`spw-side-link`,to:`/docs/ui`},`UI components`),F(r,{className:`spw-side-link`,to:`/docs/ssr`},`Server rendering`),F(r,{className:`spw-side-link`,to:`/docs/accessibility`},`Accessibility`),F(r,{className:`spw-side-link`,to:`/docs/tailwind`},`Tailwind preset`)),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`New in 0.9`),F(r,{className:`spw-side-link`,to:`/docs/decks`},`Slide decks`)),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`Charts · 60`),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Lines · 4`),F(r,{className:`spw-side-link`,to:`/charts/line-chart`},`LineChart`),F(r,{className:`spw-side-link`,to:`/charts/step-chart`},`StepChart`),F(r,{className:`spw-side-link`,to:`/charts/sparkline-rows`},`SparklineRows`),F(r,{className:`spw-side-link`,to:`/charts/kpi-card`},`KpiCard`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Bars · 8`),F(r,{className:`spw-side-link`,to:`/charts/bar-chart`},`BarChart`),F(r,{className:`spw-side-link`,to:`/charts/stacked-bar-chart`},`StackedBarChart`),F(r,{className:`spw-side-link`,to:`/charts/composed-chart`},`ComposedChart`),F(r,{className:`spw-side-link`,to:`/charts/waterfall-chart`},`WaterfallChart`),F(r,{className:`spw-side-link`,to:`/charts/funnel-chart`},`FunnelChart`),F(r,{className:`spw-side-link`,to:`/charts/bullet-chart`},`BulletChart`),F(r,{className:`spw-side-link`,to:`/charts/pyramid-chart`},`PyramidChart`),F(r,{className:`spw-side-link`,to:`/charts/candlestick-chart`},`CandlestickChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Areas · 3`),F(r,{className:`spw-side-link`,to:`/charts/area-chart`},`AreaChart`),F(r,{className:`spw-side-link`,to:`/charts/range-band-chart`},`RangeBandChart`),F(r,{className:`spw-side-link`,to:`/charts/stream-chart`},`StreamChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Points & grids · 5`),F(r,{className:`spw-side-link`,to:`/charts/scatter-chart`},`ScatterChart`),F(r,{className:`spw-side-link`,to:`/charts/bubble-chart`},`BubbleChart`),F(r,{className:`spw-side-link`,to:`/charts/heatmap-chart`},`HeatmapChart`),F(r,{className:`spw-side-link`,to:`/charts/treemap-chart`},`TreemapChart`),F(r,{className:`spw-side-link`,to:`/charts/activity-grid`},`ActivityGrid`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Flows · 2`),F(r,{className:`spw-side-link`,to:`/charts/sankey-chart`},`SankeyChart`),F(r,{className:`spw-side-link`,to:`/charts/chord-ring`},`ChordRing`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Radial · 11`),F(r,{className:`spw-side-link`,to:`/charts/donut-chart`},`DonutChart`),F(r,{className:`spw-side-link`,to:`/charts/radar-chart`},`RadarChart`),F(r,{className:`spw-side-link`,to:`/charts/polar-bar-chart`},`PolarBarChart`),F(r,{className:`spw-side-link`,to:`/charts/radial-arc-group`},`RadialArcGroup`),F(r,{className:`spw-side-link`,to:`/charts/radial-rings`},`RadialRings`),F(r,{className:`spw-side-link`,to:`/charts/gauge-arc`},`GaugeArc`),F(r,{className:`spw-side-link`,to:`/charts/meter-chart`},`MeterChart`),F(r,{className:`spw-side-link`,to:`/charts/coxcomb-chart`},`CoxcombChart`),F(r,{className:`spw-side-link`,to:`/charts/wind-rose`},`WindRose`),F(r,{className:`spw-side-link`,to:`/charts/volvelle-chart`},`VolvelleChart`),F(r,{className:`spw-side-link`,to:`/charts/orbit-chart`},`OrbitChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Distributions & comparisons · 14`),F(r,{className:`spw-side-link`,to:`/charts/histogram-chart`},`HistogramChart`),F(r,{className:`spw-side-link`,to:`/charts/ecdf-chart`},`EcdfChart`),F(r,{className:`spw-side-link`,to:`/charts/box-plot-chart`},`BoxPlotChart`),F(r,{className:`spw-side-link`,to:`/charts/violin-chart`},`ViolinChart`),F(r,{className:`spw-side-link`,to:`/charts/ridgeline-chart`},`RidgelineChart`),F(r,{className:`spw-side-link`,to:`/charts/beeswarm-chart`},`BeeswarmChart`),F(r,{className:`spw-side-link`,to:`/charts/lollipop-chart`},`LollipopChart`),F(r,{className:`spw-side-link`,to:`/charts/dumbbell-chart`},`DumbbellChart`),F(r,{className:`spw-side-link`,to:`/charts/slope-chart`},`SlopeChart`),F(r,{className:`spw-side-link`,to:`/charts/bump-chart`},`BumpChart`),F(r,{className:`spw-side-link`,to:`/charts/error-bar-chart`},`ErrorBarChart`),F(r,{className:`spw-side-link`,to:`/charts/interval-chart`},`IntervalChart`),F(r,{className:`spw-side-link`,to:`/charts/diverging-bar-chart`},`DivergingBarChart`),F(r,{className:`spw-side-link`,to:`/charts/connected-scatter-chart`},`ConnectedScatterChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Hierarchies & dimensions · 8`),F(r,{className:`spw-side-link`,to:`/charts/waffle-chart`},`WaffleChart`),F(r,{className:`spw-side-link`,to:`/charts/marimekko-chart`},`MarimekkoChart`),F(r,{className:`spw-side-link`,to:`/charts/squarified-treemap`},`SquarifiedTreemap`),F(r,{className:`spw-side-link`,to:`/charts/sunburst-chart`},`SunburstChart`),F(r,{className:`spw-side-link`,to:`/charts/tree-chart`},`TreeChart`),F(r,{className:`spw-side-link`,to:`/charts/parallel-coordinates-chart`},`ParallelCoordinatesChart`),F(r,{className:`spw-side-link`,to:`/charts/polar-line-chart`},`PolarLineChart`),F(r,{className:`spw-side-link`,to:`/charts/polar-scatter-chart`},`PolarScatterChart`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Fields & networks · 5`),F(r,{className:`spw-side-link`,to:`/charts/density-bin-chart`},`DensityBinChart`),F(r,{className:`spw-side-link`,to:`/charts/contour-chart`},`ContourChart`),F(r,{className:`spw-side-link`,to:`/charts/delaunay-chart`},`DelaunayChart`),F(r,{className:`spw-side-link`,to:`/charts/vector-field-chart`},`VectorFieldChart`),F(r,{className:`spw-side-link`,to:`/charts/network-chart`},`NetworkChart`))),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`UI components · 38`),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Actions · 1`),F(r,{className:`spw-side-link`,to:`/components/button`},`Button`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Data entry · 7`),F(r,{className:`spw-side-link`,to:`/components/input`},`Input`),F(r,{className:`spw-side-link`,to:`/components/checkbox`},`Checkbox`),F(r,{className:`spw-side-link`,to:`/components/radio-group`},`RadioGroup`),F(r,{className:`spw-side-link`,to:`/components/switch`},`Switch`),F(r,{className:`spw-side-link`,to:`/components/slider`},`Slider`),F(r,{className:`spw-side-link`,to:`/components/rate`},`Rate`),F(r,{className:`spw-side-link`,to:`/components/segmented`},`Segmented`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Navigation · 2`),F(r,{className:`spw-side-link`,to:`/components/tabs`},`Tabs`),F(r,{className:`spw-side-link`,to:`/components/steps`},`Steps`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Data display · 4`),F(r,{className:`spw-side-link`,to:`/components/card`},`Card`),F(r,{className:`spw-side-link`,to:`/components/tag`},`Tag`),F(r,{className:`spw-side-link`,to:`/components/badge`},`Badge`),F(r,{className:`spw-side-link`,to:`/components/divider`},`Divider`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Feedback · 3`),F(r,{className:`spw-side-link`,to:`/components/progress`},`Progress`),F(r,{className:`spw-side-link`,to:`/components/alert`},`Alert`),F(r,{className:`spw-side-link`,to:`/components/skeleton`},`Skeleton`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Composed · 14`),F(r,{className:`spw-side-link`,to:`/components/surface`},`SpSurface`),F(r,{className:`spw-side-link`,to:`/components/glyph`},`SpGlyph`),F(r,{className:`spw-side-link`,to:`/components/table`},`SpTable`),F(r,{className:`spw-side-link`,to:`/components/pagination`},`SpPagination`),F(r,{className:`spw-side-link`,to:`/components/breadcrumb`},`SpBreadcrumb`),F(r,{className:`spw-side-link`,to:`/components/avatar`},`SpAvatar`),F(r,{className:`spw-side-link`,to:`/components/statistic`},`SpStatistic`),F(r,{className:`spw-side-link`,to:`/components/descriptions`},`SpDescriptions`),F(r,{className:`spw-side-link`,to:`/components/timeline-list`},`SpTimelineList`),F(r,{className:`spw-side-link`,to:`/components/collapse`},`SpCollapse`),F(r,{className:`spw-side-link`,to:`/components/empty`},`SpEmpty`),F(r,{className:`spw-side-link`,to:`/components/result`},`SpResult`),F(r,{className:`spw-side-link`,to:`/components/textarea`},`SpTextarea`),F(r,{className:`spw-side-link`,to:`/components/input-number`},`SpInputNumber`)),F(`details`,{className:`spw-side-family`,open:!1},F(`summary`,{},`Overlays · 7`),F(r,{className:`spw-side-link`,to:`/components/modal`},`SpModal`),F(r,{className:`spw-side-link`,to:`/components/drawer`},`SpDrawer`),F(r,{className:`spw-side-link`,to:`/components/popover`},`SpPopover`),F(r,{className:`spw-side-link`,to:`/components/tooltip`},`SpTooltip`),F(r,{className:`spw-side-link`,to:`/components/select`},`SpSelect`),F(r,{className:`spw-side-link`,to:`/components/dropdown-menu`},`SpDropdownMenu`),F(r,{className:`spw-side-link`,to:`/components/toast`},`SpToast`))),F(`div`,{className:`spw-side-group`},F(`p`,{className:`spw-side-title`},`New in 0.8`),F(r,{className:`spw-side-link`,to:`/docs/ai`},`Use with AI`)))),F(`main`,{className:`spw-docs-main`,id:`main`,ref:$},F(`article`,{className:`spw-article`},F(`p`,{className:`spw-eyebrow`},`New in 0.7`),F(`h1`,{},`Composed components`),F(`div`,{className:`spw-lede`},`New in silverpoint 0.7 and reflex-silverpoint-react 0.7. Components drawn on silverpoint's frames and tones: tables, pagination, statistics, collapse panels, and overlays — modal, drawer, popover, tooltip, select, menu and toast — in React, Vue, Angular and Reflex.`),F(`section`,{className:`spw-section`},F(`h2`,{id:`about`,ref:e},F(r,{className:`spw-anchor`,to:`#about`},`Drawn with silverpoint's own pieces`)),F(`p`,{},F(`code`,{},`@silverpoint/grounds/ui.css`),` draws its hand-inked frames, hatched tones and heightening on any element that follows its markup contract, so these components are drawn with exactly the same pieces as the first 17. silverpoint `,`0.9.2 ships them in React, Vue and Angular, on `,F(`code`,{},`@silverpoint/<framework>/ui/<name>`),` beside the others (38 UI components in all); `,F(`code`,{},`SpSurface`),` and `,F(`code`,{},`SpGlyph`),` (`,F(`code`,{},`sp_surface`),`, `,F(`code`,{},`sp_glyph`),`) are the building blocks, for components of your own.`),F(d,{className:`spw-callout spw-callout-note`,kind:`info`,size:`sm`,title:`Note`},F(`span`,{},`The live demos are the Reflex versions of reflex-silverpoint-react `,`0.9.1`,`: the same @silverpoint/react components, overlays on <dialog> and the Popover API included, and they read silverpoint_provider. Props are snake_case; a string `,F(`code`,{},`trigger`),` becomes an `,F(`code`,{},`sp_trigger`),`, a native button that keeps the ARIA the overlay clones onto it.`)),F(`div`,{className:`spw-table-wrap`},F(`table`,{className:`spw-table`},F(`thead`,{},F(`tr`,{},F(`th`,{},`Level`),F(`th`,{},`Components`))),F(`tbody`,{},F(`tr`,{},F(`td`,{},`Composed components · native markup`),F(`td`,{},F(`span`,{},F(r,{className:`spw-chip`,to:`#surface`},`sp_surface`),F(r,{className:`spw-chip`,to:`#glyph`},`sp_glyph`),F(r,{className:`spw-chip`,to:`#table`},`sp_table · sort_rows`),F(r,{className:`spw-chip`,to:`#pagination`},`sp_pagination`),F(r,{className:`spw-chip`,to:`#breadcrumb`},`sp_breadcrumb`),F(r,{className:`spw-chip`,to:`#avatar`},`sp_avatar · sp_avatar_group`),F(r,{className:`spw-chip`,to:`#statistic`},`sp_statistic`),F(r,{className:`spw-chip`,to:`#descriptions`},`sp_descriptions`),F(r,{className:`spw-chip`,to:`#timeline-list`},`sp_timeline_list`),F(r,{className:`spw-chip`,to:`#collapse`},`sp_collapse · sp_collapse_item`),F(r,{className:`spw-chip`,to:`#empty`},`sp_empty`),F(r,{className:`spw-chip`,to:`#result`},`sp_result`),F(r,{className:`spw-chip`,to:`#textarea`},`sp_textarea`),F(r,{className:`spw-chip`,to:`#input-number`},`sp_input_number`)))),F(`tr`,{},F(`td`,{},`Overlays`),F(`td`,{},F(`span`,{},F(r,{className:`spw-chip`,to:`#modal`},`sp_modal`),F(r,{className:`spw-chip`,to:`#drawer`},`sp_drawer`),F(r,{className:`spw-chip`,to:`#popover`},`sp_popover`),F(r,{className:`spw-chip`,to:`#tooltip`},`sp_tooltip`),F(r,{className:`spw-chip`,to:`#select`},`sp_select`),F(r,{className:`spw-chip`,to:`#dropdown-menu`},`sp_dropdown_menu`),F(r,{className:`spw-chip`,to:`#toast`},`sp_toast · sp_toaster`),F(r,{className:`spw-chip`,to:`#trigger`},`sp_trigger`))))))),F(`p`,{},`Every demo on this page follows these controls:`),F(`div`,{className:`spw-controls`},F(`div`,{className:`spw-choice`},F(`span`,{"aria-hidden":`true`,className:`spw-choice-label`},`Ground`),F(Lt,{})),F(`div`,{className:`spw-choice`},F(`span`,{"aria-hidden":`true`,className:`spw-choice-label`},`Substrate`),F(jt,{})),F(`div`,{className:`spw-choice`},F(`span`,{"aria-hidden":`true`,className:`spw-choice-label`},`Mode`),F(Ct,{})),F(`div`,{className:`spw-choice`},F(`span`,{"aria-hidden":`true`,className:`spw-choice-label`},`Palette`),F(dt,{})))),F(`section`,{className:`spw-section`},F(`h2`,{id:`surface`,ref:t},F(r,{className:`spw-anchor`,to:`#surface`},`sp_surface`)),F(`p`,{},`The root contract on any element: the ground's class, a hand-drawn frame (control, pill, box, card or round) and a hatched tone (1–4, or a state such as selected or primary).`,` `,F(r,{to:`/components/surface`},`SpSurface reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(`div`,{className:`spw-row spw-surface-demo`},F(Pe,{},F(`span`,{},`A card frame`)),F(sn,{},F(`span`,{},`A pill, toned 2`)),F(Me,{},F(`span`,{},`Selected`)),F(re,{},F(`span`,{},`4`))))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(Pt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpSurface } from '@silverpoint/react/ui/surface';

<SpSurface frame="card">A card frame</SpSurface>
<SpSurface frame="pill" tone={2}>A pill, toned 2</SpSurface>
<SpSurface frame="control" tone="selected">Selected</SpSurface>
<SpSurface as="span" frame="round" tone={4}>4</SpSurface> {/* as: the HTML tag, div by default */}`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(P,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpSurface } from '@silverpoint/vue/ui/surface';
<\/script>

<template>
  <SpSurface frame="card">A card frame</SpSurface>
  <SpSurface frame="pill" :tone="2">A pill, toned 2</SpSurface>
  <SpSurface frame="control" tone="selected">Selected</SpSurface>
  <SpSurface as="span" frame="round" :tone="4">4</SpSurface>
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(T,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
export class Surfaces {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(Bt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_surface(rx.el.span("A card frame"), frame="card")
sp_surface(rx.el.span("A pill, toned 2"), frame="pill", tone=2)
sp_surface(rx.el.span("Selected"), frame="control", tone="selected")
sp_surface("4", frame="round", tone=4, element="span")  # element: the HTML tag (div by default)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`glyph`,ref:n},F(r,{className:`spw-anchor`,to:`#glyph`},`sp_glyph`)),F(`p`,{},`One exact 16×16 mark of UI_GLYPHS — tick, cross, chevrons, arrows, sort marks… — stroked with the text colour, never inked.`,` `,F(r,{to:`/components/glyph`},`SpGlyph reference →`)),F(`div`,{className:`spw-card spw-live`},F(rn,{},F(`div`,{className:`spw-row`},F(`span`,{className:`spw-glyph-sample`},F(h,{glyph:`tick`}),F(`code`,{},`tick`)),F(`span`,{className:`spw-glyph-sample`},F(h,{glyph:`cross`}),F(`code`,{},`cross`)),F(`span`,{className:`spw-glyph-sample`},F(h,{glyph:`warning`}),F(`code`,{},`warning`)),F(`span`,{className:`spw-glyph-sample`},F(h,{glyph:`info`}),F(`code`,{},`info`)),F(`span`,{className:`spw-glyph-sample`},F(h,{glyph:`plus`}),F(`code`,{},`plus`)),F(`span`,{className:`spw-glyph-sample`},F(h,{glyph:`chevronDown`}),F(`code`,{},`chevronDown`)),F(`span`,{className:`spw-glyph-sample`},F(h,{glyph:`arrowUp`}),F(`code`,{},`arrowUp`)),F(`span`,{className:`spw-glyph-sample`},F(h,{glyph:`sort`}),F(`code`,{},`sort`)),F(`span`,{className:`spw-glyph-sample`},F(h,{glyph:`ellipsis`}),F(`code`,{},`ellipsis`))))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(nt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpGlyph } from '@silverpoint/react/ui/glyph';

<SpGlyph glyph="tick" />
<SpGlyph glyph="chevronDown" />
<SpGlyph glyph="sort" /> {/* any key of UI_GLYPHS, from '@silverpoint/core/ui' */}`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(un,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpGlyph } from '@silverpoint/vue/ui/glyph';
<\/script>

<template>
  <SpGlyph glyph="tick" />
  <SpGlyph glyph="chevronDown" />
  <SpGlyph glyph="sort" />
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(qt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
export class Marks {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(D,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_glyph(glyph="tick")
sp_glyph(glyph="chevronDown")
sp_glyph(glyph="sort")  # tick, dash, cross, warning, dot, lozenge, info, plus, chevron…, arrow…, sort…, ellipsis`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`table`,ref:s},F(r,{className:`spw-anchor`,to:`#table`},`sp_table · sort_rows`)),F(`p`,{},`Card-framed table: small-caps header, tabular figures, hatched striping, sortable headers with aria-sort.`,` `,F(r,{to:`/components/table`},`SpTable reference →`)),F(`div`,{className:`spw-card spw-live`},F(Nt,{},F(ae,{}))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(rt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { useState } from 'react';
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
}`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(De,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
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
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(ze,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component, computed, input, signal } from '@angular/core';
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
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(at,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`class State(rx.State):
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
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`pagination`,ref:c},F(r,{className:`spw-anchor`,to:`#pagination`},`sp_pagination`)),F(`p`,{},`Previous and next, first and last, a window around the current page (heightened); on_change(page).`,` `,F(r,{to:`/components/pagination`},`SpPagination reference →`)),F(`div`,{className:`spw-card spw-live`},F(fe,{},F(`div`,{className:`spw-stack`},F(qe,{}),F(`p`,{className:`spw-small`},`Page `,F(`code`,{},F(tn,{})))))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(ot,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { useState } from 'react';
import { SpPagination } from '@silverpoint/react/ui/pagination';

export function Pages() {
  const [page, setPage] = useState(3);
  // total: items in all pages; pageSize defaults to 10. onChange receives the page number.
  return <SpPagination total={240} current={page} onChange={setPage} showTotal />;
}`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(Vt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpPagination } from '@silverpoint/vue/ui/pagination';

const page = ref(3);
<\/script>

<template>
  <SpPagination v-model:current="page" :total="240" show-total />
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(tt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component, signal } from '@angular/core';
import { SpPagination } from '@silverpoint/angular/ui/pagination';

@Component({
  selector: 'app-pages',
  imports: [SpPagination],
  template: \`<sp-pagination [(current)]="page" [total]="240" [showTotal]="true" />\`,
})
export class Pages {
  protected readonly page = signal(3);
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(ge,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_pagination(
    total=240,  # items in all pages; page_size=10 by default
    current=State.page,
    on_change=State.set_page,  # receives the page number
    show_total=True,  # "21–30 of 240"
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`breadcrumb`,ref:l},F(r,{className:`spw-anchor`,to:`#breadcrumb`},`sp_breadcrumb`)),F(`p`,{},`A <nav> of links separated by hairline slashes; the last item is the current page.`,` `,F(r,{to:`/components/breadcrumb`},`SpBreadcrumb reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(w,{}))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(kt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpBreadcrumb } from '@silverpoint/react/ui/breadcrumb';

const trail = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Composed components', href: '/docs/composed' }, // the last item is the current page
];

<SpBreadcrumb items={trail} />`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(je,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpBreadcrumb } from '@silverpoint/vue/ui/breadcrumb';

const trail = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Composed components', href: '/docs/composed' },
];
<\/script>

<template>
  <SpBreadcrumb :items="trail" />
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(Et,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(Qe,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_breadcrumb(
    [
        {"label": "Docs", "href": "/docs"},
        {"label": "Components", "href": "/components"},
        {"label": "Composed components", "href": "/docs/composed"},
    ]
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`avatar`,ref:u},F(r,{className:`spw-anchor`,to:`#avatar`},`sp_avatar · sp_avatar_group`)),F(`p`,{},`A portrait or the person's initials in a drawn round (or square) frame; groups overlap.`,` `,F(r,{to:`/components/avatar`},`SpAvatar reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(`div`,{className:`spw-row`},F(Dt,{}),F(y,{}),F(p,{label:`Draughtsmen`},F(E,{}),F(A,{}),F(we,{}))))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(Tt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpAvatar, SpAvatarGroup } from '@silverpoint/react/ui/avatar';

<SpAvatar name="Ernesto Crespo" size="lg" /> {/* initials when there is no src */}
<SpAvatar name="Leonardo da Vinci" shape="square" />
<SpAvatar src="/portrait.png" name="Anna Atkins" />
<SpAvatarGroup label="Draughtsmen">
  <SpAvatar name="Albrecht Dürer" size="sm" />
  <SpAvatar name="Raphael Sanzio" size="sm" />
</SpAvatarGroup>`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(xe,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpAvatar, SpAvatarGroup } from '@silverpoint/vue/ui/avatar';
<\/script>

<template>
  <SpAvatar name="Ernesto Crespo" size="lg" />
  <SpAvatar name="Leonardo da Vinci" shape="square" />
  <SpAvatarGroup label="Draughtsmen">
    <SpAvatar name="Albrecht Dürer" size="sm" />
    <SpAvatar name="Raphael Sanzio" size="sm" />
  </SpAvatarGroup>
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(St,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
export class People {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(Ge,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_avatar(name="Ernesto Crespo", size="lg")  # initials when there is no src
sp_avatar(name="Leonardo da Vinci", shape="square")
sp_avatar(src="/portrait.png", name="Anna Atkins")
sp_avatar_group(
    sp_avatar(name="Albrecht Dürer", size="sm"),
    sp_avatar(name="Raphael Sanzio", size="sm"),
    label="Draughtsmen",
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`statistic`,ref:L},F(r,{className:`spw-anchor`,to:`#statistic`},`sp_statistic`)),F(`p`,{},`A small-caps title, a large tabular figure, prefix and suffix, and a trend arrow.`,` `,F(r,{to:`/components/statistic`},`SpStatistic reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(`div`,{className:`spw-row`},F(ln,{}),F(it,{})))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(It,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpStatistic } from '@silverpoint/react/ui/statistic';

<SpStatistic title="Revenue" value="48.2" prefix="$" suffix="k" trend="up" delta="+8.2 %" />
<SpStatistic title="Churn" value="2.1" suffix="%" trend="down" delta="−0.4 %" />`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(oe,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpStatistic } from '@silverpoint/vue/ui/statistic';
<\/script>

<template>
  <SpStatistic title="Revenue" value="48.2" prefix="$" suffix="k" trend="up" delta="+8.2 %" />
  <SpStatistic title="Churn" value="2.1" suffix="%" trend="down" delta="−0.4 %" />
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(S,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
import { SpStatistic } from '@silverpoint/angular/ui/statistic';

@Component({
  selector: 'app-figures',
  imports: [SpStatistic],
  template: \`
    <sp-statistic title="Revenue" value="48.2" prefix="$" suffix="k" trend="up" delta="+8.2 %" />
    <sp-statistic title="Churn" value="2.1" suffix="%" trend="down" delta="−0.4 %" />
  \`,
})
export class Figures {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(Te,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_statistic("Revenue", "48.2", prefix="$", suffix="k", trend="up", delta="+8.2 %")
sp_statistic("Churn", "2.1", suffix="%", trend="down", delta="−0.4 %")`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`descriptions`,ref:R},F(r,{className:`spw-anchor`,to:`#descriptions`},`sp_descriptions`)),F(`p`,{},`A label–value grid (a <dl>), optionally card-framed; one column on narrow containers.`,` `,F(r,{to:`/components/descriptions`},`SpDescriptions reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(Ue,{}))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(en,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpDescriptions } from '@silverpoint/react/ui/descriptions';

const release = [
  { label: 'Ground', value: 'silverpoint' },
  { label: 'Substrate', value: 'cream' },
  { label: 'Charts', value: '60' },
];

<SpDescriptions title="The release" items={release} columns={3} />`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(mt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpDescriptions } from '@silverpoint/vue/ui/descriptions';

const release = [
  { label: 'Ground', value: 'silverpoint' },
  { label: 'Substrate', value: 'cream' },
  { label: 'Charts', value: '60' },
];
<\/script>

<template>
  <SpDescriptions title="The release" :items="release" :columns="3" />
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(Zt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(Ut,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_descriptions(
    [
        {"label": "Ground", "value": "silverpoint"},
        {"label": "Substrate", "value": "cream"},
        {"label": "Charts", "value": "60"},
    ],
    title="The release",
    columns=3,
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`timeline-list`,ref:z},F(r,{className:`spw-anchor`,to:`#timeline-list`},`sp_timeline_list`)),F(`p`,{},`A vertical list of events: done (hatched), current (heightened), pending and error.`,` `,F(r,{to:`/components/timeline-list`},`SpTimelineList reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(_e,{}))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(xt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpTimelineList } from '@silverpoint/react/ui/timeline-list';

const steps = [
  { title: 'Drawn', time: '09:12', description: 'The ground is prepared.', status: 'done' },
  { title: 'Reviewed', time: '11:05', description: 'Precision mode checked.', status: 'current' },
  { title: 'Published', time: '—', description: 'Waiting for the release.', status: 'pending' },
] as const;

<SpTimelineList items={steps} label="Release steps" />`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(Oe,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpTimelineList } from '@silverpoint/vue/ui/timeline-list';

const steps = [
  { title: 'Drawn', time: '09:12', description: 'The ground is prepared.', status: 'done' },
  { title: 'Reviewed', time: '11:05', description: 'Precision mode checked.', status: 'current' },
  { title: 'Published', time: '—', description: 'Waiting for the release.', status: 'pending' },
] as const;
<\/script>

<template>
  <SpTimelineList :items="steps" label="Release steps" />
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(Ot,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(ct,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_timeline_list(
    [
        {"title": "Drawn", "time": "09:12", "description": "The ground is prepared.", "status": "done"},
        {"title": "Reviewed", "time": "11:05", "description": "Precision mode checked.", "status": "current"},
        {"title": "Published", "time": "—", "description": "Waiting for the release.", "status": "pending"},
    ],
    label="Release steps",
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`collapse`,ref:B},F(r,{className:`spw-anchor`,to:`#collapse`},`sp_collapse · sp_collapse_item`)),F(`p`,{},`Panels that open and close, on native <details>; accordion=True keeps one open.`,` `,F(r,{to:`/components/collapse`},`SpCollapse reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(me,{},F(m,{defaultOpen:!0,title:`What is silverpoint?`},F(`p`,{},`A fine silver line on a prepared ground.`)),F(m,{title:`And cyanotype?`},F(`p`,{},`A white line on Prussian blue; tone is its weight.`)),F(m,{title:`Precision mode`},F(`p`,{},`The inking switched off: exact rules only.`))))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(ht,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpCollapse, SpCollapseItem } from '@silverpoint/react/ui/collapse';

<SpCollapse accordion> {/* native exclusive <details name> */}
  <SpCollapseItem title="What is silverpoint?" defaultOpen>
    <p>A fine silver line on a prepared ground.</p>
  </SpCollapseItem>
  <SpCollapseItem title="And cyanotype?">
    <p>A white line on Prussian blue; tone is its weight.</p>
  </SpCollapseItem>
</SpCollapse>`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(M,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
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
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(Xe,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
export class Faq {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(se,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_collapse(
    sp_collapse_item("What is silverpoint?", rx.el.p("A fine silver line…"), open=True),
    sp_collapse_item("And cyanotype?", rx.el.p("A white line on Prussian blue…")),
    accordion=True,  # native exclusive <details name>
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`empty`,ref:V},F(r,{className:`spw-anchor`,to:`#empty`},`sp_empty`)),F(`p`,{},`The empty state: a lightly hatched, drawn tray, a line of italic text and actions.`,` `,F(r,{to:`/components/empty`},`SpEmpty reference →`)),F(`div`,{className:`spw-card spw-live`},F(Je,{},F(Gt,{}))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(ie,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpButton } from '@silverpoint/react/ui/button';
import { SpEmpty } from '@silverpoint/react/ui/empty';

<SpEmpty description="No charts yet" extra={<SpButton size="sm">Add a chart</SpButton>} />`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(ce,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpEmpty } from '@silverpoint/vue/ui/empty';
<\/script>

<template>
  <SpEmpty description="No charts yet">
    <template #extra><SpButton size="sm">Add a chart</SpButton></template>
  </SpEmpty>
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(ee,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
export class NoCharts {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(ve,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_empty(sp_button("Add a chart", size="sm"), description="No charts yet")`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`result`,ref:H},F(r,{className:`spw-anchor`,to:`#result`},`sp_result`)),F(`p`,{},`The outcome of an operation: a drawn round mark (tick, info, warning, cross), title and subtitle.`,` `,F(r,{to:`/components/result`},`SpResult reference →`)),F(`div`,{className:`spw-card spw-live`},F(Be,{},F(Qt,{}))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(on,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpButton } from '@silverpoint/react/ui/button';
import { SpResult } from '@silverpoint/react/ui/result';

<SpResult
  status="success" // success, info, warning or error
  title="Published"
  subtitle="Every package reached npm."
  extra={<SpButton size="sm" href="/gallery">Back to the gallery</SpButton>}
/>`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(Fe,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpResult } from '@silverpoint/vue/ui/result';
<\/script>

<template>
  <SpResult status="success" title="Published" subtitle="Every package reached npm.">
    <template #extra><SpButton size="sm" href="/gallery">Back to the gallery</SpButton></template>
  </SpResult>
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(Ke,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
export class Published {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(_,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_result(
    sp_button("Back to the gallery", href="/gallery", size="sm"),
    status="success",  # success, info, warning or error
    title="Published",
    subtitle="Every package reached PyPI.",
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`textarea`,ref:U},F(r,{className:`spw-anchor`,to:`#textarea`},`sp_textarea`)),F(`p`,{},`Multi-line text on the SpInput contract: drawn frame, italic placeholder, counter and message.`,` `,F(r,{to:`/components/textarea`},`SpTextarea reference →`)),F(`div`,{className:`spw-card spw-live`},F($t,{},F(Ce,{}))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(Xt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { useState } from 'react';
import { SpTextarea } from '@silverpoint/react/ui/textarea';

export function Note() {
  const [note, setNote] = useState('Drawn in silverpoint.');
  // onChange receives the text, not the DOM event
  return <SpTextarea label="Note" value={note} onChange={setNote} rows={3} maxLength={120} showCount />;
}`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(pt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpTextarea } from '@silverpoint/vue/ui/textarea';

const note = ref('Drawn in silverpoint.');
<\/script>

<template>
  <SpTextarea v-model="note" label="Note" :rows="3" :max-length="120" show-count />
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(vt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component, signal } from '@angular/core';
import { SpTextarea } from '@silverpoint/angular/ui/textarea';

@Component({
  selector: 'app-note',
  imports: [SpTextarea],
  // or ngModel / formControlName: SpTextarea is a ControlValueAccessor
  template: \`<sp-textarea [(value)]="note" label="Note" [rows]="3" [maxLength]="120" [showCount]="true" />\`,
})
export class Note {
  protected readonly note = signal('Drawn in silverpoint.');
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(x,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_textarea(
    label="Note",
    value=State.note,
    on_change=State.set_note,  # receives the text, not a DOM event
    rows=3,
    max_length=120,
    show_count=True,
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`input-number`,ref:W},F(r,{className:`spw-anchor`,to:`#input-number`},`sp_input_number`)),F(`p`,{},`A number field with exact − and + steppers, clamped to min and max; on_change receives the number.`,` `,F(r,{to:`/components/input-number`},`SpInputNumber reference →`)),F(`div`,{className:`spw-card spw-live`},F(Yt,{},F(`div`,{className:`spw-stack`},F(ye,{}),F(`p`,{className:`spw-small`},`Value `,F(`code`,{},F(yt,{})))))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(Ve,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { useState } from 'react';
import { SpInputNumber } from '@silverpoint/react/ui/input-number';

export function Copies() {
  const [copies, setCopies] = useState<number | null>(3); // null is an empty field
  return <SpInputNumber label="Copies" value={copies} onChange={setCopies} min={1} max={10} />;
}`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(wt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpInputNumber } from '@silverpoint/vue/ui/input-number';

const copies = ref<number | null>(3);
<\/script>

<template>
  <SpInputNumber v-model="copies" label="Copies" :min="1" :max="10" />
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(Ie,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component, signal } from '@angular/core';
import { SpInputNumber } from '@silverpoint/angular/ui/input-number';

@Component({
  selector: 'app-copies',
  imports: [SpInputNumber],
  template: \`<sp-input-number [(value)]="copies" label="Copies" [min]="1" [max]="10" />\`,
})
export class Copies {
  protected readonly copies = signal<number | null>(3);
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(Ht,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_input_number(label="Copies", value=State.copies, on_change=State.set_copies, min=1, max=10)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`modal`,ref:G},F(r,{className:`spw-anchor`,to:`#modal`},`sp_modal`)),F(`p`,{},`A dialog on a card frame over a hatched backdrop: focus trapped, Escape closes it.`,` `,F(r,{to:`/components/modal`},`SpModal reference →`)),F(`div`,{className:`spw-card spw-live`},F(st,{},F(Ye,{},F(`p`,{},`Apply the new ground to every chart on the page?`)))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(j,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { useState } from 'react';
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
}`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(fn,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
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
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(Ae,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component, signal } from '@angular/core';
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
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(cn,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_modal(
    rx.el.p("Apply the new ground to every chart on the page?"),
    trigger="Open the modal",  # a string becomes sp_trigger(...)
    title="Apply changes",
    description="The geometry of the data does not move.",
    footer=sp_trigger("Apply", variant="primary", on_click=State.confirm),
    open=State.modal_open,
    on_open_change=State.set_modal_open,
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`drawer`,ref:K},F(r,{className:`spw-anchor`,to:`#drawer`},`sp_drawer`)),F(`p`,{},`The same dialog, sliding in from any edge (side='end', the default, 'start', 'top' or 'bottom').`,` `,F(r,{to:`/components/drawer`},`SpDrawer reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(de,{},F(`p`,{},`A panel that slides in from any edge, over a hatched backdrop.`)))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(Ee,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpDrawer } from '@silverpoint/react/ui/drawer';

// side: start, end (the default), top or bottom; uncontrolled here
<SpDrawer title="Settings" side="end" trigger={<button type="button">Open the drawer</button>}>
  <p>A panel that slides in from any edge, over a hatched backdrop.</p>
</SpDrawer>`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(k,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpDrawer } from '@silverpoint/vue/ui/drawer';
<\/script>

<template>
  <SpDrawer title="Settings" side="end">
    <template #trigger><button type="button">Open the drawer</button></template>
    <p>A panel that slides in from any edge, over a hatched backdrop.</p>
  </SpDrawer>
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(gt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
export class Settings {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(Ne,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_drawer(rx.el.p("A panel that slides in…"), trigger="Open the drawer", title="Settings", side="end")`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`popover`,ref:q},F(r,{className:`spw-anchor`,to:`#popover`},`sp_popover`)),F(`p`,{},`Anchored content on a card frame, placed by the core on the Popover API; Escape or a click outside closes it.`,` `,F(r,{to:`/components/popover`},`SpPopover reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(Ze,{},F(`p`,{},`Anchored content, on a card frame. Escape or a click outside closes it.`)))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(he,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpPopover } from '@silverpoint/react/ui/popover';

<SpPopover title="About this chart" closable width="260px" trigger={<button type="button">Details</button>}>
  <p>Anchored content, on a card frame. Escape or a click outside closes it.</p>
</SpPopover>`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(He,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpPopover } from '@silverpoint/vue/ui/popover';
<\/script>

<template>
  <SpPopover title="About this chart" closable width="260px">
    <template #trigger><button type="button">Details</button></template>
    <p>Anchored content, on a card frame. Escape or a click outside closes it.</p>
  </SpPopover>
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(O,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
export class AboutChart {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(At,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_popover(
    rx.el.p("Anchored content, on a card frame."),
    trigger=sp_trigger("Details", chevron=True),
    title="About this chart",
    closable=True,
    width=260,
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`tooltip`,ref:J},F(r,{className:`spw-anchor`,to:`#tooltip`},`sp_tooltip`)),F(`p`,{},`A short label shown on hover or keyboard focus, after a delay.`,` `,F(r,{to:`/components/tooltip`},`SpTooltip reference →`)),F(`div`,{className:`spw-card spw-live`},F(N,{},F(ke,{}))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(hn,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpTooltip } from '@silverpoint/react/ui/tooltip';

<SpTooltip
  text="Drawn on the ground's own frame" // the trigger's accessible description
  trigger={<button type="button">Hover or focus me</button>}
  side="top"
  delay={300}
/>`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(Wt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { SpTooltip } from '@silverpoint/vue/ui/tooltip';
<\/script>

<template>
  <SpTooltip text="Drawn on the ground's own frame" side="top" :delay="300">
    <template #trigger><button type="button">Hover or focus me</button></template>
  </SpTooltip>
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(ue,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
export class Hint {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(ne,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_tooltip("Hover or focus me", "Drawn on the ground's own frame", side="top", delay=300)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`select`,ref:Y},F(r,{className:`spw-anchor`,to:`#select`},`sp_select`)),F(`p`,{},`A single choice with typeahead: the chosen option ticked, the highlighted one heightened.`,` `,F(r,{to:`/components/select`},`SpSelect reference →`)),F(`div`,{className:`spw-card spw-live`},F(ft,{},F(`div`,{className:`spw-stack`},F(nn,{}),F(`p`,{className:`spw-small`},`Region `,F(`code`,{},F(et,{})))))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(Mt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { useState } from 'react';
import { SpSelect } from '@silverpoint/react/ui/select';

export function Region() {
  const [region, setRegion] = useState<string | null>('North');
  // items: strings, or { key, label, disabled }; onChange receives the key
  return <SpSelect items={['North', 'East', 'South', 'West']} label="Region" value={region} onChange={setRegion} />;
}`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(We,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
import { ref } from 'vue';
import { SpSelect } from '@silverpoint/vue/ui/select';

const region = ref<string | null>('North');
<\/script>

<template>
  <SpSelect v-model="region" :items="['North', 'East', 'South', 'West']" label="Region" />
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(Jt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component, signal } from '@angular/core';
import { SpSelect } from '@silverpoint/angular/ui/select';

@Component({
  selector: 'app-region',
  imports: [SpSelect],
  template: \`<sp-select [(value)]="region" [items]="regions" label="Region" />\`,
})
export class Region {
  protected readonly regions = ['North', 'East', 'South', 'West'];
  protected readonly region = signal<string | null>('North');
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(gn,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_select(
    ["North", "East", "South", "West"],  # or [{"key", "label", "disabled"}]
    value=State.region,
    on_change=State.set_region,  # receives the value
    label="Region",
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`dropdown-menu`,ref:X},F(r,{className:`spw-anchor`,to:`#dropdown-menu`},`sp_dropdown_menu`)),F(`p`,{},`Commands with shortcuts, separators, labels and a danger item; on_select(key).`,` `,F(r,{to:`/components/dropdown-menu`},`SpDropdownMenu reference →`)),F(`div`,{className:`spw-card spw-live`},F(dn,{},F(`div`,{className:`spw-stack`},F(be,{}),F(`p`,{className:`spw-small`},`Last command `,F(`code`,{},F(_t,{})))))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(Kt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { SpDropdownMenu } from '@silverpoint/react/ui/dropdown-menu';

const actions = [
  { type: 'label', key: 'drawing', label: 'Drawing' },
  { key: 'duplicate', label: 'Duplicate', shortcut: '⌘D' },
  { key: 'export', label: 'Export SVG', shortcut: '⌘E' },
  { type: 'separator', key: 'sep' },
  { key: 'delete', label: 'Delete', danger: true },
] as const;

// label names the menu and is the built-in button's text; trigger={…} replaces that button
<SpDropdownMenu label="Actions" items={actions} onSelect={(key) => console.log(key)} />`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(zt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
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
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(an,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component } from '@angular/core';
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
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(Rt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_dropdown_menu(
    "Actions",
    [
        {"type": "label", "label": "Drawing"},
        {"key": "duplicate", "label": "Duplicate", "shortcut": "⌘D"},
        {"key": "export", "label": "Export SVG", "shortcut": "⌘E"},
        {"type": "separator"},
        {"key": "delete", "label": "Delete", "danger": True},
    ],
    on_select=State.run,  # receives the item's key
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`toast`,ref:Z},F(r,{className:`spw-anchor`,to:`#toast`},`sp_toast · sp_toaster`)),F(`p`,{},`Notices that stack in a corner and dismiss themselves; error and warning are announced assertively.`,` `,F(r,{to:`/components/toast`},`SpToast reference →`)),F(`div`,{className:`spw-card spw-live`},F(bt,{},F(`div`,{},F(mn,{},`Show a toast`),F(f,{},F(C,{}))))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(Le,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { useState } from 'react';
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
}`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F(b,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<script setup lang="ts">
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
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(Ft,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`import { Component, signal } from '@angular/core';
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
}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(ut,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_button("Save", on_click=State.save)  # sets toast_open = True

sp_toaster(
    sp_toast(
        "Saved",
        "The drawing was saved.",
        kind="success",
        open=State.toast_open,
        on_open_change=State.set_toast_open,  # False when it closes
    ),
    position="bottom-end",  # the default; logical, so it mirrors in right-to-left text
)`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`trigger`,ref:Q},F(r,{className:`spw-anchor`,to:`#trigger`},`sp_trigger`)),F(`p`,{},`The drawn button of every overlay: SpButton's drawing on a native button that keeps the ARIA and the toggle an overlay clones onto it (sp_button does not).`),F(`div`,{className:`spw-card spw-live`},F(N,{},F(`div`,{className:`spw-row`},F(te,{},`Default`),F(pe,{},`Primary`),F(pn,{},`Danger`),F(Re,{},`Menu`)))),F(v,{},F(g,{value:`react`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`tsx`),F(Se,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`// React has no trigger component: an overlay's trigger is any element you write,
// cloned with aria-haspopup, aria-expanded and aria-controls.
import { SpButton } from '@silverpoint/react/ui/button';
import { SpPopover } from '@silverpoint/react/ui/popover';

<SpPopover title="Details" trigger={<SpButton>Details</SpButton>}>
  <p>…</p>
</SpPopover>`)))),F(g,{value:`vue`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`vue`),F($e,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`<!-- Vue has no trigger component: the trigger slot's first element opens the overlay. -->
<script setup lang="ts">
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpPopover } from '@silverpoint/vue/ui/popover';
<\/script>

<template>
  <SpPopover title="Details">
    <template #trigger><SpButton>Details</SpButton></template>
    <p>…</p>
  </SpPopover>
</template>`)))),F(g,{value:`angular`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`ts`),F(le,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`// Angular marks the projected element that opens an overlay with the spTrigger directive.
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
export class Details {}`)))),F(g,{value:`reflex`},F(I.Fragment,{}),F(`div`,{className:`spw-code`},F(`div`,{className:`spw-code-bar`},F(`span`,{className:`spw-code-label`},`python`),F(lt,{},F(o,{size:14}),F(`span`,{},`Copy`))),F(`pre`,{},F(`code`,{},`sp_trigger("Default")
sp_trigger("Primary", variant="primary")  # light hatching
sp_trigger("Danger", variant="danger")
sp_trigger("Menu", chevron=True)  # a down chevron after the text

sp_popover(rx.el.p("…"), trigger=sp_trigger("Details", chevron=True))`)))))),F(`section`,{className:`spw-section`},F(`h2`,{id:`surface`,ref:t},F(r,{className:`spw-anchor`,to:`#surface`},`Surface props`)),F(`p`,{},`In React, Vue and Angular every component takes `,F(`code`,{},`ground`),`, `,F(`code`,{},`substrate`),`, `,F(`code`,{},`mode`),`, `,F(`code`,{},`size`),`, `,F(`code`,{},`palette`),` and `,F(`code`,{},`id`),`, and reads them from the provider. A value binds as each framework does it (`,F(`code`,{},`value`),` + `,F(`code`,{},`onChange`),`, `,F(`code`,{},`v-model`),`, `,F(`code`,{},`[(value)]`),` or a forms directive), and an overlay's open state with `,F(`code`,{},`open`),` + `,F(`code`,{},`onOpenChange`),`, `,F(`code`,{},`v-model:open`),` or `,F(`code`,{},`[(open)]`),` (or `,F(`code`,{},`defaultOpen`),`).`),F(`p`,{},`In Reflex every builder takes `,F(`code`,{},`ground`),`, `,F(`code`,{},`substrate`),`, `,F(`code`,{},`mode`),`, `,F(`code`,{},`size`),` (sm, md, lg), `,F(`code`,{},`seed`),`, `,F(`code`,{},`palette`),`, `,F(`code`,{},`id`),`, `,F(`code`,{},`class_name`),` and `,F(`code`,{},`style`),`. Values and lists (rows, items, options) can be static or state vars. Value components (`,F(`code`,{},`sp_textarea`),`, `,F(`code`,{},`sp_input_number`),`, `,F(`code`,{},`sp_select`),`, `,F(`code`,{},`sp_pagination`),`) send the new value itself to `,F(`code`,{},`on_change`),`, never a DOM event. Overlays are controlled with `,F(`code`,{},`open`),` + `,F(`code`,{},`on_open_change`),`, or uncontrolled with `,F(`code`,{},`default_open`),`.`)))),F(`aside`,{className:`spw-toc-col`},F(`nav`,{"aria-label":`On this page`,className:`spw-toc`},F(`p`,{className:`spw-toc-title`},`On this page`),F(r,{to:`#about`},`Drawn with silverpoint's own pieces`),F(r,{to:`#surface`},`sp_surface`),F(r,{to:`#glyph`},`sp_glyph`),F(r,{to:`#table`},`sp_table · sort_rows`),F(r,{to:`#pagination`},`sp_pagination`),F(r,{to:`#breadcrumb`},`sp_breadcrumb`),F(r,{to:`#avatar`},`sp_avatar · sp_avatar_group`),F(r,{to:`#statistic`},`sp_statistic`),F(r,{to:`#descriptions`},`sp_descriptions`),F(r,{to:`#timeline-list`},`sp_timeline_list`),F(r,{to:`#collapse`},`sp_collapse · sp_collapse_item`),F(r,{to:`#empty`},`sp_empty`),F(r,{to:`#result`},`sp_result`),F(r,{to:`#textarea`},`sp_textarea`),F(r,{to:`#input-number`},`sp_input_number`),F(r,{to:`#modal`},`sp_modal`),F(r,{to:`#drawer`},`sp_drawer`),F(r,{to:`#popover`},`sp_popover`),F(r,{to:`#tooltip`},`sp_tooltip`),F(r,{to:`#select`},`sp_select`),F(r,{to:`#dropdown-menu`},`sp_dropdown_menu`),F(r,{to:`#toast`},`sp_toast · sp_toaster`),F(r,{to:`#trigger`},`sp_trigger`),F(r,{to:`#surface`},`Surface props`)))),F(`footer`,{className:`spw-footer`},F(`div`,{className:`spw-footer-grid`},F(`div`,{},F(`p`,{className:`spw-footer-brand`},F(`svg`,{"aria-hidden":`true`,className:`spw-mark`,height:`22`,viewBox:`0 0 32 32`,width:`22`},F(`g`,{stroke:`currentColor`},F(`line`,{css:{strokeWidth:`0.8`},x1:`4.75`,x2:`18.25`,y1:`13.75`,y2:`27.25`}),F(`line`,{css:{strokeWidth:`0.8`},x1:`7.00`,x2:`20.50`,y1:`11.50`,y2:`25.00`}),F(`line`,{css:{strokeWidth:`0.8`},x1:`9.25`,x2:`22.75`,y1:`9.25`,y2:`22.75`}),F(`line`,{css:{strokeWidth:`0.8`},x1:`11.50`,x2:`25.00`,y1:`7.00`,y2:`20.50`}),F(`line`,{css:{strokeWidth:`0.8`},x1:`13.75`,x2:`27.25`,y1:`4.75`,y2:`18.25`})),F(`path`,{css:{fill:`none`,stroke:`currentColor`,strokeWidth:`1.1`},d:`M16 2.5 C22 8.4 25.6 12 29.5 16 C23.4 22 20 25.6 16 29.5 C10.1 23.6 6.4 20 2.5 16 C8.6 10 12 6.4 16 2.5Z`}),F(`circle`,{css:{fill:`#fff`,stroke:`currentColor`,strokeWidth:`1.1`},cx:`16`,cy:`16`,r:`3.2`})),F(`strong`,{},` silverpoint`)),F(`p`,{},`Charts and UI components for React, Vue and Angular whose visual language is historical drawing technique.`),F(`p`,{},`Developed by `,F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://www.seraph.to/`},`Ernesto Crespo`),` · `,F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://www.seraph.to/`},`seraph.to`),` · `,F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo`},`@ecrespo`)),F(`p`,{},F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/blob/main/LICENSE`},`MIT License`),` · Typeface: EB Garamond, SIL Open Font License`)),F(`div`,{},F(`h4`,{},`Library`),F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint`},`GitHub repository`),F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://www.npmjs.com/search?q=silverpoint`},`npm packages`),F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/releases`},`Releases`),F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/tree/main/specs`},`Specifications`)),F(`div`,{},F(`h4`,{},`Reflex`),F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/reflex-silverpoint-react`},`reflex-silverpoint-react`),F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://pypi.org/project/reflex-silverpoint-react/`},`on PyPI`),F(r,{to:`/docs/reflex`},`Reflex quickstart`)),F(`div`,{},F(`h4`,{},`Help`),F(r,{to:`/support`},`Report a bug`),F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint/issues`},`Open issues`),F(r,{to:`/versions`},`Versions`),F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/silverpoint_web`},`Source of this site`))),F(`p`,{className:`spw-footer-note`},`This site is built with Reflex and `,F(r,{rel:`noopener noreferrer`,target:`_blank`,to:`https://github.com/ecrespo/reflex-silverpoint-react`},`reflex-silverpoint-react`),` 0.9.1: every chart and every control on it is live silverpoint, drawn by @silverpoint/react 0.9.1.`))),F(`title`,{},`Composed components · silverpoint docs`),F(`meta`,{content:`favicon.ico`,property:`og:image`}))}V.displayName=`Component(docs/composed)`;var H=n(V);export{H as default};