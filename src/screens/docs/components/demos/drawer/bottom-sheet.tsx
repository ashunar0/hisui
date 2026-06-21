import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { Stack } from "@/components/ui/stack";

const SORT_OPTIONS = ["Newest", "Oldest", "Name (A→Z)", "Name (Z→A)"];

export default function DrawerBottomSheetDemo() {
  return (
    <Drawer.Root swipeDirection="up">
      <Drawer.Trigger asChild>
        <Button variant="outline">Open sheet</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Grabber>
          <Drawer.GrabberIndicator />
        </Drawer.Grabber>
        <Stack gap="sm" className="px-6 pb-6">
          <Drawer.Title>Sort by</Drawer.Title>
          <Drawer.Description>Choose how to order the list.</Drawer.Description>
          <div className="flex flex-col gap-1 pt-2">
            {SORT_OPTIONS.map((label) => (
              <Drawer.CloseTrigger
                key={label}
                className="cursor-pointer rounded-sm px-3 py-2 text-left text-fg-soft text-sm hover:bg-hover"
              >
                {label}
              </Drawer.CloseTrigger>
            ))}
          </div>
        </Stack>
      </Drawer.Content>
    </Drawer.Root>
  );
}
