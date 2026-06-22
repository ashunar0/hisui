"use client";

import { Editable } from "@/components/ui/editable";

export default function EditablePlaceholderDemo() {
  return (
    <div className="w-72">
      <Editable.Root placeholder="Click to add a description">
        <Editable.Label>Description</Editable.Label>
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
