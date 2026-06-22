"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonShapesDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <Skeleton className="h-8 w-24 rounded-md" />
      <Skeleton className="h-3 w-48" />
    </div>
  );
}
