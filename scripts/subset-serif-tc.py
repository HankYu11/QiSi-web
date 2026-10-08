"""Builds a small Noto Serif TC subset containing only the CJK glyphs the site uses.

Fontsource ships Noto Serif TC as ~100 unicode-range slices; loading them through CSS
inlines a huge @font-face list and downloads megabytes on the zh-TW page. Instead we:
  1. collect every CJK / full-width character in src/i18n/copy.ts (+ a few extras),
  2. instantiate each slice that contains any of them at the weights we use,
  3. subset and merge them into one woff2 per weight in public/fonts/.

Re-run after editing copy:  python3 scripts/subset-serif-tc.py
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
PKG = ROOT / "node_modules/@fontsource-variable/noto-serif-tc"
OUT = ROOT / "public/fonts"
WEIGHTS = (600,)
EXTRA = "奇斯科技鮮款款"

text = (ROOT / "src/i18n/copy.ts").read_text(encoding="utf-8") + EXTRA
chars = sorted({c for c in text if ord(c) >= 0x2E80})
need = {ord(c) for c in chars}

# Map each slice file to the code points it covers (from the package's unicode-range CSS).
css = (PKG / "wght.css").read_text()
slices = []
for file, rng in re.findall(r"url\(\./files/([^)]+)\).*?unicode-range:\s*([^;]+);", css, re.S):
    cps = set()
    for part in rng.split(","):
        part = part.strip().removeprefix("U+")
        if "-" in part:
            a, b = part.split("-")
            cps.update(range(int(a, 16), int(b, 16) + 1))
        elif part and "?" not in part:
            cps.add(int(part, 16))
    hit = cps & need
    if hit:
        slices.append((file, hit))

missing = need - set().union(*(h for _, h in slices))
assert not missing, f"no slice covers: {''.join(map(chr, missing))}"

OUT.mkdir(parents=True, exist_ok=True)
for w in WEIGHTS:
    parts = []
    for file, hit in slices:
        f = TTFont(PKG / "files" / file)
        f = instantiateVariableFont(f, {"wght": w})
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
    merged = Merger().merge(parts)
    merged.flavor = "woff2"
    dest = OUT / f"noto-serif-tc-qisi-{w}.woff2"
    merged.save(dest)
    print(f"{dest.relative_to(ROOT)}: {len(chars)} chars, {dest.stat().st_size // 1024} KB")

