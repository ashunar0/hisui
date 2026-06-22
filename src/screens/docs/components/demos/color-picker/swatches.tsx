"use client";

import { parseColor } from "@ark-ui/react/color-picker";
import type { Color } from "@ark-ui/react/color-picker";
import { Check } from "lucide-react";
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

export default function ColorPickerSwatchesDemo() {
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
