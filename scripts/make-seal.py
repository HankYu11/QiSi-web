"""Prints the 奇斯 seal glyph paths from Noto Serif TC outlines; src/components/seal-glyphs.ts holds the result."""
import io, sys
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

SRC = "node_modules/@fontsource-variable/noto-serif-tc/files/noto-serif-tc-120-wght-normal.woff2"
font = TTFont(SRC)
font = instantiateVariableFont(font, {"wght": int(sys.argv[1]) if len(sys.argv) > 1 else 800})
gs = font.getGlyphSet()
cmap = font.getBestCmap()

W, H = 100, 180          # vertical seal, 奇 over 斯
PAD, CELL = 13, 77       # inner padding / per-glyph cell height
paths = []
for i, ch in enumerate("奇斯"):
    g = gs[cmap[ord(ch)]]
    bp = BoundsPen(gs); g.draw(bp)
    x0, y0, x1, y1 = bp.bounds
    s = min((W - 2 * PAD) / (x1 - x0), CELL / (y1 - y0))
    gw, gh = (x1 - x0) * s, (y1 - y0) * s
    ox = (W - gw) / 2
    oy = PAD + i * (CELL + 1) + (CELL - gh) / 2
    # font y-up -> svg y-down
    t = (s, 0, 0, -s, ox - x0 * s, oy + y1 * s)
    pen = SVGPathPen(gs, ntos=lambda v: f"{v:.1f}".rstrip("0").rstrip("."))
    g.draw(TransformPen(pen, t))
    paths.append(pen.getCommands())
print("\n".join(paths))
