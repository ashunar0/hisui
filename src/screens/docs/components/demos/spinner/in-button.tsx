"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function SpinnerInButtonDemo() {
  return (
    <div className="flex items-center gap-3">
      <Button disabled>
        <Spinner className="text-bg" />
        Saving...
      </Button>
      <Button variant="outline" disabled>
        <Spinner />
        Loading
      </Button>
    </div>
  );
}
