import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function SwitchControlledDemo() {
  const [checked, setChecked] = useState(true);
  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(d) => setChecked(d.checked)}
    >
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>checked = {String(checked)}</Switch.Label>
    </Switch.Root>
  );
}
