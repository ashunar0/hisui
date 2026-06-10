import { Sidebar } from "@/components/ui/sidebar";
import { ChatSidebar } from "@/screens/chat/chat-sidebar";

export function Chat() {
  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
        <ChatSidebar />
        <main className="flex flex-1 flex-col overflow-hidden bg-canvas">
          <header className="flex h-14 shrink-0 items-center gap-3 px-6">
            <Sidebar.Trigger className="-ml-2" />
            <h1 className="text-sm font-medium">Chat</h1>
          </header>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <p className="text-fg-soft">
              Chat のコンテンツ（ここから組み立て）
            </p>
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
