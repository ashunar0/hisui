import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/ui/empty";

export default function EmptySearchZeroStateDemo() {
  return (
    <Empty.Root className="w-full">
      <Empty.Icon>
        <Search />
      </Empty.Icon>
      <Empty.Title>{'No matches for "zustand"'}</Empty.Title>
      <Empty.Description>
        Try a different keyword or clear the filters.
      </Empty.Description>
      <Empty.Actions>
        <Button variant="outline">Clear filters</Button>
      </Empty.Actions>
    </Empty.Root>
  );
}
