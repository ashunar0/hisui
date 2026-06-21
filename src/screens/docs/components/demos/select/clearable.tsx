import { Check, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Select, createListCollection } from "@/components/ui/select";

const FRAMEWORKS = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
  ],
});

export default function SelectClearableDemo() {
  const [value, setValue] = useState<string[]>([]);
  const hasValue = value.length > 0;
  return (
    <Select.Root
      collection={FRAMEWORKS}
      value={value}
      onValueChange={(d) => setValue(d.value)}
    >
      <Select.Control>
        <Select.Trigger className="w-48">
          <Select.ValueText placeholder="Pick one" />
          {hasValue ? (
            <Select.ClearTrigger>
              <X className="size-3.5" />
            </Select.ClearTrigger>
          ) : (
            <Select.Indicator>
              <ChevronDown className="size-4" />
            </Select.Indicator>
          )}
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
  );
}
