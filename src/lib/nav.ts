import { BookOpen, BookText, Download, Film, Flag, Home, TrendingUp, type LucideIcon } from "lucide-react";

export type NavLink = {
  to: "/" | "/sobre" | "/saiba-mais" | "/pautas" | "/midia" | "/numeros" | "/downloads" | "/links";
  hash?: "cadastro";
  sectionId: "inicio" | "historia" | "saiba-mais" | "bandeiras" | "midia" | "numeros" | "downloads";
  label: string;
  icon: LucideIcon;
  accent?: boolean;
};

export const NAV_LINKS: readonly NavLink[] = [
  { to: "/", sectionId: "inicio", label: "Início", icon: Home },
  { to: "/sobre", sectionId: "historia", label: "Sobre", icon: BookText },
  { to: "/saiba-mais", sectionId: "saiba-mais", label: "Saiba mais", icon: BookOpen },
  { to: "/pautas", sectionId: "bandeiras", label: "Pautas", icon: Flag },
  { to: "/midia", sectionId: "midia", label: "Mídia", icon: Film },
  { to: "/numeros", sectionId: "numeros", label: "Números", icon: TrendingUp },
  { to: "/downloads", sectionId: "downloads", label: "Downloads", icon: Download },
] as const;

export const TOP_NAV_LINKS = NAV_LINKS;

export const FOOTER_NAV_LINKS = [
  { to: "/" as const, label: "Início" },
  { to: "/sobre" as const, label: "Sobre" },
  { to: "/saiba-mais" as const, label: "Saiba mais" },
  { to: "/pautas" as const, label: "Pautas" },
  { to: "/midia" as const, label: "Mídia" },
  { to: "/numeros" as const, label: "Indicadores" },
  { to: "/downloads" as const, label: "Downloads" },
  { to: "/links" as const, label: "Links Padre" },
  { to: "/" as const, hash: "cadastro" as const, label: "Faça parte" },
];
