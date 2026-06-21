import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover } from "@/components/ui/popover";
import { Stack } from "@/components/ui/stack";

export default function PopoverWithFormDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Edit profile</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Stack gap="md" className="w-72">
          <Popover.Title>Edit profile</Popover.Title>
          <Popover.Description>Update your display name.</Popover.Description>
          <Input placeholder="Display name" />
          <Stack direction="row" justify="end" gap="sm">
            <Popover.CloseTrigger asChild>
              <Button variant="ghost">Cancel</Button>
            </Popover.CloseTrigger>
            <Popover.CloseTrigger asChild>
              <Button>Save</Button>
            </Popover.CloseTrigger>
          </Stack>
        </Stack>
      </Popover.Content>
    </Popover.Root>
  );
}
