import { defineConfig } from "astro/config";

// Set SITE_URL at build time (e.g. https://example.com) to emit absolute canonical/hreflang URLs.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  trailingSlash: "always",
  build: { inlineStylesheets: "always" },
  compressHTML: true,
});
