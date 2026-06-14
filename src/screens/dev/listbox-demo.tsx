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

const COUNTRIES = [
  {
    region: "Asia",
    countries: [
      { label: "Japan", value: "jp" },
      { label: "South Korea", value: "kr" },
      { label: "Singapore", value: "sg" },
      { label: "Thailand", value: "th" },
    ],
  },
  {
    region: "Europe",
    countries: [
      { label: "Germany", value: "de" },
      { label: "France", value: "fr" },
      { label: "Spain", value: "es" },
    ],
  },
  {
    region: "Americas",
    countries: [
      { label: "United States", value: "us" },
      { label: "Canada", value: "ca" },
      { label: "Brazil", value: "br" },
    ],
  },
];

const langCollection = createListCollection({ items: LANGS });

const groupedCollection = createListCollection({
  items: COUNTRIES.flatMap((g) => g.countries),
});

function SingleDemo() {
  return (
    <Listbox.Root
      collection={langCollection}
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

function FilterDemo() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      LANGS.filter((l) =>
        l.label.toLowerCase().includes(query.toLowerCase()),
      ),
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
            <Listbox.Empty>No match for "{query}"</Listbox.Empty>
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

function MultiGroupedDemo() {
  return (
    <Listbox.Root
      collection={groupedCollection}
      selectionMode="multiple"
      defaultValue={["jp", "de"]}
      className="w-64"
    >
      <Listbox.Label>Available regions (multi)</Listbox.Label>
      <Listbox.Content>
        {COUNTRIES.map((group) => (
          <Listbox.ItemGroup key={group.region}>
            <Listbox.ItemGroupLabel>{group.region}</Listbox.ItemGroupLabel>
            {group.countries.map((item) => (
              <Listbox.Item key={item.value} item={item}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.ItemGroup>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
}

export function ListboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          single select (常時展開、 ItemIndicator で checkmark)
        </span>
        <SingleDemo />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          search filterable (Input で絞り込み、 0 件で Empty fallback)
        </span>
        <FilterDemo />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          multi-select grouped (selectionMode=multiple + ItemGroup x 3)
        </span>
        <MultiGroupedDemo />
      </div>
    </div>
  );
}
