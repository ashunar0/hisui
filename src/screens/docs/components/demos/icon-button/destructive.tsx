import { Trash2 } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

export default function IconButtonDestructiveDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <IconButton colorPalette="danger" aria-label="Delete">
        <Trash2 className="size-4" />
      </IconButton>
      <IconButton
        variant="subtle"
        colorPalette="danger"
        aria-label="Delete subtle"
      >
        <Trash2 className="size-4" />
      </IconButton>
    </div>
  );
}
