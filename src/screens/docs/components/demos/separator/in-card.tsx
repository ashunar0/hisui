import { Separator } from "@/components/ui/separator";

export default function SeparatorInCardDemo() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-md border border-border bg-surface">
      <div className="p-4">
        <h3 className="font-medium text-fg text-sm">Settings</h3>
        <p className="text-fg-muted text-xs">Manage your preferences.</p>
      </div>
      <Separator />
      <div className="flex flex-col gap-2 p-4">
        <p className="text-fg-soft text-sm">Theme: System</p>
        <p className="text-fg-soft text-sm">Language: English</p>
        <p className="text-fg-soft text-sm">Notifications: Email</p>
      </div>
      <Separator />
      <div className="flex justify-end p-3">
        <p className="text-fg-muted text-xs">Last saved 2 min ago</p>
      </div>
    </div>
  );
}
