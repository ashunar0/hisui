import { Plus } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

export default function IconButtonUsageDemo() {
  return (
    <IconButton aria-label="Add">
      <Plus className="size-4" />
    </IconButton>
  );
}
