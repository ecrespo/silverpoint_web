"""Facts about silverpoint that the site prints: links, packages, frameworks and the version list.

Everything a release changes lives in this file. To publish a new version of the site after a
silverpoint release, add an entry at the top of ``VERSIONS`` and bump ``LATEST``.
"""

from dataclasses import dataclass, field

# ── People and places ────────────────────────────────────────────────────────────────────

AUTHOR = "Ernesto Crespo"
AUTHOR_URL = "https://www.seraph.to/"
AUTHOR_GITHUB = "https://github.com/ecrespo"
LICENSE = "MIT"
FONT_LICENSE = "SIL Open Font License 1.1 (EB Garamond)"

REPO = "https://github.com/ecrespo/silverpoint"
REPO_ISSUES = f"{REPO}/issues"
REPO_RELEASES = f"{REPO}/releases"
REPO_LICENSE = f"{REPO}/blob/main/LICENSE"
REPO_SPECS = f"{REPO}/tree/main/specs"

REFLEX_REPO = "https://github.com/ecrespo/reflex-silverpoint-react"
REFLEX_ISSUES = f"{REFLEX_REPO}/issues"
REFLEX_PYPI = "https://pypi.org/project/reflex-silverpoint-react/"

SITE_REPO = "https://github.com/ecrespo/silverpoint_web"
SITE_ISSUES = f"{SITE_REPO}/issues"

NPM_SEARCH = "https://www.npmjs.com/search?q=silverpoint"
NPM_ORG = "https://www.npmjs.com/org/silverpoint"


def npm_url(package: str) -> str:
    """The npm page of a package."""
    return f"https://www.npmjs.com/package/{package}"


# ── Versions ─────────────────────────────────────────────────────────────────────────────


@dataclass(frozen=True)
class Release:
    """One release of the npm packages (they share one version)."""

    version: str
    date: str
    summary: str
    highlights: tuple[str, ...] = field(default_factory=tuple)
    reflex: str = ""  # the reflex-silverpoint-react version that wraps it, if any
    tagged: bool = True  # whether the repository has a vX.Y.Z tag and GitHub release for it

    @property
    def tag_url(self) -> str:
        return f"{REPO}/releases/tag/v{self.version}"

    @property
    def tree_url(self) -> str:
        return f"{REPO}/tree/v{self.version}"

    @property
    def npm_url(self) -> str:
        return f"https://www.npmjs.com/package/@silverpoint/react/v/{self.version}"

    @property
    def link(self) -> str:
        """The GitHub release when there is one, else the npm page of that version."""
        return self.tag_url if self.tagged else self.npm_url


VERSIONS: tuple[Release, ...] = (
    Release(
        version="0.8.0",
        date="2026-10-21",
        summary="Agent access: @silverpoint/mcp, an MCP server that tells agents what silverpoint holds, the agent "
        "catalog, the silverpoint skill and a Claude Code plugin.",
        highlights=(
            "A new package, @silverpoint/mcp: a Model Context Protocol server over stdio (npx @silverpoint/mcp) and "
            "stateless Streamable HTTP, hosted read-only at silverpointweb.vercel.app/mcp. See Use with AI (/docs/ai).",
            "Eleven tools: get_version, list_charts, get_chart, list_components, get_component, recommend_chart, "
            "generate_code (React, Vue, Angular and Reflex), search_catalog, validate_props, render_chart (the "
            "canonical SVG) and check_palette; the catalog, each chart and component, the diagnostics and the "
            "skill's guides as resources; the choose-chart and build-dashboard prompts.",
            "The agent catalog, agent-catalog.json, generated from the published types: the 60 charts and 38 UI "
            "components with their names, imports and props in the four frameworks, the grounds, palettes, timeline "
            "and the 25 diagnostics. This site publishes it at /agent-catalog.json, with /llms.txt and /llms-full.txt.",
            "The silverpoint skill (skills/silverpoint/) and a Claude Code plugin that installs it with the hosted "
            "server: /plugin marketplace add ecrespo/silverpoint, then /plugin install silverpoint@silverpoint.",
            "No change to the API of @silverpoint/react, vue, angular, core, grounds or fonts, nor to any render.",
        ),
        reflex="0.8.0",
    ),
    Release(
        version="0.7.0",
        date="2026-10-20",
        summary="Palettes, 21 composed and overlay components (38 UI components in all) and the Knight Lab "
        "timeline, in React, Vue and Angular.",
        highlights=(
            "Palettes on a new subpath, @silverpoint/core/palettes: six presets verified for WCAG contrast "
            "(silverpoint, sanguine, sepia, ironGall, verdigris, indigo), checkPalette, contrastRatio, "
            "PALETTE_PROPERTIES and nestProvider. palette on every chart, UI component, dashboard and provider; "
            "a nested provider or a prop overrides it field by field.",
            "Composed components (14): SpSurface and SpGlyph, the building blocks, and SpTable, SpPagination, "
            "SpBreadcrumb, SpAvatar (+ SpAvatarGroup), SpStatistic, SpDescriptions, SpTimelineList, SpCollapse "
            "(+ SpCollapseItem), SpEmpty, SpResult, SpTextarea and SpInputNumber.",
            "Overlays (7) on the platform's <dialog> and Popover API: SpModal, SpDrawer, SpPopover, SpTooltip, "
            "SpSelect, SpDropdownMenu and SpToast (in an SpToaster), each opened by a trigger you write; "
            "open + onOpenChange, v-model:open or [(open)].",
            "SpTimeline on @silverpoint/<react|vue|angular>/timeline: Knight Lab TimelineJS in the ground's hand, "
            "with @knight-lab/timelinejs ^3.9.13 an optional peer and a fallback when it cannot load.",
            "Two stylesheets beside styles.css: ui.css now draws all 38 UI components, and timeline.css skins "
            "TimelineJS (eras get a strip of their own below the axis labels).",
            "UI_COMPONENTS gains 21 rows with a family (ui, composed, overlay); UI_DEMOS gains 35 states; "
            "@silverpoint/core/timeline and TIMELINE_DEMO. Diagnostics SP023, SP024 and SP025.",
            "A link's href (SpButton, SpBreadcrumb) keeps only relative URLs and http, https, mailto and tel; "
            "a headingLevel outside 2..6 draws h3. Both warn SP017.",
            "No change to the rendered output of the 60 charts.",
        ),
        reflex="0.7.1",
    ),
    Release(
        version="0.6.0",
        date="2026-10-10",
        summary="The second catalog: 27 new charts (60 in all) for distributions, comparisons, hierarchies, "
        "fields and networks, with drill-down.",
        highlights=(
            "Distributions & comparisons (14): HistogramChart, EcdfChart, BoxPlotChart, ViolinChart, RidgelineChart, "
            "BeeswarmChart, LollipopChart, DumbbellChart, SlopeChart, BumpChart, ErrorBarChart, IntervalChart, "
            "DivergingBarChart and ConnectedScatterChart.",
            "Hierarchies & dimensions (8): WaffleChart, MarimekkoChart, SquarifiedTreemap, SunburstChart, TreeChart, "
            "ParallelCoordinatesChart, PolarLineChart and PolarScatterChart.",
            "Fields & networks (5): DensityBinChart, ContourChart, DelaunayChart, VectorFieldChart and NetworkChart "
            "(with the NetworkNode type).",
            "Statistics derived in the core: Freedman–Diaconis bins, type-7 quartiles, Tukey whiskers, Epanechnikov "
            "densities, a deterministic beeswarm packing, ranks for the bump chart. Each chart has a derived data "
            "table and one heightened mark.",
            "Owned layouts and engines: stratify, squarify (Bruls et al.), partition, the Buchheim tidy tree, marching "
            "squares, Bowyer–Watson with exact predicates and a seeded Fruchterman–Reingold force layout.",
            "Controlled drill-down on SquarifiedTreemap and SunburstChart: rootId in, onRootChange / @root-change / "
            "(rootChange) out. The chart keeps no root of its own, so a server render is the client's.",
            "Hierarchy charts walk as a WAI-ARIA tree by keyboard and announce each node's path, value and share.",
            "RidgelineChart requires groupKey, DivergingBarChart levels and ParallelCoordinatesChart dimensions.",
            "Recipes on a new subpath, @silverpoint/core/catalog; diagnostics SP020 (invalid hierarchy), SP021 "
            "(invalid statistic parameter) and SP022 (group too small).",
            "No change to the rendered output of the first 33 charts; each one-chart build stays within 0.1 KB.",
            "There is no 0.4 or 0.5 on npm: the packages went from 0.3.0 straight to 0.6.0.",
        ),
        reflex="0.6.0",
    ),
    Release(
        version="0.3.0",
        date="2026-09-30",
        summary="17 UI components drawn as the charts are: buttons, inputs, tabs, cards, alerts and more.",
        highlights=(
            "17 Sp-prefixed UI components in React, Vue and Angular (ui/<name> subpaths): Button; Input, Checkbox, "
            "RadioGroup, Switch, Slider, Rate, Segmented; Tabs with TabPanel, Steps; Card, Tag, Badge, Divider; "
            "Progress, Alert, Skeleton.",
            "Hand-drawn frames by each ground's own inker: tone as hatching on silverpoint, as the weight of an exact "
            "white line on cyanotype. precision mode switches the inking off, as on the charts.",
            "A native control underneath every one (<button>, <input>, a <fieldset> of radios): forms submit natively, "
            "and the composites follow the WAI-ARIA keyboard patterns, with RTL arrows.",
            "Controlled or uncontrolled values: value/onChange or defaultValue in React, v-model in Vue, "
            "ControlValueAccessors in Angular.",
            "A new opt-in stylesheet, @silverpoint/grounds/ui.css, beside styles.css.",
            "React Server Component entry points for Card, Divider, Steps, Tag, Badge, Progress, Alert and Skeleton.",
            "UI_COMPONENTS (17 components, 45 states) on @silverpoint/core/ui and UI_DEMOS on @silverpoint/core/ui-demos.",
            "No change to the rendered output of any chart.",
        ),
        reflex="0.3.0",
    ),
    Release(
        version="0.2.0",
        date="2026-09-26",
        summary="The Dashboard composition, linked charts, the cyanotype ground and a Tailwind preset.",
        highlights=(
            "Dashboard and DashboardCell: a titled, responsive grid laid out by the core from plain data "
            "(columns, spans and row height per breakpoint), identical in React, Vue and Angular and server-renderable.",
            "Linked dashboards: link on a datum field (e.g. hour) and every chart marks the same item; "
            "onLinkChange / @link-change / (linkChange) report it.",
            "A second ground, cyanotype: a white line on Prussian blue where tone is the weight of the line. "
            "Nothing is hatched.",
            "Reference dashboards (kpi-strip, ops, mixed-spans) on @silverpoint/core/dashboard-demos.",
            "Demo datasets now honour every view prop; VolvelleChart's indexRing / indexValue turn the demo.",
            "New package @silverpoint/tailwind: a preset naming the --sp- variables as Tailwind tokens.",
            "Angular example app server-rendered with @angular/ssr.",
        ),
        reflex="0.2.0",
    ),
    Release(
        version="0.1.1",
        date="2026-09-25",
        summary="Package READMEs and the CI release pipeline, with npm provenance.",
        highlights=(
            "Every package ships a README with installation, quickstart and examples.",
            "Packages are published from CI on every merge into main, through npm Trusted Publishing with provenance.",
            "No change to the rendered output.",
        ),
        reflex="0.1.0",
    ),
    Release(
        version="0.1.0",
        date="2026-09-25",
        summary="First public release: 33 charts for React, Vue and Angular on the silverpoint ground.",
        highlights=(
            "33 charts in six families, one shared framework-free engine (@silverpoint/core).",
            "Adapters for React 18.2+/19 (with RSC server entry points), Vue 3.5 and Angular 21-22.",
            "The silverpoint ground with four substrates (cream, green, blue, ochre); ink and precision modes.",
            "Accessible by construction: names, descriptions, hidden data tables, keyboard navigation.",
        ),
        tagged=False,
    ),
)

LATEST = VERSIONS[0]


@dataclass(frozen=True)
class ReflexRelease:
    """One release of reflex-silverpoint-react, which has its own version line."""

    version: str
    date: str
    wraps: str  # the @silverpoint/react version it wraps
    summary: str
    highlights: tuple[str, ...] = field(default_factory=tuple)

    @property
    def pypi_url(self) -> str:
        return f"{REFLEX_PYPI}{self.version}/"


#: The Reflex component's releases, newest first. Only those that add something of their own are
#: described here; the others follow the npm release they wrap (``Release.reflex``).
REFLEX_VERSIONS: tuple[ReflexRelease, ...] = (
    ReflexRelease(
        version="0.8.0",
        date="2026-10-21",
        wraps="0.8.0",
        summary="Wraps @silverpoint/react 0.8.0, and brings agent access to Reflex: the reflex-silverpoint skill, its "
        "catalog and a Claude Code plugin.",
        highlights=(
            "SILVERPOINT_VERSION is 0.8.0 and every npm dependency is pinned to it; the Python builders are unchanged.",
            "The reflex-silverpoint skill (skills/reflex-silverpoint/): builders, snake_case props, State patterns and "
            "events, the provider and palettes, composed components and overlays, the dashboard and the timeline. "
            "Every Python example in it is imported and rendered in CI.",
            "A Claude Code plugin with the skill and the hosted silverpoint MCP server: /plugin marketplace add "
            "ecrespo/reflex-silverpoint-react, then /plugin install reflex-silverpoint@reflex-silverpoint.",
            "reflex-catalog.json (scripts/export_catalog.py): each builder's snake_case props and their JS names, "
            "joined into silverpoint's agent catalog; attached to every GitHub release.",
            "CHARTS documents on_root_change for squarified_treemap and sunburst_chart.",
        ),
    ),
    ReflexRelease(
        version="0.7.1",
        date="2026-10-20",
        wraps="0.7.0",
        summary="Wraps @silverpoint/react 0.7.0: the palettes, composed components, overlays and timeline are now the "
        "npm components, with the same Python builders.",
        highlights=(
            "Palettes are the npm palette prop, merged element → dashboard → provider field by field; check_palette() "
            "measures the core's PALETTE_PAIRS, the focus ring included.",
            "The composed components (sp_table, sp_pagination, sp_breadcrumb, sp_avatar, sp_statistic, …) and "
            "sp_surface and sp_glyph are the npm components, and read silverpoint_provider.",
            "Overlays (sp_modal, sp_drawer, sp_popover, sp_tooltip, sp_select, sp_dropdown_menu, sp_toast in an "
            "sp_toaster) are the npm components on <dialog> and the Popover API, in place of Radix: they render in place.",
            "sp_trigger is a native button drawn by the core that keeps the ARIA an overlay clones onto it.",
            "sp_timeline is the npm SpTimeline; @knight-lab/timelinejs 3.9.13 comes with it, so the [timeline] extra is "
            "empty.",
            'New arguments in the npm names (side="start"/"end", position="bottom-end", extent=, offset=); '
            "the old ones still work, deprecated.",
        ),
    ),
    ReflexRelease(
        version="0.7.0",
        date="2026-10-18",
        wraps="0.6.0",
        summary="Reflex-only additions: palettes, 20 composed components and the Knight Lab timeline, on Reflex 0.10.",
        highlights=(
            "Reflex 0.10.0, and therefore Python 3.11 or later (Python 3.10 is no longer supported).",
            "Palettes: palette= on every chart, UI component, dashboard and composed component; silverpoint_palette(...) "
            "for a whole section; six presets named after drawing media (silverpoint, sanguine, sepia, iron_gall, "
            "verdigris, indigo) and check_palette() against the contrast thresholds of the data model.",
            "Composed components, level A (native markup): sp_table (+ sort_rows), sp_pagination, sp_breadcrumb, "
            "sp_avatar (+ sp_avatar_group), sp_statistic, sp_descriptions, sp_timeline_list, sp_collapse "
            "(+ sp_collapse_item), sp_empty, sp_result, sp_textarea and sp_input_number.",
            "Composed components, level B (overlays on Radix primitives): sp_modal, sp_drawer, sp_popover, sp_tooltip, "
            "sp_select, sp_dropdown_menu and sp_toast (+ sp_toaster), with sp_trigger as their drawn button.",
            "sp_timeline: Knight Lab TimelineJS drawn in silverpoint, a skin on the ground's colours and type plus the "
            "ground's own hand-inked frames. Optional extra: reflex-silverpoint-react[timeline].",
            "sp_surface and sp_glyph: the building blocks, for components of your own.",
            "Still wraps @silverpoint/react 0.6.0: no change to the 60 charts or the 17 UI components.",
            "silverpoint 0.7.0 then shipped the same three additions in React, Vue and Angular; the Reflex "
            "versions keep their own API (snake_case, overlays on Radix).",
        ),
    ),
)

REFLEX_LATEST = REFLEX_VERSIONS[0]

# ── Packages ─────────────────────────────────────────────────────────────────────────────


@dataclass(frozen=True)
class Package:
    name: str
    role: str
    description: str
    required: str  # "required", "optional" or "adapter"
    source: str

    @property
    def npm(self) -> str:
        return npm_url(self.name)

    @property
    def badge(self) -> str:
        return f"https://img.shields.io/npm/v/{self.name}?style=flat-square&color=5a5e65&labelColor=ede7da&label="


PACKAGES: tuple[Package, ...] = (
    Package(
        "@silverpoint/react",
        "React adapter",
        "React 18.2+ and 19 components: one subpath per chart (60), the 38 UI components on /ui, SpTimeline on /timeline, and server entry points for React Server Components.",
        "adapter",
        f"{REPO}/tree/main/packages/react",
    ),
    Package(
        "@silverpoint/vue",
        "Vue adapter",
        "Vue 3.5 charts, the 38 UI components (v-model on every value, v-model:open on every overlay) and SpTimeline; typed props and emits, server rendering with @vue/server-renderer.",
        "adapter",
        f"{REPO}/tree/main/packages/vue",
    ),
    Package(
        "@silverpoint/angular",
        "Angular adapter",
        "Angular 21 and 22 standalone, signal-input, OnPush charts, the 38 UI components (ControlValueAccessors, [(open)] on overlays) and SpTimeline, in Angular Package Format.",
        "adapter",
        f"{REPO}/tree/main/packages/angular",
    ),
    Package(
        "@silverpoint/grounds",
        "Grounds + stylesheet",
        "The declarative style grounds (silverpoint, cyanotype), their inkers, styles.css for the charts, ui.css for the UI components and timeline.css for SpTimeline.",
        "required",
        f"{REPO}/tree/main/packages/grounds",
    ),
    Package(
        "@silverpoint/core",
        "Engine",
        "Geometry, scales, interaction and the Inker interface; the second catalog's recipes on /catalog, the UI views on /ui, the palettes on /palettes and the timeline on /timeline. No DOM, no framework. Installed by every adapter.",
        "required",
        f"{REPO}/tree/main/packages/core",
    ),
    Package(
        "@silverpoint/fonts",
        "Typeface",
        "Optional. Self-hosted EB Garamond (400, 500, 400 italic, latin subset) and its @font-face rules.",
        "optional",
        f"{REPO}/tree/main/packages/fonts",
    ),
    Package(
        "@silverpoint/mcp",
        "MCP server",
        "Optional, for agents. A Model Context Protocol server that answers from the agent catalog: the charts and "
        "components, a chart recommender, code for React, Vue, Angular and Reflex, prop validation and canonical SVG "
        "renders. stdio (npx @silverpoint/mcp) or a stateless HTTP handler.",
        "optional",
        f"{REPO}/tree/main/packages/mcp",
    ),
    Package(
        "@silverpoint/tailwind",
        "Tailwind preset",
        "Optional. Names silverpoint's public --sp- variables as Tailwind 4 / 3.4 theme tokens. No dependencies.",
        "optional",
        f"{REPO}/tree/main/packages/tailwind",
    ),
)

# ── Frameworks ───────────────────────────────────────────────────────────────────────────


@dataclass(frozen=True)
class Framework:
    key: str
    label: str
    package: str
    install: str
    peers: str
    integration: str
    create: str
    run: str
    prefix: str  # how charts are named
    ui_prefix: str  # how UI components are named


FRAMEWORKS: tuple[Framework, ...] = (
    Framework(
        key="react",
        label="React",
        package="@silverpoint/react",
        install="npm install @silverpoint/react @silverpoint/grounds @silverpoint/fonts",
        peers="react and react-dom 18.2+ or 19; @knight-lab/timelinejs ^3.9.13 (optional, for SpTimeline)",
        integration="Vite and Next.js (App Router, React Server Components) are validated.",
        create="npm create vite@latest my-charts -- --template react-ts",
        run="npm run dev",
        prefix="<LineChart />",
        ui_prefix="<SpButton />",
    ),
    Framework(
        key="vue",
        label="Vue",
        package="@silverpoint/vue",
        install="npm install @silverpoint/vue @silverpoint/grounds @silverpoint/fonts",
        peers="vue ^3.5.0; @knight-lab/timelinejs ^3.9.13 (optional, for SpTimeline)",
        integration="Vite is validated; SSR is verified with @vue/server-renderer. Nuxt works but is not a validated integration.",
        create="npm create vite@latest my-charts -- --template vue-ts",
        run="npm run dev",
        prefix="<SpLineChart />",
        ui_prefix="<SpButton />",
    ),
    Framework(
        key="angular",
        label="Angular",
        package="@silverpoint/angular",
        install="npm install @silverpoint/angular @silverpoint/grounds @silverpoint/fonts",
        peers="@angular/core, @angular/common and @angular/forms >=21 <23; @knight-lab/timelinejs ^3.9.13 (optional)",
        integration="The Angular CLI (@angular/build, on Vite) is validated, including @angular/ssr.",
        create="npx @angular/cli@22 new my-charts --defaults --skip-git",
        run="npm start",
        prefix="<sp-line-chart />",
        ui_prefix="<button spButton>",
    ),
    Framework(
        key="reflex",
        label="Reflex (Python)",
        package="reflex-silverpoint-react",
        install="pip install reflex-silverpoint-react",
        peers="reflex >= 0.10.0 (React 19), Python 3.11+",
        integration="A Reflex custom component wrapping @silverpoint/react 0.8; Reflex installs the npm side for "
        "you. Every chart, UI component, composed component, overlay and the timeline is the npm component, "
        "with a snake_case Python API.",
        create="reflex init",
        run="reflex run",
        prefix="line_chart()",
        ui_prefix="sp_button()",
    ),
)

# ── Vocabulary ───────────────────────────────────────────────────────────────────────────

GROUNDS = ("silverpoint", "cyanotype")
SUBSTRATES = ("cream", "green", "blue", "ochre")
MODES = ("ink", "precision")
HATCH_FILLS = ("tile", "per-shape")

UI_SIZES = ("sm", "md", "lg")

FAMILY_BLURBS: dict[str, str] = {
    "Lines": "Series over an ordered axis: splines, steps, sparklines and KPI cards.",
    "Bars": "Pill bars and their relatives: stacked, composed, waterfall, funnel, bullet, pyramid, candlestick.",
    "Areas": "Toned areas under a line, bands between two series, and stacked streams.",
    "Points & grids": "Points on two scales, bubbles, heatmaps, treemaps and a calendar grid.",
    "Flows": "Quantities moving between categories: Sankey bands and a chord ring.",
    "Radial": "Everything drawn around a centre, from donuts and gauges to wind roses, volvelles and orbits.",
    "Distributions & comparisons": "New in 0.6. Statistics derived in the core (bins, quartiles, densities, ranks) "
    "and the charts that compare two values, two years or a whole field of them.",
    "Hierarchies & dimensions": "New in 0.6. Trees as rectangles, rings and tidy branches, drilled down under your "
    "control; parts of a whole, many dimensions at once, and lines and points around a circle.",
    "Fields & networks": "New in 0.6. Point clouds counted in bins or drawn as contours, triangulations, vector "
    "fields and a seeded force-laid network.",
}
