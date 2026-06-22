"use client";

import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import { ToggleGroup } from "@/components/ui/toggle-group";

export default function ToggleGroupIconTextDemo() {
  return (
    <ToggleGroup.Root defaultValue={["center"]}>
      <ToggleGroup.Item value="left">
        <AlignLeft className="size-4" />
        Left
      </ToggleGroup.Item>
      <ToggleGroup.Item value="center">
        <AlignCenter className="size-4" />
        Center
      </ToggleGroup.Item>
      <ToggleGroup.Item value="right">
        <AlignRight className="size-4" />
        Right
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
