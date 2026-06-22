"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxControlledDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={(d) =>
        setChecked(d.checked === "indeterminate" ? false : d.checked)
      }
    >
      <Checkbox.Control />
      <Checkbox.Label>checked = {String(checked)}</Checkbox.Label>
    </Checkbox.Root>
  );
}
