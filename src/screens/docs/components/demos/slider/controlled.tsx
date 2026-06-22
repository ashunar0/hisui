"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function SliderControlledDemo() {
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
