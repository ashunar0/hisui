"use client";

import { Switch } from "@/components/ui/switch";

export default function SwitchDisabledDemo() {
  return (
    <div className="flex flex-col gap-2">
      <Switch.Root disabled>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Disabled</Switch.Label>
      </Switch.Root>
      <Switch.Root disabled defaultChecked>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Disabled checked</Switch.Label>
      </Switch.Root>
    </div>
  );
}
