import { useState } from "react";
import { RadioGroup } from "@/components/ui/radio-group";

const PLANS = [
  { value: "free", label: "Free", desc: "Up to 3 projects" },
  { value: "pro", label: "Pro", desc: "Unlimited projects" },
  { value: "team", label: "Team", desc: "Pro + collaboration" },
];

export default function RadioGroupCardListDemo() {
  const [value, setValue] = useState("pro");
  return (
    <RadioGroup.Root
      value={value}
      onValueChange={(d) => d.value !== null && setValue(d.value)}
      className="gap-3"
    >
      {PLANS.map((p) => (
        <RadioGroup.Item
          key={p.value}
          value={p.value}
          className="w-full rounded-md border border-border p-4 data-[state=checked]:border-fg-soft data-[state=checked]:bg-surface-muted"
        >
          <RadioGroup.ItemControl />
          <div className="flex flex-col">
            <RadioGroup.ItemText className="font-medium">
              {p.label}
            </RadioGroup.ItemText>
            <span className="text-fg-muted text-xs">{p.desc}</span>
          </div>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
