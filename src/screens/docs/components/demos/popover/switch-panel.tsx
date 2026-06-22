"use client";

import { Settings } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Popover } from "@/components/ui/popover";
import { Stack } from "@/components/ui/stack";
import { Switch } from "@/components/ui/switch";

const SETTINGS = ["Email", "Push", "Weekly digest"];

export default function PopoverSwitchPanelDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <IconButton aria-label="Settings">
          <Settings className="size-4" />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content className="w-64">
        <Stack gap="sm">
          <Popover.Title>Notifications</Popover.Title>
          {SETTINGS.map((label, i) => (
            <Switch.Root
              key={label}
              className="justify-between w-full"
              defaultChecked={i !== 1}
            >
              <Switch.Label>{label}</Switch.Label>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
            </Switch.Root>
          ))}
        </Stack>
      </Popover.Content>
    </Popover.Root>
  );
}
