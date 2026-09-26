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


def _view_props(example: Example) -> list[tuple[str, Any]]:
    return list(example.props.items())


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
        lines.append(
            f'        {js}="{value}"' if isinstance(value, str) else f"        {js}={{{js_value(value)}}}"
        )
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
    lines += ["</script>", "", "<template>", '  <div style="width: 480px">', f"    <{name}"]
    if example.data is not None:
        lines.append('      :data="data"')
    for key, value in _view_props(example):
        attr = kebab(js_name(key))
        if isinstance(value, str):
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
        if isinstance(value, str):
            lines.append(f'        {js}="{value}"')
        else:
            lines.append(f'        [{js}]="{js_value(value)}"')
    lines += ["      />", "    </div>", "  `,", "})", "export class App {"]
    if example.data is not None:
        lines.append(f"  protected readonly data = {rows_literal(example.data, '  ', 'js')};")
    lines.append("}")
    return "\n".join(lines)


def reflex_code(info: ChartInfo, example: Example) -> str:
    fn = info.factory_name
    lines = ["import reflex as rx", f"from reflex_silverpoint_react import {fn}", ""]
    if example.data is not None:
        lines += [f"DATA = {rows_literal(example.data, '', 'py')}", ""]
    lines += ["", "def index() -> rx.Component:", "    return rx.box(", f"        {fn}("]
    if example.data is not None:
        lines.append("            data=DATA,")
    for key, value in _view_props(example):
        lines.append(f"            {key}={py_value(value)},")
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
