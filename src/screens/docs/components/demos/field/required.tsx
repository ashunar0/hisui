import { Field } from "@/components/ui/field";

export default function FieldRequiredDemo() {
  return (
    <div className="w-80">
      <Field.Root required>
        <Field.Label>
          Display name
          <Field.RequiredIndicator />
        </Field.Label>
        <Field.Input placeholder="Your name" />
      </Field.Root>
    </div>
  );
}
