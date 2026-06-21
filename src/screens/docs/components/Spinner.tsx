import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Spinner } from "@/components/ui/spinner";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PROPS: PropRow[] = [
  {
    name: "className",
    type: "string",
    description:
      "size-* で大きさ、 text-* で色。 default は size-4 text-fg-muted。",
  },
  {
    name: "...SVGProps",
    type: "—",
    description:
      "Lucide Loader2 (svg) の prop を pass-through。 role=status / aria-label=Loading は default で付く。",
  },
];

export function SpinnerDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Spinner">
        loading 中の汎用 indicator。 Lucide Loader2 を回転 animation で wrap した
        SVG。 size と color は className で。 Button / IconButton の中に置けば
        submit pending、 単体置きで全画面 loading にも。
      </DocHeader>

      <DocSection title="Usage" description="単体は class 無しで size-4 の標準サイズ。">
        <Example code={`<Spinner />`}>
          <Spinner />
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="size-* で大きさを切り替え。 周辺の text や button に合わせる。"
      >
        <Example
          code={`<Spinner className="size-3" />
<Spinner className="size-4" />
<Spinner className="size-5" />
<Spinner className="size-8" />`}
        >
          <div className="flex items-end gap-6">
            <Spinner className="size-3" />
            <Spinner className="size-4" />
            <Spinner className="size-5" />
            <Spinner className="size-8" />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Colors"
        description="text-* で色付け。 fg / fg-soft / fg-muted を context に合わせて。"
      >
        <Example
          code={`<Spinner className="text-fg" />
<Spinner className="text-fg-soft" />
<Spinner className="text-fg-muted" />`}
        >
          <div className="flex items-center gap-6">
            <Spinner className="text-fg" />
            <Spinner className="text-fg-soft" />
            <Spinner className="text-fg-muted" />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="In Button"
        description="submit pending の典型。 label と並べる時は size-4、 label を残すか差し替えるかは UI 次第。"
      >
        <Example
          code={`<Button disabled>
  <Spinner className="text-bg" />
  Saving...
</Button>
<Button variant="outline" disabled>
  <Spinner />
  Loading
</Button>`}
        >
          <div className="flex items-center gap-3">
            <Button disabled>
              <Spinner className="text-bg" />
              Saving...
            </Button>
            <Button variant="outline" disabled>
              <Spinner />
              Loading
            </Button>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="In IconButton"
        description="refresh / sync button の処理中。 同 size の Spinner に差し替える。"
      >
        <Example
          code={`<IconButton aria-label="Refreshing" disabled>
  <Spinner />
</IconButton>`}
        >
          <IconButton aria-label="Refreshing" disabled>
            <Spinner />
          </IconButton>
        </Example>
      </DocSection>

      <DocSection
        title="Full panel"
        description="card / section 全体の loading。 中央に大きめ + 補足 text。"
      >
        <Example
          code={`<div className="flex flex-col items-center justify-center gap-3 rounded-md border border-border p-12">
  <Spinner className="size-6" />
  <p className="text-fg-muted text-sm">Loading projects...</p>
</div>`}
        >
          <div className="flex w-full flex-col items-center justify-center gap-3 rounded-md border border-border bg-surface p-12">
            <Spinner className="size-6" />
            <p className="text-fg-muted text-sm">Loading projects...</p>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
