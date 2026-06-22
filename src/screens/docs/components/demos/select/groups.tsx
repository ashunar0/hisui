"use client";

import { Check, ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { Select, createListCollection } from "@/components/ui/select";

const GROUPS = ["Fruits", "Vegetables"] as const;

export default function SelectGroupsDemo() {
  const collection = useMemo(
    () =>
      createListCollection({
        items: [
          { label: "Apple", value: "apple", group: "Fruits" },
          { label: "Banana", value: "banana", group: "Fruits" },
          { label: "Carrot", value: "carrot", group: "Vegetables" },
          { label: "Daikon", value: "daikon", group: "Vegetables" },
        ],
      }),
    [],
  );
  return (
    <Select.Root collection={collection} defaultValue={["apple"]}>
      <Select.Control>
        <Select.Trigger className="w-56">
          <Select.ValueText placeholder="Pick produce" />
          <Select.Indicator>
            <ChevronDown className="size-4" />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Select.Content>
        <Select.List>
          {GROUPS.map((g) => (
            <Select.ItemGroup key={g}>
              <Select.ItemGroupLabel>{g}</Select.ItemGroupLabel>
              {collection.items
                .filter((i) => i.group === g)
                .map((i) => (
                  <Select.Item key={i.value} item={i}>
                    <Select.ItemText>{i.label}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Check className="size-4" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
            </Select.ItemGroup>
          ))}
        </Select.List>
      </Select.Content>
    </Select.Root>
  );
}
