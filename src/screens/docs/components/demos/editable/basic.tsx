"use client";

import { Editable } from "@/components/ui/editable";

export default function EditableBasicDemo() {
  return (
    <div className="w-72">
      <Editable.Root
        defaultValue="Untitled project"
        placeholder="Enter title"
      >
        <Editable.Label>Project name</Editable.Label>
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
