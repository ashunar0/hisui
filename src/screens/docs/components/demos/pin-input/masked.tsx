import { PinInput } from "@/components/ui/pin-input";

export default function PinInputMaskedDemo() {
  return (
    <PinInput.Root mask>
      <PinInput.Label>Card PIN</PinInput.Label>
      <PinInput.Control>
        {Array.from({ length: 4 }).map((_, i) => (
          <PinInput.Input key={i} index={i} />
        ))}
      </PinInput.Control>
    </PinInput.Root>
  );
}
