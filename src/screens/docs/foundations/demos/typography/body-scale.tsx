"use client";

import { Row } from "./row";

const SIZES = [
  { name: "text-lg", classes: "text-lg", note: "強調 lead" },
  { name: "text-base", classes: "text-base", note: "標準本文" },
  { name: "text-sm", classes: "text-sm", note: "compact UI / lead 補足" },
  { name: "text-xs", classes: "text-xs", note: "meta / caption" },
] as const;

export default function TypographyBodyScale() {
  return (
    <div className="flex flex-col">
      {SIZES.map((s) => (
        <Row key={s.name} label={s.name} meta={s.note}>
          <span className={`${s.classes} text-fg`}>
            The quick brown fox jumps over the lazy dog.
          </span>
        </Row>
      ))}
    </div>
  );
}
