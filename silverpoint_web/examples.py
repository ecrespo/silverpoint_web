"""One worked example per chart, and its code in React, Vue, Angular and Reflex.

The example is written once, as Python keyword arguments (the Reflex props). The site renders the
live chart from it and prints the same example in the four frameworks, so what a reader copies is
what they see drawn.
"""

import json
from dataclasses import dataclass, field
from typing import Any

from reflex_silverpoint_react import CHARTS, COMMON_PROPS, ChartInfo

from . import datasets as ds

Rows = list[dict[str, Any]]

#: How many rows of a dataset the printed code keeps. The rest is summarised in a comment.
MAX_ROWS = 12


def _activity_rows() -> Rows:
    """Six months of daily contributions, deterministic (no randomness on the render path)."""
    from datetime import date, timedelta

    start = date(2026, 3, 30)
    rows: Rows = []
    for day in range(26 * 7):
        d = start + timedelta(days=day)
        count = (day * 7 + (day // 7) * 3) % 11
        if d.weekday() >= 5:
            count = count // 3
        rows.append({"date": d.isoformat(), "count": count})
    return rows


@dataclass(frozen=True)
class Example:
    """The example of one chart."""

    slug: str
    data: Rows | None
    props: dict[str, Any] = field(default_factory=dict)
    note: str = ""


EXAMPLES: dict[str, Example] = {
    e.slug: e
    for e in (
        Example(
            "line-chart",
            ds.LINE_CHART,
            {
                "x_key": "hour",
                "value_key": "hits",
                "secondary_key": "baseline",
                "title": "Hits per hour",
                "unit": "hits",
            },
        ),
        Example(
            "step-chart",
            ds.STEP_CHART,
            {"x_key": "x", "value_key": "value", "title": "Active plans", "step": "after"},
        ),
        Example(
            "sparkline-rows",
            ds.SPARKLINE_ROWS,
            {"name_key": "name", "readout_key": "readout", "series_key": "points", "title": "Service health"},
        ),
        Example(
            "kpi-card",
            ds.KPI_CARD,
            {"value_key": "value", "title": "Orders", "metric": "orders per day", "delta": 8.2},
        ),
        Example(
            "bar-chart",
            ds.BAR_CHART,
            {"x_key": "x", "value_key": "value", "secondary_key": "previous", "title": "Revenue by quarter"},
        ),
        Example(
            "stacked-bar-chart",
            ds.STACKED_BAR_CHART,
            {
                "x_key": "x",
                "keys": ["free", "pro", "team"],
                "names": ["Free", "Pro", "Team"],
                "title": "Sign-ups by plan",
            },
        ),
        Example(
            "composed-chart",
            ds.COMPOSED_CHART,
            {"x_key": "x", "bar_key": "revenue", "line_key": "margin", "title": "Revenue and margin"},
        ),
        Example(
            "waterfall-chart",
            ds.WATERFALL_CHART,
            {"step_key": "step", "base_key": "base", "delta_key": "delta", "title": "Cash flow"},
        ),
        Example(
            "funnel-chart",
            ds.FUNNEL_CHART,
            {"stage_key": "stage", "value_key": "value", "title": "Checkout funnel"},
        ),
        Example(
            "bullet-chart",
            ds.BULLET_CHART,
            {
                "title_key": "title",
                "actual_key": "actual",
                "target_key": "target",
                "title": "Quarter targets",
            },
        ),
        Example(
            "pyramid-chart",
            ds.PYRAMID_CHART,
            {"label_key": "label", "width_key": "width", "title": "Headcount"},
        ),
        Example(
            "candlestick-chart",
            ds.CANDLESTICK_CHART,
            {
                "time_key": "time",
                "open_key": "open",
                "high_key": "high",
                "low_key": "low",
                "close_key": "close",
                "title": "Share price",
            },
        ),
        Example(
            "area-chart", ds.AREA_CHART, {"x_key": "x", "value_key": "value", "title": "Sessions this week"}
        ),
        Example(
            "range-band-chart",
            ds.RANGE_BAND_CHART,
            {"x_key": "x", "low_key": "low", "high_key": "high", "title": "Daily temperature", "unit": "°C"},
        ),
        Example(
            "stream-chart",
            ds.STREAM_CHART,
            {"x_key": "x", "keys": ["organic", "paid"], "stacked": True, "title": "Traffic sources"},
        ),
        Example(
            "scatter-chart",
            ds.SCATTER_CHART,
            {"x_key": "x", "y_key": "y", "size_key": "size", "title": "Height and weight"},
        ),
        Example(
            "bubble-chart",
            ds.BUBBLE_CHART,
            {"x_key": "x", "y_key": "y", "size_key": "size", "title": "Markets"},
        ),
        Example(
            "heatmap-chart",
            ds.HEATMAP_CHART,
            {
                "label_key": "label",
                "values_key": "values",
                "column_labels": ["00", "04", "08", "12", "16", "20"],
                "title": "Load by day and hour",
            },
        ),
        Example(
            "treemap-chart",
            ds.TREEMAP_CHART,
            {"label_key": "label", "share_key": "share", "title": "Traffic share"},
        ),
        Example(
            "activity-grid",
            _activity_rows(),
            {"date_key": "date", "count_key": "count", "title": "Contributions", "weeks": 26},
            note="One row per day; the grid shows the most recent `weeks`.",
        ),
        Example(
            "sankey-chart",
            ds.SANKEY_CHART,
            {"source_key": "source", "target_key": "target", "value_key": "value", "title": "Visitor flow"},
        ),
        Example(
            "chord-ring",
            ds.CHORD_RING,
            {
                "source_key": "source",
                "target_key": "target",
                "value_key": "value",
                "title": "Navigation between sections",
            },
        ),
        Example(
            "donut-chart",
            ds.DONUT_CHART,
            {"name_key": "name", "value_key": "value", "title": "Monthly budget", "center_label": "percent"},
        ),
        Example(
            "radar-chart",
            ds.RADAR_CHART,
            {"subject_key": "subject", "value_key": "value", "title": "Car profile"},
        ),
        Example(
            "polar-bar-chart",
            ds.POLAR_BAR_CHART,
            {"name_key": "name", "value_key": "value", "title": "Rainfall by month"},
        ),
        Example(
            "radial-arc-group",
            ds.RADIAL_ARC_GROUP,
            {"name_key": "name", "value_key": "value", "title": "Sales by channel"},
        ),
        Example(
            "radial-rings",
            ds.RADIAL_RINGS,
            {"name_key": "name", "value_key": "value", "title": "Daily activity"},
        ),
        Example(
            "gauge-arc",
            None,
            {"percent": 72, "caption": "Capacity used", "title": "Capacity"},
            note="Gauges take `percent` (0-100) instead of `data`.",
        ),
        Example(
            "meter-chart",
            None,
            {"percent": 64, "caption": "Load", "title": "Server load"},
            note="Meters take `percent` (0-100) instead of `data`.",
        ),
        Example(
            "coxcomb-chart",
            ds.COXCOMB_CHART,
            {"name_key": "name", "value_key": "value", "title": "Visits by weekday"},
        ),
        Example(
            "wind-rose",
            ds.WIND_ROSE,
            {
                "bearing_key": "bearing",
                "value_key": "speed",
                "title": "Wind, Des Moines, March 2024",
                "unit": "kt",
            },
            note="The full dataset is 742 hourly METAR reports (Iowa Environmental Mesonet).",
        ),
        Example(
            "volvelle-chart",
            ds.VOLVELLE_CHART,
            {"index_ring": 1, "index_value": "Night", "title": "Duty rota"},
            note="Each row is a ring: a `label` and its `segments`, from the inside out.",
        ),
        Example(
            "orbit-chart",
            ds.ORBIT_CHART,
            {"marker_key": "markers", "period_key": "period", "title": "Seasonal peaks"},
        ),
        # ── The second catalog (silverpoint 0.6) ──
        Example(
            "histogram-chart",
            ds.OBSERVATIONS,
            {"value_key": "minutes", "title": "Reading time", "unit": "min"},
            note="Bins follow the Freedman–Diaconis rule unless you pass `bins`.",
        ),
        Example(
            "ecdf-chart",
            ds.OBSERVATIONS,
            {"value_key": "minutes", "group_key": "device", "title": "Reading time by device", "unit": "min"},
        ),
        Example(
            "box-plot-chart",
            ds.LATENCIES,
            {"value_key": "ms", "group_key": "service", "title": "Response time by service", "unit": "ms"},
            note="Type-7 quartiles and Tukey whiskers, computed in the core.",
        ),
        Example(
            "violin-chart",
            ds.LATENCIES,
            {"value_key": "ms", "group_key": "service", "title": "Response time by service", "unit": "ms"},
        ),
        Example(
            "ridgeline-chart",
            ds.LATENCIES,
            {"value_key": "ms", "group_key": "service", "title": "Response time by service", "unit": "ms"},
            note="`group_key` is required: one ridge per group.",
        ),
        Example(
            "beeswarm-chart",
            ds.OBSERVATIONS,
            {
                "value_key": "minutes",
                "label_key": "reader",
                "title": "Reading time per reader",
                "unit": "min",
            },
        ),
        Example(
            "lollipop-chart",
            ds.LOLLIPOP,
            {"x_key": "branch", "value_key": "loans", "title": "Loans by branch"},
        ),
        Example(
            "dumbbell-chart",
            ds.CLINICS,
            {
                "label_key": "clinic",
                "start_key": "y2024",
                "end_key": "y2025",
                "names": ["2024", "2025"],
                "title": "Patients seen, 2024 and 2025",
            },
        ),
        Example(
            "slope-chart",
            ds.CLINICS,
            {
                "label_key": "clinic",
                "start_key": "y2024",
                "end_key": "y2025",
                "names": ["2024", "2025"],
                "title": "Patients seen, 2024 to 2025",
            },
        ),
        Example(
            "bump-chart",
            ds.BUMP,
            {
                "x_key": "season",
                "series_key": "team",
                "value_key": "points",
                "title": "League rank by season",
            },
            note="One row per team and season; the ranks are computed from `value_key`.",
        ),
        Example(
            "error-bar-chart",
            ds.ERROR_BAR,
            {
                "label_key": "arm",
                "estimate_key": "effect",
                "low_key": "low",
                "high_key": "high",
                "title": "Effect by trial arm",
            },
        ),
        Example(
            "interval-chart",
            ds.INTERVAL,
            {
                "lane_key": "crew",
                "start_key": "from",
                "end_key": "to",
                "label_key": "task",
                "axis": "date",
                "title": "Crew schedule",
            },
            note='`axis="date"` reads ISO `YYYY-MM-DD` days in UTC.',
        ),
        Example(
            "diverging-bar-chart",
            ds.LIKERT,
            {"label_key": "question", "levels": ds.LIKERT_LEVELS, "title": "Customer survey"},
            note="`levels` is required: the level columns, most negative first.",
        ),
        Example(
            "connected-scatter-chart",
            ds.CONNECTED_SCATTER,
            {"x_key": "fare", "y_key": "riders", "label_key": "year", "title": "Fare and ridership"},
        ),
        Example(
            "waffle-chart",
            ds.WAFFLE,
            {"name_key": "use", "value_key": "kwh", "title": "Household energy", "unit": "kWh"},
        ),
        Example(
            "marimekko-chart",
            ds.MARIMEKKO,
            {
                "column_key": "region",
                "segment_key": "channel",
                "value_key": "sales",
                "title": "Sales by region",
            },
        ),
        Example(
            "squarified-treemap",
            ds.BUDGET,
            {
                "id_key": "id",
                "parent_key": "parent",
                "label_key": "name",
                "value_key": "amount",
                "title": "City budget",
            },
            note="One row per node, linked to its parent. Click a node to drill down.",
        ),
        Example(
            "sunburst-chart",
            ds.BUDGET,
            {
                "id_key": "id",
                "parent_key": "parent",
                "label_key": "name",
                "value_key": "amount",
                "title": "City budget",
            },
            note="One row per node, linked to its parent. Click a ring to drill down.",
        ),
        Example(
            "tree-chart",
            ds.BUDGET,
            {
                "id_key": "id",
                "parent_key": "parent",
                "label_key": "name",
                "value_key": "amount",
                "title": "City budget",
            },
        ),
        Example(
            "parallel-coordinates-chart",
            ds.BIKES,
            {"label_key": "model", "dimensions": ds.BIKE_DIMENSIONS, "title": "Bicycles"},
            note="`dimensions` is required: the columns, in axis order.",
        ),
        Example(
            "polar-line-chart",
            ds.POLAR_LINE,
            {"angle_key": "month", "value_key": "rain", "period": 12, "title": "Rain by month", "unit": "mm"},
        ),
        Example(
            "polar-scatter-chart",
            ds.POLAR_SCATTER,
            {"angle_key": "bearing", "radius_key": "distance", "title": "Sightings", "unit": "km"},
        ),
        Example(
            "density-bin-chart",
            ds.POINT_CLOUD,
            {"x_key": "x", "y_key": "y", "bin_shape": "hexagon", "title": "Point density"},
        ),
        Example(
            "contour-chart",
            ds.POINT_CLOUD,
            {"x_key": "x", "y_key": "y", "source": "points", "title": "Point density"},
        ),
        Example(
            "delaunay-chart",
            ds.DELAUNAY,
            {"x_key": "x", "y_key": "y", "label_key": "label", "title": "Stations"},
            note='`mesh="voronoi"` draws the Voronoi cells instead of the triangulation.',
        ),
        Example(
            "vector-field-chart",
            ds.VECTOR_FIELD,
            {"x_key": "x", "y_key": "y", "u_key": "u", "v_key": "v", "title": "Wind field"},
        ),
        Example(
            "network-chart",
            ds.NETWORK_LINKS,
            {
                "source_key": "source",
                "target_key": "target",
                "value_key": "weight",
                "nodes": ds.NETWORK_NODES,
                "title": "Library network",
            },
            note="`data` holds the links; `nodes` names and groups the nodes. The force layout is the same for a "
            "given `seed`, on the server and in every browser.",
        ),
    )
}


# ── Prop names ───────────────────────────────────────────────────────────────────────────

_JS_NAMES: dict[str, str] = {p.name: p.js for p in COMMON_PROPS}
for _info in CHARTS:
    for _p in _info.props:
        _JS_NAMES[_p.name] = _p.js


def js_name(python_name: str) -> str:
    """``center_label`` → ``centerLabel``."""
    if python_name in _JS_NAMES:
        return _JS_NAMES[python_name]
    head, *rest = python_name.split("_")
    return head + "".join(w.capitalize() for w in rest)


def kebab(js: str) -> str:
    """``centerLabel`` → ``center-label``."""
    return "".join("-" + c.lower() if c.isupper() else c for c in js)


def pascal(slug: str) -> str:
    return "".join(w.capitalize() for w in slug.split("-"))


# ── Literals ─────────────────────────────────────────────────────────────────────────────


def js_value(value: Any) -> str:
    """A JavaScript literal, single-quoted like the silverpoint docs."""
    if isinstance(value, bool):
        return "true" if value else "false"
    if value is None:
        return "null"
    if isinstance(value, int | float):
        return json.dumps(value)
    if isinstance(value, str):
        return "'" + value.replace("\\", "\\\\").replace("'", "\\'") + "'"
    if isinstance(value, list | tuple):
        return "[" + ", ".join(js_value(v) for v in value) + "]"
    if isinstance(value, dict):
        return "{ " + ", ".join(f"{k}: {js_value(v)}" for k, v in value.items()) + " }"
    raise TypeError(type(value))


def py_value(value: Any) -> str:
    if isinstance(value, dict):
        return "{" + ", ".join(f'"{k}": {py_value(v)}' for k, v in value.items()) + "}"
    if isinstance(value, list | tuple):
        return "[" + ", ".join(py_value(v) for v in value) + "]"
    if isinstance(value, str):
        return json.dumps(value, ensure_ascii=False)
    return repr(value)


def rows_literal(rows: Rows, indent: str, lang: str) -> str:
    """The rows as an array literal, cut to ``MAX_ROWS`` with a comment for the rest."""
    fmt = js_value if lang == "js" else py_value
    shown = rows[:MAX_ROWS]
    step = "  " if lang == "js" else "    "
    lines = [f"{indent}{step}{fmt(r)}," for r in shown]
    if len(rows) > MAX_ROWS:
        comment = "//" if lang == "js" else "#"
        lines.append(f"{indent}{step}{comment} … {len(rows) - MAX_ROWS} more rows of the same shape")
    return "[\n" + "\n".join(lines) + f"\n{indent}]"


# ── The four renderings ──────────────────────────────────────────────────────────────────


def _is_rows(value: Any) -> bool:
    """Whether a prop is rows of data (``nodes``): printed as a constant of its own, like ``data``."""
    return isinstance(value, list) and bool(value) and isinstance(value[0], dict)


def _view_props(example: Example) -> list[tuple[str, Any]]:
    return list(example.props.items())


def _row_props(example: Example) -> list[tuple[str, Rows]]:
    return [(k, v) for k, v in example.props.items() if _is_rows(v)]


def react_code(info: ChartInfo, example: Example) -> str:
    name = info.chart
    lines = [
        "import '@silverpoint/fonts/fonts.css';",
        "import '@silverpoint/grounds/styles.css';",
        f"import {{ {name} }} from '@silverpoint/react/{info.slug}';",
        "",
    ]
    if example.data is not None:
        lines += [f"const data = {rows_literal(example.data, '', 'js')};", ""]
    for key, rows in _row_props(example):
        lines += [f"const {js_name(key)} = {rows_literal(rows, '', 'js')};", ""]
    lines += [
        "export default function App() {",
        "  return (",
        "    <div style={{ width: 480 }}>",
        f"      <{name}",
    ]
    if example.data is not None:
        lines.append("        data={data}")
    for key, value in _view_props(example):
        js = js_name(key)
        if _is_rows(value):
            lines.append(f"        {js}={{{js}}}")
        elif isinstance(value, str):
            lines.append(f'        {js}="{value}"')
        else:
            lines.append(f"        {js}={{{js_value(value)}}}")
    lines += ["      />", "    </div>", "  );", "}"]
    return "\n".join(lines)


def vue_code(info: ChartInfo, example: Example) -> str:
    name = "Sp" + info.chart
    lines = [
        '<script setup lang="ts">',
        "import '@silverpoint/fonts/fonts.css';",
        "import '@silverpoint/grounds/styles.css';",
        f"import {{ {name} }} from '@silverpoint/vue/{info.slug}';",
    ]
    if example.data is not None:
        lines += ["", f"const data = {rows_literal(example.data, '', 'js')};"]
    for key, rows in _row_props(example):
        lines += ["", f"const {js_name(key)} = {rows_literal(rows, '', 'js')};"]
    lines += ["</script>", "", "<template>", '  <div style="width: 480px">', f"    <{name}"]
    if example.data is not None:
        lines.append('      :data="data"')
    for key, value in _view_props(example):
        attr = kebab(js_name(key))
        if _is_rows(value):
            lines.append(f'      :{attr}="{js_name(key)}"')
        elif isinstance(value, str):
            lines.append(f'      {attr}="{value}"')
        else:
            lines.append(f'      :{attr}="{js_value(value)}"')
    lines += ["    />", "  </div>", "</template>"]
    return "\n".join(lines)


def angular_code(info: ChartInfo, example: Example) -> str:
    name = "Sp" + info.chart
    selector = "sp-" + info.slug
    lines = [
        "// src/styles.css:",
        "//   @import '@silverpoint/fonts/fonts.css';",
        "//   @import '@silverpoint/grounds/styles.css';",
        "",
        "import { Component } from '@angular/core';",
        f"import {{ {name} }} from '@silverpoint/angular/{info.slug}';",
        "",
        "@Component({",
        "  selector: 'app-root',",
        f"  imports: [{name}],",
        "  template: `",
        '    <div style="width: 480px">',
        f"      <{selector}",
    ]
    if example.data is not None:
        lines.append('        [data]="data"')
    for key, value in _view_props(example):
        js = js_name(key)
        if _is_rows(value):
            lines.append(f'        [{js}]="{js}"')
        elif isinstance(value, str):
            lines.append(f'        {js}="{value}"')
        else:
            lines.append(f'        [{js}]="{js_value(value)}"')
    lines += ["      />", "    </div>", "  `,", "})", "export class App {"]
    if example.data is not None:
        lines.append(f"  protected readonly data = {rows_literal(example.data, '  ', 'js')};")
    for key, rows in _row_props(example):
        lines.append(f"  protected readonly {js_name(key)} = {rows_literal(rows, '  ', 'js')};")
    lines.append("}")
    return "\n".join(lines)


def reflex_code(info: ChartInfo, example: Example) -> str:
    fn = info.factory_name
    lines = ["import reflex as rx", f"from reflex_silverpoint_react import {fn}", ""]
    if example.data is not None:
        lines += [f"DATA = {rows_literal(example.data, '', 'py')}", ""]
    for key, rows in _row_props(example):
        lines += [f"{key.upper()} = {rows_literal(rows, '', 'py')}", ""]
    lines += ["", "def index() -> rx.Component:", "    return rx.box(", f"        {fn}("]
    if example.data is not None:
        lines.append("            data=DATA,")
    for key, value in _view_props(example):
        lines.append(f"            {key}={key.upper() if _is_rows(value) else py_value(value)},")
    lines += [
        "        ),",
        '        width="480px",',
        "    )",
        "",
        "",
        "app = rx.App()",
        "app.add_page(index)",
    ]
    return "\n".join(lines)


def install_line(framework: str) -> str:
    return {
        "react": "npm install @silverpoint/react @silverpoint/grounds @silverpoint/fonts",
        "vue": "npm install @silverpoint/vue @silverpoint/grounds @silverpoint/fonts",
        "angular": "npm install @silverpoint/angular @silverpoint/grounds @silverpoint/fonts",
        "reflex": "pip install reflex-silverpoint-react",
    }[framework]


def codes(info: ChartInfo) -> dict[str, str]:
    example = EXAMPLES[info.slug]
    return {
        "react": react_code(info, example),
        "vue": vue_code(info, example),
        "angular": angular_code(info, example),
        "reflex": reflex_code(info, example),
    }


def live_props(info: ChartInfo) -> dict[str, Any]:
    """The Reflex props that draw the example on the page."""
    example = EXAMPLES[info.slug]
    props = dict(example.props)
    if example.data is not None:
        props["data"] = example.data
    return props


def import_paths(info: ChartInfo) -> dict[str, str]:
    return {
        "react": f"import {{ {info.chart} }} from '@silverpoint/react/{info.slug}';",
        "vue": f"import {{ Sp{info.chart} }} from '@silverpoint/vue/{info.slug}';",
        "angular": f"import {{ Sp{info.chart} }} from '@silverpoint/angular/{info.slug}';  // <sp-{info.slug}>",
        "reflex": f"from reflex_silverpoint_react import {info.factory_name}",
    }


assert set(EXAMPLES) == {c.slug for c in CHARTS}, "every chart needs an example"
