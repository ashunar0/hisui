import { Carousel } from "@/components/ui/carousel";

const HERO_SLIDES = [
  {
    title: "Ship faster",
    description: "Outline-first primitives, no shadcn fluff.",
    accent: "from-sky-200 to-sky-50",
    dark: "dark:from-sky-950/60 dark:to-sky-900/30",
  },
  {
    title: "Token-driven",
    description: "Semantic colors swap on light / dark.",
    accent: "from-emerald-200 to-emerald-50",
    dark: "dark:from-emerald-950/60 dark:to-emerald-900/30",
  },
  {
    title: "Ark UI under the hood",
    description: "Headless state machines, your skin on top.",
    accent: "from-amber-200 to-amber-50",
    dark: "dark:from-amber-950/60 dark:to-amber-900/30",
  },
  {
    title: "Built to remix",
    description: "Dot-namespace every sub-component.",
    accent: "from-rose-200 to-rose-50",
    dark: "dark:from-rose-950/60 dark:to-rose-900/30",
  },
];

const GALLERY = [
  { label: "Sunrise", accent: "from-orange-300 via-amber-200 to-rose-200" },
  { label: "Forest", accent: "from-emerald-400 via-emerald-200 to-lime-100" },
  { label: "Ocean", accent: "from-sky-400 via-cyan-200 to-blue-100" },
  { label: "Night", accent: "from-indigo-500 via-violet-300 to-purple-200" },
];

const ANNOUNCEMENTS = [
  { title: "New: Carousel primitive", body: "AutoplayTrigger + ProgressText を export しました。" },
  { title: "Token v2 released", body: "fg-soft / fg-subtle で 4 段階の text 階調に。" },
  { title: "Roadmap published", body: "次は Splitter / TagsInput / TreeView の 3 demo 化です。" },
];

export function CarouselDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">hero slider</span>
        <Carousel.Root slideCount={HERO_SLIDES.length}>
          <Carousel.ItemGroup>
            {HERO_SLIDES.map((slide, i) => (
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
            {HERO_SLIDES.map((_, i) => (
              <Carousel.Indicator key={i} index={i} />
            ))}
          </Carousel.IndicatorGroup>
        </Carousel.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          image gallery + ProgressText counter
        </span>
        <Carousel.Root slideCount={GALLERY.length}>
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <span className="text-sm font-medium text-fg">Featured</span>
            <Carousel.ProgressText />
          </div>
          <Carousel.ItemGroup>
            {GALLERY.map((slide, i) => (
              <Carousel.Item key={i} index={i}>
                <div
                  className={`flex h-56 flex-col items-end justify-end gap-1 bg-gradient-to-br p-4 ${slide.accent}`}
                >
                  <div className="rounded-full bg-surface/80 px-2.5 py-1 text-xs font-medium text-fg backdrop-blur">
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
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          autoplay + AutoplayTrigger (Play / Pause toggle)
        </span>
        <Carousel.Root
          slideCount={ANNOUNCEMENTS.length}
          loop
          autoplay={{ delay: 3000 }}
        >
          <Carousel.ItemGroup>
            {ANNOUNCEMENTS.map((slide, i) => (
              <Carousel.Item key={i} index={i}>
                <div className="flex h-40 flex-col justify-center gap-2 bg-surface px-16">
                  <div className="text-base font-semibold text-fg">
                    {slide.title}
                  </div>
                  <div className="text-sm text-fg-soft">{slide.body}</div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
          <Carousel.Control>
            <Carousel.PrevTrigger />
            <Carousel.NextTrigger />
          </Carousel.Control>
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-3">
            <Carousel.AutoplayTrigger />
            <Carousel.IndicatorGroup className="static">
              {ANNOUNCEMENTS.map((_, i) => (
                <Carousel.Indicator key={i} index={i} />
              ))}
            </Carousel.IndicatorGroup>
          </div>
        </Carousel.Root>
      </div>
    </div>
  );
}
