import { Bell, Info, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Tooltip.Root",
    description:
      "外枠。 openDelay / closeDelay でホバー応答を制御。 default は 400ms / 100ms。",
  },
  {
    name: "Tooltip.Trigger",
    description:
      "ホバー / focus で開くトリガー。 asChild で IconButton 等にラップ。",
  },
  {
    name: "Tooltip.Content",
    description:
      "中身。 内部で Portal + Positioner を自動 mount。 暗い吹き出し (bg-fg / text-bg)。",
  },
  {
    name: "Tooltip.Arrow",
    description:
      "矢印の外枠。 --arrow-size と --arrow-background で大きさ / 色を制御。",
  },
  {
    name: "Tooltip.ArrowTip",
    description: "矢印の三角。 通常 Arrow の中に空タグで置く。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "openDelay",
    type: "number",
    default: "400",
    description: "hover してから開くまでの ms。",
  },
  {
    name: "closeDelay",
    type: "number",
    default: "100",
    description: "leave してから閉じるまでの ms。",
  },
  {
    name: "open",
    type: "boolean",
    description: "controlled mode の表示状態。",
  },
  {
    name: "onOpenChange",
    type: "(details: { open: boolean }) => void",
    description: "open 状態が変わった時に呼ばれる。",
  },
  {
    name: "positioning",
    type: '{ placement?: "top" | "bottom" | "left" | "right" | ... }',
    description: "Floating UI に渡す。 placement で出る向きを指定。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "trigger で hover しても出ない。",
  },
];

const PLACEMENTS = ["top", "bottom", "left", "right"] as const;

export function TooltipDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Tooltip">
        IconButton / Avatar など label 無しの UI に hover / focus で説明文を出す。
        bg-fg / text-bg の暗い吹き出し + 矢印。 Portal で z-order を確実に上に。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root 直下に Trigger と Content。 Content は中で Portal + Positioner を内蔵。"
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
        description="Trigger を IconButton に被せる典型例。 hover / focus で表示。"
      >
        <Example
          code={`<Tooltip.Root>
  <Tooltip.Trigger asChild>
    <IconButton aria-label="Notifications"><Bell className="size-4" /></IconButton>
  </Tooltip.Trigger>
  <Tooltip.Content>Notifications</Tooltip.Content>
</Tooltip.Root>`}
        >
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <IconButton aria-label="Notifications">
                <Bell className="size-4" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>Notifications</Tooltip.Content>
          </Tooltip.Root>
        </Example>
      </DocSection>

      <DocSection
        title="With arrow"
        description="Arrow + ArrowTip を Content の中に置くと矢印が付く。 placement に追従して向き自動。"
      >
        <Example
          code={`<Tooltip.Content>
  Move to trash
  <Tooltip.Arrow>
    <Tooltip.ArrowTip />
  </Tooltip.Arrow>
</Tooltip.Content>`}
        >
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <IconButton aria-label="Delete" colorPalette="danger">
                <Trash2 className="size-4" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>
              Move to trash
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
            </Tooltip.Content>
          </Tooltip.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Placements"
        description="positioning.placement で 4 方向。 余白が無いと自動で flip する。"
      >
        <Example
          code={`<Tooltip.Root positioning={{ placement: "top" }}>...</Tooltip.Root>`}
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {PLACEMENTS.map((p) => (
              <div key={p} className="flex flex-col items-center gap-2 p-6">
                <Tooltip.Root positioning={{ placement: p }}>
                  <Tooltip.Trigger asChild>
                    <Button variant="outline" size="sm">
                      {p}
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    placement: {p}
                    <Tooltip.Arrow>
                      <Tooltip.ArrowTip />
                    </Tooltip.Arrow>
                  </Tooltip.Content>
                </Tooltip.Root>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Delay"
        description="openDelay を 0 にすると即時表示、 800 にすると遅延を強める。"
      >
        <Example
          code={`<Tooltip.Root openDelay={0}>...</Tooltip.Root>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Tooltip.Root openDelay={0}>
              <Tooltip.Trigger asChild>
                <Button variant="outline">openDelay=0</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>即時表示</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root openDelay={800}>
              <Tooltip.Trigger asChild>
                <Button variant="outline">openDelay=800</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>遅延 800ms</Tooltip.Content>
            </Tooltip.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="On help icon"
        description="form field の補足に小さな ? icon と組み合わせる定番。"
      >
        <Example
          code={`<label className="flex items-center gap-1.5">
  <span>Username</span>
  <Tooltip.Root>
    <Tooltip.Trigger asChild>
      <button type="button" aria-label="Username の説明">
        <Info className="size-3.5 text-fg-muted" />
      </button>
    </Tooltip.Trigger>
    <Tooltip.Content>3 〜 20 文字、 半角英数のみ</Tooltip.Content>
  </Tooltip.Root>
</label>`}
        >
          <label className="flex items-center gap-1.5 text-sm">
            <span className="font-medium text-fg-soft">Username</span>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  type="button"
                  aria-label="Username の説明"
                  className="cursor-pointer"
                >
                  <Info className="size-3.5 text-fg-muted" />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>3 〜 20 文字、 半角英数のみ</Tooltip.Content>
            </Tooltip.Root>
          </label>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
