import { useState } from "react";
import { RadioGroup } from "@/components/ui/radio-group";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "RadioGroup.Root",
    description:
      "外枠。 flex flex-col gap-2 で縦並びの container。 value / onValueChange で選択状態を管理。",
  },
  {
    name: "RadioGroup.Label",
    description: "group 全体のラベル。 text-sm font-medium で控えめに。",
  },
  {
    name: "RadioGroup.Item",
    description:
      "1 つの選択肢。 Root に value 必須。 ItemControl + ItemText を中に並べる。",
  },
  {
    name: "RadioGroup.ItemControl",
    description:
      "丸い radio button。 size-4 + border、 checked で bg-fg + 内側に bg-bg の dot。",
  },
  {
    name: "RadioGroup.ItemText",
    description: "選択肢の文字。 ItemControl 右に並ぶ。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "value",
    type: "string",
    description: "controlled mode の選択中 value。",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "uncontrolled mode の初期 value。",
  },
  {
    name: "onValueChange",
    type: "(details: { value: string }) => void",
    description: "選択が変わった時に呼ばれる。 controlled mode で必須。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "group 全体を disable。 個別 Item の disabled prop でも可。",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"vertical"',
    description: "並べる向き。 horizontal は flex-row、 vertical は flex-col。",
  },
];

const PLANS = [
  { value: "free", label: "Free", desc: "Up to 3 projects" },
  { value: "pro", label: "Pro", desc: "Unlimited projects" },
  { value: "team", label: "Team", desc: "Pro + collaboration" },
] as const;

function ControlledExample() {
  const [value, setValue] = useState("pro");
  return (
    <div className="flex flex-col gap-2">
      <RadioGroup.Root value={value} onValueChange={(d) => setValue(d.value)}>
        {PLANS.map((p) => (
          <RadioGroup.Item key={p.value} value={p.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{p.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
      <p className="text-fg-muted text-xs">selected: {value}</p>
    </div>
  );
}

function CardListExample() {
  const [value, setValue] = useState("pro");
  return (
    <RadioGroup.Root
      value={value}
      onValueChange={(d) => setValue(d.value)}
      className="gap-3"
    >
      {PLANS.map((p) => (
        <RadioGroup.Item
          key={p.value}
          value={p.value}
          className="w-full rounded-md border border-border p-4 data-[state=checked]:border-fg-soft data-[state=checked]:bg-surface-muted"
        >
          <RadioGroup.ItemControl />
          <div className="flex flex-col">
            <RadioGroup.ItemText className="font-medium">
              {p.label}
            </RadioGroup.ItemText>
            <span className="text-fg-muted text-xs">{p.desc}</span>
          </div>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}

export function RadioGroupDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="RadioGroup">
        排他選択 (択一) の form control。 Checkbox との違いは「複数選べる /
        選べない」。 Root に value を持たせ、 各 Item に value を渡す。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に複数 Item、 各 Item に ItemControl と ItemText を並べる。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[12rem_1fr] gap-3">
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
        description="uncontrolled (defaultValue) の最小例。"
      >
        <Example
          code={`<RadioGroup.Root defaultValue="pro">
  {PLANS.map((p) => (
    <RadioGroup.Item key={p.value} value={p.value}>
      <RadioGroup.ItemControl />
      <RadioGroup.ItemText>{p.label}</RadioGroup.ItemText>
    </RadioGroup.Item>
  ))}
</RadioGroup.Root>`}
        >
          <RadioGroup.Root defaultValue="pro">
            {PLANS.map((p) => (
              <RadioGroup.Item key={p.value} value={p.value}>
                <RadioGroup.ItemControl />
                <RadioGroup.ItemText>{p.label}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Controlled"
        description="value + onValueChange を渡して制御。 onValueChange は details.value で string を受け取る。"
      >
        <Example
          code={`const [value, setValue] = useState("pro");
<RadioGroup.Root value={value} onValueChange={(d) => setValue(d.value)}>
  ...
</RadioGroup.Root>`}
        >
          <ControlledExample />
        </Example>
      </DocSection>

      <DocSection
        title="With label"
        description="RadioGroup.Label を Root の中に置くと group ラベル + items の構成に。"
      >
        <Example
          code={`<RadioGroup.Root defaultValue="pro">
  <RadioGroup.Label>Plan</RadioGroup.Label>
  ...
</RadioGroup.Root>`}
        >
          <RadioGroup.Root defaultValue="pro">
            <RadioGroup.Label>Plan</RadioGroup.Label>
            {PLANS.map((p) => (
              <RadioGroup.Item key={p.value} value={p.value}>
                <RadioGroup.ItemControl />
                <RadioGroup.ItemText>{p.label}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Horizontal"
        description="orientation=horizontal で横並び。 inline で短い選択肢に。"
      >
        <Example
          code={`<RadioGroup.Root orientation="horizontal" defaultValue="md">
  {["sm", "md", "lg"].map((v) => (
    <RadioGroup.Item key={v} value={v}>
      <RadioGroup.ItemControl />
      <RadioGroup.ItemText>{v}</RadioGroup.ItemText>
    </RadioGroup.Item>
  ))}
</RadioGroup.Root>`}
        >
          <RadioGroup.Root
            orientation="horizontal"
            defaultValue="md"
            className="flex-row gap-4"
          >
            {["sm", "md", "lg"].map((v) => (
              <RadioGroup.Item key={v} value={v}>
                <RadioGroup.ItemControl />
                <RadioGroup.ItemText>{v}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Disabled"
        description="group 全体 / 個別 Item で disabled 指定。"
      >
        <Example
          code={`<RadioGroup.Root defaultValue="pro">
  <RadioGroup.Item value="free">…</RadioGroup.Item>
  <RadioGroup.Item value="pro">…</RadioGroup.Item>
  <RadioGroup.Item value="team" disabled>…</RadioGroup.Item>
</RadioGroup.Root>`}
        >
          <RadioGroup.Root defaultValue="pro">
            {PLANS.map((p) => (
              <RadioGroup.Item
                key={p.value}
                value={p.value}
                disabled={p.value === "team"}
              >
                <RadioGroup.ItemControl />
                <RadioGroup.ItemText>
                  {p.label}
                  {p.value === "team" && " (disabled)"}
                </RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Card list pattern"
        description="Item に border + padding を当てて、 選択中 Item の見た目を data-[state=checked] で強調するパターン。 plan picker / settings の典型。"
      >
        <Example
          code={`<RadioGroup.Item
  value={p.value}
  className="w-full rounded-md border border-border p-4 data-[state=checked]:border-fg-soft data-[state=checked]:bg-surface-muted"
>
  <RadioGroup.ItemControl />
  <div className="flex flex-col">
    <RadioGroup.ItemText className="font-medium">{p.label}</RadioGroup.ItemText>
    <span>{p.desc}</span>
  </div>
</RadioGroup.Item>`}
        >
          <CardListExample />
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
