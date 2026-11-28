"""The host integrations (silverpoint 0.11.2): one page each under /docs/hosts/<slug>.

The text and code are ``host_examples.py``; what the catalog says about a host (kind, package, registry,
status, repository) is read from the agent catalog the site publishes, so it never drifts from it.
"""

import re
from collections.abc import Callable
from typing import Any

import reflex as rx

from .. import agent
from .. import host_examples as hx
from ..components.ui import c, callout, code_block, ext_link, table
from .docs import Section, page

EYEBROW = "Hosts"
CATALOG = agent.load_catalog()
BY_ID = {host["id"]: host for host in CATALOG.get("hosts", [])}

#: `code`, **bold**, *italic* and [label](url), in the order a text uses them.
INLINE = re.compile(r"`([^`]+)`|\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)")


def inline(text: str) -> list[Any]:
    """A text's inline markup as components."""
    parts: list[Any] = []
    at = 0
    for m in INLINE.finditer(text):
        if m.start() > at:
            parts.append(text[at : m.start()])
        code, bold, em, label, href = m.groups()
        if code is not None:
            parts.append(c(code))
        elif bold is not None:
            parts.append(rx.el.strong(*inline(bold)))
        elif em is not None:
            parts.append(rx.el.em(em))
        else:
            parts.append(
                ext_link(rx.fragment(*inline(label)), href)
                if href.startswith("http")
                else rx.el.a(*inline(label), href=href)
            )
        at = m.end()
    if at < len(text):
        parts.append(text[at:])
    return parts


def cell(value: Any) -> Any:
    return rx.el.span(*inline(value)) if isinstance(value, str) else value


def block(b: hx.Block) -> rx.Component:
    kind = b[0]
    if kind == "p":
        return rx.el.p(*inline(b[1]))
    if kind == "code":
        return code_block(b[1], b[2])
    if kind in ("ol", "ul"):
        tag = rx.el.ol if kind == "ol" else rx.el.ul
        return tag(*[rx.el.li(*inline(item)) for item in b[1]])
    if kind == "table":
        return table(b[1], [[cell(v) for v in row] for row in b[2]])
    if kind == "note":
        return callout(*inline(b[1]), kind="note")
    raise ValueError(f"unknown block kind {kind!r}")


def glance_rows(host: hx.Host) -> list[list]:
    rows: list[list] = []
    for catalog_id in host.catalog_ids:
        entry = BY_ID[catalog_id]
        rows.append(
            [
                ext_link(entry["name"], entry["repository"]) if entry.get("repository") else entry["name"],
                c(entry["package"]),
                entry["registry"],
                entry["kind"],
                c(entry["via"]),
                entry["status"],
            ]
        )
    return rows


def host_page(host: hx.Host) -> Callable[[], rx.Component]:
    sections: list[Section] = [
        (
            "glance",
            "At a glance",
            [
                table(["Integration", "Package", "Registry", "Kind", "Through", "Status"], glance_rows(host)),
                rx.el.p("Draws with ", rx.el.strong(host.engine), "."),
                table(["Requirement", ""], [[name, cell(value)] for name, value in host.requirements]),
            ],
        ),
        *[(s.anchor, s.title, [block(b) for b in s.blocks]) for s in host.sections],
        (
            "more",
            "See also",
            [
                rx.el.ul(
                    *[
                        rx.el.li(
                            ext_link(
                                f"{BY_ID[i]['name']}: the repository and its README", BY_ID[i]["repository"]
                            )
                        )
                        for i in host.catalog_ids
                        if BY_ID[i].get("repository")
                    ],
                    rx.el.li(
                        rx.el.a("Embed in any page", href="/docs/embed"),
                        ": the spec, the host catalog and ",
                        c("specFromTable"),
                        ", the conformance kit every integration runs",
                    ),
                    rx.el.li(rx.el.a("Every host integration", href="/docs/embed#hosts")),
                )
            ],
        ),
    ]
    return page(hx.route(host), host.title, rx.el.span(host.lede), sections, eyebrow=EYEBROW)


def register(app: rx.App) -> None:
    for host in hx.HOSTS:
        app.add_page(host_page(host), route=hx.route(host), title=f"{host.title} · silverpoint docs")
