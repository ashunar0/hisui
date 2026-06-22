"use client";

import { Trash2 } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";

export default function TooltipWithArrowDemo() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <IconButton aria-label="Delete" colorPalette="danger">
          <Trash2 className="size-4" />
        </IconButton>
      </Tooltip.Trigger>
      <Tooltip.Content>
        Move to trash
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
