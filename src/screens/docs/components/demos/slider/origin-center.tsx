import { Slider } from "@/components/ui/slider";

export default function SliderOriginCenterDemo() {
  return (
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
  );
}
