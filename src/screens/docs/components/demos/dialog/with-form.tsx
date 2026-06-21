import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function DialogWithFormDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Invite teammate</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Invite teammate</Dialog.Title>
        <Dialog.Description>
          An email will be sent to the address below.
        </Dialog.Description>
        <div className="mt-4 flex flex-col gap-3">
          <Input placeholder="name@company.com" />
          <Input placeholder="Role (optional)" />
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Dialog.CloseTrigger asChild>
            <Button variant="ghost">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger asChild>
            <Button>Send invite</Button>
          </Dialog.CloseTrigger>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
