import { Trash2 } from "lucide-react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogDestructiveDemo() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="outline" className="text-danger-fg">
          <Trash2 className="size-4" />
          Delete account
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete your account?</AlertDialog.Title>
        <AlertDialog.Description>
          This is permanent. All projects, files and API keys will be wiped
          immediately and cannot be recovered.
        </AlertDialog.Description>
        <div className="mt-6 flex justify-end gap-2">
          <AlertDialog.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialog.CloseTrigger>
          <AlertDialog.CloseTrigger asChild>
            <Button colorPalette="danger">Yes, delete</Button>
          </AlertDialog.CloseTrigger>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
