export type EventAccent = "emerald" | "rose" | "sky" | "amber" | "neutral";

export type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  accent: EventAccent;
  description?: string;
  startTime?: string;
  endTime?: string;
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

export const DOT_CLASSES: Record<EventAccent, string> = {
  emerald: "bg-emerald-500",
  rose: "bg-rose-500",
  sky: "bg-sky-500",
  amber: "bg-amber-500",
  neutral: "bg-fg-muted",
};

export const BLOCK_CLASSES: Record<EventAccent, string> = {
  emerald:
    "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
  rose: "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
  sky: "border-sky-500 bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
  amber:
    "border-amber-500 bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
  neutral: "border-fg-muted bg-surface-sunken text-fg-soft",
};

export const EVENTS: CalendarEvent[] = [
  {
    id: "e1",
    title: "キックオフ",
    date: "2026-06-01",
    accent: "sky",
    description: "Q3 プロジェクトの全体方針とマイルストーン共有",
    startTime: "09:00",
    endTime: "10:30",
  },
  {
    id: "e2",
    title: "デザインレビュー",
    date: "2026-06-04",
    accent: "amber",
    description: "新ダッシュボードのワイヤーフレーム最終確認",
    startTime: "14:00",
    endTime: "15:30",
  },
  {
    id: "e15",
    title: "PTO / 田中",
    date: "2026-06-08",
    accent: "neutral",
    description: "終日休暇",
  },
  {
    id: "e3",
    title: "プロダクトデモ",
    date: "2026-06-09",
    accent: "sky",
    description: "顧客 3 社に新機能をライブデモ",
    startTime: "11:00",
    endTime: "12:00",
  },
  {
    id: "e4",
    title: "1on1 / 佐藤",
    date: "2026-06-11",
    accent: "emerald",
    startTime: "09:00",
    endTime: "09:30",
  },
  {
    id: "e5",
    title: "リリース作業",
    date: "2026-06-11",
    accent: "rose",
    description: "v2.4.0 を staging → production へ。ロールバック手順も準備",
    startTime: "09:00",
    endTime: "10:30",
  },
  {
    id: "e6",
    title: "週次振り返り",
    date: "2026-06-12",
    accent: "neutral",
    startTime: "16:00",
    endTime: "17:00",
  },
  {
    id: "e7",
    title: "ハッカソン",
    date: "2026-06-15",
    accent: "amber",
    description: "社内 1day ハッカソン。AI / UX いずれかのテーマで自由参加",
  },
  {
    id: "e8",
    title: "ユーザーインタビュー",
    date: "2026-06-17",
    accent: "sky",
    description: "オンボーディング離脱ユーザー 3 名にインタビュー",
    startTime: "13:00",
    endTime: "14:00",
  },
  {
    id: "e9",
    title: "All-hands",
    date: "2026-06-19",
    accent: "neutral",
    description: "全社 MTG。Q3 進捗 / 採用 / 新オフィス",
    startTime: "15:00",
    endTime: "16:00",
  },
  {
    id: "e10",
    title: "デザインシンク",
    date: "2026-06-22",
    accent: "amber",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: "e11",
    title: "リリースレビュー",
    date: "2026-06-25",
    accent: "rose",
    description: "v2.4 リリース後の障害 / ユーザー反応の振り返り",
    startTime: "14:00",
    endTime: "15:00",
  },
  {
    id: "e13",
    title: "顧客 MTG / Acme",
    date: "2026-06-25",
    accent: "sky",
    description: "新規アカウントの kickoff",
    startTime: "14:30",
    endTime: "15:30",
  },
  {
    id: "e14",
    title: "オペレーション対応",
    date: "2026-06-25",
    accent: "amber",
    startTime: "15:00",
    endTime: "16:00",
  },
  {
    id: "e12",
    title: "月次振り返り",
    date: "2026-06-30",
    accent: "emerald",
    startTime: "16:00",
    endTime: "17:00",
  },
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

export function formatLongDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return `${y}年${m}月${d}日 (${WEEKDAYS[date.getDay()]})`;
}

export function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function getWeekStart(date: Date): Date {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() - d.getDay());
  return d;
}

export function getWeekDays(weekStart: Date): Date[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });
}

export type LaidOutEvent = {
  event: CalendarEvent;
  startMinutes: number;
  endMinutes: number;
  column: number;
  totalColumns: number;
};

export function layoutDayEvents(events: CalendarEvent[]): LaidOutEvent[] {
  const timed = events
    .filter((e) => e.startTime && e.endTime)
    .map((e) => ({
      event: e,
      startMinutes: timeToMinutes(e.startTime as string),
      endMinutes: timeToMinutes(e.endTime as string),
    }))
    .sort((a, b) => a.startMinutes - b.startMinutes);

  const columns: (typeof timed)[] = [];
  for (const ev of timed) {
    let placed = false;
    for (const col of columns) {
      const last = col[col.length - 1];
      if (last.endMinutes <= ev.startMinutes) {
        col.push(ev);
        placed = true;
        break;
      }
    }
    if (!placed) {
      columns.push([ev]);
    }
  }

  const totalColumns = columns.length;
  const result: LaidOutEvent[] = [];
  for (let col = 0; col < columns.length; col++) {
    for (const ev of columns[col]) {
      result.push({ ...ev, column: col, totalColumns });
    }
  }
  return result;
}
