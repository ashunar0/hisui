const SHADOW_KBD = "0 1px 0 var(--color-border)";

export default function ShadowOthers() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="flex flex-col gap-3 rounded-md border border-border p-4">
        <span className="font-medium text-fg text-sm">
          shadow-md (Tailwind default)
        </span>
        <p className="text-fg-muted text-xs">
          Tooltip / Select content / Chart tooltip。 主張弱め floating。
        </p>
        <div className="flex h-20 items-center justify-center rounded-md bg-canvas">
          <div className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs shadow-md">
            Tooltip
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-md border border-border p-4">
        <span className="font-medium text-fg text-sm">Kbd</span>
        <p className="text-fg-muted text-xs">
          border 色の 1px 下シャドウだけ。 keycap の押し下げ感。
        </p>
        <div className="flex h-20 items-center justify-center rounded-md bg-canvas">
          <span
            className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-surface px-1.5 font-medium text-[11px] text-fg-soft"
            style={{ boxShadow: SHADOW_KBD }}
          >
            ⌘K
          </span>
        </div>
      </div>
    </div>
  );
}
