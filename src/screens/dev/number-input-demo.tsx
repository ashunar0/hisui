import { NumberInput } from "@/components/ui/number-input";

export function NumberInputDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <NumberInput.Root defaultValue="1">
        <NumberInput.Label>Quantity</NumberInput.Label>
        <NumberInput.Control>
          <NumberInput.Input />
          <NumberInput.Stepper />
        </NumberInput.Control>
      </NumberInput.Root>

      <NumberInput.Root defaultValue="50" min={0} max={100} step={5}>
        <NumberInput.Label>Percent (0-100, step 5)</NumberInput.Label>
        <NumberInput.Control>
          <NumberInput.Input />
          <NumberInput.Stepper />
        </NumberInput.Control>
      </NumberInput.Root>

      <NumberInput.Root defaultValue="3" disabled>
        <NumberInput.Label>Disabled</NumberInput.Label>
        <NumberInput.Control>
          <NumberInput.Input />
          <NumberInput.Stepper />
        </NumberInput.Control>
      </NumberInput.Root>
    </div>
  );
}
