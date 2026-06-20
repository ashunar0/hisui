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
    ],
  },
  {
    label: "Components",
    items: [{ label: "Button", to: "/docs/components/button" }],
  },
];
