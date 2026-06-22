"use client";

import { PinInput } from "@/components/ui/pin-input";

export default function PinInputUsageDemo() {
  return (
    <PinInput.Root>
      <PinInput.Label>Verification code</PinInput.Label>
      <PinInput.Control>
        {Array.from({ length: 4 }).map((_, i) => (
          <PinInput.Input key={i} index={i} />
        ))}
      </PinInput.Control>
    </PinInput.Root>
  );
}
