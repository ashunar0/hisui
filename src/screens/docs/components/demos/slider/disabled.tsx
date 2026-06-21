import { Slider } from "@/components/ui/slider";

export default function SliderDisabledDemo() {
  return (
    <div className="w-72">
      <Slider.Root defaultValue={[30]} disabled>
        <Slider.Label>Locked</Slider.Label>
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
