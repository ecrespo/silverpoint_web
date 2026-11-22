"""silverpoint for Python (the PyPI package ``silverpoint``) on /docs/python.

The demo is a plain page (``assets/python/demo.html``) holding the markup the package writes, in a
``sandbox="allow-scripts"`` frame like /docs/embed's, so it never touches this page's hydration.
"""

from collections import Counter
from collections.abc import Callable

import reflex as rx

from .. import python_examples as ex
from ..components.ui import c, callout, code_block, ext_link, table
from .docs import Section, page

EYEBROW = "New in 0.11"
BUILDERS = ex.load_builders()


def roles(builder: dict) -> rx.Component:
    """The builder's role keywords; the optional ones in brackets."""
    parts: list[rx.Component | str] = []
    for i, role in enumerate(builder["roles"]):
        if i:
            parts.append(" ")
        parts.append(c(role["id"]) if role["required"] else rx.el.span("[", c(role["id"]), "]"))
    return rx.el.span(*parts)


def builder_rows() -> list[list]:
    return [
        [
            c(f"{b['name']}()"),
            rx.el.a(b["title"], href=f"/charts/{b['chart']}"),
            roles(b),
        ]
        for b in BUILDERS
    ]


def python() -> Callable[[], rx.Component]:
    families = Counter(b["family"] for b in BUILDERS)
    sections: list[Section] = [
        (
            "live",
            "Try it",
            [
                rx.el.p(
                    "Three charts from three pandas DataFrames. The frame below is a plain page holding exactly "
                    "what ",
                    c("to_html(full_document=False)"),
                    " returned for each chart: no picture is made in Python. Hover or focus a chart and move with "
                    "the arrow keys. ",
                    ext_link("Open the page on its own", ex.DEMO_URL),
                    ".",
                ),
                rx.el.iframe(
                    src=ex.DEMO_URL,
                    title="Three silverpoint charts written by the Python package",
                    sandbox="allow-scripts",
                    loading="lazy",
                    class_name="spw-embed-frame spw-python-frame",
                ),
                code_block(ex.DEMO, "python"),
            ],
        ),
        (
            "install",
            "Install",
            [
                rx.el.p(
                    c("silverpoint"),
                    " needs Python 3.10+ and has no dependencies. The ",
                    c("flask"),
                    " and ",
                    c("django"),
                    " extras bring the framework. silverpoint X.Y.Z vendors ",
                    rx.el.a("@silverpoint/embed", href="/docs/embed"),
                    " X.Y.Z, version for version (",
                    c("silverpoint.SILVERPOINT_VERSION"),
                    "): the same engine as the React, Vue and Angular adapters, so the same picture, keyboard "
                    "reading and precision mode.",
                ),
                code_block(ex.INSTALL, "shell"),
                callout(
                    "Building a Reflex app? Use ",
                    rx.el.a("reflex-silverpoint-react", href="/docs/reflex"),
                    ": it wraps the React components themselves, with the UI components and the dashboard. ",
                    c("silverpoint"),
                    " is for everything else in Python: notebooks, Flask, Django, scripts and static HTML.",
                    kind="tip",
                ),
            ],
        ),
        (
            "chart",
            "A chart",
            [
                rx.el.p(
                    "A builder takes the data and one keyword per role (a column name) and per option, and returns "
                    "a ",
                    c("Chart"),
                    ". Its ",
                    c("spec"),
                    " is the chart spec @silverpoint/embed draws, built and validated when the chart is made.",
                ),
                code_block(ex.QUICKSTART, "python"),
                code_block(ex.SPEC_OUT, "python"),
                rx.el.p(
                    c("Chart(slug, data, roles=…, options=…)"),
                    " is the same thing by name. Both take the appearance (",
                    rx.el.a("ground, substrate", href="/docs/grounds"),
                    ", ",
                    rx.el.a("mode", href="/docs/precision"),
                    ", ",
                    rx.el.a("palette", href="/docs/palettes"),
                    "), ",
                    c("width"),
                    ", ",
                    c("height"),
                    " and ",
                    c("id"),
                    ". The ",
                    rx.el.a("common props", href="/docs/props"),
                    " are snake_case keywords (",
                    c("data_table"),
                    ", ",
                    c("footer_left"),
                    ", ",
                    c("hatch_fill"),
                    "…); the common ",
                    c("value"),
                    " prop (the figure in the card's header) is ",
                    c("value_"),
                    ", since ",
                    c("value"),
                    " names a role.",
                ),
                code_block(ex.BY_NAME, "python"),
            ],
        ),
        (
            "builders",
            "The builders",
            [
                rx.el.p(
                    f"One builder per chart a table can feed: {len(BUILDERS)} of the 60, generated from the host "
                    "catalog with full type hints (an editor completes each chart's roles and the values of its "
                    "options). Four charts take no table (orbit, sparkline rows, volvelle and the grid treemap). "
                    f"{len(families)} families: "
                    + ", ".join(f"{family} ({n})" for family, n in sorted(families.items()))
                    + ". Roles in brackets are optional.",
                ),
                table(["Builder", "Chart", "Roles"], builder_rows()),
            ],
        ),
        (
            "data",
            "Data in",
            [
                rx.el.p(
                    "Rows, a mapping of columns, a pandas or polars DataFrame, a pyarrow Table, and in Databricks a "
                    "Spark or pandas-on-Spark DataFrame or the ",
                    c("Row"),
                    "s of ",
                    c("collect()"),
                    ". Charts drawn from a matrix, such as the heatmap, take the long table and the package "
                    "reshapes it: ",
                    c("row"),
                    ", ",
                    c("column"),
                    " and ",
                    c("value"),
                    " are three columns.",
                ),
                code_block(ex.DATA, "python"),
            ],
        ),
        (
            "errors",
            "Errors before HTML",
            [
                rx.el.p(
                    "A role, column, option or value the catalog does not know raises ",
                    c("SpecError"),
                    " naming the closest valid names, when the chart is made: no page is written with a chart "
                    "that cannot draw.",
                ),
                code_block(ex.ERRORS, "python"),
                table(["Raised", "When"], [[c(name), why] for name, why in ex.RAISES]),
            ],
        ),
        (
            "notebooks",
            "Jupyter, JupyterLab, VS Code",
            [
                rx.el.p(
                    "A chart as a cell's value draws itself: each one is a sandboxed ",
                    c("<iframe srcdoc>"),
                    " holding the inline page, so it needs no trusted notebook and keeps its stylesheet off the "
                    "notebook's. ",
                    c("silverpoint.notebook.enable()"),
                    " shows the script once and writes later charts as ",
                    c("<silverpoint-chart>"),
                    " elements, for front ends that run scripts in outputs. ",
                    ext_link("quickstart.ipynb", ex.QUICKSTART_NOTEBOOK),
                    ".",
                ),
                code_block(ex.NOTEBOOK, "python"),
            ],
        ),
        (
            "databricks",
            "Databricks",
            [
                rx.el.p(
                    "A Spark DataFrame goes straight into a builder, and a chart as a cell's value draws itself. ",
                    c('displayHTML(chart.to_html(render="client"))'),
                    " draws a chart anywhere in a cell, so one cell can draw several. ",
                    ext_link("databricks.py", ex.DATABRICKS_NOTEBOOK),
                    " is a notebook to import (Databricks source format) that runs on ",
                    c("samples.nyctaxi.trips"),
                    ".",
                ),
                code_block(ex.DATABRICKS, "python"),
                rx.el.ul(
                    rx.el.li(
                        rx.el.strong("Rows. "),
                        "At most ",
                        c("silverpoint.data.SPARK_ROW_LIMIT"),
                        " (10,000) rows are read, through ",
                        c("limit"),
                        ", so a large table never reaches the driver; a bigger DataFrame raises ",
                        c("ValueError"),
                        ". Aggregate in Spark first.",
                    ),
                    rx.el.li(
                        rx.el.strong("Size. "),
                        "Each chart carries its own copy of the script (about 0.5 MB; 1.1 MB with 10,000 rows). A "
                        "cell's output may be 10 MB by default on Runtime 17+, and a notebook keeps about fifteen "
                        "charts before Databricks stops saving its revision snapshots.",
                    ),
                    rx.el.li(
                        c("silverpoint.notebook.enable()"),
                        " has no effect there and warns: each output is its own frame.",
                    ),
                ),
            ],
        ),
        (
            "flask",
            "Flask",
            [
                rx.el.p(
                    c("Silverpoint(app)"),
                    " (or ",
                    c("Silverpoint().init_app(app)"),
                    ") serves the vendored script at ",
                    c("/_silverpoint/"),
                    ", immutable for a year, and adds two Jinja globals: ",
                    c("silverpoint_script()"),
                    " and ",
                    c("silverpoint_chart(chart)"),
                    ", which also takes a spec.",
                ),
                code_block(ex.FLASK, "python"),
                callout(
                    "The Flask and Django markup has no inline script or style: it renders under ",
                    c("Content-Security-Policy: script-src 'self'; style-src 'self'"),
                    ", as the examples set.",
                    kind="note",
                ),
            ],
        ),
        (
            "django",
            "Django",
            [
                rx.el.p(
                    "Add ",
                    c('"silverpoint.contrib.django"'),
                    " to ",
                    c("INSTALLED_APPS"),
                    " (with ",
                    c("django.contrib.staticfiles"),
                    "): the script is a static file, so ",
                    c("collectstatic"),
                    " ships it, and two template tags write the markup.",
                ),
                code_block(ex.DJANGO_SETTINGS, "python"),
                code_block(ex.DJANGO_VIEW, "python"),
                code_block(ex.DJANGO_TEMPLATE, "html"),
            ],
        ),
        (
            "html",
            "Static HTML and SVG",
            [
                rx.el.p(
                    c("to_html()"),
                    " writes a page that opens from disk, a report or an e-mail attachment; ",
                    c("to_svg()"),
                    " returns the library's ",
                    c("renderToSVG"),
                    " output (",
                    c("embed_fonts=True"),
                    " inlines EB Garamond) and, like ",
                    c('render="server"'),
                    ", needs Node 20+ on PATH. A CDN URL is never written.",
                ),
                code_block(ex.HTML, "python"),
                table(["Keyword", "Default", ""], [[c(k), c(d), why] for k, d, why in ex.HTML_OPTIONS]),
            ],
        ),
        (
            "agents",
            "Specs from elsewhere",
            [
                rx.el.p(
                    c("Chart.from_spec"),
                    " takes a spec already written: the JSON of ",
                    rx.el.a("@silverpoint/embed", href="/docs/embed#spec"),
                    ", or what the MCP server's ",
                    c("generate_code"),
                    " returns. ",
                    rx.el.a("Use with AI →", href="/docs/ai"),
                ),
                code_block(ex.FROM_SPEC, "python"),
                rx.el.p(
                    "Source, the Flask, Django and notebook examples, and issues: ",
                    ext_link("ecrespo/silverpoint-python", ex.REPO),
                    ". On PyPI: ",
                    ext_link(f"silverpoint {ex.PY_VERSION}", ex.PYPI),
                    ".",
                ),
            ],
        ),
    ]
    return page(
        "/docs/python",
        "Python: notebooks, Flask, Django",
        rx.el.span(
            "New with silverpoint 0.11. ",
            ext_link("silverpoint", ex.PYPI),
            " on PyPI draws any chart a table can feed from a pandas, polars, pyarrow or Spark table: as the "
            "value of a notebook cell, in a Flask or Django template, or as a self-contained HTML file. It builds "
            "the chart spec in Python and @silverpoint/embed's standalone file, vendored, draws it.",
        ),
        sections,
        eyebrow=EYEBROW,
    )


def register(app: rx.App) -> None:
    app.add_page(python(), route="/docs/python", title="Python: notebooks, Flask, Django · silverpoint docs")
