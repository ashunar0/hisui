import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonProfileCardDemo() {
  return (
    <div className="flex max-w-md items-start gap-4 rounded-md border border-border bg-surface p-5">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-48" />
        <div className="mt-2 flex flex-col gap-1.5">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>
        <Skeleton className="mt-2 h-8 w-24 rounded-md" />
      </div>
    </div>
  );
}
