import type { APIRoute } from "astro";

// Each page in both languages, with hreflang alternates.
const PAGES = [
  { zh: "/", en: "/en/" },
  { zh: "/work/freshtogo/", en: "/en/work/freshtogo/" },
];

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const alt = (p: { zh: string; en: string }) =>
    `<xhtml:link rel="alternate" hreflang="zh-Hant-TW" href="${abs(p.zh)}"/>` +
    `<xhtml:link rel="alternate" hreflang="en" href="${abs(p.en)}"/>`;
  const urls = PAGES.flatMap((p) => [p.zh, p.en].map((loc) => `<url><loc>${abs(loc)}</loc>${alt(p)}</url>`));
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">` +
    urls.join("") +
    `</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
