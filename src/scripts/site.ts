// Site-wide behaviour: header state, mobile menu, scroll reveals, remembered language.

const hdr = document.querySelector<HTMLElement>("[data-hdr]");
const onScroll = () => hdr?.classList.toggle("scrolled", scrollY > 8);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

const btn = document.querySelector<HTMLButtonElement>("[data-menu]");
const nav = document.getElementById("site-nav");
if (btn && nav) {
  const set = (open: boolean) => {
    btn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
  };
  btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => (e.target as HTMLElement).closest("a") && set(false));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      set(false);
      btn.focus();
    }
  });
}

const reveals = document.querySelectorAll<HTMLElement>(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { rootMargin: "0px 0px -8% 0px" },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

document.querySelectorAll<HTMLAnchorElement>("[data-set-lang]").forEach((a) =>
  a.addEventListener("click", () => {
    try {
      localStorage.setItem("qisi-lang", a.dataset.setLang!);
    } catch {}
  }),
);
