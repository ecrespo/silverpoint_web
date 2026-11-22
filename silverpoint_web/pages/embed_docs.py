"""Host embedding (silverpoint 0.11, feature-007): ``@silverpoint/embed`` on /docs/embed.

The demo is a plain page (``assets/embed/demo.html``) in a ``sandbox="allow-scripts"`` frame: the
standalone file runs outside React, so it never touches this page's hydration. The host
integrations come from the agent catalog the site publishes (``catalog["hosts"]``).
"""

from collections.abc import Callable

import reflex as rx

from .. import agent
from .. import embed_examples as ex
from .. import site_data as sd
from ..components.ui import c, callout, code_block, ext_link, table
from .docs import Section, page

EYEBROW = "New in 0.11"
CATALOG = agent.load_catalog()


def host_rows() -> list[list]:
    return [
        [
            ext_link(host["name"], host["repository"]) if host.get("repository") else host["name"],
            host["kind"],
            c(host["via"]),
            c(host["package"]),
            host["status"],
            host["summary"],
        ]
        for host in CATALOG.get("hosts", [])
    ]


def embed() -> Callable[[], rx.Component]:
    sections: list[Section] = [
        (
            "live",
            "Try it",
            [
                rx.el.p(
                    "A plain HTML page with no framework, in a sandboxed frame: three ",
                    c("<silverpoint-chart>"),
                    " elements, each holding a JSON spec, and the standalone file ",
                    c(ex.STANDALONE_FILE),
                    f" ({ex.EMBED_VERSION}) served by this site. Hover or focus a chart and move with the arrow "
                    "keys: the readout below the charts listens to the bubbling ",
                    c("sp-activechange"),
                    " event. ",
                    ext_link("Open the page on its own", ex.DEMO_URL),
                    ".",
                ),
                rx.el.iframe(
                    src=ex.DEMO_URL,
                    title="Three silverpoint charts drawn by @silverpoint/embed in a plain page",
                    sandbox="allow-scripts",
                    loading="lazy",
                    class_name="spw-embed-frame",
                ),
            ],
        ),
        (
            "when",
            "Embed or adapter?",
            [
                rx.el.p(
                    "Use an adapter when your app is React, Vue, Angular or Reflex. Use ",
                    c("@silverpoint/embed"),
                    " for a plain page, a server, a workflow node, a BI tool, a notebook or a CMS. It is the same "
                    "engine as the adapters, so the same picture, keyboard reading and precision mode; the MCP "
                    "server's ",
                    c("render_chart"),
                    " renders through it.",
                ),
                code_block(ex.INSTALL, "shell"),
            ],
        ),
        (
            "spec",
            "A chart is a spec",
            [
                rx.el.p(
                    "One JSON object draws any of the 60 charts. Only ",
                    c("chart"),
                    " is required. ",
                    c("validateSpec"),
                    " says why a spec cannot render: bad JSON, a field the spec does not have, an unknown chart "
                    "(with the closest slugs), an undeclared prop, a size out of range, or a spec over 2 MB (",
                    c("SP030"),
                    ").",
                ),
                code_block(ex.SPEC, "json"),
                table(["Field", "Type", ""], [[c(name), kind, doc] for name, kind, doc in ex.SPEC_FIELDS]),
            ],
        ),
        (
            "page",
            "In a page: one file, one element",
            [
                rx.el.p(
                    "The script defines ",
                    c("<silverpoint-chart>"),
                    " and mounts every ",
                    c("[data-sp-embed]"),
                    " box once the page is parsed. It opens no connection, evaluates no string and writes no "
                    "storage, so it runs under ",
                    c("script-src 'self'; style-src 'self'"),
                    " and in a ",
                    c('sandbox="allow-scripts"'),
                    " frame, as on this page. Serve the file yourself and pin it with ",
                    c("integrity.json"),
                    " (SHA-384 per file); no CDN is involved.",
                ),
                code_block(ex.PAGE, "html"),
                table(["File", "What", "gzip budget"], [[c(f), what, size] for f, what, size in ex.FILES]),
                callout(
                    "An invalid spec draws an error figure naming the problem and reports ",
                    c("SP031"),
                    "; nothing throws in the page.",
                    kind="note",
                ),
            ],
        ),
        (
            "client",
            "The client API",
            [
                rx.el.p(
                    "For pages that drive the chart: ",
                    c("mount(target, spec, options)"),
                    " returns a handle with ",
                    c("update"),
                    ", ",
                    c("destroy"),
                    ", ",
                    c("getGeometry"),
                    " and ",
                    c("toSVGString"),
                    ". ",
                    c("onActiveChange"),
                    ", ",
                    c("onSelect"),
                    " and ",
                    c("onDiagnostic"),
                    ", and the bubbling ",
                    c("sp-activechange"),
                    ", ",
                    c("sp-select"),
                    " and ",
                    c("sp-diagnostic"),
                    " events, report what the reader does. ",
                    c("hostAppearance"),
                    " picks the ground, substrate and mode that suit a host's own background.",
                ),
                code_block(ex.CLIENT, "ts"),
            ],
        ),
        (
            "server",
            "On a server or in a flow",
            [
                rx.el.p(
                    c("renderToSVG"),
                    " and ",
                    c("renderToHTML"),
                    " run in Node with no DOM, byte for byte the same for the same spec. ",
                    c("renderToHTML"),
                    " writes the accessible chart root, complete with no script, and with ",
                    c("interactive"),
                    " the spec as JSON for a client on the page to adopt.",
                ),
                code_block(ex.SERVER, "ts"),
            ],
        ),
        (
            "hosts",
            "From a table: the host catalog",
            [
                rx.el.p(
                    c("host-catalog.json"),
                    " describes every chart a table can feed (its roles, ",
                    c("dimension"),
                    ", ",
                    c("measure"),
                    " and ",
                    c("temporal"),
                    ", its options and the appearance values), so a BI tool's property pane is generated, never "
                    "typed by hand. ",
                    c("specFromTable"),
                    " binds; it does not aggregate, sort or filter. Four charts are not fed from a table (orbit, "
                    "sparkline rows, volvelle and the grid treemap): their entries say why.",
                ),
                code_block(ex.HOSTS, "ts"),
                rx.el.p(
                    f"The host integrations the agent catalog {CATALOG['version']} lists, each in a repository of "
                    "its own:"
                ),
                table(["Host", "Kind", "Through", "Package", "Status", ""], host_rows()),
            ],
        ),
        (
            "conformance",
            "Proving a host draws correctly",
            [
                rx.el.p(
                    "Run the conformance kit against the file you ship, in the runtime you ship it in: one case "
                    "per chart plus the appearance axes on four charts, SHA-256 per render.",
                ),
                code_block(ex.CONFORMANCE, "ts"),
            ],
        ),
        (
            "agents",
            "Embedding and agents",
            [
                rx.el.p(
                    "The MCP server writes the page for you: ",
                    c("generate_code"),
                    " with ",
                    c('framework: "html"'),
                    " returns the ",
                    c("<script>"),
                    " with its integrity and a ",
                    c("<silverpoint-chart>"),
                    "; ",
                    c("search_catalog"),
                    " finds the host integrations, and the silverpoint skill carries references/hosts.md. ",
                    rx.el.a("Use with AI →", href="/docs/ai"),
                ),
                code_block(ex.GENERATE_HTML, "json"),
            ],
        ),
    ]
    return page(
        "/docs/embed",
        "Embed in any page",
        rx.el.span(
            "New in silverpoint 0.11. ",
            ext_link("@silverpoint/embed", sd.npm_url("@silverpoint/embed")),
            " draws any of the 60 charts from one JSON spec, outside React, Vue and Angular: a DOM-free render "
            "for servers, a framework-free client and a single standalone file for plain pages, the host catalog "
            "for BI tools, flows, notebooks and CMSs, and a conformance kit.",
        ),
        sections,
        eyebrow=EYEBROW,
    )


def register(app: rx.App) -> None:
    app.add_page(embed(), route="/docs/embed", title="Embed in any page · silverpoint docs")
