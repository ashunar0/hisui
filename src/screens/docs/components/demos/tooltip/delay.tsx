"use client";

import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";

export default function TooltipDelayDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Tooltip.Root openDelay={0}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">openDelay=0</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>即時表示</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root openDelay={800}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">openDelay=800</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>遅延 800ms</Tooltip.Content>
      </Tooltip.Root>
    </div>
  );
}
