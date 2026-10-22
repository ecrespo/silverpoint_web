@AGENTS.md

# CLAUDE.md

Documentation site of silverpoint (Reflex, frontend-only, deployed statically on Vercel). See README.md.

- `rx.App(enable_state=False)`: no backend. Never add an `rx.State` or a backend event; interactive controls use
  `ClientStateVar` (`reflex.experimental.client_state`) or client-only events (`rx.set_clipboard`, `rx.call_script`).
- Do not use `rx.html` for markup that appears on prerendered pages: it caused React hydration error #418. Draw SVG
  with `rx.el.svg` / `rx.el.path`.
- lucide (`rx.icon`) has no brand icons; the GitHub mark is `components.ui.github_icon`.
- Everything a silverpoint release changes lives in `site_data.py`; chart examples in `examples.py`; UI component
  demos and code in `ui_examples.py` (generated from `UI_DEMOS`).
- silverpoint 0.7's palettes, composed components and timeline: Reflex demos in `reflex_only.py`, their
  React/Vue/Angular code, events and props (`ui_props_0_7.json`, from the npm 0.7.0 types) in `composed_code.py`,
  pages in `pages/reflex_docs.py` and `/components/<slug>` (`pages/components.py`, `composed_page`). Since reflex-silverpoint-react 0.7.1
  they are the npm components behind Python builders (0.8.0 wraps @silverpoint/react 0.8.0); its own releases go
  in `site_data.REFLEX_VERSIONS`.
- silverpoint 0.8 (feature-005, agent access): this site's half, T-243 and T-244, is implemented on
  `feat/agent-access`. `vercel.json` rewrites `/mcp` to `https://silverpoint-mcp.vercel.app/mcp` before the
  catch-all, which skips `/mcp`, `/agent-catalog.json` and `/llms*` (REQ-558). `agent/` holds the catalog
  `@silverpoint/mcp` ships (pinned by `agent.CATALOG_VERSION`, which must equal `site_data.LATEST`), its tool
  table and the hosted server's worked examples: refresh them with `uv run python scripts/agent_files.py fetch`
  and commit. `build_local.sh` then writes `/agent-catalog.json`, `/llms.txt` and `/llms-full.txt` into
  `public/` from that catalog only (REQ-537, REQ-564); `/docs/ai` is "Use with AI" (`pages/ai_docs.py`,
  REQ-565, tools read from the server's definitions, REQ-569). Tests: `uv run pytest` (`tests/`, REQ in each
  name). The catalog `@silverpoint/mcp@0.8.0` ships marks its Reflex names stale (reflex-silverpoint-react
  0.7.1, wrapping 0.7.0) until silverpoint takes the wrapper's own export.
- The site's controls are silverpoint UI components (`sp_tabs`, `sp_alert`, `sp_segmented`…) bound to
  `ClientStateVar` (`on_change=VAR.set_value`). Put them on a ground panel (`ui_examples.panel`) for cyanotype.
- Local build without touching `public/`: `uv run reflex export --frontend-only --zip-dest-dir <dir>`.
- Check: `uv run ruff check . && uv run ruff format --check . && uv run pytest -q && bash build_local.sh`.
- `public/` is generated (by CI on `main`); do not hand-edit it.
