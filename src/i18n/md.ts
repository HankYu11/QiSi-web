// Minimal inline markup for copy strings: *text* -> <em>text</em>. Input is trusted (our own copy).
export const md = (s: string) => s.replace(/\*(.+?)\*/g, "<em>$1</em>");
