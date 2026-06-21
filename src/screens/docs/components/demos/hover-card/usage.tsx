import { CalendarDays } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { HoverCard } from "@/components/ui/hover-card";
import { Stack } from "@/components/ui/stack";

export default function HoverCardUsageDemo() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a className="w-fit cursor-pointer text-fg text-sm underline underline-offset-2">
          @asahi
        </a>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-72">
        <Stack direction="row" align="start" gap="md">
          <Avatar.Root>
            <Avatar.Fallback>A</Avatar.Fallback>
          </Avatar.Root>
          <Stack gap="xs" className="min-w-0 flex-1">
            <p className="font-semibold text-fg text-sm">Asahi</p>
            <p className="text-fg-muted text-xs">
              Building ui-lab. Solo dev exploring design systems.
            </p>
            <div className="flex items-center gap-1 pt-1 text-fg-muted text-xs">
              <CalendarDays className="size-3" />
              Joined March 2024
            </div>
          </Stack>
        </Stack>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
