"use client";

import { Listbox, createListCollection } from "@/components/ui/listbox";

const LANGS = [
  { label: "TypeScript", value: "ts" },
  { label: "JavaScript", value: "js" },
  { label: "Python", value: "py" },
  { label: "Rust", value: "rs" },
  { label: "Go", value: "go" },
  { label: "Swift", value: "swift" },
  { label: "Kotlin", value: "kt" },
];

const collection = createListCollection({ items: LANGS });

export default function ListboxBasicDemo() {
  return (
    <Listbox.Root
      collection={collection}
      defaultValue={["ts"]}
      className="w-64"
    >
      <Listbox.Label>Language</Listbox.Label>
      <Listbox.Content>
        {LANGS.map((item) => (
          <Listbox.Item key={item.value} item={item}>
            <Listbox.ItemText>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
}
