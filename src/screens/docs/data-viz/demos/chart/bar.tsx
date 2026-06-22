import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Chart } from "@/components/ui/chart";

const CHANNELS = [
  { name: "Direct", value: 42 },
  { name: "Search", value: 28 },
  { name: "Social", value: 18 },
  { name: "Email", value: 12 },
];

export default function ChartBarDemo() {
  return (
    <Chart.Container aspect={16 / 6}>
      <BarChart
        data={CHANNELS}
        margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
      >
        <CartesianGrid stroke="var(--color-border)" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--color-fg-muted)", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--color-fg-muted)", fontSize: 12 }}
          tickFormatter={(v: number) => `${v}%`}
        />
        <Chart.Tooltip />
        <Bar
          dataKey="value"
          name="Share"
          fill="var(--color-sky-500)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </Chart.Container>
  );
}
