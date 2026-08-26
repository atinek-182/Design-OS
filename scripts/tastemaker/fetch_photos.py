#!/usr/bin/env python3
"""
Fetch real photography — keyless and attribution-free — from Openverse.
Hardened with SSRF protection, path traversal defenses, and Windows UTF-8 safety.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.parse
import urllib.request

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32" and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _netguard import urlopen_checked, BlockedURLError  # noqa: E402

OPENVERSE = "https://api.openverse.org/v1/images/"
PIXABAY = "https://pixabay.com/api/"


def sanitize_slug(query: str) -> str:
    """Sanitize query to safe alphanumeric filename slug to prevent path traversal."""
    cleaned = re.sub(r"[^a-zA-Z0-9_-]", "-", query.strip().lower())
    cleaned = re.sub(r"-+", "-", cleaned).strip("-")
    return cleaned or "photo"


def http_json(url: str):
    """Fetch JSON with SSRF guard."""
    with urlopen_checked(url, timeout=25, allow_external_cdns=False) as resp:
        return json.loads(resp.read().decode())


def http_bytes(url: str):
    """Fetch bytes with SSRF guard and external CDN support."""
    with urlopen_checked(url, timeout=45, allow_external_cdns=True) as resp:
        ctype = resp.headers.get("Content-Type", "")
        data = resp.read()
        return data, ctype


def image_ext(data: bytes):
    """Verify magic bytes to determine file format."""
    if data[:3] == b"\xff\xd8\xff":
        return ".jpg"
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return ".png"
    if data[:4] == b"RIFF" and data[8:12] == b"WEBP":
        return ".webp"
    if data[:6] in (b"GIF87a", b"GIF89a"):
        return ".gif"
    return None


def download_photo(result: dict):
    """Try full-res source URL first with guarded CDN egress, falling back to thumbnail proxy."""
    src = result.get("url")
    if src:
        try:
            data, _ = http_bytes(src)
            ext = image_ext(data)
            if ext:
                return data, ext
        except Exception:
            pass
    # Fallback to Openverse thumbnail proxy
    thumb = f"{OPENVERSE}{result.get('id', '')}/thumb/"
    try:
        data, _ = http_bytes(thumb)
        ext = image_ext(data)
        if ext:
            return data, ext
    except Exception:
        pass
    return None, None


def _broadening_queries(query: str):
    words = query.split()
    seen = set()
    for start in range(0, len(words)):
        candidate = " ".join(words[start:])
        if candidate and candidate not in seen:
            seen.add(candidate)
            yield candidate


def _openverse_search(query: str, page_size: int):
    params = {
        "q": query,
        "license": "cc0,pdm",
        "size": "large",
        "page_size": page_size,
        "mature": "false",
    }
    url = f"{OPENVERSE}?{urllib.parse.urlencode(params)}"
    return http_json(url).get("results", [])


def fetch_openverse(query: str, count: int, out: str):
    page_size = max(count * 3, 6)
    results = []
    try:
        for candidate in _broadening_queries(query):
            results = _openverse_search(candidate, page_size)
            if results:
                if candidate != query:
                    print(f"(broadened '{query}' → '{candidate}' to find CC0 matches)")
                break
    except Exception as e:
        print(f"Openverse request failed: {e}", file=sys.stderr)
        return []

    if not results:
        print(
            f"No CC0/public-domain results for '{query}' even after broadening.",
            file=sys.stderr,
        )
        return []

    os.makedirs(out, exist_ok=True)
    out_abs = os.path.abspath(out)
    saved = []
    slug = sanitize_slug(query)

    for r in results:
        if len(saved) >= count:
            break
        img, ext = download_photo(r)
        if img is None:
            continue
        filename = f"{slug}-{len(saved) + 1}{ext}"
        dest = os.path.abspath(os.path.join(out_abs, filename))
        if not dest.startswith(out_abs):
            raise ValueError(f"Path traversal detected: {filename}")
        with open(dest, "wb") as f:
            f.write(img)
        saved.append(
            {
                "file": filename,
                "title": r.get("title") or "",
                "creator": r.get("creator") or "Unknown",
                "source": r.get("source") or "",
                "license": f"{r.get('license', '')} {r.get('license_version', '')}".strip(),
                "openverse_url": r.get("foreign_landing_url")
                or r.get("detail_url")
                or "",
            }
        )
        print(f"[ok] {dest}")
    return saved


def fetch_pixabay(query: str, count: int, out: str):
    key = os.environ.get("PIXABAY_API_KEY")
    if not key:
        print(
            "PIXABAY_API_KEY not set. Get a free key at https://pixabay.com/api/docs/, "
            "or use keyless Openverse instead.",
            file=sys.stderr,
        )
        return []
    params = {
        "key": key,
        "q": query,
        "image_type": "photo",
        "safesearch": "true",
        "per_page": max(3, count),
    }
    try:
        data = http_json(f"{PIXABAY}?{urllib.parse.urlencode(params)}")
    except Exception as e:
        print(f"Pixabay request failed: {e}", file=sys.stderr)
        return []
    hits = data.get("hits", [])
    os.makedirs(out, exist_ok=True)
    out_abs = os.path.abspath(out)
    saved = []
    slug = sanitize_slug(query)
    for hit in hits[:count]:
        img_url = hit.get("largeImageURL") or hit.get("webformatURL")
        try:
            img, ctype = http_bytes(img_url)
        except Exception as e:
            print(f"[fail] {img_url} — {e}", file=sys.stderr)
            continue
        filename = f"{slug}-{len(saved) + 1}.jpg"
        dest = os.path.abspath(os.path.join(out_abs, filename))
        if not dest.startswith(out_abs):
            raise ValueError(f"Path traversal detected: {filename}")
        with open(dest, "wb") as f:
            f.write(img)
        saved.append(
            {
                "file": filename,
                "title": hit.get("tags", ""),
                "creator": hit.get("user", "Unknown"),
                "source": "pixabay",
                "license": "Pixabay Content License (no attribution required)",
                "openverse_url": hit.get("pageURL", ""),
            }
        )
        print(f"[ok] {dest}")
    return saved


def write_credits(saved: list, out: str, fmt: str = "comment"):
    if not saved:
        return
    lines = [
        "Photo credits — voluntary courtesy, NOT a license requirement.",
        "All images below are CC0 / Public Domain / attribution-free.",
    ]
    for item in saved:
        lines.append(
            f"- {item['file']}: '{item['title']}' by {item['creator']} ({item['source']}) — {item['license']} — {item['openverse_url']}"
        )
    credits_text = "\n".join(lines)
    dest = os.path.join(out, "CREDITS.txt")
    with open(dest, "w", encoding="utf-8") as f:
        f.write(credits_text + "\n")


def main():
    parser = argparse.ArgumentParser(description="Fetch CC0 photography from Openverse.")
    parser.add_argument("query", help="Search query")
    parser.add_argument("--count", type=int, default=3, help="Number of photos to fetch")
    parser.add_argument("--out", default="design/assets/photos", help="Output directory")
    parser.add_argument(
        "--source", choices=["openverse", "pixabay"], default="openverse"
    )
    parser.add_argument(
        "--credits-format", choices=["comment", "json", "none"], default="comment"
    )
    args = parser.parse_args()

    if args.source == "pixabay":
        saved = fetch_pixabay(args.query, args.count, args.out)
    else:
        saved = fetch_openverse(args.query, args.count, args.out)

    if saved and args.credits_format != "none":
        write_credits(saved, args.out, args.credits_format)


if __name__ == "__main__":
    main()
