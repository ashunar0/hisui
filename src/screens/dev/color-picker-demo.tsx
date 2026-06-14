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

interface SliderProps {
  channel: "hue" | "saturation" | "lightness" | "brightness" | "red" | "green" | "blue" | "alpha";
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

export function ColorPickerDemo() {
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
