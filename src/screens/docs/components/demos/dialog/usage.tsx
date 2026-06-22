"use client";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

export default function DialogUsageDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Save changes?</Dialog.Title>
        <Dialog.Description>
          Your changes will be applied immediately.
        </Dialog.Description>
        <div className="mt-6 flex justify-end gap-2">
          <Dialog.CloseTrigger asChild>
            <Button variant="ghost">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger asChild>
            <Button>Save</Button>
          </Dialog.CloseTrigger>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
