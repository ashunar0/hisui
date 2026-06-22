export default function TypographyLeadingTracking() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="flex flex-col gap-2 rounded-md border border-border p-4">
        <span className="font-mono text-fg-muted text-[11px]">
          leading-relaxed (1.625)
        </span>
        <p className="text-fg text-sm leading-relaxed">
          色は raw な Tailwind palette を直接使わず、 用途を表す semantic token
          に必ず通す。 token は index.css の @theme と .dark に定義され、 light
          / dark の切替は token の値だけが入れ替わる。
        </p>
      </div>
      <div className="flex flex-col gap-2 rounded-md border border-border p-4">
        <span className="font-mono text-fg-muted text-[11px]">
          leading-normal (1.5)
        </span>
        <p className="text-fg text-sm leading-normal">
          色は raw な Tailwind palette を直接使わず、 用途を表す semantic token
          に必ず通す。 token は index.css の @theme と .dark に定義され、 light
          / dark の切替は token の値だけが入れ替わる。
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
  );
}
