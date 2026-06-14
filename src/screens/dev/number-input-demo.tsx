import { Minus, Plus } from "lucide-react";
import { NumberInput } from "@/components/ui/number-input";

export function NumberInputDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Quantity />
      <CartStyle />
      <Scrubbable />
    </div>
  );
}

function Quantity() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        quantity (default vertical stepper、 step / min / max / disabled の 3 つを横並び)
      </p>
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
    </div>
  );
}

function CartStyle() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        cart style (− Input + 横並び、 IncrementTrigger / DecrementTrigger を Control
        の両端に配置、 EC の数量調整 UI)
      </p>
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
    </div>
  );
}

function Scrubbable() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        scrubbable (Scrubber を Label に被せて drag で値変更、 Figma / Photoshop 風、
        ValueText で current value を別途表示)
      </p>
      <NumberInput.Root defaultValue="16" min={0} max={200} step={1}>
        <NumberInput.Scrubber>
          <NumberInput.Label className="cursor-ew-resize underline decoration-dotted decoration-fg-muted underline-offset-4">
            Font size (drag me)
          </NumberInput.Label>
        </NumberInput.Scrubber>
        <NumberInput.Control>
          <NumberInput.Input />
          <NumberInput.Stepper />
        </NumberInput.Control>
        <div className="flex items-center gap-2 text-xs text-fg-muted">
          <span>Current:</span>
          <NumberInput.ValueText />
          <span>px</span>
        </div>
      </NumberInput.Root>
    </div>
  );
}
