// Build step: Chinese line breaking at word boundaries.
// Browsers break CJK text between any two characters, which splits words (產|品, 此|刻). On zh pages we set
// `word-break: keep-all` (see global.css), so lines may only break at spaces, punctuation and <wbr>.
// This step segments every Chinese text node into words with ICU (Intl.Segmenter), glues back a small
// dictionary of phrases that must never split, and inserts <wbr> between words.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const KEEP = [
  "奇斯科技", "奇斯", "鮮款款", "鮮款包", "此刻此地", "獨特的可能", "敲碗", "碗友", "狩獵模式",
  "取餐碼", "取餐", "外送", "上架", "上線", "能用", "訊息", "畫面", "付款", "店家", "後台", "官網",
  "在地", "現做", "一有落差", "最低支援版本", "我們打造", "比下去", "走進來", "型別", "對不上", "你家的人", "向左滑", "向右滑", "向上滑", "最關鍵的", "日常的", "錯誤訊息", "店家端都測", "都歡迎來聊", "只開放給", "交出去", "送上", "該有", "載入", "第一版", "每一次", "更快", "好價格", "規格裡", "沒上線", "穩穩地", "消費者端", "店家端", "來聊", "串接", "看得到", "預約", "核銷", "推播", "合約測試", "首購限定", "限購一次", "熟客限定", "所有人", "待聯繫", "洽談中", "已上架", "工作室", "程式碼",
];
const CJK = /[㐀-鿿豈-﫿]/;
const NO_BREAK_BEFORE = /^[，。、；：！？」』）〉》％%,.;:!?)\]…·]/;
const NO_BREAK_AFTER = /[「『（〈《(\[]$/;
const seg = new Intl.Segmenter("zh-Hant", { granularity: "word" });

function words(text) {
  const parts = [...seg.segment(text)].map((s) => s.segment);
  // glue dictionary phrases that ICU split (longest match first)
  const out = [];
  for (let i = 0; i < parts.length; ) {
    let joined = null;
    for (let j = Math.min(parts.length, i + 6); j > i + 1; j--) {
      const cand = parts.slice(i, j).join("");
      if (KEEP.includes(cand)) {
        joined = [cand, j];
        break;
      }
    }
    if (joined) {
      out.push(joined[0]);
      i = joined[1];
    } else out.push(parts[i++]);
  }
  return out;
}

export function breakZh(text) {
  if (!CJK.test(text)) return text;
  const w = words(text);
  let s = w[0];
  for (let i = 1; i < w.length; i++) {
    const a = w[i - 1], b = w[i];
    const ok = !NO_BREAK_BEFORE.test(b) && !NO_BREAK_AFTER.test(a) && !/\s$/.test(a) && !/^\s/.test(b);
    s += (ok && (CJK.test(a) || CJK.test(b)) ? "<wbr>" : "") + b;
  }
  return s;
}

export function processHtml(html) {
  const bodyAt = html.indexOf("<body");
  if (bodyAt < 0) return html;
  const head = html.slice(0, bodyAt);
  const tokens = html.slice(bodyAt).split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>)/);
  // Skip SVG text, and headings / .keep elements, which carry hand-placed breaks (| in the copy).
  let svg = 0;
  const manual = []; // [tag, depth] for elements with manual breaks; depth counts nested same-name tags
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!t) continue;
    if (t.startsWith("<")) {
      const open = /^<([a-z0-9]+)[\s>]/i.exec(t);
      const close = /^<\/([a-z0-9]+)/i.exec(t);
      if (open) {
        const tag = open[1].toLowerCase();
        if (tag === "svg") svg++;
        else if (manual.length && manual[manual.length - 1][0] === tag && !t.endsWith("/>")) manual[manual.length - 1][1]++;
        else if (/^h[1-3]$/.test(tag) || /class="[^"]*\bkeep\b/.test(t)) manual.push([tag, 1]);
      } else if (close) {
        const tag = close[1].toLowerCase();
        if (tag === "svg") svg--;
        else if (manual.length && manual[manual.length - 1][0] === tag && --manual[manual.length - 1][1] === 0) manual.pop();
      }
      continue;
    }
    if (svg === 0 && manual.length === 0) tokens[i] = breakZh(t);
  }
  return head + tokens.join("");
}

export default function zhBreaks() {
  return {
    name: "zh-breaks",
    hooks: {
      "astro:build:done": ({ dir }) => {
        // every zh page: all HTML outside /en/
        const root = fileURLToPath(dir);
        const walk = (d) =>
          fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
            const p = path.join(d, e.name);
            if (e.isDirectory()) return p === path.join(root, "en") ? [] : walk(p);
            return e.name.endsWith(".html") ? [p] : [];
          });
        for (const p of walk(root)) fs.writeFileSync(p, processHtml(fs.readFileSync(p, "utf8")));
      },
    },
  };
}
