"use client";

import { FileText, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/ui/empty";

export default function EmptyOnboardingDemo() {
  return (
    <Empty.Root className="w-full">
      <Empty.Icon>
        <FileText />
      </Empty.Icon>
      <Empty.Title>Start your first document</Empty.Title>
      <Empty.Description>
        Create a blank doc or import an existing file from your drive.
      </Empty.Description>
      <Empty.Actions>
        <Button>
          <Plus className="size-4" />
          New document
        </Button>
        <Button variant="outline">
          <Upload className="size-4" />
          Import
        </Button>
      </Empty.Actions>
    </Empty.Root>
  );
}
