"use client";

import { RadioGroup } from "@/components/ui/radio-group";

export default function RadioGroupHorizontalDemo() {
  return (
    <RadioGroup.Root
      orientation="horizontal"
      defaultValue="md"
      className="flex-row gap-4"
    >
      {["sm", "md", "lg"].map((v) => (
        <RadioGroup.Item key={v} value={v}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{v}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
