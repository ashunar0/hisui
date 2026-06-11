import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  type CalendarEvent,
  EVENTS,
  WEEKDAYS,
  formatDateKey,
  getWeekDays,
  getWeekStart,
  isSameDay,
  layoutDayEvents,
} from "@/screens/calendar/data";
import { EventPill } from "@/screens/calendar/event-pill";
import { WeekEventBlock } from "@/screens/calendar/week-event-block";

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const HOUR_HEIGHT = 48;
const MINUTE_HEIGHT = HOUR_HEIGHT / 60;

type Props = {
  current: Date;
};

export function WeekGrid({ current }: Props) {
  const today = new Date();
  const weekStart = getWeekStart(current);
  const weekDays = getWeekDays(weekStart);
  const nowMinutes = today.getHours() * 60 + today.getMinutes();

  const viewportRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = Math.max(
        0,
        (nowMinutes - 60) * MINUTE_HEIGHT,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventsByDate = EVENTS.reduce<Record<string, CalendarEvent[]>>(
    (acc, ev) => {
      (acc[ev.date] ??= []).push(ev);
      return acc;
    },
    {},
  );

  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface">
      <div className="grid grid-cols-[64px_repeat(7,1fr)_8px] border-b border-border">
        <div />
        {weekDays.map((date) => {
          const isToday = isSameDay(date, today);
          return (
            <div
              key={date.toISOString()}
              className="flex flex-col items-center gap-1 border-l border-border-muted py-2"
            >
              <div className="text-xs font-medium text-fg-muted">
                {WEEKDAYS[date.getDay()]}
              </div>
              <div
                className={cn(
                  "inline-flex size-7 items-center justify-center rounded-full text-sm",
                  isToday && "bg-fg font-medium text-bg",
                  !isToday && "text-fg-soft",
                )}
              >
                {date.getDate()}
              </div>
            </div>
          );
        })}
        <div />
      </div>

      <div className="grid grid-cols-[64px_repeat(7,1fr)_8px] border-b border-border">
        <div className="px-2 py-2 text-right text-xs text-fg-muted">終日</div>
        {weekDays.map((date) => {
          const allDay = (eventsByDate[formatDateKey(date)] ?? []).filter(
            (e) => !e.startTime,
          );
          return (
            <div
              key={date.toISOString()}
              className="flex min-h-[36px] flex-col gap-0.5 border-l border-border-muted p-1"
            >
              {allDay.map((ev) => (
                <EventPill key={ev.id} event={ev} />
              ))}
            </div>
          );
        })}
        <div />
      </div>

      <ScrollArea.Root className="h-[600px]">
        <ScrollArea.Viewport ref={viewportRef}>
          <div className="grid grid-cols-[64px_repeat(7,1fr)_8px]">
            <div>
              {HOURS.map((h) => (
                <div
                  key={h}
                  style={{ height: HOUR_HEIGHT }}
                  className="border-b border-border-muted pr-2 pt-1 text-right text-xs text-fg-muted"
                >
                  {h.toString().padStart(2, "0")}:00
                </div>
              ))}
            </div>
            {weekDays.map((date) => {
              const dayEvents = eventsByDate[formatDateKey(date)] ?? [];
              const laidOut = layoutDayEvents(dayEvents);
              const isTodayCol = isSameDay(date, today);
              return (
                <div
                  key={date.toISOString()}
                  className="relative border-l border-border-muted"
                >
                  {HOURS.map((h) => (
                    <div
                      key={h}
                      style={{ height: HOUR_HEIGHT }}
                      className="border-b border-border-muted"
                    />
                  ))}
                  {laidOut.map((laid) => (
                    <WeekEventBlock key={laid.event.id} laid={laid} />
                  ))}
                  {isTodayCol && (
                    <div
                      className="pointer-events-none absolute right-0 left-0 z-10 border-t border-rose-500"
                      style={{ top: `${nowMinutes * MINUTE_HEIGHT}px` }}
                    >
                      <div className="absolute -top-1 -left-1 size-2 rounded-full bg-rose-500" />
                    </div>
                  )}
                </div>
              );
            })}
            <div />
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
