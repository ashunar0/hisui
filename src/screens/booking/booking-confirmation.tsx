import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDateKey, formatLongDate } from "@/screens/calendar/data";

type Props = {
  date: Date;
  time: string;
  email: string;
  onReset: () => void;
};

export function BookingConfirmation({ date, time, email, onReset }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50">
        <Check className="size-6 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h2 className="text-xl font-semibold text-fg">予約が完了しました</h2>
      <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
        {formatLongDate(formatDateKey(date))} の {time} に予約しました。
        {email && (
          <>
            <br />
            確認メールを {email} 宛に送信しました。
          </>
        )}
      </p>
      <Button variant="outline" size="md" onClick={onReset}>
        新しい予約を作る
      </Button>
    </div>
  );
}
