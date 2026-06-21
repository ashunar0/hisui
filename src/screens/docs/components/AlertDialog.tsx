import { AlertTriangle, Trash2 } from "lucide-react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "AlertDialog.Root",
    description:
      "Dialog.Root の薄い wrapper。 role=alertdialog を強制する以外は Dialog と同じ API。",
  },
  {
    name: "AlertDialog.Trigger",
    description: "開閉ボタン。 asChild で Button 等に差し替え。",
  },
  {
    name: "AlertDialog.Content",
    description:
      "中身。 内部で Portal + Backdrop + Positioner を自動 mount。 中央 modal。",
  },
  {
    name: "AlertDialog.Title",
    description: "見出し。 aria-labelledby に自動接続。",
  },
  {
    name: "AlertDialog.Description",
    description: "補足。 aria-describedby に自動接続。",
  },
  {
    name: "AlertDialog.CloseTrigger",
    description:
      "確認 / Cancel など閉じる action。 asChild で Button に。 Esc / backdrop click でも閉じる。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "open",
    type: "boolean",
    default: "—",
    description: "controlled 開閉。 onOpenChange とセットで使う。",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "uncontrolled 初期値。",
  },
  {
    name: "onOpenChange",
    type: "(details: { open: boolean }) => void",
    default: "—",
    description: "open 変化の callback。",
  },
  {
    name: "role",
    type: '"alertdialog"',
    default: '"alertdialog"',
    description:
      "AlertDialog では固定。 Dialog との差分はここだけ (a11y で確認系と通知される)。",
  },
];

export function AlertDialogDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="AlertDialog">
        Dialog の confirm 専用 variant。 中身は Dialog と同じだが role=alertdialog
        で固定され、 a11y 的に「ユーザーの確認が必要」と通知される。 削除 /
        破棄 / sign out 等の不可逆操作に使う。
      </DocHeader>

      <DocSection
        title="Dialog との違い"
        description="API は完全に同じ。 違いは下の 2 点だけ。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4 text-fg-muted text-xs leading-relaxed">
          <li>
            <span className="font-mono text-fg">role=alertdialog</span> 固定。
            screen reader が「確認 dialog」として扱う。
          </li>
          <li>
            CloseTrigger を Cancel と Confirm の 2 つに分けて、 Confirm 側は
            colorPalette=danger / variant=solid のような明示的な色にする慣習。
          </li>
        </ul>
      </DocSection>

      <DocSection
        title="Anatomy"
        description="Dialog と同じ part 構成。"
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
        title="Destructive (delete account)"
        description="不可逆操作。 Confirm は colorPalette=danger、 Cancel は outline で 2 button を並べる。"
      >
        <Example
          code={`<AlertDialog.Root>
  <AlertDialog.Trigger asChild>
    <Button variant="outline" className="text-danger-fg">
      <Trash2 className="size-4" /> Delete account
    </Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Delete your account?</AlertDialog.Title>
    <AlertDialog.Description>
      This is permanent...
    </AlertDialog.Description>
    <div className="mt-6 flex justify-end gap-2">
      <AlertDialog.CloseTrigger asChild>
        <Button variant="outline">Cancel</Button>
      </AlertDialog.CloseTrigger>
      <AlertDialog.CloseTrigger asChild>
        <Button colorPalette="danger">Yes, delete</Button>
      </AlertDialog.CloseTrigger>
    </div>
  </AlertDialog.Content>
</AlertDialog.Root>`}
        >
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <Button variant="outline" className="text-danger-fg">
                <Trash2 className="size-4" />
                Delete account
              </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Delete your account?</AlertDialog.Title>
              <AlertDialog.Description>
                This is permanent. All projects, files and API keys will be
                wiped immediately and cannot be recovered.
              </AlertDialog.Description>
              <div className="mt-6 flex justify-end gap-2">
                <AlertDialog.CloseTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </AlertDialog.CloseTrigger>
                <AlertDialog.CloseTrigger asChild>
                  <Button colorPalette="danger">Yes, delete</Button>
                </AlertDialog.CloseTrigger>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </Example>
      </DocSection>

      <DocSection
        title="With warning icon"
        description="Title の左に warning icon を同居させると視認性が上がる。 flex + items-center の row で組む。"
      >
        <Example
          code={`<AlertDialog.Content>
  <div className="flex items-center gap-3">
    <span className="flex size-9 ... bg-warning-subtle text-warning-fg">
      <AlertTriangle className="size-5" />
    </span>
    <AlertDialog.Title>Discard unsaved changes?</AlertDialog.Title>
  </div>
  ...
</AlertDialog.Content>`}
        >
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <Button variant="outline">Discard changes</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-warning-subtle text-warning-fg">
                  <AlertTriangle className="size-5" />
                </span>
                <AlertDialog.Title>
                  Discard unsaved changes?
                </AlertDialog.Title>
              </div>
              <AlertDialog.Description>
                You have edited 3 fields. Closing now will lose every edit
                since you opened this page.
              </AlertDialog.Description>
              <div className="mt-6 flex justify-end gap-2">
                <AlertDialog.CloseTrigger asChild>
                  <Button variant="outline">Keep editing</Button>
                </AlertDialog.CloseTrigger>
                <AlertDialog.CloseTrigger asChild>
                  <Button colorPalette="danger">Discard</Button>
                </AlertDialog.CloseTrigger>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Non-destructive confirm"
        description="破壊的ではないが警戒したい action (sign out 等) は Confirm を default solid に。 色で warn しすぎない。"
      >
        <Example
          code={`<AlertDialog.CloseTrigger asChild>
  <Button>Sign out</Button>
</AlertDialog.CloseTrigger>`}
        >
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <Button variant="outline">Sign out everywhere</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Sign out of all devices?</AlertDialog.Title>
              <AlertDialog.Description>
                This will end every active session, including this one. You
                will be asked to sign in again on each device.
              </AlertDialog.Description>
              <div className="mt-6 flex justify-end gap-2">
                <AlertDialog.CloseTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </AlertDialog.CloseTrigger>
                <AlertDialog.CloseTrigger asChild>
                  <Button>Sign out</Button>
                </AlertDialog.CloseTrigger>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
