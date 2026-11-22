"""silverpoint for Python (the PyPI package ``silverpoint``): the code and facts /docs/python prints.

The package (https://github.com/ecrespo/silverpoint-python) builds a chart spec from a table and the
markup that carries it; ``@silverpoint/embed``'s standalone file, vendored version for version, draws
it. The code follows its README at ``PY_VERSION``. ``scripts/python_docs.py`` writes the two files
generated from the installed package, the live demo (``assets/python/demo.html``) and the builder
table (``python_builders.json``); ``tests/test_python_docs.py`` runs the examples and checks both.
"""

import json
from pathlib import Path

#: The silverpoint (PyPI) release this page documents; it vendors @silverpoint/embed of the same version.
PY_VERSION = "0.11.0"
PYPI = "https://pypi.org/project/silverpoint/"
REPO = "https://github.com/ecrespo/silverpoint-python"
EXAMPLES = f"{REPO}/tree/main/examples"
DATABRICKS_NOTEBOOK = f"{REPO}/blob/main/examples/notebooks/databricks.py"
QUICKSTART_NOTEBOOK = f"{REPO}/blob/main/examples/notebooks/quickstart.ipynb"

DEMO_URL = "/python/demo.html"
ASSETS = Path(__file__).resolve().parent.parent / "assets" / "python"
BUILDERS_FILE = Path(__file__).resolve().parent / "python_builders.json"


def load_builders() -> list[dict]:
    """One entry per builder: ``name``, ``chart``, ``title``, ``family`` and its ``roles``."""
    return json.loads(BUILDERS_FILE.read_text())


INSTALL = """pip install silverpoint            # no dependencies
pip install "silverpoint[flask]"   # or [django]
# or
uv add silverpoint"""

#: The demo's code: ``scripts/python_docs.py`` runs it and writes the three charts into demo.html.
DEMO = """import pandas as pd
import silverpoint

wins = pd.DataFrame({"team": ["North", "South", "East", "West"], "wins": [12, 9, 15, 7]})
hits = pd.DataFrame({
    "hour": ["00", "04", "08", "12", "16", "20"],
    "hits": [18, 11, 34, 71, 74, 62],
})
load = pd.DataFrame({
    "day": ["Mon", "Mon", "Mon", "Tue", "Tue", "Tue", "Wed", "Wed", "Wed"],
    "slot": ["am", "noon", "pm"] * 3,
    "load": [3, 7, 5, 2, 8, 6, 4, 9, 3],
})

charts = [
    silverpoint.bar_chart(wins, x="team", value="wins", orientation="rows", title="Wins per team", width=420),
    silverpoint.line_chart(hits, x="hour", value="hits", title="Hits per hour", curve="monotone",
                           ground="cyanotype", substrate="prussian", width=420),
    silverpoint.heatmap_chart(load, row="day", column="slot", value="load", title="Load",
                              palette="sepia", width=420),
]
fragments = [chart.to_html(full_document=False, render="client") for chart in charts]"""

QUICKSTART = """import pandas as pd
import silverpoint

df = pd.DataFrame({"team": ["A", "B", "C"], "wins": [12, 9, 15]})
chart = silverpoint.bar_chart(df, x="team", value="wins", orientation="rows", title="Wins")

chart.spec        # the ChartSpec, a dict
chart.to_html()   # a complete, self-contained page (the script inlined; no network)
chart.to_svg()    # the library's renderToSVG bytes (needs Node 20+ on PATH)"""

SPEC_OUT = """{'chart': 'bar-chart',
 'data': [{'team': 'A', 'wins': 12}, {'team': 'B', 'wins': 9}, {'team': 'C', 'wins': 15}],
 'props': {'orientation': 'rows', 'title': 'Wins', 'xKey': 'team', 'valueKey': 'wins'}}"""

BY_NAME = """# the same chart, by slug: roles are the columns, options the chart's props
chart = silverpoint.Chart(
    "bar-chart",
    df,
    roles={"x": "team", "value": "wins"},
    options={"orientation": "rows", "title": "Wins"},
    ground="silverpoint", substrate="green", mode="precision", palette="verdigris",
    width=480,
)

silverpoint.catalog["version"]   # the host catalog the builders are generated from
silverpoint.SILVERPOINT_VERSION   # the @silverpoint/embed version vendored"""

DATA = """import polars as pl
import pyarrow as pa

rows = [{"team": "A", "wins": 12}, {"team": "B", "wins": 9}]   # a list of rows
columns = {"team": ["A", "B"], "wins": [12, 9]}                 # a mapping of columns

silverpoint.bar_chart(rows, x="team", value="wins")
silverpoint.bar_chart(columns, x="team", value="wins")
silverpoint.bar_chart(pl.DataFrame(columns), x="team", value="wins")
silverpoint.bar_chart(pa.table(columns), x="team", value="wins")
# dates become ISO strings; NaN and NaT become None"""

ERRORS = """from silverpoint import SpecError

try:
    silverpoint.bar_chart(df, x="teem", value="wins")
except SpecError as error:
    print(error.kind, error)
# role the data has no column "teem" Did you mean "team"?. Columns: "team", "wins".

silverpoint.bar_chart(df, x="team", value="wins", orientation="sideways")
# SpecError: bar-chart: "sideways" is not a value of `orientation`; its values are "columns", "rows".

silverpoint.Chart("bar-chrt")
# SpecError: Unknown chart "bar-chrt". Did you mean "bar-chart"?"""

NOTEBOOK = """import pandas as pd
import silverpoint

df = pd.DataFrame({"hour": ["00", "04", "08", "12", "16", "20"], "hits": [18, 11, 34, 71, 74, 62]})
silverpoint.line_chart(df, x="hour", value="hits", title="Hits per hour", curve="monotone")
# the chart is the cell's value: it draws itself in a sandboxed <iframe srcdoc>

# front ends that run scripts in outputs can share one copy of the script:
silverpoint.notebook.enable()    # shows the script once; later charts are <silverpoint-chart>
silverpoint.notebook.disable()   # back to one frame per chart"""

DATABRICKS = """# %pip install silverpoint
from pyspark.sql import functions as F
import silverpoint

trips = spark.read.table("samples.nyctaxi.trips")
by_hour = (
    trips.groupBy(F.hour("tpep_pickup_datetime").alias("hour"))
    .agg(F.count("*").alias("trips"), F.round(F.avg("fare_amount"), 2).alias("fare"))
    .orderBy("hour")
    .withColumn("hour", F.format_string("%02d:00", "hour"))
)

# a Spark DataFrame goes straight into a builder; the chart draws itself as the cell's value
silverpoint.line_chart(by_hour, x="hour", value="trips", secondary="fare", title="Trips per pickup hour")

# several charts in one cell: displayHTML draws each where it is called
displayHTML(silverpoint.bar_chart(by_hour, x="hour", value="trips").to_html(render="client"))"""

FLASK = """from flask import Flask, render_template_string
import silverpoint
from silverpoint.contrib.flask import Silverpoint

app = Flask(__name__)
Silverpoint(app)  # serves the script at /_silverpoint/, immutable, and adds two Jinja globals

PAGE = \"\"\"<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Wins</title>{{ silverpoint_script() }}</head>
<body><h1>Wins per team</h1>{{ silverpoint_chart(chart) }}</body></html>\"\"\"


@app.after_request
def csp(response):
    response.headers["Content-Security-Policy"] = "script-src 'self'; style-src 'self'"
    return response


@app.route("/")
def index():
    rows = [{"team": "A", "wins": 12}, {"team": "B", "wins": 9}, {"team": "C", "wins": 15}]
    chart = silverpoint.bar_chart(rows, x="team", value="wins", title="Wins", orientation="rows")
    return render_template_string(PAGE, chart=chart)"""

DJANGO_SETTINGS = """# settings.py
INSTALLED_APPS = [
    "django.contrib.staticfiles",
    "silverpoint.contrib.django",   # the template tags and the script as a static file
    # …
]"""

DJANGO_VIEW = """# views.py
from django.shortcuts import render
import silverpoint


def index(request):
    rows = [{"team": "A", "wins": 12}, {"team": "B", "wins": 9}, {"team": "C", "wins": 15}]
    chart = silverpoint.bar_chart(rows, x="team", value="wins", title="Wins", orientation="rows")
    return render(request, "index.html", {"chart": chart})"""

DJANGO_TEMPLATE = """{% load silverpoint %}<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Wins</title>{% silverpoint_script %}</head>
<body><h1>Wins per team</h1>{% silverpoint_chart chart %}</body></html>"""

HTML = """from pathlib import Path

# a self-contained page: the vendored script inlined, no network, opens from disk
Path("wins.html").write_text(chart.to_html())

# a fragment for a page that loads the script itself
box = chart.to_html(full_document=False, render="client")
# <div data-sp-embed><script type="application/json">{"chart":"bar-chart",…}</script></div>

# a page whose script your application serves (never a CDN), pinned by its integrity
page = chart.to_html(script="/static/silverpoint-embed.full.js", integrity="sha384-…")

silverpoint.static_path()   # the folder holding silverpoint-embed.full.js, for any framework"""

#: ``to_html``'s keywords.
HTML_OPTIONS: tuple[tuple[str, str, str], ...] = (
    ("full_document", "True", "A whole page, or only the chart's markup."),
    (
        "script",
        '"inline"',
        '"inline" (the vendored file in the page), "none" (the page loads it) or a URL your application serves.',
    ),
    (
        "render",
        '"auto"',
        '"server" draws in Node with the library\'s renderToHTML (byte-identical; the script then adopts it); '
        '"client" writes only the spec and the script draws it; "auto" is server when Node is on PATH.',
    ),
    ("title / lang", 'the chart\'s name / "en"', "The page's <title> and lang."),
    ("integrity", "None", "The script's SHA-384, with a script URL."),
)

FROM_SPEC = """# a spec written elsewhere, for instance by the MCP server's generate_code
chart = silverpoint.Chart.from_spec({
    "chart": "donut-chart",
    "data": [{"name": "Rent", "value": 38}, {"name": "Food", "value": 22}],
    "props": {"nameKey": "name", "valueKey": "value", "title": "Budget"},
})
chart.to_html()"""

#: What the package raises.
RAISES: tuple[tuple[str, str], ...] = (
    (
        "SpecError",
        "A chart, role, column, option or value the pinned catalog does not know, before any HTML is "
        "written; error.kind is chart, role, prop, shape or value.",
    ),
    ("RuntimeUnavailable", 'to_svg() or render="server" with no Node 20+ on PATH.'),
    ("ValueError", "A Spark DataFrame over SPARK_ROW_LIMIT (10,000) rows: aggregate in Spark first."),
)
