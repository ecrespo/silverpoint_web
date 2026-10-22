"""Agent access (silverpoint feature-005): the agent catalog, the llms files and the MCP facts.

The catalog is the one ``@silverpoint/mcp`` ships, fetched from npm at ``CATALOG_VERSION`` and
committed under ``agent/``; the tool list is the table the package's README holds, which silverpoint
writes from its running server. ``/llms.txt`` and ``/llms-full.txt`` are generated from the catalog
alone, so they never state a prop, a default or a name it does not hold.
``scripts/agent_files.py`` fetches the copies and writes the three files into the export.
"""

import json
import re
import shutil
from pathlib import Path
from typing import Any

#: The silverpoint version whose catalog the site publishes: the one it documents (site_data.LATEST).
CATALOG_VERSION = "0.8.0"

SITE_URL = "https://silverpointweb.vercel.app"
#: The hosted MCP server, behind the site's own /mcp (vercel.json rewrites it to the MCP project).
MCP_URL = f"{SITE_URL}/mcp"

AGENT_DIR = Path(__file__).resolve().parents[1] / "agent"
CATALOG_FILE = AGENT_DIR / "agent-catalog.json"
TOOLS_FILE = AGENT_DIR / "agent-tools.json"
EXAMPLES_FILE = AGENT_DIR / "agent-examples.json"

#: The worked examples of the AI page, answered by the hosted server (``scripts/agent_files.py fetch``).
EXAMPLE_CALLS: tuple[tuple[str, dict[str, Any]], ...] = (
    ("recommend_chart", {"shape": "series", "intent": "trend"}),
    *(
        (
            "generate_code",
            {
                "target": {"chart": "line-chart"},
                "framework": framework,
                "fields": {"x": "hour", "value": "hits"},
            },
        )
        for framework in ("react", "vue", "angular", "reflex")
    ),
)

#: How each MCP client connects to the hosted server.
CLIENT_CONFIGS: dict[str, str] = {
    "Claude Code": f"claude mcp add --transport http silverpoint {MCP_URL}",
    "Claude": MCP_URL,
    "Cursor": json.dumps({"mcpServers": {"silverpoint": {"url": MCP_URL}}}, indent=2),
    "VS Code": json.dumps({"servers": {"silverpoint": {"type": "http", "url": MCP_URL}}}, indent=2),
}

#: The Claude Code plugins: each installs its skill and connects the hosted server.
PLUGINS: dict[str, str] = {
    "silverpoint": "/plugin marketplace add ecrespo/silverpoint\n/plugin install silverpoint@silverpoint",
    "reflex-silverpoint": "/plugin marketplace add ecrespo/reflex-silverpoint-react\n"
    "/plugin install reflex-silverpoint@reflex-silverpoint",
}

LOCAL_SERVER = "claude mcp add silverpoint -- npx -y @silverpoint/mcp"

FRAMEWORK_LABELS = {"react": "React", "vue": "Vue", "angular": "Angular", "reflex": "Reflex"}


def package_url(path: str) -> str:
    """A file of the published ``@silverpoint/mcp`` at the pinned version."""
    return f"https://unpkg.com/@silverpoint/mcp@{CATALOG_VERSION}/{path}"


def load_catalog() -> dict[str, Any]:
    return json.loads(CATALOG_FILE.read_text())


def load_tools() -> dict[str, Any]:
    """``{"version", "source", "tools": [{"name", "description"}]}``."""
    return json.loads(TOOLS_FILE.read_text())


def load_examples() -> dict[str, Any]:
    """``{"version", "endpoint", "calls": [{"tool", "arguments", "result"}]}``."""
    return json.loads(EXAMPLES_FILE.read_text())


def parse_tools_table(readme: str) -> list[dict[str, str]]:
    """The tools of the README's generated table, between its ``tools`` markers."""
    block = readme.split("<!-- tools:start -->", 1)[1].split("<!-- tools:end -->", 1)[0]
    tools = []
    for line in block.strip().splitlines()[2:]:
        name, description = re.split(r"(?<!\\)\|", line.strip().strip("|"))
        tools.append(
            {"name": name.strip().strip("`"), "description": description.strip().replace("\\|", "|")}
        )
    return tools


# ── Markdown ─────────────────────────────────────────────────────────────────────────────


def _cell(text: str) -> str:
    return text.replace("|", "\\|").replace("\n", " ")


def _code(text: str) -> str:
    return f"`{_cell(text)}`" if text else ""


def _table(head: list[str], rows: list[list[str]]) -> list[str]:
    return [
        "| " + " | ".join(head) + " |",
        "|" + "---|" * len(head),
        *("| " + " | ".join(row) + " |" for row in rows),
        "",
    ]


def _props(props: list[dict[str, Any]]) -> list[str]:
    """A props table: the name React, Vue and Angular share, the Reflex one, type, default, doc."""
    return _table(
        ["Prop (React, Vue, Angular)", "Reflex", "Type", "Default", "Description"],
        [
            [
                _code(prop["name"]),
                _code(prop.get("reflex", "")) or "—",
                _code(prop["type"]),
                _code(prop.get("default", "")),
                _cell(prop["doc"]) + ("" if prop["optional"] else " Required."),
            ]
            for prop in props
        ],
    )


def _names(catalog: dict[str, Any], entry: dict[str, Any]) -> list[str]:
    return _table(
        ["Framework", "Name", "Import"],
        [
            [FRAMEWORK_LABELS.get(fw, fw), _code(entry["names"][fw]), _code(entry["imports"][fw])]
            for fw in catalog["frameworks"]
        ],
    )


def _per_framework(values: dict[str, list[str]]) -> str:
    return "; ".join(
        f"{FRAMEWORK_LABELS.get(fw, fw)} " + (", ".join(_code(v) for v in names) or "none")
        for fw, names in values.items()
    )


def _summary(catalog: dict[str, Any]) -> str:
    frameworks = [FRAMEWORK_LABELS.get(fw, fw) for fw in catalog["frameworks"]]
    return (
        f"silverpoint {catalog['version']} draws {len(catalog['charts'])} charts and "
        f"{len(catalog['components'])} UI components as metal point on prepared paper, for "
        f"{', '.join(frameworks[:-1])} and {frameworks[-1]} (Python, through reflex-silverpoint-react), "
        "from one framework-free engine, on the "
        + " and ".join(ground["name"] for ground in catalog["grounds"])
        + f" grounds with {len(catalog['palettes']['presets'])} palette presets; accessible and server-renderable."
    )


def llms_txt(catalog: dict[str, Any], docs_nav: tuple[tuple[str, tuple[tuple[str, str], ...]], ...]) -> str:
    """The llms.txt index (llmstxt.org): what silverpoint is, then where agents read more."""
    lines = [
        "# silverpoint",
        "",
        f"> {_summary(catalog)}",
        "",
        "Everything below describes that version. Agents write silverpoint best through its MCP server, "
        "which answers from the same catalog and checks and renders what they write.",
        "",
        "## For agents",
        "",
        f"- [Full reference]({SITE_URL}/llms-full.txt): every chart and component with its props per "
        "framework (React, Vue, Angular, Reflex), the grounds, the palettes and the diagnostics, as Markdown",
        f"- [MCP server]({MCP_URL}): Streamable HTTP, read-only, no account; "
        f"or locally `npx -y @silverpoint/mcp@{catalog['version']}`",
        f"- [Use with AI]({SITE_URL}/docs/ai): client configurations, the Claude Code plugins and the tools",
        f"- [Agent catalog]({SITE_URL}/agent-catalog.json): the same facts as JSON",
        "",
    ]
    for title, entries in docs_nav:
        lines += [f"## {title}", ""]
        lines += [f"- [{label}]({SITE_URL}{href})" for href, label in entries]
        lines.append("")
    families = {family["slug"]: family["title"] for family in catalog["families"]}
    lines += ["## Charts", ""]
    lines += [
        f"- [{chart['names']['react']}]({SITE_URL}/charts/{chart['slug']}): {families[chart['family']]}. {chart['summary']}"
        for chart in catalog["charts"]
    ]
    lines += ["", "## UI components", ""]
    lines += [
        f"- [{component['names']['react']}]({SITE_URL}/components/{component['slug']}): {component['summary']}"
        for component in catalog["components"]
    ]
    lines.append("")
    return "\n".join(lines)


def llms_full_txt(catalog: dict[str, Any]) -> str:
    """The whole catalog as Markdown."""
    reflex = catalog["reflex"]
    stale = (
        f" Its Reflex names are those of that release, which wraps silverpoint {reflex['wraps']}."
        if reflex.get("stale")
        else ""
    )
    out = [
        f"# silverpoint {catalog['version']}: the agent catalog",
        "",
        f"> {_summary(catalog)}",
        "",
        f"Generated from {SITE_URL}/agent-catalog.json, the catalog `@silverpoint/mcp@{catalog['version']}` "
        f"ships (schema {catalog['schema']}). Reflex: `reflex-silverpoint-react` {reflex['version']}, "
        f"wrapping silverpoint {reflex['wraps']}.{stale} React, Vue and Angular share each prop's name "
        "(Vue templates may write it in kebab-case); Reflex spells it in snake_case. "
        f"The MCP server at {MCP_URL} answers from the same catalog.",
        "",
        "## Stylesheets",
        "",
        *(
            f"- {kind}: " + ", ".join(_code(sheet) for sheet in sheets)
            for kind, sheets in catalog["stylesheets"].items()
        ),
        "",
        "## Common props",
        "",
        "### Every chart",
        "",
        *_props(catalog["common"]["chart"]),
        "### Every UI component",
        "",
        *_props(catalog["common"]["ui"]),
    ]
    families = {family["slug"]: family["title"] for family in catalog["families"]}
    for slug, title in families.items():
        out += [f"## Charts: {title}", ""]
        for chart in (chart for chart in catalog["charts"] if chart["family"] == slug):
            fields = ", ".join(
                f"{field['role']} → {_code(field['prop'])} ({field['type']}{'' if field['required'] else ', optional'})"
                for field in chart["data"]["fields"]
            )
            out += [
                f"### {chart['names']['react']}",
                "",
                f"`{chart['slug']}`: {chart['summary']}",
                "",
                *_names(catalog, chart),
                f"- Data shape: `{chart['data']['shape']}`; fields: {fields or 'none'}",
                f"- Intents: {', '.join(chart['intents'])}",
                *(["- Drillable: `rootId` + `onRootChange`"] if chart.get("drillable") else []),
                *([f"- Demo dataset: `{chart['demo']}`"] if chart.get("demo") else []),
                *(
                    [f"- Demo rows: `{json.dumps(chart['demoSample'][:2])}`"]
                    if chart.get("demoSample")
                    else []
                ),
                "",
                *(_props(chart["props"]) if chart["props"] else ["Only the common props.", ""]),
            ]
    out += ["## UI components", ""]
    for component in catalog["components"]:
        bindings = [
            f"- Binds `{kind}`: "
            + "; ".join(
                f"{FRAMEWORK_LABELS.get(fw, fw)} {_code(spelling)}" for fw, spelling in spellings.items()
            )
            for kind, spellings in component.get("binding", {}).items()
        ]
        out += [
            f"### {component['names']['react']}",
            "",
            f"`{component['slug']}` ({component['family']}, {component['group']}): {component['summary']}",
            "",
            *_names(catalog, component),
            *bindings,
            f"- Events: {_per_framework(component['events'])}",
            f"- Slots: {_per_framework(component['slots'])}",
            f"- States: {', '.join(component['states'])}",
            "",
            *(_props(component["props"]) if component["props"] else ["Only the common props.", ""]),
        ]
    dashboard = catalog["dashboard"]
    out += ["## Dashboard", "", *_props(dashboard["props"])]
    for key, title in (("layout", "Layout"), ("cell", "Cell")):
        if key in dashboard:
            out += [f"### Dashboard {title.lower()}", "", *_props(dashboard[key])]
    timeline = catalog["timeline"]
    out += [
        "## Timeline",
        "",
        f"Optional peer: `{timeline['peer']}`.",
        "",
        *_names(catalog, timeline),
        *_props(timeline["props"]),
        "## Grounds",
        "",
        *_table(
            ["Ground", "Substrates", "Description"],
            [
                [_code(g["name"]), ", ".join(_code(s) for s in g["substrates"]), _cell(g["summary"])]
                for g in catalog["grounds"]
            ],
        ),
        "## Palettes",
        "",
        "### Fields",
        "",
        *_table(
            ["Field", "Default", "Description"],
            [
                [_code(f["name"]), _code(f.get("default", "")), _cell(f["doc"])]
                for f in catalog["palettes"]["fields"]
            ],
        ),
        "### Presets",
        "",
    ]
    fields = [f["name"] for f in catalog["palettes"]["fields"]]
    out += _table(
        ["Preset", *fields],
        [
            [_code(name), *(colours.get(f, "") for f in fields)]
            for name, colours in catalog["palettes"]["presets"].items()
        ],
    )
    out += [
        "## Diagnostics",
        "",
        *_table(
            ["Code", "Severity", "Requirement", "When", "Remedy"],
            [
                [_code(d["code"]), d["severity"], d["req"], _cell(d["what"]), _cell(d["todo"])]
                for d in catalog["diagnostics"]
            ],
        ),
        "## Choosing a chart",
        "",
        *_table(
            ["Data shape", "Intent", "Charts, best first"],
            [
                [
                    _code(rule["shape"]),
                    rule["intent"],
                    "; ".join(f"{_code(c['slug'])}: {_cell(c['reason'])}" for c in rule["charts"]),
                ]
                for rule in catalog["recommend"]
            ],
        ),
    ]
    return "\n".join(out)


def write_agent_files(
    out_dir: Path, docs_nav: tuple[tuple[str, tuple[tuple[str, str], ...]], ...]
) -> list[Path]:
    """Write ``agent-catalog.json``, ``llms.txt`` and ``llms-full.txt`` into ``out_dir``."""
    out_dir.mkdir(parents=True, exist_ok=True)
    catalog = load_catalog()
    shutil.copyfile(CATALOG_FILE, out_dir / "agent-catalog.json")
    (out_dir / "llms.txt").write_text(llms_txt(catalog, docs_nav))
    (out_dir / "llms-full.txt").write_text(llms_full_txt(catalog))
    return [out_dir / name for name in ("agent-catalog.json", "llms.txt", "llms-full.txt")]
