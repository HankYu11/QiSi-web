import { defineConfig } from "astro/config";
import zhBreaks from "./integrations/zh-breaks.mjs";

// Production address. Canonical, hreflang, og:url and the sitemap are built from it;
// override with SITE_URL for a staging host.
export default defineConfig({
  site: process.env.SITE_URL || "https://qisi.handyla.co",
  trailingSlash: "always",
  build: { inlineStylesheets: "always" },
  compressHTML: true,
  integrations: [zhBreaks()],
});
