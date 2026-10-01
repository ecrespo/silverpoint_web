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
    """One release of the seven packages (they share one version)."""

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
        "React 18.2+ and 19 components: one subpath per chart, the 17 UI components on /ui, and server entry points for React Server Components.",
        "adapter",
        f"{REPO}/tree/main/packages/react",
    ),
    Package(
        "@silverpoint/vue",
        "Vue adapter",
        "Vue 3.5 charts and UI components (v-model on every value component), typed props and emits, server rendering with @vue/server-renderer.",
        "adapter",
        f"{REPO}/tree/main/packages/vue",
    ),
    Package(
        "@silverpoint/angular",
        "Angular adapter",
        "Angular 21 and 22 standalone, signal-input, OnPush charts and UI components (ControlValueAccessors) in Angular Package Format.",
        "adapter",
        f"{REPO}/tree/main/packages/angular",
    ),
    Package(
        "@silverpoint/grounds",
        "Grounds + stylesheet",
        "The declarative style grounds (silverpoint, cyanotype), their inkers, styles.css for the charts and ui.css for the UI components.",
        "required",
        f"{REPO}/tree/main/packages/grounds",
    ),
    Package(
        "@silverpoint/core",
        "Engine",
        "Geometry, scales, interaction and the Inker interface. No DOM, no framework. Installed by every adapter.",
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
        peers="react and react-dom 18.2+ or 19",
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
        peers="vue ^3.5.0",
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
        peers="@angular/core and @angular/common >=21 <23",
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
        peers="reflex >= 0.9.12 (React 19), Python 3.10+",
        integration="A Reflex custom component wrapping @silverpoint/react; Reflex installs the npm side for you.",
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
}
