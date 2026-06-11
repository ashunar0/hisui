import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { getWeekStart } from "@/screens/calendar/data";

type Props = {
  current: Date;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
};

function formatRange(weekStart: Date): string {
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const sameMonth = weekStart.getMonth() === weekEnd.getMonth();
  const sameYear = weekStart.getFullYear() === weekEnd.getFullYear();
  if (sameMonth) {
    return `${weekStart.getFullYear()}年${weekStart.getMonth() + 1}月 ${weekStart.getDate()}日 – ${weekEnd.getDate()}日`;
  }
  if (sameYear) {
    return `${weekStart.getFullYear()}年 ${weekStart.getMonth() + 1}月${weekStart.getDate()}日 – ${weekEnd.getMonth() + 1}月${weekEnd.getDate()}日`;
  }
  return `${weekStart.getFullYear()}年${weekStart.getMonth() + 1}月${weekStart.getDate()}日 – ${weekEnd.getFullYear()}年${weekEnd.getMonth() + 1}月${weekEnd.getDate()}日`;
}

export function WeekToolbar({ current, onPrev, onNext, onToday }: Props) {
  const weekStart = getWeekStart(current);
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-lg font-semibold tracking-tight">
        {formatRange(weekStart)}
      </h2>
      <div className="ml-auto flex items-center gap-1">
        <IconButton aria-label="前の週" onClick={onPrev}>
          <ChevronLeft className="size-4" />
        </IconButton>
        <Button variant="outline" size="sm" onClick={onToday}>
          今週
        </Button>
        <IconButton aria-label="次の週" onClick={onNext}>
          <ChevronRight className="size-4" />
        </IconButton>
      </div>
    </div>
  );
}
