import { PinInput } from "@/components/ui/pin-input";

export default function PinInputOtpDemo() {
  return (
    <PinInput.Root otp>
      <PinInput.Label>One-time code</PinInput.Label>
      <PinInput.Control>
        {Array.from({ length: 6 }).map((_, i) => (
          <PinInput.Input key={i} index={i} />
        ))}
      </PinInput.Control>
    </PinInput.Root>
  );
}
