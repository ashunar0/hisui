import { Check, ChevronDown, X } from "lucide-react";
import { Combobox, useListCollection } from "@/components/ui/combobox";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Combobox.Root",
    description:
      "外枠。 collection (useListCollection で作る) + onInputValueChange で filter を駆動。",
  },
  {
    name: "Combobox.Label",
    description: "見出し。 aria-labelledby に自動接続。",
  },
  {
    name: "Combobox.Control",
    description:
      "Input + Trigger + ClearTrigger を並べる枠。 border / focus ring を引く relative container。",
  },
  {
    name: "Combobox.Input",
    description: "text 入力。 タイプ毎に onInputValueChange が走り filter を呼ぶ。",
  },
  {
    name: "Combobox.Trigger",
    description: "右端の chevron。 click で Content 開閉。 data-state=open で 180° 回転。",
  },
  {
    name: "Combobox.ClearTrigger",
    description: "入力値を一括 clear する × button。 値があるときだけ自動表示。",
  },
  {
    name: "Combobox.Content",
    description:
      "popup の中身。 Portal + Positioner + animation を内蔵。 min-w は --reference-width で Control 幅に追従。",
  },
  {
    name: "Combobox.Empty",
    description: "filter 結果が空の時の fallback。 Content の中に Item と並べて置く。",
  },
  {
    name: "Combobox.Item / ItemText / ItemIndicator",
    description:
      "1 候補。 item prop に collection.items の要素を渡す。 ItemIndicator は選択状態でだけ render。",
  },
  {
    name: "Combobox.ItemGroup / ItemGroupLabel",
    description: "候補を group 分けする時に使う。 group の間に separator が自動で入る。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "Root.collection",
    type: "ListCollection",
    description:
      "useListCollection が返す collection。 itemToString / itemToValue / filter を内包。",
  },
  {
    name: "Root.value",
    type: "string[]",
    description: "controlled 選択値。 multiple でも single でも配列。",
  },
  {
    name: "Root.defaultValue",
    type: "string[]",
    description: "uncontrolled の初期選択。",
  },
  {
    name: "Root.onValueChange",
    type: "(details: { value: string[] }) => void",
    description: "選択が変わった時に呼ばれる。",
  },
  {
    name: "Root.onInputValueChange",
    type: "(details: { inputValue: string }) => void",
    description: "input に文字が入る度に呼ばれる。 ここで collection の filter を呼ぶ。",
  },
  {
    name: "Root.multiple",
    type: "boolean",
    default: "false",
    description: "複数選択可。 Content は選んでも閉じない。",
  },
  {
    name: "Root.openOnClick",
    type: "boolean",
    default: "false",
    description: "Input click で開く。 default は文字入力で開く。",
  },
  {
    name: "Root.disabled",
    type: "boolean",
    default: "false",
    description: "全体無効化。",
  },
];

const FRAMEWORKS = [
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

function BasicFramework() {
  const { collection, filter } = useListCollection({
    initialItems: FRAMEWORKS,
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

type City = { value: string; label: string; country: string };
const CITIES: City[] = [
  { value: "tokyo", label: "Tokyo", country: "Japan" },
  { value: "osaka", label: "Osaka", country: "Japan" },
  { value: "kyoto", label: "Kyoto", country: "Japan" },
  { value: "fukuoka", label: "Fukuoka", country: "Japan" },
  { value: "nyc", label: "New York", country: "USA" },
  { value: "sf", label: "San Francisco", country: "USA" },
  { value: "la", label: "Los Angeles", country: "USA" },
  { value: "london", label: "London", country: "UK" },
  { value: "manchester", label: "Manchester", country: "UK" },
  { value: "berlin", label: "Berlin", country: "Germany" },
  { value: "munich", label: "Munich", country: "Germany" },
];

function GroupedCity() {
  const { collection, filter } = useListCollection<City>({
    initialItems: CITIES,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
    filter: (itemText, filterText) =>
      itemText.toLowerCase().includes(filterText.toLowerCase()),
  });
  const groups = collection.items.reduce<Record<string, City[]>>((acc, c) => {
    (acc[c.country] ??= []).push(c);
    return acc;
  }, {});
  return (
    <div className="w-72">
      <Combobox.Root
        collection={collection}
        onInputValueChange={(e) => filter(e.inputValue)}
        openOnClick
      >
        <Combobox.Label>City</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Search cities..." />
          <Combobox.ClearTrigger>
            <X className="size-3.5" />
          </Combobox.ClearTrigger>
          <Combobox.Trigger>
            <ChevronDown className="size-4" />
          </Combobox.Trigger>
        </Combobox.Control>
        <Combobox.Content>
          <Combobox.Empty>No cities</Combobox.Empty>
          {Object.entries(groups).map(([country, cities]) => (
            <Combobox.ItemGroup key={country}>
              <Combobox.ItemGroupLabel>{country}</Combobox.ItemGroupLabel>
              {cities.map((city) => (
                <Combobox.Item key={city.value} item={city}>
                  <Combobox.ItemText>{city.label}</Combobox.ItemText>
                  <Combobox.ItemIndicator>
                    <Check className="size-4" />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          ))}
        </Combobox.Content>
      </Combobox.Root>
    </div>
  );
}

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

function MultipleSkills() {
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

export function ComboboxDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Combobox">
        text 入力で候補を絞り込んで選ぶ Select の上位互換。 useListCollection
        で項目を持ち、 タイプ毎に filter を回す。 single / multiple、
        flat / group、 任意の Empty fallback まで 1 primitive で。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Label と Control (Input + Trigger + ClearTrigger)、 Content (Empty + Item / ItemGroup)。"
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
        description="useListCollection で collection と filter を作り、 onInputValueChange から filter を呼ぶ。 ItemIndicator で選択チェック。"
      >
        <Example
          code={`const { collection, filter } = useListCollection({
  initialItems: FRAMEWORKS,
  itemToString: (item) => item.label,
  itemToValue: (item) => item.value,
  filter: (itemText, filterText) =>
    itemText.toLowerCase().includes(filterText.toLowerCase()),
});

<Combobox.Root
  collection={collection}
  onInputValueChange={(e) => filter(e.inputValue)}
  openOnClick
>
  <Combobox.Label>Framework</Combobox.Label>
  <Combobox.Control>
    <Combobox.Input placeholder="Search frameworks..." />
    <Combobox.Trigger><ChevronDown /></Combobox.Trigger>
  </Combobox.Control>
  <Combobox.Content>
    <Combobox.Empty>No results</Combobox.Empty>
    {collection.items.map((item) => (
      <Combobox.Item key={item.value} item={item}>
        <Combobox.ItemText>{item.label}</Combobox.ItemText>
        <Combobox.ItemIndicator><Check /></Combobox.ItemIndicator>
      </Combobox.Item>
    ))}
  </Combobox.Content>
</Combobox.Root>`}
        >
          <BasicFramework />
        </Example>
      </DocSection>

      <DocSection
        title="Grouped"
        description="ItemGroup + ItemGroupLabel で候補を category 別に。 ClearTrigger で × もつけて入力一括 clear。"
      >
        <Example
          code={`{Object.entries(groups).map(([country, cities]) => (
  <Combobox.ItemGroup key={country}>
    <Combobox.ItemGroupLabel>{country}</Combobox.ItemGroupLabel>
    {cities.map((city) => (
      <Combobox.Item key={city.value} item={city}>...</Combobox.Item>
    ))}
  </Combobox.ItemGroup>
))}`}
        >
          <GroupedCity />
        </Example>
      </DocSection>

      <DocSection
        title="Multiple"
        description="multiple で複数選択。 選んでも Content は閉じない。 選択数は Combobox.Context render-prop で取得して Label 横に出すと UI 親切。"
      >
        <Example
          code={`<Combobox.Root collection={collection} multiple defaultValue={["ts", "react"]}>
  <Combobox.Label>Skills</Combobox.Label>
  <Combobox.Context>
    {(api) => api.value.length > 0 && <span>{api.value.length} selected</span>}
  </Combobox.Context>
  ...
</Combobox.Root>`}
        >
          <MultipleSkills />
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
