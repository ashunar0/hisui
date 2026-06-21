import { Editable } from "@/components/ui/editable";

export default function EditableDblclickDemo() {
  return (
    <div className="w-72">
      <Editable.Root
        defaultValue="Double-click to edit"
        activationMode="dblclick"
      >
        <Editable.Area>
          <Editable.Preview />
          <Editable.Input />
        </Editable.Area>
      </Editable.Root>
    </div>
  );
}
