import { ToggleGroup } from "@/components/ui/toggle-group";

export default function ToggleGroupSingleDemo() {
  return (
    <ToggleGroup.Root defaultValue={["list"]}>
      <ToggleGroup.Item value="list">List</ToggleGroup.Item>
      <ToggleGroup.Item value="grid">Grid</ToggleGroup.Item>
      <ToggleGroup.Item value="card">Card</ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
