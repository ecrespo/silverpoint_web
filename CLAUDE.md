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
- The site's controls are silverpoint UI components (`sp_tabs`, `sp_alert`, `sp_segmented`…) bound to
  `ClientStateVar` (`on_change=VAR.set_value`). Put them on a ground panel (`ui_examples.panel`) for cyanotype.
- Local build without touching `public/`: `uv run reflex export --frontend-only --zip-dest-dir <dir>`.
- Check: `uv run ruff check . && uv run ruff format --check . && bash build_local.sh`.
- `public/` is generated (by CI on `main`); do not hand-edit it.
