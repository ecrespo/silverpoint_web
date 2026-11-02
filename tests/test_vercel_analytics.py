"""Vercel Web Analytics through reflex-vercel-analytics: config, mounting and routing."""

import json
import re
from pathlib import Path

import reflex_vercel_analytics as rva

ROOT = Path(__file__).resolve().parents[1]


def test_config_file_loads_and_is_enabled():
    config = rva.load_config(ROOT / "vercel_analytics.toml")
    assert config.enabled is True
    assert config.mode == "auto"
    assert config.track_page_views is True


def test_auto_mode_sends_only_from_the_exported_site():
    config = rva.load_config(ROOT / "vercel_analytics.toml")
    assert config.effective_mode(prod=True) == "production"
    assert config.effective_mode(prod=False) == "development"


def test_component_is_mounted_once_around_every_page():
    from silverpoint_web.silverpoint_web import app

    assert [name for _, name in app.extra_app_wraps].count("VercelAnalytics") == 1


def test_catch_all_rewrite_leaves_the_vercel_insights_paths_alone():
    catch_all = json.loads((ROOT / "vercel.json").read_text())["rewrites"][-1]["source"]
    pattern = re.compile(catch_all + "$")
    for path in ("/_vercel/insights/script.js", "/_vercel/insights/view", "/_vercel/insights/event"):
        assert not pattern.match(path), path
