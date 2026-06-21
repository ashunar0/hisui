import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import { Stack } from "@/components/ui/stack";

export default function PopoverBasicDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">
          <Settings className="size-4" />
          Display
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Stack gap="sm">
          <Popover.Title>Display options</Popover.Title>
          <Popover.Description>
            Configure how the dashboard looks.
          </Popover.Description>
        </Stack>
      </Popover.Content>
    </Popover.Root>
  );
}
