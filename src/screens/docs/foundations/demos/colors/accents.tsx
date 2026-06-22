const PALETTES = ["success", "danger", "warning", "info"] as const;
const STOPS = ["subtle", "border", "fg", "solid", "solid-fg"] as const;

export default function ColorsAccents() {
  return (
    <div className="flex flex-col gap-6">
      {PALETTES.map((palette) => (
        <div key={palette} className="flex flex-col gap-2">
          <span className="font-medium text-xs capitalize">{palette}</span>
          <div className="grid grid-cols-5 gap-3">
            {STOPS.map((stop) => {
              const varName = `--color-${palette}-${stop}`;
              return (
                <div key={stop} className="flex flex-col gap-1.5">
                  <div
                    className="h-12 w-full rounded-md border border-border"
                    style={{ backgroundColor: `var(${varName})` }}
                  />
                  <span className="text-fg-muted text-[11px]">{stop}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
