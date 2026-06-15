import { Heading } from "@/components/ui/heading";

const SIZES = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

export function HeadingDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Sizes />
      <SemanticAs />
      <Hero />
    </div>
  );
}

function Sizes() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        8 sizes (xs / sm / md / lg / xl / 2xl / 3xl / 4xl)。 default は md。 3xl
        以上は tracking-tight。
      </p>
      <div className="flex flex-col gap-3">
        {SIZES.map((s) => (
          <div key={s} className="flex items-baseline gap-4">
            <span className="w-12 shrink-0 tabular-nums text-xs text-fg-muted">
              {s}
            </span>
            <Heading size={s}>The quick brown fox</Heading>
          </div>
        ))}
      </div>
    </div>
  );
}

function SemanticAs() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        as prop で HTML tag を切替 (h1〜h6)。 視覚 size と semantic level を独立に
        指定 (例: h1 を size=lg で出して visual 軽量化)。
      </p>
      <div className="flex flex-col gap-3 rounded-lg border border-border p-4">
        <Heading as="h1" size="2xl">
          Document title (h1)
        </Heading>
        <Heading as="h2" size="xl">
          Section heading (h2)
        </Heading>
        <Heading as="h3" size="lg">
          Subsection (h3)
        </Heading>
        <Heading as="h4" size="md">
          Subhead (h4)
        </Heading>
        <Heading as="h5" size="sm">
          Caption (h5)
        </Heading>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        landing hero パターン (size=4xl + 補足 text)。 tracking-tight で
        詰めた印象に。
      </p>
      <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface-sunken p-8">
        <Heading as="h1" size="4xl">
          Ship faster. Without burning out.
        </Heading>
        <p className="max-w-prose text-base text-fg-muted">
          The unified workspace for product teams to plan, build, and ship —
          without the context switching.
        </p>
      </div>
    </div>
  );
}
