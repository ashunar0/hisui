"use client";

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
import { ToggleGroup } from "@/components/ui/toggle-group";
import { Toolbar } from "@/components/ui/toolbar";

export default function ToolbarRichTextEditorDemo() {
  return (
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
  );
}
