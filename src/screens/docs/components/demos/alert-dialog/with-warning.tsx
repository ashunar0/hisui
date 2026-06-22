"use client";

import { AlertTriangle } from "lucide-react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogWithWarningDemo() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="outline">Discard changes</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-warning-subtle text-warning-fg">
            <AlertTriangle className="size-5" />
          </span>
          <AlertDialog.Title>Discard unsaved changes?</AlertDialog.Title>
        </div>
        <AlertDialog.Description>
          You have edited 3 fields. Closing now will lose every edit since you
          opened this page.
        </AlertDialog.Description>
        <div className="mt-6 flex justify-end gap-2">
          <AlertDialog.CloseTrigger asChild>
            <Button variant="outline">Keep editing</Button>
          </AlertDialog.CloseTrigger>
          <AlertDialog.CloseTrigger asChild>
            <Button colorPalette="danger">Discard</Button>
          </AlertDialog.CloseTrigger>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
