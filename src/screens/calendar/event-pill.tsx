import { cn } from "@/lib/utils";
import { ACCENT_CLASSES, type EventAccent } from "@/screens/calendar/data";

type Props = {
  accent: EventAccent;
  title: string;
};

export function EventPill({ accent, title }: Props) {
  return (
    <div
      className={cn(
        "truncate rounded px-1.5 py-0.5 text-xs font-medium",
        ACCENT_CLASSES[accent],
      )}
    >
      {title}
    </div>
  );
}
