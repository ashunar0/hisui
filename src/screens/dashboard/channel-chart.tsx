import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { Chart } from "@/components/ui/chart";

const DATA = [
  { channel: "Direct", value: 482000 },
  { channel: "Google", value: 318000 },
  { channel: "SNS", value: 187000 },
  { channel: "Email", value: 96000 },
  { channel: "紹介", value: 64000 },
];

export function ChannelChart() {
  return (
    <Card.Root>
      <div className="flex flex-col gap-4 px-5 py-7">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-fg text-md">チャネル別売上</h3>
          <p className="text-fg-muted text-xs">直近 7 日間</p>
        </div>
        <Chart.Container aspect={16 / 9}>
          <BarChart
            data={DATA}
            margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="var(--color-border)" vertical={false} />
            <XAxis
              dataKey="channel"
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
            <Bar
              dataKey="value"
              name="売上"
              fill="var(--color-sky-500)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </Chart.Container>
      </div>
    </Card.Root>
  );
}
