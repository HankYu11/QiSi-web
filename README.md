# QI SI TECHNOLOGY LIMITED — 奇斯科技

Company website, live at **https://qisi.handyla.co**. Static site built with [Astro](https://astro.build): no framework JS, a few KB of vanilla scripts, CSS inlined per page.

- `/` — Traditional Chinese (zh-TW), the default · `/en/` — English
- `/work/freshtogo/` · `/en/work/freshtogo/` — FreshToGo case study

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
```

Canonical, hreflang, og:url and `sitemap.xml` use `https://qisi.handyla.co` (set in `astro.config.mjs`). Override with `SITE_URL=https://… npm run build` for a staging host.

## Where things live

- `src/i18n/copy.ts` — home and contact copy, both languages, same shape. `*word*` renders as emphasis, `|` as a manual heading break.
- `src/i18n/work.ts` — FreshToGo case-study copy and facts.
- `src/components/` — one component per section. `Home.astro` and `CasePage.astro` assemble the two page types; `Effects.astro` is the site-wide motion layer (all of it off under `prefers-reduced-motion`).
- `src/assets/brand/` — official logo files from the CIS; `src/assets/ftg/` — FreshToGo screenshots and cards.
- `integrations/zh-breaks.mjs` — adds `<wbr>` between Chinese words at build time so lines never break mid-word. Add phrases that must stay together to its `KEEP` list.

## Fonts

`python3 scripts/subset-fonts.py` — rerun after editing Chinese copy. Rebuilds the Noto Sans TC subsets in `public/fonts/` with only the glyphs the site uses. Requires `pip install fonttools brotli`. Fonts are SIL Open Font License.

## Deploy

Firebase Hosting site `qisi-web` in the `freshtogo-e52a1` project, served on `qisi.handyla.co`. `.github/workflows/deploy.yml` builds every PR to `main` and deploys when `main` changes. One-time setup:

1. `firebase hosting:sites:create qisi-web --project freshtogo-e52a1`
2. Firebase console → Hosting → `qisi-web` → Add custom domain → `qisi.handyla.co`, then add the DNS record it shows at your domain registrar.
3. Add the repo secret `FIREBASE_SERVICE_ACCOUNT` (the same service-account JSON the FreshToGo web repo uses).

Manual deploy: `npm run build && firebase deploy --only hosting:prod`.
