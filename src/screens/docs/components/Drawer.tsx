import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Stack } from "@/components/ui/stack";
import { Textarea } from "@/components/ui/textarea";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Drawer.Root",
    description:
      "外枠。 swipeDirection で出てくる辺を指定 (ui-lab default は end = 右)。 open / onOpenChange で制御。",
  },
  {
    name: "Drawer.Trigger",
    description: "開閉 button。 asChild で Button / IconButton にラップ。",
  },
  {
    name: "Drawer.Content",
    description:
      "中身。 内部で Portal + Backdrop + Positioner + 辺ごとの slide animation を自動 mount。",
  },
  {
    name: "Drawer.Title / Description",
    description: "見出し + 補足。 aria-labelledby / describedby に自動接続。",
  },
  {
    name: "Drawer.CloseTrigger",
    description:
      "閉じる button。 Esc / backdrop click でも閉じる (default)。 IconButton の × で右上に置く典型。",
  },
  {
    name: "Drawer.Grabber / GrabberIndicator",
    description:
      "bottom sheet の上端に出す掴み棒。 swipe で閉じるヒントを視覚化。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "swipeDirection",
    type: '"end" | "start" | "up" | "down"',
    default: '"end"',
    description:
      "出てくる辺。 ui-lab で Ark の default (down) を end に上書き済 — SaaS の感覚に合わせるため。",
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
    description: "uncontrolled mode の初期表示状態。",
  },
  {
    name: "onOpenChange",
    type: "(details: { open: boolean }) => void",
    description: "open 状態が変わった時に呼ばれる。",
  },
  {
    name: "modal",
    type: "boolean",
    default: "true",
    description: "true で backdrop + focus trap + body lock。 false で背景操作可。",
  },
  {
    name: "closeOnInteractOutside",
    type: "boolean",
    default: "true",
    description: "backdrop click で閉じるか。",
  },
  {
    name: "closeOnEscape",
    type: "boolean",
    default: "true",
    description: "Esc キーで閉じるか。",
  },
];

export function DrawerDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Drawer">
        画面の辺から滑り込む panel。 設定の編集 / mobile menu / detail
        preview / bottom sheet 等に。 Dialog と違い辺に固定で、 swipe gesture
        と組み合わせやすい。 ui-lab default は端 (右) から。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Trigger と Content。 Content は内部で Portal + Backdrop + Positioner を自動 mount。"
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
        description="default は swipeDirection=end (右から)。 form を持つ side panel の典型。"
      >
        <Example
          code={`<Drawer.Root>
  <Drawer.Trigger asChild>
    <Button variant="outline">Edit profile</Button>
  </Drawer.Trigger>
  <Drawer.Content>
    <Stack gap="md" className="h-full p-6">
      <Drawer.Title>Edit profile</Drawer.Title>
      <Drawer.Description>Update your name and bio.</Drawer.Description>
      <Input placeholder="Name" />
      <Textarea placeholder="Bio" rows={4} />
      <div className="mt-auto flex justify-end gap-2">
        <Drawer.CloseTrigger asChild><Button variant="ghost">Cancel</Button></Drawer.CloseTrigger>
        <Drawer.CloseTrigger asChild><Button>Save</Button></Drawer.CloseTrigger>
      </div>
    </Stack>
  </Drawer.Content>
</Drawer.Root>`}
        >
          <Drawer.Root>
            <Drawer.Trigger asChild>
              <Button variant="outline">Edit profile</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Stack gap="md" className="h-full p-6">
                <Drawer.CloseTrigger asChild>
                  <IconButton
                    size="xs"
                    variant="ghost"
                    aria-label="Close"
                    className="absolute top-3 right-3"
                  >
                    <X className="size-4" />
                  </IconButton>
                </Drawer.CloseTrigger>
                <Drawer.Title>Edit profile</Drawer.Title>
                <Drawer.Description>
                  Update your name and bio.
                </Drawer.Description>
                <Input placeholder="Name" defaultValue="Asahi" />
                <Textarea placeholder="Bio" rows={4} />
                <div className="mt-auto flex justify-end gap-2">
                  <Drawer.CloseTrigger asChild>
                    <Button variant="ghost">Cancel</Button>
                  </Drawer.CloseTrigger>
                  <Drawer.CloseTrigger asChild>
                    <Button>Save</Button>
                  </Drawer.CloseTrigger>
                </div>
              </Stack>
            </Drawer.Content>
          </Drawer.Root>
        </Example>
      </DocSection>

      <DocSection
        title="From left"
        description="swipeDirection=start で左から。 mobile sidebar / nav menu に。"
      >
        <Example
          code={`<Drawer.Root swipeDirection="start">
  <Drawer.Trigger asChild>
    <IconButton variant="outline"><Menu /></IconButton>
  </Drawer.Trigger>
  <Drawer.Content>
    ...
  </Drawer.Content>
</Drawer.Root>`}
        >
          <Drawer.Root swipeDirection="start">
            <Drawer.Trigger asChild>
              <IconButton variant="outline" aria-label="Open menu">
                <Menu className="size-4" />
              </IconButton>
            </Drawer.Trigger>
            <Drawer.Content>
              <Stack gap="md" className="h-full p-6">
                <Drawer.Title>Menu</Drawer.Title>
                <nav className="flex flex-col gap-1 text-fg-soft text-sm">
                  <a className="rounded-sm px-2 py-1.5 hover:bg-hover">
                    Dashboard
                  </a>
                  <a className="rounded-sm px-2 py-1.5 hover:bg-hover">
                    Projects
                  </a>
                  <a className="rounded-sm px-2 py-1.5 hover:bg-hover">
                    Settings
                  </a>
                </nav>
              </Stack>
            </Drawer.Content>
          </Drawer.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Bottom sheet"
        description="swipeDirection=up で下から立ち上がる sheet。 mobile の sort / filter / action sheet に。 Grabber を上端に置くと swipe で閉じる UI 親切。"
      >
        <Example
          code={`<Drawer.Root swipeDirection="up">
  <Drawer.Trigger asChild>
    <Button variant="outline">Open sheet</Button>
  </Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Grabber><Drawer.GrabberIndicator /></Drawer.Grabber>
    <Stack gap="sm" className="p-6">
      <Drawer.Title>Sort by</Drawer.Title>
      ...
    </Stack>
  </Drawer.Content>
</Drawer.Root>`}
        >
          <Drawer.Root swipeDirection="up">
            <Drawer.Trigger asChild>
              <Button variant="outline">Open sheet</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Grabber>
                <Drawer.GrabberIndicator />
              </Drawer.Grabber>
              <Stack gap="sm" className="px-6 pb-6">
                <Drawer.Title>Sort by</Drawer.Title>
                <Drawer.Description>
                  Choose how to order the list.
                </Drawer.Description>
                <div className="flex flex-col gap-1 pt-2">
                  {["Newest", "Oldest", "Name (A→Z)", "Name (Z→A)"].map(
                    (label) => (
                      <Drawer.CloseTrigger
                        key={label}
                        className="cursor-pointer rounded-sm px-3 py-2 text-left text-fg-soft text-sm hover:bg-hover"
                      >
                        {label}
                      </Drawer.CloseTrigger>
                    ),
                  )}
                </div>
              </Stack>
            </Drawer.Content>
          </Drawer.Root>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
