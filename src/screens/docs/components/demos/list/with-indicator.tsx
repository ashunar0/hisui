"use client";

import { Check } from "lucide-react";

import { List } from "@/components/ui/list";

export default function ListWithIndicatorDemo() {
  return (
    <List.Root variant="plain">
      <List.Item>
        <List.Indicator>
          <Check />
        </List.Indicator>
        Type-safe API
      </List.Item>
      <List.Item>
        <List.Indicator>
          <Check />
        </List.Indicator>
        Light / dark theming
      </List.Item>
      <List.Item>
        <List.Indicator>
          <Check />
        </List.Indicator>
        Copy-paste install via CLI
      </List.Item>
    </List.Root>
  );
}
