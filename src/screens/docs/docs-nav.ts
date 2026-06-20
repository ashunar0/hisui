export type DocsNavItem = {
  label: string;
  to: string;
};

export type DocsNavGroup = {
  label?: string;
  items: DocsNavItem[];
};

export const DOCS_NAV: DocsNavGroup[] = [
  {
    items: [{ label: "Overview", to: "/docs" }],
  },
  {
    label: "Foundations",
    items: [
      { label: "Colors", to: "/docs/foundations/colors" },
      { label: "Typography", to: "/docs/foundations/typography" },
      { label: "Spacing", to: "/docs/foundations/spacing" },
      { label: "Shadow", to: "/docs/foundations/shadow" },
      { label: "Radius", to: "/docs/foundations/radius" },
    ],
  },
  {
    label: "Components",
    items: [
      { label: "Badge", to: "/docs/components/badge" },
      { label: "Button", to: "/docs/components/button" },
    ],
  },
];
