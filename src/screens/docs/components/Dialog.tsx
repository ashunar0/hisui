import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Dialog.Root",
    description:
      "外枠。 open / onOpenChange で開閉を制御。 children に Trigger + Content を並べる。",
  },
  {
    name: "Dialog.Trigger",
    description:
      "開閉ボタン。 asChild で別 component (Button 等) に差し替え可能。",
  },
  {
    name: "Dialog.Content",
    description:
      "中身。 内部で Portal + Backdrop + Positioner を自動 mount するので、 中身だけ書けば OK。",
  },
  {
    name: "Dialog.Title",
    description: "見出し。 a11y のため aria-labelledby に自動接続。",
  },
  {
    name: "Dialog.Description",
    description: "補足。 aria-describedby に自動接続。",
  },
  {
    name: "Dialog.CloseTrigger",
    description:
      "閉じるボタン。 asChild で IconButton や Button に変更。 Esc / backdrop click でも閉じる。",
  },
];

const ROOT_PROPS: PropRow[] = [
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
    description: "open 状態が変わった時に呼ばれる。 controlled mode で必須。",
  },
  {
    name: "modal",
    type: "boolean",
    default: "true",
    description:
      "true で背景操作不可 (focus trap + body lock)、 false で非モーダル。",
  },
  {
    name: "closeOnInteractOutside",
    type: "boolean",
    default: "true",
    description: "backdrop クリックで閉じるか。",
  },
  {
    name: "closeOnEscape",
    type: "boolean",
    default: "true",
    description: "Esc キーで閉じるか。",
  },
];

export function DialogDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Dialog">
        中央 modal。 Title / Description / 任意の中身 / 確定キャンセル button
        を組み合わせる。 Portal + Backdrop + Positioner は Content 内部で自動
        mount。 multi-layer shadow + rounded-lg の floating surface 標準。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の直下に Trigger と Content を置くだけ。 Backdrop / Positioner は Content が内蔵する。"
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
        description="Trigger (asChild で Button) + Title + Description + Footer の最小 modal。"
      >
        <Example
          code={`<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button>Open dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Save changes?</Dialog.Title>
    <Dialog.Description>Your changes will be applied immediately.</Dialog.Description>
    <div className="mt-6 flex justify-end gap-2">
      <Dialog.CloseTrigger asChild><Button variant="ghost">Cancel</Button></Dialog.CloseTrigger>
      <Dialog.CloseTrigger asChild><Button>Save</Button></Dialog.CloseTrigger>
    </div>
  </Dialog.Content>
</Dialog.Root>`}
        >
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>Open dialog</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>Save changes?</Dialog.Title>
              <Dialog.Description>
                Your changes will be applied immediately.
              </Dialog.Description>
              <div className="mt-6 flex justify-end gap-2">
                <Dialog.CloseTrigger asChild>
                  <Button variant="ghost">Cancel</Button>
                </Dialog.CloseTrigger>
                <Dialog.CloseTrigger asChild>
                  <Button>Save</Button>
                </Dialog.CloseTrigger>
              </div>
            </Dialog.Content>
          </Dialog.Root>
        </Example>
      </DocSection>

      <DocSection
        title="With form"
        description="中身は任意。 Input を並べて確定 / キャンセル の典型 form modal。"
      >
        <Example
          code={`<Dialog.Content>
  <Dialog.Title>Invite teammate</Dialog.Title>
  <Dialog.Description>An email will be sent to the address below.</Dialog.Description>
  <div className="mt-4 flex flex-col gap-3">
    <Input placeholder="name@company.com" />
    <Input placeholder="Role (optional)" />
  </div>
  <div className="mt-6 flex justify-end gap-2">
    <Dialog.CloseTrigger asChild><Button variant="ghost">Cancel</Button></Dialog.CloseTrigger>
    <Dialog.CloseTrigger asChild><Button>Send invite</Button></Dialog.CloseTrigger>
  </div>
</Dialog.Content>`}
        >
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="outline">Invite teammate</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>Invite teammate</Dialog.Title>
              <Dialog.Description>
                An email will be sent to the address below.
              </Dialog.Description>
              <div className="mt-4 flex flex-col gap-3">
                <Input placeholder="name@company.com" />
                <Input placeholder="Role (optional)" />
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <Dialog.CloseTrigger asChild>
                  <Button variant="ghost">Cancel</Button>
                </Dialog.CloseTrigger>
                <Dialog.CloseTrigger asChild>
                  <Button>Send invite</Button>
                </Dialog.CloseTrigger>
              </div>
            </Dialog.Content>
          </Dialog.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Non-modal"
        description="modal=false で背景操作可能。 後ろの UI と並行に作業させる時に。"
      >
        <Example
          code={`<Dialog.Root modal={false}>
  <Dialog.Trigger asChild><Button>Open non-modal</Button></Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Non-modal</Dialog.Title>
    <Dialog.Description>背景 UI を操作可能、 focus trap も無し。</Dialog.Description>
  </Dialog.Content>
</Dialog.Root>`}
        >
          <Dialog.Root modal={false}>
            <Dialog.Trigger asChild>
              <Button variant="outline">Open non-modal</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>Non-modal</Dialog.Title>
              <Dialog.Description>
                背景 UI を操作可能、 focus trap も無し。
              </Dialog.Description>
              <div className="mt-6 flex justify-end">
                <Dialog.CloseTrigger asChild>
                  <Button size="sm">Close</Button>
                </Dialog.CloseTrigger>
              </div>
            </Dialog.Content>
          </Dialog.Root>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
