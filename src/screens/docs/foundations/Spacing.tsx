import { Stack } from "@/components/ui/stack";
import { DocHeader, DocSection } from "../parts/doc-page";

const SCALE = [
  { name: "0", rem: "0", px: "0px" },
  { name: "0.5", rem: "0.125rem", px: "2px" },
  { name: "1", rem: "0.25rem", px: "4px" },
  { name: "1.5", rem: "0.375rem", px: "6px" },
  { name: "2", rem: "0.5rem", px: "8px" },
  { name: "2.5", rem: "0.625rem", px: "10px" },
  { name: "3", rem: "0.75rem", px: "12px" },
  { name: "4", rem: "1rem", px: "16px" },
  { name: "5", rem: "1.25rem", px: "20px" },
  { name: "6", rem: "1.5rem", px: "24px" },
  { name: "8", rem: "2rem", px: "32px" },
  { name: "10", rem: "2.5rem", px: "40px" },
  { name: "12", rem: "3rem", px: "48px" },
  { name: "16", rem: "4rem", px: "64px" },
  { name: "20", rem: "5rem", px: "80px" },
  { name: "24", rem: "6rem", px: "96px" },
] as const;

type StackGap = {
  name: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  tw: string;
  px: string;
  note?: string;
};

const STACK_GAPS: StackGap[] = [
  { name: "none", tw: "gap-0", px: "0px" },
  { name: "xs", tw: "gap-1", px: "4px" },
  { name: "sm", tw: "gap-2", px: "8px" },
  { name: "md", tw: "gap-4", px: "16px", note: "default" },
  { name: "lg", tw: "gap-6", px: "24px" },
  { name: "xl", tw: "gap-8", px: "32px" },
];

function ScaleRow({
  name,
  rem,
  px,
}: {
  name: string;
  rem: string;
  px: string;
}) {
  return (
    <div className="grid grid-cols-[4rem_5rem_1fr] items-center gap-4 border-b border-border-muted py-2 last:border-b-0">
      <span className="font-mono text-fg text-xs">{name}</span>
      <span className="font-mono text-[11px] text-fg-muted">
        {rem} / {px}
      </span>
      <div className="flex h-3 items-center">
        <div className="h-3 rounded-sm bg-fg-soft" style={{ width: rem }} />
      </div>
    </div>
  );
}

function ScaleTable() {
  return (
    <DocSection
      title="Scale"
      description="Tailwind の spacing scale。 4px grid を基本に padding / margin / gap / size に使う。 1 = 0.25rem = 4px。"
    >
      <div className="flex flex-col">
        {SCALE.map((s) => (
          <ScaleRow key={s.name} {...s} />
        ))}
      </div>
    </DocSection>
  );
}

function StackGapPreview({ gap }: { gap: StackGap["name"] }) {
  return (
    <Stack direction="row" gap={gap}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-8 w-8 rounded-sm border border-border bg-surface-sunken"
        />
      ))}
    </Stack>
  );
}

function StackGap() {
  return (
    <DocSection
      title="Stack gap"
      description="Stack primitive の gap prop。 semantic enum で 6 段階、 Tailwind static map に固定。 default は md。"
    >
      <div className="flex flex-col">
        {STACK_GAPS.map((g) => (
          <div
            key={g.name}
            className="grid grid-cols-[5rem_8rem_1fr] items-center gap-4 border-b border-border-muted py-3 last:border-b-0"
          >
            <span className="font-mono text-fg text-xs">
              gap="{g.name}"
              {g.note && (
                <span className="ml-2 text-[10px] text-fg-muted">{g.note}</span>
              )}
            </span>
            <span className="font-mono text-[11px] text-fg-muted">
              {g.tw} / {g.px}
            </span>
            <StackGapPreview gap={g.name} />
          </div>
        ))}
      </div>
    </DocSection>
  );
}

function Conventions() {
  return (
    <DocSection title="Conventions" description="迷ったらこれを叩き台にしよう">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-medium text-fg text-sm">
            Card / Dialog padding
          </span>
          <span className="font-mono text-[11px] text-fg-muted">
            p-4 〜 p-6
          </span>
          <p className="text-fg-muted text-xs leading-relaxed">
            compact card は p-4、 標準は p-5、 ゆとり持たせる Dialog は p-6。
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-medium text-fg text-sm">Form field gap</span>
          <span className="font-mono text-[11px] text-fg-muted">
            gap-2 (label↔input) / gap-4 (row 間)
          </span>
          <p className="text-fg-muted text-xs leading-relaxed">
            label と input の縦間は gap-2、 form の row 同士は gap-4 が標準。
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-medium text-fg text-sm">Section gap</span>
          <span className="font-mono text-[11px] text-fg-muted">
            gap-10 (40px)
          </span>
          <p className="text-fg-muted text-xs leading-relaxed">
            page 内の大きな section 区切りは gap-10。 docs ページもこれ。
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-medium text-fg text-sm">Icon ↔ text gap</span>
          <span className="font-mono text-[11px] text-fg-muted">
            gap-2 (8px)
          </span>
          <p className="text-fg-muted text-xs leading-relaxed">
            Button / Menu item の icon と label の間隔。 Stack gap="sm" 相当。
          </p>
        </div>
      </div>
    </DocSection>
  );
}

export function Spacing() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Spacing">
        spacing は Tailwind default の 4px grid をそのまま使う。 padding /
        margin / gap / size すべて同じ scale。 Stack primitive だけは semantic
        gap enum を経由する。
      </DocHeader>

      <ScaleTable />
      <StackGap />
      <Conventions />
    </div>
  );
}
