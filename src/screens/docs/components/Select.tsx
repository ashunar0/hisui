import { Check, ChevronDown, X } from "lucide-react";
import { useMemo, useState } from "react";
import { createListCollection, Select } from "@/components/ui/select";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Select.Root",
    description:
      "外枠。 collection (createListCollection で作る) と value で選択を管理。 multiple で複数選択。",
  },
  {
    name: "Select.Label",
    description: "フィールドの label。 a11y 連動。",
  },
  {
    name: "Select.Control",
    description: "Trigger と ClearTrigger を並べる行。 relative + inline-flex。",
  },
  {
    name: "Select.Trigger",
    description: "開閉ボタン。 中に ValueText + Indicator を置く。",
  },
  {
    name: "Select.ValueText",
    description: "選択中の表示。 placeholder prop で未選択時の文言。",
  },
  {
    name: "Select.Indicator",
    description: "chevron。 開閉で rotate。",
  },
  {
    name: "Select.ClearTrigger",
    description: "選択クリアボタン。 値があるときだけ表示。",
  },
  {
    name: "Select.Content / List / Item",
    description:
      "Content が floating panel、 中の List に Item を並べる。 内部で Portal + Positioner。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "Root.collection",
    type: "ListCollection",
    description:
      "createListCollection({ items, itemToString?, itemToValue? }) で作る。 type-safe な item array。",
  },
  {
    name: "Root.value",
    type: "string[]",
    description:
      "controlled mode の選択値。 single でも array で受ける ([] or [val])。",
  },
  {
    name: "Root.defaultValue",
    type: "string[]",
    description: "uncontrolled mode の初期値。",
  },
  {
    name: "Root.onValueChange",
    type: "(details: { value: string[], items: Item[] }) => void",
    description: "選択が変わった時に呼ばれる。",
  },
  {
    name: "Root.multiple",
    type: "boolean",
    default: "false",
    description: "複数選択モード。 closeOnSelect が default false に。",
  },
  {
    name: "Root.positioning",
    type: "{ placement?, sameWidth?, ... }",
    description: "Floating UI 設定。 sameWidth=true (default) で Trigger 幅と揃える。",
  },
  {
    name: "Root.size",
    type: '"xs" | "sm" | "md" | "lg"',
    default: '"md"',
    description:
      "Trigger の高さ・padding・font-size を Input と同じ scale に揃える。 Context 経由で Trigger に流れる。",
  },
];

const FRAMEWORKS = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
    { label: "Qwik", value: "qwik" },
  ],
});

const FRUITS = createListCollection({
  items: [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Durian", value: "durian", disabled: true },
  ],
});

function ControlledExample() {
  const [value, setValue] = useState<string[]>(["react"]);
  return (
    <div className="flex flex-col gap-2">
      <Select.Root
        collection={FRAMEWORKS}
        value={value}
        onValueChange={(d) => setValue(d.value)}
      >
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger className="w-48">
            <Select.ValueText placeholder="Pick one" />
            <Select.Indicator>
              <ChevronDown className="size-4" />
            </Select.Indicator>
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
      <p className="text-fg-muted text-xs">selected: [{value.join(", ")}]</p>
    </div>
  );
}

function MultipleExample() {
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

function ClearableExample() {
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

function GroupedExample() {
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
  const groups = ["Fruits", "Vegetables"] as const;
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
          {groups.map((g) => (
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

export function SelectDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Select">
        ドロップダウンの選択肢。 createListCollection で items を型安全に渡し、
        value array で選択を制御する。 single / multiple、 group 化、 clear、
        disabled item に対応。 form の単純な native select 代替に使う。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root → (Label + Control(Trigger + Indicator) + Content(List + Item))。 ItemText / ItemIndicator は Item の中に。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[16rem_1fr] gap-3">
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
        description="createListCollection で items を作り、 Root に渡す。 controlled で value array を管理。"
      >
        <Example
          code={`const FRAMEWORKS = createListCollection({
  items: [{ label: "React", value: "react" }, ...]
});

const [value, setValue] = useState<string[]>(["react"]);

<Select.Root collection={FRAMEWORKS} value={value} onValueChange={(d) => setValue(d.value)}>
  <Select.Label>Framework</Select.Label>
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Pick one" />
      <Select.Indicator><ChevronDown /></Select.Indicator>
    </Select.Trigger>
  </Select.Control>
  <Select.Content>
    <Select.List>
      {FRAMEWORKS.items.map((f) => (
        <Select.Item item={f}>
          <Select.ItemText>{f.label}</Select.ItemText>
          <Select.ItemIndicator><Check /></Select.ItemIndicator>
        </Select.Item>
      ))}
    </Select.List>
  </Select.Content>
</Select.Root>`}
        >
          <ControlledExample />
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="Root の size で xs / sm / md / lg。 Context で Trigger に流れる。 Input と同じ scale。"
      >
        <Example
          code={`<Select.Root size="xs" ...>…</Select.Root>
<Select.Root size="sm" ...>…</Select.Root>
<Select.Root size="md" ...>…</Select.Root>
<Select.Root size="lg" ...>…</Select.Root>`}
        >
          <div className="flex flex-col gap-3">
            {(["xs", "sm", "md", "lg"] as const).map((s) => (
              <Select.Root key={s} collection={FRAMEWORKS} size={s}>
                <Select.Control>
                  <Select.Trigger className="w-48">
                    <Select.ValueText placeholder={`size=${s}`} />
                    <Select.Indicator>
                      <ChevronDown className="size-4" />
                    </Select.Indicator>
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
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Multiple"
        description="multiple で複数選択可。 closeOnSelect が default false に変わるので連続選択しやすい。"
      >
        <Example
          code={`<Select.Root collection={FRUITS} multiple value={value} onValueChange={(d) => setValue(d.value)}>
  ...
</Select.Root>`}
        >
          <MultipleExample />
        </Example>
      </DocSection>

      <DocSection
        title="Disabled item"
        description="collection の item に disabled: true を含めると個別に無効化。"
      >
        <Example
          code={`createListCollection({
  items: [
    { label: "Apple", value: "apple" },
    { label: "Durian", value: "durian", disabled: true },
  ],
})`}
        >
          <Select.Root collection={FRUITS}>
            <Select.Control>
              <Select.Trigger className="w-48">
                <Select.ValueText placeholder="Pick fruit" />
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
        </Example>
      </DocSection>

      <DocSection
        title="Clearable"
        description="ClearTrigger を Indicator と swap して 値が入ってる時だけ × を出すパターン。"
      >
        <Example
          code={`{hasValue ? (
  <Select.ClearTrigger><X /></Select.ClearTrigger>
) : (
  <Select.Indicator><ChevronDown /></Select.Indicator>
)}`}
        >
          <ClearableExample />
        </Example>
      </DocSection>

      <DocSection
        title="Groups"
        description="ItemGroup + ItemGroupLabel で section 分け。 items の category 属性で filter する。"
      >
        <Example
          code={`<Select.ItemGroup>
  <Select.ItemGroupLabel>Fruits</Select.ItemGroupLabel>
  {items.filter(i => i.group === "Fruits").map(...)}
</Select.ItemGroup>
<Select.ItemGroup>
  <Select.ItemGroupLabel>Vegetables</Select.ItemGroupLabel>
  ...
</Select.ItemGroup>`}
        >
          <GroupedExample />
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
