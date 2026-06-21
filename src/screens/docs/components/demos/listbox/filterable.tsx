import { useMemo, useState } from "react";
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

export default function ListboxFilterableDemo() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      LANGS.filter((l) => l.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const collection = useMemo(
    () => createListCollection({ items: filtered }),
    [filtered],
  );
  return (
    <div className="flex w-64 flex-col gap-2">
      <Listbox.Root collection={collection}>
        <Listbox.Label>Search language</Listbox.Label>
        <Listbox.Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to filter..."
        />
        <Listbox.Content>
          {filtered.length === 0 ? (
            <Listbox.Empty>No match</Listbox.Empty>
          ) : (
            filtered.map((item) => (
              <Listbox.Item key={item.value} item={item}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))
          )}
        </Listbox.Content>
      </Listbox.Root>
    </div>
  );
}
