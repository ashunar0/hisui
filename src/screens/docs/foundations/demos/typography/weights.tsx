import { Row } from "./row";

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

export default function TypographyWeights() {
  return (
    <div className="flex flex-col">
      {WEIGHTS.map((w) => (
        <Row key={w.name} label={w.name} meta={w.note}>
          <span className={`${w.classes} text-base text-fg`}>
            The quick brown fox 0123
          </span>
        </Row>
      ))}
    </div>
  );
}
