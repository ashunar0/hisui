import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Redo2,
  Underline,
  Undo2,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Toolbar } from "@/components/ui/toolbar";
import { ToggleGroup } from "@/components/ui/toggle-group";

export function ToolbarDemo() {
  return (
    <div className="flex flex-col gap-8">
      <RichTextEditor />
      <MediaControls />
    </div>
  );
}

function RichTextEditor() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        rich text editor (IconButton + ToggleGroup + Toolbar.Separator で group
        区切り)。 role=toolbar が自動で当たる。
      </p>
      <Toolbar.Root aria-label="Text formatting">
        <IconButton aria-label="Undo">
          <Undo2 className="size-4" />
        </IconButton>
        <IconButton aria-label="Redo">
          <Redo2 className="size-4" />
        </IconButton>
        <Toolbar.Separator />
        <ToggleGroup.Root multiple>
          <ToggleGroup.Item value="bold" aria-label="Bold">
            <Bold className="size-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="italic" aria-label="Italic">
            <Italic className="size-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="underline" aria-label="Underline">
            <Underline className="size-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <Toolbar.Separator />
        <ToggleGroup.Root defaultValue={["left"]}>
          <ToggleGroup.Item value="left" aria-label="Align left">
            <AlignLeft className="size-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="center" aria-label="Align center">
            <AlignCenter className="size-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="right" aria-label="Align right">
            <AlignRight className="size-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <Toolbar.Separator />
        <ToggleGroup.Root>
          <ToggleGroup.Item value="ul" aria-label="Bullet list">
            <List className="size-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="ol" aria-label="Numbered list">
            <ListOrdered className="size-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </Toolbar.Root>
    </div>
  );
}

function MediaControls() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        media controls (ToggleGroup single で view 切替 + Separator + 普通の
        button、 ダッシュボード上部に置く想定)。
      </p>
      <Toolbar.Root aria-label="Workspace toolbar">
        <ToggleGroup.Root defaultValue={["grid"]}>
          <ToggleGroup.Item value="grid">Grid</ToggleGroup.Item>
          <ToggleGroup.Item value="list">List</ToggleGroup.Item>
          <ToggleGroup.Item value="kanban">Kanban</ToggleGroup.Item>
        </ToggleGroup.Root>
        <Toolbar.Separator />
        <button
          type="button"
          className="inline-flex h-8 items-center rounded px-3 text-sm font-medium text-fg hover:bg-hover"
        >
          Filter
        </button>
        <button
          type="button"
          className="inline-flex h-8 items-center rounded px-3 text-sm font-medium text-fg hover:bg-hover"
        >
          Sort
        </button>
      </Toolbar.Root>
    </div>
  );
}
