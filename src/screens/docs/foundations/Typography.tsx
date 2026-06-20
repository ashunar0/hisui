import { DocHeader, DocSection } from "../parts/doc-page";

const HEADING_SIZES = [
  { size: "4xl", classes: "text-5xl tracking-tight", sample: "Display" },
  { size: "3xl", classes: "text-4xl tracking-tight", sample: "Hero" },
  { size: "2xl", classes: "text-3xl", sample: "Page title" },
  { size: "xl", classes: "text-2xl", sample: "Section" },
  { size: "lg", classes: "text-xl", sample: "Subsection" },
  { size: "md", classes: "text-lg", sample: "Card title" },
  { size: "sm", classes: "text-base", sample: "Group label" },
  { size: "xs", classes: "text-sm", sample: "Small label" },
] as const;

const BODY_SIZES = [
  { name: "text-lg", classes: "text-lg", note: "強調 lead" },
  { name: "text-base", classes: "text-base", note: "標準本文" },
  { name: "text-sm", classes: "text-sm", note: "compact UI / lead 補足" },
  { name: "text-xs", classes: "text-xs", note: "meta / caption" },
] as const;

const WEIGHTS = [
  { name: "font-normal", classes: "font-normal", note: "400 本文" },
  { name: "font-medium", classes: "font-medium", note: "500 弱強調 / label" },
  {
    name: "font-semibold",
    classes: "font-semibold",
    note: "600 Heading default",
  },
  { name: "font-bold", classes: "font-bold", note: "700 numeric 強調" },
] as const;

const FG_TOKENS = [
  { name: "text-fg", classes: "text-fg", note: "本文 / Heading" },
  { name: "text-fg-soft", classes: "text-fg-soft", note: "section label" },
  { name: "text-fg-muted", classes: "text-fg-muted", note: "description / meta" },
  {
    name: "text-fg-subtle",
    classes: "text-fg-subtle",
    note: "placeholder / 最弱",
  },
] as const;

function Row({
  label,
  meta,
  children,
}: {
  label: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[6rem_1fr] items-center gap-4 border-b border-border-muted py-3 last:border-b-0">
      <div className="flex flex-col">
        <span className="font-mono text-fg text-xs">{label}</span>
        {meta && <span className="text-[11px] text-fg-muted">{meta}</span>}
      </div>
      <div>{children}</div>
    </div>
  );
}

function TypeScale() {
  return (
    <DocSection
      title="Heading scale"
      description="Heading primitive の size。 8 段階。 3xl 以上は tracking-tight、 font-weight は semibold 固定。"
    >
      <div className="flex flex-col">
        {HEADING_SIZES.map((s) => (
          <Row key={s.size} label={`size="${s.size}"`} meta={s.classes}>
            <span className={`${s.classes} font-semibold text-fg`}>
              {s.sample}
            </span>
          </Row>
        ))}
      </div>
    </DocSection>
  );
}

function BodyScale() {
  return (
    <DocSection
      title="Body scale"
      description="本文・UI で使うサイズ。 Tailwind default をそのまま使う。"
    >
      <div className="flex flex-col">
        {BODY_SIZES.map((s) => (
          <Row key={s.name} label={s.name} meta={s.note}>
            <span className={`${s.classes} text-fg`}>
              The quick brown fox jumps over the lazy dog.
            </span>
          </Row>
        ))}
      </div>
    </DocSection>
  );
}

function Weights() {
  return (
    <DocSection
      title="Weights"
      description="Wix Madefor Text Variable は 400 / 500 / 600 / 700 を主に使う。"
    >
      <div className="flex flex-col">
        {WEIGHTS.map((w) => (
          <Row key={w.name} label={w.name} meta={w.note}>
            <span className={`${w.classes} text-base text-fg`}>
              The quick brown fox 0123
            </span>
          </Row>
        ))}
      </div>
    </DocSection>
  );
}

function ForegroundTokens() {
  return (
    <DocSection
      title="Foreground tokens"
      description="文字色は raw color を使わず semantic token に通す。 詳細は Colors を参照。"
    >
      <div className="flex flex-col">
        {FG_TOKENS.map((t) => (
          <Row key={t.name} label={t.name} meta={t.note}>
            <span className={`${t.classes} text-base`}>
              The quick brown fox jumps over the lazy dog.
            </span>
          </Row>
        ))}
      </div>
    </DocSection>
  );
}

function LineHeightTracking() {
  return (
    <DocSection
      title="Leading & tracking"
      description="長文には leading-relaxed、 大きな Heading には tracking-tight を組み合わせる。"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-mono text-fg-muted text-[11px]">
            leading-relaxed (1.625)
          </span>
          <p className="text-fg text-sm leading-relaxed">
            色は raw な Tailwind palette を直接使わず、用途を表す semantic token
            に必ず通す。token は index.css の @theme と .dark に定義され、light /
            dark の切替は token の値だけが入れ替わる。
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-mono text-fg-muted text-[11px]">
            leading-normal (1.5)
          </span>
          <p className="text-fg text-sm leading-normal">
            色は raw な Tailwind palette を直接使わず、用途を表す semantic token
            に必ず通す。token は index.css の @theme と .dark に定義され、light /
            dark の切替は token の値だけが入れ替わる。
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-mono text-fg-muted text-[11px]">
            tracking-tight (-0.025em)
          </span>
          <span className="text-4xl font-semibold tracking-tight text-fg">
            Tight headline
          </span>
        </div>
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-mono text-fg-muted text-[11px]">
            tracking-normal (0)
          </span>
          <span className="text-4xl font-semibold text-fg">Normal headline</span>
        </div>
      </div>
    </DocSection>
  );
}

export function Typography() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Typography">
        font-family は Wix Madefor Text Variable を <code>--font-sans</code>{" "}
        に束ねる。サイズ・weight・leading は Tailwind default
        をそのまま使い、文字色だけ semantic token に通す方針。
      </DocHeader>

      <TypeScale />
      <BodyScale />
      <Weights />
      <ForegroundTokens />
      <LineHeightTracking />
    </div>
  );
}
