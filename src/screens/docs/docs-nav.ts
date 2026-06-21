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
      { label: "Accordion", to: "/docs/components/accordion" },
      { label: "Alert", to: "/docs/components/alert" },
      { label: "Avatar", to: "/docs/components/avatar" },
      { label: "Badge", to: "/docs/components/badge" },
      { label: "Button", to: "/docs/components/button" },
      { label: "Card", to: "/docs/components/card" },
      { label: "Checkbox", to: "/docs/components/checkbox" },
      { label: "Dialog", to: "/docs/components/dialog" },
      { label: "Heading", to: "/docs/components/heading" },
      { label: "IconButton", to: "/docs/components/icon-button" },
      { label: "Input", to: "/docs/components/input" },
      { label: "Menu", to: "/docs/components/menu" },
      { label: "Popover", to: "/docs/components/popover" },
      { label: "RadioGroup", to: "/docs/components/radio-group" },
      { label: "Select", to: "/docs/components/select" },
      { label: "Slider", to: "/docs/components/slider" },
      { label: "Stack", to: "/docs/components/stack" },
      { label: "Switch", to: "/docs/components/switch" },
      { label: "Tabs", to: "/docs/components/tabs" },
      { label: "Textarea", to: "/docs/components/textarea" },
      { label: "Tooltip", to: "/docs/components/tooltip" },
    ],
  },
];
