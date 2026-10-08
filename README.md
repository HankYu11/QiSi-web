# QI SI TECHNOLOGY LIMITED — 奇斯科技

Company website. Static site built with [Astro](https://astro.build): zero framework JS, ~4 KB of vanilla scripts, CSS inlined per page.

- `/` — Traditional Chinese (zh-TW), the default
- `/en/` — English

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
```

Set `SITE_URL` (e.g. `SITE_URL=https://example.com npm run build`) to emit absolute canonical / hreflang / og:image URLs.

## Where things live

- `src/i18n/copy.ts` — all copy, both languages, same shape. `*word*` renders as emphasis.
- `src/components/` — one component per section; `Defs.astro` holds the seal artwork and SVG filters.
- `src/styles/global.css` — design tokens (paper, ink, seal vermilion), type, utilities.

## Generated assets (re-run after changing their inputs)

- `python3 scripts/subset-serif-tc.py` — after editing Chinese copy. Rebuilds `public/fonts/noto-serif-tc-qisi-600.woff2`, a subset of Noto Serif TC containing only the glyphs the site uses (~83 KB instead of megabytes). Requires `pip install fonttools brotli`.
- `python3 scripts/make-seal.py > …` — the 奇斯 seal glyph outlines in `src/components/seal-glyphs.ts`.

Fonts: Fraunces, Instrument Sans, JetBrains Mono, Noto Serif TC (all SIL Open Font License). Chinese body text uses the reader's system font (PingFang TC / Microsoft JhengHei / Noto Sans CJK TC).
