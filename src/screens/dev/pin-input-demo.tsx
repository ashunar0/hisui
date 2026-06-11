import { PinInput } from "@/components/ui/pin-input";

export function PinInputDemo() {
  return (
    <div className="flex flex-col gap-6">
      <PinInput.Root otp>
        <PinInput.Label>One-time code (6 digits)</PinInput.Label>
        <PinInput.Control>
          {Array.from({ length: 6 }).map((_, i) => (
            <PinInput.Input key={i} index={i} />
          ))}
        </PinInput.Control>
      </PinInput.Root>

      <PinInput.Root mask>
        <PinInput.Label>PIN (4 digits, masked)</PinInput.Label>
        <PinInput.Control>
          {Array.from({ length: 4 }).map((_, i) => (
            <PinInput.Input key={i} index={i} />
          ))}
        </PinInput.Control>
      </PinInput.Root>
    </div>
  );
}
