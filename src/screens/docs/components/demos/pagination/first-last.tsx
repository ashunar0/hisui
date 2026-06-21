import { Pagination } from "@/components/ui/pagination";

export default function PaginationFirstLastDemo() {
  return (
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
  );
}
