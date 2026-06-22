"use client";

import { Carousel } from "@/components/ui/carousel";

const SLIDES = [
  {
    title: "Ship faster",
    description: "Outline-first primitives.",
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

export default function CarouselHeroDemo() {
  return (
    <Carousel.Root slideCount={SLIDES.length}>
      <Carousel.ItemGroup>
        {SLIDES.map((slide, i) => (
          <Carousel.Item key={slide.title} index={i}>
            <div
              className={`flex h-56 flex-col items-center justify-center gap-2 bg-gradient-to-br ${slide.accent} ${slide.dark}`}
            >
              <div className="font-semibold text-fg text-xl">{slide.title}</div>
              <div className="text-fg-soft text-sm">{slide.description}</div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control>
        <Carousel.PrevTrigger />
        <Carousel.NextTrigger />
      </Carousel.Control>
      <Carousel.IndicatorGroup>
        {SLIDES.map((slide, i) => (
          <Carousel.Indicator key={slide.title} index={i} />
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  );
}
