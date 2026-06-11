export type EventAccent = "emerald" | "rose" | "sky" | "amber" | "neutral";

export type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  accent: EventAccent;
};

export const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

export const ACCENT_CLASSES: Record<EventAccent, string> = {
  emerald:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400",
  rose: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400",
  sky: "bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-400",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400",
  neutral: "bg-surface-sunken text-fg-soft",
};

export const EVENTS: CalendarEvent[] = [
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

export function getMonthDays(year: number, month: number) {
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

export function formatDateKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
