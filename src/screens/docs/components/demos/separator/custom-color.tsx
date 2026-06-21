import { Separator } from "@/components/ui/separator";

export default function SeparatorCustomColorDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Separator />
      <p className="text-fg-muted text-xs">bg-border (default)</p>
      <Separator className="bg-border-muted" />
      <p className="text-fg-muted text-xs">bg-border-muted</p>
      <Separator className="bg-fg" />
      <p className="text-fg-muted text-xs">bg-fg</p>
    </div>
  );
}
