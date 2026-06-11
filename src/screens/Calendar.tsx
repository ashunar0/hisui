import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Sidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

type EventAccent = "emerald" | "rose" | "sky" | "amber" | "neutral";

type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  accent: EventAccent;
};

const EVENTS: CalendarEvent[] = [
  { id: "e1", title: "キックオフ", date: "2026-06-01", accent: "sky" },
  { id: "e2", title: "デザインレビュー", date: "2026-06-04", accent: "amber" },
  { id: "e3", title: "プロダクトデモ", date: "2026-06-09", accent: "sky" },
  { id: "e4", title: "1on1 / 佐藤", date: "2026-06-11", accent: "emerald" },
  { id: "e5", title: "リリース作業", date: "2026-06-11", accent: "rose" },
  { id: "e6", title: "週次振り返り", date: "2026-06-12", accent: "neutral" },
  { id: "e7", title: "ハッカソン", date: "2026-06-15", accent: "amber" },
  {
    id: "e8",
    title: "ユーザーインタビュー ×3",
    date: "2026-06-17",
    accent: "sky",
  },
  { id: "e9", title: "All-hands", date: "2026-06-19", accent: "neutral" },
  { id: "e10", title: "デザインシンク", date: "2026-06-22", accent: "amber" },
  { id: "e11", title: "リリースレビュー", date: "2026-06-25", accent: "rose" },
  { id: "e12", title: "月次振り返り", date: "2026-06-30", accent: "emerald" },
];

const ACCENT_CLASSES: Record<EventAccent, string> = {
  emerald:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400",
  rose: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400",
  sky: "bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-400",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400",
  neutral: "bg-surface-sunken text-fg-soft",
};

function formatDateKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();

  const days: { date: Date; isCurrentMonth: boolean }[] = [];

  for (let i = startDay - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month, -i), isCurrentMonth: false });
  }
  const lastDay = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= lastDay; d++) {
    days.push({ date: new Date(year, month, d), isCurrentMonth: true });
  }
  let nextDay = 1;
  while (days.length < 42) {
    days.push({
      date: new Date(year, month + 1, nextDay++),
      isCurrentMonth: false,
    });
  }
  return days;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function Calendar() {
  const [current, setCurrent] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const today = new Date();
  const days = getMonthDays(current.getFullYear(), current.getMonth());

  const eventsByDate = EVENTS.reduce<Record<string, CalendarEvent[]>>(
    (acc, ev) => {
      (acc[ev.date] ??= []).push(ev);
      return acc;
    },
    {},
  );

  const goPrev = () =>
    setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  const goNext = () =>
    setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1));
  const goToday = () => {
    const now = new Date();
    setCurrent(new Date(now.getFullYear(), now.getMonth(), 1));
  };

  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
        <AppSidebar active="カレンダー" />
        <main className="flex flex-1 flex-col overflow-hidden bg-canvas">
          <header className="flex h-14 shrink-0 items-center gap-3 px-6">
            <Sidebar.Trigger className="-ml-2" />
            <Breadcrumb items={[{ label: "カレンダー" }]} />
            <div className="ml-auto flex items-center gap-1">
              <ThemeToggle />
            </div>
          </header>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                カレンダー
              </h1>
              <p className="text-sm text-fg-muted">
                予定とタスクを月単位で見渡す
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold tracking-tight">
                  {current.getFullYear()}年 {current.getMonth() + 1}月
                </h2>
                <div className="ml-auto flex items-center gap-1">
                  <IconButton aria-label="前の月" onClick={goPrev}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <Button variant="outline" size="sm" onClick={goToday}>
                    今日
                  </Button>
                  <IconButton aria-label="次の月" onClick={goNext}>
                    <ChevronRight className="size-4" />
                  </IconButton>
                </div>
              </div>

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
                    const dayEvents =
                      eventsByDate[formatDateKey(date)] ?? [];
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
                            <div
                              key={ev.id}
                              className={cn(
                                "truncate rounded px-1.5 py-0.5 text-xs font-medium",
                                ACCENT_CLASSES[ev.accent],
                              )}
                            >
                              {ev.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
