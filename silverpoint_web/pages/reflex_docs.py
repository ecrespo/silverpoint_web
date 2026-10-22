"""The docs of what silverpoint 0.7 adds: palettes, composed and overlay components, the timeline.

silverpoint ships them in React, Vue and Angular; reflex-silverpoint-react 0.8 wraps the same npm
components (@silverpoint/react 0.8) with Python builders. The pages print the code in
all four behind the page-wide framework switch, and draw the live examples with the Reflex versions,
on client-side state (``ClientStateVar``): the site has no backend.
"""

from collections.abc import Callable

import reflex as rx
from reflex.experimental.client_state import ClientStateVar
from reflex_silverpoint_react import (
    PALETTE_PROPERTIES,
    PALETTES,
    bar_chart,
    check_palette,
    contrast_ratio,
    kpi_card,
    line_chart,
    silverpoint_palette,
    sp_badge,
    sp_button,
    sp_card,
    sp_progress,
    sp_switch,
    sp_tag,
    sp_timeline,
)
from reflex_silverpoint_react.palette import DEFAULT_SUBSTRATE, PALETTE_PAIRS

from .. import composed_code as cc
from .. import datasets as ds
from .. import reflex_only as ro
from .. import site_data as sd
from .. import ui_examples as ux
from ..components.ui import c, callout, choice, code_block, framework_tabs, paper_card, table
from .docs import QUICK_DATA, SALES, Section, live, page

EYEBROW = "New in 0.7"

# ── Palettes ─────────────────────────────────────────────────────────────────────────────

SECTION_PALETTE = ClientStateVar.create("palettes_section", "sanguine")

#: The palette builder's colours, one client-side var per field (start: the sanguine preset).
BUILDER_FIELDS = ("substrate", "ink", "ink_secondary", "text", "text_muted")
BUILDER = {
    key: ClientStateVar.create(f"palette_builder_{key}", PALETTES["sanguine"].to_dict()[key])
    for key in BUILDER_FIELDS
}

PALETTE_CODE = """from reflex_silverpoint_react import PALETTES, Palette, bar_chart, check_palette, silverpoint_palette, sp_button

bar_chart(title="Orders", palette="sanguine")  # a preset
sp_button("Save", variant="primary", palette={"ink": "#2C6355"})  # a dict of fields
bar_chart(title="Orders", palette=State.palette)  # a state var holding a dict

MINE = Palette(substrate="#F2E8DC", ink="#8A3A24", ink_secondary="#6A4A3A", text="#4A2216")
assert not check_palette(MINE)  # [] when every field meets its contrast threshold

silverpoint_palette(dashboard(...), sp_card(...), palette="indigo")  # a whole section"""

PALETTE_CODES = {
    "react": """import { sanguine } from '@silverpoint/core/palettes'; // npm install @silverpoint/core
import { SilverpointProvider } from '@silverpoint/react';
import { BarChart } from '@silverpoint/react/bar-chart';
import { SpButton } from '@silverpoint/react/ui/button';

<SilverpointProvider palette={sanguine}> {/* a whole section */}
  <BarChart title="Orders" />
  <SpButton variant="primary" palette={{ ink: '#2C6355' }}>Save</SpButton> {/* one field changed */}
</SilverpointProvider>""",
    "vue": """<script setup lang="ts">
import { sanguine } from '@silverpoint/core/palettes';
import { SilverpointProvider } from '@silverpoint/vue';
import { SpBarChart } from '@silverpoint/vue/bar-chart';
import { SpButton } from '@silverpoint/vue/ui/button';
</script>

<template>
  <!-- or provideSilverpoint({ palette: sanguine }) for the whole app -->
  <SilverpointProvider :palette="sanguine">
    <SpBarChart title="Orders" />
    <SpButton variant="primary" :palette="{ ink: '#2C6355' }">Save</SpButton>
  </SilverpointProvider>
</template>""",
    "angular": """// app.config.ts: the whole app (or a component's providers: one section of it)
import { type ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { sanguine } from '@silverpoint/core/palettes';
import { provideSilverpoint } from '@silverpoint/angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZonelessChangeDetection(), provideSilverpoint({ palette: sanguine })],
};

// a template: one field changed
// <button spButton variant="primary" [palette]="{ ink: '#2C6355' }">Save</button>""",
    "reflex": PALETTE_CODE,
}

CHECK_PALETTE_JS = """import { checkPalette, contrastRatio, sanguine } from '@silverpoint/core/palettes';

const mine = { ...sanguine, ink: '#5A1F14' }; // fields are camelCase: inkSecondary, textMuted
checkPalette(mine); // [] when every pair meets its threshold, else { pair, ratio, threshold, … }
contrastRatio('#5A1F14', '#F2E8DC'); // the WCAG ratio, 1 to 21"""

STATE_PALETTE_CODE = """class Theme(rx.State):
    preset: str = "sanguine"

    @rx.var
    def palette(self) -> dict[str, str]:
        return PALETTES[self.preset].to_dict()

    @rx.event
    def set_preset(self, name: str):
        self.preset = name


sp_segmented(items=[ui_item(name, name) for name in PALETTES], value=Theme.preset, on_change=Theme.set_preset)
silverpoint_palette(dashboard(...), palette=Theme.palette)  # re-colours without re-rendering"""


def swatches(name: str) -> rx.Component:
    values = PALETTES[name].to_dict()
    return rx.el.div(
        *[
            rx.el.span(
                class_name="spw-swatch",
                style={"background": values[key]},
                title=f"{key} {values[key]}",
                aria_hidden="true",
            )
            for key in ("substrate", "ink", "ink_secondary", "text", "text_muted", "rule")
        ],
        class_name="spw-swatches",
    )


def preset_card(name: str) -> rx.Component:
    palette = PALETTES[name]
    ratio = contrast_ratio(palette.ink, palette.substrate)
    passes = not check_palette(palette)
    return paper_card(
        rx.el.div(
            rx.el.strong(c(name)),
            sp_tag("passes" if passes else "fails", tone=2, size="sm"),
            class_name="spw-row",
        ),
        rx.el.p(ro.PALETTE_BLURBS[name], class_name="spw-small"),
        swatches(name),
        line_chart(data=QUICK_DATA, x_key="hour", value_key="hits", title="Hits", height=90, palette=name),
        ux.panel(
            rx.el.div(
                sp_button("Save", variant="primary", size="sm", palette=name, id=f"palette-{name}-save"),
                sp_switch(label="Precision", size="sm", palette=name, id=f"palette-{name}-switch"),
                class_name="spw-row",
            ),
            style={"background": palette.substrate},
        ),
        rx.el.p("ink on substrate ", c(f"{ratio:.2f}:1"), class_name="spw-small"),
        class_name="spw-palette-card",
    )


def builder() -> rx.Component:
    # An object var: the wrapper reads each field from it at runtime (a dict of vars is refused).
    value = rx.Var.create({key: var.value for key, var in BUILDER.items()})
    pickers = [
        rx.el.label(
            rx.el.input(
                type="color",
                value=BUILDER[key].value,
                on_change=BUILDER[key].set_value,
                class_name="spw-color",
            ),
            rx.el.span(c(key), " ", rx.el.span(BUILDER[key].value, class_name="spw-muted")),
            class_name="spw-color-field",
        )
        for key in BUILDER_FIELDS
    ]
    code = rx.el.pre(
        rx.el.code(
            "Palette(\n",
            *[part for key in BUILDER_FIELDS for part in (f'    {key}="', BUILDER[key].value, '",\n')],
            ")",
        ),
        class_name="spw-code-live",
    )
    return rx.el.div(
        rx.el.div(*pickers, class_name="spw-color-fields"),
        live(
            rx.el.div(
                bar_chart(
                    data=SALES,
                    x_key="month",
                    value_key="units",
                    title="Units sold",
                    height=120,
                    palette=value,
                ),
                ux.panel(
                    sp_card(
                        sp_progress(label="Inked", value=64, size="sm", palette=value, id="builder-progress"),
                        rx.el.div(
                            sp_button(
                                "Primary", variant="primary", size="sm", palette=value, id="builder-primary"
                            ),
                            sp_badge(count=7, palette=value, id="builder-badge"),
                            class_name="spw-row",
                        ),
                        title="A card",
                        size="sm",
                        palette=value,
                        id="builder-card",
                    ),
                    style={"background": BUILDER["substrate"].value},
                ),
                class_name="spw-grid spw-grid-2",
            ),
        ),
        code,
    )


#: The threshold each field is measured at against the substrate (the pairs with no other background).
SUBSTRATE_THRESHOLDS = {fg: threshold for _, threshold, fg, bg in PALETTE_PAIRS if bg is None}


def palettes() -> Callable[[], rx.Component]:
    field_rows = [
        [
            c(key),
            c(prop),
            f"{SUBSTRATE_THRESHOLDS[key]}:1"
            if key in SUBSTRATE_THRESHOLDS
            else "— (what the others are measured on)"
            if key == "substrate"
            else "exempt (always outlined)",
        ]
        for key, prop in PALETTE_PROPERTIES.items()
    ]
    sections: list[Section] = [
        (
            "what",
            "Colour without re-rendering",
            [
                rx.el.p(
                    "silverpoint never writes a colour into its drawing: every stroke and fill is painted by CSS "
                    "through the ground's ",
                    c("--sp-"),
                    " custom properties. A palette sets them, so it re-colours a chart, a UI component, a dashboard, a "
                    "composed component or the timeline without re-rendering it. ",
                    c("palette="),
                    " takes a preset name, a ",
                    c("Palette"),
                    ", a dict of fields or a state var holding one.",
                ),
                framework_tabs(PALETTE_CODES),
            ],
        ),
        (
            "presets",
            f"The {len(PALETTES)} presets",
            [
                rx.el.p(
                    "Named after historical drawing media, each verified by ",
                    c("check_palette"),
                    " against the contrast thresholds of the data model.",
                ),
                rx.el.div(
                    *[preset_card(name) for name in ro.PALETTE_NAMES], class_name="spw-grid spw-grid-3"
                ),
            ],
        ),
        (
            "section",
            "A whole section: silverpoint_palette",
            [
                rx.el.p(
                    c("silverpoint_palette(*children, palette=...)"),
                    " colours every chart, UI component, dashboard and surface inside it. The wrapper is ",
                    c("display: contents"),
                    ", so it takes no layout space, and an element's own ",
                    c("palette"),
                    " always wins over its section's. Pick a preset:",
                ),
                choice("Palette", SECTION_PALETTE, ro.PALETTE_NAMES),
                live(
                    silverpoint_palette(
                        rx.el.div(
                            kpi_card(
                                data=ds.KPI_CARD, title="Revenue", metric="thousands", delta=6.4, height=110
                            ),
                            bar_chart(
                                data=SALES, x_key="month", value_key="units", title="Units sold", height=110
                            ),
                            ux.panel(
                                sp_card(
                                    sp_progress(label="Upload", value=72, size="sm", id="section-progress"),
                                    sp_button("Publish", variant="primary", size="sm", id="section-publish"),
                                    title="Release",
                                    size="sm",
                                    id="section-card",
                                ),
                                style={"background": ro.palette_var(SECTION_PALETTE.value)["substrate"]},
                            ),
                            class_name="spw-grid spw-grid-3",
                        ),
                        palette=ro.palette_var(SECTION_PALETTE.value),
                    )
                ),
                code_block(STATE_PALETTE_CODE, "python"),
            ],
        ),
        (
            "builder",
            "Build your own",
            [
                rx.el.p(
                    "Unset fields keep the ground's own colour. Pick the five that matter most; the preview reads them "
                    "as a dict, as a state var would. Then measure the result with ",
                    c("check_palette"),
                    ": it returns one message per field below its threshold, and ",
                    c("[]"),
                    " when the palette passes (only hex colours can be measured; a palette without ",
                    c("substrate"),
                    f" is measured against cream, {DEFAULT_SUBSTRATE}). In JavaScript, ",
                    c("checkPalette"),
                    " and ",
                    c("contrastRatio"),
                    " on ",
                    c("@silverpoint/core/palettes"),
                    " do the same:",
                ),
                builder(),
                code_block(CHECK_PALETTE_JS, "ts"),
            ],
        ),
        (
            "fields",
            "Fields",
            [
                table(["Field", "Custom property", "Minimum contrast on the substrate"], field_rows),
                rx.el.p(
                    c("Palette.to_dict()"),
                    ", ",
                    c("to_css()"),
                    " and ",
                    c("merged(**changes)"),
                    " convert and copy palettes; ",
                    c("Palette.from_dict()"),
                    " rejects unknown fields. ",
                    c("palette_css(palette)"),
                    " returns the declarations as a style dict, and ",
                    c("contrast_ratio(fg, bg)"),
                    " is the WCAG ratio of two hex colours.",
                ),
            ],
        ),
        (
            "rules",
            "Rules",
            [
                rx.el.ul(
                    rx.el.li(
                        rx.el.strong("Monochrome by design."),
                        " Tone is built from hatch density, so a chart has two inks — ",
                        c("ink"),
                        " for the main series and ",
                        c("ink_secondary"),
                        " for the second — never a colour per series.",
                    ),
                    rx.el.li(
                        c("precision"),
                        " mode and the system's high-contrast modes still apply on top of any palette.",
                    ),
                    rx.el.li(
                        "React, Vue and Angular: ",
                        c("SilverpointProvider"),
                        " / ",
                        c("provideSilverpoint"),
                        " take a ",
                        c("palette"),
                        "; a nested provider, a dashboard cell or a ",
                        c("palette"),
                        " prop overrides it field by field. A value is accepted only if it is a CSS colour.",
                    ),
                    rx.el.li(
                        "Reflex: ",
                        c("silverpoint_provider"),
                        " takes a ",
                        c("palette"),
                        ", and ",
                        c("silverpoint_palette"),
                        " is a provider with one. Overlays render in place and read it; only ",
                        c("sp_trigger"),
                        " does not, so give it ",
                        c("palette"),
                        " directly.",
                    ),
                ),
                callout(
                    "The names differ by language: ",
                    c("ironGall"),
                    ", ",
                    c("inkSecondary"),
                    " and ",
                    c("textMuted"),
                    " in JavaScript are ",
                    c("iron_gall"),
                    ", ",
                    c("ink_secondary"),
                    " and ",
                    c("text_muted"),
                    " in Python. Both set the same --sp- custom properties, which you can also set in CSS (the "
                    "Tailwind preset names them as tokens).",
                    kind="note",
                ),
            ],
        ),
    ]
    return page(
        "/docs/palettes",
        "Palettes",
        "New in silverpoint 0.7 (React, Vue, Angular) and reflex-silverpoint-react 0.7. Re-colour every chart, UI component, dashboard and composed component with six "
        "presets named after drawing media, or a palette of your own, checked against silverpoint's contrast "
        "thresholds.",
        sections,
        eyebrow=EYEBROW,
    )


# ── Composed components ──────────────────────────────────────────────────────────────────

COMPOSED_GROUND = ClientStateVar.create("composed_ground", "silverpoint")
COMPOSED_SUBSTRATE = ClientStateVar.create("composed_substrate", "cream")
COMPOSED_MODE = ClientStateVar.create("composed_mode", "ink")
COMPOSED_PALETTE = ClientStateVar.create("composed_palette", "none")


def composed_surface() -> dict:
    return {
        "ground": COMPOSED_GROUND.value,
        "substrate": COMPOSED_SUBSTRATE.value,
        "mode": COMPOSED_MODE.value,
        "palette": ro.palette_var(COMPOSED_PALETTE.value),
    }


def composed_entry(item: ro.Composed) -> Section:
    return (
        item.slug,
        item.name,
        [
            rx.el.p(
                item.summary,
                *(
                    []
                    if item.slug == "trigger"
                    else [
                        " ",
                        rx.el.a(
                            f"{cc.component_name(item.slug)} reference →", href=f"/components/{item.slug}"
                        ),
                    ]
                ),
            ),
            paper_card(
                ux.panel(
                    ro.demo(item.slug, composed_surface()),
                    ground=COMPOSED_GROUND.value,
                    substrate=COMPOSED_SUBSTRATE.value,
                ),
                class_name="spw-live",
            ),
            framework_tabs({**cc.FRAMEWORK_CODE[item.slug], "reflex": item.code}),
        ],
    )


def composed() -> Callable[[], rx.Component]:
    level_a = [i for i in ro.COMPOSED if i.level == "A"]
    level_b = [i for i in ro.COMPOSED if i.level == "B"]
    overview: Section = (
        "about",
        "Drawn with silverpoint's own pieces",
        [
            rx.el.p(
                c("@silverpoint/grounds/ui.css"),
                " draws its hand-inked frames, hatched tones and heightening on any element that follows its markup "
                "contract, so these components are drawn with exactly the same pieces as the first 17. silverpoint ",
                f"{sd.LATEST.version} ships them in React, Vue and Angular, on ",
                c("@silverpoint/<framework>/ui/<name>"),
                " beside the others (38 UI components in all); ",
                c("SpSurface"),
                " and ",
                c("SpGlyph"),
                " (",
                c("sp_surface"),
                ", ",
                c("sp_glyph"),
                ") are the building blocks, for components of your own.",
            ),
            callout(
                "The live demos are the Reflex versions of reflex-silverpoint-react ",
                ro.REFLEX_VERSION,
                ": the same @silverpoint/react components, overlays on <dialog> and the Popover API included, "
                "and they read silverpoint_provider. Props are snake_case; a string ",
                c("trigger"),
                " becomes an ",
                c("sp_trigger"),
                ", a native button that keeps the ARIA the overlay clones onto it.",
            ),
            table(
                ["Level", "Components"],
                [
                    [
                        ro.LEVEL_TITLES["A"],
                        rx.el.span(
                            *[rx.el.a(i.name, href=f"#{i.slug}", class_name="spw-chip") for i in level_a]
                        ),
                    ],
                    [
                        ro.LEVEL_TITLES["B"],
                        rx.el.span(
                            *[rx.el.a(i.name, href=f"#{i.slug}", class_name="spw-chip") for i in level_b]
                        ),
                    ],
                ],
            ),
            rx.el.p("Every demo on this page follows these controls:"),
            rx.el.div(
                choice("Ground", COMPOSED_GROUND, sd.GROUNDS),
                choice("Substrate", COMPOSED_SUBSTRATE, sd.SUBSTRATES),
                choice("Mode", COMPOSED_MODE, sd.MODES),
                choice("Palette", COMPOSED_PALETTE, ro.PALETTE_CHOICES),
                class_name="spw-controls",
            ),
        ],
    )
    surface_props: Section = (
        "surface",
        "Surface props",
        [
            rx.el.p(
                "In React, Vue and Angular every component takes ",
                c("ground"),
                ", ",
                c("substrate"),
                ", ",
                c("mode"),
                ", ",
                c("size"),
                ", ",
                c("palette"),
                " and ",
                c("id"),
                ", and reads them from the provider. A value binds as each framework does it (",
                c("value"),
                " + ",
                c("onChange"),
                ", ",
                c("v-model"),
                ", ",
                c("[(value)]"),
                " or a forms directive), and an overlay's open state with ",
                c("open"),
                " + ",
                c("onOpenChange"),
                ", ",
                c("v-model:open"),
                " or ",
                c("[(open)]"),
                " (or ",
                c("defaultOpen"),
                ").",
            ),
            rx.el.p(
                "In Reflex every builder takes ",
                c("ground"),
                ", ",
                c("substrate"),
                ", ",
                c("mode"),
                ", ",
                c("size"),
                " (sm, md, lg), ",
                c("seed"),
                ", ",
                c("palette"),
                ", ",
                c("id"),
                ", ",
                c("class_name"),
                " and ",
                c("style"),
                ". Values and lists (rows, items, options) can be static or state vars. Value components (",
                c("sp_textarea"),
                ", ",
                c("sp_input_number"),
                ", ",
                c("sp_select"),
                ", ",
                c("sp_pagination"),
                ") send the new value itself to ",
                c("on_change"),
                ", never a DOM event. Overlays are controlled with ",
                c("open"),
                " + ",
                c("on_open_change"),
                ", or uncontrolled with ",
                c("default_open"),
                ".",
            ),
        ],
    )
    sections: list[Section] = [overview]
    sections += [composed_entry(i) for i in level_a]
    sections += [composed_entry(i) for i in level_b]
    sections.append(surface_props)
    return page(
        "/docs/composed",
        "Composed components",
        "New in silverpoint 0.7 and reflex-silverpoint-react 0.7. Components drawn "
        "on silverpoint's frames and tones: tables, pagination, statistics, collapse panels, and overlays — modal, "
        "drawer, popover, tooltip, select, menu and toast — in React, Vue, Angular and Reflex.",
        sections,
        eyebrow=EYEBROW,
    )


# ── Timeline ─────────────────────────────────────────────────────────────────────────────

TIMELINE_GROUND = ClientStateVar.create("timeline_ground", "silverpoint")
TIMELINE_SUBSTRATE = ClientStateVar.create("timeline_substrate", "cream")
TIMELINE_MODE = ClientStateVar.create("timeline_mode", "ink")
TIMELINE_PALETTE = ClientStateVar.create("timeline_palette", "none")
TIMELINE_FRAMES = ClientStateVar.create("timeline_frames", "inked")
TIMELINE_SLIDE = ClientStateVar.create("timeline_slide", "")


TIMELINE_INSTALL = {
    "react": "npm install @knight-lab/timelinejs",
    "vue": "npm install @knight-lab/timelinejs",
    "angular": "npm install @knight-lab/timelinejs",
    "reflex": "pip install reflex-silverpoint-react",
}

TIMELINE_STORY_JS = """const story = {
  title: { text: { headline: 'From silverpoint to silverpoint' } },
  events: [
    { start_date: { year: 1484 }, text: { headline: 'Dürer at thirteen', text: '…' } },
    { start_date: { year: 1842 }, text: { headline: 'The cyanotype', text: '…' } },
  ],
  eras: [{ start_date: { year: 1400 }, end_date: { year: 1600 }, text: { headline: 'Metalpoint' } }],
};"""

TIMELINE_CODES = {
    "react": f"""import '@knight-lab/timelinejs/dist/css/timeline.css'; // TimelineJS's stylesheet first
import '@silverpoint/grounds/timeline.css';
import {{ SpTimeline }} from '@silverpoint/react/timeline';

{TIMELINE_STORY_JS}

<SpTimeline
  data={{story}}
  height="560px"
  palette={{sepia}} // from '@silverpoint/core/palettes'
  inkedFrames // the ground's hand-drawn frames and tone tiles
  onChange={{(uniqueId) => console.log(uniqueId)}} // the slide shown
  fallback={{<p>The timeline could not be loaded.</p>}}
/>""",
    "vue": f"""<script setup lang="ts">
import '@knight-lab/timelinejs/dist/css/timeline.css';
import '@silverpoint/grounds/timeline.css';
import {{ SpTimeline }} from '@silverpoint/vue/timeline';

{TIMELINE_STORY_JS}
</script>

<template>
  <SpTimeline :data="story" height="560px" @change="(id) => console.log(id)">
    <template #fallback><p>The timeline could not be loaded.</p></template>
  </SpTimeline>
</template>""",
    "angular": f"""/* src/styles.css */
@import '@knight-lab/timelinejs/dist/css/timeline.css';
@import '@silverpoint/grounds/timeline.css';

// history.ts
import {{ Component }} from '@angular/core';
import {{ SpTimeline, SpTimelineFallback }} from '@silverpoint/angular/timeline';

{TIMELINE_STORY_JS}

@Component({{
  selector: 'app-history',
  imports: [SpTimeline, SpTimelineFallback],
  template: `
    <sp-timeline [data]="story" height="560px" (change)="slide = $event">
      <ng-template spFallback><p>The timeline could not be loaded.</p></ng-template>
    </sp-timeline>
  `,
}})
export class History {{
  protected slide: string | undefined;
  protected readonly story = story;
}}""",
    "reflex": ro.TIMELINE_CODE,
}


def live_timeline(**props) -> rx.Component:
    return sp_timeline(
        ro.TIMELINE_DATA,
        {"start_at_slide": 1, "hash_bookmark": False},
        height=560,
        ground=TIMELINE_GROUND.value,
        substrate=TIMELINE_SUBSTRATE.value,
        mode=TIMELINE_MODE.value,
        palette=ro.palette_var(TIMELINE_PALETTE.value),
        inked_frames=TIMELINE_FRAMES.value == "inked",
        **props,
    )


def timeline() -> Callable[[], rx.Component]:
    sections: list[Section] = [
        (
            "live",
            "Try it",
            [
                rx.el.p(
                    "The Knight Lab timeline on every ground, mode and palette. Use the arrows, the markers or the "
                    "zoom buttons."
                ),
                rx.el.div(
                    choice("Ground", TIMELINE_GROUND, sd.GROUNDS),
                    choice("Substrate", TIMELINE_SUBSTRATE, sd.SUBSTRATES),
                    choice("Mode", TIMELINE_MODE, sd.MODES),
                    choice("Palette", TIMELINE_PALETTE, ro.PALETTE_CHOICES),
                    choice("Frames", TIMELINE_FRAMES, ("inked", "skin only")),
                    class_name="spw-controls",
                ),
                rx.el.div(live_timeline(on_change=TIMELINE_SLIDE.set_value), class_name="spw-timeline-wrap"),
                rx.el.p(
                    "on_change: ",
                    c(rx.cond(TIMELINE_SLIDE.value, TIMELINE_SLIDE.value, "—")),
                    class_name="spw-small",
                ),
            ],
        ),
        (
            "install",
            "Install",
            [
                rx.el.p(
                    "In React, Vue and Angular, ",
                    c("SpTimeline"),
                    " is on its own subpath, ",
                    c("@silverpoint/<framework>/timeline"),
                    ", and ",
                    c("@knight-lab/timelinejs"),
                    " (^3.9.13) is an optional peer: install it only if you use the timeline, import the subpath only "
                    "with it installed, and import its stylesheet before ",
                    c("@silverpoint/grounds/timeline.css"),
                    ". The server renders the surface and an empty mount; TimelineJS builds in the browser, and if "
                    "it cannot be loaded the mount shows your fallback and warns SP025.",
                ),
                rx.el.p(
                    "In Reflex, ",
                    c("sp_timeline"),
                    " is the npm ",
                    c("SpTimeline"),
                    ", and ",
                    c("@knight-lab/timelinejs"),
                    " is its npm dependency, installed when a page uses it: no Python extra is needed. The ",
                    c("[timeline]"),
                    " extra is empty and ",
                    c("timeline_available()"),
                    " always returns True; both are kept for older code.",
                ),
            ],
        ),
        ("code", "In your code", [framework_tabs(TIMELINE_CODES, TIMELINE_INSTALL)]),
        (
            "layers",
            "Two layers: the skin and the hand",
            [
                rx.el.ul(
                    rx.el.li(
                        rx.el.strong("The skin"),
                        " replaces TimelineJS's colours, type and rules with the ground's ",
                        c("--sp-"),
                        " properties: the substrate, the inks, EB Garamond, hairline rules, eras hatched by density, "
                        "the current marker heightened.",
                    ),
                    rx.el.li(
                        rx.el.strong("The hand"),
                        " reads the ground's own frame and tone masks from hidden probes and lays them on the markers, "
                        "eras and menubar, so they are drawn with the same pieces as the Sp components. ",
                        c("inked_frames=False"),
                        " keeps the skin only; ",
                        c("precision"),
                        ", ",
                        c("cyanotype"),
                        " and forced colours fall back to exact rules by themselves.",
                    ),
                )
            ],
        ),
        (
            "props",
            "Props and events",
            [
                rx.el.p(
                    "The names below are Reflex's; in JavaScript they are camelCase (",
                    c("inkedFrames"),
                    ", ",
                    c("onNavNext"),
                    " in React, ",
                    c("@nav-next"),
                    " in Vue, ",
                    c("(navNext)"),
                    " in Angular), ",
                    c("height"),
                    " is a CSS length (default ",
                    c("'600px'"),
                    "), and ",
                    c("label"),
                    " names the region (the title's headline when omitted).",
                ),
                table(
                    ["Prop", "Default", ""],
                    [
                        [
                            c("data"),
                            "—",
                            "TimelineJS data (title, events, eras, scale), a TimelineData, or a state var.",
                        ],
                        [
                            c("options"),
                            "{}",
                            "TimelineJS options; font and theme are ignored (the skin sets both).",
                        ],
                        [c("height"), "600", "Height of the whole timeline (px or a CSS length)."],
                        [c("inked_frames"), "True", "Lays the ground's hand-drawn frames and tone tiles."],
                        [c("card"), "True", "Frames the whole timeline as a card."],
                        [c("ground, substrate, mode, palette, seed"), "—", "The surface props."],
                        [c("on_change"), "—", "The unique_id of the slide shown."],
                        [c("on_loaded"), "—", "TimelineJS's loaded payload."],
                        [
                            c("on_nav_next, on_nav_previous, on_zoom_in, on_zoom_out, on_back_to_start"),
                            "—",
                            "The timeline's navigation.",
                        ],
                    ],
                ),
                callout(
                    "TimelineJS requests its icon font from a relative path (/css/icons/tl-icons.*). Where that path "
                    "answers with HTML, the browser logs font-decoding warnings and the buttons lose their icons. Copy "
                    "tl-icons.woff2, .woff and .ttf from @knight-lab/timelinejs/dist/css/icons into your app's "
                    "assets/css/icons/, as this site does. For a light list of events, use ",
                    c("sp_timeline_list"),
                    ".",
                    kind="note",
                ),
            ],
        ),
    ]
    return page(
        "/docs/timeline",
        "Timeline",
        "New in silverpoint 0.7 and reflex-silverpoint-react 0.7. SpTimeline "
        "draws Knight Lab's TimelineJS in silverpoint: a skin on the ground's colours and type, and the ground's own "
        "hand-inked frames and tone tiles on its markers, eras and buttons.",
        sections,
        eyebrow=EYEBROW,
    )


def register(app: rx.App) -> None:
    pages: list[tuple[Callable[[], rx.Component], str, str]] = [
        (palettes(), "/docs/palettes", "Palettes"),
        (composed(), "/docs/composed", "Composed components"),
        (timeline(), "/docs/timeline", "Timeline"),
    ]
    for component, route, title in pages:
        app.add_page(component, route=route, title=f"{title} · silverpoint docs")
