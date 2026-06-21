import { Field } from "@/components/ui/field";

export default function FieldTextareaDemo() {
  return (
    <div className="w-80">
      <Field.Root>
        <Field.Label>Bio</Field.Label>
        <Field.Textarea placeholder="Tell us about yourself" />
        <Field.HelperText>Markdown supported.</Field.HelperText>
      </Field.Root>
    </div>
  );
}
