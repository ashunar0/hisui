import { CalendarDays } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HoverCard } from "@/components/ui/hover-card";
import { Stack } from "@/components/ui/stack";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "HoverCard.Root",
    description:
      "外枠。 openDelay / closeDelay で hover の遅延。 ui-lab default は 150ms。",
  },
  {
    name: "HoverCard.Trigger",
    description: "hover の起点。 asChild で link / avatar 等にラップ。 keyboard は focus で発火。",
  },
  {
    name: "HoverCard.Content",
    description:
      "中身。 内部で Portal + Positioner + animation を自動 mount。 shadow + border の floating surface。",
  },
  {
    name: "HoverCard.Arrow / ArrowTip",
    description:
      "矢印。 placement に追従して向きが変わる。 surface 同色の塗りつぶし三角。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "openDelay",
    type: "number",
    default: "150",
    description: "hover してから開くまでの ms。 短すぎると hover で出やすく、 長すぎると遅く感じる。",
  },
  {
    name: "closeDelay",
    type: "number",
    default: "150",
    description: "離れてから閉じるまでの ms。 Trigger → Content への移動猶予に使う。",
  },
  {
    name: "open",
    type: "boolean",
    description: "controlled mode の表示状態。",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "uncontrolled mode の初期表示。",
  },
  {
    name: "onOpenChange",
    type: "(details: { open: boolean }) => void",
    description: "open 状態が変わった時に呼ばれる。",
  },
  {
    name: "positioning",
    type: '{ placement?: "top" | "bottom" | "left" | "right" | ... }',
    description: "Floating UI 設定。 placement / gutter / offset 等を渡す。",
  },
];

export function HoverCardDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="HoverCard">
        hover で開く preview panel。 user mention / link / item の補足情報を
        click せずに見せる。 Tooltip より中身を自由に組めて、 Popover と違い
        click 不要なので軽い browsing 向き。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Trigger と Content。 Content は内部で Portal + Positioner を内蔵。"
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
        description="text link を Trigger に、 Content に簡単な説明と画像を並べる典型。"
      >
        <Example
          code={`<HoverCard.Root>
  <HoverCard.Trigger asChild>
    <a className="cursor-pointer text-fg underline">@asahi</a>
  </HoverCard.Trigger>
  <HoverCard.Content>
    <Stack gap="sm">
      <Avatar.Root><Avatar.Fallback>A</Avatar.Fallback></Avatar.Root>
      <div>
        <p className="font-semibold">Asahi</p>
        <p className="text-fg-muted text-sm">Building ui-lab.</p>
      </div>
    </Stack>
  </HoverCard.Content>
</HoverCard.Root>`}
        >
          <p className="text-fg-soft text-sm">
            Created by{" "}
            <HoverCard.Root>
              <HoverCard.Trigger asChild>
                <span className="cursor-pointer text-fg underline underline-offset-2">
                  @asahi
                </span>
              </HoverCard.Trigger>
              <HoverCard.Content className="w-72">
                <Stack direction="row" align="start" gap="md">
                  <Avatar.Root>
                    <Avatar.Fallback>A</Avatar.Fallback>
                  </Avatar.Root>
                  <Stack gap="xs" className="min-w-0 flex-1">
                    <p className="font-semibold text-fg text-sm">Asahi</p>
                    <p className="text-fg-muted text-xs">
                      Building ui-lab. Solo dev exploring design systems.
                    </p>
                    <div className="flex items-center gap-1 pt-1 text-fg-muted text-xs">
                      <CalendarDays className="size-3" />
                      Joined March 2024
                    </div>
                  </Stack>
                </Stack>
              </HoverCard.Content>
            </HoverCard.Root>
            .
          </p>
        </Example>
      </DocSection>

      <DocSection
        title="With arrow"
        description="Content に Arrow + ArrowTip を入れると向き付き。 placement 追従。"
      >
        <Example
          code={`<HoverCard.Content>
  <HoverCard.Arrow><HoverCard.ArrowTip /></HoverCard.Arrow>
  ...
</HoverCard.Content>`}
        >
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <Button variant="outline">Hover me</Button>
            </HoverCard.Trigger>
            <HoverCard.Content className="w-64">
              <HoverCard.Arrow>
                <HoverCard.ArrowTip />
              </HoverCard.Arrow>
              <p className="text-fg-soft text-sm">
                Arrow tip が Trigger の方向に向くのだ。
              </p>
            </HoverCard.Content>
          </HoverCard.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Custom delay"
        description="openDelay / closeDelay でタイミング調整。 link rich preview は少し長めの方が誤発火しない。"
      >
        <Example
          code={`<HoverCard.Root openDelay={400} closeDelay={100}>...`}
        >
          <div className="flex items-center gap-6 text-fg-soft text-sm">
            <HoverCard.Root openDelay={0} closeDelay={0}>
              <HoverCard.Trigger asChild>
                <span className="cursor-pointer text-fg underline underline-offset-2">
                  instant
                </span>
              </HoverCard.Trigger>
              <HoverCard.Content className="text-sm">
                0 / 0 — 即出 / 即閉
              </HoverCard.Content>
            </HoverCard.Root>
            <HoverCard.Root openDelay={150} closeDelay={150}>
              <HoverCard.Trigger asChild>
                <span className="cursor-pointer text-fg underline underline-offset-2">
                  default
                </span>
              </HoverCard.Trigger>
              <HoverCard.Content className="text-sm">
                150 / 150 — ui-lab default
              </HoverCard.Content>
            </HoverCard.Root>
            <HoverCard.Root openDelay={500} closeDelay={200}>
              <HoverCard.Trigger asChild>
                <span className="cursor-pointer text-fg underline underline-offset-2">
                  slow
                </span>
              </HoverCard.Trigger>
              <HoverCard.Content className="text-sm">
                500 / 200 — rich preview 向け
              </HoverCard.Content>
            </HoverCard.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
