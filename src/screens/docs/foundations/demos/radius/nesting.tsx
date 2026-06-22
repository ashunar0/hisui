export default function RadiusNesting() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="flex flex-col gap-2 rounded-md border border-border p-4">
        <span className="font-medium text-fg text-sm">
          Same or child-smaller
        </span>
        <div className="flex h-24 items-center justify-center rounded-md border border-border bg-canvas p-3">
          <div className="h-full w-full rounded-sm border border-border bg-surface" />
        </div>
        <p className="text-fg-muted text-xs">
          parent rounded-md + inner rounded-sm。 内側がきれいに収まる。
        </p>
      </div>
      <div className="flex flex-col gap-2 rounded-md border border-border p-4">
        <span className="font-medium text-fg text-sm">
          Child larger than parent
        </span>
        <div className="flex h-24 items-center justify-center rounded-sm border border-border bg-canvas p-3">
          <div className="h-full w-full rounded-xl border border-border bg-surface" />
        </div>
        <p className="text-fg-muted text-xs">
          parent rounded-sm + inner rounded-xl。 角が浮いて窮屈に見える。
        </p>
      </div>
    </div>
  );
}
