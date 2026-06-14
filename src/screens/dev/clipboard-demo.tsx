import { Clipboard } from "@/components/ui/clipboard";

export function ClipboardDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          install command (Label + Input + Trigger)
        </span>
        <Clipboard.Root defaultValue="pnpm add @ark-ui/react" className="w-80">
          <Clipboard.Label>Install command</Clipboard.Label>
          <Clipboard.Control>
            <Clipboard.Input readOnly />
            <Clipboard.Trigger>
              <Clipboard.Indicator />
            </Clipboard.Trigger>
          </Clipboard.Control>
        </Clipboard.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          inline share URL (pill style)
        </span>
        <Clipboard.Root defaultValue="https://ui-lab.dev/booking/abc-123">
          <Clipboard.Control className="w-fit rounded-full border border-border bg-surface py-1 pl-3 pr-1.5">
            <span className="font-mono text-xs text-fg-soft">
              ui-lab.dev/booking/abc-123
            </span>
            <Clipboard.Trigger className="size-6 rounded-full border-0 bg-transparent">
              <Clipboard.Indicator />
            </Clipboard.Trigger>
          </Clipboard.Control>
        </Clipboard.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          code block + ValueText + Copy button
        </span>
        <Clipboard.Root
          defaultValue={`import { Carousel } from "@/components/ui/carousel";`}
          className="w-full max-w-md gap-3 rounded-md border border-border bg-surface p-3"
        >
          <Clipboard.Label className="text-xs text-fg-muted">
            Import snippet
          </Clipboard.Label>
          <div className="overflow-hidden rounded-sm bg-active px-3 py-2">
            <Clipboard.ValueText className="block truncate text-xs" />
          </div>
          <Clipboard.Trigger className="inline-flex h-8 w-fit cursor-pointer items-center gap-2 self-end rounded-md border border-border bg-surface px-3 text-xs font-medium text-fg outline-none transition-colors hover:bg-hover">
            <Clipboard.Indicator />
            Copy
          </Clipboard.Trigger>
        </Clipboard.Root>
      </div>
    </div>
  );
}
