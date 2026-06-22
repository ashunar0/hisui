type Layer = { offset: string; blur: string; color: string; role: string };

const SHADOWS = {
  mid: "0 1px 0 rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.06), 0 0 4px rgba(0,0,0,0.03)",
  high: "0 1px 0 rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.03)",
};

const LAYERS: Record<"mid" | "high", Layer[]> = {
  mid: [
    {
      offset: "0 1px",
      blur: "0",
      color: "rgba(0,0,0,0.04)",
      role: "下端の hairline",
    },
    {
      offset: "0 4px",
      blur: "8px",
      color: "rgba(0,0,0,0.06)",
      role: "メインの落ち影",
    },
    {
      offset: "0 0",
      blur: "4px",
      color: "rgba(0,0,0,0.03)",
      role: "全周の柔らかい halo",
    },
  ],
  high: [
    {
      offset: "0 1px",
      blur: "0",
      color: "rgba(0,0,0,0.04)",
      role: "下端の hairline",
    },
    {
      offset: "0 8px",
      blur: "24px",
      color: "rgba(0,0,0,0.08)",
      role: "深い落ち影 (浮遊感)",
    },
    {
      offset: "0 0",
      blur: "4px",
      color: "rgba(0,0,0,0.03)",
      role: "全周の柔らかい halo",
    },
  ],
};

function Preview({ shadow, label }: { shadow: string; label: string }) {
  return (
    <div className="flex h-40 items-center justify-center rounded-md bg-canvas p-6">
      <div
        className="flex h-20 w-40 items-center justify-center rounded-md border border-border bg-surface text-fg-muted text-xs"
        style={{ boxShadow: shadow }}
      >
        {label}
      </div>
    </div>
  );
}

function LayerTable({ layers }: { layers: Layer[] }) {
  return (
    <div className="flex flex-col rounded-md border border-border">
      {layers.map((l, i) => (
        <div
          key={i}
          className="grid grid-cols-[5rem_4rem_8rem_1fr] items-center gap-3 border-b border-border-muted px-3 py-2 text-xs last:border-b-0"
        >
          <span className="font-mono text-fg">{l.offset}</span>
          <span className="font-mono text-fg-muted">{l.blur}</span>
          <span className="font-mono text-fg-muted">{l.color}</span>
          <span className="text-fg-muted">{l.role}</span>
        </div>
      ))}
    </div>
  );
}

export default function ShadowElevation({
  level,
  label,
}: {
  level: "mid" | "high";
  label: string;
}) {
  const shadow = SHADOWS[level];
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Preview shadow={shadow} label={label} />
        <LayerTable layers={LAYERS[level]} />
      </div>
      <pre className="overflow-x-auto rounded-md border border-border bg-canvas p-3 font-mono text-[11px] text-fg-soft">
        {`shadow-[${shadow.replace(/\s/g, "_")}]`}
      </pre>
    </div>
  );
}
