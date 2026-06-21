import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonStatGridDemo() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex flex-col gap-3 rounded-md border border-border bg-surface p-4"
        >
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-7 w-28" />
          <Skeleton className="h-3 w-3/5" />
        </div>
      ))}
    </div>
  );
}
