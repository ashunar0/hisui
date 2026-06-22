"use client";

import { Check, ChevronDown } from "lucide-react";
import { Select, createListCollection } from "@/components/ui/select";

const FRAMEWORKS = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
  ],
});

const SIZES = ["xs", "sm", "md", "lg"] as const;

export default function SelectSizesDemo() {
  return (
    <div className="flex flex-col gap-3">
      {SIZES.map((s) => (
        <Select.Root key={s} collection={FRAMEWORKS} size={s}>
          <Select.Control>
            <Select.Trigger className="w-48">
              <Select.ValueText placeholder={`size=${s}`} />
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
      ))}
    </div>
  );
}
