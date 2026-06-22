"use client";

import { Textarea } from "@/components/ui/textarea";

export default function TextareaFixedRowsDemo() {
  return (
    <div className="flex max-w-md flex-col gap-3">
      <Textarea rows={2} placeholder="Short note" />
      <Textarea rows={6} placeholder="Long description" />
    </div>
  );
}
