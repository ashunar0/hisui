import { HoverCard } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { ACCENT_CLASSES, type CalendarEvent } from "@/screens/calendar/data";
import { EventHoverContent } from "@/screens/calendar/event-hover-content";

type Props = {
  event: CalendarEvent;
};

export function EventPill({ event }: Props) {
  return (
    <HoverCard.Root positioning={{ placement: "right-start" }}>
      <HoverCard.Trigger
        className={cn(
          "block w-full truncate rounded px-1.5 py-0.5 text-left text-xs font-medium",
          ACCENT_CLASSES[event.accent],
        )}
      >
        {event.title}
      </HoverCard.Trigger>
      <HoverCard.Content className="w-72">
        <EventHoverContent event={event} />
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
