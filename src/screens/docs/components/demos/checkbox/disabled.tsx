import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxDisabledDemo() {
  return (
    <div className="flex flex-col gap-2">
      <Checkbox.Root disabled>
        <Checkbox.Control />
        <Checkbox.Label>Disabled</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root disabled defaultChecked>
        <Checkbox.Control />
        <Checkbox.Label>Disabled checked</Checkbox.Label>
      </Checkbox.Root>
    </div>
  );
}
