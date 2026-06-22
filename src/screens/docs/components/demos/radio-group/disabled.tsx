"use client";

import { RadioGroup } from "@/components/ui/radio-group";

const PLANS = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
];

export default function RadioGroupDisabledDemo() {
  return (
    <RadioGroup.Root defaultValue="pro">
      {PLANS.map((p) => (
        <RadioGroup.Item
          key={p.value}
          value={p.value}
          disabled={p.value === "team"}
        >
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>
            {p.label}
            {p.value === "team" && " (disabled)"}
          </RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
