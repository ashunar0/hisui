"use client";

import { Input } from "@/components/ui/input";

export default function InputDisabledDemo() {
  return (
    <div className="max-w-sm">
      <Input disabled value="locked" readOnly />
    </div>
  );
}
