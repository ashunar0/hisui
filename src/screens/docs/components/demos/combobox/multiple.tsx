"use client";

import { Check, ChevronDown } from "lucide-react";
import { Combobox, useListCollection } from "@/components/ui/combobox";

const SKILLS = [
  { value: "ts", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "node", label: "Node.js" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "python", label: "Python" },
];

export default function ComboboxMultipleDemo() {
  const { collection, filter } = useListCollection({
    initialItems: SKILLS,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
    filter: (itemText, filterText) =>
      itemText.toLowerCase().includes(filterText.toLowerCase()),
  });
  return (
    <div className="w-72">
      <Combobox.Root
        collection={collection}
        onInputValueChange={(e) => filter(e.inputValue)}
        multiple
        openOnClick
        defaultValue={["ts", "react"]}
      >
        <div className="flex items-baseline justify-between">
          <Combobox.Label>Skills</Combobox.Label>
          <Combobox.Context>
            {(api) =>
              api.value.length > 0 ? (
                <span className="text-[11px] text-fg-muted">
                  {api.value.length} selected
                </span>
              ) : null
            }
          </Combobox.Context>
        </div>
        <Combobox.Control>
          <Combobox.Input placeholder="Add skills..." />
          <Combobox.Trigger>
            <ChevronDown className="size-4" />
          </Combobox.Trigger>
        </Combobox.Control>
        <Combobox.Content>
          <Combobox.Empty>No skills</Combobox.Empty>
          {collection.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check className="size-4" />
              </Combobox.ItemIndicator>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Root>
    </div>
  );
}
