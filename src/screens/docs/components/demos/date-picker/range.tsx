"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";

export default function DatePickerRangeDemo() {
  return (
    <div className="w-96">
      <DatePicker.Root selectionMode="range">
        <DatePicker.Label>Check-in / Check-out</DatePicker.Label>
        <DatePicker.Control>
          <DatePicker.Input index={0} />
          <DatePicker.Input index={1} />
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
