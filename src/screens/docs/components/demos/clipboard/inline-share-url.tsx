"use client";

import { Clipboard } from "@/components/ui/clipboard";

export default function ClipboardInlineShareUrlDemo() {
  return (
    <Clipboard.Root defaultValue="https://ui-lab.dev/booking/abc-123">
      <Clipboard.Control className="w-fit rounded-full border border-border bg-surface py-1 pr-1.5 pl-3">
        <span className="font-mono text-fg-soft text-xs">
          ui-lab.dev/booking/abc-123
        </span>
        <Clipboard.Trigger className="size-6 rounded-full border-0 bg-transparent">
          <Clipboard.Indicator />
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  );
}
