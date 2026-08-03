export function getHeaderOffset() {
  const header = document.querySelector("header");
  return Math.ceil(header?.getBoundingClientRect().height ?? 80);
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  // Espaço extra sob o header fixo para o título/texto não ficarem cortados no celular
  const offset = getHeaderOffset() + 8;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}
