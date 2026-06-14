import { CalendarDays, X } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";

export function DatePickerDemo() {
  return (
    <div className="flex flex-col gap-8">
      <SingleDatePicker />
      <RangeDatePicker />
      <MultipleDatePicker />
    </div>
  );
}

function SingleDatePicker() {
  return (
    <DatePicker.Root locale="ja-JP" startOfWeek={0}>
      <DatePicker.Label>予約日</DatePicker.Label>
      <DatePicker.Control className="mt-1.5">
        <DatePicker.Input placeholder="YYYY/MM/DD" />
        <DatePicker.Trigger>
          <CalendarDays className="size-4" />
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Content>
        <DatePicker.Calendar />
      </DatePicker.Content>
    </DatePicker.Root>
  );
}

function RangeDatePicker() {
  return (
    <DatePicker.Root
      locale="ja-JP"
      startOfWeek={0}
      selectionMode="range"
      numOfMonths={2}
    >
      <DatePicker.Label>旅行の日程 (range)</DatePicker.Label>
      <DatePicker.Control className="mt-1.5 gap-2">
        <DatePicker.Input index={0} placeholder="開始日" />
        <span className="text-fg-muted">–</span>
        <DatePicker.Input index={1} placeholder="終了日" />
        <DatePicker.Trigger className="static size-10 shrink-0 rounded-sm border border-border bg-surface hover:bg-hover">
          <CalendarDays className="size-4" />
        </DatePicker.Trigger>
        <DatePicker.ClearTrigger className="size-10 shrink-0 rounded-sm">
          <X className="size-4" />
          <span className="sr-only">クリア</span>
        </DatePicker.ClearTrigger>
      </DatePicker.Control>
      <DatePicker.Content>
        <DatePicker.Calendar />
      </DatePicker.Content>
    </DatePicker.Root>
  );
}

function MultipleDatePicker() {
  return (
    <DatePicker.Root
      locale="ja-JP"
      startOfWeek={0}
      selectionMode="multiple"
    >
      <DatePicker.Label>会議候補日 (multiple)</DatePicker.Label>
      <DatePicker.Control className="mt-1.5">
        <DatePicker.Input placeholder="複数日を選択" />
        <DatePicker.Trigger>
          <CalendarDays className="size-4" />
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Content>
        <DatePicker.Calendar />
        <DatePicker.Context>
          {(api) => (
            <p className="mt-3 text-xs text-fg-muted">
              {api.value.length} 件選択中
            </p>
          )}
        </DatePicker.Context>
      </DatePicker.Content>
    </DatePicker.Root>
  );
}
