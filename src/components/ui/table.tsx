import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";
import {
  useCallback,
  useMemo,
  useState,
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

function Root({ className, ...props }: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn("w-full text-sm", className)} {...props} />
    </div>
  );
}

function Header({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn(
        "border-b border-border [&_tr:hover]:bg-transparent",
        className,
      )}
      {...props}
    />
  );
}

function Body({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody
      className={cn("divide-y divide-border-muted", className)}
      {...props}
    />
  );
}

function Row({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        "transition-[background-color] hover:bg-hover",
        className,
      )}
      {...props}
    />
  );
}

function Head({
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "h-10 px-4 text-left font-medium text-fg-muted text-xs",
        className,
      )}
      {...props}
    />
  );
}

function Cell({
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={cn("px-4 py-3 text-fg", className)} {...props} />
  );
}

export type SortDirection = "asc" | "desc";

type SortableHeadProps = ThHTMLAttributes<HTMLTableCellElement> & {
  active?: boolean;
  direction?: SortDirection;
  onToggle?: () => void;
};

function SortableHead({
  active = false,
  direction = "asc",
  onToggle,
  className,
  children,
  ...props
}: SortableHeadProps) {
  const Icon = active
    ? direction === "asc"
      ? ChevronUp
      : ChevronDown
    : ChevronsUpDown;
  return (
    <th
      className={cn(
        "h-10 px-4 text-left font-medium text-fg-muted text-xs",
        className,
      )}
      {...props}
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "-mx-2 inline-flex cursor-pointer items-center gap-1 rounded-md px-2 py-1 transition-colors hover:bg-hover",
          active && "text-fg",
        )}
      >
        {children}
        <Icon className="size-3" />
      </button>
    </th>
  );
}

type Accessor<T> = (row: T) => string | number;

type UseTableSortOptions<T, K extends string> = {
  accessors: Record<K, Accessor<T>>;
  defaultKey?: K;
  defaultDirection?: SortDirection;
};

export function useTableSort<T, K extends string>(
  rows: T[],
  options: UseTableSortOptions<T, K>,
) {
  const [sortKey, setSortKey] = useState<K | undefined>(options.defaultKey);
  const [direction, setDirection] = useState<SortDirection>(
    options.defaultDirection ?? "asc",
  );

  const toggle = useCallback(
    (key: K) => {
      if (sortKey === key) {
        setDirection((d) => (d === "asc" ? "desc" : "asc"));
      } else {
        setSortKey(key);
        setDirection("asc");
      }
    },
    [sortKey],
  );

  const sortedRows = useMemo(() => {
    if (!sortKey) return rows;
    const accessor = options.accessors[sortKey];
    const factor = direction === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const av = accessor(a);
      const bv = accessor(b);
      if (av < bv) return -1 * factor;
      if (av > bv) return 1 * factor;
      return 0;
    });
  }, [rows, sortKey, direction, options.accessors]);

  return { sortKey, direction, toggle, sortedRows };
}

export const Table = {
  Root,
  Header,
  Body,
  Row,
  Head,
  SortableHead,
  Cell,
};
