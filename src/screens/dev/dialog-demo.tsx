import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function DialogDemo() {
  return (
    <div className="flex flex-col gap-8">
      <BasicConfirmDialog />
      <DestructiveDialog />
      <FormDialog />
    </div>
  );
}

function BasicConfirmDialog() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        basic confirmation (Title + Description + Cancel/Confirm)
      </p>
      <div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="outline">Enable two-factor auth</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Enable two-factor auth?</Dialog.Title>
            <Dialog.Description>
              You&apos;ll be asked for a code from your authenticator app on
              every sign in.
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-2">
              <Dialog.CloseTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.CloseTrigger>
              <Dialog.CloseTrigger asChild>
                <Button>Enable</Button>
              </Dialog.CloseTrigger>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
  );
}

function DestructiveDialog() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        destructive (赤 Delete button、Context render-prop で title に対象名を embed)
      </p>
      <div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="outline">Delete workspace</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Context>
              {() => (
                <Dialog.Title>
                  Delete{" "}
                  <span className="font-mono text-sm">acme-prod</span>?
                </Dialog.Title>
              )}
            </Dialog.Context>
            <Dialog.Description>
              This permanently deletes all data, members, and integrations.
              This action cannot be undone.
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-2">
              <Dialog.CloseTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.CloseTrigger>
              <Dialog.CloseTrigger asChild>
                <Button className="bg-red-600 text-white hover:bg-red-700">
                  Delete workspace
                </Button>
              </Dialog.CloseTrigger>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
  );
}

function FormDialog() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        form (Field.Root + Input + Textarea を embed、CloseTrigger asChild で
        submit と兼用)
      </p>
      <div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>New project</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>New project</Dialog.Title>
            <Dialog.Description>
              Give it a name and a short description.
            </Dialog.Description>
            <form
              className="mt-5 flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input placeholder="Acme launch" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Description</Field.Label>
                <Textarea placeholder="Short summary" rows={3} />
              </Field.Root>
              <div className="mt-2 flex justify-end gap-2">
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.CloseTrigger>
                <Dialog.CloseTrigger asChild>
                  <Button type="submit">Create</Button>
                </Dialog.CloseTrigger>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
  );
}
