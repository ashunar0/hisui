import { HoverCard } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import {
  ACCENT_CLASSES,
  type CalendarEvent,
  DOT_CLASSES,
  formatLongDate,
} from "@/screens/calendar/data";

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
        <div className="flex items-start gap-2.5">
          <span
            className={cn(
              "mt-1.5 inline-block size-2 shrink-0 rounded-full",
              DOT_CLASSES[event.accent],
            )}
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-fg">{event.title}</h3>
            <p className="text-xs text-fg-muted">{formatLongDate(event.date)}</p>
          </div>
        </div>
        {event.description && (
          <p className="mt-3 text-sm leading-relaxed text-fg-soft">
            {event.description}
          </p>
        )}
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
