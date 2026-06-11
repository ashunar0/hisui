import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";
import { AVAILABLE_SLOTS } from "@/screens/booking/data";
import {
  WEEKDAYS,
  formatDateKey,
  getMonthDays,
  isSameDay,
} from "@/screens/calendar/data";

type Props = {
  selected: Date | null;
  onSelect: (date: Date) => void;
};

export function MonthPicker({ selected, onSelect }: Props) {
  const [current, setCurrent] = useState(() => new Date(2026, 5, 1));
  const today = new Date();
  const days = getMonthDays(current.getFullYear(), current.getMonth());

  const goPrev = () =>
    setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  const goNext = () =>
    setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1));

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-fg">
          {current.getFullYear()}年 {current.getMonth() + 1}月
        </h2>
        <div className="flex items-center gap-1">
          <IconButton aria-label="前の月" onClick={goPrev}>
            <ChevronLeft className="size-4" />
          </IconButton>
          <IconButton aria-label="次の月" onClick={goNext}>
            <ChevronRight className="size-4" />
          </IconButton>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {WEEKDAYS.map((w) => (
          <div key={w} className="py-1 text-center text-xs text-fg-muted">
            {w}
          </div>
        ))}
        {days.map(({ date, isCurrentMonth }, i) => {
          const key = formatDateKey(date);
          const available =
            isCurrentMonth && (AVAILABLE_SLOTS[key]?.length ?? 0) > 0;
          const isSelected = selected ? isSameDay(date, selected) : false;
          const isToday = isSameDay(date, today);

          return (
            <button
              key={i}
              type="button"
              disabled={!available}
              onClick={() => onSelect(date)}
              className={cn(
                "relative mx-auto flex size-9 items-center justify-center rounded-full text-sm transition-colors",
                !isCurrentMonth && "text-fg-subtle",
                isCurrentMonth &&
                  !available &&
                  "cursor-not-allowed text-fg-subtle",
                available &&
                  !isSelected &&
                  "cursor-pointer bg-surface-sunken font-medium text-fg hover:bg-surface-sunken-hover",
                isSelected && "bg-fg font-medium text-bg",
                isToday && !isSelected && available && "ring-2 ring-fg/20",
              )}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
