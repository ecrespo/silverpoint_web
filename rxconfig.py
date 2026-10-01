import os

import reflex as rx

# The public URL, for the sitemap. Override it with DEPLOY_URL when the Vercel domain changes.
DEPLOY_URL = os.environ.get("DEPLOY_URL", "https://silverpointweb.vercel.app")

config = rx.Config(
    app_name="silverpoint_web",
    deploy_url=DEPLOY_URL,
    show_built_with_reflex=False,
    telemetry_enabled=False,
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.RadixThemesPlugin(
            theme=rx.theme(
                appearance="light",
                accent_color="gray",
                gray_color="sand",
                radius="small",
                has_background=False,
            )
        ),
    ],
)
