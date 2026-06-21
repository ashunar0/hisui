import { Bell } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";

export default function TooltipBasicDemo() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <IconButton aria-label="Notifications">
          <Bell className="size-4" />
        </IconButton>
      </Tooltip.Trigger>
      <Tooltip.Content>Notifications</Tooltip.Content>
    </Tooltip.Root>
  );
}
