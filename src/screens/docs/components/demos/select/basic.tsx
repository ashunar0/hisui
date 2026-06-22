"use client";

import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Select, createListCollection } from "@/components/ui/select";

const FRAMEWORKS = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
    { label: "Qwik", value: "qwik" },
  ],
});

export default function SelectBasicDemo() {
  const [value, setValue] = useState<string[]>(["react"]);
  return (
    <div className="flex flex-col gap-2">
      <Select.Root
        collection={FRAMEWORKS}
        value={value}
        onValueChange={(d) => setValue(d.value)}
      >
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger className="w-48">
            <Select.ValueText placeholder="Pick one" />
            <Select.Indicator>
              <ChevronDown className="size-4" />
            </Select.Indicator>
          </Select.Trigger>
        </Select.Control>
        <Select.Content>
          <Select.List>
            {FRAMEWORKS.items.map((f) => (
              <Select.Item key={f.value} item={f}>
                <Select.ItemText>{f.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="size-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.List>
        </Select.Content>
      </Select.Root>
      <p className="text-fg-muted text-xs">selected: [{value.join(", ")}]</p>
    </div>
  );
}
