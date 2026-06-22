"use client";

import { Empty } from "@/components/ui/empty";

export default function EmptyTitleOnlyDemo() {
  return (
    <Empty.Root className="w-full p-6">
      <Empty.Title>No results</Empty.Title>
    </Empty.Root>
  );
}
