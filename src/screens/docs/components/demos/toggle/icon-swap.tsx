"use client";

import { Bell, BellOff } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export default function ToggleIconSwapDemo() {
  return (
    <Toggle.Root
      aria-label="Toggle notifications"
      defaultPressed
      className="w-fit"
    >
      <Toggle.Indicator
        fallback={<BellOff className="size-4" strokeWidth={2} />}
      >
        <Bell className="size-4" strokeWidth={2} />
      </Toggle.Indicator>
      Notifications
    </Toggle.Root>
  );
}
