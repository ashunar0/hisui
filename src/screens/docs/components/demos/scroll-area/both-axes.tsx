"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const ROWS = Array.from({ length: 8 }, (_, i) => `Region ${i + 1}`);

export default function ScrollAreaBothAxesDemo() {
  return (
    <ScrollArea.Root className="h-64 w-full rounded-md border border-border">
      <ScrollArea.Viewport>
        <ScrollArea.Content>
          <table className="w-max min-w-[60rem] text-sm">
            <thead className="bg-surface-sunken text-left text-fg-muted text-xs uppercase">
              <tr>
                <th className="sticky left-0 z-10 bg-surface-sunken px-3 py-2 font-medium">
                  Region
                </th>
                {MONTHS.map((m) => (
                  <th
                    key={m}
                    className="whitespace-nowrap px-3 py-2 font-medium"
                  >
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row} className="border-border-muted border-t">
                  <td className="sticky left-0 z-10 bg-surface px-3 py-2 text-fg-soft">
                    {row}
                  </td>
                  {MONTHS.map((m, j) => (
                    <td
                      key={m}
                      className="whitespace-nowrap px-3 py-2 text-fg-soft"
                    >
                      {(i + 1) * (j + 1) * 7}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
