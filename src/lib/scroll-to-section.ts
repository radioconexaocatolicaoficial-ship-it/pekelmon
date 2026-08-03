export function getHeaderOffset() {
  const header = document.querySelector("header");
  return Math.ceil(header?.getBoundingClientRect().height ?? 80);
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = Math.max(0, getHeaderOffset() - 4);
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
