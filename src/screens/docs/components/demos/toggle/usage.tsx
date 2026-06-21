import { Wifi } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export default function ToggleUsageDemo() {
  return (
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
  );
}
