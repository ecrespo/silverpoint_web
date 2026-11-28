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
CATALOG_VERSION = "0.11.2"

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

#: A host's status (Data Model §2.43) as a heading, most available first, so "planned" never reads as
#: available. A status the site does not know yet is listed after these, under its own name.
STATUS_TITLES = {"released": "Released", "preview": "Preview", "planned": "Planned (not available yet)"}

#: The one hand-written part of the llms files: what the catalog does not carry about @silverpoint/embed.
EMBED_TEMPLATE = Path(__file__).resolve().parent / "llms_embed.md"
HAND_WRITTEN_MARK = "<!-- HAND-WRITTEN:"

#: HAND-WRITTEN: what each minor adds, for /llms.txt's "New in" section. The catalog has no release
#: notes, so a new minor on the pin needs an entry here (tests/test_llms_0_11.py checks it).
NEW_IN: dict[str, dict[str, str]] = {
    "0.11": {
        "title": "Embed in any page",
        "page": "/docs/embed",
        "summary": "embedding in HTML and BI hosts. @silverpoint/embed draws any chart from one JSON spec "
        "with no framework: a <silverpoint-chart> element and one standalone file for a plain HTML page, "
        "renderToSVG and renderToHTML on a server, and specFromTable for BI tools, workflows, notebooks and CMSs",
    },
}

#: Host embedding's requirements (PRD §6.16, feature-007): its diagnostics are the ones that cite them.
EMBED_REQS = range(629, 669)


def _label(framework: str) -> str:
    return FRAMEWORK_LABELS.get(framework, framework)


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
            [_label(fw), _code(entry["names"][fw]), _code(entry["imports"][fw])]
            for fw in catalog["frameworks"]
        ],
    )


def _per_framework(values: dict[str, list[str]]) -> str:
    return "; ".join(
        f"{_label(fw)} " + (", ".join(_code(v) for v in names) or "none") for fw, names in values.items()
    )


def _summary(catalog: dict[str, Any]) -> str:
    frameworks = [_label(fw) for fw in catalog["frameworks"]]
    return (
        f"silverpoint {catalog['version']} draws {len(catalog['charts'])} charts and "
        f"{len(catalog['components'])} UI components as metal point on prepared paper, for "
        f"{', '.join(frameworks[:-1])} and {frameworks[-1]} (Python, through reflex-silverpoint-react), "
        "from one framework-free engine, on the "
        + " and ".join(ground["name"] for ground in catalog["grounds"])
        + f" grounds with {len(catalog['palettes']['presets'])} palette presets; accessible and server-renderable."
    )


def _new_in(
    catalog: dict[str, Any], docs_nav: tuple[tuple[str, tuple[tuple[str, str], ...]], ...]
) -> list[str]:
    """``## New in X.Y`` for the catalog's minor, from the hand-written ``NEW_IN`` (KeyError if it lacks it)."""
    minor = ".".join(catalog["version"].split(".")[:2])
    entry = NEW_IN[minor]
    pages = {href for _, entries in docs_nav for href, _ in entries}
    if entry["page"] in pages:
        url = f"{SITE_URL}{entry['page']}"
    else:  # the site has no page for it yet: the GitHub release that introduced it
        url = f"https://github.com/ecrespo/silverpoint/releases/tag/v{minor}.0"
    hosts = catalog.get("hosts", [])
    statuses = ", ".join(
        f"{sum(h['status'] == s for h in hosts)} {s}" for s in dict.fromkeys(h["status"] for h in hosts)
    )
    return [
        f"## New in {minor}",
        "",
        f"- [{entry['title']}]({url}): {entry['summary']}",
        f"- [Hosts and embedding]({SITE_URL}/llms-full.txt): the {len(hosts)} host integrations the catalog lists "
        f"({statuses}): {', '.join(h['name'] for h in hosts)}",
        "",
    ]


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
    lines += _new_in(catalog, docs_nav)
    # The sidebar's own "New in 0.x" groups become one "Features" list: only the catalog's minor is new.
    features = [entry for title, entries in docs_nav if title.startswith("New in ") for entry in entries]
    for title, entries in [
        *((t, e) for t, e in docs_nav if not t.startswith("New in ")),
        ("Features", features),
    ]:
        if not entries:
            continue
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


def _deck(catalog: dict[str, Any]) -> list[str]:
    """The slide deck (silverpoint 0.9): SpDeck's names, props, events, directives and fence."""
    deck = catalog["deck"]
    fence = deck["fence"]["schema"]
    return [
        "## Slide decks",
        "",
        f"`SpDeck` renders Marp/Marpit Markdown in the silverpoint style. Optional peer: `{deck['peer']}`. "
        "Stylesheets, in order: " + ", ".join(_code(sheet) for sheet in deck["stylesheets"]) + ".",
        "",
        *_table(
            ["Framework", "Name", "Import"],
            [
                [
                    _label(fw),
                    _code(deck["names"].get(fw, "")) or "—",
                    _code(deck["imports"].get(fw, "")) or "—",
                ]
                for fw in catalog["frameworks"]
            ],
        ),
        *_props(deck["props"]),
        "### Deck events",
        "",
        *_table(
            ["Event", "Payload", "Bindings", "Description"],
            [
                [
                    _code(event["name"]),
                    _code(event["payload"]),
                    "; ".join(f"{_label(fw)} {_code(binding)}" for fw, binding in event["bindings"].items()),
                    _cell(event["doc"]),
                ]
                for event in deck["events"]
            ],
        ),
        "### Deck directives",
        "",
        *_table(
            ["Directive", "Values", "Default"],
            [
                [
                    _code(d["name"]),
                    ", ".join(_code(v) for v in d["values"])
                    if isinstance(d["values"], list)
                    else d["values"],
                    _code(d["default"]),
                ]
                for d in deck["directives"]
            ],
        ),
        "Theme classes: " + ", ".join(_code(name) for name in deck["classes"]) + ".",
        "",
        "### The silverpoint fence",
        "",
        "A ```` ```silverpoint ```` block holds one chart as JSON, the input of the MCP `render_chart` tool; "
        "an invalid fence draws an error figure in its place and warns `SP026`.",
        "",
        *_table(
            ["Field", "Type", "Description"],
            [
                [
                    _code(name) + (" (required)" if name in fence.get("required", []) else ""),
                    _code(str(spec.get("type", "enum" if "enum" in spec else ""))),
                    _cell(spec.get("description", "")),
                ]
                for name, spec in fence["properties"].items()
            ],
        ),
        "Deck diagnostics: " + ", ".join(_code(code) for code in deck["diagnostics"]) + ".",
        "",
    ]


def _embed_paragraph(catalog: dict[str, Any]) -> str:
    """The hand-written template, without its marker line; only the version and site URL are filled in."""
    lines = [
        line for line in EMBED_TEMPLATE.read_text().splitlines() if not line.startswith(HAND_WRITTEN_MARK)
    ]
    return "\n".join(lines).strip().replace("{version}", catalog["version"]).replace("{site}", SITE_URL)


def _hosts(catalog: dict[str, Any]) -> list[str]:
    """Hosts and embedding (silverpoint 0.11, feature-007): the catalog's hosts, grouped by status."""
    hosts = catalog["hosts"]
    statuses = [s for s in STATUS_TITLES if any(h["status"] == s for h in hosts)]
    statuses += [s for s in dict.fromkeys(h["status"] for h in hosts) if s not in STATUS_TITLES]
    embed_codes = [
        d
        for d in catalog["diagnostics"]
        if (m := re.fullmatch(r"REQ-(\d+)", d["req"])) and int(m[1]) in EMBED_REQS
    ]
    out = [
        "## Hosts and embedding",
        "",
        _embed_paragraph(catalog),
        "",
    ]
    if embed_codes:
        out += [
            "Its diagnostics: "
            + "; ".join(f"{_code(d['code'])} ({d['severity']}): {_cell(d['what'])}" for d in embed_codes)
            + ".",
            "",
        ]
    out += [
        f"The host integrations the catalog lists ({len(hosts)}), each in a repository of its own where it has "
        "one. `via` says what draws the chart: `embed` (@silverpoint/embed), `react` (the React adapter) or "
        "`python` (the Python package).",
        "",
    ]
    for status in statuses:
        out += [
            f"### {STATUS_TITLES.get(status, status.capitalize())}",
            "",
            *_table(
                ["Host", "Kind", "Via", "Package", "Status", "Description"],
                [
                    [
                        f"[{host['name']}]({host['repository']})" if host.get("repository") else host["name"],
                        host["kind"],
                        _code(host["via"]),
                        _code(host.get("package") or ""),
                        host["status"],
                        _cell(host["summary"]),
                    ]
                    for host in hosts
                    if host["status"] == status
                ],
            ),
        ]
    return out


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
            + "; ".join(f"{_label(fw)} {_code(spelling)}" for fw, spelling in spellings.items())
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
        *(_deck(catalog) if "deck" in catalog else []),
        *(_hosts(catalog) if catalog.get("hosts") else []),
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
