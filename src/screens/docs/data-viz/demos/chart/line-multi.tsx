import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Chart } from "@/components/ui/chart";

const DATA = [
  { date: "Mon", value: 162, target: 170 },
  { date: "Tue", value: 178, target: 175 },
  { date: "Wed", value: 169, target: 180 },
  { date: "Thu", value: 184, target: 185 },
  { date: "Fri", value: 173, target: 190 },
  { date: "Sat", value: 195, target: 195 },
  { date: "Sun", value: 208, target: 200 },
];

export default function ChartLineMultiDemo() {
  return (
    <Chart.Container aspect={16 / 6}>
      <LineChart data={DATA} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
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
        />
        <Chart.Tooltip />
        <Line
          dataKey="value"
          name="Actual"
          type="monotone"
          stroke="var(--color-emerald-600)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="target"
          name="Target"
          type="monotone"
          stroke="var(--color-sky-500)"
          strokeWidth={2}
          strokeDasharray="4 4"
          dot={false}
        />
      </LineChart>
    </Chart.Container>
  );
}
