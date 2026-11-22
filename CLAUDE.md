@AGENTS.md

# CLAUDE.md

Documentation site of silverpoint (Reflex, frontend-only, deployed statically on Vercel). See README.md.

- `rx.App(enable_state=False)`: no backend. Never add an `rx.State` or a backend event; interactive controls use
  `rx.client_state(default, name=...)` (Reflex 0.11; `ClientStateVar.create` and `.set_value` are deprecated) or client-only events (`rx.set_clipboard`, `rx.call_script`).
- Do not use `rx.html` for markup that appears on prerendered pages: it caused React hydration error #418. Draw SVG
  with `rx.el.svg` / `rx.el.path`.
- lucide (`rx.icon`) has no brand icons; the GitHub mark is `components.ui.github_icon`.
- Everything a silverpoint release changes lives in `site_data.py`; chart examples in `examples.py`; UI component
  demos and code in `ui_examples.py` (generated from `UI_DEMOS`).
- silverpoint 0.7's palettes, composed components and timeline: Reflex demos in `reflex_only.py`, their
  React/Vue/Angular code, events and props (`ui_props_0_7.json`, from the npm 0.7.0 types) in `composed_code.py`,
  pages in `pages/reflex_docs.py` and `/components/<slug>` (`pages/components.py`, `composed_page`). Since reflex-silverpoint-react 0.7.1
  they are the npm components behind Python builders (0.11.0 wraps @silverpoint/react 0.11.0); its own releases go
  in `site_data.REFLEX_VERSIONS`.
- silverpoint 0.9 (feature-006, slide decks): `SpDeck` / `sp_deck` on `@silverpoint/marp`. The page is `/docs/decks`
  (`pages/deck_docs.py`), its decks, code and tables in `deck_examples.py`; a deck also on the home page. Keep
  `hash` off on the site's decks (the docs' anchors would be read as slides); `tests/test_decks.py` checks every
  fence against the catalog (the showcase's `pie-chart` fence is a deliberate SP026).
- silverpoint 0.8 (feature-005, agent access): this site's half, T-243 and T-244, is implemented on
  `feat/agent-access`. `vercel.json` rewrites `/mcp` to `https://silverpoint-mcp.vercel.app/mcp` before the
  catch-all, which skips `/mcp`, `/agent-catalog.json` and `/llms*` (REQ-558). `agent/` holds the catalog
  `@silverpoint/mcp` ships (pinned by `agent.CATALOG_VERSION`, which must equal `site_data.LATEST`), its tool
  table and the hosted server's worked examples: refresh them with `uv run python scripts/agent_files.py fetch`
  and commit. `build_local.sh` then writes `/agent-catalog.json`, `/llms.txt` and `/llms-full.txt` into
  `public/` from that catalog only (REQ-537, REQ-564); `/docs/ai` is "Use with AI" (`pages/ai_docs.py`,
  REQ-565, tools read from the server's definitions, REQ-569). Tests: `uv run pytest` (`tests/`, REQ in each
  name). Since `@silverpoint/mcp@0.9.2` the catalog's Reflex names are reflex-silverpoint-react's own export
  (0.11.0 since `@silverpoint/mcp@0.11.1`, not stale); `tests/test_decks.py` checks they match the installed wrapper. A
  silverpoint release with no new reflex-silverpoint-react (0.9.2, 0.10.1, 0.11.1) gets `Release.reflex=""`.
- silverpoint 0.11 (feature-007, host embedding): `/docs/embed` (`pages/embed_docs.py`, code in `embed_examples.py`)
  documents `@silverpoint/embed`. Its demo is a plain page, `assets/embed/demo.html` + `demo.js`, in a
  `sandbox="allow-scripts"` iframe (outside React, so no hydration risk), loading the standalone file vendored in
  `assets/embed/` with its `integrity.json`: on an embed release copy both from the npm tarball's `dist/` and bump
  `embed_examples.EMBED_VERSION` (`tests/test_release_0_11.py` checks the hash). The host table comes from
  `catalog["hosts"]`. A component's per-release notes are `composed_code.CHANGES` (slug -> tuple of (version, note)).
- The llms files (REQ-564) stay generated from the catalog; the two hand-written parts are `silverpoint_web/llms_embed.md`
  (what the catalog does not say about `@silverpoint/embed`) and `agent.NEW_IN` (llms.txt's "New in X.Y", one entry
  per minor: a new minor on the pin needs one). `scripts/check_mcp_latest.py` (CI: `.github/workflows/drift.yml`,
  on push and daily) fails when `agent.CATALOG_VERSION` is not npm's `dist-tags.latest` of `@silverpoint/mcp`;
  a network failure only warns.
- Tutorials: `/tutorials` (`pages/tutorials.py`) lists the series on seraph.to by level, linked and not copied; add
  an article in `tutorials.py` (number, title, summary, frameworks, date). Its search box, framework filter and
  date order are `rx.client_state` only: every card is prerendered and hidden by a condition, and the two orders
  are the two branches of one `rx.cond`. Tests: `tests/test_tutorials.py`.
- The site's controls are silverpoint UI components (`sp_tabs`, `sp_alert`, `sp_segmented`…) bound to
  `rx.client_state` (`on_change=VAR.set`). Put them on a ground panel (`ui_examples.panel`) for cyanotype.
- Vercel Web Analytics: `reflex-vercel-analytics`, `rva.install(app)` in `silverpoint_web.py`, settings in
  `vercel_analytics.toml` (`mode = "auto"`: debug script under `reflex run`, production in the export). The
  catch-all rewrite skips `/_vercel` so the script and `/_vercel/insights/*` are not served `index.html`.
  Enable it in the Vercel dashboard (Project > Analytics). Tests: `tests/test_vercel_analytics.py`.
- Local build without touching `public/`: `uv run reflex export --frontend-only --zip-dest-dir <dir>`.
- Check: `uv run ruff check . && uv run ruff format --check . && uv run pyright && uv run pytest -q && bash build_local.sh`.
  Pyright (dev group, `[tool.pyright]`) runs in CI: annotate a `**props` dict as `dict[str, Any]`.
- `public/` is generated (by CI on `main`); do not hand-edit it.
