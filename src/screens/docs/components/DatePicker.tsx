import { Calendar as CalendarIcon } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "DatePicker.Root",
    description:
      "外枠。 value / onValueChange で日付を管理。 selectionMode で single / multiple / range、 locale / timeZone も指定可。",
  },
  {
    name: "DatePicker.Label",
    description: "見出し。 aria-labelledby に自動接続。",
  },
  {
    name: "DatePicker.Control",
    description: "Input + Trigger を並べる枠。 relative で trigger 重ねる土台。",
  },
  {
    name: "DatePicker.Input",
    description: "text 入力可能な date 入力。 format に従って自動解釈。",
  },
  {
    name: "DatePicker.Trigger",
    description: "click で calendar popup を開く button。 Input の右端に被せる。",
  },
  {
    name: "DatePicker.Content",
    description:
      "calendar popup。 内部で Portal + Positioner + 3 View (day/month/year) を切替表示。",
  },
  {
    name: "DatePicker.Calendar",
    description:
      "ui-lab helper。 DayView + MonthView + YearView を 1 つにまとめた compound。 単純な calendar はこれだけで OK。",
  },
  {
    name: "DatePicker.View / ViewControl / ViewTrigger",
    description:
      "View は day / month / year の 3 mode。 ViewControl に Prev/Next + ViewTrigger (上の月名 click で view 切替) を並べる。",
  },
  {
    name: "DatePicker.ClearTrigger / PresetTrigger",
    description:
      "ClearTrigger は選択 clear、 PresetTrigger は \"Today\" / \"Tomorrow\" 等の preset jump button。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "value",
    type: "DateValue[]",
    description: "controlled mode の選択日。 range は 2 要素 array。",
  },
  {
    name: "defaultValue",
    type: "DateValue[]",
    description: "uncontrolled mode の初期日。",
  },
  {
    name: "onValueChange",
    type: "(details: { value: DateValue[] }) => void",
    description: "選択日が変わった時に呼ばれる。",
  },
  {
    name: "selectionMode",
    type: '"single" | "multiple" | "range"',
    default: '"single"',
    description: "選択方式。 multiple = 複数日、 range = 期間 (開始 / 終了)。",
  },
  {
    name: "min / max",
    type: "DateValue",
    description: "選択可能な範囲。 過去 / 未来を制限。",
  },
  {
    name: "locale",
    type: "string",
    default: '"en-US"',
    description: "週の先頭 / 曜日名 / month/year 表示の locale。",
  },
  {
    name: "startOfWeek",
    type: "number",
    description: "週の先頭曜日 (0=日, 1=月)。 locale 既定を上書き。",
  },
  {
    name: "fixedWeeks",
    type: "boolean",
    default: "false",
    description: "常に 6 週表示で高さを固定。 月跨ぎで gackgack しない。",
  },
  {
    name: "format",
    type: "(date) => string",
    description: "Input に出る text の format。",
  },
  {
    name: "view",
    type: '"day" | "month" | "year"',
    default: '"day"',
    description: "初期 view。 month / year で開いて jump させる UX も。",
  },
];

export function DatePickerDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="DatePicker">
        日付選択用の compound。 calendar grid (day / month / year の 3 view
        切替)、 Input への直接入力、 range / multiple、 preset jump まで
        全部入り。 popup は Portal で escape する。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Label / Control (Input + Trigger) / Content (Calendar)。 Calendar は DayView + MonthView + YearView を含む helper。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[20rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Usage"
        description="Trigger click で calendar 開く。 day 選ぶと Input 反映、 popup 上の月名 click で month/year view にジャンプ。"
      >
        <Example
          code={`<DatePicker.Root>
  <DatePicker.Label>Date</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Input />
    <DatePicker.Trigger>
      <Calendar />
    </DatePicker.Trigger>
  </DatePicker.Control>
  <DatePicker.Content>
    <DatePicker.Calendar />
  </DatePicker.Content>
</DatePicker.Root>`}
        >
          <div className="w-72">
            <DatePicker.Root>
              <DatePicker.Label>Date</DatePicker.Label>
              <DatePicker.Control>
                <DatePicker.Input />
                <DatePicker.Trigger>
                  <CalendarIcon className="size-4" />
                </DatePicker.Trigger>
              </DatePicker.Control>
              <DatePicker.Content>
                <DatePicker.Calendar />
              </DatePicker.Content>
            </DatePicker.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Range"
        description="selectionMode=range で 2 つの日を選び期間に。 booking / 期間 filter。"
      >
        <Example
          code={`<DatePicker.Root selectionMode="range">...`}
        >
          <div className="w-72">
            <DatePicker.Root selectionMode="range">
              <DatePicker.Label>Check-in / Check-out</DatePicker.Label>
              <DatePicker.Control>
                <DatePicker.Input />
                <DatePicker.Trigger>
                  <CalendarIcon className="size-4" />
                </DatePicker.Trigger>
              </DatePicker.Control>
              <DatePicker.Content>
                <DatePicker.Calendar />
              </DatePicker.Content>
            </DatePicker.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Locale (Japanese)"
        description="locale prop で曜日名 / 週先頭 / 月名を切替。 ja-JP で月始まりが日曜→月曜は startOfWeek=1。"
      >
        <Example
          code={`<DatePicker.Root locale="ja-JP" startOfWeek={0}>...`}
        >
          <div className="w-72">
            <DatePicker.Root locale="ja-JP">
              <DatePicker.Label>日付</DatePicker.Label>
              <DatePicker.Control>
                <DatePicker.Input />
                <DatePicker.Trigger>
                  <CalendarIcon className="size-4" />
                </DatePicker.Trigger>
              </DatePicker.Control>
              <DatePicker.Content>
                <DatePicker.Calendar />
              </DatePicker.Content>
            </DatePicker.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Fixed weeks"
        description="fixedWeeks で常に 6 週表示。 calendar の高さが月ごとに変わらなくなる (UI ガクガク防止)。"
      >
        <Example
          code={`<DatePicker.Root fixedWeeks>...`}
        >
          <div className="w-72">
            <DatePicker.Root fixedWeeks>
              <DatePicker.Label>Fixed-height calendar</DatePicker.Label>
              <DatePicker.Control>
                <DatePicker.Input />
                <DatePicker.Trigger>
                  <CalendarIcon className="size-4" />
                </DatePicker.Trigger>
              </DatePicker.Control>
              <DatePicker.Content>
                <DatePicker.Calendar />
              </DatePicker.Content>
            </DatePicker.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
