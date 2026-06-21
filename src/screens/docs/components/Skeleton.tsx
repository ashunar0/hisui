import { Skeleton } from "@/components/ui/skeleton";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PROPS: PropRow[] = [
  {
    name: "className",
    type: "string",
    description:
      "形状指定はここで。 width / height / rounded-* を Tailwind class で当てる。",
  },
  {
    name: "...HTMLAttributes<div>",
    type: "—",
    description:
      "div の全 prop を pass-through。 id / style / aria-* 等。 aria-hidden=true は default で付く。",
  },
];

export function SkeletonDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Skeleton">
        読み込み中の placeholder。 size / shape は className で指定する。
        中身は無く、 animate-pulse の脈打つ bg-surface-sunken のみ。 1 つの
        primitive を組み合わせて card / row / grid の loading 状態を組む。
      </DocHeader>

      <DocSection
        title="Usage"
        description="単体は width / height を class で指定するだけ。"
      >
        <Example
          code={`<Skeleton className="h-4 w-40" />`}
        >
          <Skeleton className="h-4 w-40" />
        </Example>
      </DocSection>

      <DocSection
        title="Shapes"
        description="rounded-full で円、 rounded-md で button / chip 風、 h-1 + w-full で text 行。"
      >
        <Example
          code={`<Skeleton className="size-12 rounded-full" />
<Skeleton className="h-8 w-24 rounded-md" />
<Skeleton className="h-3 w-48" />`}
        >
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-3 w-48" />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Profile card"
        description="avatar + name + email + bio 2 行 + action button。 bio の width 違いで実 text の揺らぎを再現。"
      >
        <Example
          code={`<div className="flex items-start gap-4 rounded-md border border-border p-5">
  <Skeleton className="size-12 rounded-full" />
  <div className="flex flex-1 flex-col gap-2">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-3 w-48" />
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-4/5" />
    <Skeleton className="h-8 w-24 rounded-md" />
  </div>
</div>`}
        >
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
        </Example>
      </DocSection>

      <DocSection
        title="Table rows"
        description="header + 5 行。 各列で width をずらして実データの不揃いを表現。"
      >
        <Example
          code={`{rows.map((row) => (
  <div className="grid grid-cols-[1fr_120px_100px_80px] gap-4 px-4 py-3">
    <Skeleton className="h-3 w-40" />
    <Skeleton className="h-3 w-20" />
    <Skeleton className="h-5 w-16 rounded-full" />
    <Skeleton className="h-3 w-12" />
  </div>
))}`}
        >
          <div className="w-full rounded-md border border-border bg-surface">
            <div className="grid grid-cols-[1fr_120px_100px_80px] gap-4 border-b border-border px-4 py-3">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-3 w-12" />
              <Skeleton className="h-3 w-10" />
            </div>
            {[1, 2, 3, 4, 5].map((row) => (
              <div
                key={row}
                className="grid grid-cols-[1fr_120px_100px_80px] items-center gap-4 border-b border-border-muted px-4 py-3 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="size-7 rounded-full" />
                  <Skeleton
                    className={`h-3 ${["w-40", "w-32", "w-44", "w-36", "w-28"][row - 1]}`}
                  />
                </div>
                <Skeleton
                  className={`h-3 ${["w-20", "w-16", "w-24", "w-20", "w-14"][row - 1]}`}
                />
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-3 w-12" />
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Stat grid"
        description="Dashboard widget の loading。 数字行は h-7 大きめ、 補足行は h-3 + 60% 幅で hierarchy を残す。"
      >
        <Example
          code={`<div className="grid grid-cols-4 gap-3">
  {widgets.map(() => (
    <div className="flex flex-col gap-3 rounded-md border border-border p-4">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-7 w-28" />
      <Skeleton className="h-3 w-3/5" />
    </div>
  ))}
</div>`}
        >
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
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
