import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox.Root>
        <Checkbox.Control />
        <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root defaultChecked>
        <Checkbox.Control />
        <Checkbox.Label>Remember me on this device</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root checked="indeterminate">
        <Checkbox.Control />
        <Checkbox.Label>Select all (3 of 5 selected)</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root disabled>
        <Checkbox.Control />
        <Checkbox.Label>Disabled option</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root disabled defaultChecked>
        <Checkbox.Control />
        <Checkbox.Label>Disabled checked</Checkbox.Label>
      </Checkbox.Root>
    </div>
  );
}
