const SCALE = [
  { name: "0", rem: "0", px: "0px" },
  { name: "0.5", rem: "0.125rem", px: "2px" },
  { name: "1", rem: "0.25rem", px: "4px" },
  { name: "1.5", rem: "0.375rem", px: "6px" },
  { name: "2", rem: "0.5rem", px: "8px" },
  { name: "2.5", rem: "0.625rem", px: "10px" },
  { name: "3", rem: "0.75rem", px: "12px" },
  { name: "4", rem: "1rem", px: "16px" },
  { name: "5", rem: "1.25rem", px: "20px" },
  { name: "6", rem: "1.5rem", px: "24px" },
  { name: "8", rem: "2rem", px: "32px" },
  { name: "10", rem: "2.5rem", px: "40px" },
  { name: "12", rem: "3rem", px: "48px" },
  { name: "16", rem: "4rem", px: "64px" },
  { name: "20", rem: "5rem", px: "80px" },
  { name: "24", rem: "6rem", px: "96px" },
] as const;

export default function SpacingScale() {
  return (
    <div className="flex flex-col">
      {SCALE.map((s) => (
        <div
          key={s.name}
          className="grid grid-cols-[4rem_5rem_1fr] items-center gap-4 border-b border-border-muted py-2 last:border-b-0"
        >
          <span className="font-mono text-fg text-xs">{s.name}</span>
          <span className="font-mono text-[11px] text-fg-muted">
            {s.rem} / {s.px}
          </span>
          <div className="flex h-3 items-center">
            <div
              className="h-3 rounded-sm bg-fg-soft"
              style={{ width: s.rem }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
