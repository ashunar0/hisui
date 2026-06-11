import { HoverCard } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import {
  BLOCK_CLASSES,
  BORDER_CLASSES,
  type LaidOutEvent,
} from "@/screens/calendar/data";
import { EventHoverContent } from "@/screens/calendar/event-hover-content";

const MINUTE_HEIGHT = 48 / 60;

type Props = {
  laid: LaidOutEvent;
};

export function WeekEventBlock({ laid }: Props) {
  const { event, startMinutes, endMinutes, column, totalColumns } = laid;
  const duration = endMinutes - startMinutes;
  const widthPct = (1 / totalColumns) * 100;
  const leftPct = (column / totalColumns) * 100;

  return (
    <HoverCard.Root positioning={{ placement: "right-start" }}>
      <HoverCard.Trigger
        className={cn(
          "absolute overflow-hidden rounded p-1 text-left",
          BLOCK_CLASSES[event.accent],
        )}
        style={{
          top: `${startMinutes * MINUTE_HEIGHT}px`,
          height: `${duration * MINUTE_HEIGHT}px`,
          left: `${leftPct}%`,
          width: `calc(${widthPct}% - 2px)`,
        }}
      >
        <div
          className={cn(
            "h-full border-l-2 pl-1.5",
            BORDER_CLASSES[event.accent],
          )}
        >
          <div className="truncate text-xs font-semibold">{event.title}</div>
          {duration > 30 && (
            <div className="truncate text-[10px] opacity-70">
              {event.startTime} – {event.endTime}
            </div>
          )}
        </div>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-72">
        <EventHoverContent event={event} />
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
