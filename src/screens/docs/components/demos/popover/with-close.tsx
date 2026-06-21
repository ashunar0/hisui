import { Bell, X } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Popover } from "@/components/ui/popover";
import { Stack } from "@/components/ui/stack";

export default function PopoverWithCloseDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <IconButton aria-label="Notifications">
          <Bell className="size-4" />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content className="relative w-80">
        <Popover.CloseTrigger asChild>
          <IconButton
            size="xs"
            aria-label="Close"
            className="absolute top-2 right-2"
          >
            <X className="size-3.5" />
          </IconButton>
        </Popover.CloseTrigger>
        <Stack gap="sm">
          <Popover.Title>Notifications</Popover.Title>
          <Popover.Description>
            3 new updates since you were here.
          </Popover.Description>
          <Stack gap="xs" className="text-fg-soft text-sm">
            <div>• Bob commented on your PR</div>
            <div>• Carol invited you to a project</div>
            <div>• Daily digest ready</div>
          </Stack>
        </Stack>
      </Popover.Content>
    </Popover.Root>
  );
}
