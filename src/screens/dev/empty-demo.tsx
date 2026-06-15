import { Inbox, Plus, SearchX, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/ui/empty";

export function EmptyDemo() {
  return (
    <div className="flex flex-col gap-8">
      <NoResults />
      <EmptyList />
      <Minimal />
    </div>
  );
}

function NoResults() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        no results (search 結果 0 件、 SearchX icon + 検索クエリ + Clear)。
      </p>
      <Empty.Root>
        <Empty.Icon>
          <SearchX />
        </Empty.Icon>
        <Empty.Title>No results for &quot;onboarding&quot;</Empty.Title>
        <Empty.Description>
          Try a different keyword or remove the filters to widen the search.
        </Empty.Description>
        <Empty.Actions>
          <Button variant="outline" size="sm">
            Clear filters
          </Button>
        </Empty.Actions>
      </Empty.Root>
    </div>
  );
}

function EmptyList() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        empty list (Inbox 空、 Title + Description + 2 CTA)。
      </p>
      <Empty.Root>
        <Empty.Icon>
          <Inbox />
        </Empty.Icon>
        <Empty.Title>Your inbox is empty</Empty.Title>
        <Empty.Description>
          Create your first project or invite a teammate to get started.
        </Empty.Description>
        <Empty.Actions>
          <Button size="sm">
            <Plus className="size-4" />
            New project
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="size-4" />
            Import
          </Button>
        </Empty.Actions>
      </Empty.Root>
    </div>
  );
}

function Minimal() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        minimal (icon + title のみ、 sidebar や card 内の inline 用、 p-6 で
        compact)。
      </p>
      <Empty.Root className="p-6">
        <Empty.Icon className="size-9 [&>svg]:size-5">
          <Inbox />
        </Empty.Icon>
        <Empty.Title className="text-sm">No notifications</Empty.Title>
      </Empty.Root>
    </div>
  );
}
