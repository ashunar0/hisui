import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  activeMail,
  RECIPIENT_EMAIL,
  RECIPIENT_NAME,
} from "@/screens/mail/data";
import { MailDetailHeader } from "@/screens/mail/mail-detail-header";

export function MailDetail() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <MailDetailHeader />
      <div className="flex flex-col gap-5 border-b border-border bg-white px-6 py-6">
        <h1 className="font-semibold text-fg text-xl">{activeMail.subject}</h1>
        <div className="flex gap-3">
          <Avatar.Root size="md">
            <Avatar.Fallback name={activeMail.from} />
          </Avatar.Root>
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="flex items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-fg text-sm">
                  {activeMail.from}
                </span>
                <span className="text-fg-muted text-xs">
                  {`<${activeMail.fromEmail}>`}
                </span>
              </div>
              <span className="shrink-0 text-fg-muted text-xs">
                {activeMail.dateFull}
              </span>
            </div>
            <div className="text-fg-muted text-xs">
              To: {RECIPIENT_NAME}{" "}
              <span className="text-fg-muted">{`<${RECIPIENT_EMAIL}>`}</span>
            </div>
          </div>
        </div>
      </div>
      <ScrollArea.Root className="flex-1 bg-white">
        <ScrollArea.Viewport>
          <div className="whitespace-pre-wrap px-6 py-6 text-fg-soft text-sm leading-relaxed">
            {activeMail.body ?? "(本文はありません)"}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
