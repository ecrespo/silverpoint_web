"""silverpoint web: documentation, gallery and examples of silverpoint, as a static Reflex site.

The site is frontend-only: ``enable_state=False`` compiles it without a Reflex backend, so it is
exported with ``reflex export --frontend-only`` and served as static files by Vercel. Every control
(framework tabs, the gallery's ground selectors) lives in client-side state.
"""

import reflex as rx

from .pages import charts, docs, gallery, home, project

app = rx.App(
    enable_state=False,
    stylesheets=["/silverpoint_web.css"],
    head_components=[
        rx.el.link(rel="preconnect", href="https://fonts.googleapis.com"),
        rx.el.link(rel="preconnect", href="https://fonts.gstatic.com", cross_origin=""),
        rx.el.link(
            rel="stylesheet",
            href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap",
        ),
        rx.el.meta(name="author", content="Ernesto Crespo"),
        rx.el.meta(name="theme-color", content="#ede7da"),
        rx.el.link(rel="icon", href="/favicon.svg", type="image/svg+xml"),
    ],
    html_lang="en",
)

home.register(app)
gallery.register(app)
charts.register(app)
docs.register(app)
project.register(app)
