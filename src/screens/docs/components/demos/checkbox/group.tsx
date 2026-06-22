"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const FRUITS = ["apple", "banana", "cherry"] as const;

export default function CheckboxGroupDemo() {
  const [value, setValue] = useState<string[]>(["apple"]);
  return (
    <Checkbox.Group value={value} onValueChange={(v) => setValue(v)}>
      {FRUITS.map((f) => (
        <Checkbox.Root key={f} value={f}>
          <Checkbox.Control />
          <Checkbox.Label>{f}</Checkbox.Label>
        </Checkbox.Root>
      ))}
      <p className="text-fg-muted text-xs">selected: [{value.join(", ")}]</p>
    </Checkbox.Group>
  );
}
