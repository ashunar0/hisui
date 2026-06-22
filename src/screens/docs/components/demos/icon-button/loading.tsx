"use client";

import { Plus } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

export default function IconButtonLoadingDemo() {
  return (
    <IconButton loading aria-label="Saving">
      <Plus className="size-4" />
    </IconButton>
  );
}
