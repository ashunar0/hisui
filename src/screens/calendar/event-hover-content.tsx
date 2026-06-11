import { cn } from "@/lib/utils";
import {
  type CalendarEvent,
  DOT_CLASSES,
  formatLongDate,
} from "@/screens/calendar/data";

type Props = {
  event: CalendarEvent;
};

export function EventHoverContent({ event }: Props) {
  const hasTime = event.startTime && event.endTime;
  return (
    <>
      <div className="flex items-start gap-2.5">
        <span
          className={cn(
            "mt-1.5 inline-block size-2 shrink-0 rounded-full",
            DOT_CLASSES[event.accent],
          )}
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold text-fg">{event.title}</h3>
          <p className="text-xs text-fg-muted">
            {formatLongDate(event.date)}
            {hasTime && (
              <>
                {" · "}
                {event.startTime} – {event.endTime}
              </>
            )}
          </p>
        </div>
      </div>
      {event.description && (
        <p className="mt-3 text-sm leading-relaxed text-fg-soft">
          {event.description}
        </p>
      )}
    </>
  );
}
