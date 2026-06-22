"use client";

import { Inbox, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/ui/empty";

export default function EmptyUsageDemo() {
  return (
    <Empty.Root className="w-full">
      <Empty.Icon>
        <Inbox />
      </Empty.Icon>
      <Empty.Title>No messages</Empty.Title>
      <Empty.Description>
        Your inbox is empty. New messages will show up here.
      </Empty.Description>
      <Empty.Actions>
        <Button>
          <Plus className="size-4" />
          Compose
        </Button>
      </Empty.Actions>
    </Empty.Root>
  );
}
