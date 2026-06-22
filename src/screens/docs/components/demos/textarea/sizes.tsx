"use client";

import { Textarea } from "@/components/ui/textarea";

const SIZES = ["xs", "sm", "md", "lg"] as const;

export default function TextareaSizesDemo() {
  return (
    <div className="flex max-w-md flex-col gap-3">
      {SIZES.map((s) => (
        <Textarea key={s} size={s} placeholder={s} />
      ))}
    </div>
  );
}
