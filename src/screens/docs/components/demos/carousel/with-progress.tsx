import { Carousel } from "@/components/ui/carousel";

const GALLERY = [
  { label: "Sunrise", accent: "from-orange-300 via-amber-200 to-rose-200" },
  { label: "Forest", accent: "from-emerald-400 via-emerald-200 to-lime-100" },
  { label: "Ocean", accent: "from-sky-400 via-cyan-200 to-blue-100" },
  { label: "Night", accent: "from-indigo-500 via-violet-300 to-purple-200" },
];

export default function CarouselWithProgressDemo() {
  return (
    <Carousel.Root slideCount={GALLERY.length}>
      <div className="flex items-center justify-between border-border border-b px-4 py-2">
        <span className="font-medium text-fg text-sm">Featured</span>
        <Carousel.ProgressText />
      </div>
      <Carousel.ItemGroup>
        {GALLERY.map((slide, i) => (
          <Carousel.Item key={slide.label} index={i}>
            <div
              className={`flex h-48 flex-col items-end justify-end gap-1 bg-gradient-to-br p-4 ${slide.accent}`}
            >
              <div className="rounded-full bg-surface/80 px-2.5 py-1 font-medium text-fg text-xs backdrop-blur">
                {slide.label}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control>
        <Carousel.PrevTrigger />
        <Carousel.NextTrigger />
      </Carousel.Control>
    </Carousel.Root>
  );
}
