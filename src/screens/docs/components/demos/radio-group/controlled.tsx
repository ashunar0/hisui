"use client";

import { useState } from "react";
import { RadioGroup } from "@/components/ui/radio-group";

const PLANS = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
];

export default function RadioGroupControlledDemo() {
  const [value, setValue] = useState("pro");
  return (
    <div className="flex flex-col gap-2">
      <RadioGroup.Root
        value={value}
        onValueChange={(d) => d.value !== null && setValue(d.value)}
      >
        {PLANS.map((p) => (
          <RadioGroup.Item key={p.value} value={p.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{p.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
      <p className="text-fg-muted text-xs">selected: {value}</p>
    </div>
  );
}
