import { Search } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

const SIZES = ["xs", "sm", "md", "lg"] as const;

const ICON_SIZE = {
  xs: "size-3.5",
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
} as const;

export default function IconButtonSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {SIZES.map((s) => (
        <IconButton key={s} size={s} aria-label={`Search ${s}`}>
          <Search className={ICON_SIZE[s]} />
        </IconButton>
      ))}
    </div>
  );
}
