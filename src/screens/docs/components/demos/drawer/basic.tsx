"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Stack } from "@/components/ui/stack";
import { Textarea } from "@/components/ui/textarea";

export default function DrawerBasicDemo() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline">Edit profile</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Stack gap="md" className="h-full p-6">
          <Drawer.CloseTrigger asChild>
            <IconButton
              size="xs"
              variant="ghost"
              aria-label="Close"
              className="absolute top-3 right-3"
            >
              <X className="size-4" />
            </IconButton>
          </Drawer.CloseTrigger>
          <Drawer.Title>Edit profile</Drawer.Title>
          <Drawer.Description>Update your name and bio.</Drawer.Description>
          <Input placeholder="Name" defaultValue="Asahi" />
          <Textarea placeholder="Bio" rows={4} />
          <div className="mt-auto flex justify-end gap-2">
            <Drawer.CloseTrigger asChild>
              <Button variant="ghost">Cancel</Button>
            </Drawer.CloseTrigger>
            <Drawer.CloseTrigger asChild>
              <Button>Save</Button>
            </Drawer.CloseTrigger>
          </div>
        </Stack>
      </Drawer.Content>
    </Drawer.Root>
  );
}
