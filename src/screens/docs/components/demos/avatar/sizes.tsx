"use client";

import { Avatar } from "@/components/ui/avatar";

const SIZES = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

export default function AvatarSizesDemo() {
  return (
    <div className="flex flex-wrap items-end gap-3">
      {SIZES.map((s) => (
        <div key={s} className="flex flex-col items-center gap-1">
          <Avatar.Root size={s}>
            <Avatar.Fallback name="Asahi K" />
          </Avatar.Root>
          <span className="font-mono text-[11px] text-fg-muted">{s}</span>
        </div>
      ))}
    </div>
  );
}
