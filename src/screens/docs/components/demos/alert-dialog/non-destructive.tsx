import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogNonDestructiveDemo() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="outline">Sign out everywhere</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Sign out of all devices?</AlertDialog.Title>
        <AlertDialog.Description>
          This will end every active session, including this one. You will be
          asked to sign in again on each device.
        </AlertDialog.Description>
        <div className="mt-6 flex justify-end gap-2">
          <AlertDialog.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialog.CloseTrigger>
          <AlertDialog.CloseTrigger asChild>
            <Button>Sign out</Button>
          </AlertDialog.CloseTrigger>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
