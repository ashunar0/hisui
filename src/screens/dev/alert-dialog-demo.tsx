import { AlertTriangle, Trash2 } from "lucide-react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const destructiveClass =
  "bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-700";

export function AlertDialogDemo() {
  return (
    <div className="flex flex-col gap-8">
      <DeleteAccount />
      <DiscardChanges />
      <SignOutEverywhere />
    </div>
  );
}

function DeleteAccount() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        delete account (destructive、 不可逆操作、 確認 button が rose の solid、
        Cancel が outline)。
      </p>
      <div>
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button variant="outline" className="text-rose-600 dark:text-rose-400">
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
                <Button className={destructiveClass}>Yes, delete</Button>
              </AlertDialog.CloseTrigger>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </div>
  );
}

function DiscardChanges() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        discard changes (Context render-prop は無し、 Title に warning icon 同居
        の row)。
      </p>
      <div>
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button variant="outline">Discard changes</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
                <AlertTriangle className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <AlertDialog.Title>Discard unsaved changes?</AlertDialog.Title>
                <AlertDialog.Description>
                  You have edited 3 fields. Closing now will lose every edit
                  since you opened this page.
                </AlertDialog.Description>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <AlertDialog.CloseTrigger asChild>
                <Button variant="outline">Keep editing</Button>
              </AlertDialog.CloseTrigger>
              <AlertDialog.CloseTrigger asChild>
                <Button className={destructiveClass}>Discard</Button>
              </AlertDialog.CloseTrigger>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </div>
  );
}

function SignOutEverywhere() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        sign out everywhere (非破壊だが警戒系、 confirm は solid (default))。
      </p>
      <div>
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <Button variant="outline">Sign out everywhere</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Sign out of all devices?</AlertDialog.Title>
            <AlertDialog.Description>
              This will end every active session, including this one. You will
              be asked to sign in again on each device.
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
      </div>
    </div>
  );
}
