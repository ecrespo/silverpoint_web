"""Host embedding (silverpoint 0.11, feature-007): ``@silverpoint/embed``'s code for /docs/embed.

The code follows the package's README at 0.11.2. The live demo is ``assets/embed/demo.html``, a plain
page in a sandboxed frame that loads the standalone file this site serves from ``assets/embed/``
(``EMBED_VERSION``, checked against ``integrity.json`` by ``tests/test_release_0_11.py``).
"""

import json
from pathlib import Path

#: The @silverpoint/embed release whose standalone file is in assets/embed/.
EMBED_VERSION = "0.11.2"
STANDALONE_FILE = "silverpoint-embed.full.js"
DEMO_URL = "/embed/demo.html"
ASSETS = Path(__file__).resolve().parent.parent / "assets" / "embed"
#: SHA-384 per standalone file, as the package ships it (dist/integrity.json).
INTEGRITY: dict[str, str] = json.loads((ASSETS / "integrity.json").read_text())

SPEC = """{ "chart": "bar-chart",
  "data": [{ "team": "A", "wins": 12 }, { "team": "B", "wins": 9 }],
  "props": { "xKey": "team", "valueKey": "wins", "title": "Wins" },
  "width": 480, "ground": "silverpoint", "substrate": "cream", "mode": "ink", "palette": "sepia" }"""

#: The spec's own fields (everything else goes in ``props``).
SPEC_FIELDS: tuple[tuple[str, str, str], ...] = (
    ("chart", "string, required", "The chart's slug: one of the 60 (bar-chart, donut-chart…)."),
    ("data", "array", "The rows; without it the chart draws its demo data."),
    (
        "props",
        "object",
        "The chart's own props and the common view props (title, badge, dataTable, seed, hatchFill…).",
    ),
    ("width / height", "number", "160..1600 × 90..1200."),
    ("ground / substrate", "string", "silverpoint (cream, green, blue, ochre) or cyanotype (prussian)."),
    ("mode", "'ink' | 'precision'", "Ink by default."),
    ("palette", "string | object", "A preset name (sepia…) or a palette object."),
)

PAGE = f"""<script src="/vendor/silverpoint-embed.full.js"
        integrity="{INTEGRITY[STANDALONE_FILE]}"
        crossorigin="anonymous"></script>

<silverpoint-chart>
  <script type="application/json">
    {{ "chart": "donut-chart", "props": {{ "title": "Budget" }} }}
  </script>
</silverpoint-chart>

<!-- or a box the script mounts once the page is parsed -->
<div data-sp-embed>
  <script type="application/json">{{ "chart": "line-chart", "width": 480 }}</script>
</div>"""

INSTALL = """npm install @silverpoint/embed
# the standalone files are in node_modules/@silverpoint/embed/dist/:
cp node_modules/@silverpoint/embed/dist/silverpoint-embed.full.js public/vendor/
cp node_modules/@silverpoint/embed/dist/integrity.json public/vendor/"""

FILES: tuple[tuple[str, str, str], ...] = (
    ("silverpoint-embed.js / .mjs", "The script (global Silverpoint) / the ES module", "140 kB"),
    ("silverpoint-embed.full.js / .full.mjs", "The same with EB Garamond's three cuts inlined", "220 kB"),
)

CLIENT = """import { mount, hostAppearance } from '@silverpoint/embed/client';

const chart = mount(document.querySelector('#hits'), {
  chart: 'line-chart',
  data: rows,
  props: { xKey: 'hour', valueKey: 'hits', title: 'Hits per hour' },
}, {
  // the host's theme, under the spec's own fields
  appearance: hostAppearance({ background: '#0b2a4a' }),
  onActiveChange: (item) => console.log(item?.datum, item?.value),
  onSelect: (item) => console.log('selected', item.datum),
});

chart.update({ chart: 'line-chart', data: newRows });
const svg = chart.toSVGString({ standalone: true }); // the ground's stylesheet inside
chart.destroy();

// or listen to the bubbling events of every chart on the page
document.addEventListener('sp-activechange', (event) => console.log(event.detail));"""

SERVER = """import { renderToHTML, renderToSVG, validateSpec } from '@silverpoint/embed';

const checked = validateSpec(input);          // why a spec cannot render, before rendering it
if (!checked.ok) throw new Error(checked.error.message);

const svg = renderToSVG({ chart: 'line-chart', props: { title: 'Hits' } });
if (svg.ok) writeFileSync('hits.svg', svg.value.svg);   // the MCP server's render_chart

// a whole document, complete with no script; `interactive` adds the spec for a client to adopt
const page = renderToHTML({ chart: 'line-chart' }, { as: 'document' });"""

HOSTS = """import { HOST_CATALOG, specFromTable } from '@silverpoint/embed/hosts';

const spec = specFromTable({
  chart: 'heatmap-chart',
  table: { rows: [{ day: 'Mon', hour: '09', load: 12 }, { day: 'Mon', hour: '10', load: 34 }] },
  roles: { row: 'day', column: 'hour', value: 'load' },
});"""

CONFORMANCE = """import { conformance } from '@silverpoint/embed/conformance';
import { renderToSVG } from '@silverpoint/embed';

const { passed, failed } = await conformance((spec) => {
  const result = renderToSVG(spec);
  return result.ok ? result.value.svg : '';
});"""

GENERATE_HTML = """{ "name": "generate_code",
  "arguments": { "target": { "chart": "donut-chart" }, "framework": "html" } }"""
