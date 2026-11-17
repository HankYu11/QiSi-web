// Every project, in the order the work index shows them: FreshToGo first, then the case studies newest first.
import { copy, type Lang } from "./copy";
import { cases, caseSlugs, moreWork } from "./cases";

export type WorkTag = "app" | "web" | "line" | "admin";
export type WorkItem = {
  id: string;
  path: string;
  kind: string;
  name: string;
  nameAlt: string;
  lede: string;
  status: string;
  tags: WorkTag[];
};

const TAGS: Record<string, WorkTag[]> = {
  freshtogo: ["app", "web", "admin"],
  "fragrance-shop": ["web", "line", "admin"],
  "court-booking": ["web", "line", "admin"],
  "scrap-cars": ["line", "admin"],
};

export function workItems(lang: Lang): WorkItem[] {
  const w = copy[lang].work;
  return [
    { id: "freshtogo", path: w.path, kind: moreWork[lang].ftgKind, name: w.name, nameAlt: w.nameAlt, lede: w.teaser.lede, status: w.status, tags: TAGS.freshtogo },
    ...caseSlugs.map((s) => {
      const c = cases[s][lang];
      return { id: s, path: c.path, kind: c.card.kind, name: c.name, nameAlt: c.nameAlt, lede: c.card.lede, status: c.status, tags: TAGS[s] };
    }),
  ];
}
