import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Volume />
      <PriceRangeWithMarkers />
      <WithDraggingIndicator />
    </div>
  );
}

function Volume() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        single (Volume、 ValueText を Label 右に / disabled の例も)
      </p>
      <div className="flex w-80 flex-col gap-6">
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
    </div>
  );
}

function PriceRangeWithMarkers() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        range + markers (2 thumb で範囲指定、 MarkerGroup + Marker で
        $0 / $25 / $50 / $75 / $100 の tick 表示)
      </p>
      <div className="w-80">
        <Slider.Root defaultValue={[20, 80]} min={0} max={100} step={5}>
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
          <Slider.MarkerGroup className="relative mt-2 flex items-center">
            {[0, 25, 50, 75, 100].map((v) => (
              <Slider.Marker key={v} value={v}>
                ${v}
              </Slider.Marker>
            ))}
          </Slider.MarkerGroup>
        </Slider.Root>
      </div>
    </div>
  );
}

function WithDraggingIndicator() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        with DraggingIndicator (drag 中に Thumb の上に値 bubble、 bg-fg + text-bg
        の反転 chip)
      </p>
      <div className="w-80">
        <Slider.Root defaultValue={[60]} min={0} max={200} step={1}>
          <Slider.Label>Brightness</Slider.Label>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.DraggingIndicator index={0} />
            </Slider.Thumb>
          </Slider.Control>
        </Slider.Root>
      </div>
    </div>
  );
}
