import { Minus, Plus } from "lucide-react";
import { NumberInput } from "@/components/ui/number-input";

export default function NumberInputCartDemo() {
  return (
    <NumberInput.Root defaultValue="1" min={1} max={10}>
      <NumberInput.Label>Tickets</NumberInput.Label>
      <NumberInput.Control className="w-36">
        <NumberInput.DecrementTrigger className="w-9 border-r border-border-muted">
          <Minus className="size-3.5" />
        </NumberInput.DecrementTrigger>
        <NumberInput.Input className="text-center" />
        <NumberInput.IncrementTrigger className="w-9 border-l border-border-muted">
          <Plus className="size-3.5" />
        </NumberInput.IncrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  );
}
