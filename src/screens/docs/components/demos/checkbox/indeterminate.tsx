import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxIndeterminateDemo() {
  const [state, setState] = useState<"off" | "checked" | "indeterminate">(
    "indeterminate",
  );
  const next =
    state === "off" ? "checked" : state === "checked" ? "indeterminate" : "off";
  return (
    <Checkbox.Root
      checked={
        state === "checked"
          ? true
          : state === "indeterminate"
            ? "indeterminate"
            : false
      }
      onCheckedChange={() => setState(next)}
    >
      <Checkbox.Control />
      <Checkbox.Label>state: {state} (click to cycle)</Checkbox.Label>
    </Checkbox.Root>
  );
}
