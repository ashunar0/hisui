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
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

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

const PARTS = [
  {
    name: "Chart.Container",
    description:
      "recharts の ResponsiveContainer 薄 wrap。 aspect prop で aspect-ratio、 width=100%。 中の AreaChart / LineChart 等を 1 つ child として渡す。",
  },
  {
    name: "Chart.Tooltip",
    description:
      "recharts Tooltip の薄 wrap。 cursor=dashed line、 content は ui-lab token に合わせた自作 (icon swatch + name + value)。 series が複数あれば自動で全部 list。",
  },
];

const CONTAINER_PROPS: PropRow[] = [
  {
    name: "aspect",
    type: "number",
    default: "16 / 9",
    description: "幅÷高さ。 横長は 16/6、 正方形 (pie) は 1。",
  },
  {
    name: "children",
    type: "ReactElement",
    default: "—",
    description:
      "recharts の <AreaChart> / <LineChart> / <BarChart> / <PieChart> を 1 つだけ渡す。",
  },
];

export function ChartDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Chart">
        recharts ベースのデータ可視化 wrapper。 ui-lab 独自の薄 wrap は
        Container (ResponsiveContainer + aspect) と Tooltip (token 色に揃えた
        cursor + content) の 2 つだけで、 中の chart 本体は recharts の
        AreaChart / LineChart / BarChart / PieChart 等をそのまま使う。 軸 / grid
        / 色は CSS 変数 (--color-fg-muted / --color-border / 等) で token と
        同期させる。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="2 part だけ。 残りは recharts の API そのまま。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[14rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Area chart"
        description="revenue 推移の定番。 stroke + fill + fillOpacity で線と塗りを分離。 axisLine / tickLine を false にして minimal 寄りに。"
      >
        <Example
          code={`<Chart.Container aspect={16 / 6}>
  <AreaChart data={revenue}>
    <CartesianGrid stroke="var(--color-border)" vertical={false} />
    <XAxis dataKey="date" axisLine={false} tickLine={false} />
    <YAxis axisLine={false} tickLine={false} />
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
</Chart.Container>`}
        >
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
        </Example>
      </DocSection>

      <DocSection
        title="Line chart (multi series)"
        description="同じ Chart.Container の中に Line を 2 本。 Tooltip は 2 entry 自動表示。 secondary は strokeDasharray で破線に。"
      >
        <Example
          code={`<LineChart data={data}>
  <Chart.Tooltip />
  <Line dataKey="value" name="Actual" stroke="..." strokeWidth={2} dot={false} />
  <Line
    dataKey="target"
    name="Target"
    stroke="..."
    strokeWidth={2}
    strokeDasharray="4 4"
    dot={false}
  />
</LineChart>`}
        >
          <LineMultiPreview />
        </Example>
      </DocSection>

      <DocSection
        title="Bar chart"
        description="channel 別の breakdown。 radius で top-left/right だけ丸める (bar の上端を rounded)。"
      >
        <Example
          code={`<BarChart data={channels}>
  <CartesianGrid stroke="..." vertical={false} />
  <XAxis dataKey="name" />
  <YAxis tickFormatter={(v) => \`\${v}%\`} />
  <Chart.Tooltip />
  <Bar dataKey="value" name="Share" fill="var(--color-sky-500)" radius={[4, 4, 0, 0]} />
</BarChart>`}
        >
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
        </Example>
      </DocSection>

      <DocSection
        title="Pie chart with legend"
        description="各 slice の色は Cell に直接渡す。 凡例は recharts の Legend を使わず、 横に手書きの list を並べると token と整合させやすい。"
      >
        <Example
          code={`<Chart.Container aspect={1}>
  <PieChart>
    <Pie data={channels} dataKey="value" innerRadius="55%" outerRadius="80%">
      {channels.map((_, i) => (
        <Cell key={i} fill={PIE_COLORS[i]} />
      ))}
    </Pie>
    <Chart.Tooltip />
  </PieChart>
</Chart.Container>
<ul>...legend list...</ul>`}
        >
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
                    {CHANNELS.map((c, i) => (
                      <Cell
                        key={c.name}
                        fill={PIE_COLORS[i % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Chart.Tooltip />
                </PieChart>
              </Chart.Container>
              <ul className="flex flex-1 flex-col gap-2">
                {CHANNELS.map((c, i) => (
                  <li
                    key={c.name}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span
                      className="size-2.5 rounded-sm"
                      style={{
                        background: PIE_COLORS[i % PIE_COLORS.length],
                      }}
                    />
                    <span className="text-fg-soft">{c.name}</span>
                    <span className="ml-auto text-fg-muted tabular-nums">
                      {c.value}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Container props">
        <PropsTable rows={CONTAINER_PROPS} />
      </DocSection>
    </div>
  );
}

function LineMultiPreview() {
  const data = REVENUE.map((d, i) => ({
    ...d,
    target: 170 + i * 5,
  }));
  return (
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
  );
}
