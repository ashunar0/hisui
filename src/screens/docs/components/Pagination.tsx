import { Pagination } from "@/components/ui/pagination";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Pagination.Root",
    description:
      "外枠。 count (全件) と pageSize (1 page 件数) で totalPages を自動計算。 page / onPageChange で制御。",
  },
  {
    name: "Pagination.PrevTrigger / NextTrigger",
    description:
      "前 / 次 page button。 端で自動 disabled。 default は ChevronLeft / Right icon。",
  },
  {
    name: "Pagination.FirstTrigger / LastTrigger",
    description:
      "先頭 / 末尾 jump。 ChevronsLeft / Right icon が default。 大量 page の時に置く。",
  },
  {
    name: "Pagination.Context",
    description:
      "render-prop で pages array や api (page / totalPages / count) を取得。 ループ render の起点。",
  },
  {
    name: "Pagination.Item",
    description:
      "1 つの page 番号 button。 Context.pages の page.value を中身に。 data-selected で現在 page を強調。",
  },
  {
    name: "Pagination.Ellipsis",
    description:
      "省略表記 (…)。 Context.pages の type='ellipsis' の位置に置く。 click 不可。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "count",
    type: "number",
    description: "必須。 全件数。 pageSize で割って totalPages を計算。",
  },
  {
    name: "pageSize",
    type: "number",
    default: "10",
    description: "1 page あたりの件数。",
  },
  {
    name: "siblingCount",
    type: "number",
    default: "1",
    description: "current page の左右に出す番号数。 1 で current ± 1 まで、 2 で ± 2 まで。",
  },
  {
    name: "page",
    type: "number",
    description: "controlled mode の現在 page (1-indexed)。",
  },
  {
    name: "defaultPage",
    type: "number",
    default: "1",
    description: "uncontrolled mode の初期 page。",
  },
  {
    name: "onPageChange",
    type: "(details: { page: number }) => void",
    description: "page が変わった時に呼ばれる。",
  },
];

export function PaginationDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Pagination">
        list / table の page 切替 control。 count + pageSize から totalPages を
        自動計算し、 siblingCount + Ellipsis で番号の表示量を絞る。 table footer
        の compact 版 (Prev / Next + 件数表示) も Context render-prop で組める。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に PrevTrigger / Context (pages.map で Item / Ellipsis) / NextTrigger。 First / LastTrigger は任意。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[18rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Usage"
        description="count=100 / pageSize=10 で 10 page。 siblingCount=1 で current の左右 1 つずつ + Ellipsis。"
      >
        <Example
          code={`<Pagination.Root count={100} pageSize={10} siblingCount={1}>
  <Pagination.PrevTrigger />
  <Pagination.Context>
    {({ pages }) =>
      pages.map((page, index) =>
        page.type === "page" ? (
          <Pagination.Item key={index} {...page}>{page.value}</Pagination.Item>
        ) : (
          <Pagination.Ellipsis key={index} index={index} />
        ),
      )
    }
  </Pagination.Context>
  <Pagination.NextTrigger />
</Pagination.Root>`}
        >
          <Pagination.Root count={100} pageSize={10} siblingCount={1}>
            <Pagination.PrevTrigger />
            <Pagination.Context>
              {({ pages }) =>
                pages.map((page, index) =>
                  page.type === "page" ? (
                    <Pagination.Item key={index} {...page}>
                      {page.value}
                    </Pagination.Item>
                  ) : (
                    <Pagination.Ellipsis key={index} index={index} />
                  ),
                )
              }
            </Pagination.Context>
            <Pagination.NextTrigger />
          </Pagination.Root>
        </Example>
      </DocSection>

      <DocSection
        title="With First / Last"
        description="大量 page の dataset。 端へ即 jump できると操作が早い。"
      >
        <Example
          code={`<Pagination.Root count={500} pageSize={10} siblingCount={1} defaultPage={12}>
  <Pagination.FirstTrigger />
  <Pagination.PrevTrigger />
  ...
  <Pagination.NextTrigger />
  <Pagination.LastTrigger />
</Pagination.Root>`}
        >
          <Pagination.Root
            count={500}
            pageSize={10}
            siblingCount={1}
            defaultPage={12}
          >
            <Pagination.FirstTrigger />
            <Pagination.PrevTrigger />
            <Pagination.Context>
              {({ pages }) =>
                pages.map((page, index) =>
                  page.type === "page" ? (
                    <Pagination.Item key={index} {...page}>
                      {page.value}
                    </Pagination.Item>
                  ) : (
                    <Pagination.Ellipsis key={index} index={index} />
                  ),
                )
              }
            </Pagination.Context>
            <Pagination.NextTrigger />
            <Pagination.LastTrigger />
          </Pagination.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Compact (table footer)"
        description="番号を出さず、 件数表示 + Prev / Next だけ。 table の bottom bar に。"
      >
        <Example
          code={`<Pagination.Root count={248} pageSize={10}>
  <Pagination.Context>
    {(api) => (
      <div className="flex w-full items-center justify-between">
        <span>Page {api.page} of {api.totalPages} ・ {api.count} items</span>
        <div className="flex gap-1">
          <Pagination.PrevTrigger />
          <Pagination.NextTrigger />
        </div>
      </div>
    )}
  </Pagination.Context>
</Pagination.Root>`}
        >
          <Pagination.Root count={248} pageSize={10}>
            <Pagination.Context>
              {(api) => (
                <div className="flex w-full items-center justify-between gap-3 border-t border-border pt-3">
                  <span className="text-xs tabular-nums text-fg-muted">
                    Page {api.page} of {api.totalPages} ・ {api.count} items
                  </span>
                  <div className="flex items-center gap-1">
                    <Pagination.PrevTrigger />
                    <Pagination.NextTrigger />
                  </div>
                </div>
              )}
            </Pagination.Context>
          </Pagination.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Sibling count"
        description="siblingCount を変えると番号の表示量が変わる。 0 で current のみ、 2 で current ± 2。"
      >
        <Example
          code={`<Pagination.Root count={200} pageSize={10} siblingCount={0} defaultPage={10}>...
<Pagination.Root count={200} pageSize={10} siblingCount={2} defaultPage={10}>...`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-24 text-fg-muted text-xs">sibling=0</span>
              <Pagination.Root
                count={200}
                pageSize={10}
                siblingCount={0}
                defaultPage={10}
              >
                <Pagination.PrevTrigger />
                <Pagination.Context>
                  {({ pages }) =>
                    pages.map((page, index) =>
                      page.type === "page" ? (
                        <Pagination.Item key={index} {...page}>
                          {page.value}
                        </Pagination.Item>
                      ) : (
                        <Pagination.Ellipsis key={index} index={index} />
                      ),
                    )
                  }
                </Pagination.Context>
                <Pagination.NextTrigger />
              </Pagination.Root>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-24 text-fg-muted text-xs">sibling=2</span>
              <Pagination.Root
                count={200}
                pageSize={10}
                siblingCount={2}
                defaultPage={10}
              >
                <Pagination.PrevTrigger />
                <Pagination.Context>
                  {({ pages }) =>
                    pages.map((page, index) =>
                      page.type === "page" ? (
                        <Pagination.Item key={index} {...page}>
                          {page.value}
                        </Pagination.Item>
                      ) : (
                        <Pagination.Ellipsis key={index} index={index} />
                      ),
                    )
                  }
                </Pagination.Context>
                <Pagination.NextTrigger />
              </Pagination.Root>
            </div>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
