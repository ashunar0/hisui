import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  return (
    <div className="flex w-80 flex-col gap-8">
      <Slider.Root defaultValue={[50]}>
        <div className="flex items-center justify-between">
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

      <Slider.Root defaultValue={[20, 80]} min={0} max={100}>
        <div className="flex items-center justify-between">
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

      <Slider.Root defaultValue={[30]} disabled>
        <Slider.Label>Disabled</Slider.Label>
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
