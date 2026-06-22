"use client";

import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Menu } from "@/components/ui/menu";

export default function MenuBasicDemo() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Actions <ChevronDown className="size-4" />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item value="profile">
          <User className="size-4" />
          <Menu.ItemText>Profile</Menu.ItemText>
          <Kbd>⌘P</Kbd>
        </Menu.Item>
        <Menu.Item value="settings">
          <Settings className="size-4" />
          <Menu.ItemText>Settings</Menu.ItemText>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item value="logout">
          <LogOut className="size-4" />
          <Menu.ItemText>Log out</Menu.ItemText>
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
}
