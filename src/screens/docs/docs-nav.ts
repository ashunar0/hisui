import { Palette, Rocket, type LucideIcon } from "lucide-react";

export type DocsNavItem = {
  label: string;
  to: string;
  icon: LucideIcon;
};

export type DocsNavGroup = {
  label?: string;
  items: DocsNavItem[];
};

export const DOCS_NAV: DocsNavGroup[] = [
  {
    items: [{ label: "Overview", to: "/docs", icon: Rocket }],
  },
  {
    label: "Foundations",
    items: [{ label: "Colors", to: "/docs/foundations/colors", icon: Palette }],
  },
];
