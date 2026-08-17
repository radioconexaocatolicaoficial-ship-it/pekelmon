import { BookText, Film, Flag, Home, TrendingUp, UserPlus, type LucideIcon } from "lucide-react";

export type NavLink = {
  to: "/" | "/sobre" | "/pautas" | "/midia" | "/numeros";
  hash?: "cadastro";
  sectionId: "inicio" | "historia" | "bandeiras" | "midia" | "numeros" | "cadastro";
  label: string;
  icon: LucideIcon;
  accent?: boolean;
};

export const NAV_LINKS: readonly NavLink[] = [
  { to: "/", sectionId: "inicio", label: "Início", icon: Home },
  { to: "/sobre", sectionId: "historia", label: "Sobre", icon: BookText },
  { to: "/pautas", sectionId: "bandeiras", label: "Pautas", icon: Flag },
  { to: "/midia", sectionId: "midia", label: "Mídia", icon: Film },
  { to: "/numeros", sectionId: "numeros", label: "Números", icon: TrendingUp },
  {
    to: "/",
    hash: "cadastro",
    sectionId: "cadastro",
    label: "Apoiar",
    icon: UserPlus,
    accent: true,
  },
] as const;

export const TOP_NAV_LINKS = NAV_LINKS.filter((l) => l.sectionId !== "cadastro");

export const FOOTER_NAV_LINKS = [
  { to: "/" as const, label: "Início" },
  { to: "/sobre" as const, label: "Sobre" },
  { to: "/pautas" as const, label: "Pautas" },
  { to: "/midia" as const, label: "Mídia" },
  { to: "/numeros" as const, label: "Indicadores" },
  { to: "/" as const, hash: "cadastro" as const, label: "Faça parte" },
];
