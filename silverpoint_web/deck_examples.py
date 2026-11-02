"""Slide decks (silverpoint 0.9, feature-006): the decks this site draws and their code in four frameworks.

``SpDeck`` (``@silverpoint/<react|vue|angular>/deck``, ``sp_deck`` in Reflex since
reflex-silverpoint-react 0.9.0) renders Marp/Marpit Markdown in the silverpoint style; the engine is
``@silverpoint/marp``. The tables follow the package's README and the agent catalog at 0.9.2.
"""

FENCE = "`" * 3

#: The deck of /docs/decks: every feature a slide.
SHOWCASE = f"""---
paginate: true
header: silverpoint · slide decks
footer: silverpoint 0.9
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Charts drawn like silverpoint

A Marp deck, from Markdown

<!-- A presenter note: any comment that is not a directive. Press n to toggle the notes. -->

---

## What a deck is made of

* Slides separated by `---`, directives in comments
* Lists revealed one item at a time
* `silverpoint` fences that become live charts
* Presenter notes from any other comment

<!-- Each bullet is a fragment: the arrows reveal them before the next slide. -->

---

## Visits by quarter

{FENCE}silverpoint
{{"chart": "bar-chart", "props": {{"title": "Visits by quarter", "xKey": "quarter", "valueKey": "visits"}}, "data": [{{"quarter": "Q1", "visits": 412}}, {{"quarter": "Q2", "visits": 538}}, {{"quarter": "Q3", "visits": 611}}, {{"quarter": "Q4", "visits": 574}}], "height": 380}}
{FENCE}

<!-- A bar chart with its own rows. Hover a bar: the chart is hydrated, not a picture. -->

---

<!-- _ground: cyanotype -->

## The cyanotype ground

{FENCE}silverpoint
{{"chart": "line-chart", "props": {{"title": "Visits over the year"}}, "height": 380}}
{FENCE}

<!-- One directive moves this slide to the cyanotype ground; its chart follows. -->

---

<!-- _mode: precision -->

## Precision mode

{FENCE}silverpoint
{{"chart": "radar-chart", "props": {{"title": "Skills, with exact strokes"}}, "height": 400}}
{FENCE}

---

<!-- _class: plate -->
<!-- _substrate: ochre -->

## A plate mark on ochre

1) Marpit parses the Markdown and the directives
2) The silverpoint theme lays it on the ground
3) Each fence is drawn as static SVG
4) In the browser, the chart is hydrated in place

---

<!-- _class: hatched -->

## Share by channel

{FENCE}silverpoint
{{"chart": "donut-chart", "props": {{"title": "Share by channel", "legend": true}}, "height": 320}}
{FENCE}

---

## When a fence is wrong

{FENCE}silverpoint
{{"chart": "pie-chart", "props": {{"title": "There is no pie chart"}}}}
{FENCE}

The rest of the deck renders as usual.

<!-- This block names an unknown chart on purpose: it draws an error figure with the closest names (SP026). -->

---

<!-- _class: lead invert -->

# Thank you

`npm install @silverpoint/marp`
"""

#: The short deck on the home page.
HOME_DECK = f"""---
paginate: true
footer: silverpoint 0.9 · slide decks
---

<!-- _class: lead -->

# Slide decks in silverpoint

Marp Markdown, drawn on the ground

---

## A chart is a fence

{FENCE}silverpoint
{{"chart": "area-chart", "props": {{"title": "Visits over the year"}}, "height": 340}}
{FENCE}

---

<!-- _ground: cyanotype -->

## One directive, another ground

{FENCE}silverpoint
{{"chart": "gauge-arc", "props": {{"percent": 72, "caption": "Capacity used"}}, "height": 340}}
{FENCE}
"""

STYLESHEETS = (
    "@silverpoint/fonts/fonts.css",
    "@silverpoint/grounds/styles.css",
    "@silverpoint/grounds/ui.css",
    "@silverpoint/marp/deck.css",
)

INSTALL = {
    "react": "npm install @silverpoint/react @silverpoint/marp @silverpoint/grounds @silverpoint/fonts",
    "vue": "npm install @silverpoint/vue @silverpoint/marp @silverpoint/grounds @silverpoint/fonts",
    "angular": "npm install @silverpoint/angular @silverpoint/marp @silverpoint/grounds @silverpoint/fonts",
    "reflex": "pip install 'reflex-silverpoint-react>=0.9.1'",
}

CODES = {
    "react": """// src/main.tsx: the stylesheets, in this order
import '@silverpoint/fonts/fonts.css';
import '@silverpoint/grounds/styles.css';
import '@silverpoint/grounds/ui.css';
import '@silverpoint/marp/deck.css';

// src/Talk.tsx
import { useState } from 'react';
import { SpDeck } from '@silverpoint/react/deck';
import markdown from './talk.md?raw';

export function Talk() {
  const [page, setPage] = useState(1);
  return (
    <SpDeck
      markdown={markdown}
      page={page}
      onPageChange={({ page }) => setPage(page)}
      onReady={({ total }) => console.log(total, 'slides')}
      showNotes
    />
  );
}""",
    "vue": """<!-- src/Talk.vue (the four stylesheets are imported in main.ts, in the same order) -->
<script setup lang="ts">
import { ref } from 'vue';
import { SpDeck } from '@silverpoint/vue/deck';
import markdown from './talk.md?raw';

const page = ref(1);
</script>

<template>
  <SpDeck :markdown="markdown" v-model:page="page" show-notes @ready="({ total }) => console.log(total)" />
</template>""",
    "angular": """// angular.json → "styles": [
//   "@silverpoint/fonts/fonts.css", "@silverpoint/grounds/styles.css",
//   "@silverpoint/grounds/ui.css", "@silverpoint/marp/deck.css" ]

// src/app/talk.ts
import { Component, signal } from '@angular/core';
import { SpDeckComponent } from '@silverpoint/angular/deck';
import { TALK } from './talk';

@Component({
  selector: 'app-talk',
  imports: [SpDeckComponent],
  template: `
    <sp-deck
      [markdown]="markdown"
      [page]="page()"
      (pageChange)="page.set($event.page)"
      [showNotes]="true"
    />
  `,
})
export class Talk {
  protected readonly markdown = TALK;
  protected readonly page = signal(1);
}""",
    "reflex": """from pathlib import Path

import reflex as rx
from reflex_silverpoint_react import sp_deck  # installs @silverpoint/marp as the deck's npm dependency

TALK = Path("assets/decks/talk.md").read_text()  # read when the app compiles


class Deck(rx.State):
    page: int = 1
    total: int = 0

    @rx.event
    def on_page_change(self, page: int, total: int):
        self.page, self.total = page, total

    @rx.event
    def on_ready(self, total: int):
        self.total = total


def talk() -> rx.Component:
    return sp_deck(
        TALK,
        page=Deck.page,  # controlled; or default_page=1
        on_page_change=Deck.on_page_change,  # (page, total)
        on_ready=Deck.on_ready,  # (total,)
        show_notes=True,
        palette="iron_gall",  # a preset's name, either spelling
        id="talk",
    )""",
}

#: Authoring: the minimal deck of the cheat sheet.
CHEAT = f"""---
paginate: true
header: My talk
ground: silverpoint
substrate: cream
---

<!-- _class: lead -->

# Title slide

---

<!-- _ground: cyanotype -->

## A chart on cyanotype

{FENCE}silverpoint
{{"chart": "bar-chart", "props": {{"title": "Visits"}}, "height": 400}}
{FENCE}

<!-- A presenter note: any comment that is not a directive. -->

---

* fragment one
* fragment two
1) and ordered ones"""

#: (directive, values, default, effect)
DIRECTIVES = (
    (
        "ground",
        "silverpoint · cyanotype",
        "silverpoint",
        "The ground a slide is drawn on; its charts follow.",
    ),
    (
        "substrate",
        "cream · green · blue · ochre (silverpoint); prussian (cyanotype)",
        "the ground's first",
        "The prepared paper.",
    ),
    ("mode", "ink · precision", "ink", "precision switches the inking off."),
    ("class", "lead · invert · plate · hatched", "—", "The theme's classes (below)."),
    ("paginate", "true · false", "false", "Page numbers (Marpit)."),
    ("header · footer", "text", "—", "Repeated on each slide (Marpit)."),
    (
        "backgroundColor · backgroundImage · color",
        "CSS",
        "—",
        "Marpit's own; ![bg right:40%](…) splits a slide.",
    ),
    ("size", "16:9 · 4:3", "16:9", "The slide size (Marpit); also the size prop."),
)

#: (class, effect)
CLASSES = (
    ("lead", "A title slide: the content centred, the heading larger, one rule under it."),
    ("invert", "Light text on the substrate darkened to the ground's ink; its contrast computed per ground."),
    ("plate", "An inked plate mark, a double rule inset from the edge, behind the content."),
    ("hatched", "An inked hatched band around the slide, behind the content."),
)

#: (field, value, default)
FENCE_FIELDS = (
    ("chart", "a catalog slug, e.g. bar-chart", "required"),
    ("props", "the chart's own props, camelCase (not the fence's fields)", "{}"),
    ("data", "the rows the chart reads", "its demo dataset"),
    ("width", "160 .. 1280 canvas px", "the slide's content width"),
    ("height", "90 .. 720 canvas px", "360"),
    ("id", "the chart's id", "<deck>-s<slide>-c<ordinal>"),
    ("ground · substrate · mode · palette", "as on any chart", "the slide's"),
)

#: (React prop, Reflex argument, default, description)
PROPS = (
    (
        "markdown",
        "markdown",
        "—",
        "The Marp Markdown: front matter, --- between slides, silverpoint fences. Required.",
    ),
    ("page", "page", "—", "Controlled current page (1-based); pair it with pageChange."),
    ("defaultPage", "default_page", "1", "Uncontrolled initial page."),
    ("ground", "ground", "silverpoint", "The deck's ground; a ground directive overrides it per slide."),
    ("substrate", "substrate", "the ground's first", "The deck's substrate."),
    ("mode", "mode", "ink", "ink or precision; a mode directive overrides it per slide."),
    (
        "palette",
        "palette",
        "—",
        "A palette preset's name, for the fence charts (iron_gall or ironGall in Reflex).",
    ),
    ("size", "size", "16:9", "16:9 or 4:3."),
    ("theme", "theme", "silverpoint", "The Marpit theme."),
    ("showNotes", "show_notes", "false", "Show the current slide's presenter notes."),
    ("showControls", "show_controls", "true", "Previous, next, overview, notes and full-screen controls."),
    (
        "keyboard",
        "keyboard",
        "true",
        "Arrows, PageUp/PageDown, Space, Home/End, o, f and n while focus is in the deck.",
    ),
    ("swipe", "swipe", "true", "A horizontal swipe moves the deck."),
    ("hash", "hash", "false", "Read and write a #<n> deep link in the URL."),
    ("interactive", "interactive", "true", "Hydrate the fence charts; false keeps them static SVG."),
    ("label", "label", "the first heading", "Accessible name of the deck region."),
    ("id", "id", "a hydration-safe id", "Scopes the deck's CSS and names its charts."),
)

#: (event, React · Vue · Angular, Reflex, payload)
EVENTS = (
    (
        "pageChange",
        "onPageChange · @page-change · (pageChange)",
        "on_page_change(page, total)",
        "{ page, total }",
    ),
    (
        "fragmentChange",
        "onFragmentChange · @fragment-change · (fragmentChange)",
        "on_fragment_change(page, step, steps)",
        "{ page, step, steps }",
    ),
    ("ready", "onReady · @ready · (ready)", "on_ready(total)", "{ total }"),
)

#: (code, when)
DIAGNOSTICS = (
    (
        "SP026",
        "A fence that is not JSON, names an unknown chart or prop, or asks for a size out of range: an error figure in its place.",
    ),
    ("SP027", "An unknown directive value, or a substrate of another ground: the inherited value is kept."),
    ("SP029", "A deck past a limit (512 KB, 300 slides, 60 fences): it renders up to the limit."),
)

ENGINE_CODE = """import { createDeckEngine } from '@silverpoint/marp';

const deck = createDeckEngine({ id: 'talk', ground: 'silverpoint' }).render(markdown);
deck.slides;      // per slide: its HTML, notes, fragment count, ground, substrate, mode, classes
deck.css;         // the theme, scoped to the deck's id
deck.diagnostics; // SP026, SP027, SP029, … with their slide"""

CLI_CODE = """# Marp CLI with the plain theme (fences shown as code, no controller)
npx @marp-team/marp-cli --theme node_modules/@silverpoint/marp/theme.css talk.md

# Marp CLI with silverpoint's engine (directives, backdrops and fences as static SVG)
npx @marp-team/marp-cli --engine @silverpoint/marp/cli talk.md

# VS Code: the Marp extension's settings.json
"markdown.marp.themes": ["./node_modules/@silverpoint/marp/theme.css"]"""

#: The deck's palette presets in the names the npm SpDeck reads.
PALETTE_CHOICES = ("none", "silverpoint", "sanguine", "sepia", "ironGall", "verdigris", "indigo")
