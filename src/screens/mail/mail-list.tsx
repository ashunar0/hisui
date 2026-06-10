import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs } from "@/components/ui/tabs";
import { ACTIVE_MAIL_ID, MAILS } from "@/screens/mail/data";

export function MailList() {
  return (
    <div className="flex w-80 shrink-0 flex-col overflow-hidden border-r border-border">
      <div className="flex flex-col gap-3 border-b border-border px-4 pt-4 pb-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-semibold text-fg text-lg">Inbox</h2>
          <Tabs.Root defaultValue="all">
            <Tabs.List>
              <Tabs.Trigger value="all">All</Tabs.Trigger>
              <Tabs.Trigger value="unread">Unreads</Tabs.Trigger>
              <Tabs.Indicator />
            </Tabs.List>
          </Tabs.Root>
        </div>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-fg-muted" />
          <Input placeholder="検索" className="h-8 pl-8 text-xs" />
        </div>
      </div>
      <ScrollArea.Root className="flex-1">
        <ScrollArea.Viewport>
          {MAILS.map((mail) => {
            const active = mail.id === ACTIVE_MAIL_ID;
            return (
              <button
                key={mail.id}
                type="button"
                className={cn(
                  "flex w-full gap-3 border-b border-border-muted px-4 py-3 text-left transition-[background-color]",
                  active ? "bg-surface-sunken" : "hover:bg-hover",
                )}
              >
                <div className="shrink-0 pt-1.5">
                  <span
                    className={cn(
                      "block size-2 rounded-full",
                      mail.unread ? "bg-blue-500" : "bg-transparent",
                    )}
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className={cn(
                        "truncate text-sm",
                        mail.unread
                          ? "font-semibold text-fg"
                          : "text-fg-soft",
                      )}
                    >
                      {mail.from}
                    </span>
                    <span className="shrink-0 text-fg-muted text-xs">
                      {mail.date}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "truncate text-sm",
                      mail.unread ? "font-medium text-fg" : "text-fg-soft",
                    )}
                  >
                    {mail.subject}
                  </div>
                  <div className="line-clamp-2 text-fg-muted text-xs">
                    {mail.preview}
                  </div>
                </div>
              </button>
            );
          })}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
