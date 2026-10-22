"""The site's agent files (silverpoint feature-005, T-243).

    uv run python scripts/agent_files.py fetch          # refresh agent/ from @silverpoint/mcp on npm
    uv run python scripts/agent_files.py write public   # agent-catalog.json, llms.txt, llms-full.txt

``fetch`` reads the package at ``agent.CATALOG_VERSION``: its ``agent-catalog.json`` verbatim, and
the tool table of its README (written by silverpoint from the running server) as ``agent-tools.json``;
then it asks the hosted server the AI page's worked examples (``agent-examples.json``), refusing
answers for another version. Commit the three. ``write`` runs at export (``build_local.sh``), offline, from the committed copies.
"""

import json
import sys
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from silverpoint_web import agent  # noqa: E402


def fetch() -> None:
    def get(path: str) -> bytes:
        with urllib.request.urlopen(agent.package_url(path), timeout=30) as response:
            return response.read()

    catalog = get("agent-catalog.json")
    version = json.loads(catalog)["version"]
    if version != agent.CATALOG_VERSION:
        sys.exit(f"the package's catalog describes {version}, not {agent.CATALOG_VERSION}")
    agent.AGENT_DIR.mkdir(exist_ok=True)
    agent.CATALOG_FILE.write_bytes(catalog)
    tools = agent.parse_tools_table(get("README.md").decode())
    agent.TOOLS_FILE.write_text(
        json.dumps(
            {"version": version, "source": agent.package_url("README.md"), "tools": tools},
            indent=2,
            ensure_ascii=False,
        )
        + "\n"
    )
    calls = [
        {"tool": tool, "arguments": arguments, "result": call(tool, arguments)}
        for tool, arguments in agent.EXAMPLE_CALLS
    ]
    for answered in calls:
        if answered["result"].get("version") != version:
            sys.exit(
                f"{agent.MCP_URL} answered {answered['tool']} for {answered['result'].get('version')}, not {version}"
            )
    agent.EXAMPLES_FILE.write_text(
        json.dumps(
            {"version": version, "endpoint": agent.MCP_URL, "calls": calls}, indent=2, ensure_ascii=False
        )
        + "\n"
    )
    print(f"agent/: catalog {version}, {len(tools)} tools, {len(calls)} examples")


def call(tool: str, arguments: dict) -> dict:
    """One stateless tools/call on the hosted server; its structured result."""
    body = json.dumps(
        {"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": tool, "arguments": arguments}}
    )
    request = urllib.request.Request(
        agent.MCP_URL,
        data=body.encode(),
        headers={"content-type": "application/json", "accept": "application/json, text/event-stream"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        answer = json.loads(response.read())
    if "error" in answer or answer["result"].get("isError"):
        sys.exit(f"{tool}: {answer}")
    return answer["result"]["structuredContent"]


def write(out_dir: str) -> None:
    from silverpoint_web.components.layout import DOCS_NAV

    for path in agent.write_agent_files(Path(out_dir), DOCS_NAV):
        print(f"{path} ({path.stat().st_size} bytes)")


if __name__ == "__main__":
    match sys.argv[1:]:
        case ["fetch"]:
            fetch()
        case ["write", out_dir]:
            write(out_dir)
        case _:
            sys.exit(__doc__)
