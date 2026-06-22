"use client";

import { Input } from "@/components/ui/input";

const VARIANTS = ["outline", "subtle", "flushed"] as const;

export default function InputVariantsDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      {VARIANTS.map((v) => (
        <Input key={v} variant={v} placeholder={v} />
      ))}
    </div>
  );
}
