import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  LayoutGrid,
  List,
  Underline,
} from "lucide-react";
import { ToggleGroup } from "@/components/ui/toggle-group";

export function ToggleGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">single / view switcher</span>
        <ToggleGroup.Root defaultValue={["list"]}>
          <ToggleGroup.Item value="list">
            <List className="size-4" strokeWidth={2.25} />
            List
          </ToggleGroup.Item>
          <ToggleGroup.Item value="grid">
            <LayoutGrid className="size-4" strokeWidth={2.25} />
            Grid
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">single / text align</span>
        <ToggleGroup.Root defaultValue={["left"]}>
          <ToggleGroup.Item value="left" aria-label="Align left">
            <AlignLeft className="size-4" strokeWidth={2.25} />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="center" aria-label="Align center">
            <AlignCenter className="size-4" strokeWidth={2.25} />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="right" aria-label="Align right">
            <AlignRight className="size-4" strokeWidth={2.25} />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">multiple / text style</span>
        <ToggleGroup.Root multiple defaultValue={["bold"]}>
          <ToggleGroup.Item value="bold" aria-label="Bold">
            <Bold className="size-4" strokeWidth={2.5} />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="italic" aria-label="Italic">
            <Italic className="size-4" strokeWidth={2.5} />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="underline" aria-label="Underline">
            <Underline className="size-4" strokeWidth={2.5} />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">disabled (whole group)</span>
        <ToggleGroup.Root disabled defaultValue={["list"]}>
          <ToggleGroup.Item value="list">
            <List className="size-4" strokeWidth={2.25} />
            List
          </ToggleGroup.Item>
          <ToggleGroup.Item value="grid">
            <LayoutGrid className="size-4" strokeWidth={2.25} />
            Grid
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </div>
  );
}
