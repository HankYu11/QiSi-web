// Every project, in the order the work index shows them: FreshToGo first, then the case studies newest first.
import { copy, type Lang } from "./copy";
import { cases, caseSlugs, moreWork } from "./cases";

export type WorkItem = {
  id: string;
  path: string;
  kind: string;
  name: string;
  nameAlt: string;
  lede: string;
  status: string;
};

export function workItems(lang: Lang): WorkItem[] {
  const w = copy[lang].work;
  return [
    { id: "freshtogo", path: w.path, kind: moreWork[lang].ftgKind, name: w.name, nameAlt: w.nameAlt, lede: w.teaser.lede, status: w.status },
    ...caseSlugs.map((s) => {
      const c = cases[s][lang];
      return { id: s, path: c.path, kind: c.card.kind, name: c.name, nameAlt: c.nameAlt, lede: c.card.lede, status: c.status };
    }),
  ];
}
