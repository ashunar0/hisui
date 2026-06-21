import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Slider.Root",
    description:
      "外枠。 value / defaultValue (number[]) で thumb 位置を管理。 min / max / step で範囲。",
  },
  {
    name: "Slider.Label",
    description: "見出し。 aria-labelledby に自動接続。 ValueText と横並びにする典型。",
  },
  {
    name: "Slider.ValueText",
    description: "現在値の text 表示。 children に function を渡して format 可。",
  },
  {
    name: "Slider.Control",
    description: "Track + Thumb をまとめる relative container。 click / drag を受け取る。",
  },
  {
    name: "Slider.Track",
    description: "背景の溝。 sunken bg。",
  },
  {
    name: "Slider.Range",
    description: "選択範囲を塗る前景。 origin に応じて伸びる起点が変わる。",
  },
  {
    name: "Slider.Thumb",
    description:
      "つまみ。 thumb 数 = value 配列の長さ。 内部に HiddenInput を自動 mount。",
  },
  {
    name: "Slider.MarkerGroup / Marker",
    description:
      "目盛り。 Marker の value prop で位置指定。 data-state=under-value で色を変えられる。",
  },
  {
    name: "Slider.DraggingIndicator",
    description:
      "drag 中だけ thumb の上に浮かぶ tooltip 風 indicator。 現在値を表示する用途。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "Root.value",
    type: "number[]",
    description: "controlled mode の値。 thumb 1 つでも array で渡す。",
  },
  {
    name: "Root.defaultValue",
    type: "number[]",
    default: "[0]",
    description: "uncontrolled mode の初期値。",
  },
  {
    name: "Root.onValueChange",
    type: "(details: { value: number[] }) => void",
    description: "drag / click 中 (連続) に呼ばれる。 live preview 向け。",
  },
  {
    name: "Root.onValueChangeEnd",
    type: "(details: { value: number[] }) => void",
    description: "drag 終了時のみ呼ばれる。 API 送信など重い処理向け。",
  },
  {
    name: "Root.min",
    type: "number",
    default: "0",
    description: "最小値。",
  },
  {
    name: "Root.max",
    type: "number",
    default: "100",
    description: "最大値。",
  },
  {
    name: "Root.step",
    type: "number",
    default: "1",
    description: "刻み幅。 keyboard 操作も step 単位。",
  },
  {
    name: "Root.minStepsBetweenThumbs",
    type: "number",
    default: "0",
    description: "range slider で 2 つの thumb の最小間隔 (step 数)。",
  },
  {
    name: "Root.orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "縦置きにする場合 vertical。",
  },
  {
    name: "Root.origin",
    type: '"start" | "center" | "end"',
    default: '"start"',
    description:
      "Range の起点。 center は 0 中心の offset 値 (温度補正など) で使う。",
  },
  {
    name: "Root.disabled",
    type: "boolean",
    default: "false",
    description: "全 thumb 無効化。",
  },
];

function ControlledExample() {
  const [value, setValue] = useState([45]);
  return (
    <div className="flex w-72 flex-col gap-3">
      <Slider.Root value={value} onValueChange={(d) => setValue(d.value)}>
        <div className="flex items-baseline justify-between">
          <Slider.Label>Volume</Slider.Label>
          <Slider.ValueText />
        </div>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0} />
        </Slider.Control>
      </Slider.Root>
      <p className="text-fg-muted text-xs">value: {value[0]}</p>
    </div>
  );
}

export function SliderDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Slider">
        Track 上の Thumb を drag して数値を選ぶ。 単一値の連続入力 (volume / opacity)
        や、 2 つの Thumb で範囲指定 (price range)、 中央起点で正負の offset (EQ /
        bias) など 1 primitive で広く使える。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Label / ValueText / Control (Track + Range + Thumb) を並べる。 Marker / DraggingIndicator は任意。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[16rem_1fr] gap-3">
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
        description="uncontrolled (defaultValue) の最小例。"
      >
        <Example
          code={`<Slider.Root defaultValue={[40]}>
  <Slider.Label>Volume</Slider.Label>
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb index={0} />
  </Slider.Control>
</Slider.Root>`}
        >
          <div className="w-72">
            <Slider.Root defaultValue={[40]}>
              <Slider.Label>Volume</Slider.Label>
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb index={0} />
              </Slider.Control>
            </Slider.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Controlled"
        description="value + onValueChange で外部 state と同期。 表示は ValueText で。"
      >
        <Example
          code={`const [value, setValue] = useState([45]);
<Slider.Root value={value} onValueChange={(d) => setValue(d.value)}>
  ...
</Slider.Root>`}
        >
          <ControlledExample />
        </Example>
      </DocSection>

      <DocSection
        title="Range"
        description="Thumb を 2 つ並べて範囲指定。 minStepsBetweenThumbs で交差を防ぐ。"
      >
        <Example
          code={`<Slider.Root defaultValue={[20, 75]} minStepsBetweenThumbs={5}>
  <Slider.Label>Price range</Slider.Label>
  <Slider.Control>
    <Slider.Track><Slider.Range /></Slider.Track>
    <Slider.Thumb index={0} />
    <Slider.Thumb index={1} />
  </Slider.Control>
</Slider.Root>`}
        >
          <div className="w-72">
            <Slider.Root defaultValue={[20, 75]} minStepsBetweenThumbs={5}>
              <div className="flex items-baseline justify-between">
                <Slider.Label>Price range</Slider.Label>
                <Slider.ValueText />
              </div>
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb index={0} />
                <Slider.Thumb index={1} />
              </Slider.Control>
            </Slider.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Step + markers"
        description="step で刻み、 MarkerGroup + Marker で目盛り表示。 under-value で済んだ目盛りを濃く。"
      >
        <Example
          code={`<Slider.Root defaultValue={[60]} min={0} max={100} step={20}>
  ...
  <Slider.MarkerGroup>
    {[0, 20, 40, 60, 80, 100].map((v) => (
      <Slider.Marker key={v} value={v}>{v}</Slider.Marker>
    ))}
  </Slider.MarkerGroup>
</Slider.Root>`}
        >
          <div className="w-72">
            <Slider.Root defaultValue={[60]} min={0} max={100} step={20}>
              <Slider.Label>Quality</Slider.Label>
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb index={0} />
              </Slider.Control>
              <Slider.MarkerGroup>
                {[0, 20, 40, 60, 80, 100].map((v) => (
                  <Slider.Marker key={v} value={v}>
                    {v}
                  </Slider.Marker>
                ))}
              </Slider.MarkerGroup>
            </Slider.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Origin: center"
        description="0 中心の正負 offset。 EQ や明るさ補正、 audio pan などに。"
      >
        <Example
          code={`<Slider.Root defaultValue={[0]} min={-50} max={50} origin="center">
  ...
</Slider.Root>`}
        >
          <div className="w-72">
            <Slider.Root defaultValue={[0]} min={-50} max={50} origin="center">
              <div className="flex items-baseline justify-between">
                <Slider.Label>Bias</Slider.Label>
                <Slider.ValueText />
              </div>
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb index={0} />
              </Slider.Control>
            </Slider.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Disabled"
        description="Root に disabled。 thumb は drag 不可、 opacity 50%。"
      >
        <Example code={`<Slider.Root defaultValue={[30]} disabled>...`}>
          <div className="w-72">
            <Slider.Root defaultValue={[30]} disabled>
              <Slider.Label>Locked</Slider.Label>
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb index={0} />
              </Slider.Control>
            </Slider.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
