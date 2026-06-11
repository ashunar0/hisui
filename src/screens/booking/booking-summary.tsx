import { Calendar, Clock } from "lucide-react";
import { EVENT } from "@/screens/booking/data";
import { formatDateKey, formatLongDate } from "@/screens/calendar/data";

type Props = {
  date: Date;
  time: string;
};

export function BookingSummary({ date, time }: Props) {
  return (
    <div className="flex flex-col gap-2 border-t border-border pt-4 text-sm text-fg-soft">
      <div className="flex items-center gap-2">
        <Calendar className="size-4 text-fg-muted" />
        <span>{formatLongDate(formatDateKey(date))}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="size-4 text-fg-muted" />
        <span>
          {time} ({EVENT.duration} 分)
        </span>
      </div>
    </div>
  );
}
