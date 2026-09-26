"""Project pages: packages, versions, bug reports, author and license."""

from urllib.parse import quote

import reflex as rx
from reflex_silverpoint_react import CHARTS

from .. import site_data as sd
from ..components.layout import docs_page
from ..components.ui import c, callout, code_block, ext_link, pill, section, table


def packages() -> rx.Component:
    rows = [
        [
            ext_link(rx.el.code(p.name), p.npm),
            p.role,
            p.description,
            pill(p.required, f"spw-pill-{p.required}"),
            rx.el.img(src=p.badge, alt=f"{p.name} version on npm", height="20", loading="lazy"),
            ext_link("source", p.source),
        ]
        for p in sd.PACKAGES
    ]
    return docs_page(
        "/packages",
        "Packages",
        rx.el.span(
            f"silverpoint is published on npm as {len(sd.PACKAGES)} packages under the ",
            ext_link("@silverpoint", sd.NPM_SEARCH),
            " scope, all sharing one version, plus a Reflex custom component on PyPI.",
        ),
        section(
            "npm",
            "On npm",
            table(["Package", "Role", "What it is", "", "Version", ""], rows),
            rx.el.p(
                "Published only by CI, from ",
                c("main"),
                ", through npm Trusted Publishing with provenance. Search them all on ",
                ext_link("npmjs.com", sd.NPM_SEARCH),
                ".",
            ),
        ),
        section(
            "which",
            "Which ones do I install?",
            table(
                ["You use", "Install"],
                [[fw.label, rx.el.code(fw.install)] for fw in sd.FRAMEWORKS],
            ),
        ),
        section(
            "pypi",
            "On PyPI: the Reflex component",
            rx.el.p(
                ext_link(rx.el.code("reflex-silverpoint-react"), sd.REFLEX_PYPI),
                f" wraps @silverpoint/react and exposes all {len(CHARTS)} charts, the Dashboard and the provider as Python "
                "components for ",
                ext_link("Reflex", "https://reflex.dev"),
                ". Source: ",
                ext_link("ecrespo/reflex-silverpoint-react", sd.REFLEX_REPO),
                ".",
            ),
            rx.el.img(
                src="https://img.shields.io/pypi/v/reflex-silverpoint-react?style=flat-square&color=5a5e65&labelColor=ede7da",
                alt="reflex-silverpoint-react on PyPI",
                height="20",
                loading="lazy",
            ),
            code_block(
                "pip install reflex-silverpoint-react\n# or\nuv add reflex-silverpoint-react", "shell"
            ),
        ),
        section(
            "versions",
            "One version for all",
            rx.el.p(
                "The seven npm packages form one Changesets fixed group: they always carry the same version. The current "
                "one is ",
                rx.el.a(f"{sd.LATEST.version}", href="/versions"),
                ". The line stays on 0.x until the API specification is put in force at 1.0.0.",
            ),
        ),
        toc_entries=[
            ("npm", "On npm"),
            ("which", "Which ones do I install?"),
            ("pypi", "On PyPI"),
            ("versions", "One version for all"),
        ],
        eyebrow="Project",
    )


def versions() -> rx.Component:
    entries = []
    for i, r in enumerate(sd.VERSIONS):
        anchor = f"v{r.version.replace('.', '-')}"
        entries.append(
            rx.el.section(
                rx.el.div(
                    rx.el.h2(
                        rx.el.a(f"v{r.version}", href=f"#{anchor}", class_name="spw-anchor"),
                        pill("latest", "spw-pill-latest") if i == 0 else rx.fragment(),
                        id=anchor,
                    ),
                    rx.el.time(r.date, date_time=r.date, class_name="spw-muted"),
                    class_name="spw-release-head",
                ),
                rx.el.p(rx.el.strong(r.summary)),
                rx.el.ul(*[rx.el.li(h) for h in r.highlights]),
                rx.el.p(
                    ext_link("GitHub release" if r.tagged else "npm", r.link),
                    *([" · ", ext_link("source at this tag", r.tree_url)] if r.tagged else []),
                    " · ",
                    ext_link(
                        "@silverpoint/react on npm",
                        f"https://www.npmjs.com/package/@silverpoint/react/v/{r.version}",
                    ),
                    *(
                        [
                            " · Reflex: ",
                            ext_link(f"reflex-silverpoint-react {r.reflex}", f"{sd.REFLEX_PYPI}{r.reflex}/"),
                        ]
                        if r.reflex
                        else []
                    ),
                    class_name="spw-small",
                ),
                class_name="spw-section spw-release",
            )
        )
    return docs_page(
        "/versions",
        "Versions",
        "Every release of silverpoint, newest first. The seven packages share one version, so one entry covers them all.",
        table(
            ["Version", "Date", "Summary", "Reflex component"],
            [
                [
                    rx.el.a(f"v{r.version}", href=f"#v{r.version.replace('.', '-')}"),
                    r.date,
                    r.summary,
                    r.reflex or "—",
                ]
                for r in sd.VERSIONS
            ],
        ),
        callout(
            "Install a specific version with ",
            c("npm install @silverpoint/react@0.1.1 @silverpoint/grounds@0.1.1"),
            ": keep all the @silverpoint packages on the same version.",
            kind="tip",
        ),
        *entries,
        section(
            "upgrading",
            "Upgrading",
            rx.el.p(
                "The line is on 0.x: a minor release (0.1 → 0.2) may change behaviour, and a change to the rendered SVG is "
                "never a patch. Read the entry above before upgrading, and update every @silverpoint package together."
            ),
            rx.el.p(
                "Full changelogs: ",
                *[
                    item
                    for pkg in ("core", "react", "vue", "angular", "grounds", "fonts", "tailwind")
                    for item in (ext_link(pkg, f"{sd.REPO}/blob/main/packages/{pkg}/CHANGELOG.md"), " ")
                ],
            ),
        ),
        toc_entries=[(f"v{r.version.replace('.', '-')}", f"v{r.version}") for r in sd.VERSIONS]
        + [("upgrading", "Upgrading")],
        eyebrow="Project",
    )


BUG_TEMPLATE = """**Package and version:** @silverpoint/react@{version}
**Framework and version:** (React 19.x / Vue 3.5.x / Angular 22.x / Reflex 0.9.x)
**Integration:** (Vite / Next.js / Angular CLI / Reflex)
**Chart:** (e.g. LineChart)
**Ground / substrate / mode:** (silverpoint / cream / ink)
**Browser and OS:**

### What happened


### What you expected


### Minimal reproduction
(A few lines of code, a StackBlitz, or a repository.)

### Diagnostic codes in the console (SP0xx), if any
"""


def new_issue(repo_issues: str, title: str, body: str, labels: str = "bug") -> str:
    return f"{repo_issues}/new?title={quote(title)}&labels={quote(labels)}&body={quote(body)}"


def support() -> rx.Component:
    library_bug = new_issue(sd.REPO_ISSUES, "[bug] ", BUG_TEMPLATE.format(version=sd.LATEST.version))
    reflex_bug = new_issue(
        sd.REFLEX_ISSUES,
        "[bug] ",
        BUG_TEMPLATE.format(version=sd.LATEST.version).replace(
            "**Package and version:** @silverpoint/react", "**Package and version:** reflex-silverpoint-react"
        ),
    )
    feature = new_issue(
        sd.REPO_ISSUES,
        "[feature] ",
        "### What you want to draw or do\n\n\n### Why it matters\n\n\n### Frameworks concerned\n(React / Vue / Angular / all)\n",
        "enhancement",
    )
    docs_bug = new_issue(
        sd.SITE_ISSUES, "[docs] ", "**Page:** \n\n### What is wrong or missing\n\n", "documentation"
    )
    return docs_page(
        "/support",
        "Report a bug",
        "silverpoint's issues live on GitHub. A good report names the package and version, the framework, the chart and a "
        "minimal reproduction; the links below open a form pre-filled with those questions.",
        section(
            "where",
            "Where to report",
            rx.el.div(
                rx.el.a(
                    rx.icon("bug", size=20),
                    rx.el.strong("A bug in a chart or an adapter"),
                    rx.el.span("React, Vue or Angular packages, the grounds, the core."),
                    rx.el.span("ecrespo/silverpoint →", class_name="spw-muted"),
                    href=library_bug,
                    target="_blank",
                    rel="noopener noreferrer",
                    class_name="spw-card spw-link-card",
                ),
                rx.el.a(
                    rx.icon("code", size=20),
                    rx.el.strong("A bug in the Reflex component"),
                    rx.el.span("reflex-silverpoint-react: Python props, events, the dashboard wrapper."),
                    rx.el.span("ecrespo/reflex-silverpoint-react →", class_name="spw-muted"),
                    href=reflex_bug,
                    target="_blank",
                    rel="noopener noreferrer",
                    class_name="spw-card spw-link-card",
                ),
                rx.el.a(
                    rx.icon("lightbulb", size=20),
                    rx.el.strong("A feature request"),
                    rx.el.span("A new chart, a new ground, a new prop."),
                    rx.el.span("ecrespo/silverpoint →", class_name="spw-muted"),
                    href=feature,
                    target="_blank",
                    rel="noopener noreferrer",
                    class_name="spw-card spw-link-card",
                ),
                rx.el.a(
                    rx.icon("book-open", size=20),
                    rx.el.strong("A problem with this site"),
                    rx.el.span("A wrong example, a broken link, a missing page."),
                    rx.el.span("ecrespo/silverpoint_web →", class_name="spw-muted"),
                    href=docs_bug,
                    target="_blank",
                    rel="noopener noreferrer",
                    class_name="spw-card spw-link-card",
                ),
                class_name="spw-grid spw-grid-2",
            ),
        ),
        section(
            "before",
            "Before you open one",
            rx.el.ol(
                rx.el.li(
                    "Check you are on the latest version (",
                    rx.el.a(f"v{sd.LATEST.version}", href="/versions"),
                    ") and that every @silverpoint package has the same version.",
                ),
                rx.el.li(
                    "Search the ", ext_link("open and closed issues", f"{sd.REPO_ISSUES}?q=is%3Aissue"), "."
                ),
                rx.el.li(
                    "Try ",
                    c('mode="precision"'),
                    " and the default ground: it tells a drawing problem from a data problem.",
                ),
                rx.el.li(
                    "Read the console: silverpoint's development warnings carry a code (SP001…SP016) that says what it did."
                ),
                rx.el.li("Reduce it to the smallest code that shows it: one chart, a few rows of data."),
            ),
        ),
        section(
            "template",
            "What to include",
            code_block(BUG_TEMPLATE.format(version=sd.LATEST.version), "markdown"),
        ),
        section(
            "security",
            "Security",
            rx.el.p(
                "For a security problem, do not open a public issue: use GitHub's private vulnerability reporting on ",
                ext_link("the repository", f"{sd.REPO}/security"),
                ".",
            ),
        ),
        toc_entries=[
            ("where", "Where to report"),
            ("before", "Before you open one"),
            ("template", "What to include"),
            ("security", "Security"),
        ],
        eyebrow="Project",
    )


def about() -> rx.Component:
    return docs_page(
        "/about",
        "Author & license",
        None,
        section(
            "author",
            "Author",
            rx.el.div(
                rx.el.img(
                    src="https://github.com/ecrespo.png?size=160",
                    alt="Ernesto Crespo",
                    class_name="spw-avatar",
                    loading="lazy",
                ),
                rx.el.div(
                    rx.el.h3(sd.AUTHOR),
                    rx.el.p(
                        "silverpoint and reflex-silverpoint-react are designed and developed by Ernesto Crespo."
                    ),
                    rx.el.p(
                        ext_link("seraph.to", sd.AUTHOR_URL),
                        " · ",
                        ext_link("github.com/ecrespo", sd.AUTHOR_GITHUB),
                    ),
                ),
                class_name="spw-author-card",
            ),
        ),
        section(
            "license",
            "License",
            rx.el.p(
                "silverpoint is released under the ",
                ext_link("MIT License", sd.REPO_LICENSE),
                ". So are reflex-silverpoint-react and this site. The EB Garamond typeface shipped by @silverpoint/fonts is "
                "under the SIL Open Font License 1.1.",
            ),
            code_block(
                "MIT License\n\nCopyright (c) 2026 Ernesto Crespo\n\nPermission is hereby granted, free of charge, to any person "
                'obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the '
                "Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, "
                "distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\n"
                "furnished to do so, subject to the conditions of the license.",
                "license",
            ),
        ),
        section(
            "repositories",
            "Repositories",
            table(
                ["", "Repository"],
                [
                    ["The library (React, Vue, Angular)", ext_link("ecrespo/silverpoint", sd.REPO)],
                    ["The Reflex component", ext_link("ecrespo/reflex-silverpoint-react", sd.REFLEX_REPO)],
                    ["This site", ext_link("ecrespo/silverpoint_web", sd.SITE_REPO)],
                ],
            ),
        ),
        section(
            "credits",
            "Credits",
            rx.el.p(
                "The wind-rose dataset is 742 hourly METAR reports from Des Moines International Airport, March 2024, from "
                "the Iowa Environmental Mesonet. The site is built with ",
                ext_link("Reflex", "https://reflex.dev"),
                ".",
            ),
        ),
        toc_entries=[
            ("author", "Author"),
            ("license", "License"),
            ("repositories", "Repositories"),
            ("credits", "Credits"),
        ],
        eyebrow="Project",
    )


def register(app: rx.App) -> None:
    app.add_page(packages, route="/packages", title="Packages · silverpoint")
    app.add_page(versions, route="/versions", title="Versions · silverpoint")
    app.add_page(support, route="/support", title="Report a bug · silverpoint")
    app.add_page(about, route="/about", title="Author & license · silverpoint")
