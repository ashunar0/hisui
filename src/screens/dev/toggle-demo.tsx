import { Bell, BellOff, Bold, Italic, Underline, Wifi } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export function ToggleDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          text label (default / pressed / disabled)
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle.Root aria-label="Wifi off">
            <Wifi className="size-4" strokeWidth={2} />
            Wifi
          </Toggle.Root>
          <Toggle.Root aria-label="Wifi on" defaultPressed>
            <Wifi className="size-4" strokeWidth={2} />
            Wifi
          </Toggle.Root>
          <Toggle.Root aria-label="Wifi disabled" disabled>
            <Wifi className="size-4" strokeWidth={2} />
            Wifi
          </Toggle.Root>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          Indicator で icon を on/off で swap (Bell ↔ BellOff)
        </span>
        <Toggle.Root
          aria-label="Toggle notifications"
          defaultPressed
          className="w-fit"
        >
          <Toggle.Indicator
            fallback={<BellOff className="size-4" strokeWidth={2} />}
          >
            <Bell className="size-4" strokeWidth={2} />
          </Toggle.Indicator>
          Notifications
        </Toggle.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          icon-only formatting buttons (toolbar 風、 aria-label で a11y)
        </span>
        <div className="flex w-fit items-center gap-1 rounded-md border border-border bg-surface p-1">
          <Toggle.Root
            aria-label="Bold"
            defaultPressed
            className="size-8 border-0 p-0"
          >
            <Bold className="size-4" strokeWidth={2.25} />
          </Toggle.Root>
          <Toggle.Root aria-label="Italic" className="size-8 border-0 p-0">
            <Italic className="size-4" strokeWidth={2.25} />
          </Toggle.Root>
          <Toggle.Root aria-label="Underline" className="size-8 border-0 p-0">
            <Underline className="size-4" strokeWidth={2.25} />
          </Toggle.Root>
        </div>
      </div>
    </div>
  );
}
