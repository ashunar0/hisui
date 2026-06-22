"use client";

import { Skeleton } from "@/components/ui/skeleton";

const NAME_WIDTHS = ["w-40", "w-32", "w-44", "w-36", "w-28"];
const META_WIDTHS = ["w-20", "w-16", "w-24", "w-20", "w-14"];

export default function SkeletonTableRowsDemo() {
  return (
    <div className="w-full rounded-md border border-border bg-surface">
      <div className="grid grid-cols-[1fr_120px_100px_80px] gap-4 border-b border-border px-4 py-3">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-14" />
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-3 w-10" />
      </div>
      {[0, 1, 2, 3, 4].map((row) => (
        <div
          key={row}
          className="grid grid-cols-[1fr_120px_100px_80px] items-center gap-4 border-b border-border-muted px-4 py-3 last:border-b-0"
        >
          <div className="flex items-center gap-3">
            <Skeleton className="size-7 rounded-full" />
            <Skeleton className={`h-3 ${NAME_WIDTHS[row]}`} />
          </div>
          <Skeleton className={`h-3 ${META_WIDTHS[row]}`} />
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-3 w-12" />
        </div>
      ))}
    </div>
  );
}
