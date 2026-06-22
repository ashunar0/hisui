"use client";

import { Pagination } from "@/components/ui/pagination";

function Row({ siblingCount }: { siblingCount: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 text-fg-muted text-xs">
        sibling={siblingCount}
      </span>
      <Pagination.Root
        count={200}
        pageSize={10}
        siblingCount={siblingCount}
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
  );
}

export default function PaginationSiblingCountDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Row siblingCount={0} />
      <Row siblingCount={2} />
    </div>
  );
}
