"use client";

import { Button } from "@/components/ui/button";
import { PinInput } from "@/components/ui/pin-input";

export default function PinInputWithSubmitDemo() {
  return (
    <PinInput.Root>
      <PinInput.Label>Verify code (5 digits)</PinInput.Label>
      <PinInput.Control>
        {Array.from({ length: 5 }).map((_, i) => (
          <PinInput.Input key={i} index={i} />
        ))}
      </PinInput.Control>
      <PinInput.Context>
        {(api) => {
          const filled = api.value.filter(Boolean).length;
          const total = api.value.length;
          return (
            <div className="mt-1 flex items-center justify-between gap-3">
              <span className="text-fg-muted text-[11px]">
                {filled} / {total} digits
              </span>
              <Button size="sm" disabled={!api.complete}>
                Verify
              </Button>
            </div>
          );
        }}
      </PinInput.Context>
    </PinInput.Root>
  );
}
