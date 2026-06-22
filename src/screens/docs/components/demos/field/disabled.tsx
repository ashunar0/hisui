"use client";

import { Field } from "@/components/ui/field";

export default function FieldDisabledDemo() {
  return (
    <div className="w-80">
      <Field.Root disabled>
        <Field.Label>Org ID</Field.Label>
        <Field.Input defaultValue="org_a1b2c3" />
        <Field.HelperText>Read-only field.</Field.HelperText>
      </Field.Root>
    </div>
  );
}
