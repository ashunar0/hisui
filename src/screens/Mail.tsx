import { Sidebar } from "@/components/ui/sidebar";
import { MailDetail } from "@/screens/mail/mail-detail";
import { MailList } from "@/screens/mail/mail-list";
import { MailSidebar } from "@/screens/mail/mail-sidebar";

export function Mail() {
  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
        <MailSidebar />
        <main className="flex flex-1 flex-col overflow-hidden bg-canvas">
          <div className="flex flex-1 overflow-hidden">
            <MailList />
            <MailDetail />
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
