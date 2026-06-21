import { Bold, Italic, Underline } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

export default function IconButtonToolbarDemo() {
  return (
    <div className="inline-flex items-center gap-1 rounded-md border border-border p-1">
      <IconButton aria-label="Bold">
        <Bold className="size-4" />
      </IconButton>
      <IconButton aria-label="Italic">
        <Italic className="size-4" />
      </IconButton>
      <IconButton aria-label="Underline">
        <Underline className="size-4" />
      </IconButton>
    </div>
  );
}
