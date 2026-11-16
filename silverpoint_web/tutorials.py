"""The silverpoint tutorial series published on seraph.to, as the data of ``/tutorials``.

The 29 articles live on the author's blog; this site keeps only their order, a summary written for
this page and the link. They are grouped in four levels, read in order: each article builds on the
ones before it, and from article 08 on the series builds one example, the operations panel.
"""

from dataclasses import dataclass

BLOG = "https://www.seraph.to/blog"
BLOG_ES = "https://www.seraph.to/es/blog"

#: The frameworks an article gives code for, in the site's order.
ALL = ("React", "Vue", "Angular", "Reflex")

#: The day the series was published; an article added later carries its own date.
SERIES_DATE = "2026-11-11"


MONTHS = (
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
)


@dataclass(frozen=True)
class Tutorial:
    number: int
    title: str
    summary: str
    frameworks: tuple[str, ...] = ALL
    #: Publication date on the blog, ISO 8601.
    date: str = SERIES_DATE

    @property
    def slug(self) -> str:
        return f"silverpoint_serie_{self.number}"

    @property
    def url(self) -> str:
        return f"{BLOG}/{self.slug}"

    @property
    def url_es(self) -> str:
        return f"{BLOG_ES}/{self.slug}"

    @property
    def date_label(self) -> str:
        year, month, day = (int(part) for part in self.date.split("-"))
        return f"{MONTHS[month - 1]} {day}, {year}"

    @property
    def covers(self) -> tuple[str, ...]:
        """The frameworks the article is for: all four when it is about the library itself."""
        return self.frameworks or ALL

    @property
    def search_text(self) -> str:
        """What the page's search box looks in: the number, the title and the summary."""
        return f"{self.number:02d} {self.title} {self.summary}".lower()

    @property
    def anchor(self) -> str:
        return f"tutorial-{self.number:02d}"


@dataclass(frozen=True)
class Level:
    key: str
    title: str
    intro: str
    tutorials: tuple[Tutorial, ...]


LEVELS: tuple[Level, ...] = (
    Level(
        "beginner",
        "Beginner",
        "What silverpoint is, which packages to install, and a first chart on the screen. Read 01 and 02, "
        "then the one article for your framework.",
        (
            Tutorial(
                1,
                "Charts drawn with a historical technique",
                "Where the library comes from: the Renaissance silverpoint technique, how its constraints become "
                "the rules every chart is drawn by, and why the data itself is never drawn freehand.",
                (),
            ),
            Tutorial(
                2,
                "The map of packages",
                "A tour of the packages one by one: the engine, the grounds, the fonts, the four adapters and the "
                "optional packages, with what to install for each kind of project and why.",
            ),
            Tutorial(
                3,
                "Your first chart in React with Vite",
                "From an empty Vite project to a working chart in React: installing, adding the stylesheets, "
                "passing your own data, writing the card text and loading the data from a JSON file.",
                ("React",),
            ),
            Tutorial(
                4,
                "Your first chart in Vue 3",
                "The same first chart in Vue 3, starting from an empty Vite project: installation, stylesheets, "
                "your own data and card text, and a JSON file loaded with ref and computed.",
                ("Vue",),
            ),
            Tutorial(
                5,
                "Your first chart in Angular",
                "The first chart in Angular 22 from a new Angular CLI project: installation, global styles, your "
                "own data and card text, and the data loaded with HttpClient and signals.",
                ("Angular",),
            ),
            Tutorial(
                6,
                "Your first chart in Reflex, with Python only",
                "The first chart without writing any JavaScript: a new Reflex project installed with uv, your own "
                "data and card text, and the data loaded into the state with on_load.",
                ("Reflex",),
            ),
        ),
    ),
    Level(
        "intermediate",
        "Intermediate",
        "The ideas every chart shares: props, choosing a chart, grounds, precision, interaction, palettes and "
        "the dashboard. The operations panel, the series' running example, starts here.",
        (
            Tutorial(
                7,
                "The properties the 60 charts share",
                "The props common to every chart, grouped by what they are for: data, style, size, card text, "
                "accessibility and number format, with the syntax of each in the four frameworks.",
            ),
            Tutorial(
                8,
                "How to choose the chart: the families of the catalog",
                "A two-step method for picking among the 60 charts: the shape of the data, then what the reader "
                "has to see. It walks the nine families and makes three choices for the operations panel.",
                ("React", "Reflex"),
            ),
            Tutorial(
                9,
                "Grounds, substrates and the provider",
                "Giving a whole application one style: the two grounds and their substrates, the provider in each "
                "framework, sections styled differently, and which of chart, dashboard and provider wins.",
            ),
            Tutorial(
                10,
                "Precision mode and accessibility",
                "What precision mode removes and what it keeps, when the system imposes it, and how a chart is "
                "read without seeing it: name, description, data table, keyboard and announcements.",
            ),
            Tutorial(
                11,
                "Interaction: active element, selection and a custom tooltip",
                "The charts' events put to work: the active element feeds a readout beside the chart, the "
                "selection feeds a list of hours, and the built-in tooltip is replaced with your own.",
            ),
            Tutorial(
                12,
                "Palettes and theme switching",
                "What a palette is, the six that are bundled, how to check the contrast of one you write "
                "yourself, and how to switch a panel's theme while the application is running.",
            ),
            Tutorial(
                13,
                "Dashboards: a responsive grid defined as data",
                "The operations panel becomes a Dashboard: a responsive grid whose layout is a data object, "
                "cells that size their charts, and charts linked to each other by the hour.",
            ),
        ),
    ),
    Level(
        "advanced",
        "Advanced",
        "The specialised chart families, the UI components, and what a production application needs: export, "
        "server rendering, live data, timelines and slide decks.",
        (
            Tutorial(
                14,
                "Distributions, comparisons and uncertainty",
                "The panel's response times through the statistical charts: histogram, box plot, violin and "
                "cumulative distribution, a before-and-after dumbbell, and error bars and bands for intervals.",
                ("React", "Reflex"),
            ),
            Tutorial(
                15,
                "Hierarchies, flows and networks, with level navigation",
                "Charts for structured data: a treemap and a sunburst that drill down together, a node tree, a "
                "Sankey diagram and a network graph, all navigable from the keyboard.",
            ),
            Tutorial(
                16,
                "UI components (I): forms and display",
                "An alert rule form and a service status card built from the UI components, with the value "
                "bound the way each framework does it: controlled props, v-model, reactive forms and state.",
            ),
            Tutorial(
                17,
                "UI components (II): tables, composed components and overlays",
                "An incidents table that sorts and pages, a modal that acknowledges an incident and a "
                "notification that confirms it, built from the composed components and overlays.",
            ),
            Tutorial(
                18,
                "Exporting a chart to SVG",
                "Taking a chart out of the page as a file: the handle and toSVGString(), a download button, what "
                "the SVG contains, and why it needs the ground's stylesheet to look right elsewhere.",
            ),
            Tutorial(
                19,
                "Server rendering and determinism",
                "Why a hand-drawn chart comes out identical on the server and in the browser: the seed taken "
                "from the id, server charts in Next.js, Vue and Angular rendering, what Reflex exports, and "
                "the mistakes that break determinism.",
            ),
            Tutorial(
                20,
                "Live data and performance",
                "A chart fed with live data, what is redrawn on each update and what it costs, with "
                "measurements: redraw times, path weight, data volume and bundle size.",
            ),
            Tutorial(
                21,
                "Timelines with TimelineJS",
                "SpTimeline, silverpoint's skin over TimelineJS: the optional peer, the stylesheet order, "
                "TimelineJS's JSON, the events, the SP025 fallback, and a real certifications timeline.",
            ),
            Tutorial(
                22,
                "Markdown presentations with live charts",
                "SpDeck and @silverpoint/marp: a presentation written in Marp's Markdown with live charts in "
                "code blocks, directives, keyboard, fragments, page events, the limits SP026 to SP029 and "
                "Marp's command line.",
            ),
        ),
    ),
    Level(
        "expert",
        "Expert",
        "Everything put together: the operations panel as a complete, deployed application in each framework, "
        "the four compared, silverpoint with AI assistants, and how the library itself was built.",
        (
            Tutorial(
                23,
                "Final project in React with Next.js",
                "The complete operations panel on the App Router: a live overview with linked charts and SVG "
                "download, an incidents page and a settings page that re-themes the application, with what "
                "runs on the server and on the client, and the deployment on Vercel.",
                ("React",),
            ),
            Tutorial(
                24,
                "Final project in Vue",
                "The panel as a Vue 3 application with Vite and vue-router: three routes, live data, a linked "
                "dashboard, SVG export, an incidents table and application-wide theme settings, through the "
                "build, the deployment and the checks.",
                ("Vue",),
            ),
            Tutorial(
                25,
                "Final project in Angular",
                "The panel in Angular 22 with the router, standalone components and signals: live data, linked "
                "charts, SVG export, an incidents table with a modal and a toast, an alert form, and a theme "
                "driven from the provider.",
                ("Angular",),
            ),
            Tutorial(
                26,
                "Final project in Reflex: a complete application in Python with real data",
                "The Operations application written entirely in Python: three pages, one theme for the whole "
                "session, live hits, and real response times that the backend measures every 15 seconds.",
                ("Reflex",),
            ),
            Tutorial(
                27,
                "The same dashboard in four frameworks",
                "The four final projects side by side: how much code each takes, the dependencies it adds, its "
                "weight, its build and drawing times, and what turned out easier or harder in each framework.",
            ),
            Tutorial(
                28,
                "silverpoint with AI: the MCP server and the skills for assistants",
                "The MCP server, hosted or local, and its 13 tools with real calls and answers, plus the two "
                "Claude Code skills. With them an assistant chooses, generates, checks and draws a new chart "
                "for the panel.",
            ),
            Tutorial(
                29,
                "How silverpoint was built",
                "The series closes with the making of the library, told from its repository: the EARS "
                "specification, changes as deltas, the architecture decisions, the CI gates, nine releases in "
                "seven weeks, the part AI assistants played and what was hard.",
                (),
            ),
        ),
    ),
)

TUTORIALS: tuple[Tutorial, ...] = tuple(t for level in LEVELS for t in level.tutorials)


def by_date(tutorials: tuple[Tutorial, ...], newest_first: bool = False) -> list[Tutorial]:
    """Tutorials by publication date, the series number breaking a tie (the series came out in one day)."""
    return sorted(tutorials, key=lambda t: (t.date, t.number), reverse=newest_first)
