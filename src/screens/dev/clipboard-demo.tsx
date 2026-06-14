import { Clipboard } from "@/components/ui/clipboard";

export function ClipboardDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-80">
        <Clipboard.Root defaultValue="npm install @ark-ui/react">
          <Clipboard.Label>Install command</Clipboard.Label>
          <Clipboard.Control>
            <Clipboard.Input readOnly />
            <Clipboard.Trigger>
              <Clipboard.Indicator />
            </Clipboard.Trigger>
          </Clipboard.Control>
        </Clipboard.Root>
      </div>

      <div className="w-80">
        <Clipboard.Root defaultValue="ak_live_a7f3c9b2e1d8" timeout={1500}>
          <Clipboard.Label>API key (短い timeout=1.5s)</Clipboard.Label>
          <Clipboard.Control>
            <Clipboard.Input readOnly />
            <Clipboard.Trigger>
              <Clipboard.Indicator />
            </Clipboard.Trigger>
          </Clipboard.Control>
        </Clipboard.Root>
      </div>

      <div className="w-fit">
        <Clipboard.Root
          defaultValue="https://example.com/booking/abc-123"
          className="flex-row items-center gap-3 rounded-md border border-border bg-surface px-3 py-2"
        >
          <span className="font-mono text-sm text-fg-soft">
            https://example.com/booking/abc-123
          </span>
          <Clipboard.Trigger className="size-7 border-0 bg-transparent">
            <Clipboard.Indicator />
          </Clipboard.Trigger>
        </Clipboard.Root>
      </div>
    </div>
  );
}
