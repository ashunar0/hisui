"use client";

import { Field } from "@/components/ui/field";

export default function FieldInvalidDemo() {
  return (
    <div className="w-80">
      <Field.Root invalid>
        <Field.Label>Password</Field.Label>
        <Field.Input type="password" defaultValue="abc" />
        <Field.HelperText>8 文字以上で英数記号混合。</Field.HelperText>
        <Field.ErrorText>Too short.</Field.ErrorText>
      </Field.Root>
    </div>
  );
}
