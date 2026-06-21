import { HelpCircle } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Popover } from "@/components/ui/popover";
import { Stack } from "@/components/ui/stack";

export default function PopoverHelpIconDemo() {
  return (
    <Stack direction="row" align="center" gap="sm">
      <span className="font-medium text-fg-soft text-sm">Password</span>
      <Popover.Root>
        <Popover.Trigger asChild>
          <IconButton size="xs" variant="ghost" aria-label="Help">
            <HelpCircle className="size-3.5" />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content className="w-72">
          <Stack gap="xs">
            <Popover.Title>Password requirements</Popover.Title>
            <Popover.Description>
              8 文字以上で、 大文字 / 小文字 / 数字 / 記号を 1 つ以上含む。
            </Popover.Description>
          </Stack>
        </Popover.Content>
      </Popover.Root>
    </Stack>
  );
}
