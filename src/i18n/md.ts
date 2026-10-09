// Minimal inline markup for copy strings (input is our own trusted copy):
//   *text* -> <em>text</em>
//   |      -> <wbr>, an allowed line break. zh headings use word-break: keep-all, so they only
//             break at punctuation, spaces and these marks — never inside a word.
export const md = (s: string) => s.replace(/\*(.+?)\*/g, "<em>$1</em>").replaceAll("|", "<wbr>");
export const plain = (s: string) => s.replaceAll("|", "").replace(/\*(.+?)\*/g, "$1");
