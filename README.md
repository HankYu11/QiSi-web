# QI SI TECHNOLOGY LIMITED — 奇斯科技

Company website, live at **https://qisi.handyla.co**. Static site built with [Astro](https://astro.build): no framework JS, a few KB of vanilla scripts, CSS inlined per page.

- `/` — Traditional Chinese (zh-TW), the default · `/en/` — English
- `/work/` · `/en/work/` — work index: every project, FreshToGo first
- `/work/freshtogo/` · `/en/work/freshtogo/` — FreshToGo case study
- `/work/spin-coach/` · `/en/work/spin-coach/` — 旋轉教練 (Spin Coach), our own product still in testing, listed under "In the lab" on the work index
- `/work/wawa-house/` · `/en/work/wawa-house/` — WAWA HOUSE (fragrance shop) site and shop case study
- `/work/court-booking/` · `/en/work/court-booking/` — badminton court booking case study
- `/work/scrap-cars/` · `/en/work/scrap-cars/` — scrap-car operations case study

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
- `src/i18n/cases.ts` — wawa-house, court-booking and scrap-car case-study copy and facts (both languages), plus the cross-link labels. Sources are listed at the top of the file; clients stay anonymous.
- `src/styles/case-page.css` — the styles the case pages share (opening, facts, frames, proof band, note), scoped per page by a marker class on each article (`cp-case`, `cp-lab`, `cp-ftg`). A rule lives here only when every page it lists uses it unchanged; differences stay in the page component.
- `src/i18n/lab.ts` — copy for our own products in testing (旋轉教練); `SpinCoach.astro` is its page and `SpinHud.astro` the app's result screen redrawn in HTML from a real screenshot, so it can follow the app's redesigns.
- `src/i18n/workList.ts` — the project list (order and filter tags) used by the work index and the cross-link cards; `src/assets/workThumbs.ts` — one screen per project for those cards. To add a project: add its copy to `cases.ts`, its thumb to `workThumbs.ts`, a visual branch in `CaseStudy.astro`, the two page files and a sitemap entry.
- `src/components/` — one component per section. `Home.astro` and `CasePage.astro` assemble the two page types (`CasePage` renders `Work.astro` for FreshToGo and `CaseStudy.astro` for the other cases; `CaseCards.astro` links between them); `Effects.astro` is the site-wide motion layer (all of it off under `prefers-reduced-motion`).
- `src/assets/brand/` — official logo files from the CIS; `src/assets/ftg/` — FreshToGo screenshots and cards; `src/assets/court/`, `src/assets/scrap/`, `src/assets/shop/` — screens captured from the systems running locally with sample data (venue and shop names replaced, phone numbers masked; the shop's product photos are drawn placeholders).
- `integrations/zh-breaks.mjs` — adds `<wbr>` between Chinese words at build time so lines never break mid-word. Add phrases that must stay together to its `KEEP` list.

## Fonts

`python3 scripts/subset-fonts.py` — rerun after editing Chinese copy. Rebuilds the Noto Sans TC subsets in `public/fonts/` with only the glyphs the site uses. Requires `pip install fonttools brotli`. Fonts are SIL Open Font License.

## Deploy

Firebase Hosting site `qisi-web` in the `freshtogo-e52a1` project, served on `qisi.handyla.co`. `.github/workflows/build.yml` builds every PR to `main` as a check (no deploy); `.github/workflows/deploy.yml` deploys only when `main` changes, i.e. after a PR is merged. One-time setup:

1. `firebase hosting:sites:create qisi-web --project freshtogo-e52a1`
2. Firebase console → Hosting → `qisi-web` → Add custom domain → `qisi.handyla.co`, then add the DNS record it shows at your domain registrar.
3. Add the repo secret `FIREBASE_SERVICE_ACCOUNT` (the same service-account JSON the FreshToGo web repo uses).

Manual deploy: `npm run build && firebase deploy --only hosting:prod`.
