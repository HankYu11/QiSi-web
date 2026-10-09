import { defineConfig } from "astro/config";
import zhBreaks from "./integrations/zh-breaks.mjs";

// Set SITE_URL at build time (e.g. https://example.com) to emit absolute canonical/hreflang URLs.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  trailingSlash: "always",
  build: { inlineStylesheets: "always" },
  compressHTML: true,
  integrations: [zhBreaks()],
});
