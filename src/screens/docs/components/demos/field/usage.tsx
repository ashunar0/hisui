"use client";

import { Field } from "@/components/ui/field";

export default function FieldUsageDemo() {
  return (
    <div className="w-80">
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Field.Input placeholder="you@example.com" />
        <Field.HelperText>
          {"We'll never share your email."}
        </Field.HelperText>
      </Field.Root>
    </div>
  );
}
