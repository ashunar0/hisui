"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Chart } from "@/components/ui/chart";

const REVENUE = [
  { date: "Mon", value: 162 },
  { date: "Tue", value: 178 },
  { date: "Wed", value: 169 },
  { date: "Thu", value: 184 },
  { date: "Fri", value: 173 },
  { date: "Sat", value: 195 },
  { date: "Sun", value: 208 },
];

export default function ChartAreaDemo() {
  return (
    <Chart.Container aspect={16 / 6}>
      <AreaChart
        data={REVENUE}
        margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
      >
        <CartesianGrid stroke="var(--color-border)" vertical={false} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--color-fg-muted)", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--color-fg-muted)", fontSize: 12 }}
          tickFormatter={(v: number) => `$${v}k`}
        />
        <Chart.Tooltip />
        <Area
          dataKey="value"
          name="Revenue"
          type="monotone"
          stroke="var(--color-emerald-600)"
          fill="var(--color-emerald-500)"
          fillOpacity={0.15}
          strokeWidth={2}
        />
      </AreaChart>
    </Chart.Container>
  );
}