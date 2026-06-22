"use client";

import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";

export default function StackPatternsDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-md border border-border p-4">
        <Stack direction="row" align="center" justify="between">
          <span className="font-semibold text-fg">Title</span>
          <Button size="sm">Action</Button>
        </Stack>
      </div>
      <div className="rounded-md border border-border p-4">
        <Stack gap="xs">
          <span className="text-fg-muted text-xs">Label</span>
          <span className="text-fg">Value</span>
        </Stack>
      </div>
    </div>
  );
}
