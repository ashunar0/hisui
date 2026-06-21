import { parseColor } from "@ark-ui/react/color-picker";
import type {
  Color,
  ColorPickerColorFormat as ColorFormat,
} from "@ark-ui/react/color-picker";
import { Check, Pipette } from "lucide-react";
import { useState } from "react";
import { ColorPicker } from "@/components/ui/color-picker";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "ColorPicker.Root",
    description:
      "外枠。 value (Color) と format (hsla/rgba/hsba/hex) で色管理。 controlled は useState の Color object を渡す。",
  },
  {
    name: "ColorPicker.Label / Control",
    description:
      "見出し + Trigger + Input を並べる枠。 Trigger に ValueSwatch を入れて current color を表示する典型。",
  },
  {
    name: "ColorPicker.ChannelInput",
    description: 'channel="hex" / "alpha" 等を指定する text 入力。 直接 hex を打ち込む口。',
  },
  {
    name: "ColorPicker.Trigger / ValueSwatch / ValueText",
    description:
      "click で popup を開く button + 現在色の swatch / text。 Trigger の中に ValueSwatch を入れるとミニ swatch button に。",
  },
  {
    name: "ColorPicker.Content + Positioner",
    description:
      "popup の中身。 Portal + Positioner で escape。 Area / Sliders / SwatchGroup / View を並べる。",
  },
  {
    name: "ColorPicker.Area + AreaBackground + AreaThumb",
    description:
      "2D の saturation × brightness picker。 drag で color 選択。",
  },
  {
    name: "ColorPicker.ChannelSlider (+ Track / Thumb / Label / ValueText)",
    description:
      "1 channel の slider (hue/sat/lightness/alpha 等)。 ChannelSlider で wrap、 中に Track + Thumb。",
  },
  {
    name: "ColorPicker.TransparencyGrid",
    description: "alpha slider の背景 checker pattern。 半透明感を伝える。",
  },
  {
    name: "ColorPicker.View",
    description:
      "format ごとの slider 構成を出し分け。 format=hsla なら HSL slider、 rgba なら RGB slider 等。",
  },
  {
    name: "ColorPicker.FormatTrigger / FormatSelect",
    description:
      "format 切替。 FormatTrigger は循環切替 button (click で次へ)、 FormatSelect は native select。",
  },
  {
    name: "ColorPicker.SwatchGroup / SwatchTrigger / Swatch / SwatchIndicator",
    description:
      "preset color 群。 SwatchTrigger.value に hex、 SwatchIndicator は選択中の check icon。",
  },
  {
    name: "ColorPicker.EyeDropperTrigger",
    description:
      "OS の eyedropper を起動 (対応 browser のみ)。 screen から色をピック。",
  },
  {
    name: "ColorPicker.HiddenInput",
    description: "form submit 用の hidden input。 必ず Root 内に置く。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "value",
    type: "Color",
    description: "controlled mode の色 (parseColor で作る)。",
  },
  {
    name: "defaultValue",
    type: "Color",
    description: "uncontrolled mode の初期色。",
  },
  {
    name: "onValueChange",
    type: "(details: { value: Color }) => void",
    description: "drag / 入力中に呼ばれる (連続)。",
  },
  {
    name: "onValueChangeEnd",
    type: "(details: { value: Color }) => void",
    description: "drag 終了時のみ。 API 送信等に。",
  },
  {
    name: "format",
    type: '"rgba" | "hsla" | "hsba" | "hex"',
    description: "表示 format。 FormatTrigger 併用なら controlled で同期 ([[reference_ark_ui_color_picker]])。",
  },
  {
    name: "onFormatChange",
    type: "(details: { format }) => void",
    description: "FormatTrigger 使う時必須。 onFormatChange で setColor(c.toFormat(d.format)) も同時に。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "全体無効化。",
  },
];

const PRESET_COLORS = [
  "#0EA5E9",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#14B8A6",
  "#F97316",
  "#0F172A",
  "#F8FAFC",
];

interface SliderProps {
  channel: "hue" | "saturation" | "lightness" | "alpha";
  label: string;
  transparency?: boolean;
  eyeDropper?: boolean;
}

function Slider({ channel, label, transparency, eyeDropper }: SliderProps) {
  return (
    <ColorPicker.ChannelSlider channel={channel}>
      <div className="flex items-center justify-between">
        <ColorPicker.ChannelSliderLabel>{label}</ColorPicker.ChannelSliderLabel>
        <ColorPicker.ChannelSliderValueText />
      </div>
      <div className="flex items-center gap-2">
        <ColorPicker.ChannelSliderTrack className="flex-1">
          {transparency && <ColorPicker.TransparencyGrid />}
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSliderTrack>
        {eyeDropper && (
          <ColorPicker.EyeDropperTrigger aria-label="Pick from screen">
            <Pipette className="size-4" strokeWidth={2} />
          </ColorPicker.EyeDropperTrigger>
        )}
      </div>
    </ColorPicker.ChannelSlider>
  );
}

function FullExample() {
  const [color, setColor] = useState<Color>(() =>
    parseColor("#10B981").toFormat("hsla"),
  );
  const [format, setFormat] = useState<ColorFormat>("hsla");
  return (
    <div className="w-72">
      <ColorPicker.Root
        value={color}
        format={format}
        onValueChange={(d) => setColor(d.value)}
        onFormatChange={(d) => {
          setFormat(d.format);
          setColor((c) => c.toFormat(d.format));
        }}
      >
        <ColorPicker.Label>Brand color</ColorPicker.Label>
        <ColorPicker.Control>
          <ColorPicker.ChannelInput channel="hex" />
          <ColorPicker.Trigger>
            <ColorPicker.ValueSwatch />
          </ColorPicker.Trigger>
        </ColorPicker.Control>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <ColorPicker.View format="hsla">
              <div className="flex flex-col gap-3">
                <Slider channel="hue" label="Hue" eyeDropper />
                <Slider channel="alpha" label="Alpha" transparency />
              </div>
            </ColorPicker.View>
            <div className="flex items-center justify-between border-border border-t pt-2.5">
              <ColorPicker.ValueText />
              <ColorPicker.FormatTrigger>format</ColorPicker.FormatTrigger>
            </div>
            <ColorPicker.SwatchGroup>
              {PRESET_COLORS.map((c) => (
                <ColorPicker.SwatchTrigger key={c} value={c}>
                  <ColorPicker.Swatch value={c}>
                    <ColorPicker.SwatchIndicator>
                      <Check className="size-3.5" strokeWidth={3} />
                    </ColorPicker.SwatchIndicator>
                  </ColorPicker.Swatch>
                </ColorPicker.SwatchTrigger>
              ))}
            </ColorPicker.SwatchGroup>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
        <ColorPicker.HiddenInput />
      </ColorPicker.Root>
    </div>
  );
}

function SwatchesExample() {
  const [color, setColor] = useState<Color>(() => parseColor("#0EA5E9"));
  return (
    <div className="w-72">
      <ColorPicker.Root value={color} onValueChange={(d) => setColor(d.value)}>
        <ColorPicker.Label>Brand color</ColorPicker.Label>
        <ColorPicker.Control>
          <ColorPicker.Trigger>
            <ColorPicker.ValueSwatch />
          </ColorPicker.Trigger>
          <ColorPicker.ValueText />
        </ColorPicker.Control>
        <ColorPicker.Positioner>
          <ColorPicker.Content className="w-fit">
            <ColorPicker.SwatchGroup className="grid grid-cols-5 gap-1.5">
              {PRESET_COLORS.map((c) => (
                <ColorPicker.SwatchTrigger key={c} value={c}>
                  <ColorPicker.Swatch value={c}>
                    <ColorPicker.SwatchIndicator>
                      <Check className="size-3.5" strokeWidth={3} />
                    </ColorPicker.SwatchIndicator>
                  </ColorPicker.Swatch>
                </ColorPicker.SwatchTrigger>
              ))}
            </ColorPicker.SwatchGroup>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
        <ColorPicker.HiddenInput />
      </ColorPicker.Root>
    </div>
  );
}

export function ColorPickerDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="ColorPicker">
        2D area + channel slider + hex / rgba / hsla / hsba format 切替 + preset
        swatches まで揃った compound。 controlled mode は parseColor で初期化、
        FormatTrigger を使うなら format も controlled + onFormatChange で sync
        が必須 ([[reference_ark_ui_color_picker]])。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Label / Control (ChannelInput + Trigger) と Positioner > Content (Area + ChannelSlider 群 + SwatchGroup + FormatTrigger + ValueText)、 HiddenInput。"
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
        description="Trigger (現在色の swatch) を click → popup で Area + Hue slider + Alpha slider + format 切替 + preset swatches。 controlled で format も sync。"
      >
        <Example
          code={`const [color, setColor] = useState(() => parseColor("#10B981").toFormat("hsla"));
const [format, setFormat] = useState<ColorFormat>("hsla");

<ColorPicker.Root
  value={color}
  format={format}
  onValueChange={(d) => setColor(d.value)}
  onFormatChange={(d) => {
    setFormat(d.format);
    setColor((c) => c.toFormat(d.format));
  }}
>
  <ColorPicker.Label>Brand color</ColorPicker.Label>
  <ColorPicker.Control>
    <ColorPicker.ChannelInput channel="hex" />
    <ColorPicker.Trigger><ColorPicker.ValueSwatch /></ColorPicker.Trigger>
  </ColorPicker.Control>
  <ColorPicker.Positioner>
    <ColorPicker.Content>
      <ColorPicker.Area>
        <ColorPicker.AreaBackground />
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
      <Slider channel="hue" label="Hue" />
      <Slider channel="alpha" label="Alpha" transparency />
      <ColorPicker.SwatchGroup>...</ColorPicker.SwatchGroup>
    </ColorPicker.Content>
  </ColorPicker.Positioner>
  <ColorPicker.HiddenInput />
</ColorPicker.Root>`}
        >
          <FullExample />
        </Example>
      </DocSection>

      <DocSection
        title="Swatches only"
        description="preset 群だけで Area / Slider 無し。 brand color picker / settings の簡易選択に。"
      >
        <Example
          code={`<ColorPicker.Root value={color} onValueChange={...}>
  <ColorPicker.Trigger><ColorPicker.ValueSwatch /></ColorPicker.Trigger>
  <ColorPicker.Content>
    <ColorPicker.SwatchGroup>
      {COLORS.map((c) => (
        <ColorPicker.SwatchTrigger key={c} value={c}>
          <ColorPicker.Swatch value={c}>
            <ColorPicker.SwatchIndicator>...</ColorPicker.SwatchIndicator>
          </ColorPicker.Swatch>
        </ColorPicker.SwatchTrigger>
      ))}
    </ColorPicker.SwatchGroup>
  </ColorPicker.Content>
</ColorPicker.Root>`}
        >
          <SwatchesExample />
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
