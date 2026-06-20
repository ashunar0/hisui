import { Bell, HelpCircle, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Popover } from "@/components/ui/popover";
import { Stack } from "@/components/ui/stack";
import { Switch } from "@/components/ui/switch";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Popover.Root",
    description:
      "外枠。 open / onOpenChange で開閉を制御。 modal default は false (背景操作可)。",
  },
  {
    name: "Popover.Trigger",
    description: "開閉ボタン。 asChild で Button / IconButton 等にラップ。",
  },
  {
    name: "Popover.Anchor",
    description:
      "位置の基準を Trigger と切り離したい時に使う。 通常は不要 (Trigger が anchor)。",
  },
  {
    name: "Popover.Content",
    description:
      "中身。 内部で Portal + Positioner を自動 mount。 multi-layer shadow の floating surface。",
  },
  {
    name: "Popover.Title",
    description: "見出し。 a11y のため aria-labelledby に自動接続。",
  },
  {
    name: "Popover.Description",
    description: "補足。 aria-describedby に自動接続。",
  },
  {
    name: "Popover.Arrow / ArrowTip",
    description:
      "矢印。 Content の中に Arrow を置くと placement に追従して向きが変わる。",
  },
  {
    name: "Popover.CloseTrigger",
    description: "閉じるボタン。 IconButton をラップして × で閉じる典型。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "Root.open",
    type: "boolean",
    description: "controlled mode の表示状態。",
  },
  {
    name: "Root.defaultOpen",
    type: "boolean",
    default: "false",
    description: "uncontrolled mode の初期表示状態。",
  },
  {
    name: "Root.onOpenChange",
    type: "(details: { open: boolean }) => void",
    description: "open 状態が変わった時に呼ばれる。",
  },
  {
    name: "Root.modal",
    type: "boolean",
    default: "false",
    description:
      "Dialog と違い default は false (背景操作可)。 true で focus trap + body lock。",
  },
  {
    name: "Root.positioning",
    type: '{ placement?: "top" | "bottom" | "left" | "right" | ... }',
    description: "Floating UI 設定。 placement / gutter / offset 等を渡す。",
  },
  {
    name: "Root.closeOnInteractOutside",
    type: "boolean",
    default: "true",
    description: "外クリックで閉じるか。",
  },
  {
    name: "Root.closeOnEscape",
    type: "boolean",
    default: "true",
    description: "Esc キーで閉じるか。",
  },
];

const PLACEMENTS = ["top", "bottom", "left", "right"] as const;

export function PopoverDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Popover">
        Trigger に紐づく floating panel。 Tooltip より中身が自由 (form / button /
        rich content) で、 click で開閉する。 Dialog と違い modal=false が default
        なので背景操作も継続できる。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Trigger と Content。 Content は中で Portal + Positioner を内蔵。"
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
        description="Trigger を Button、 Content に Title + Description + 中身を並べる典型。"
      >
        <Example
          code={`<Popover.Root>
  <Popover.Trigger asChild>
    <Button variant="outline">
      <Settings className="size-4" />
      Display
    </Button>
  </Popover.Trigger>
  <Popover.Content>
    <Stack gap="sm">
      <Popover.Title>Display options</Popover.Title>
      <Popover.Description>Configure how the dashboard looks.</Popover.Description>
    </Stack>
  </Popover.Content>
</Popover.Root>`}
        >
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button variant="outline">
                <Settings className="size-4" />
                Display
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Stack gap="sm">
                <Popover.Title>Display options</Popover.Title>
                <Popover.Description>
                  Configure how the dashboard looks.
                </Popover.Description>
              </Stack>
            </Popover.Content>
          </Popover.Root>
        </Example>
      </DocSection>

      <DocSection
        title="With form"
        description="Input + Button を Content に並べて、 inline 編集 popup を組む。"
      >
        <Example
          code={`<Popover.Content>
  <Stack gap="md" className="w-72">
    <Popover.Title>Edit profile</Popover.Title>
    <Popover.Description>Update your display name.</Popover.Description>
    <Input placeholder="Display name" />
    <Stack direction="row" justify="end" gap="sm">
      <Popover.CloseTrigger asChild><Button variant="ghost">Cancel</Button></Popover.CloseTrigger>
      <Popover.CloseTrigger asChild><Button>Save</Button></Popover.CloseTrigger>
    </Stack>
  </Stack>
</Popover.Content>`}
        >
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button variant="outline">Edit profile</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Stack gap="md" className="w-72">
                <Popover.Title>Edit profile</Popover.Title>
                <Popover.Description>
                  Update your display name.
                </Popover.Description>
                <Input placeholder="Display name" />
                <Stack direction="row" justify="end" gap="sm">
                  <Popover.CloseTrigger asChild>
                    <Button variant="ghost">Cancel</Button>
                  </Popover.CloseTrigger>
                  <Popover.CloseTrigger asChild>
                    <Button>Save</Button>
                  </Popover.CloseTrigger>
                </Stack>
              </Stack>
            </Popover.Content>
          </Popover.Root>
        </Example>
      </DocSection>

      <DocSection
        title="With close button"
        description="Content 右上に CloseTrigger + IconButton を absolute で配置する典型 (notification panel など)。"
      >
        <Example
          code={`<Popover.Content className="relative w-80">
  <Popover.CloseTrigger asChild>
    <IconButton size="xs" aria-label="Close" className="absolute top-2 right-2">
      <X className="size-3.5" />
    </IconButton>
  </Popover.CloseTrigger>
  <Stack gap="sm">
    <Popover.Title>Notifications</Popover.Title>
    <Popover.Description>3 new updates since you were here.</Popover.Description>
  </Stack>
</Popover.Content>`}
        >
          <Popover.Root>
            <Popover.Trigger asChild>
              <IconButton aria-label="Notifications">
                <Bell className="size-4" />
              </IconButton>
            </Popover.Trigger>
            <Popover.Content className="relative w-80">
              <Popover.CloseTrigger asChild>
                <IconButton
                  size="xs"
                  aria-label="Close"
                  className="absolute top-2 right-2"
                >
                  <X className="size-3.5" />
                </IconButton>
              </Popover.CloseTrigger>
              <Stack gap="sm">
                <Popover.Title>Notifications</Popover.Title>
                <Popover.Description>
                  3 new updates since you were here.
                </Popover.Description>
                <Stack gap="xs" className="text-fg-soft text-sm">
                  <div>• Bob commented on your PR</div>
                  <div>• Carol invited you to a project</div>
                  <div>• Daily digest ready</div>
                </Stack>
              </Stack>
            </Popover.Content>
          </Popover.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Placements"
        description="positioning.placement で 4 方向。 余白が無いと自動 flip。 Arrow / ArrowTip を Content に入れると向きに追従。"
      >
        <Example
          code={`<Popover.Root positioning={{ placement: "top" }}>
  ...
  <Popover.Content>
    <Popover.Arrow><Popover.ArrowTip /></Popover.Arrow>
    ...
  </Popover.Content>
</Popover.Root>`}
        >
          <div className="flex flex-wrap items-center gap-3 p-8">
            {PLACEMENTS.map((p) => (
              <Popover.Root key={p} positioning={{ placement: p }}>
                <Popover.Trigger asChild>
                  <Button variant="outline" size="sm">
                    {p}
                  </Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Popover.Arrow>
                    <Popover.ArrowTip />
                  </Popover.Arrow>
                  <span className="text-fg-soft text-xs">placement: {p}</span>
                </Popover.Content>
              </Popover.Root>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Switch panel"
        description="Switch / Checkbox を並べて inline 設定。 click 外しで自動閉じる挙動が popover 向き。"
      >
        <Example
          code={`<Popover.Content className="w-64">
  <Stack gap="sm">
    <Popover.Title>Notifications</Popover.Title>
    <Switch.Root className="justify-between w-full" defaultChecked>
      <Switch.Label>Email</Switch.Label>
      <Switch.Control><Switch.Thumb /></Switch.Control>
    </Switch.Root>
    ...
  </Stack>
</Popover.Content>`}
        >
          <Popover.Root>
            <Popover.Trigger asChild>
              <IconButton aria-label="Settings">
                <Settings className="size-4" />
              </IconButton>
            </Popover.Trigger>
            <Popover.Content className="w-64">
              <Stack gap="sm">
                <Popover.Title>Notifications</Popover.Title>
                {["Email", "Push", "Weekly digest"].map((label, i) => (
                  <Switch.Root
                    key={label}
                    className="justify-between w-full"
                    defaultChecked={i !== 1}
                  >
                    <Switch.Label>{label}</Switch.Label>
                    <Switch.Control>
                      <Switch.Thumb />
                    </Switch.Control>
                  </Switch.Root>
                ))}
              </Stack>
            </Popover.Content>
          </Popover.Root>
        </Example>
      </DocSection>

      <DocSection
        title="On help icon"
        description="Tooltip より中身が長い説明 / link / formatting が欲しい時の form helper。"
      >
        <Example
          code={`<Popover.Root>
  <Popover.Trigger asChild>
    <IconButton size="xs" variant="ghost" aria-label="Help">
      <HelpCircle className="size-3.5" />
    </IconButton>
  </Popover.Trigger>
  <Popover.Content className="w-72">
    <Stack gap="xs">
      <Popover.Title>Password requirements</Popover.Title>
      <Popover.Description>...</Popover.Description>
    </Stack>
  </Popover.Content>
</Popover.Root>`}
        >
          <Stack direction="row" align="center" gap="sm">
            <span className="font-medium text-fg-soft text-sm">Password</span>
            <Popover.Root>
              <Popover.Trigger asChild>
                <IconButton size="xs" variant="ghost" aria-label="Help">
                  <HelpCircle className="size-3.5" />
                </IconButton>
              </Popover.Trigger>
              <Popover.Content className="w-72">
                <Stack gap="xs">
                  <Popover.Title>Password requirements</Popover.Title>
                  <Popover.Description>
                    8 文字以上で、 大文字 / 小文字 / 数字 / 記号を 1 つ以上含む。
                  </Popover.Description>
                </Stack>
              </Popover.Content>
            </Popover.Root>
          </Stack>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
