import { Carousel } from "@/components/ui/carousel";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const HERO_SLIDES = [
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

const GALLERY = [
  { label: "Sunrise", accent: "from-orange-300 via-amber-200 to-rose-200" },
  { label: "Forest", accent: "from-emerald-400 via-emerald-200 to-lime-100" },
  { label: "Ocean", accent: "from-sky-400 via-cyan-200 to-blue-100" },
  { label: "Night", accent: "from-indigo-500 via-violet-300 to-purple-200" },
];

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

const PARTS = [
  {
    name: "Carousel.Root",
    description:
      "外枠。 slideCount / loop / autoplay / orientation を受ける。 relative + overflow-hidden + border。",
  },
  {
    name: "Carousel.ItemGroup",
    description:
      "Item を flex row (horizontal) または flex col (vertical) で並べる track。",
  },
  {
    name: "Carousel.Item",
    description:
      "1 slide。 default で basis-full + shrink-0 + grow-0 (1 画面 1 slide)。 index prop 必須。",
  },
  {
    name: "Carousel.Control",
    description:
      "Prev / Next を inset-y-0 で両端に配置する flex row。 pointer-events-none で中央 area の操作を妨げない。",
  },
  {
    name: "Carousel.PrevTrigger / NextTrigger",
    description:
      "矢印 button。 default は ChevronLeft / ChevronRight。 children で差し替え。",
  },
  {
    name: "Carousel.IndicatorGroup",
    description:
      "下端中央の dot 列。 default で absolute bottom-3 配置。",
  },
  {
    name: "Carousel.Indicator",
    description:
      "dot 1 個。 data-current で width が伸びて active が分かる。 index 必須。",
  },
  {
    name: "Carousel.AutoplayTrigger / AutoplayIndicator",
    description:
      "再生 / 一時停止 toggle。 Trigger の中で Indicator が Play / Pause icon を切替。",
  },
  {
    name: "Carousel.ProgressText",
    description:
      "「3 / 8」のような counter text。 header に置く時に便利。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "slideCount",
    type: "number",
    default: "—",
    description: "総 slide 数。 必須。 Indicator や ProgressText の母数になる。",
  },
  {
    name: "loop",
    type: "boolean",
    default: "false",
    description: "末尾の次が先頭に戻る。 autoplay と組み合わせると無限再生。",
  },
  {
    name: "autoplay",
    type: "boolean | { delay?: number }",
    default: "—",
    description:
      "自動再生。 { delay: 3000 } で 3 秒間隔。 AutoplayTrigger で一時停止可。",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "縦 carousel にしたい時は vertical。",
  },
  {
    name: "slidesPerPage / slidesPerMove",
    type: "number",
    default: "1",
    description:
      "1 画面に複数 slide を見せたい時に。 同時に move 量も変えられる。",
  },
];

export function CarouselDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Carousel">
        Ark UI ベースの slider。 slide / dot / Prev/Next / Autoplay / Progress を
        全部 dot-namespace で持つ。 Root に slideCount を渡し、 Item の index と
        合わせるのが基本契約。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に ItemGroup + Item を並べ、 Control / IndicatorGroup を overlay として置く。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[18rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Hero slider"
        description="最小構成 + dot indicator。 Item に index、 Root に slideCount を渡す。"
      >
        <Example
          code={`<Carousel.Root slideCount={slides.length}>
  <Carousel.ItemGroup>
    {slides.map((slide, i) => (
      <Carousel.Item key={i} index={i}>...</Carousel.Item>
    ))}
  </Carousel.ItemGroup>
  <Carousel.Control>
    <Carousel.PrevTrigger />
    <Carousel.NextTrigger />
  </Carousel.Control>
  <Carousel.IndicatorGroup>
    {slides.map((_, i) => (
      <Carousel.Indicator key={i} index={i} />
    ))}
  </Carousel.IndicatorGroup>
</Carousel.Root>`}
        >
          <Carousel.Root slideCount={HERO_SLIDES.length}>
            <Carousel.ItemGroup>
              {HERO_SLIDES.map((slide, i) => (
                <Carousel.Item key={slide.title} index={i}>
                  <div
                    className={`flex h-56 flex-col items-center justify-center gap-2 bg-gradient-to-br ${slide.accent} ${slide.dark}`}
                  >
                    <div className="font-semibold text-fg text-xl">
                      {slide.title}
                    </div>
                    <div className="text-fg-soft text-sm">
                      {slide.description}
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
              {HERO_SLIDES.map((slide, i) => (
                <Carousel.Indicator key={slide.title} index={i} />
              ))}
            </Carousel.IndicatorGroup>
          </Carousel.Root>
        </Example>
      </DocSection>

      <DocSection
        title="With progress counter"
        description="ProgressText を header に出すと「3 / 4」が見える。 IndicatorGroup を省くパターン。"
      >
        <Example
          code={`<Carousel.Root slideCount={items.length}>
  <div className="flex items-center justify-between border-b px-4 py-2">
    <span>Featured</span>
    <Carousel.ProgressText />
  </div>
  <Carousel.ItemGroup>...</Carousel.ItemGroup>
  <Carousel.Control>
    <Carousel.PrevTrigger />
    <Carousel.NextTrigger />
  </Carousel.Control>
</Carousel.Root>`}
        >
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
        </Example>
      </DocSection>

      <DocSection
        title="Autoplay"
        description="autoplay に delay を渡すと自動再生。 loop と組み合わせて無限ループに。 AutoplayTrigger で一時停止 toggle を出せる。"
      >
        <Example
          code={`<Carousel.Root
  slideCount={items.length}
  loop
  autoplay={{ delay: 3000 }}
>
  <Carousel.ItemGroup>...</Carousel.ItemGroup>
  <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-3">
    <Carousel.AutoplayTrigger />
    <Carousel.IndicatorGroup className="static">
      {items.map((_, i) => <Carousel.Indicator key={i} index={i} />)}
    </Carousel.IndicatorGroup>
  </div>
</Carousel.Root>`}
        >
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
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
