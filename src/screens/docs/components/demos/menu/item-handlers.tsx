"use client";

import { ChevronDown, Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/ui/menu";

export default function MenuItemHandlersDemo() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Edit <ChevronDown className="size-4" />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item
          value="copy"
          onSelect={() => navigator.clipboard.writeText("sample")}
        >
          <Copy className="size-4" />
          <Menu.ItemText>Copy</Menu.ItemText>
        </Menu.Item>
        <Menu.Item value="delete" disabled>
          <Trash2 className="size-4" />
          <Menu.ItemText>Delete (disabled)</Menu.ItemText>
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
}
