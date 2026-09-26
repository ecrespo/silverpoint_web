#!/bin/bash
# Static build of the site into public/, the directory Vercel serves (see vercel.json).
# The site is frontend-only (rx.App(enable_state=False)): no backend, no API_URL.
set -e

uv sync --frozen
uv run reflex init
rm -f frontend.zip
rm -rf public
uv run reflex export --frontend-only
unzip -q frontend.zip -d public
rm -f frontend.zip
echo "Static site in public/ — preview with: python -m http.server -d public 8000"
