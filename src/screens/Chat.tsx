import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <h1 className="truncate text-sm font-medium">
              React Server Components の使いどころ
            </h1>
            <div className="ml-auto flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-sky-600 hover:bg-sky-50 hover:text-sky-700 dark:text-sky-400 dark:hover:bg-sky-950/40 dark:hover:text-sky-300"
              >
                Proにアップグレード
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="size-4" />
                共有する
              </Button>
            </div>
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
