"use client";

import { Slider } from "@/components/ui/slider";

const MARKS = [0, 20, 40, 60, 80, 100];

export default function SliderMarkersDemo() {
  return (
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
          {MARKS.map((v) => (
            <Slider.Marker key={v} value={v}>
              {v}
            </Slider.Marker>
          ))}
        </Slider.MarkerGroup>
      </Slider.Root>
    </div>
  );
}
