"""Drift guard: fail when the pinned agent catalog is not the latest @silverpoint/mcp on npm.

    uv run python scripts/check_mcp_latest.py

The site's /llms.txt, /llms-full.txt and /agent-catalog.json come from the catalog pinned by
``agent.CATALOG_VERSION``; they went stale once because nothing noticed a new release. This reads
``dist-tags.latest`` from the registry itself, not ``npm view``: silverpoint's ``.npmrc`` sets
``minimum-release-age``, which hides fresh versions. A network failure only warns (exit 0).
"""

import json
import sys
import urllib.error
import urllib.request
from collections.abc import Callable
from pathlib import Path
from typing import IO, Any

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from silverpoint_web import agent  # noqa: E402

REGISTRY_URL = "https://registry.npmjs.org/@silverpoint%2Fmcp"


def _open(url: str, timeout: float) -> IO[bytes]:
    request = urllib.request.Request(url, headers={"accept": "application/vnd.npm.install-v1+json"})
    return urllib.request.urlopen(request, timeout=timeout)


def check(pinned: str, opener: Callable[[str, float], Any] = _open) -> int:
    """0 when ``pinned`` is the registry's latest (or the registry cannot be reached), else 1."""
    try:
        with opener(REGISTRY_URL, 20) as response:
            latest = json.loads(response.read())["dist-tags"]["latest"]
    except (urllib.error.URLError, TimeoutError, OSError, ValueError, KeyError) as error:
        print(f"warning: could not read {REGISTRY_URL}: {error}; drift not checked", file=sys.stderr)
        return 0
    if latest != pinned:
        print(
            f"error: the site pins @silverpoint/mcp {pinned} but the registry's latest is {latest}. "
            "Bump agent.CATALOG_VERSION (and site_data.LATEST), then run "
            "`uv run python scripts/agent_files.py fetch` and commit agent/.",
            file=sys.stderr,
        )
        return 1
    print(f"@silverpoint/mcp {pinned} is the latest on npm")
    return 0


if __name__ == "__main__":
    sys.exit(check(agent.CATALOG_VERSION))
