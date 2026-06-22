import { Row } from "./row";

const SIZES = [
  { size: "4xl", classes: "text-5xl tracking-tight", sample: "Display" },
  { size: "3xl", classes: "text-4xl tracking-tight", sample: "Hero" },
  { size: "2xl", classes: "text-3xl", sample: "Page title" },
  { size: "xl", classes: "text-2xl", sample: "Section" },
  { size: "lg", classes: "text-xl", sample: "Subsection" },
  { size: "md", classes: "text-lg", sample: "Card title" },
  { size: "sm", classes: "text-base", sample: "Group label" },
  { size: "xs", classes: "text-sm", sample: "Small label" },
] as const;

export default function TypographyHeadingScale() {
  return (
    <div className="flex flex-col">
      {SIZES.map((s) => (
        <Row key={s.size} label={`size="${s.size}"`} meta={s.classes}>
          <span className={`${s.classes} font-semibold text-fg`}>
            {s.sample}
          </span>
        </Row>
      ))}
    </div>
  );
}
