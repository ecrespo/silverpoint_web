"""silverpoint 0.11.2 on the site: the twelve host integrations are released (REQ-661), each with a guide."""

import json
import re

from silverpoint_web import agent
from silverpoint_web import host_examples as hx
from silverpoint_web import site_data as sd
from silverpoint_web.components.layout import DOCS_NAV
from silverpoint_web.pages import host_docs

CATALOG = agent.load_catalog()
NAV_HREFS = [href for _, links in DOCS_NAV for href, _ in links]


def test_req_661_every_catalog_host_is_released_and_has_a_guide():
    assert CATALOG["version"] == sd.LATEST.version == "0.11.2"
    for host in CATALOG["hosts"]:
        assert host["status"] == "released", host["id"]
        assert hx.page_for(host["id"]), host["id"]


def test_host_pages_document_catalog_hosts_only_once():
    ids = [i for h in hx.HOSTS for i in h.catalog_ids] + list(hx.PYTHON_IDS)
    assert sorted(ids) == sorted(h["id"] for h in CATALOG["hosts"])
    assert len({h.slug for h in hx.HOSTS}) == len(hx.HOSTS)


def test_host_pages_are_in_the_sidebar():
    for host in hx.HOSTS:
        assert hx.route(host) in NAV_HREFS, host.slug
    assert "/docs/python" in NAV_HREFS


def test_host_blocks_render_and_their_json_parses():
    for host in hx.HOSTS:
        assert host.sections, host.slug
        for section in host.sections:
            for b in section.blocks:
                host_docs.block(b)
                if b[0] == "code" and b[2] == "json":
                    json.loads(b[1])


def test_inline_markup_keeps_every_character_of_plain_text():
    parts = host_docs.inline("plain `code` and **bold** then *em* and [a](https://x.y) end")
    assert parts[0] == "plain " and parts[-1] == " end"
    assert len(parts) == 9


def test_examples_name_catalog_charts():
    slugs = {chart["slug"] for chart in CATALOG["charts"]}
    for host in hx.HOSTS:
        for section in host.sections:
            for b in section.blocks:
                if b[0] == "code":
                    for slug in re.findall(r"['\"=]([a-z]+(?:-[a-z]+)*-chart)['\"&]", b[1]):
                        assert slug in slugs, (host.slug, slug)


def test_every_docs_nav_group_is_in_the_sidebar():
    from silverpoint_web.components.layout import sidebar

    rendered = str(sidebar("/docs"))
    for title, _ in DOCS_NAV:
        assert title in rendered, title


def test_n8n_demo_video_is_web_ready_and_captioned():
    video = hx.N8N_VIDEO
    assert any(b == ("video", video) for s in hx.N8N.sections for b in s.blocks)
    mp4 = video.path(".mp4").read_bytes()
    assert len(mp4) < 8 * 1024 * 1024  # public/ is committed too: keep it small
    assert mp4.find(b"moov") < mp4.find(b"mdat")  # faststart: plays before it is fully downloaded
    assert video.path(".jpg").stat().st_size > 0
    vtt = video.path(".en.vtt").read_text()
    assert vtt.startswith("WEBVTT")
    cues = video.transcript()
    assert len(cues) == 15
    assert cues[0] == (
        "0:00",
        "This chart is served by an n8n workflow. Let's build it, starting from an empty canvas.",
    )
    assert "n8n-nodes-silverpoint" in vtt


def test_video_player_is_client_only_so_it_cannot_break_hydration():
    from reflex.components.component import NoSSRComponent
    from reflex_react_player.react_player import ReactPlayer

    assert issubclass(ReactPlayer, NoSSRComponent)
