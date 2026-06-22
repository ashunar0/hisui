"use client";

import { Cell, Pie, PieChart } from "recharts";
import { Chart } from "@/components/ui/chart";

const CHANNELS = [
  { name: "Direct", value: 42 },
  { name: "Search", value: 28 },
  { name: "Social", value: 18 },
  { name: "Email", value: 12 },
];

const PIE_COLORS = [
  "var(--color-emerald-500)",
  "var(--color-sky-500)",
  "var(--color-amber-500)",
  "var(--color-rose-500)",
];

export default function ChartPieDemo() {
  return (
    <div className="flex items-center gap-6">
      <Chart.Container className="flex-1" aspect={1}>
        <PieChart>
          <Pie
            data={CHANNELS}
            dataKey="value"
            nameKey="name"
            innerRadius="55%"
            outerRadius="80%"
            strokeWidth={2}
            stroke="var(--color-surface)"
          >
            {CHANNELS.map((c, i) => (
              <Cell key={c.name} fill={PIE_COLORS[i % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Chart.Tooltip />
        </PieChart>
      </Chart.Container>
      <ul className="flex flex-1 flex-col gap-2">
        {CHANNELS.map((c, i) => (
          <li key={c.name} className="flex items-center gap-2 text-sm">
            <span
              className="size-2.5 rounded-sm"
              style={{ background: PIE_COLORS[i % PIE_COLORS.length] }}
            />
            <span className="text-fg-soft">{c.name}</span>
            <span className="ml-auto text-fg-muted tabular-nums">
              {c.value}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}