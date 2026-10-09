"""Builds small self-hosted subsets of Noto Sans TC (the CIS brand typeface).

Fontsource ships Noto Sans TC as ~100 unicode-range slices; loading them through CSS
inlines a huge @font-face list and downloads megabytes. Instead we:
  1. collect every character used in src/ (copy, components) plus printable ASCII,
  2. instantiate each slice that contains any of them at the weights we use,
  3. subset and merge them into one woff2 per weight in public/fonts/.

Re-run after editing copy:  python3 scripts/subset-fonts.py
Requires: pip install fonttools brotli
"""
import io
import re
from pathlib import Path

from fontTools.merge import Merger
from fontTools.subset import Options, Subsetter
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent.parent
PKG = ROOT / "node_modules/@fontsource-variable/noto-sans-tc"
OUT = ROOT / "public/fonts"
WEIGHTS = (400, 700, 900)
EXTRA = "“”‘’–—…·×→←↓↑↗©®・、。，：；！？「」『』（）"

text = EXTRA + "".join(chr(c) for c in range(0x20, 0x7F))
for p in (ROOT / "src").rglob("*"):
    if p.suffix in {".ts", ".astro", ".md"}:
        text += p.read_text(encoding="utf-8")
need = {ord(c) for c in text if c.isprintable() and ord(c) >= 0x20}

css = (PKG / "wght.css").read_text()
slices = []
covered = set()
for file, rng in re.findall(r"url\(\./files/([^)]+)\).*?unicode-range:\s*([^;]+);", css, re.S):
    cps = set()
    for part in rng.split(","):
        part = part.strip().removeprefix("U+")
        if "-" in part:
            a, b = part.split("-")
            cps.update(range(int(a, 16), int(b, 16) + 1))
        elif part and "?" not in part:
            cps.add(int(part, 16))
    hit = (cps & need) - covered
    if hit:
        slices.append((file, hit))
        covered |= hit

missing = sorted(need - covered)
if missing:
    print("not in Noto Sans TC (falls back to system font):", "".join(map(chr, missing))[:80])

OUT.mkdir(parents=True, exist_ok=True)
for w in WEIGHTS:
    parts = []
    for file, hit in slices:
        f = instantiateVariableFont(TTFont(PKG / "files" / file), {"wght": w})
        opts = Options()
        opts.layout_features = ["*"]
        opts.name_IDs = ["*"]
        opts.notdef_outline = True
        sub = Subsetter(opts)
        sub.populate(unicodes=hit)
        sub.subset(f)
        buf = io.BytesIO()
        f.flavor = None
        f.save(buf)
        buf.seek(0)
        parts.append(buf)
    merged = Merger().merge(parts) if len(parts) > 1 else TTFont(parts[0])
    merged.flavor = "woff2"
    dest = OUT / f"noto-sans-tc-qisi-{w}.woff2"
    merged.save(dest)
    print(f"{dest.relative_to(ROOT)}: {len(covered)} glyphs, {dest.stat().st_size // 1024} KB")
