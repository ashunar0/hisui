import { cn } from "@/lib/utils";
import {
  type CalendarEvent,
  EVENTS,
  WEEKDAYS,
  formatDateKey,
  getMonthDays,
  isSameDay,
} from "@/screens/calendar/data";
import { EventPill } from "@/screens/calendar/event-pill";

type Props = {
  current: Date;
};

export function CalendarGrid({ current }: Props) {
  const today = new Date();
  const days = getMonthDays(current.getFullYear(), current.getMonth());

  const eventsByDate = EVENTS.reduce<Record<string, CalendarEvent[]>>(
    (acc, ev) => {
      (acc[ev.date] ??= []).push(ev);
      return acc;
    },
    {},
  );

  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface">
      <div className="grid grid-cols-7 border-b border-border">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="py-2 text-center text-xs font-medium text-fg-muted"
          >
            {w}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {days.map(({ date, isCurrentMonth }, i) => {
          const isToday = isSameDay(date, today);
          const isLastRow = i >= 35;
          const isLastCol = i % 7 === 6;
          const dayEvents = eventsByDate[formatDateKey(date)] ?? [];
          return (
            <div
              key={i}
              className={cn(
                "flex min-h-[110px] flex-col gap-1 p-2",
                !isLastCol && "border-r border-border",
                !isLastRow && "border-b border-border",
                !isCurrentMonth && "bg-canvas",
              )}
            >
              <div
                className={cn(
                  "inline-flex size-6 items-center justify-center self-start rounded-full text-xs",
                  isToday && "bg-fg font-medium text-bg",
                  !isToday && isCurrentMonth && "text-fg-soft",
                  !isToday && !isCurrentMonth && "text-fg-subtle",
                )}
              >
                {date.getDate()}
              </div>
              <div className="flex flex-col gap-0.5">
                {dayEvents.slice(0, 3).map((ev) => (
                  <EventPill key={ev.id} event={ev} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
