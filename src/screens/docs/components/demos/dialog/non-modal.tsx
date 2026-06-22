"use client";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

export default function DialogNonModalDemo() {
  return (
    <Dialog.Root modal={false}>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open non-modal</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Non-modal</Dialog.Title>
        <Dialog.Description>
          背景 UI を操作可能、 focus trap も無し。
        </Dialog.Description>
        <div className="mt-6 flex justify-end">
          <Dialog.CloseTrigger asChild>
            <Button size="sm">Close</Button>
          </Dialog.CloseTrigger>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
