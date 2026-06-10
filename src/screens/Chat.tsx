import { Upload } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";
import { ChatMessages } from "@/screens/chat/chat-messages";
import { ChatSidebar } from "@/screens/chat/chat-sidebar";

export function Chat() {
  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
        <ChatSidebar />
        <main className="flex flex-1 flex-col overflow-hidden bg-canvas">
          <header className="flex h-14 shrink-0 items-center gap-3 px-6">
            <Sidebar.Trigger className="-ml-2" />
            <h1 className="truncate text-sm font-medium">
              React Server Components の使いどころ
            </h1>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="solid" size="sm">
                Proにアップグレード
              </Button>
              <Button variant="subtle" size="sm" className="gap-2">
                <Upload className="size-4" />
                共有する
              </Button>
              <ThemeToggle />
            </div>
          </header>
          <div className="flex-1 overflow-y-auto">
            <ChatMessages />
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
