"use client";

import { Pagination } from "@/components/ui/pagination";

export default function PaginationCompactDemo() {
  return (
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
  );
}
