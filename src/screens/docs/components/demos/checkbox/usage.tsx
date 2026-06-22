"use client";

import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxUsageDemo() {
  return (
    <Checkbox.Root defaultChecked>
      <Checkbox.Control />
      <Checkbox.Label>Accept terms</Checkbox.Label>
    </Checkbox.Root>
  );
}
