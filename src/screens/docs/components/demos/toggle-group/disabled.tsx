"use client";

import { ToggleGroup } from "@/components/ui/toggle-group";

export default function ToggleGroupDisabledDemo() {
  return (
    <ToggleGroup.Root defaultValue={["day"]}>
      <ToggleGroup.Item value="day">Day</ToggleGroup.Item>
      <ToggleGroup.Item value="week">Week</ToggleGroup.Item>
      <ToggleGroup.Item value="month" disabled>
        Month (locked)
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
