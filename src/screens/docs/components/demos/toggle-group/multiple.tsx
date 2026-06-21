import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup } from "@/components/ui/toggle-group";

export default function ToggleGroupMultipleDemo() {
  return (
    <ToggleGroup.Root multiple defaultValue={["bold"]}>
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
  );
}
