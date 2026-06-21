import { Pagination } from "@/components/ui/pagination";

export default function PaginationBasicDemo() {
  return (
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
  );
}
