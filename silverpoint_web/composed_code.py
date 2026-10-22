"""The composed and overlay components of silverpoint 0.7 in React, Vue and Angular, and their props.

``reflex_only.COMPOSED`` holds the live Reflex demos and their Python; this module holds the same
examples written against ``@silverpoint/react``, ``@silverpoint/vue`` and ``@silverpoint/angular``
0.7, so ``/docs/composed`` prints all four behind the page-wide framework switch. Prop names, events
and slots follow the 0.7.0 type declarations (unchanged in 0.8). In Reflex the builders wrap the same
``@silverpoint/react`` components, so props and values match (``side="end"``, ``position="bottom-end"``,
``extent=``, ``offset=``) apart from snake_case and a few positional arguments (``sp_tooltip``'s
``content`` is the npm ``text``).
"""

import json
from pathlib import Path

from . import reflex_only as ro

#: The props of each component, extracted from the ``@silverpoint/core`` and ``@silverpoint/react`` 0.7.0 type
#: declarations: ``{slug: {component: [{js, type, doc, required, react?}]}}``; ``react`` marks a prop only the
#: React adapter spells that way (events, slots, the open state), which ``EVENTS`` maps to every framework.
UI_PROPS: dict[str, dict[str, list[dict]]] = json.loads(
    (Path(__file__).parent / "ui_props_0_7.json").read_text()
)

#: React, Vue and Angular code of each composed component, by its slug in ``reflex_only.COMPOSED``.
FRAMEWORK_CODE: dict[str, dict[str, str]] = {
    "surface": {
        "react": """import { SpSurface } from '@silverpoint/react/ui/surface';

<SpSurface frame="card">A card frame</SpSurface>
<SpSurface frame="pill" tone={2}>A pill, toned 2</SpSurface>
<SpSurface frame="control" tone="selected">Selected</SpSurface>
<SpSurface as="span" frame="round" tone={4}>4</SpSurface> {/* as: the HTML tag, div by default */}""",
        "vue": """<script setup lang="ts">
import { SpSurface } from '@silverpoint/vue/ui/surface';
</script>

<template>
  <SpSurface frame="card">A card frame</SpSurface>
  <SpSurface frame="pill" :tone="2">A pill, toned 2</SpSurface>
  <SpSurface frame="control" tone="selected">Selected</SpSurface>
  <SpSurface as="span" frame="round" :tone="4">4</SpSurface>
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpSurface } from '@silverpoint/angular/ui/surface';

// [spSurface] goes on your own element: it is the root, as `as` names it in React and Vue.
@Component({
  selector: 'app-surfaces',
  imports: [SpSurface],
  template: `
    <div spSurface frame="card">A card frame</div>
    <div spSurface frame="pill" [tone]="2">A pill, toned 2</div>
    <div spSurface frame="control" tone="selected">Selected</div>
    <span spSurface frame="round" [tone]="4">4</span>
  `,
})
export class Surfaces {}""",
    },
    "glyph": {
        "react": """import { SpGlyph } from '@silverpoint/react/ui/glyph';

<SpGlyph glyph="tick" />
<SpGlyph glyph="chevronDown" />
<SpGlyph glyph="sort" /> {/* any key of UI_GLYPHS, from '@silverpoint/core/ui' */}""",
        "vue": """<script setup lang="ts">
import { SpGlyph } from '@silverpoint/vue/ui/glyph';
</script>

<template>
  <SpGlyph glyph="tick" />
  <SpGlyph glyph="chevronDown" />
  <SpGlyph glyph="sort" />
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpGlyph } from '@silverpoint/angular/ui/glyph';

@Component({
  selector: 'app-marks',
  imports: [SpGlyph],
  template: `
    <sp-glyph glyph="tick" />
    <sp-glyph glyph="chevronDown" />
    <sp-glyph glyph="sort" />
  `,
})
export class Marks {}""",
    },
    "table": {
        "react": """import { useState } from 'react';
import { uiSortRows } from '@silverpoint/core/ui';
import { SpTable } from '@silverpoint/react/ui/table';

const columns = [
  { key: 'team', title: 'Team', sortable: true },
  { key: 'region', title: 'Region' },
  { key: 'load', title: 'Load %', align: 'end', sortable: true },
  { key: 'incidents', title: 'Incidents', align: 'end', sortable: true },
] as const;

export function Teams({ teams }: { teams: Record<string, unknown>[] }) {
  const [sortKey, setSortKey] = useState('load');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const sort = (key: string) => {
    setSortOrder(key === sortKey && sortOrder === 'asc' ? 'desc' : 'asc');
    setSortKey(key);
  };
  return (
    <SpTable
      caption="On-call teams"
      columns={columns}
      data={uiSortRows(teams, sortKey, sortOrder)} // the table draws rows as given
      rowKey="team"
      sortKey={sortKey}
      sortOrder={sortOrder}
      onSort={sort}
      striped
    />
  );
}""",
        "vue": """<script setup lang="ts">
import { computed, ref } from 'vue';
import { uiSortRows } from '@silverpoint/core/ui';
import { SpTable } from '@silverpoint/vue/ui/table';

const props = defineProps<{ teams: Record<string, unknown>[] }>();
const columns = [
  { key: 'team', title: 'Team', sortable: true },
  { key: 'region', title: 'Region' },
  { key: 'load', title: 'Load %', align: 'end', sortable: true },
  { key: 'incidents', title: 'Incidents', align: 'end', sortable: true },
] as const;
const sortKey = ref('load');
const sortOrder = ref<'asc' | 'desc'>('desc');
const rows = computed(() => uiSortRows(props.teams, sortKey.value, sortOrder.value));
function sort(key: string) {
  sortOrder.value = key === sortKey.value && sortOrder.value === 'asc' ? 'desc' : 'asc';
  sortKey.value = key;
}
</script>

<template>
  <SpTable caption="On-call teams" :columns="columns" :data="rows" row-key="team"
    :sort-key="sortKey" :sort-order="sortOrder" striped @sort="sort" />
</template>""",
        "angular": """import { Component, computed, input, signal } from '@angular/core';
import { uiSortRows } from '@silverpoint/core/ui';
import { SpTable } from '@silverpoint/angular/ui/table';

@Component({
  selector: 'app-teams',
  imports: [SpTable],
  template: `
    <sp-table caption="On-call teams" [columns]="columns" [data]="rows()" rowKey="team"
      [sortKey]="sortKey()" [sortOrder]="sortOrder()" [striped]="true" (sort)="sort($event)" />
  `,
})
export class Teams {
  readonly teams = input.required<Record<string, unknown>[]>();
  protected readonly columns = [
    { key: 'team', title: 'Team', sortable: true },
    { key: 'region', title: 'Region' },
    { key: 'load', title: 'Load %', align: 'end', sortable: true },
    { key: 'incidents', title: 'Incidents', align: 'end', sortable: true },
  ] as const;
  protected readonly sortKey = signal('load');
  protected readonly sortOrder = signal<'asc' | 'desc'>('desc');
  protected readonly rows = computed(() => uiSortRows(this.teams(), this.sortKey(), this.sortOrder()));

  protected sort(key: string) {
    this.sortOrder.set(key === this.sortKey() && this.sortOrder() === 'asc' ? 'desc' : 'asc');
    this.sortKey.set(key);
  }
}""",
    },
    "pagination": {
        "react": """import { useState } from 'react';
import { SpPagination } from '@silverpoint/react/ui/pagination';

export function Pages() {
  const [page, setPage] = useState(3);
  // total: items in all pages; pageSize defaults to 10. onChange receives the page number.
  return <SpPagination total={240} current={page} onChange={setPage} showTotal />;
}""",
        "vue": """<script setup lang="ts">
import { ref } from 'vue';
import { SpPagination } from '@silverpoint/vue/ui/pagination';

const page = ref(3);
</script>

<template>
  <SpPagination v-model:current="page" :total="240" show-total />
</template>""",
        "angular": """import { Component, signal } from '@angular/core';
import { SpPagination } from '@silverpoint/angular/ui/pagination';

@Component({
  selector: 'app-pages',
  imports: [SpPagination],
  template: `<sp-pagination [(current)]="page" [total]="240" [showTotal]="true" />`,
})
export class Pages {
  protected readonly page = signal(3);
}""",
    },
    "breadcrumb": {
        "react": """import { SpBreadcrumb } from '@silverpoint/react/ui/breadcrumb';

const trail = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Composed components', href: '/docs/composed' }, // the last item is the current page
];

<SpBreadcrumb items={trail} />""",
        "vue": """<script setup lang="ts">
import { SpBreadcrumb } from '@silverpoint/vue/ui/breadcrumb';

const trail = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/components' },
  { label: 'Composed components', href: '/docs/composed' },
];
</script>

<template>
  <SpBreadcrumb :items="trail" />
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpBreadcrumb } from '@silverpoint/angular/ui/breadcrumb';

@Component({
  selector: 'app-trail',
  imports: [SpBreadcrumb],
  template: `<sp-breadcrumb [items]="trail" />`,
})
export class Trail {
  protected readonly trail = [
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/components' },
    { label: 'Composed components', href: '/docs/composed' },
  ];
}""",
    },
    "avatar": {
        "react": """import { SpAvatar, SpAvatarGroup } from '@silverpoint/react/ui/avatar';

<SpAvatar name="Ernesto Crespo" size="lg" /> {/* initials when there is no src */}
<SpAvatar name="Leonardo da Vinci" shape="square" />
<SpAvatar src="/portrait.png" name="Anna Atkins" />
<SpAvatarGroup label="Draughtsmen">
  <SpAvatar name="Albrecht Dürer" size="sm" />
  <SpAvatar name="Raphael Sanzio" size="sm" />
</SpAvatarGroup>""",
        "vue": """<script setup lang="ts">
import { SpAvatar, SpAvatarGroup } from '@silverpoint/vue/ui/avatar';
</script>

<template>
  <SpAvatar name="Ernesto Crespo" size="lg" />
  <SpAvatar name="Leonardo da Vinci" shape="square" />
  <SpAvatarGroup label="Draughtsmen">
    <SpAvatar name="Albrecht Dürer" size="sm" />
    <SpAvatar name="Raphael Sanzio" size="sm" />
  </SpAvatarGroup>
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpAvatar, SpAvatarGroup } from '@silverpoint/angular/ui/avatar';

@Component({
  selector: 'app-people',
  imports: [SpAvatar, SpAvatarGroup],
  template: `
    <sp-avatar name="Ernesto Crespo" size="lg" />
    <sp-avatar name="Leonardo da Vinci" shape="square" />
    <sp-avatar-group label="Draughtsmen">
      <sp-avatar name="Albrecht Dürer" size="sm" />
      <sp-avatar name="Raphael Sanzio" size="sm" />
    </sp-avatar-group>
  `,
})
export class People {}""",
    },
    "statistic": {
        "react": """import { SpStatistic } from '@silverpoint/react/ui/statistic';

<SpStatistic title="Revenue" value="48.2" prefix="$" suffix="k" trend="up" delta="+8.2 %" />
<SpStatistic title="Churn" value="2.1" suffix="%" trend="down" delta="−0.4 %" />""",
        "vue": """<script setup lang="ts">
import { SpStatistic } from '@silverpoint/vue/ui/statistic';
</script>

<template>
  <SpStatistic title="Revenue" value="48.2" prefix="$" suffix="k" trend="up" delta="+8.2 %" />
  <SpStatistic title="Churn" value="2.1" suffix="%" trend="down" delta="−0.4 %" />
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpStatistic } from '@silverpoint/angular/ui/statistic';

@Component({
  selector: 'app-figures',
  imports: [SpStatistic],
  template: `
    <sp-statistic title="Revenue" value="48.2" prefix="$" suffix="k" trend="up" delta="+8.2 %" />
    <sp-statistic title="Churn" value="2.1" suffix="%" trend="down" delta="−0.4 %" />
  `,
})
export class Figures {}""",
    },
    "descriptions": {
        "react": """import { SpDescriptions } from '@silverpoint/react/ui/descriptions';

const release = [
  { label: 'Ground', value: 'silverpoint' },
  { label: 'Substrate', value: 'cream' },
  { label: 'Charts', value: '60' },
];

<SpDescriptions title="The release" items={release} columns={3} />""",
        "vue": """<script setup lang="ts">
import { SpDescriptions } from '@silverpoint/vue/ui/descriptions';

const release = [
  { label: 'Ground', value: 'silverpoint' },
  { label: 'Substrate', value: 'cream' },
  { label: 'Charts', value: '60' },
];
</script>

<template>
  <SpDescriptions title="The release" :items="release" :columns="3" />
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpDescriptions } from '@silverpoint/angular/ui/descriptions';

@Component({
  selector: 'app-release',
  imports: [SpDescriptions],
  template: `<sp-descriptions title="The release" [items]="release" [columns]="3" />`,
})
export class Release {
  protected readonly release = [
    { label: 'Ground', value: 'silverpoint' },
    { label: 'Substrate', value: 'cream' },
    { label: 'Charts', value: '60' },
  ];
}""",
    },
    "timeline-list": {
        "react": """import { SpTimelineList } from '@silverpoint/react/ui/timeline-list';

const steps = [
  { title: 'Drawn', time: '09:12', description: 'The ground is prepared.', status: 'done' },
  { title: 'Reviewed', time: '11:05', description: 'Precision mode checked.', status: 'current' },
  { title: 'Published', time: '—', description: 'Waiting for the release.', status: 'pending' },
] as const;

<SpTimelineList items={steps} label="Release steps" />""",
        "vue": """<script setup lang="ts">
import { SpTimelineList } from '@silverpoint/vue/ui/timeline-list';

const steps = [
  { title: 'Drawn', time: '09:12', description: 'The ground is prepared.', status: 'done' },
  { title: 'Reviewed', time: '11:05', description: 'Precision mode checked.', status: 'current' },
  { title: 'Published', time: '—', description: 'Waiting for the release.', status: 'pending' },
] as const;
</script>

<template>
  <SpTimelineList :items="steps" label="Release steps" />
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpTimelineList } from '@silverpoint/angular/ui/timeline-list';

@Component({
  selector: 'app-steps',
  imports: [SpTimelineList],
  template: `<sp-timeline-list [items]="steps" label="Release steps" />`,
})
export class Steps {
  protected readonly steps = [
    { title: 'Drawn', time: '09:12', description: 'The ground is prepared.', status: 'done' },
    { title: 'Reviewed', time: '11:05', description: 'Precision mode checked.', status: 'current' },
    { title: 'Published', time: '—', description: 'Waiting for the release.', status: 'pending' },
  ] as const;
}""",
    },
    "collapse": {
        "react": """import { SpCollapse, SpCollapseItem } from '@silverpoint/react/ui/collapse';

<SpCollapse accordion> {/* native exclusive <details name> */}
  <SpCollapseItem title="What is silverpoint?" defaultOpen>
    <p>A fine silver line on a prepared ground.</p>
  </SpCollapseItem>
  <SpCollapseItem title="And cyanotype?">
    <p>A white line on Prussian blue; tone is its weight.</p>
  </SpCollapseItem>
</SpCollapse>""",
        "vue": """<script setup lang="ts">
import { SpCollapse, SpCollapseItem } from '@silverpoint/vue/ui/collapse';
</script>

<template>
  <SpCollapse accordion>
    <SpCollapseItem title="What is silverpoint?" default-open>
      <p>A fine silver line on a prepared ground.</p>
    </SpCollapseItem>
    <SpCollapseItem title="And cyanotype?">
      <p>A white line on Prussian blue; tone is its weight.</p>
    </SpCollapseItem>
  </SpCollapse>
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpCollapse, SpCollapseItem } from '@silverpoint/angular/ui/collapse';

@Component({
  selector: 'app-faq',
  imports: [SpCollapse, SpCollapseItem],
  template: `
    <sp-collapse [accordion]="true">
      <sp-collapse-item title="What is silverpoint?" [defaultOpen]="true">
        <p>A fine silver line on a prepared ground.</p>
      </sp-collapse-item>
      <sp-collapse-item title="And cyanotype?">
        <p>A white line on Prussian blue; tone is its weight.</p>
      </sp-collapse-item>
    </sp-collapse>
  `,
})
export class Faq {}""",
    },
    "empty": {
        "react": """import { SpButton } from '@silverpoint/react/ui/button';
import { SpEmpty } from '@silverpoint/react/ui/empty';

<SpEmpty description="No charts yet" extra={<SpButton size="sm">Add a chart</SpButton>} />""",
        "vue": """<script setup lang="ts">
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpEmpty } from '@silverpoint/vue/ui/empty';
</script>

<template>
  <SpEmpty description="No charts yet">
    <template #extra><SpButton size="sm">Add a chart</SpButton></template>
  </SpEmpty>
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpCardExtra } from '@silverpoint/angular/ui';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpEmpty } from '@silverpoint/angular/ui/empty';

@Component({
  selector: 'app-no-charts',
  imports: [SpButton, SpCardExtra, SpEmpty],
  template: `
    <sp-empty description="No charts yet">
      <ng-template spExtra><button spButton size="sm">Add a chart</button></ng-template>
    </sp-empty>
  `,
})
export class NoCharts {}""",
    },
    "result": {
        "react": """import { SpButton } from '@silverpoint/react/ui/button';
import { SpResult } from '@silverpoint/react/ui/result';

<SpResult
  status="success" // success, info, warning or error
  title="Published"
  subtitle="Every package reached npm."
  extra={<SpButton size="sm" href="/gallery">Back to the gallery</SpButton>}
/>""",
        "vue": """<script setup lang="ts">
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpResult } from '@silverpoint/vue/ui/result';
</script>

<template>
  <SpResult status="success" title="Published" subtitle="Every package reached npm.">
    <template #extra><SpButton size="sm" href="/gallery">Back to the gallery</SpButton></template>
  </SpResult>
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpCardExtra } from '@silverpoint/angular/ui';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpResult } from '@silverpoint/angular/ui/result';

@Component({
  selector: 'app-published',
  imports: [SpButton, SpCardExtra, SpResult],
  template: `
    <sp-result status="success" title="Published" subtitle="Every package reached npm.">
      <ng-template spExtra><a spButton size="sm" href="/gallery">Back to the gallery</a></ng-template>
    </sp-result>
  `,
})
export class Published {}""",
    },
    "textarea": {
        "react": """import { useState } from 'react';
import { SpTextarea } from '@silverpoint/react/ui/textarea';

export function Note() {
  const [note, setNote] = useState('Drawn in silverpoint.');
  // onChange receives the text, not the DOM event
  return <SpTextarea label="Note" value={note} onChange={setNote} rows={3} maxLength={120} showCount />;
}""",
        "vue": """<script setup lang="ts">
import { ref } from 'vue';
import { SpTextarea } from '@silverpoint/vue/ui/textarea';

const note = ref('Drawn in silverpoint.');
</script>

<template>
  <SpTextarea v-model="note" label="Note" :rows="3" :max-length="120" show-count />
</template>""",
        "angular": """import { Component, signal } from '@angular/core';
import { SpTextarea } from '@silverpoint/angular/ui/textarea';

@Component({
  selector: 'app-note',
  imports: [SpTextarea],
  // or ngModel / formControlName: SpTextarea is a ControlValueAccessor
  template: `<sp-textarea [(value)]="note" label="Note" [rows]="3" [maxLength]="120" [showCount]="true" />`,
})
export class Note {
  protected readonly note = signal('Drawn in silverpoint.');
}""",
    },
    "input-number": {
        "react": """import { useState } from 'react';
import { SpInputNumber } from '@silverpoint/react/ui/input-number';

export function Copies() {
  const [copies, setCopies] = useState<number | null>(3); // null is an empty field
  return <SpInputNumber label="Copies" value={copies} onChange={setCopies} min={1} max={10} />;
}""",
        "vue": """<script setup lang="ts">
import { ref } from 'vue';
import { SpInputNumber } from '@silverpoint/vue/ui/input-number';

const copies = ref<number | null>(3);
</script>

<template>
  <SpInputNumber v-model="copies" label="Copies" :min="1" :max="10" />
</template>""",
        "angular": """import { Component, signal } from '@angular/core';
import { SpInputNumber } from '@silverpoint/angular/ui/input-number';

@Component({
  selector: 'app-copies',
  imports: [SpInputNumber],
  template: `<sp-input-number [(value)]="copies" label="Copies" [min]="1" [max]="10" />`,
})
export class Copies {
  protected readonly copies = signal<number | null>(3);
}""",
    },
    "modal": {
        "react": """import { useState } from 'react';
import { SpButton } from '@silverpoint/react/ui/button';
import { SpModal } from '@silverpoint/react/ui/modal';

export function ApplyChanges() {
  const [open, setOpen] = useState(false);
  return (
    <SpModal
      title="Apply changes"
      description="The geometry of the data does not move."
      trigger={<button type="button">Open the modal</button>} // any element you write
      footer={<SpButton variant="primary" onClick={() => setOpen(false)}>Apply</SpButton>}
      open={open}
      onOpenChange={setOpen}
    >
      <p>Apply the new ground to every chart on the page?</p>
    </SpModal>
  );
}""",
        "vue": """<script setup lang="ts">
import { ref } from 'vue';
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpModal } from '@silverpoint/vue/ui/modal';

const open = ref(false);
</script>

<template>
  <SpModal v-model:open="open" title="Apply changes" description="The geometry of the data does not move.">
    <template #trigger><button type="button">Open the modal</button></template>
    <p>Apply the new ground to every chart on the page?</p>
    <template #footer><SpButton variant="primary" @click="open = false">Apply</SpButton></template>
  </SpModal>
</template>""",
        "angular": """import { Component, signal } from '@angular/core';
import { SpCardFooter, SpTrigger } from '@silverpoint/angular/ui';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpModal } from '@silverpoint/angular/ui/modal';

@Component({
  selector: 'app-apply-changes',
  imports: [SpButton, SpCardFooter, SpModal, SpTrigger],
  template: `
    <sp-modal [(open)]="open" title="Apply changes" description="The geometry of the data does not move.">
      <button type="button" spTrigger>Open the modal</button>
      <p>Apply the new ground to every chart on the page?</p>
      <ng-template spFooter>
        <button spButton variant="primary" (click)="open.set(false)">Apply</button>
      </ng-template>
    </sp-modal>
  `,
})
export class ApplyChanges {
  protected readonly open = signal(false);
}""",
    },
    "drawer": {
        "react": """import { SpDrawer } from '@silverpoint/react/ui/drawer';

// side: start, end (the default), top or bottom; uncontrolled here
<SpDrawer title="Settings" side="end" trigger={<button type="button">Open the drawer</button>}>
  <p>A panel that slides in from any edge, over a hatched backdrop.</p>
</SpDrawer>""",
        "vue": """<script setup lang="ts">
import { SpDrawer } from '@silverpoint/vue/ui/drawer';
</script>

<template>
  <SpDrawer title="Settings" side="end">
    <template #trigger><button type="button">Open the drawer</button></template>
    <p>A panel that slides in from any edge, over a hatched backdrop.</p>
  </SpDrawer>
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpTrigger } from '@silverpoint/angular/ui';
import { SpDrawer } from '@silverpoint/angular/ui/drawer';

@Component({
  selector: 'app-settings',
  imports: [SpDrawer, SpTrigger],
  template: `
    <sp-drawer title="Settings" side="end">
      <button type="button" spTrigger>Open the drawer</button>
      <p>A panel that slides in from any edge, over a hatched backdrop.</p>
    </sp-drawer>
  `,
})
export class Settings {}""",
    },
    "popover": {
        "react": """import { SpPopover } from '@silverpoint/react/ui/popover';

<SpPopover title="About this chart" closable width="260px" trigger={<button type="button">Details</button>}>
  <p>Anchored content, on a card frame. Escape or a click outside closes it.</p>
</SpPopover>""",
        "vue": """<script setup lang="ts">
import { SpPopover } from '@silverpoint/vue/ui/popover';
</script>

<template>
  <SpPopover title="About this chart" closable width="260px">
    <template #trigger><button type="button">Details</button></template>
    <p>Anchored content, on a card frame. Escape or a click outside closes it.</p>
  </SpPopover>
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpTrigger } from '@silverpoint/angular/ui';
import { SpPopover } from '@silverpoint/angular/ui/popover';

@Component({
  selector: 'app-about-chart',
  imports: [SpPopover, SpTrigger],
  template: `
    <sp-popover title="About this chart" [closable]="true" width="260px">
      <button type="button" spTrigger>Details</button>
      <p>Anchored content, on a card frame. Escape or a click outside closes it.</p>
    </sp-popover>
  `,
})
export class AboutChart {}""",
    },
    "tooltip": {
        "react": """import { SpTooltip } from '@silverpoint/react/ui/tooltip';

<SpTooltip
  text="Drawn on the ground's own frame" // the trigger's accessible description
  trigger={<button type="button">Hover or focus me</button>}
  side="top"
  delay={300}
/>""",
        "vue": """<script setup lang="ts">
import { SpTooltip } from '@silverpoint/vue/ui/tooltip';
</script>

<template>
  <SpTooltip text="Drawn on the ground's own frame" side="top" :delay="300">
    <template #trigger><button type="button">Hover or focus me</button></template>
  </SpTooltip>
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpTrigger } from '@silverpoint/angular/ui';
import { SpTooltip } from '@silverpoint/angular/ui/tooltip';

@Component({
  selector: 'app-hint',
  imports: [SpTooltip, SpTrigger],
  template: `
    <sp-tooltip text="Drawn on the ground's own frame" side="top" [delay]="300">
      <button type="button" spTrigger>Hover or focus me</button>
    </sp-tooltip>
  `,
})
export class Hint {}""",
    },
    "select": {
        "react": """import { useState } from 'react';
import { SpSelect } from '@silverpoint/react/ui/select';

export function Region() {
  const [region, setRegion] = useState<string | null>('North');
  // items: strings, or { key, label, disabled }; onChange receives the key
  return <SpSelect items={['North', 'East', 'South', 'West']} label="Region" value={region} onChange={setRegion} />;
}""",
        "vue": """<script setup lang="ts">
import { ref } from 'vue';
import { SpSelect } from '@silverpoint/vue/ui/select';

const region = ref<string | null>('North');
</script>

<template>
  <SpSelect v-model="region" :items="['North', 'East', 'South', 'West']" label="Region" />
</template>""",
        "angular": """import { Component, signal } from '@angular/core';
import { SpSelect } from '@silverpoint/angular/ui/select';

@Component({
  selector: 'app-region',
  imports: [SpSelect],
  template: `<sp-select [(value)]="region" [items]="regions" label="Region" />`,
})
export class Region {
  protected readonly regions = ['North', 'East', 'South', 'West'];
  protected readonly region = signal<string | null>('North');
}""",
    },
    "dropdown-menu": {
        "react": """import { SpDropdownMenu } from '@silverpoint/react/ui/dropdown-menu';

const actions = [
  { type: 'label', key: 'drawing', label: 'Drawing' },
  { key: 'duplicate', label: 'Duplicate', shortcut: '⌘D' },
  { key: 'export', label: 'Export SVG', shortcut: '⌘E' },
  { type: 'separator', key: 'sep' },
  { key: 'delete', label: 'Delete', danger: true },
] as const;

// label names the menu and is the built-in button's text; trigger={…} replaces that button
<SpDropdownMenu label="Actions" items={actions} onSelect={(key) => console.log(key)} />""",
        "vue": """<script setup lang="ts">
import { SpDropdownMenu } from '@silverpoint/vue/ui/dropdown-menu';

const actions = [
  { type: 'label', key: 'drawing', label: 'Drawing' },
  { key: 'duplicate', label: 'Duplicate', shortcut: '⌘D' },
  { key: 'export', label: 'Export SVG', shortcut: '⌘E' },
  { type: 'separator', key: 'sep' },
  { key: 'delete', label: 'Delete', danger: true },
] as const;
const run = (key: string) => console.log(key);
</script>

<template>
  <SpDropdownMenu label="Actions" :items="actions" @select="run" />
</template>""",
        "angular": """import { Component } from '@angular/core';
import { SpDropdownMenu } from '@silverpoint/angular/ui/dropdown-menu';

@Component({
  selector: 'app-actions',
  imports: [SpDropdownMenu],
  template: `<sp-dropdown-menu label="Actions" [items]="actions" (select)="run($event)" />`,
})
export class Actions {
  protected readonly actions = [
    { type: 'label', key: 'drawing', label: 'Drawing' },
    { key: 'duplicate', label: 'Duplicate', shortcut: '⌘D' },
    { key: 'export', label: 'Export SVG', shortcut: '⌘E' },
    { type: 'separator', key: 'sep' },
    { key: 'delete', label: 'Delete', danger: true },
  ] as const;

  protected run(key: string) {
    console.log(key);
  }
}""",
    },
    "toast": {
        "react": """import { useState } from 'react';
import { SpButton } from '@silverpoint/react/ui/button';
import { SpToast, SpToaster } from '@silverpoint/react/ui/toast';

export function Save() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SpButton onClick={() => setOpen(true)}>Save</SpButton>
      <SpToaster position="bottom-end">
        {/* error and warning are announced assertively; onOpenChange(false) when it closes */}
        <SpToast title="Saved" description="The drawing was saved." kind="success" open={open} onOpenChange={setOpen} />
      </SpToaster>
    </>
  );
}""",
        "vue": """<script setup lang="ts">
import { ref } from 'vue';
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpToast, SpToaster } from '@silverpoint/vue/ui/toast';

const open = ref(false);
</script>

<template>
  <SpButton @click="open = true">Save</SpButton>
  <SpToaster position="bottom-end">
    <SpToast v-model:open="open" title="Saved" description="The drawing was saved." kind="success" />
  </SpToaster>
</template>""",
        "angular": """import { Component, signal } from '@angular/core';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpToast, SpToaster } from '@silverpoint/angular/ui/toast';

@Component({
  selector: 'app-save',
  imports: [SpButton, SpToast, SpToaster],
  template: `
    <button spButton (click)="open.set(true)">Save</button>
    <sp-toaster position="bottom-end">
      <sp-toast [(open)]="open" title="Saved" description="The drawing was saved." kind="success" />
    </sp-toaster>
  `,
})
export class Save {
  protected readonly open = signal(false);
}""",
    },
    "trigger": {
        "react": """// React has no trigger component: an overlay's trigger is any element you write,
// cloned with aria-haspopup, aria-expanded and aria-controls.
import { SpButton } from '@silverpoint/react/ui/button';
import { SpPopover } from '@silverpoint/react/ui/popover';

<SpPopover title="Details" trigger={<SpButton>Details</SpButton>}>
  <p>…</p>
</SpPopover>""",
        "vue": """<!-- Vue has no trigger component: the trigger slot's first element opens the overlay. -->
<script setup lang="ts">
import { SpButton } from '@silverpoint/vue/ui/button';
import { SpPopover } from '@silverpoint/vue/ui/popover';
</script>

<template>
  <SpPopover title="Details">
    <template #trigger><SpButton>Details</SpButton></template>
    <p>…</p>
  </SpPopover>
</template>""",
        "angular": """// Angular marks the projected element that opens an overlay with the spTrigger directive.
import { Component } from '@angular/core';
import { SpTrigger } from '@silverpoint/angular/ui';
import { SpButton } from '@silverpoint/angular/ui/button';
import { SpPopover } from '@silverpoint/angular/ui/popover';

@Component({
  selector: 'app-details',
  imports: [SpButton, SpPopover, SpTrigger],
  template: `
    <sp-popover title="Details">
      <button spButton spTrigger>Details</button>
      <p>…</p>
    </sp-popover>
  `,
})
export class Details {}""",
    },
}

#: Each composed component's names in the adapters: components, subpath under ``ui/``, Angular selectors.
ADAPTER_NAMES: dict[str, tuple[str, str, str]] = {
    "surface": ("SpSurface", "surface", "[spSurface]"),
    "glyph": ("SpGlyph", "glyph", "sp-glyph"),
    "table": ("SpTable", "table", "sp-table"),
    "pagination": ("SpPagination", "pagination", "sp-pagination"),
    "breadcrumb": ("SpBreadcrumb", "breadcrumb", "sp-breadcrumb"),
    "avatar": ("SpAvatar · SpAvatarGroup", "avatar", "sp-avatar · sp-avatar-group"),
    "statistic": ("SpStatistic", "statistic", "sp-statistic"),
    "descriptions": ("SpDescriptions", "descriptions", "sp-descriptions"),
    "timeline-list": ("SpTimelineList", "timeline-list", "sp-timeline-list"),
    "collapse": ("SpCollapse · SpCollapseItem", "collapse", "sp-collapse · sp-collapse-item"),
    "empty": ("SpEmpty", "empty", "sp-empty"),
    "result": ("SpResult", "result", "sp-result"),
    "textarea": ("SpTextarea", "textarea", "sp-textarea"),
    "input-number": ("SpInputNumber", "input-number", "sp-input-number"),
    "modal": ("SpModal", "modal", "sp-modal"),
    "drawer": ("SpDrawer", "drawer", "sp-drawer"),
    "popover": ("SpPopover", "popover", "sp-popover"),
    "tooltip": ("SpTooltip", "tooltip", "sp-tooltip"),
    "select": ("SpSelect", "select", "sp-select"),
    "dropdown-menu": ("SpDropdownMenu", "dropdown-menu", "sp-dropdown-menu"),
    "toast": ("SpToast · SpToaster", "toast", "sp-toast · sp-toaster"),
    "trigger": ("— (any element)", "", "[spTrigger]"),
}


_OPEN = (
    "Open state",
    "open + onOpenChange, or defaultOpen",
    "v-model:open, or default-open",
    "[(open)], or [defaultOpen]",
    "open + on_open_change, or default_open",
)


def _trigger(react: str = "trigger={<button …/>}") -> tuple[str, str, str, str, str]:
    return (
        "Trigger",
        react,
        "#trigger slot",
        "a projected element with spTrigger",
        "trigger= (a string or sp_trigger)",
    )


#: Events, value bindings and slots of each component, as (what, React, Vue, Angular, Reflex).
EVENTS: dict[str, tuple[tuple[str, str, str, str, str], ...]] = {
    "surface": (("Content", "children", "default slot", "your element's content", "children"),),
    "table": (("Sort", "onSort(key)", "@sort", "(sort)", "on_sort"),),
    "pagination": (
        (
            "Page",
            "current + onChange(page), or defaultCurrent",
            "v-model:current",
            "[(current)]",
            "current + on_change",
        ),
    ),
    "avatar": (
        (
            "Group",
            "<SpAvatarGroup> children",
            "default slot",
            "projected sp-avatar",
            "sp_avatar_group(*avatars)",
        ),
    ),
    "collapse": (
        (
            "Items",
            "<SpCollapseItem> children",
            "default slot",
            "projected sp-collapse-item",
            "sp_collapse(*items)",
        ),
        (
            "Item open",
            "open + onToggle(open), or defaultOpen",
            "v-model:open, @toggle",
            "[(open)], (toggle)",
            "open=",
        ),
    ),
    "empty": (("Actions", "extra", "#extra slot", "<ng-template spExtra>", "children"),),
    "result": (("Actions", "extra", "#extra slot", "<ng-template spExtra>", "children"),),
    "textarea": (
        (
            "Value",
            "value + onChange(text), or defaultValue",
            "v-model",
            "[(value)], ngModel, formControl",
            "value + on_change",
        ),
    ),
    "input-number": (
        (
            "Value",
            "value + onChange(number | null), or defaultValue",
            "v-model",
            "[(value)], ngModel, formControl",
            "value + on_change",
        ),
    ),
    "modal": (_trigger(), _OPEN, ("Footer", "footer", "#footer slot", "<ng-template spFooter>", "footer=")),
    "drawer": (_trigger(), _OPEN, ("Footer", "footer", "#footer slot", "<ng-template spFooter>", "footer=")),
    "popover": (_trigger(), _OPEN),
    "tooltip": (_trigger("trigger={<button …/>} (required)"), _OPEN),
    "select": (
        (
            "Value",
            "value + onChange(key), or defaultValue",
            "v-model",
            "[(value)], ngModel, formControl",
            "value + on_change",
        ),
        _OPEN,
    ),
    "dropdown-menu": (
        ("Item chosen", "onSelect(key)", "@select", "(select)", "on_select"),
        (
            "Trigger",
            "trigger= (else a built-in button named label)",
            "#trigger slot",
            "a projected spTrigger",
            "the first argument",
        ),
        _OPEN,
    ),
    "toast": (
        _OPEN,
        ("Action", "action", "#action slot", "<ng-template spAction>", "—"),
        ("Toaster", "<SpToaster> around the toasts", "<SpToaster>", "<sp-toaster>", "sp_toaster(*toasts)"),
    ),
}


#: The 21 components 0.7 adds, in reference order, and their two families (sp_trigger is Reflex's alone).
REFERENCE: tuple[ro.Composed, ...] = tuple(i for i in ro.COMPOSED if i.slug != "trigger")
REFERENCE_GROUPS: tuple[tuple[str, str, tuple[ro.Composed, ...]], ...] = (
    ("composed", "Composed", tuple(i for i in REFERENCE if i.level == "A")),
    ("overlays", "Overlays", tuple(i for i in REFERENCE if i.level == "B")),
)


def component_name(slug: str) -> str:
    """The adapters' name of a component: SpTable, SpAvatar…"""
    return ADAPTER_NAMES[slug][0].split(" · ")[0]


assert set(FRAMEWORK_CODE) == set(ADAPTER_NAMES) == {i.slug for i in ro.COMPOSED}, (
    "every composed component has code"
)
assert {i.slug for i in REFERENCE} == set(UI_PROPS), "every 0.7 component has its props"
