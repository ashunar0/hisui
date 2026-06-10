import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { Chart } from "@/components/ui/chart";

const DATA = [
  { date: "6/4", value: 162000 },
  { date: "6/5", value: 178000 },
  { date: "6/6", value: 169000 },
  { date: "6/7", value: 184000 },
  { date: "6/8", value: 173000 },
  { date: "6/9", value: 195000 },
  { date: "6/10", value: 208000 },
];

export function RevenueChart() {
  return (
    <Card.Root>
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-fg text-md">売上推移</h3>
          <p className="text-fg-muted text-xs">直近 7 日間</p>
        </div>
        <Chart.Container aspect={16 / 9}>
          <AreaChart
            data={DATA}
            margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="var(--color-border)" vertical={false} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              stroke="var(--color-fg-muted)"
              tick={{ fill: "var(--color-fg-muted)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              stroke="var(--color-fg-muted)"
              tick={{ fill: "var(--color-fg-muted)", fontSize: 12 }}
              tickFormatter={(v: number) => `¥${(v / 1000).toFixed(0)}k`}
            />
            <Chart.Tooltip />
            <Area
              dataKey="value"
              name="売上"
              type="monotone"
              stroke="var(--color-emerald-600)"
              fill="var(--color-emerald-500)"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </AreaChart>
        </Chart.Container>
      </div>
    </Card.Root>
  );
}
