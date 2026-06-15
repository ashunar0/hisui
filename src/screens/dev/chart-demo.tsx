import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
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

export function ChartDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Area_ />
      <LineMulti />
      <Bar_ />
      <Pie_ />
    </div>
  );
}

function Area_() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        recharts ラッパー (Chakra UI に同名 primitive 無し)。 Chart.Container は
        ResponsiveContainer + aspect ratio、 Chart.Tooltip は cursor dashed line
        + 自作 TooltipContent (icon + name + value)。 area chart は revenue
        推移の定番。
      </p>
      <div className="rounded-lg border border-border p-4">
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
      </div>
    </div>
  );
}

function LineMulti() {
  const data = REVENUE.map((d, i) => ({
    ...d,
    target: 170 + i * 5,
  }));
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        2 line series (Actual vs Target)。 Tooltip は 2 entry 自動表示。
      </p>
      <div className="rounded-lg border border-border p-4">
        <Chart.Container aspect={16 / 6}>
          <LineChart
            data={data}
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
      </div>
    </div>
  );
}

function Bar_() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Bar chart。 channel 別の breakdown。
      </p>
      <div className="rounded-lg border border-border p-4">
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
      </div>
    </div>
  );
}

function Pie_() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Pie chart。 各 slice を Cell で色指定。 凡例は右側に手書き。
      </p>
      <div className="rounded-lg border border-border p-4">
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
                {CHANNELS.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
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
                <span className="ml-auto tabular-nums text-fg-muted">
                  {c.value}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
