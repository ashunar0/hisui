import { parseColor } from "@ark-ui/react/color-picker";
import type { Color, ColorFormat } from "@ark-ui/react/color-picker";
import { Check, Pipette } from "lucide-react";
import { useState } from "react";
import { ColorPicker } from "@/components/ui/color-picker";

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

const BRAND_SWATCHES = [
  "#0EA5E9",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#14B8A6",
  "#F97316",
  "#6366F1",
  "#22C55E",
];

interface SliderProps {
  channel:
    | "hue"
    | "saturation"
    | "lightness"
    | "brightness"
    | "red"
    | "green"
    | "blue"
    | "alpha";
  label: string;
  transparency?: boolean;
  eyeDropper?: boolean;
}

function Slider({ channel, label, transparency, eyeDropper }: SliderProps) {
  return (
    <ColorPicker.ChannelSlider channel={channel}>
      <div className="flex items-center justify-between">
        <ColorPicker.ChannelSliderLabel>
          {label}
        </ColorPicker.ChannelSliderLabel>
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

function FullDemo() {
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

            <ColorPicker.View format="rgba">
              <div className="flex flex-col gap-3">
                <Slider channel="red" label="Red" />
                <Slider channel="green" label="Green" />
                <Slider channel="blue" label="Blue" />
                <Slider channel="alpha" label="Alpha" transparency />
              </div>
            </ColorPicker.View>

            <ColorPicker.View format="hsba">
              <div className="flex flex-col gap-3">
                <Slider channel="hue" label="Hue" />
                <Slider channel="saturation" label="Saturation" />
                <Slider channel="brightness" label="Brightness" />
                <Slider channel="alpha" label="Alpha" transparency />
              </div>
            </ColorPicker.View>

            <div className="flex items-center justify-between border-t border-border pt-2.5">
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

function SwatchesDemo() {
  const [color, setColor] = useState<Color>(() => parseColor("#0EA5E9"));

  return (
    <div className="w-72">
      <ColorPicker.Root
        value={color}
        onValueChange={(d) => setColor(d.value)}
      >
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
              {BRAND_SWATCHES.map((c) => (
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

function InlineDemo() {
  const [color, setColor] = useState<Color>(() =>
    parseColor("#8B5CF6").toFormat("hsla"),
  );

  return (
    <div className="w-72">
      <ColorPicker.Root
        value={color}
        onValueChange={(d) => setColor(d.value)}
        format="hsla"
        className="gap-3 rounded-md border border-border bg-surface p-3"
      >
        <div className="flex items-center justify-between">
          <ColorPicker.Label>Background color</ColorPicker.Label>
          <ColorPicker.ValueText />
        </div>
        <ColorPicker.Area>
          <ColorPicker.AreaBackground />
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
        <div className="flex flex-col gap-3">
          <Slider channel="hue" label="Hue" />
          <Slider channel="alpha" label="Alpha" transparency />
        </div>
        <ColorPicker.Control>
          <ColorPicker.ChannelInput channel="hex" className="h-8 text-xs" />
        </ColorPicker.Control>
        <ColorPicker.HiddenInput />
      </ColorPicker.Root>
    </div>
  );
}

export function ColorPickerDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          full picker (popover + Area + Hue/Alpha + Swatches + FormatTrigger)
        </span>
        <FullDemo />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          swatches only (Trigger → popover で SwatchGroup grid)
        </span>
        <SwatchesDemo />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          inline (popover 無し、Area + Slider を settings panel 風に展開)
        </span>
        <InlineDemo />
      </div>
    </div>
  );
}
