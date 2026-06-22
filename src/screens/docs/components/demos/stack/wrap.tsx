"use client";

import { Badge } from "@/components/ui/badge";
import { Stack } from "@/components/ui/stack";

const TAGS = [
  "React",
  "TypeScript",
  "Tailwind",
  "Ark UI",
  "Vite",
  "Hono",
  "Drizzle",
  "Better-Auth",
];

export default function StackWrapDemo() {
  return (
    <div className="max-w-xs rounded-sm border border-border-muted p-2">
      <Stack direction="row" gap="sm" wrap>
        {TAGS.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </Stack>
    </div>
  );
}
