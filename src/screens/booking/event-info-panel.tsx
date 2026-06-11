import { Clock, Globe, MapPin } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { EVENT, HOST, TIMEZONE } from "@/screens/booking/data";

export function EventInfoPanel() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Avatar.Root size="sm">
          <Avatar.Fallback>{HOST.name[0]}</Avatar.Fallback>
        </Avatar.Root>
        <span className="text-sm text-fg-muted">{HOST.name}</span>
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-fg">
        {EVENT.title}
      </h1>
      <div className="flex flex-col gap-2 text-sm text-fg-soft">
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-fg-muted" />
          <span>{EVENT.duration} 分</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-fg-muted" />
          <span>{EVENT.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="size-4 text-fg-muted" />
          <span>{TIMEZONE}</span>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-fg-soft">
        {EVENT.description}
      </p>
    </div>
  );
}
