import { Carousel } from "@/components/ui/carousel";

const SLIDES = [
  {
    title: "Slide 1",
    description: "Carousel の 1 枚目。",
    accent: "from-sky-200 to-sky-50",
    dark: "dark:from-sky-950/60 dark:to-sky-900/30",
  },
  {
    title: "Slide 2",
    description: "Prev/Next 矢印か Indicator で移動。",
    accent: "from-emerald-200 to-emerald-50",
    dark: "dark:from-emerald-950/60 dark:to-emerald-900/30",
  },
  {
    title: "Slide 3",
    description: "Indicator は current で長方形に伸びる。",
    accent: "from-amber-200 to-amber-50",
    dark: "dark:from-amber-950/60 dark:to-amber-900/30",
  },
  {
    title: "Slide 4",
    description: "loop=true で末尾から先頭へループ。",
    accent: "from-rose-200 to-rose-50",
    dark: "dark:from-rose-950/60 dark:to-rose-900/30",
  },
];

export function CarouselDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">default (loop なし)</span>
        <Carousel.Root slideCount={SLIDES.length}>
          <Carousel.ItemGroup>
            {SLIDES.map((slide, i) => (
              <Carousel.Item key={i} index={i}>
                <div
                  className={`flex h-64 flex-col items-center justify-center gap-2 bg-gradient-to-br ${slide.accent} ${slide.dark}`}
                >
                  <div className="text-xl font-semibold text-fg">
                    {slide.title}
                  </div>
                  <div className="text-sm text-fg-soft">{slide.description}</div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          <Carousel.Control>
            <Carousel.PrevTrigger />
            <Carousel.NextTrigger />
          </Carousel.Control>
          <Carousel.IndicatorGroup>
            {SLIDES.map((_, i) => (
              <Carousel.Indicator key={i} index={i} />
            ))}
          </Carousel.IndicatorGroup>
        </Carousel.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          loop + autoplay (3s 間隔)
        </span>
        <Carousel.Root
          slideCount={SLIDES.length}
          loop
          autoplay={{ delay: 3000 }}
        >
          <Carousel.ItemGroup>
            {SLIDES.map((slide, i) => (
              <Carousel.Item key={i} index={i}>
                <div
                  className={`flex h-48 flex-col items-center justify-center gap-2 bg-gradient-to-br ${slide.accent} ${slide.dark}`}
                >
                  <div className="text-xl font-semibold text-fg">
                    {slide.title}
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          <Carousel.Control>
            <Carousel.PrevTrigger />
            <Carousel.NextTrigger />
          </Carousel.Control>
          <Carousel.IndicatorGroup>
            {SLIDES.map((_, i) => (
              <Carousel.Indicator key={i} index={i} />
            ))}
          </Carousel.IndicatorGroup>
        </Carousel.Root>
      </div>
    </div>
  );
}
