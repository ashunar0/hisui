import { NumberInput } from "@/components/ui/number-input";

export default function NumberInputRangeStepDemo() {
  return (
    <NumberInput.Root defaultValue="50" min={0} max={100} step={5}>
      <NumberInput.Label>Percent (0-100, step 5)</NumberInput.Label>
      <NumberInput.Control>
        <NumberInput.Input />
        <NumberInput.Stepper />
      </NumberInput.Control>
    </NumberInput.Root>
  );
}
