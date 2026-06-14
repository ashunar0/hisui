import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { IconButton } from "@/components/ui/icon-button";

export function DrawerDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm">Right (default)</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <Drawer.Title>Settings</Drawer.Title>
              <Drawer.Description>右からスライド (end)</Drawer.Description>
            </div>
            <Drawer.CloseTrigger asChild>
              <IconButton variant="ghost" size="sm" aria-label="Close">
                <X className="size-4" />
              </IconButton>
            </Drawer.CloseTrigger>
          </div>
          <div className="flex-1 overflow-auto p-5 text-sm text-fg-soft">
            <p>
              Cart / Settings / Notifications 等を載せる panel。Title +
              Description + 中身 + 下にアクション。
            </p>
            <p className="mt-3">
              swipeDirection="end" がデフォルト。LTR では右からスライドイン。
            </p>
          </div>
          <div className="flex justify-end gap-2 border-t border-border px-5 py-4">
            <Drawer.CloseTrigger asChild>
              <Button variant="outline" size="sm">Cancel</Button>
            </Drawer.CloseTrigger>
            <Drawer.CloseTrigger asChild>
              <Button size="sm">Save</Button>
            </Drawer.CloseTrigger>
          </div>
        </Drawer.Content>
      </Drawer.Root>

      <Drawer.Root swipeDirection="start">
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm">Left (mobile nav)</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Drawer.Title>Menu</Drawer.Title>
            <Drawer.CloseTrigger asChild>
              <IconButton variant="ghost" size="sm" aria-label="Close">
                <X className="size-4" />
              </IconButton>
            </Drawer.CloseTrigger>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-3 text-sm">
            {["Dashboard", "Inbox", "Calendar", "Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-md px-3 py-2 text-fg-soft hover:bg-hover hover:text-fg"
              >
                {item}
              </a>
            ))}
          </nav>
        </Drawer.Content>
      </Drawer.Root>

      <Drawer.Root swipeDirection="up">
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm">Bottom sheet (up)</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Grabber>
            <Drawer.GrabberIndicator />
          </Drawer.Grabber>
          <div className="px-5 pb-2">
            <Drawer.Title>Share booking link</Drawer.Title>
            <Drawer.Description>
              下からスライド。スワイプダウンで閉じれる。
            </Drawer.Description>
          </div>
          <div className="flex-1 overflow-auto px-5 py-4 text-sm text-fg-soft">
            <p>iOS 風 bottom sheet。Grabber を上にして掴める感を出す。</p>
          </div>
          <div className="flex justify-end gap-2 border-t border-border px-5 py-4">
            <Drawer.CloseTrigger asChild>
              <Button size="sm">Done</Button>
            </Drawer.CloseTrigger>
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
