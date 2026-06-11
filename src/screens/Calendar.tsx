import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Sidebar } from "@/components/ui/sidebar";
import { CalendarGrid } from "@/screens/calendar/calendar-grid";
import { CalendarToolbar } from "@/screens/calendar/calendar-toolbar";

export function Calendar() {
  const [current, setCurrent] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const goPrev = () =>
    setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  const goNext = () =>
    setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1));
  const goToday = () => {
    const now = new Date();
    setCurrent(new Date(now.getFullYear(), now.getMonth(), 1));
  };

  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
        <AppSidebar active="カレンダー" />
        <main className="flex flex-1 flex-col overflow-hidden bg-canvas">
          <header className="flex h-14 shrink-0 items-center gap-3 px-6">
            <Sidebar.Trigger className="-ml-2" />
            <Breadcrumb items={[{ label: "カレンダー" }]} />
            <div className="ml-auto flex items-center gap-1">
              <ThemeToggle />
            </div>
          </header>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                カレンダー
              </h1>
              <p className="text-sm text-fg-muted">
                予定とタスクを月単位で見渡す
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <CalendarToolbar
                current={current}
                onPrev={goPrev}
                onNext={goNext}
                onToday={goToday}
              />
              <CalendarGrid current={current} />
            </div>
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
