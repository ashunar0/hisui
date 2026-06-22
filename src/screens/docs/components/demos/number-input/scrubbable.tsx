"use client";

import { NumberInput } from "@/components/ui/number-input";

export default function NumberInputScrubbableDemo() {
  return (
    <NumberInput.Root defaultValue="16" min={0} max={200} step={1}>
      <NumberInput.Scrubber>
        <NumberInput.Label className="cursor-ew-resize underline decoration-fg-muted decoration-dotted underline-offset-4">
          Font size (drag me)
        </NumberInput.Label>
      </NumberInput.Scrubber>
      <NumberInput.Control>
        <NumberInput.Input />
        <NumberInput.Stepper />
      </NumberInput.Control>
      <div className="flex items-center gap-2 text-fg-muted text-xs">
        <span>Current:</span>
        <NumberInput.ValueText />
        <span>px</span>
      </div>
    </NumberInput.Root>
  );
}
