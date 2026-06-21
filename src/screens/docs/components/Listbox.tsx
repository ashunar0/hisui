import { useMemo, useState } from "react";
import { Listbox, createListCollection } from "@/components/ui/listbox";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Listbox.Root",
    description:
      "外枠。 collection (createListCollection で作る) + value / onValueChange で選択管理。 selectionMode で single / multiple。",
  },
  {
    name: "Listbox.Label",
    description: "見出し。 aria-labelledby に自動接続。",
  },
  {
    name: "Listbox.Input",
    description:
      "filter 用 input (任意)。 value/onChange で外部 filter と紐付ける。 Select と違い popup じゃないので Input が無くても成立。",
  },
  {
    name: "Listbox.Content",
    description: "Item を並べる scrollable container。 常時展開で popup 無し。",
  },
  {
    name: "Listbox.Empty",
    description: "filter 結果 0 件等の fallback。 Item と切り替えて出す。",
  },
  {
    name: "Listbox.Item / ItemText / ItemIndicator",
    description:
      "1 候補。 item prop に collection.items の要素を渡す。 ItemIndicator は選択時のみ Check icon。",
  },
  {
    name: "Listbox.ItemGroup / ItemGroupLabel",
    description: "候補を group 分けする時に使う。 category ヘッダ + Item 群の組。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "collection",
    type: "ListCollection",
    description: "createListCollection で作る。 items: { label, value }[]。",
  },
  {
    name: "value",
    type: "string[]",
    description: "controlled の選択値配列。 single でも array で扱う。",
  },
  {
    name: "defaultValue",
    type: "string[]",
    description: "uncontrolled の初期選択。",
  },
  {
    name: "onValueChange",
    type: "(details: { value: string[] }) => void",
    description: "選択が変わった時に呼ばれる。",
  },
  {
    name: "selectionMode",
    type: '"single" | "multiple"',
    default: '"single"',
    description: "multiple で複数同時選択可。 single は常に 1 つ。",
  },
  {
    name: "deselectable",
    type: "boolean",
    default: "false",
    description:
      "single mode で選択済 item の再 click で解除可にする。 multiple は default で解除可。",
  },
  {
    name: "loopFocus",
    type: "boolean",
    default: "false",
    description: "↑↓ keyboard nav の wrap-around。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "全 item 無効化。",
  },
];

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

function SingleExample() {
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

function FilterExample() {
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

function MultiGroupedExample() {
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

export function ListboxDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Listbox">
        常時展開の候補 list。 popup を開かずにそのまま選ばせる Select。 form
        の inline select / settings panel / sidebar nav 等に向く。 single /
        multiple、 filter input、 group 分けすべて対応。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Label / Input (任意) / Content。 Content の中に Item 群 (+ Group 任意)、 Empty fallback。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[18rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Usage"
        description="createListCollection で items を渡し、 Item に item prop で各要素を渡す。 ItemIndicator で選択 check。"
      >
        <Example
          code={`const collection = createListCollection({ items: LANGS });

<Listbox.Root collection={collection} defaultValue={["ts"]}>
  <Listbox.Label>Language</Listbox.Label>
  <Listbox.Content>
    {LANGS.map((item) => (
      <Listbox.Item key={item.value} item={item}>
        <Listbox.ItemText>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator />
      </Listbox.Item>
    ))}
  </Listbox.Content>
</Listbox.Root>`}
        >
          <SingleExample />
        </Example>
      </DocSection>

      <DocSection
        title="Filterable"
        description="Input を置いて外部 state で filter。 0 件は Empty fallback。 popup じゃない Select 風 UI に。"
      >
        <Example
          code={`const [query, setQuery] = useState("");
const filtered = LANGS.filter((l) => l.label.toLowerCase().includes(query.toLowerCase()));
const collection = createListCollection({ items: filtered });

<Listbox.Root collection={collection}>
  <Listbox.Label>Search language</Listbox.Label>
  <Listbox.Input value={query} onChange={(e) => setQuery(e.target.value)} />
  <Listbox.Content>
    {filtered.length === 0 ? <Listbox.Empty>No match</Listbox.Empty> : ...}
  </Listbox.Content>
</Listbox.Root>`}
        >
          <FilterExample />
        </Example>
      </DocSection>

      <DocSection
        title="Multiple + grouped"
        description="selectionMode=multiple で複数選択、 ItemGroup + ItemGroupLabel で category 分け。"
      >
        <Example
          code={`<Listbox.Root collection={collection} selectionMode="multiple" defaultValue={["jp", "de"]}>
  <Listbox.Content>
    {COUNTRIES.map((group) => (
      <Listbox.ItemGroup key={group.region}>
        <Listbox.ItemGroupLabel>{group.region}</Listbox.ItemGroupLabel>
        {group.countries.map((item) => <Listbox.Item key={item.value} item={item}>...</Listbox.Item>)}
      </Listbox.ItemGroup>
    ))}
  </Listbox.Content>
</Listbox.Root>`}
        >
          <MultiGroupedExample />
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
