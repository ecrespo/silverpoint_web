"""The host integrations (silverpoint 0.11.2, REQ-661): one page each under /docs/hosts/<slug>.

Each integration lives in a repository of its own; the text and code follow its README at the version
in ``engine`` (checked on its registry on 2026-11-28). What the catalog says about a host (kind, package,
registry, status, repository) is read from ``catalog["hosts"]`` by ``pages/host_docs.py``, never retyped
here. Python, Flask, Django, Jupyter and Databricks are the ``silverpoint`` package: /docs/python.

A block is a tuple: ``("p", text)``, ``("code", code, label)``, ``("ol", items)``, ``("ul", items)``,
``("table", head, rows)`` or ``("note", text)``. In text, `backticks` are code and [label](url) a link.
"""

from dataclasses import dataclass
from typing import Any

Block = tuple[Any, ...]


@dataclass(frozen=True)
class HostSection:
    anchor: str
    title: str
    blocks: tuple[Block, ...]


@dataclass(frozen=True)
class Host:
    slug: str  # the route: /docs/hosts/<slug>
    label: str  # the sidebar's label
    title: str  # the page's title
    catalog_ids: tuple[str, ...]  # the agent catalog's host ids this page documents
    lede: str
    engine: str  # what draws: the silverpoint package and version the integration pins
    requirements: tuple[tuple[str, str], ...]
    sections: tuple[HostSection, ...]


# ── KNIME ────────────────────────────────────────────────────────────────────────────────

KNIME_CSV = """hour,hits,baseline
00,18,22
02,14,18
04,11,15
06,16,17
08,34,30
10,58,48
12,71,60"""

KNIME = Host(
    slug="knime",
    label="KNIME",
    title="silverpoint in KNIME",
    catalog_ids=("knime",),
    lede="View nodes that draw a chart from a table: one node per chart (56 of them) under Community › "
    "Silverpoint, grouped by family. Each node shows a self-contained, accessible HTML view (keyboard reading, "
    "a readout, a tabular alternative) and, with Node.js, writes the chart as SVG on an image port.",
    engine="the silverpoint Python package 0.11.0.post1 (engine 0.11.0)",
    requirements=(
        ("KNIME Analytics Platform", "5.9 or later"),
        ("Node.js", "20+, optional: only for the SVG image port"),
        ("Network", "none at execution: the chart's script travels inside the view"),
    ),
    sections=(
        HostSection(
            "install",
            "Install",
            (
                (
                    "ol",
                    (
                        "Download `silverpoint-knime-<version>-update-site.zip` from the "
                        "[releases](https://github.com/ecrespo/silverpoint-knime/releases).",
                        "In KNIME: *File › Preferences › Install/Update › Available Software Sites › Add… › "
                        "Archive…* and pick the zip.",
                        "*File › Install KNIME Extensions…*, search for *silverpoint*, install and restart. The "
                        "first use creates the extension's Python environment; offline works, everything is in "
                        "the zip.",
                    ),
                ),
            ),
        ),
        HostSection(
            "node",
            "Using a node",
            (
                (
                    "ol",
                    (
                        "Drag *Silverpoint Line chart* (or any other) onto the canvas and connect a table.",
                        "In the dialog, pick a column for each role (*X*, *Value*, …). Each list holds the "
                        "columns of the role's type, and optional roles accept *none*. Then set the chart's "
                        "options, the view (title, description, data table) and the appearance (ground, "
                        "substrate, mode, palette).",
                        "Execute. The view shows the chart; the image port holds its SVG.",
                    ),
                ),
                (
                    "table",
                    ["Advanced setting", "What it does"],
                    [
                        [
                            "Row limit",
                            "Default 10,000. A longer table draws its first rows and the node warns with both counts.",
                        ],
                        [
                            "Node.js executable",
                            "Where Node.js is, for the SVG port. Without it the port holds a notice and the node warns.",
                        ],
                    ],
                ),
                (
                    "p",
                    "Every setting can be driven by a flow variable, ground, mode and palette among them, so one "
                    "workflow can draw the same chart on silverpoint for a report and on cyanotype for a slide.",
                ),
            ),
        ),
        HostSection(
            "example",
            "Example: hits per hour",
            (
                (
                    "p",
                    "The repository's `demo/hits-per-hour.csv` is a small table to try the line, area and step "
                    "charts on, and `workflows_examples/silverpoint-example.knwf` a ready workflow (*File › Import "
                    "KNIME Workflow…*).",
                ),
                ("code", KNIME_CSV, "csv"),
                (
                    "ol",
                    (
                        "*CSV Reader* on `hits-per-hour.csv`.",
                        "*Silverpoint Line chart*: *X* `hour`, *Value* `hits`, *Secondary* `baseline` (the dotted "
                        "series); *Title* `Hits per hour`.",
                        "Open the node's view to read the chart by keyboard; connect the image port to *Image "
                        "Writer (Port)* to save the SVG for a report.",
                        "To switch the paper from a variable: a *Variable Creator* with `ground` = `cyanotype`, "
                        "bound to *Ground* in the node's *Flow Variables* tab.",
                    ),
                ),
            ),
        ),
    ),
)

# ── n8n ──────────────────────────────────────────────────────────────────────────────────

N8N_NODE = """{
  "name": "Chart SVG",
  "type": "n8n-nodes-silverpoint.silverpoint",
  "typeVersion": 1,
  "parameters": {
    "chart": "bar-chart",
    "barChartX": "team",
    "barChartValue": "wins",
    "barChartOptions": { "title": "Wins" },
    "output": "svg",
    "alsoAsText": true,
    "chartId": "wins"
  }
}"""

N8N_FIELD = """{
  "name": "Chart From Field",
  "type": "n8n-nodes-silverpoint.silverpoint",
  "typeVersion": 1,
  "parameters": {
    "chart": "line-chart",
    "source": "field",
    "field": "rows",
    "lineChartX": "team",
    "lineChartValue": "wins",
    "output": "svg"
  }
}"""

N8N = Host(
    slug="n8n",
    label="n8n",
    title="silverpoint in n8n",
    catalog_ids=("n8n",),
    lede="A community node that draws a chart from workflow items, as SVG or HTML. It needs no credential and "
    "calls no service: the chart is drawn inside the node by silverpoint's own engine, bundled into the package. "
    "It also works as an AI-agent tool: a model passes rows and, per role, a field name.",
    engine="@silverpoint/embed 0.11.1",
    requirements=(
        ("n8n", "a self-hosted instance that allows community nodes"),
        ("Credentials", "none"),
    ),
    sections=(
        HostSection(
            "install",
            "Install",
            (("p", "In n8n: *Settings → Community Nodes → Install*, package `n8n-nodes-silverpoint`."),),
        ),
        HostSection(
            "node",
            "The node",
            (
                (
                    "table",
                    ["Parameter", "What it does"],
                    [
                        [
                            "Chart",
                            "Any of the 56 charts a table can feed, grouped by family (`Bars: Bar Chart`, …).",
                        ],
                        [
                            "Role fields",
                            "One per role of the chosen chart: the name of the field holding it (`team`, `wins`). "
                            "Several roles take comma-separated names; expressions are allowed.",
                        ],
                        [
                            "Options",
                            "The chart's own options (curve, orientation, …) and the common ones (title, …).",
                        ],
                        [
                            "Rows",
                            "*From Items*: each input item's JSON is one row, one chart for all items. *From a "
                            "Field*: an array of rows at a field of each item, one chart per item.",
                        ],
                        [
                            "Ground, Substrate, Appearance, Size",
                            "The paper, its tone, ink or precision mode, the palette, width and height.",
                        ],
                        [
                            "Output",
                            "*SVG* (a binary property, `image/svg+xml`, and optionally the markup in `svg`), "
                            "*HTML* (a static page in `html`) or *Interactive HTML* (the page with the script "
                            "inlined: keyboard, pointer, resizing).",
                        ],
                        ["Embed Fonts", "Embeds EB Garamond, so the output draws the same anywhere."],
                    ],
                ),
                (
                    "p",
                    "Each output item carries `chart`, `id` and the render's warnings under `diagnostics`. A "
                    "missing role, an unknown field or an unknown option stops the node with a message naming the "
                    "parameter to fix; with *Continue On Fail* the message becomes the item's `error`.",
                ),
            ),
        ),
        HostSection(
            "workflows",
            "Three workflows",
            (
                (
                    "ul",
                    (
                        "**A chart in an email.** *Postgres* (one row per team) → *Silverpoint* (Bar chart, `x` = "
                        "`team`, `value` = `wins`, Output SVG, Embed Fonts on) → *Send Email* with the binary "
                        "property `data` attached.",
                        '**A chart into a file.** *HTTP Request* returning `{ "rows": [...] }` → *Silverpoint* '
                        "(Rows From a Field `rows`, Line chart) → *Write Binary File* "
                        "`/data/charts/{{ $json.id }}.svg`.",
                        "**An HTML report.** *Google Sheets* → *Silverpoint* (Output Interactive HTML) → "
                        "*Respond to Webhook* with `{{ $json.html }}` as `text/html`.",
                    ),
                ),
                (
                    "p",
                    "The node as it appears in a workflow's JSON: a bar chart from items, as SVG with the markup "
                    "also in `svg`.",
                ),
                ("code", N8N_NODE, "json"),
                ("p", "One chart per item, from the array at `rows`:"),
                ("code", N8N_FIELD, "json"),
                (
                    "p",
                    "The repository's [`examples/local-run.workflow.json`]"
                    "(https://github.com/ecrespo/n8n-nodes-silverpoint/blob/main/examples/local-run.workflow.json) "
                    "holds every output (SVG, HTML, Interactive HTML, rows from a field, and an error under "
                    "*Continue On Fail*): import it with *Workflow → Import from File*.",
                ),
            ),
        ),
    ),
)

# ── Apache Superset ──────────────────────────────────────────────────────────────────────

SUPERSET_INSTALL = """cd superset-frontend
npm install superset-plugin-chart-silverpoint"""

SUPERSET_PRESET = """// src/visualizations/presets/MainPreset.ts (MainPreset.js before Superset master)
import { SilverpointChartPreset } from 'superset-plugin-chart-silverpoint';

export default class MainPreset extends Preset {
  constructor() {
    super({
      name: 'Legacy charts',
      presets: [
        new SilverpointChartPreset(),
        // or a subset:
        // new SilverpointChartPreset({ charts: ['bar-chart', 'line-chart', 'sankey-chart'] }),
      ],
      plugins: [ /* … Superset's own … */ ],
    });
  }
}"""

SUPERSET_BUILD = """npm run build
# Superset master's .npmrc sets min-release-age=3: for three days after a silverpoint
# release npm answers ETARGET for @silverpoint/*. Wait, or:
npm install superset-plugin-chart-silverpoint --min-release-age=0
# in the image: docker build --build-arg NPM_MIN_RELEASE_AGE=0 …"""

SUPERSET = Host(
    slug="superset",
    label="Apache Superset",
    title="silverpoint in Apache Superset",
    catalog_ids=("superset",),
    lede="Chart plugins: 56 viz types, one per chart a table can feed (Silverpoint Bar chart, Silverpoint "
    "Sankey chart, … in the chart gallery), each with a control panel generated from the host catalog. Superset "
    "queries; silverpoint draws, with the React adapter.",
    engine="@silverpoint/react 0.11.1 and @silverpoint/embed 0.11.1's /hosts binding",
    requirements=(
        ("Superset", "master (React 18.3), the release after 6.1. 6.0 and 6.1 ship React 17: not supported."),
        ("Peer dependencies", "@superset-ui/core, @superset-ui/chart-controls, react and react-dom ^18.3.0"),
    ),
    sections=(
        HostSection(
            "install",
            "Install the plugin",
            (
                ("code", SUPERSET_INSTALL, "shell"),
                ("p", "Register the preset next to Superset's own:"),
                ("code", SUPERSET_PRESET, "ts"),
                ("p", "Then rebuild the frontend:"),
                ("code", SUPERSET_BUILD, "shell"),
                (
                    "p",
                    "The package imports the library's stylesheet and EB Garamond itself, each chart has a light "
                    "and a dark thumbnail, and Superset's webpack configuration needs no change. The repository's "
                    "`docker/Dockerfile` builds a Superset image with the plugins registered, and "
                    "`docker/compose.yml` runs it with the examples loaded.",
                ),
            ),
        ),
        HostSection(
            "chart",
            "Each chart",
            (
                (
                    "table",
                    ["Panel", "What it holds"],
                    [
                        [
                            "Query",
                            "One control per role: a dimension role takes a column, a measure role a metric, a "
                            "temporal role adds a time grain. Plus filters, the row limit and the sort order.",
                        ],
                        ["Options", "The chart's own options (curve, orientation, …) and the title."],
                        [
                            "Appearance",
                            "Ground, substrate, mode, palette. *Theme default* follows Superset's light or dark theme.",
                        ],
                    ],
                ),
                (
                    "p",
                    "Superset aggregates, filters and sorts; the plugin binds the result with `specFromTable`. For "
                    "a bar chart of wins per team: *Silverpoint Bar chart*, *X* the column `team`, *Value* the "
                    "metric `SUM(wins)`, sort by the metric, descending.",
                ),
                (
                    "note",
                    "A missing column or metric shows Superset's chart error with the reason. Under forced colours "
                    "or *increase contrast*, every chart draws in precision mode, whatever the panel says. Cross-"
                    "filters are not emitted yet.",
                ),
            ),
        ),
        HostSection(
            "supx",
            "Not (yet) a .supx",
            (
                (
                    "p",
                    "Superset's Extensions framework cannot contribute a chart type (an extension sees "
                    "`@apache-superset/core` only, which has no chart registry), so the classic plugin is the only "
                    "path.",
                ),
            ),
        ),
    ),
)

# ── Plone ────────────────────────────────────────────────────────────────────────────────

VOLTO_INSTALL = """pnpm add volto-silverpoint"""

VOLTO_CONFIG = """// volto.config.js
module.exports = { addons: ['volto-silverpoint'] };"""

VOLTO_BLOCK = """{
  "@type": "silverpointChart",
  "chart": "bar-chart",
  "table": { "columns": ["team", "wins"], "rows": [{ "team": "A", "wins": 12 }] },
  "role_x": "team",
  "role_value": "wins",
  "opt_orientation": "rows",
  "ground": "cyanotype",
  "title": "Wins per team"
}"""

VOLTO_TABLE = """team;wins
A;12
B;9
C;15"""

PLONE_INSTALL = """# requirements.txt (or your buildout's eggs)
collective.silverpoint"""

PLONE_TAL = """<!-- a Chart item by UID -->
<div tal:replace="structure python: context.restrictedTraverse('@@silverpoint-chart')(uid=chart_uid)" />

<!-- or a spec built in the template -->
<div tal:replace="structure python: context.restrictedTraverse('@@silverpoint-chart')(
       spec={'chart': 'bar-chart', 'data': rows, 'props': {'xKey': 'team', 'valueKey': 'wins'}})" />"""

PLONE_FIELDS = """Chart         Bar chart
Table as text team,wins
              A,12
              B,9
              C,15
Role mapping  {"x": "team", "value": "wins"}
Options       {"orientation": "rows"}"""

PLONE = Host(
    slug="plone",
    label="Plone (Volto and Classic)",
    title="silverpoint in Plone",
    catalog_ids=("volto", "plone-classic"),
    lede="Two add-ons, one per Plone front end. volto-silverpoint is a Volto block that draws a chart from a "
    "table, server-rendered and hydrated. collective.silverpoint is a Chart content type with a Classic UI view "
    "and a browser view for templates. A Classic Chart's spec, serialised by plone.restapi, is one the Volto "
    "block can draw.",
    engine="volto-silverpoint: @silverpoint/react and @silverpoint/embed 0.11.2; collective.silverpoint: the "
    "silverpoint Python package 0.11.0.post1",
    requirements=(
        ("Volto", "18 or 19 (tested on 18.36.0 and 19.8.1); Node 22+, pnpm 10"),
        ("Plone backend", "6.x with plone.volto and plone.restapi; the Volto block needs no backend package"),
        ("Classic UI", "Plone 6.0, 6.1 or 6.2 on Python 3.10–3.13"),
    ),
    sections=(
        HostSection(
            "volto",
            "Volto: the Silverpoint chart block",
            (
                ("code", VOLTO_INSTALL, "shell"),
                ("code", VOLTO_CONFIG, "js"),
                (
                    "ol",
                    (
                        "Add a **Silverpoint chart** block (group *Common*, allowed in every content type).",
                        "Give it a table: **paste** CSV (comma-, semicolon- or tab-separated) or JSON "
                        '(`[{"col": value}]` or `{"columns": […], "values": [[…]]}`), **upload** a `.csv` '
                        "or `.json`, or choose a **Table file**: a File item, fetched each time the block renders.",
                        "Choose the chart, map its roles to columns (a role is preselected when exactly one column "
                        "fits), then set the options, the appearance and the view fields.",
                    ),
                ),
                ("p", "A table to paste for a bar chart:"),
                ("code", VOLTO_TABLE, "csv"),
                (
                    "p",
                    "The block saves plain JSON, never rendered markup, and `plone.restapi` returns it unchanged:",
                ),
                ("code", VOLTO_BLOCK, "json"),
                (
                    "note",
                    "Pasted and uploaded tables are stored in the block, up to 2,000 rows; a larger table is "
                    "refused and the editor asks for a File item, which is referenced rather than copied. The "
                    "editor shows why a table does not bind; the public view shows only the title and description.",
                ),
            ),
        ),
        HostSection(
            "classic",
            "Classic UI: the Chart content type",
            (
                ("code", PLONE_INSTALL, "text"),
                (
                    "p",
                    "Restart, then activate **collective.silverpoint** under *Site Setup → Add-ons* (it also "
                    "installs plone.restapi). Add a **Chart**: the chart, the data (a CSV or JSON *Table file*, or "
                    "the *Table as text*), the *Role mapping* and the *Options* as JSON, and the appearance.",
                ),
                ("code", PLONE_FIELDS, "text"),
                (
                    "p",
                    "The add and edit forms validate the chart with the silverpoint package and show its message "
                    "on the field at fault (an unknown column on the role mapping, an unknown option on the "
                    "options). A Chart is content: workflow, permissions, versioning and search like any other "
                    "item. The *Silverpoint charts* control panel holds the ground, substrate, mode and palette a "
                    "chart takes when it sets none.",
                ),
                ("p", "To draw a chart in any template, call the `@@silverpoint-chart` view:"),
                ("code", PLONE_TAL, "html"),
                (
                    "p",
                    "The view writes a `<silverpoint-chart shadow>` with the spec and, inside it, the title, the "
                    "description and the data as an HTML table, which is what a reader without script and a "
                    "search engine get. The script is served by the site at `@@silverpoint-script.js?v=<version>` "
                    "with its integrity, only on pages holding a chart, and the markup has no inline script: it "
                    "works under Plone's default Content-Security-Policy.",
                ),
            ),
        ),
    ),
)

# ── Power BI ─────────────────────────────────────────────────────────────────────────────

POWERBI = Host(
    slug="power-bi",
    label="Power BI",
    title="silverpoint in Power BI",
    catalog_ids=("powerbi",),
    lede="One custom visual that draws any of 56 charts: pick the chart in the format pane, drop dimensions on "
    "Categories and measures on Values. Drawn by silverpoint's own engine, bundled in the visual: no request, "
    "no privilege.",
    engine="@silverpoint/embed 0.10.1 (the full build, with EB Garamond)",
    requirements=(
        ("Power BI", "Desktop or the service, with custom visuals from a file allowed"),
        ("Rows", "up to 10,000 per visual; a notice says how many are drawn when the query returns more"),
    ),
    sections=(
        HostSection(
            "use",
            "Use",
            (
                (
                    "ol",
                    (
                        "Download `silverpoint….pbiviz` from the [latest release]"
                        "(https://github.com/ecrespo/silverpoint-powerbi/releases) and import it "
                        "(*Visualizations → … → Import a visual from a file*).",
                        "*Format → Chart → Chart type*: the charts are grouped by family. The same card lists which "
                        "field position feeds which role.",
                        "Drop fields in that order. Until every required role has a field, the visual names what "
                        "is missing and in which well.",
                        "*Chart options*, *View* (title, description, data table) and *Appearance* (ground, "
                        "substrate, mode, palette; *Default* follows the report theme) complete the format pane.",
                    ),
                ),
                (
                    "table",
                    ["Line chart: well position", "Role"],
                    [
                        ["Categories 1", "X"],
                        ["Values 1", "Value"],
                        ["Values 2", "Secondary (optional)"],
                    ],
                ),
            ),
        ),
        HostSection(
            "sample",
            "Example: the sample report",
            (
                (
                    "p",
                    "[`samples/`](https://github.com/ecrespo/silverpoint-powerbi/tree/main/samples) holds three "
                    "small CSV files and a walkthrough, one page per chart. Power BI sums the measures: keep the "
                    "default *Sum*.",
                ),
                (
                    "table",
                    ["Page", "Chart type", "Categories", "Values"],
                    [
                        ["Sales by region", "Bars · Bar chart", "`Region`", "`Sales`, `Target`"],
                        [
                            "Daily visits",
                            "Lines · Line chart",
                            "`Day` (as **Day**, not the hierarchy)",
                            "`Visits`, `Baseline`",
                        ],
                        [
                            "Car models",
                            "Hierarchies dimensions · Parallel coordinates chart",
                            "`Model`",
                            "`Mass`, `Price`, `Power`, `Range`",
                        ],
                    ],
                ),
                (
                    "p",
                    "On a parallel-coordinates chart every measure after the first position is one more axis. On "
                    "*Daily visits*, set *Chart options: Line chart → Curve* to `Monotone`.",
                ),
            ),
        ),
        HostSection(
            "reading",
            "Reading and selection",
            (
                (
                    "p",
                    "The chart reads by keyboard (focus it, then the arrow keys) and draws in precision mode under "
                    "high contrast. On a chart with one dimension, choosing an item (a click, or Enter) selects its "
                    "row, so other visuals cross-highlight; a click on the background clears it. English and "
                    "Spanish are shipped.",
                ),
            ),
        ),
    ),
)

# ── Tableau ──────────────────────────────────────────────────────────────────────────────

TABLEAU_URL = "https://ecrespo.github.io/silverpoint-tableau/v0.1/index.html"

TABLEAU_TREX = """<manifest manifest-version="0.1" xmlns="http://www.tableau.com/xml/extension_manifest">
  <worksheet-extension id="to.seraph.silverpoint.line-chart" extension-version="0.1.0">
    <min-api-version>1.12</min-api-version>
    <source-location>
      <url>https://ecrespo.github.io/silverpoint-tableau/v0.1/index.html?chart=line-chart</url>
    </source-location>
    <encoding id="x">
      <display-name>X</display-name>
      <role-spec><role-type>discrete-dimension</role-type></role-spec>
      <fields max-count="1"/>
    </encoding>
    <encoding id="value">
      <display-name>Value</display-name>
      <role-spec><role-type>continuous-measure</role-type><role-type>discrete-measure</role-type></role-spec>
      <fields max-count="1"/>
    </encoding>
    <!-- … secondary … -->
  </worksheet-extension>
</manifest>"""

TABLEAU = Host(
    slug="tableau",
    label="Tableau",
    title="silverpoint in Tableau",
    catalog_ids=("tableau",),
    lede="Viz extensions that draw on the Marks card: one extension per chart (55 of them), each with its own "
    "tiles (X, Value, Row, …), drawn by silverpoint's standalone script, served with the page from the "
    "repository's GitHub Pages.",
    engine="@silverpoint/embed 0.10.1 (silverpoint-embed.full.js)",
    requirements=(
        ("Tableau", "Desktop, Server or Cloud 2024.2 or later (Extensions API 1.12)"),
        ("Data", "summary data only: no manifest asks for full data"),
        ("Not available", "candlestick-chart: five roles, and a viz extension takes at most four tiles"),
    ),
    sections=(
        HostSection(
            "authors",
            "For authors",
            (
                (
                    "ol",
                    (
                        "Download the `.trex` of the chart you want from the [latest release]"
                        "(https://github.com/ecrespo/silverpoint-tableau/releases), or "
                        "`silverpoint-tableau-trex-X.Y.Z.zip` for all of them.",
                        "In a worksheet: *Marks card → mark type → Viz Extensions → Add Extension → Access Local "
                        "Viz Extensions*, and choose the file.",
                        "Drag fields onto the extension's tiles. Until every required tile has a field, the chart "
                        "says which ones to fill.",
                        "*Format Extension* opens the chart's options, the view options (title, data table) and the "
                        "appearance (ground, substrate, mode, palette). They are saved with the workbook.",
                    ),
                ),
                (
                    "p",
                    "For a line chart of hits per hour: `line-chart.trex`, `Hour` on *X*, `SUM(Hits)` on *Value* "
                    "and, for the dotted series, `SUM(Baseline)` on *Secondary*. The chart fills the worksheet, "
                    "reads by keyboard, switches to precision mode under high contrast and, with one dimension "
                    "tile, selects the matching marks when you press Enter on an item.",
                ),
                ("p", "The manifest declares one tile per role and the page that draws it:"),
                ("code", TABLEAU_TREX, "xml"),
            ),
        ),
        HostSection(
            "admins",
            "For administrators",
            (
                (
                    "p",
                    "The extensions are network-enabled. On Tableau Server or Tableau Cloud, allow this URL under "
                    "*Settings → Extensions → Enable specific extensions*:",
                ),
                ("code", TABLEAU_URL, "url"),
                (
                    "p",
                    "Each release line has its own folder (`/v0.1/`, `/v0.2/`, …) that never changes once released, "
                    "so a workbook keeps working after the next release. The page loads two scripts, both from that "
                    "origin (the Tableau Extensions API library and silverpoint's standalone file), and sends "
                    "worksheet data nowhere.",
                ),
            ),
        ),
    ),
)

HOSTS: tuple[Host, ...] = (KNIME, N8N, SUPERSET, PLONE, POWERBI, TABLEAU)

#: The catalog's hosts documented on /docs/python rather than on a host page of their own.
PYTHON_IDS = ("python", "flask", "django", "jupyter", "databricks")


def route(host: Host) -> str:
    return f"/docs/hosts/{host.slug}"


def page_for(catalog_id: str) -> str | None:
    """The site's page documenting a catalog host, if any."""
    if catalog_id in PYTHON_IDS:
        return "/docs/python"
    return next((route(h) for h in HOSTS if catalog_id in h.catalog_ids), None)
