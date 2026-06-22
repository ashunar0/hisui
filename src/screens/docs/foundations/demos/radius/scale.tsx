type RadiusToken = {
  name: string;
  value: string;
  px: string;
  usage: string;
};

const RADIUS: RadiusToken[] = [
  {
    name: "rounded-none",
    value: "0",
    px: "0px",
    usage: "卓上の sheet 系 (Drawer の left/right edge)",
  },
  {
    name: "rounded-sm",
    value: "0.125rem",
    px: "2px",
    usage: "tag / chart bar / Avatar group の internal frame",
  },
  {
    name: "rounded",
    value: "0.25rem",
    px: "4px",
    usage: "Kbd の小箱 (border + 1px shadow と相性)",
  },
  {
    name: "rounded-md",
    value: "0.375rem",
    px: "6px",
    usage: "ui-lab の標準。 Button / Card / Input / Popover / Menu 全部これ",
  },
  {
    name: "rounded-lg",
    value: "0.5rem",
    px: "8px",
    usage: "Dialog 等やや大きい floating surface",
  },
  {
    name: "rounded-xl",
    value: "0.75rem",
    px: "12px",
    usage: "marketing / hero card など意図的に丸めたい時",
  },
  {
    name: "rounded-full",
    value: "9999px",
    px: "9999px",
    usage: "Avatar / Pill / IconButton circle / Spinner",
  },
];

function Swatch({ value }: { value: string }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center">
      <div
        className="h-12 w-12 border border-border bg-surface-sunken"
        style={{ borderRadius: value }}
      />
    </div>
  );
}

export default function RadiusScale() {
  return (
    <div className="flex flex-col">
      {RADIUS.map((r) => (
        <div
          key={r.name}
          className="grid grid-cols-[5rem_8rem_8rem_1fr] items-center gap-4 border-b border-border-muted py-3 last:border-b-0"
        >
          <Swatch value={r.value} />
          <span className="font-mono text-fg text-xs">{r.name}</span>
          <span className="font-mono text-[11px] text-fg-muted">
            {r.value} / {r.px}
          </span>
          <span className="text-fg-muted text-xs leading-relaxed">
            {r.usage}
          </span>
        </div>
      ))}
    </div>
  );
}
