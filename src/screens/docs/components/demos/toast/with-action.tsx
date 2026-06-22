"use client";

import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

export default function ToastWithActionDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toaster.create({
          title: "Email archived",
          description: "Q3 planning sync was moved to archive.",
          action: {
            label: "Undo",
            onClick: () =>
              toaster.create({
                type: "success",
                title: "Restored",
              }),
          },
          duration: 5000,
        })
      }
    >
      Archive email
    </Button>
  );
}
