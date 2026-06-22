"use client";

import { Check, ChevronDown } from "lucide-react";
import { Select, createListCollection } from "@/components/ui/select";

const FRUITS = createListCollection({
  items: [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Durian", value: "durian", disabled: true },
  ],
});

export default function SelectDisabledItemDemo() {
  return (
    <Select.Root collection={FRUITS}>
      <Select.Control>
        <Select.Trigger className="w-48">
          <Select.ValueText placeholder="Pick fruit" />
          <Select.Indicator>
            <ChevronDown className="size-4" />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Select.Content>
        <Select.List>
          {FRUITS.items.map((f) => (
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
  );
}
