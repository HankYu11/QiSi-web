// One screen per project for the work cards.
import ftgThumb from "./ftg/web-home-hero.png";
import courtThumb from "./court/admin-schedule.png";
import scrapThumb from "./scrap/schedule.png";
import shopThumb from "./shop/storefront.png";

export const workThumbs: Record<string, ImageMetadata> = {
  freshtogo: ftgThumb,
  "fragrance-shop": shopThumb,
  "court-booking": courtThumb,
  "scrap-cars": scrapThumb,
};
