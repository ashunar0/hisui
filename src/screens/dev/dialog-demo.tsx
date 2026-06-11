import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function DialogDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <BasicDialog />
      <DestructiveDialog />
      <FormDialog />
    </div>
  );
}

function BasicDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Basic</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Enable two-factor auth?</Dialog.Title>
        <Dialog.Description>
          You'll be asked for a code from your authenticator app on every sign
          in.
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
  );
}

function DestructiveDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Destructive</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Delete this workspace?</Dialog.Title>
        <Dialog.Description>
          This permanently deletes all data, members, and integrations. This
          action cannot be undone.
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
  );
}

function FormDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Form</Button>
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
  );
}
