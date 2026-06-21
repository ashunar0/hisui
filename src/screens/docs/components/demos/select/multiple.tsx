import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Select, createListCollection } from "@/components/ui/select";

const FRUITS = createListCollection({
  items: [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Durian", value: "durian", disabled: true },
  ],
});

export default function SelectMultipleDemo() {
  const [value, setValue] = useState<string[]>(["apple", "cherry"]);
  return (
    <div className="flex flex-col gap-2">
      <Select.Root
        collection={FRUITS}
        value={value}
        onValueChange={(d) => setValue(d.value)}
        multiple
      >
        <Select.Label>Fruits</Select.Label>
        <Select.Control>
          <Select.Trigger className="w-56">
            <Select.ValueText placeholder="Pick fruits" />
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
      <p className="text-fg-muted text-xs">selected: [{value.join(", ")}]</p>
    </div>
  );
}
