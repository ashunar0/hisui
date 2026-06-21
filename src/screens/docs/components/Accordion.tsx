import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Accordion.Root",
    description:
      "外枠。 multiple / collapsible / value で展開状態を制御。 bordered container として描画。",
  },
  {
    name: "Accordion.Item",
    description: "1 行分の wrapper。 value 必須。 disabled 個別指定可。",
  },
  {
    name: "Accordion.ItemTrigger",
    description: "header 部分の button。 click / Space / Enter で開閉。",
  },
  {
    name: "Accordion.ItemIndicator",
    description:
      "開閉状態を示す icon。 default は ChevronDown、 data-state=open で 180° 回転。",
  },
  {
    name: "Accordion.ItemContent",
    description:
      "中身。 data-state に応じて accordion-down / accordion-up animation。 内部に px-4 py-3 の wrapper。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "Root.multiple",
    type: "boolean",
    default: "false",
    description: "複数 item を同時に開けるか。 true で OS の設定 group 風。",
  },
  {
    name: "Root.collapsible",
    type: "boolean",
    default: "false",
    description:
      "single mode (multiple=false) でも開いてる item を再 click で閉じられるか。",
  },
  {
    name: "Root.value",
    type: "string[]",
    description: "controlled mode の展開中 value 配列。 single でも array で渡す。",
  },
  {
    name: "Root.defaultValue",
    type: "string[]",
    description: "uncontrolled mode の初期展開 value 配列。",
  },
  {
    name: "Root.onValueChange",
    type: "(details: { value: string[] }) => void",
    description: "展開状態が変わった時に呼ばれる。",
  },
  {
    name: "Root.disabled",
    type: "boolean",
    default: "false",
    description: "全 item を一括 disabled に。",
  },
  {
    name: "Root.orientation",
    type: '"horizontal" | "vertical"',
    default: '"vertical"',
    description: "並べる向き。 keyboard nav の方向に影響。",
  },
  {
    name: "Item.value",
    type: "string",
    description: "必須。 Root.value と紐付ける一意 key。",
  },
  {
    name: "Item.disabled",
    type: "boolean",
    default: "false",
    description: "この item だけ無効化。",
  },
];

const FAQ = [
  {
    value: "shipping",
    q: "How long does shipping take?",
    a: "Standard shipping is 3-5 business days within the US, and 7-14 days internationally. Express options are available at checkout.",
  },
  {
    value: "returns",
    q: "What is the return policy?",
    a: "Items can be returned within 30 days of delivery for a full refund, as long as they are unused and in original packaging.",
  },
  {
    value: "support",
    q: "How do I contact support?",
    a: "Email support@example.com or use the in-app chat. We typically respond within 24 hours on business days.",
  },
] as const;

function ControlledExample() {
  const [value, setValue] = useState<string[]>(["returns"]);
  return (
    <div className="flex flex-col gap-3">
      <Accordion.Root value={value} onValueChange={(d) => setValue(d.value)}>
        {FAQ.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger>
              {item.q}
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>{item.a}</Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <p className="text-fg-muted text-xs">
        open: [{value.map((v) => `"${v}"`).join(", ")}]
      </p>
    </div>
  );
}

export function AccordionDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Accordion">
        縦に積まれた expand / collapse panel。 FAQ や設定 group のように、
        複数 section の情報を畳んで縦の見通しを良くする。 single (1 つだけ開く) /
        multiple (複数同時) どちらも対応。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Item を並べ、 Item 内に ItemTrigger (+ ItemIndicator) と ItemContent。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[14rem_1fr] gap-3">
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
        description="single mode (1 つだけ開く) + collapsible で全部閉じも可。 FAQ の典型。"
      >
        <Example
          code={`<Accordion.Root collapsible defaultValue={["shipping"]}>
  {FAQ.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.ItemTrigger>
        {item.q}
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>{item.a}</Accordion.ItemContent>
    </Accordion.Item>
  ))}
</Accordion.Root>`}
        >
          <Accordion.Root collapsible defaultValue={["shipping"]}>
            {FAQ.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.ItemTrigger>
                  {item.q}
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>{item.a}</Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Multiple"
        description="multiple で複数 item を同時に開ける。 設定 group や filter panel 向け。"
      >
        <Example
          code={`<Accordion.Root multiple defaultValue={["shipping", "support"]}>
  ...
</Accordion.Root>`}
        >
          <Accordion.Root multiple defaultValue={["shipping", "support"]}>
            {FAQ.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.ItemTrigger>
                  {item.q}
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>{item.a}</Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Controlled"
        description="value + onValueChange で外部 state と同期。 single でも array で扱う。"
      >
        <Example
          code={`const [value, setValue] = useState<string[]>(["returns"]);
<Accordion.Root value={value} onValueChange={(d) => setValue(d.value)}>
  ...
</Accordion.Root>`}
        >
          <ControlledExample />
        </Example>
      </DocSection>

      <DocSection
        title="Disabled item"
        description="Item に disabled で個別無効化。 Root に渡せば全 item 無効。"
      >
        <Example
          code={`<Accordion.Item value="support" disabled>
  <Accordion.ItemTrigger>... (locked)</Accordion.ItemTrigger>
  ...
</Accordion.Item>`}
        >
          <Accordion.Root collapsible>
            <Accordion.Item value="shipping">
              <Accordion.ItemTrigger>
                {FAQ[0].q}
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>{FAQ[0].a}</Accordion.ItemContent>
            </Accordion.Item>
            <Accordion.Item value="support" disabled>
              <Accordion.ItemTrigger>
                {FAQ[2].q} (locked)
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>{FAQ[2].a}</Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
