import { Menu } from "lucide-react";
import { Drawer } from "@/components/ui/drawer";
import { IconButton } from "@/components/ui/icon-button";
import { Stack } from "@/components/ui/stack";

export default function DrawerFromLeftDemo() {
  return (
    <Drawer.Root swipeDirection="start">
      <Drawer.Trigger asChild>
        <IconButton variant="outline" aria-label="Open menu">
          <Menu className="size-4" />
        </IconButton>
      </Drawer.Trigger>
      <Drawer.Content>
        <Stack gap="md" className="h-full p-6">
          <Drawer.Title>Menu</Drawer.Title>
          <nav className="flex flex-col gap-1 text-fg-soft text-sm">
            <a className="rounded-sm px-2 py-1.5 hover:bg-hover">Dashboard</a>
            <a className="rounded-sm px-2 py-1.5 hover:bg-hover">Projects</a>
            <a className="rounded-sm px-2 py-1.5 hover:bg-hover">Settings</a>
          </nav>
        </Stack>
      </Drawer.Content>
    </Drawer.Root>
  );
}
