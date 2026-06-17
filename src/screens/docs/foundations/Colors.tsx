import { Heading } from "@/components/ui/heading";

type Token = { name: string; varName: string; border?: boolean };

const SURFACES: Token[] = [
  { name: "bg", varName: "--color-bg", border: true },
  { name: "canvas", varName: "--color-canvas", border: true },
  { name: "surface", varName: "--color-surface", border: true },
  { name: "surface-muted", varName: "--color-surface-muted", border: true },
  { name: "surface-sunken", varName: "--color-surface-sunken" },
  { name: "hover", varName: "--color-hover" },
  { name: "active", varName: "--color-active" },
];

const FOREGROUNDS: Token[] = [
  { name: "fg", varName: "--color-fg" },
  { name: "fg-soft", varName: "--color-fg-soft" },
  { name: "fg-muted", varName: "--color-fg-muted" },
  { name: "fg-subtle", varName: "--color-fg-subtle" },
];

const BORDERS: Token[] = [
  { name: "border", varName: "--color-border" },
  { name: "border-muted", varName: "--color-border-muted" },
];

const PALETTES = ["success", "danger", "warning", "info"] as const;
const STOPS = ["subtle", "border", "fg", "solid", "solid-fg"] as const;

function Swatch({ name, varName, border }: Token) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className={
          "h-14 w-full rounded-md" +
          (border ? " border border-border" : "")
        }
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div className="flex flex-col">
        <span className="font-medium text-xs">{name}</span>
        <span className="text-fg-muted text-[11px]">{varName}</span>
      </div>
    </div>
  );
}

function SwatchGrid({ tokens }: { tokens: Token[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {tokens.map((t) => (
        <Swatch key={t.varName} {...t} />
      ))}
    </div>
  );
}

function TokenGroup({
  title,
  description,
  tokens,
}: {
  title: string;
  description: string;
  tokens: Token[];
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Heading as="h2" size="sm" className="text-fg-soft">
          {title}
        </Heading>
        <p className="text-fg-muted text-xs">{description}</p>
      </div>
      <SwatchGrid tokens={tokens} />
    </section>
  );
}

function AccentScale() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Heading as="h2" size="sm" className="text-fg-soft">
          Accents
        </Heading>
        <p className="text-fg-muted text-xs">
          success / danger / warning / info × subtle / border / fg / solid /
          solid-fg の 4 × 5。light は 50/200/700/600/white、dark は
          950/900/400/500/50 で contrast を確保。
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {PALETTES.map((palette) => (
          <div key={palette} className="flex flex-col gap-2">
            <span className="font-medium text-xs capitalize">{palette}</span>
            <div className="grid grid-cols-5 gap-3">
              {STOPS.map((stop) => {
                const varName = `--color-${palette}-${stop}`;
                return (
                  <div key={stop} className="flex flex-col gap-1.5">
                    <div
                      className="h-12 w-full rounded-md border border-border"
                      style={{ backgroundColor: `var(${varName})` }}
                    />
                    <span className="text-fg-muted text-[11px]">{stop}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Colors() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <Heading as="h1" size="2xl">
          Colors
        </Heading>
        <p className="text-fg-muted leading-relaxed">
          色は raw な Tailwind palette を直接使わず、用途を表す semantic token
          に必ず通す。token は index.css の <code>@theme</code> と{" "}
          <code>.dark</code> に定義され、light / dark の切替は token
          の値だけが入れ替わる。
        </p>
      </header>

      <TokenGroup
        title="Surfaces"
        description="背景の階層。bg < canvas で奥行き、surface 系がカードや panel、hover / active は interaction state。"
        tokens={SURFACES}
      />
      <TokenGroup
        title="Foreground"
        description="テキストの強さ。fg が本文、soft / muted / subtle と弱くなる。"
        tokens={FOREGROUNDS}
      />
      <TokenGroup
        title="Borders"
        description="区切り線。border が標準、muted はより控えめな分割に。"
        tokens={BORDERS}
      />
      <AccentScale />
    </div>
  );
}
