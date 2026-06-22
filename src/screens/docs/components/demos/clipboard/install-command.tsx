"use client";

import { Clipboard } from "@/components/ui/clipboard";

export default function ClipboardInstallCommandDemo() {
  return (
    <Clipboard.Root defaultValue="pnpm add @ark-ui/react" className="w-80">
      <Clipboard.Label>Install command</Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input readOnly />
        <Clipboard.Trigger>
          <Clipboard.Indicator />
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  );
}
