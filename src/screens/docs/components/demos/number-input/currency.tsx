import { NumberInput } from "@/components/ui/number-input";

export default function NumberInputCurrencyDemo() {
  return (
    <NumberInput.Root
      defaultValue="1500"
      min={0}
      step={100}
      formatOptions={{ style: "currency", currency: "USD" }}
    >
      <NumberInput.Label>Budget (USD)</NumberInput.Label>
      <NumberInput.Control>
        <NumberInput.Input />
        <NumberInput.Stepper />
      </NumberInput.Control>
    </NumberInput.Root>
  );
}
