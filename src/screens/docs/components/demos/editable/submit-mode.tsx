import { Editable } from "@/components/ui/editable";

export default function EditableSubmitModeDemo() {
  return (
    <div className="w-72">
      <Editable.Root defaultValue="acme.com" submitMode="enter">
        <Editable.Label>Domain (Enter to save)</Editable.Label>
        <Editable.Area>
          <Editable.Preview />
          <Editable.Input />
        </Editable.Area>
        <Editable.Control>
          <Editable.EditTrigger />
          <Editable.SubmitTrigger />
          <Editable.CancelTrigger />
        </Editable.Control>
      </Editable.Root>
    </div>
  );
}
