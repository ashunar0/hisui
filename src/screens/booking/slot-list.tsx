import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AVAILABLE_SLOTS } from "@/screens/booking/data";
import { WEEKDAYS, formatDateKey } from "@/screens/calendar/data";

type Props = {
  date: Date | null;
  onSelect: (time: string) => void;
};

export function SlotList({ date, onSelect }: Props) {
  if (!date) {
    return (
      <div className="flex h-full items-center justify-center text-center text-sm text-fg-muted">
        左から日付を選んでください
      </div>
    );
  }

  const key = formatDateKey(date);
  const slots = AVAILABLE_SLOTS[key] ?? [];

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-fg">
        {date.getMonth() + 1}月{date.getDate()}日 ({WEEKDAYS[date.getDay()]})
      </h2>
      <ScrollArea.Root className="h-[320px]">
        <ScrollArea.Viewport>
          <div className="flex flex-col gap-2 pr-2">
            {slots.map((time) => (
              <Button
                key={time}
                variant="outline"
                size="md"
                onClick={() => onSelect(time)}
                className="w-full justify-center"
              >
                {time}
              </Button>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
