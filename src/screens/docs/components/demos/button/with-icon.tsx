"use client";

import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonWithIconDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Plus className="size-4" />
        New item
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRight className="size-4" />
      </Button>
      <Button variant="subtle" colorPalette="danger">
        <Trash2 className="size-4" />
        Delete
      </Button>
    </div>
  );
}
