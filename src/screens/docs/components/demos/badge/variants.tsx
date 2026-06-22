"use client";

import { Badge } from "@/components/ui/badge";

const VARIANTS = ["solid", "subtle", "outline", "surface", "plain"] as const;

export default function BadgeVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {VARIANTS.map((v) => (
        <Badge key={v} variant={v}>
          {v}
        </Badge>
      ))}
    </div>
  );
}
