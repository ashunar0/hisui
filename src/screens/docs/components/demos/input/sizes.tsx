"use client";

import { Input } from "@/components/ui/input";

const SIZES = ["xs", "sm", "md", "lg"] as const;

export default function InputSizesDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      {SIZES.map((s) => (
        <Input key={s} size={s} placeholder={s} />
      ))}
    </div>
  );
}
