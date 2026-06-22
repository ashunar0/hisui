"use client";

import { Carousel } from "@/components/ui/carousel";

const ANNOUNCEMENTS = [
  {
    title: "New: Carousel primitive",
    body: "AutoplayTrigger と ProgressText を export しました。",
  },
  {
    title: "Token v2 released",
    body: "fg-soft / fg-subtle で 4 段階の text 階調に。",
  },
  {
    title: "Roadmap published",
    body: "次は Treeview / TagsInput の doc 化です。",
  },
];

export default function CarouselAutoplayDemo() {
  return (
    <Carousel.Root
      slideCount={ANNOUNCEMENTS.length}
      loop
      autoplay={{ delay: 3000 }}
    >
      <Carousel.ItemGroup>
        {ANNOUNCEMENTS.map((slide, i) => (
          <Carousel.Item key={slide.title} index={i}>
            <div className="flex h-36 flex-col justify-center gap-2 bg-surface px-16">
              <div className="font-semibold text-base text-fg">
                {slide.title}
              </div>
              <div className="text-fg-soft text-sm">{slide.body}</div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control>
        <Carousel.PrevTrigger />
        <Carousel.NextTrigger />
      </Carousel.Control>
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-3">
        <Carousel.AutoplayTrigger />
        <Carousel.IndicatorGroup className="static">
          {ANNOUNCEMENTS.map((slide, i) => (
            <Carousel.Indicator key={slide.title} index={i} />
          ))}
        </Carousel.IndicatorGroup>
      </div>
    </Carousel.Root>
  );
}
