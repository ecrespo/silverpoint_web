@AGENTS.md

# CLAUDE.md

Documentation site of silverpoint (Reflex, frontend-only, deployed statically on Vercel). See README.md.

- `rx.App(enable_state=False)`: no backend. Never add an `rx.State` or a backend event; interactive controls use
  `ClientStateVar` (`reflex.experimental.client_state`) or client-only events (`rx.set_clipboard`, `rx.call_script`).
- Do not use `rx.html` for markup that appears on prerendered pages: it caused React hydration error #418. Draw SVG
  with `rx.el.svg` / `rx.el.path`.
- lucide (`rx.icon`) has no brand icons; the GitHub mark is `components.ui.github_icon`.
- Everything a silverpoint release changes lives in `site_data.py`; chart examples in `examples.py`.
- Check: `uv run ruff check . && uv run ruff format --check . && bash build_local.sh`.
- `public/` is generated (by CI on `main`); do not hand-edit it.
