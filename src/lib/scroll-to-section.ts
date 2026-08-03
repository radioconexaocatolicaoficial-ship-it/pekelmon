export function getHeaderOffset() {
  const header = document.querySelector("header");
  return Math.ceil(header?.getBoundingClientRect().height ?? 80);
}

export function getBottomNavOffset() {
  const nav = document.querySelector("[data-mobile-bottom-nav]");
  if (!nav) return 0;
  const style = window.getComputedStyle(nav);
  if (style.display === "none") return 0;
  return Math.ceil(nav.getBoundingClientRect().height);
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = Math.max(0, getHeaderOffset() - 4);
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
