import { Minus, Plus } from "lucide-react";
import { NumberInput } from "@/components/ui/number-input";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "NumberInput.Root",
    description:
      "外枠。 value / defaultValue で値、 min / max / step で範囲、 formatOptions で表示 format。",
  },
  {
    name: "NumberInput.Label",
    description: "見出し。 aria-labelledby に自動接続。",
  },
  {
    name: "NumberInput.Control",
    description:
      "Input + Stepper を並べる枠。 border + rounded の inline container。 focus-within で ring。",
  },
  {
    name: "NumberInput.Input",
    description:
      "数値 text 入力。 tabular-nums で桁揃え。 invalid な文字は弾く。 keyboard ↑↓ で step。",
  },
  {
    name: "NumberInput.IncrementTrigger / DecrementTrigger",
    description:
      "+ / − の押下 button。 端 (min/max) で自動 disabled。 長押しで連続増減。",
  },
  {
    name: "NumberInput.Stepper",
    description:
      "+ / − を縦並びで内蔵した helper component (ui-lab 独自)。 default の右端表示用。",
  },
  {
    name: "NumberInput.Scrubber",
    description:
      "Label 等に被せると drag で値変更 (Figma / Photoshop 風)。 cursor=ew-resize。",
  },
  {
    name: "NumberInput.ValueText",
    description:
      "現在値の text 表示。 format された string をそのまま出す。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "value",
    type: "string",
    description: "controlled mode の値 (string で持つ)。",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "uncontrolled mode の初期値。",
  },
  {
    name: "onValueChange",
    type: "(details: { value: string; valueAsNumber: number }) => void",
    description: "入力 / step 毎に呼ばれる。",
  },
  {
    name: "min",
    type: "number",
    description: "最小値。 < min は弾く。",
  },
  {
    name: "max",
    type: "number",
    description: "最大値。 > max は弾く。",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description: "刻み幅。 ↑↓ / Stepper / Scrubber 全てで使う。",
  },
  {
    name: "allowMouseWheel",
    type: "boolean",
    default: "false",
    description: "true で focus 中の mouse wheel で step。 誤操作防ぐため default は false。",
  },
  {
    name: "formatOptions",
    type: "Intl.NumberFormatOptions",
    description: "通貨 / 単位 / 小数桁等。 例: { style: 'currency', currency: 'USD' }。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "全体無効化。",
  },
];

export function NumberInputDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="NumberInput">
        数値専用の text input。 keyboard ↑↓ / Stepper button / Scrubber drag /
        mouse wheel で値変更。 min / max / step で範囲を制約、 formatOptions
        で通貨 / 単位 / 小数桁の format。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Label / Control。 Control の中に Input と Stepper (+ / −) を並べる。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[18rem_1fr] gap-3">
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
        description="default の vertical stepper。 Stepper は + / − を内蔵した helper。"
      >
        <Example
          code={`<NumberInput.Root defaultValue="1">
  <NumberInput.Label>Quantity</NumberInput.Label>
  <NumberInput.Control>
    <NumberInput.Input />
    <NumberInput.Stepper />
  </NumberInput.Control>
</NumberInput.Root>`}
        >
          <NumberInput.Root defaultValue="1">
            <NumberInput.Label>Quantity</NumberInput.Label>
            <NumberInput.Control>
              <NumberInput.Input />
              <NumberInput.Stepper />
            </NumberInput.Control>
          </NumberInput.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Range + step"
        description="min / max / step で値の範囲と刻みを制御。 端で Stepper が自動 disabled。"
      >
        <Example
          code={`<NumberInput.Root defaultValue="50" min={0} max={100} step={5}>...`}
        >
          <NumberInput.Root defaultValue="50" min={0} max={100} step={5}>
            <NumberInput.Label>Percent (0-100, step 5)</NumberInput.Label>
            <NumberInput.Control>
              <NumberInput.Input />
              <NumberInput.Stepper />
            </NumberInput.Control>
          </NumberInput.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Cart style"
        description="− Input + を横並び。 IncrementTrigger / DecrementTrigger を Control の両端に直接配置。 EC の数量調整 UI。"
      >
        <Example
          code={`<NumberInput.Root defaultValue="1" min={1} max={10}>
  <NumberInput.Label>Tickets</NumberInput.Label>
  <NumberInput.Control className="w-36">
    <NumberInput.DecrementTrigger className="w-9 border-r border-border-muted">
      <Minus className="size-3.5" />
    </NumberInput.DecrementTrigger>
    <NumberInput.Input className="text-center" />
    <NumberInput.IncrementTrigger className="w-9 border-l border-border-muted">
      <Plus className="size-3.5" />
    </NumberInput.IncrementTrigger>
  </NumberInput.Control>
</NumberInput.Root>`}
        >
          <NumberInput.Root defaultValue="1" min={1} max={10}>
            <NumberInput.Label>Tickets</NumberInput.Label>
            <NumberInput.Control className="w-36">
              <NumberInput.DecrementTrigger className="w-9 border-r border-border-muted">
                <Minus className="size-3.5" />
              </NumberInput.DecrementTrigger>
              <NumberInput.Input className="text-center" />
              <NumberInput.IncrementTrigger className="w-9 border-l border-border-muted">
                <Plus className="size-3.5" />
              </NumberInput.IncrementTrigger>
            </NumberInput.Control>
          </NumberInput.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Scrubbable label"
        description="Scrubber で Label を wrap、 drag で値変更。 Figma / Photoshop の数値 input 風。 ValueText で current 表示。"
      >
        <Example
          code={`<NumberInput.Root defaultValue="16" min={0} max={200}>
  <NumberInput.Scrubber>
    <NumberInput.Label className="cursor-ew-resize">
      Font size (drag me)
    </NumberInput.Label>
  </NumberInput.Scrubber>
  <NumberInput.Control>
    <NumberInput.Input />
    <NumberInput.Stepper />
  </NumberInput.Control>
  <NumberInput.ValueText />
</NumberInput.Root>`}
        >
          <NumberInput.Root defaultValue="16" min={0} max={200} step={1}>
            <NumberInput.Scrubber>
              <NumberInput.Label className="cursor-ew-resize underline decoration-fg-muted decoration-dotted underline-offset-4">
                Font size (drag me)
              </NumberInput.Label>
            </NumberInput.Scrubber>
            <NumberInput.Control>
              <NumberInput.Input />
              <NumberInput.Stepper />
            </NumberInput.Control>
            <div className="flex items-center gap-2 text-fg-muted text-xs">
              <span>Current:</span>
              <NumberInput.ValueText />
              <span>px</span>
            </div>
          </NumberInput.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Currency format"
        description="formatOptions で通貨 / 単位 / 小数桁を整形。 keyboard 入力中は raw、 blur で format される。"
      >
        <Example
          code={`<NumberInput.Root
  defaultValue="1500"
  min={0}
  step={100}
  formatOptions={{ style: "currency", currency: "USD" }}
>...`}
        >
          <NumberInput.Root
            defaultValue="1500"
            min={0}
            step={100}
            formatOptions={{ style: "currency", currency: "USD" }}
          >
            <NumberInput.Label>Budget (USD)</NumberInput.Label>
            <NumberInput.Control>
              <NumberInput.Input />
              <NumberInput.Stepper />
            </NumberInput.Control>
          </NumberInput.Root>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
