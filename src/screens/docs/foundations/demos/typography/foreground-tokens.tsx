import { Row } from "./row";

const FG_TOKENS = [
  { name: "text-fg", classes: "text-fg", note: "本文 / Heading" },
  { name: "text-fg-soft", classes: "text-fg-soft", note: "section label" },
  {
    name: "text-fg-muted",
    classes: "text-fg-muted",
    note: "description / meta",
  },
  {
    name: "text-fg-subtle",
    classes: "text-fg-subtle",
    note: "placeholder / 最弱",
  },
] as const;

export default function TypographyForegroundTokens() {
  return (
    <div className="flex flex-col">
      {FG_TOKENS.map((t) => (
        <Row key={t.name} label={t.name} meta={t.note}>
          <span className={`${t.classes} text-base`}>
            The quick brown fox jumps over the lazy dog.
          </span>
        </Row>
      ))}
    </div>
  );
}
