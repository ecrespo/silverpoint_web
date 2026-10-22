"""Use with AI (silverpoint 0.8, feature-005): the MCP server, the plugins, the skills and the agent files.

The tool table is read from the server's own definitions (``agent/agent-tools.json``, REQ-569) and
the worked examples are the hosted server's answers at the documented version
(``agent/agent-examples.json``); ``scripts/agent_files.py fetch`` refreshes both.
"""

import json
from collections.abc import Callable

import reflex as rx

from .. import agent
from .. import site_data as sd
from ..components.ui import c, callout, code_block, ext_link, framework_tabs, md_inline, shell, table
from .docs import Section, page

CATALOG = agent.load_catalog()
TOOLS = agent.load_tools()
EXAMPLES = agent.load_examples()

#: Where each client takes the configuration of ``agent.CLIENT_CONFIGS``, and in what form.
CLIENT_WHERE: dict[str, tuple[str, str]] = {
    "Claude Code": ("In a terminal:", "shell"),
    "Claude": ("Settings → Connectors → Add custom connector, with this URL:", "url"),
    "Cursor": ("In ~/.cursor/mcp.json, or .cursor/mcp.json in a project:", "json"),
    "VS Code": ("In .vscode/mcp.json:", "json"),
}

SKILLS = (
    (
        "silverpoint",
        f"{sd.REPO}/tree/main/skills/silverpoint",
        "React, Vue and Angular: choosing a chart, the charts by family, the components, overlays, grounds and "
        "palettes, the dashboard, the timeline, the diagnostics and each framework's idioms.",
    ),
    (
        "reflex-silverpoint",
        f"{sd.REFLEX_REPO}/tree/main/skills/reflex-silverpoint",
        "Reflex: the builders and their snake_case props, State patterns and events, the provider and palettes, "
        "composed components and overlays, the dashboard and the timeline.",
    ),
)


def curl(tool: str, arguments: dict) -> str:
    body = json.dumps(
        {"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": tool, "arguments": arguments}}
    )
    return (
        f"curl -s {agent.MCP_URL} \\\n"
        "  -H 'content-type: application/json' -H 'accept: application/json, text/event-stream' \\\n"
        f"  -d '{body}'"
    )


def examples() -> list:
    recommend = next(call for call in EXAMPLES["calls"] if call["tool"] == "recommend_chart")
    codes = [call for call in EXAMPLES["calls"] if call["tool"] == "generate_code"]
    names = {chart["slug"]: chart["names"]["react"] for chart in CATALOG["charts"]}
    return [
        rx.el.p(
            "The server is plain JSON-RPC over HTTP, so any client can ask it. Which chart draws hits per hour? ",
            c("recommend_chart"),
            " with a data shape and an intent:",
        ),
        code_block(curl(recommend["tool"], recommend["arguments"]), "shell"),
        table(
            ["Chart", "Score", "Why"],
            [
                [
                    rx.el.a(names.get(r["slug"], r["slug"]), href=f"/charts/{r['slug']}"),
                    str(r["score"]),
                    " ".join(r["reasons"]),
                ]
                for r in recommend["result"]["recommendations"]
            ],
        ),
        rx.el.p(
            "Then ",
            c("generate_code"),
            " writes it for your framework, with your field names as accessors (",
            c(json.dumps(codes[0]["arguments"]["fields"])),
            "). These are the server's answers for silverpoint ",
            EXAMPLES["version"],
            ", stylesheets included:",
        ),
        framework_tabs({call["arguments"]["framework"]: call["result"]["code"] for call in codes}),
        rx.el.ul(
            *[
                rx.el.li(md_inline(note))
                for note in dict.fromkeys(note for call in codes for note in call["result"].get("notes", []))
            ]
        ),
        rx.el.p(
            "An agent connected to the server does this on its own: asked for a chart of hits per hour, it calls ",
            c("recommend_chart"),
            ", ",
            c("generate_code"),
            " and ",
            c("validate_props"),
            ", and can draw the result with ",
            c("render_chart"),
            " before it writes a file.",
        ),
    ]


def ai_page() -> Callable[[], rx.Component]:
    clients = []
    for client, config in agent.CLIENT_CONFIGS.items():
        where, kind = CLIENT_WHERE[client]
        clients += [
            rx.el.h3(client),
            rx.el.p(where),
            shell(config) if kind == "shell" else code_block(config, kind, compact=True),
        ]
    sections: list[Section] = [
        (
            "why",
            "Why agents need it",
            [
                rx.el.p(
                    "silverpoint is newer than every language model's training data, so an assistant left to itself "
                    "invents its props. The silverpoint MCP server tells it the truth: which chart suits the data, the "
                    "props each chart declares, the imports and stylesheets of your framework. It answers from the agent "
                    f"catalog of the version it ships with ({CATALOG['version']}), generated from the published types, "
                    "and it checks and draws what the assistant writes. The skills hold the same knowledge as files, "
                    "for an assistant with no server connected.",
                ),
            ],
        ),
        (
            "server",
            "The MCP server",
            [
                rx.el.p(
                    "Hosted at ",
                    c(agent.MCP_URL),
                    ", over Streamable HTTP: read-only, stateless and without an account. Every result names the "
                    "version it describes.",
                ),
                *clients,
            ],
        ),
        (
            "plugins",
            "The Claude Code plugins",
            [
                rx.el.p(
                    "Each plugin installs its skill and connects the hosted server in one step. For React, Vue and "
                    "Angular:"
                ),
                shell(agent.PLUGINS["silverpoint"]),
                rx.el.p("For Reflex (Python):"),
                shell(agent.PLUGINS["reflex-silverpoint"]),
            ],
        ),
        (
            "skills",
            "The skills",
            [
                rx.el.p(
                    "A skill is a folder of Markdown an agent loads on demand: a short SKILL.md and references "
                    "whose tables are generated from the catalog. Both tell the agent to prefer the MCP tools when "
                    "they are connected."
                ),
                table(
                    ["Skill", "What it covers"],
                    [[ext_link(c(name), href), text] for name, href, text in SKILLS],
                ),
            ],
        ),
        (
            "local",
            "Running it locally",
            [
                rx.el.p(
                    "The same server runs over stdio from npm, with no network access of its own. It answers for the "
                    "version you install:",
                ),
                shell(agent.LOCAL_SERVER),
                rx.el.p("Or, in a server of your own:"),
                code_block(
                    "import { createServer, AGENT_CATALOG } from '@silverpoint/mcp';\n"
                    "import { handler } from '@silverpoint/mcp/http'; // stateless Streamable HTTP on Request/Response",
                    "ts",
                ),
            ],
        ),
        (
            "tools",
            "Its tools",
            [
                table(
                    ["Tool", "What it answers"],
                    [[c(t["name"]), md_inline(t["description"])] for t in TOOLS["tools"]],
                ),
                rx.el.p(
                    "The server also offers the catalog, each chart and component, the diagnostic codes and the "
                    "skills' guides as resources, and two prompts, ",
                    c("choose-chart"),
                    " and ",
                    c("build-dashboard"),
                    ". A name it does not know is a tool error with the closest valid names.",
                ),
            ],
        ),
        ("example", "An example", examples()),
        (
            "files",
            "Files for agents",
            [
                rx.el.p(
                    "This site also publishes the catalog for agents that read files rather than call tools:"
                ),
                table(
                    ["Path", "What it holds"],
                    [
                        [
                            rx.el.a(c("/llms.txt"), href="/llms.txt"),
                            "The llms.txt index: what silverpoint is and where to read more.",
                        ],
                        [
                            rx.el.a(c("/llms-full.txt"), href="/llms-full.txt"),
                            "The whole catalog as Markdown: every chart and component with its props per framework, "
                            "the grounds, the palettes and the diagnostics.",
                        ],
                        [
                            rx.el.a(c("/agent-catalog.json"), href="/agent-catalog.json"),
                            f"The agent catalog itself, as @silverpoint/mcp@{CATALOG['version']} ships it.",
                        ],
                    ],
                ),
                callout(
                    f"The catalog's Reflex names come from reflex-silverpoint-react {CATALOG['reflex']['version']}, "
                    f"which wraps silverpoint {CATALOG['reflex']['wraps']}; the builders and their props did not change "
                    f"in reflex-silverpoint-react {sd.REFLEX_LATEST.version}.",
                    kind="note",
                )
                if CATALOG["reflex"].get("stale")
                else rx.fragment(),
            ],
        ),
    ]
    return page(
        "/docs/ai",
        "Use with AI",
        "Connect your assistant to the silverpoint MCP server, or install the skills, and it writes silverpoint "
        "from the facts of the version you use: React, Vue, Angular or Reflex.",
        sections,
        eyebrow="New in 0.8",
    )


def register(app: rx.App) -> None:
    app.add_page(ai_page(), route="/docs/ai", title="Use with AI · silverpoint docs")
