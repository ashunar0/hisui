import { ToggleGroup } from "@/components/ui/toggle-group";
import { Toolbar } from "@/components/ui/toolbar";

export default function ToolbarViewSwitcherDemo() {
  return (
    <Toolbar.Root aria-label="Workspace toolbar">
      <ToggleGroup.Root defaultValue={["grid"]}>
        <ToggleGroup.Item value="grid">Grid</ToggleGroup.Item>
        <ToggleGroup.Item value="list">List</ToggleGroup.Item>
        <ToggleGroup.Item value="kanban">Kanban</ToggleGroup.Item>
      </ToggleGroup.Root>
      <Toolbar.Separator />
      <button
        type="button"
        className="inline-flex h-8 items-center rounded px-3 font-medium text-fg text-sm hover:bg-hover"
      >
        Filter
      </button>
      <button
        type="button"
        className="inline-flex h-8 items-center rounded px-3 font-medium text-fg text-sm hover:bg-hover"
      >
        Sort
      </button>
    </Toolbar.Root>
  );
}
