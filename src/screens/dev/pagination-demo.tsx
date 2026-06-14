import { Pagination } from "@/components/ui/pagination";

export function PaginationDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          count=100 / pageSize=10 / siblingCount=1
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
          少ない page (count=24 / pageSize=8) — ellipsis なし
        </span>
        <Pagination.Root count={24} pageSize={8} siblingCount={1}>
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
  );
}
