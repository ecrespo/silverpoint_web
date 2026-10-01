"""The 17 UI components of silverpoint 0.3: their live demos and their code in four frameworks.

Each reference state comes from ``reflex_silverpoint_react.UI_DEMOS`` (a mirror of upstream's
``@silverpoint/core/ui-demos``). The site draws it with ``ui_demo`` and prints the same state in
React, Vue, Angular and Reflex, so what a reader copies is what they see drawn. As upstream's own
docs do, the examples are uncontrolled: the demo's value becomes the default value.
"""

from typing import Any

import reflex as rx
from reflex_silverpoint_react import (
    UI_COMPONENTS,
    UI_DEMOS,
    UI_GROUPS,
    UI_VALUE_COMPONENTS,
    UiComponentInfo,
    sp_tab_panel,
    ui_demo,
)

from .examples import js_name, js_value, kebab, py_value

#: Value components whose bound value is a bool.
CHECKABLE = frozenset({"checkbox", "switch"})

#: Props a demo carries that are slots (text the component holds), not attributes.
SLOTS = ("content", "extra")

UI_STYLESHEETS_JS = (
    "import '@silverpoint/fonts/fonts.css';\n"
    "import '@silverpoint/grounds/styles.css';\n"
    "import '@silverpoint/grounds/ui.css';"
)
UI_STYLESHEETS_CSS = (
    "@import '@silverpoint/fonts/fonts.css';\n"
    "@import '@silverpoint/grounds/styles.css';\n"
    "@import '@silverpoint/grounds/ui.css';"
)

# ── Usage shared by the docs ─────────────────────────────────────────────────────────────

INSTALL_CODE = {
    "react": f"""{UI_STYLESHEETS_JS}

// One subpath per component, or every one from the barrel:
import {{ SpButton }} from '@silverpoint/react/ui/button';
import {{ SpInput, SpSwitch, SpTabs, SpTabPanel }} from '@silverpoint/react/ui';""",
    "vue": f"""<script setup lang="ts">
{UI_STYLESHEETS_JS}

import {{ SpButton }} from '@silverpoint/vue/ui/button';
import {{ SpInput, SpSwitch, SpTabs, SpTabPanel }} from '@silverpoint/vue/ui';
</script>""",
    "angular": f"""/* src/styles.css */
{UI_STYLESHEETS_CSS}

// app.ts
import {{ SpButton }} from '@silverpoint/angular/ui/button';
import {{ SpInput, SpSwitch, SpTabs, SpTabPanel }} from '@silverpoint/angular/ui';""",
    "reflex": """# Nothing to import on the JavaScript side: every UI component adds
# @silverpoint/grounds/ui.css (and styles.css and the typeface) for you.
from reflex_silverpoint_react import sp_button, sp_input, sp_switch, sp_tab_panel, sp_tabs""",
}

FORM_CODE = {
    "react": """import { useState, type FormEvent } from 'react';
import { SpButton, SpInput, SpSwitch, SpTabPanel, SpTabs } from '@silverpoint/react/ui';
import { BarChart } from '@silverpoint/react/bar-chart';
import { LineChart } from '@silverpoint/react/line-chart';

export function Settings() {
  const [city, setCity] = useState('Caracas');
  const [precision, setPrecision] = useState(false);
  const [view, setView] = useState('traffic');
  const mode = precision ? 'precision' : 'ink';

  const save = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(Object.fromEntries(new FormData(event.currentTarget))); // { city, precision, … }
  };

  return (
    <form onSubmit={save}>
      {/* onChange receives the value itself, not the DOM event */}
      <SpInput label="City" name="city" value={city} onChange={setCity}
        invalid={city === ''} message="Required: pick a city" />
      <SpSwitch label="Precision" name="precision" checked={precision} onChange={setPrecision} />
      <SpTabs label="Views" value={view} onChange={setView}
        items={[{ key: 'traffic', label: 'Traffic' }, { key: 'errors', label: 'Errors' }]}>
        <SpTabPanel value="traffic"><LineChart title="Traffic" mode={mode} /></SpTabPanel>
        <SpTabPanel value="errors"><BarChart title="Errors" mode={mode} /></SpTabPanel>
      </SpTabs>
      <SpButton type="submit" variant="primary">Save</SpButton>
    </form>
  );
}""",
    "vue": """<script setup lang="ts">
import { ref, computed } from 'vue';
import { SpButton, SpInput, SpSwitch, SpTabPanel, SpTabs } from '@silverpoint/vue/ui';
import { SpBarChart } from '@silverpoint/vue/bar-chart';
import { SpLineChart } from '@silverpoint/vue/line-chart';

const city = ref('Caracas');
const precision = ref(false);
const view = ref('traffic');
const mode = computed(() => (precision.value ? 'precision' : 'ink'));
const tabs = [{ key: 'traffic', label: 'Traffic' }, { key: 'errors', label: 'Errors' }];

function save(event: SubmitEvent) {
  console.log(Object.fromEntries(new FormData(event.target as HTMLFormElement)));
}
</script>

<template>
  <form @submit.prevent="save">
    <SpInput v-model="city" label="City" name="city"
      :invalid="city === ''" message="Required: pick a city" />
    <SpSwitch v-model="precision" label="Precision" name="precision" />
    <SpTabs v-model="view" label="Views" :items="tabs">
      <SpTabPanel value="traffic"><SpLineChart title="Traffic" :mode="mode" /></SpTabPanel>
      <SpTabPanel value="errors"><SpBarChart title="Errors" :mode="mode" /></SpTabPanel>
    </SpTabs>
    <SpButton type="submit" variant="primary">Save</SpButton>
  </form>
</template>""",
    "angular": """import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpButton, SpInput, SpSwitch, SpTabPanel, SpTabs } from '@silverpoint/angular/ui';
import { SpBarChart } from '@silverpoint/angular/bar-chart';
import { SpLineChart } from '@silverpoint/angular/line-chart';

@Component({
  selector: 'app-settings',
  imports: [FormsModule, SpButton, SpInput, SpSwitch, SpTabs, SpTabPanel, SpBarChart, SpLineChart],
  template: `
    <form (ngSubmit)="save()">
      <!-- [(value)] two-way binds a signal; ngModel and formControl work too (ControlValueAccessor) -->
      <sp-input label="City" name="city" [(value)]="city"
        [invalid]="city() === ''" message="Required: pick a city" />
      <sp-switch label="Precision" name="precision" [(value)]="precision" />
      <sp-tabs label="Views" [items]="tabs" [(value)]="view">
        <sp-tab-panel value="traffic"><sp-line-chart title="Traffic" [mode]="mode()" /></sp-tab-panel>
        <sp-tab-panel value="errors"><sp-bar-chart title="Errors" [mode]="mode()" /></sp-tab-panel>
      </sp-tabs>
      <button spButton type="submit" variant="primary">Save</button>
    </form>
  `,
})
export class Settings {
  protected readonly city = signal('Caracas');
  protected readonly precision = signal(false);
  protected readonly view = signal('traffic');
  protected readonly mode = computed(() => (this.precision() ? 'precision' : 'ink'));
  protected readonly tabs = [{ key: 'traffic', label: 'Traffic' }, { key: 'errors', label: 'Errors' }];
  save() { console.log(this.city(), this.precision()); }
}""",
    "reflex": """import reflex as rx
from reflex_silverpoint_react import (
    bar_chart, line_chart, sp_button, sp_input, sp_switch, sp_tab_panel, sp_tabs, ui_item,
)


class State(rx.State):
    city: str = "Caracas"
    precision: bool = False
    view: str = "traffic"

    @rx.event
    def set_city(self, value: str):  # on_change gets the value, not an event
        self.city = value

    @rx.event
    def set_precision(self, value: bool):
        self.precision = value

    @rx.event
    def set_view(self, value: str):
        self.view = value

    @rx.event
    def save(self, form: dict):
        print(form)  # {"city": "Caracas", ...}: the native inputs submit under their name


def settings() -> rx.Component:
    mode = rx.cond(State.precision, "precision", "ink")
    return rx.el.form(
        sp_input(label="City", name="city", value=State.city, on_change=State.set_city,
                 invalid=State.city == "", message="Required: pick a city"),
        sp_switch(label="Precision", name="precision", checked=State.precision,
                  on_change=State.set_precision),
        sp_tabs(
            sp_tab_panel(line_chart(title="Traffic", mode=mode), value="traffic"),
            sp_tab_panel(bar_chart(title="Errors", mode=mode), value="errors"),
            items=[ui_item("traffic", "Traffic"), ui_item("errors", "Errors")],
            label="Views", value=State.view, on_change=State.set_view,
        ),
        sp_button("Save", type="submit", variant="primary"),
        on_submit=State.save,
    )""",
}

#: Where each framework imports the UI components from.
INSTALL_PATHS = {
    "react": "@silverpoint/react/ui",
    "vue": "@silverpoint/vue/ui",
    "angular": "@silverpoint/angular/ui",
    "reflex": "reflex_silverpoint_react",
}

GROUP_BLURBS: dict[str, str] = {
    "actions": "A native button, or a link drawn as one.",
    "data-entry": "Native inputs, checkboxes, radios and ranges in hand-drawn frames: forms submit natively.",
    "navigation": "Tabs with their panels and an ordered list of steps, with the WAI-ARIA keyboard patterns.",
    "data-display": "Cards, toned tags, counting badges and captioned rules.",
    "feedback": "Progress as a line or a circle, alerts by kind, and loading placeholders.",
}


def group_title(group: str) -> str:
    return dict(UI_GROUPS)[group]


def components_in(group: str) -> list[UiComponentInfo]:
    return [info for info in UI_COMPONENTS if info.group == group]


# ── A state, split as the adapters bind it ───────────────────────────────────────────────


def parts(slug: str, state: str) -> tuple[dict[str, Any], dict[str, str], Any]:
    """``(attributes, slots, default value)`` of one reference state, without its id."""
    attrs: dict[str, Any] = {}
    slots: dict[str, str] = {}
    value: Any = None
    for key, v in UI_DEMOS[slug][state].items():
        if key == "id":
            continue
        if key in SLOTS:
            slots[key] = v
        elif key == "value" and slug in UI_VALUE_COMPONENTS:
            value = v
        else:
            attrs[key] = v
    return attrs, slots, value


def tab_panels(slug: str, state: str) -> list[rx.Component]:
    """One panel per tab, so a demo of ``tabs`` shows what selecting a tab does."""
    if slug != "tabs":
        return []
    return [
        sp_tab_panel(f"{item['label']}: the charts of this view.", value=item["key"])
        for item in UI_DEMOS[slug][state]["items"]
    ]


def live(slug: str, state: str, **overrides: Any) -> rx.Component:
    """One reference state drawn live, uncontrolled, as a consumer writes it."""
    overrides.setdefault("id", f"{slug}--{state}")
    return ui_demo(slug, state, *tab_panels(slug, state), **overrides)


def panel(
    *children: Any, ground: Any = "silverpoint", substrate: Any = "cream", **props: Any
) -> rx.Component:
    """The prepared ground behind UI components: its substrate colour and text tokens.

    Charts draw their own card; UI components sit on the page, so a sample gets the ground's
    class (``sp-ground-<ground>``, from ``@silverpoint/grounds``) and its substrate.
    """
    return rx.el.form(
        *children,
        on_submit=rx.prevent_default,
        class_name=f"spw-ui-sample sp-ground-{ground}",
        data_substrate=substrate,
        **props,
    )


# ── The four renderings ──────────────────────────────────────────────────────────────────


def _default_attr_js(slug: str) -> str:
    return "defaultChecked" if slug in CHECKABLE else "defaultValue"


def react_code(info: UiComponentInfo, state: str) -> str:
    attrs, slots, value = parts(info.slug, state)
    name = info.component
    written = []
    for key, v in attrs.items():
        js = js_name(key)
        if isinstance(v, str):
            written.append(f'{js}="{v}"')
        elif v is True:
            written.append(js)
        else:
            written.append(f"{js}={{{js_value(v)}}}")
    if "extra" in slots:
        written.append(f'extra="{slots["extra"]}"')
    if value is not None:
        if info.slug in CHECKABLE:
            written.append("defaultChecked" if value else "")
        else:
            written.append(
                f'defaultValue="{value}"' if isinstance(value, str) else f"defaultValue={{{js_value(value)}}}"
            )
    tag = _open_tag(name, [w for w in written if w], "  ")
    lines = [UI_STYLESHEETS_JS, f"import {{ {name} }} from '@silverpoint/react/ui/{info.slug}';"]
    if info.slug == "tabs":
        lines[-1] = f"import {{ SpTabPanel, {name} }} from '@silverpoint/react/ui/{info.slug}';"
        panels = "\n".join(
            f'  <SpTabPanel value="{i["key"]}">{i["label"]}: the charts of this view.</SpTabPanel>'
            for i in attrs["items"]
        )
        return "\n".join([*lines, "", f"{tag}>", panels, f"</{name}>"])
    if "content" in slots:
        return "\n".join([*lines, "", f"{tag}>{slots['content']}</{name}>"])
    return "\n".join([*lines, "", _self_close(tag)])


def vue_code(info: UiComponentInfo, state: str) -> str:
    attrs, slots, value = parts(info.slug, state)
    name = info.component
    written = []
    for key, v in attrs.items():
        attr = kebab(js_name(key))
        if isinstance(v, str):
            written.append(f'{attr}="{v}"')
        elif v is True:
            written.append(attr)
        else:
            written.append(f':{attr}="{js_value(v)}"')
    if value is not None:
        written.append(
            f'default-value="{value}"' if isinstance(value, str) else f':default-value="{js_value(value)}"'
        )
    imports = f"SpTabPanel, {name}" if info.slug == "tabs" else name
    script = [
        '<script setup lang="ts">',
        UI_STYLESHEETS_JS,
        f"import {{ {imports} }} from '@silverpoint/vue/ui/{info.slug}';",
        "</script>",
        "",
        "<template>",
    ]
    tag = _open_tag(name, written, "    ", indent="  ")
    body: list[str] = []
    if info.slug == "tabs":
        body = [
            f'    <SpTabPanel value="{i["key"]}">{i["label"]}: the charts of this view.</SpTabPanel>'
            for i in attrs["items"]
        ]
    if "extra" in slots:
        body.append(f"    <template #extra>{slots['extra']}</template>")
    if "content" in slots:
        body.append(f"    {slots['content']}")
    if body:
        return "\n".join([*script, f"{tag}>", *body, f"  </{name}>", "</template>"])
    return "\n".join([*script, _self_close(tag), "</template>"])


def angular_code(info: UiComponentInfo, state: str) -> str:
    attrs, slots, value = parts(info.slug, state)
    name = info.component
    written = []
    for key, v in attrs.items():
        js = js_name(key)
        if isinstance(v, str):
            written.append(f'{js}="{v}"')
        else:
            written.append(f'[{js}]="{js_value(v)}"')
    if value is not None:
        written.append(
            f'defaultValue="{value}"' if isinstance(value, str) else f'[defaultValue]="{js_value(value)}"'
        )
    imports = {"tabs": f"SpTabPanel, {name}", "card": f"{name}, SpCardExtra"}.get(info.slug, name)
    if info.slug == "button":
        tag = _open_tag("button spButton", written, "      ", indent="    ")
        markup = [f"{tag}>{slots.get('content', '')}</button>"]
    else:
        selector = f"sp-{info.slug}"
        tag = _open_tag(selector, written, "      ", indent="    ")
        inner: list[str] = []
        if info.slug == "tabs":
            inner = [
                f'      <sp-tab-panel value="{i["key"]}">{i["label"]}: the charts of this view.</sp-tab-panel>'
                for i in attrs["items"]
            ]
        if "extra" in slots:
            inner.append(f"      <ng-template spExtra>{slots['extra']}</ng-template>")
        if "content" in slots:
            inner.append(f"      {slots['content']}")
        markup = [f"{tag}>", *inner, f"    </{selector}>"] if inner else [_self_close(tag)]
    return "\n".join(
        [
            "// src/styles.css:",
            *[f"//   {line}" for line in UI_STYLESHEETS_CSS.splitlines()],
            "",
            "import { Component } from '@angular/core';",
            f"import {{ {imports} }} from '@silverpoint/angular/ui/{info.slug}';",
            "",
            "@Component({",
            "  selector: 'app-root',",
            f"  imports: [{imports}],",
            "  template: `",
            *markup,
            "  `,",
            "})",
            "export class App {}",
        ]
    )


def _py_item(item: dict[str, Any]) -> str:
    """A tabs / segmented / radio item as ``ui_item(...)``, a step as ``step_item(...)``."""
    if "title" in item:
        extra = "".join(f", {k}={py_value(item[k])}" for k in ("description", "status") if k in item)
        return f"step_item({py_value(item['key'])}, {py_value(item['title'])}{extra})"
    disabled = ", disabled=True" if item.get("disabled") else ""
    return f"ui_item({py_value(item['key'])}, {py_value(item['label'])}{disabled})"


def reflex_code(info: UiComponentInfo, state: str) -> str:
    attrs, slots, value = parts(info.slug, state)
    fn = info.factory_name
    helpers: set[str] = set()
    args: list[str] = []
    if info.slug == "tabs":
        helpers.add("sp_tab_panel")
        args += [
            f"sp_tab_panel({py_value(i['label'] + ': the charts of this view.')}, value={py_value(i['key'])}),"
            for i in attrs["items"]
        ]
    if "content" in slots:
        args.append(f"{py_value(slots['content'])},")
    for key, v in attrs.items():
        if key == "items":
            helper = "step_item" if v and "title" in v[0] else "ui_item"
            helpers.add(helper)
            items = "\n".join(f"        {_py_item(i)}," for i in v)
            args.append(f"items=[\n{items}\n    ],")
        else:
            args.append(f"{key}={py_value(v)},")
    if "extra" in slots:
        args.append(f"extra={py_value(slots['extra'])},")
    if value is not None:
        args.append(f"{'default_checked' if info.slug in CHECKABLE else 'default_value'}={py_value(value)},")
    imports = ", ".join(sorted({fn, *helpers}))
    body = "\n".join(f"    {a}" for a in args)
    return (
        f"from reflex_silverpoint_react import {imports}\n\n{fn}(\n{body}\n)"
        if args
        else (f"from reflex_silverpoint_react import {imports}\n\n{fn}()")
    )


def _open_tag(name: str, attrs: list[str], attr_indent: str, indent: str = "") -> str:
    """``<Name a b c`` on one line when short, one attribute per line otherwise."""
    one_line = f"{indent}<{name}" + "".join(f" {a}" for a in attrs)
    if len(one_line) <= 88:
        return one_line
    return f"{indent}<{name}\n" + "\n".join(f"{attr_indent}{a}" for a in attrs) + f"\n{indent}"


def _self_close(tag: str) -> str:
    """Close a tag: on its own line when the attributes were broken over several."""
    return tag + ("/>" if "\n" in tag else " />")


def codes(info: UiComponentInfo, state: str) -> dict[str, str]:
    return {
        "react": react_code(info, state),
        "vue": vue_code(info, state),
        "angular": angular_code(info, state),
        "reflex": reflex_code(info, state),
    }


def import_paths(info: UiComponentInfo) -> dict[str, str]:
    selector = "<button spButton>" if info.slug == "button" else f"<sp-{info.slug}>"
    return {
        "react": f"import {{ {info.component} }} from '@silverpoint/react/ui/{info.slug}';",
        "vue": f"import {{ {info.component} }} from '@silverpoint/vue/ui/{info.slug}';",
        "angular": f"import {{ {info.component} }} from '@silverpoint/angular/ui/{info.slug}';  // {selector}",
        "reflex": f"from reflex_silverpoint_react import {info.factory_name}",
    }


def selector(info: UiComponentInfo) -> str:
    return "button[spButton]" if info.slug == "button" else f"sp-{info.slug}"


assert {info.slug for info in UI_COMPONENTS} == set(UI_DEMOS), "every UI component needs its demos"
