import { Pagination } from "@/components/ui/pagination";

export function PaginationDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          default (count=100 / pageSize=10 / siblingCount=1)
        </span>
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
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          with First / Last trigger (count=500 / pageSize=10、 large dataset)
        </span>
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
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          compact (table footer 風: Context で "Page N of Total" + Prev/Next のみ)
        </span>
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
      </div>
    </div>
  );
}
