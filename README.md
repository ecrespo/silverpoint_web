# silverpoint web

The documentation site of **[silverpoint](https://github.com/ecrespo/silverpoint)**: charts and UI components
for React, Vue and Angular whose visual language is historical drawing technique (Renaissance silverpoint and cyanotype).

The site is written in Python with [Reflex](https://reflex.dev) and draws every chart and component live with
[reflex-silverpoint-react](https://github.com/ecrespo/reflex-silverpoint-react) 0.3, the Reflex component of
`@silverpoint/react`. The site's own controls (code tabs, callouts, the gallery's controls, buttons, tags,
the release timeline) are silverpoint's UI components, bound to client-side state. It is **frontend-only**: `rx.App(enable_state=False)` compiles it without a backend,
and it is deployed as static files on Vercel.

## What is on it

| Route | |
|---|---|
| `/` | Landing page: live charts, the UI components, the four frameworks, features, author |
| `/docs` … | Overview, installation, a guide per framework (`/docs/react`, `/docs/vue`, `/docs/angular`, `/docs/reflex`) and the concepts (grounds, precision, common props, interaction, export, dashboards, UI components, SSR, accessibility, Tailwind) |
| `/gallery` | The 33 charts and 17 UI components, live, with ground / substrate / mode / hatch-fill / size controls (client-side state) |
| `/components`, `/components/<slug>` | The UI component reference: one page per component with every declared state live on both grounds, its code in React, Vue, Angular and Reflex, imports, value binding and props |
| `/charts`, `/charts/<slug>` | The chart reference: one page per chart with a live example, its code in React, Vue, Angular and Reflex, imports, props and events |
| `/packages` | The seven npm packages and the PyPI component |
| `/versions` | Every release, newest first |
| `/support` | How to report a bug, with pre-filled GitHub issue forms |
| `/about` | Author (Ernesto Crespo, [seraph.to](https://www.seraph.to/)) and license |

The page structure follows the documentation sites of multi-framework chart libraries (AG Charts above
all): a top bar with a version menu, a three-column docs layout (sidebar, article, "On this page"), a
page-wide framework switch for every code example, a live gallery, and a per-chart API reference.

## Develop

```bash
uv sync
uv run reflex run            # http://localhost:3000
uv run ruff check . && uv run ruff format --check .
```

## Build and deploy (Vercel)

```bash
bash build_local.sh          # uv sync --frozen + reflex export --frontend-only → public/
python -m http.server -d public 8000
```

Vercel serves `public/` (`vercel.json`: no build step, `cleanUrls`, SPA fallback). As in
`reflex_resume`, `.github/workflows/static_build.yml` exports the site on every push to `main` and
commits `public/` ("Update static build [skip ci]"), which Vercel then deploys. Import the repository in
Vercel with the framework preset **Other** and no build command. Set `DEPLOY_URL` if the domain is not
`https://silverpoint-web.vercel.app` (it feeds the sitemap).

## When silverpoint releases a new version

1. Add the release at the top of `VERSIONS` in `silverpoint_web/site_data.py` (it becomes `LATEST`).
2. Bump `reflex-silverpoint-react` in `pyproject.toml` if it wraps the new version, then `uv lock`.
3. New chart? Add its example to `EXAMPLES` in `silverpoint_web/examples.py` (an assertion fails until
   every chart in the catalog has one). Pages, gallery, sidebar and counts come from
   `reflex_silverpoint_react.CHARTS`.
4. New UI component? Nothing to write: its pages, states and code come from
   `reflex_silverpoint_react.UI_COMPONENTS` and `UI_DEMOS` (`silverpoint_web/ui_examples.py`).

## Layout

```
silverpoint_web/
  silverpoint_web.py   the app (enable_state=False) and its routes
  site_data.py         links, packages, frameworks, versions
  examples.py          one example per chart → live props + React / Vue / Angular / Reflex code
  datasets.py          the silverpoint demo datasets (from reflex-silverpoint-react's demo)
  components/          layout (header, sidebar, TOC, footer) and UI blocks (code, tabs, tables)
  pages/               home, gallery, charts, docs, project (packages, versions, support, about)
assets/silverpoint_web.css   the paper style: cream substrate, graphite ink, EB Garamond, hatching
```

## License

MIT © 2026 [Ernesto Crespo](https://www.seraph.to/). silverpoint is MIT; EB Garamond is under the SIL
Open Font License.
