"use client";

import { Heading } from "@/components/ui/heading";

const SIZES = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

export default function HeadingSizesDemo() {
  return (
    <div className="flex flex-col gap-3">
      {SIZES.map((s) => (
        <Heading key={s} size={s}>
          {s} heading
        </Heading>
      ))}
    </div>
  );
}
