"use client";

import { Slider } from "@/components/ui/slider";

export default function SliderRangeDemo() {
  return (
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
  );
}
