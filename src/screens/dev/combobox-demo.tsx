import { Check, ChevronDown } from "lucide-react";
import { Combobox, useListCollection } from "@/components/ui/combobox";

const ALL_FRAMEWORKS = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
  { value: "angular", label: "Angular" },
  { value: "qwik", label: "Qwik" },
  { value: "ember", label: "Ember" },
  { value: "preact", label: "Preact" },
  { value: "lit", label: "Lit" },
  { value: "alpine", label: "Alpine.js" },
];

export function ComboboxDemo() {
  const { collection, filter } = useListCollection({
    initialItems: ALL_FRAMEWORKS,
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
        openOnClick
      >
        <Combobox.Label>Framework</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Search frameworks..." />
          <Combobox.Trigger>
            <ChevronDown className="size-4" />
          </Combobox.Trigger>
        </Combobox.Control>
        <Combobox.Content>
          <Combobox.Empty>No results</Combobox.Empty>
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
