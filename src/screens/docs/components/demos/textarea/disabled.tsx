"use client";

import { Textarea } from "@/components/ui/textarea";

export default function TextareaDisabledDemo() {
  return (
    <div className="max-w-md">
      <Textarea disabled value="locked text" readOnly />
    </div>
  );
}
