import { Field } from "@/components/ui/field";

export default function FieldSelectDemo() {
  return (
    <div className="w-80">
      <Field.Root>
        <Field.Label>Plan</Field.Label>
        <Field.Select defaultValue="pro">
          <option value="free">Free</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </Field.Select>
      </Field.Root>
    </div>
  );
}
