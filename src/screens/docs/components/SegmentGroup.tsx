import { Calendar, List, Map } from "lucide-react";
import { SegmentGroup } from "@/components/ui/segment-group";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "SegmentGroup.Root",
    description:
      "外枠。 value / onValueChange で選択 item を管理。 sunken bg の rounded container。 single radio 風 (常に 1 つ選択)。",
  },
  {
    name: "SegmentGroup.Indicator",
    description:
      "選択中 item の下に浮かぶ surface 矩形。 Item の位置に追従して滑らかに transition。",
  },
  {
    name: "SegmentGroup.Item",
    description:
      "1 つの segment。 value 必須。 内部 ItemHiddenInput を自動 mount。 click で選択。",
  },
  {
    name: "SegmentGroup.ItemText",
    description: "Item 内の label text。 a11y のため Item の主 text を wrap する。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "value",
    type: "string",
    description: "controlled mode の選択 value。 single 選択固定 (string 1 つ)。",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "uncontrolled mode の初期選択。",
  },
  {
    name: "onValueChange",
    type: "(details: { value: string }) => void",
    description: "選択が変わった時に呼ばれる。",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Item の並び方向。 vertical で縦並び。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "全 item 無効化。",
  },
  {
    name: "name",
    type: "string",
    description: "form 内で送信する hidden input の name。",
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

export function SegmentGroupDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="SegmentGroup">
        iOS 風の segmented control。 常に 1 つだけ選択された single radio で、
        選択中 item の下に浮かぶ Indicator が滑らかに追従する。 ToggleGroup
        と違って bordered ではなく sunken 背景、 view switcher / time period
        などに向く。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Indicator (1 つ) と Item 群を並べる。 Indicator は absolute で Item の上に重なる。"
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
        description="time period switcher の典型。 Indicator を Item 群より前に置く。"
      >
        <Example
          code={`<SegmentGroup.Root defaultValue="week">
  <SegmentGroup.Indicator />
  <SegmentGroup.Item value="day"><SegmentGroup.ItemText>Day</SegmentGroup.ItemText></SegmentGroup.Item>
  <SegmentGroup.Item value="week"><SegmentGroup.ItemText>Week</SegmentGroup.ItemText></SegmentGroup.Item>
  <SegmentGroup.Item value="month"><SegmentGroup.ItemText>Month</SegmentGroup.ItemText></SegmentGroup.Item>
</SegmentGroup.Root>`}
        >
          <SegmentGroup.Root defaultValue="week">
            <SegmentGroup.Indicator />
            <SegmentGroup.Item value="day">
              <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
            </SegmentGroup.Item>
            <SegmentGroup.Item value="week">
              <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
            </SegmentGroup.Item>
            <SegmentGroup.Item value="month">
              <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
            </SegmentGroup.Item>
          </SegmentGroup.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Icon + text"
        description="view switcher で icon と label を並べる。"
      >
        <Example
          code={`<SegmentGroup.Item value="list">
  <List />
  <SegmentGroup.ItemText>List</SegmentGroup.ItemText>
</SegmentGroup.Item>`}
        >
          <SegmentGroup.Root defaultValue="list">
            <SegmentGroup.Indicator />
            <SegmentGroup.Item value="list">
              <List className="size-4" />
              <SegmentGroup.ItemText>List</SegmentGroup.ItemText>
            </SegmentGroup.Item>
            <SegmentGroup.Item value="calendar">
              <Calendar className="size-4" />
              <SegmentGroup.ItemText>Calendar</SegmentGroup.ItemText>
            </SegmentGroup.Item>
            <SegmentGroup.Item value="map">
              <Map className="size-4" />
              <SegmentGroup.ItemText>Map</SegmentGroup.ItemText>
            </SegmentGroup.Item>
          </SegmentGroup.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Vertical"
        description="orientation=vertical で縦並び。 settings の section nav 等。"
      >
        <Example
          code={`<SegmentGroup.Root orientation="vertical" defaultValue="general">
  <SegmentGroup.Indicator />
  ...
</SegmentGroup.Root>`}
        >
          <SegmentGroup.Root orientation="vertical" defaultValue="general">
            <SegmentGroup.Indicator />
            {["General", "Billing", "Members", "Security"].map((label) => (
              <SegmentGroup.Item key={label} value={label.toLowerCase()}>
                <SegmentGroup.ItemText>{label}</SegmentGroup.ItemText>
              </SegmentGroup.Item>
            ))}
          </SegmentGroup.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Disabled item"
        description="Item に disabled で個別、 Root に disabled で全体。"
      >
        <Example
          code={`<SegmentGroup.Item value="pro" disabled>Pro (locked)</SegmentGroup.Item>`}
        >
          <SegmentGroup.Root defaultValue="free">
            <SegmentGroup.Indicator />
            <SegmentGroup.Item value="free">
              <SegmentGroup.ItemText>Free</SegmentGroup.ItemText>
            </SegmentGroup.Item>
            <SegmentGroup.Item value="pro" disabled>
              <SegmentGroup.ItemText>Pro (locked)</SegmentGroup.ItemText>
            </SegmentGroup.Item>
            <SegmentGroup.Item value="enterprise">
              <SegmentGroup.ItemText>Enterprise</SegmentGroup.ItemText>
            </SegmentGroup.Item>
          </SegmentGroup.Root>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
