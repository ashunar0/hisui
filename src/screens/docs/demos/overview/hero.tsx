import { Heading } from "@/components/ui/heading";

const STATS = [
  { label: "Ark UI primitives", value: "42" },
  { label: "自作 primitives", value: "22" },
  { label: "semantic tokens", value: "20+" },
];

export default function OverviewHero() {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Heading as="h1" size="3xl">
          Hisui UI
        </Heading>
        <p className="text-fg-muted leading-relaxed">
          Ark UI + Tailwind v4 で組んだ React デザインシステム。 Chakra UI v3
          互換の prop API と semantic token で light / dark 両対応。 この docs
          自体も Hisui UI の primitive で出来ている。
        </p>
      </div>
      <div className="flex flex-wrap gap-6 pt-2">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="font-semibold text-2xl tabular-nums">
              {s.value}
            </span>
            <span className="text-fg-muted text-xs">{s.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
