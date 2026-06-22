"use client";

import { Slider } from "@/components/ui/slider";

export default function SliderBasicDemo() {
  return (
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
  );
}
