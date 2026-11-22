"""/docs/python: silverpoint for Python (the PyPI package ``silverpoint``).

The examples run against the installed package (a dev dependency), and the two files generated from
it, the demo page and the builder table, must be what ``scripts/python_docs.py`` writes today.
"""

import ast
import importlib.util
import json
import re
import sys
from pathlib import Path
from typing import Any

import pandas as pd
import pytest
import silverpoint

from silverpoint_web import embed_examples as embed
from silverpoint_web import python_examples as ex
from silverpoint_web.components.layout import DOCS_NAV
from silverpoint_web.pages import python_docs

ROOT = Path(__file__).resolve().parent.parent
_spec = importlib.util.spec_from_file_location("python_docs_script", ROOT / "scripts" / "python_docs.py")
assert _spec and _spec.loader
script = importlib.util.module_from_spec(_spec)
sys.modules["python_docs_script"] = script
_spec.loader.exec_module(script)


def run(code: str, **scope: Any) -> dict[str, Any]:
    exec(code, scope)  # noqa: S102 - the page's own examples
    return scope


def test_page_documents_the_installed_release():
    assert silverpoint.__version__ == ex.PY_VERSION
    # silverpoint X.Y.Z vendors @silverpoint/embed X.Y.Z, on the same minor as the embed demo's file
    assert silverpoint.SILVERPOINT_VERSION == ex.PY_VERSION
    assert ex.PY_VERSION.rsplit(".", 1)[0] == embed.EMBED_VERSION.rsplit(".", 1)[0]


def test_page_is_in_the_docs_nav():
    links = [link for _, group in DOCS_NAV for link in group]
    assert ("/docs/python", "Python: notebooks, Flask, Django") in links


def test_generated_files_are_current():
    assert (ex.ASSETS / "demo.html").read_text() == script.demo_html()
    assert ex.BUILDERS_FILE.read_text() == script.builders_json()


def test_builder_table_names_every_builder():
    names = {b["name"] for b in python_docs.BUILDERS}
    exported = {name for name in silverpoint.__all__ if callable(getattr(silverpoint, name, None))}
    assert names == exported - {"Chart", "static_path", "RuntimeUnavailable", "SpecError"}
    assert len(names) == 56


def test_demo_page_loads_the_sites_standalone_file():
    html = (ex.ASSETS / "demo.html").read_text()
    assert f'src="/embed/{embed.STANDALONE_FILE}"' in html
    specs = [json.loads(s) for s in re.findall(r'<script type="application/json">(.*?)</script>', html)]
    assert [s["chart"] for s in specs] == ["bar-chart", "line-chart", "heatmap-chart"]


def test_quickstart_runs_and_prints_its_spec():
    scope = run(ex.QUICKSTART.replace("chart.to_svg()", "# chart.to_svg()"))
    assert scope["chart"].spec == ast.literal_eval(ex.SPEC_OUT)


def test_by_name_matches_the_builder():
    df = pd.DataFrame({"team": ["A", "B", "C"], "wins": [12, 9, 15]})
    scope = run(ex.BY_NAME, silverpoint=silverpoint, df=df)
    assert scope["chart"].spec["chart"] == "bar-chart"
    assert scope["chart"].spec["props"]["xKey"] == "team"


def test_errors_print_what_the_page_says():
    df = pd.DataFrame({"team": ["A", "B", "C"], "wins": [12, 9, 15]})
    with pytest.raises(silverpoint.SpecError) as error:
        silverpoint.bar_chart(df, x="teem", value="wins")
    assert f"# {error.value.kind} {error.value}\n" in ex.ERRORS
    pairs = re.findall(r"^(silverpoint\..*)\n# SpecError: (.*)$", ex.ERRORS, re.M)
    assert len(pairs) == 2
    for code, expected in pairs:
        with pytest.raises(silverpoint.SpecError) as error:
            run(code, silverpoint=silverpoint, df=df)
        assert str(error.value) == expected


def test_notebook_and_html_examples_run(tmp_path, monkeypatch):
    monkeypatch.chdir(tmp_path)
    run(ex.NOTEBOOK)
    chart = silverpoint.bar_chart([{"team": "A", "wins": 1}], x="team", value="wins")
    scope = run(
        ex.HTML.replace("chart.to_html()", 'chart.to_html(render="client")'),
        chart=chart,
        silverpoint=silverpoint,
    )
    assert (tmp_path / "wins.html").read_text().startswith("<!doctype html>")
    assert scope["box"].startswith("<div data-sp-embed>")
    assert '<script src="/static/silverpoint-embed.full.js"' in chart.to_html(
        script="/static/silverpoint-embed.full.js", render="client"
    )
    from_spec = run(ex.FROM_SPEC.replace("chart.to_html()", ""), silverpoint=silverpoint)
    assert from_spec["chart"].spec["chart"] == "donut-chart"


def test_flask_example_serves_a_chart(tmp_path):
    (tmp_path / "flask_example.py").write_text(ex.FLASK)
    spec = importlib.util.spec_from_file_location("flask_example", tmp_path / "flask_example.py")
    assert spec and spec.loader
    module = importlib.util.module_from_spec(spec)
    sys.modules["flask_example"] = module
    spec.loader.exec_module(module)
    client = module.app.test_client()
    response = client.get("/")
    assert response.status_code == 200
    assert b"<silverpoint-chart" in response.data
    assert response.headers["Content-Security-Policy"] == "script-src 'self'; style-src 'self'"
    script_url = re.search(rb'src="(/_silverpoint/[^"]+)"', response.data)
    assert script_url and client.get(script_url.group(1).decode()).status_code == 200
