import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function SpinnerDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Sizes />
      <InlineWithText />
      <ButtonLoading />
    </div>
  );
}

function Sizes() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        sizes (size-3 xs / size-4 sm / size-5 md / size-6 lg)。 className で
        size 上書き。
      </p>
      <div className="flex items-end gap-6">
        <div className="flex flex-col items-center gap-1">
          <Spinner className="size-3" />
          <span className="text-xs text-fg-muted">xs</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Spinner className="size-4" />
          <span className="text-xs text-fg-muted">sm</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Spinner className="size-5" />
          <span className="text-xs text-fg-muted">md</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Spinner className="size-6" />
          <span className="text-xs text-fg-muted">lg</span>
        </div>
      </div>
    </div>
  );
}

function InlineWithText() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        inline with text (block-level の loading text、 page section 上 等)。
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-3 text-sm text-fg-muted">
          <Spinner />
          <span>Fetching recent activity…</span>
        </div>
        <div className="flex h-32 items-center justify-center rounded-md border border-border bg-surface">
          <div className="flex flex-col items-center gap-2 text-fg-muted">
            <Spinner className="size-6" />
            <span className="text-sm">Loading dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonLoading() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        button loading (Spinner を Button の中に置いて disabled state、 各
        variant で色追従)。
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Button disabled>
          <Spinner className="size-4 text-bg" />
          Saving…
        </Button>
        <Button variant="outline" disabled>
          <Spinner />
          Saving…
        </Button>
        <Button variant="ghost" disabled>
          <Spinner />
          Saving…
        </Button>
        <Button variant="subtle" disabled>
          <Spinner />
          Saving…
        </Button>
      </div>
    </div>
  );
}
