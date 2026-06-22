"use client";

import { ChevronDown, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/ui/menu";

export default function MenuGroupsDemo() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Account <ChevronDown className="size-4" />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Account</Menu.ItemGroupLabel>
          <Menu.Item value="profile">
            <Menu.ItemText>Profile</Menu.ItemText>
          </Menu.Item>
          <Menu.Item value="billing">
            <Menu.ItemText>Billing</Menu.ItemText>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Separator />
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Danger</Menu.ItemGroupLabel>
          <Menu.Item value="delete" className="text-danger-fg">
            <Trash2 className="size-4" />
            <Menu.ItemText>Delete account</Menu.ItemText>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.Content>
    </Menu.Root>
  );
}
