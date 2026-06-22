"use client";

import { Bell } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

const VARIANTS = [
  "solid",
  "subtle",
  "outline",
  "ghost",
  "surface",
  "plain",
] as const;

export default function IconButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {VARIANTS.map((v) => (
        <IconButton key={v} variant={v} aria-label={`Bell ${v}`}>
          <Bell className="size-4" />
        </IconButton>
      ))}
    </div>
  );
}
