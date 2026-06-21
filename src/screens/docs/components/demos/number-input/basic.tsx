import { NumberInput } from "@/components/ui/number-input";

export default function NumberInputBasicDemo() {
  return (
    <NumberInput.Root defaultValue="1">
      <NumberInput.Label>Quantity</NumberInput.Label>
      <NumberInput.Control>
        <NumberInput.Input />
        <NumberInput.Stepper />
      </NumberInput.Control>
    </NumberInput.Root>
  );
}
