import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Redo2,
  Underline,
  Undo2,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div className="flex flex-col gap-8">
      <SectionDividers />
      <LabeledDivider />
      <ToolbarDividers />
    </div>
  );
}

function SectionDividers() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        section divider (horizontal、 Settings row の区切り風)。 group の境界を
        薄い線で示す。
      </p>
      <div className="flex max-w-md flex-col gap-4 rounded-md border border-border bg-surface p-5">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-fg">Profile</p>
          <p className="text-sm text-fg-muted">
            Name、 email、 avatar を管理する。
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-fg">Notifications</p>
          <p className="text-sm text-fg-muted">
            通知の頻度と種類を選ぶ。
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-fg">Danger zone</p>
          <p className="text-sm text-fg-muted">
            アカウント削除等の取り返しがつかない操作。
          </p>
        </div>
      </div>
    </div>
  );
}

function LabeledDivider() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        with label (左右に Separator + 中央に label)。 SNS login の OR 区切り風。
      </p>
      <div className="flex max-w-sm flex-col gap-4 rounded-md border border-border bg-surface p-5">
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-surface text-sm font-medium hover:bg-hover"
        >
          Continue with Google
        </button>
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-xs uppercase tracking-wider text-fg-muted">
            or
          </span>
          <Separator className="flex-1" />
        </div>
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-md bg-fg text-sm font-medium text-bg hover:bg-fg-soft"
        >
          Sign in with email
        </button>
      </div>
    </div>
  );
}

function ToolbarDividers() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        vertical (toolbar 内で button group を区切る)。 親に高さが必要なので
        Separator 周辺は h-N の flex row で囲む。
      </p>
      <div className="inline-flex h-10 items-center gap-1 rounded-md border border-border bg-surface px-2">
        <IconButton aria-label="Undo">
          <Undo2 className="size-4" />
        </IconButton>
        <IconButton aria-label="Redo">
          <Redo2 className="size-4" />
        </IconButton>
        <Separator orientation="vertical" className="mx-1 h-5" />
        <IconButton aria-label="Bold">
          <Bold className="size-4" />
        </IconButton>
        <IconButton aria-label="Italic">
          <Italic className="size-4" />
        </IconButton>
        <IconButton aria-label="Underline">
          <Underline className="size-4" />
        </IconButton>
        <Separator orientation="vertical" className="mx-1 h-5" />
        <IconButton aria-label="Align left">
          <AlignLeft className="size-4" />
        </IconButton>
        <IconButton aria-label="Align center">
          <AlignCenter className="size-4" />
        </IconButton>
        <IconButton aria-label="Align right">
          <AlignRight className="size-4" />
        </IconButton>
      </div>
    </div>
  );
}
