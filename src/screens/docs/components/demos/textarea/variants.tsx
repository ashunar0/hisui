"use client";

import { Textarea } from "@/components/ui/textarea";

const VARIANTS = ["outline", "subtle", "flushed"] as const;

export default function TextareaVariantsDemo() {
  return (
    <div className="flex max-w-md flex-col gap-3">
      {VARIANTS.map((v) => (
        <Textarea key={v} variant={v} placeholder={v} />
      ))}
    </div>
  );
}
