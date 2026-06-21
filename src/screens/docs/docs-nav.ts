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
      { label: "Combobox", to: "/docs/components/combobox" },
      { label: "Dialog", to: "/docs/components/dialog" },
      { label: "Drawer", to: "/docs/components/drawer" },
      { label: "Empty", to: "/docs/components/empty" },
      { label: "Heading", to: "/docs/components/heading" },
      { label: "HoverCard", to: "/docs/components/hover-card" },
      { label: "IconButton", to: "/docs/components/icon-button" },
      { label: "Input", to: "/docs/components/input" },
      { label: "Kbd", to: "/docs/components/kbd" },
      { label: "Menu", to: "/docs/components/menu" },
      { label: "Pagination", to: "/docs/components/pagination" },
      { label: "Popover", to: "/docs/components/popover" },
      { label: "RadioGroup", to: "/docs/components/radio-group" },
      { label: "Select", to: "/docs/components/select" },
      { label: "Separator", to: "/docs/components/separator" },
      { label: "Skeleton", to: "/docs/components/skeleton" },
      { label: "Slider", to: "/docs/components/slider" },
      { label: "Spinner", to: "/docs/components/spinner" },
      { label: "Splitter", to: "/docs/components/splitter" },
      { label: "Stack", to: "/docs/components/stack" },
      { label: "Steps", to: "/docs/components/steps" },
      { label: "Switch", to: "/docs/components/switch" },
      { label: "Tabs", to: "/docs/components/tabs" },
      { label: "Textarea", to: "/docs/components/textarea" },
      { label: "Toast", to: "/docs/components/toast" },
      { label: "Tooltip", to: "/docs/components/tooltip" },
    ],
  },
];
