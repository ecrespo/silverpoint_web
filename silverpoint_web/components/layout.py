"""The frames every page shares: header, footer, and the three-column documentation layout."""

from typing import Any

import reflex as rx
from reflex_silverpoint_react import CHARTS, FAMILIES, UI_COMPONENTS, UI_GROUPS

from .. import site_data as sd
from .ui import ext_link, github_icon

NAV: tuple[tuple[str, str], ...] = (
    ("/docs", "Docs"),
    ("/gallery", "Gallery"),
    ("/charts", "Charts"),
    ("/components", "Components"),
    ("/docs/dashboard", "Dashboard"),
    ("/packages", "Packages"),
    ("/versions", "Versions"),
    ("/support", "Report a bug"),
)

#: The left sidebar of the documentation: (section, [(href, label)]).
DOCS_NAV: tuple[tuple[str, tuple[tuple[str, str], ...]], ...] = (
    (
        "Getting started",
        (
            ("/docs", "Overview"),
            ("/docs/installation", "Installation"),
            ("/docs/react", "React"),
            ("/docs/vue", "Vue"),
            ("/docs/angular", "Angular"),
            ("/docs/reflex", "Reflex (Python)"),
        ),
    ),
    (
        "Concepts",
        (
            ("/docs/grounds", "Grounds & substrates"),
            ("/docs/precision", "Ink & precision"),
            ("/docs/props", "Common props"),
            ("/docs/interaction", "Interaction & readouts"),
            ("/docs/export", "Export & imperative handle"),
            ("/docs/dashboard", "Dashboards"),
            ("/docs/ui", "UI components"),
            ("/docs/ssr", "Server rendering"),
            ("/docs/accessibility", "Accessibility"),
            ("/docs/tailwind", "Tailwind preset"),
        ),
    ),
    (
        "Project",
        (
            ("/packages", "Packages on npm & PyPI"),
            ("/versions", "Versions & changelog"),
            ("/support", "Report a bug"),
            ("/about", "Author & license"),
        ),
    ),
)


def mark(size: int = 26) -> rx.Component:
    """The site's mark: a hatched lozenge with a heightened point, in the charts' own manner."""
    hatch = []
    for i in range(1, 6):
        t = i / 6
        x0, y0 = 2.5 + 13.5 * t, 16 - 13.5 * t
        hatch.append(
            rx.el.line(
                x1=f"{x0:.2f}",
                y1=f"{y0:.2f}",
                x2=f"{x0 + 13.5:.2f}",
                y2=f"{y0 + 13.5:.2f}",
                stroke_width="0.8",
            )
        )
    return rx.el.svg(
        rx.el.g(*hatch, stroke="currentColor"),
        rx.el.path(
            d="M16 2.5 C22 8.4 25.6 12 29.5 16 C23.4 22 20 25.6 16 29.5 C10.1 23.6 6.4 20 2.5 16 C8.6 10 12 6.4 16 2.5Z",
            fill="none",
            stroke="currentColor",
            stroke_width="1.1",
        ),
        rx.el.circle(cx="16", cy="16", r="3.2", fill="#fff", stroke="currentColor", stroke_width="1.1"),
        width=str(size),
        height=str(size),
        view_box="0 0 32 32",
        aria_hidden="true",
        class_name="spw-mark",
    )


def version_menu() -> rx.Component:
    return rx.el.details(
        rx.el.summary(f"v{sd.LATEST.version}", rx.el.small(" latest"), class_name="spw-version-summary"),
        rx.el.div(
            *[
                rx.el.a(
                    rx.el.span(f"v{r.version}"),
                    rx.el.small(r.date),
                    href=f"/versions#v{r.version.replace('.', '-')}",
                )
                for r in sd.VERSIONS
            ],
            rx.el.a(
                "All releases on GitHub ↗", href=sd.REPO_RELEASES, target="_blank", rel="noopener noreferrer"
            ),
            class_name="spw-version-menu",
        ),
        class_name="spw-version",
    )


def header() -> rx.Component:
    return rx.el.header(
        rx.el.a(
            mark(), rx.el.span("silverpoint", class_name="spw-brand-name"), href="/", class_name="spw-brand"
        ),
        rx.el.nav(
            *[rx.el.a(label, href=href) for href, label in NAV], class_name="spw-nav", aria_label="Main"
        ),
        rx.el.div(
            version_menu(),
            ext_link(
                github_icon(20), sd.REPO, class_name="spw-icon-link", aria_label="silverpoint on GitHub"
            ),
            ext_link(
                rx.el.span("npm", class_name="spw-npm"),
                sd.NPM_SEARCH,
                class_name="spw-icon-link",
                aria_label="silverpoint on npm",
            ),
            class_name="spw-header-tools",
        ),
        rx.el.details(
            rx.el.summary(rx.icon("menu", size=22), aria_label="Menu"),
            rx.el.nav(*[rx.el.a(label, href=href) for href, label in NAV]),
            class_name="spw-burger",
        ),
        class_name="spw-header",
    )


def footer() -> rx.Component:
    return rx.el.footer(
        rx.el.div(
            rx.el.div(
                rx.el.p(mark(22), rx.el.strong(" silverpoint"), class_name="spw-footer-brand"),
                rx.el.p(
                    "Charts and UI components for React, Vue and Angular whose visual language is historical drawing "
                    "technique."
                ),
                rx.el.p(
                    "Developed by ",
                    ext_link(sd.AUTHOR, sd.AUTHOR_URL),
                    " · ",
                    ext_link("seraph.to", sd.AUTHOR_URL),
                    " · ",
                    ext_link("@ecrespo", sd.AUTHOR_GITHUB),
                ),
                rx.el.p(
                    ext_link(f"{sd.LICENSE} License", sd.REPO_LICENSE),
                    " · Typeface: EB Garamond, SIL Open Font License",
                ),
            ),
            rx.el.div(
                rx.el.h4("Library"),
                ext_link("GitHub repository", sd.REPO),
                ext_link("npm packages", sd.NPM_SEARCH),
                ext_link("Releases", sd.REPO_RELEASES),
                ext_link("Specifications", sd.REPO_SPECS),
            ),
            rx.el.div(
                rx.el.h4("Reflex"),
                ext_link("reflex-silverpoint-react", sd.REFLEX_REPO),
                ext_link("on PyPI", sd.REFLEX_PYPI),
                rx.el.a("Reflex quickstart", href="/docs/reflex"),
            ),
            rx.el.div(
                rx.el.h4("Help"),
                rx.el.a("Report a bug", href="/support"),
                ext_link("Open issues", sd.REPO_ISSUES),
                rx.el.a("Versions", href="/versions"),
                ext_link("Source of this site", sd.SITE_REPO),
            ),
            class_name="spw-footer-grid",
        ),
        rx.el.p(
            "This site is built with Reflex and ",
            ext_link("reflex-silverpoint-react", sd.REFLEX_REPO),
            f": every chart and every control on it is live silverpoint {sd.LATEST.version}.",
            class_name="spw-footer-note",
        ),
        class_name="spw-footer",
    )


def shell_page(*children: Any, wide: bool = False) -> rx.Component:
    """A full-width page (home, gallery)."""
    return rx.el.div(
        rx.el.a("Skip to content", href="#main", class_name="spw-skip"),
        header(),
        rx.el.main(*children, id="main", class_name="spw-main" + (" spw-main-wide" if wide else "")),
        footer(),
        class_name="spw-site",
    )


def sidebar(current: str) -> rx.Component:
    def link(href: str, label: str) -> rx.Component:
        return rx.el.a(
            label, href=href, class_name="spw-side-link" + (" is-current" if href == current else "")
        )

    groups = [
        rx.el.div(
            rx.el.p(title, class_name="spw-side-title"),
            *[link(h, lbl) for h, lbl in links],
            class_name="spw-side-group",
        )
        for title, links in DOCS_NAV
    ]
    charts = rx.el.div(
        rx.el.p(f"Charts · {len(CHARTS)}", class_name="spw-side-title"),
        *[
            rx.el.details(
                rx.el.summary(f"{family} · {sum(1 for c in CHARTS if c.family == family)}"),
                *[link(f"/charts/{c.slug}", c.chart) for c in CHARTS if c.family == family],
                open=any(f"/charts/{c.slug}" == current for c in CHARTS if c.family == family),
                class_name="spw-side-family",
            )
            for family in FAMILIES
        ],
        class_name="spw-side-group",
    )
    components = rx.el.div(
        rx.el.p(f"UI components · {len(UI_COMPONENTS)}", class_name="spw-side-title"),
        *[
            rx.el.details(
                rx.el.summary(f"{title} · {sum(1 for c in UI_COMPONENTS if c.group == group)}"),
                *[link(f"/components/{c.slug}", c.name) for c in UI_COMPONENTS if c.group == group],
                open=any(f"/components/{c.slug}" == current for c in UI_COMPONENTS if c.group == group),
                class_name="spw-side-family",
            )
            for group, title in UI_GROUPS
        ],
        class_name="spw-side-group",
    )
    return rx.el.nav(
        *groups[:2], charts, components, groups[2], class_name="spw-sidebar", aria_label="Documentation"
    )


def toc(entries: list[tuple[str, str]]) -> rx.Component:
    if not entries:
        return rx.el.div(class_name="spw-toc")
    return rx.el.nav(
        rx.el.p("On this page", class_name="spw-toc-title"),
        *[rx.el.a(title, href=f"#{anchor}") for anchor, title in entries],
        class_name="spw-toc",
        aria_label="On this page",
    )


def docs_page(
    current: str,
    title: str,
    lede: Any,
    *children: Any,
    toc_entries: list[tuple[str, str]] | None = None,
    eyebrow: str = "",
) -> rx.Component:
    """The three-column documentation frame: sidebar, article, table of contents."""
    return rx.el.div(
        rx.el.a("Skip to content", href="#main", class_name="spw-skip"),
        header(),
        rx.el.div(
            rx.el.details(
                rx.el.summary("Documentation menu"),
                sidebar(current),
                class_name="spw-sidebar-mobile",
            ),
            rx.el.aside(sidebar(current), class_name="spw-sidebar-col"),
            rx.el.main(
                rx.el.article(
                    rx.el.p(eyebrow, class_name="spw-eyebrow") if eyebrow else rx.fragment(),
                    rx.el.h1(title),
                    rx.el.div(lede, class_name="spw-lede") if lede else rx.fragment(),
                    *children,
                    class_name="spw-article",
                ),
                id="main",
                class_name="spw-docs-main",
            ),
            rx.el.aside(toc(toc_entries or []), class_name="spw-toc-col"),
            class_name="spw-docs",
        ),
        footer(),
        class_name="spw-site",
    )
