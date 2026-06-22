"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";

export default function DatePickerFixedWeeksDemo() {
  return (
    <div className="w-72">
      <DatePicker.Root fixedWeeks>
        <DatePicker.Label>Fixed-height calendar</DatePicker.Label>
        <DatePicker.Control>
          <DatePicker.Input />
          <DatePicker.Trigger>
            <CalendarIcon className="size-4" />
          </DatePicker.Trigger>
        </DatePicker.Control>
        <DatePicker.Content>
          <DatePicker.Calendar />
        </DatePicker.Content>
      </DatePicker.Root>
    </div>
  );
}
