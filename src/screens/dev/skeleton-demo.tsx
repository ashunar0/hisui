import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex flex-col gap-8">
      <ProfileCard />
      <TableRows />
      <StatGrid />
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        profile card (avatar + name + email + bio 2 行 + action button)。
        rounded-full で avatar 形状、 width 違いで bio 行に variation。
      </p>
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
    </div>
  );
}

function TableRows() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        table row skeleton (5 行 + header)。 各列で width をずらして実データの
        揺らぎを再現。
      </p>
      <div className="rounded-md border border-border bg-surface">
        <div className="grid grid-cols-[1fr_120px_100px_80px] gap-4 border-b border-border px-4 py-3">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-10" />
        </div>
        {[1, 2, 3, 4, 5].map((row) => (
          <div
            key={row}
            className="grid grid-cols-[1fr_120px_100px_80px] gap-4 border-b border-border-muted px-4 py-3 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="size-7 rounded-full" />
              <Skeleton className={`h-3 ${["w-40", "w-32", "w-44", "w-36", "w-28"][row - 1]}`} />
            </div>
            <Skeleton className={`h-3 ${["w-20", "w-16", "w-24", "w-20", "w-14"][row - 1]}`} />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatGrid() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Dashboard stat grid (4 widget、 label + 数字 + 補足)。 数字行は h-7 で
        大きめ、 補足行は h-3 + 横幅 60% で「下に小さい text 」感を出す。
      </p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
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
    </div>
  );
}
