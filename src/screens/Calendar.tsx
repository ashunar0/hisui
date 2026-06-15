import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Sidebar } from "@/components/ui/sidebar";
import { Tabs } from "@/components/ui/tabs";
import { CalendarGrid } from "@/screens/calendar/calendar-grid";
import { CalendarToolbar } from "@/screens/calendar/calendar-toolbar";
import { WeekGrid } from "@/screens/calendar/week-grid";
import { WeekToolbar } from "@/screens/calendar/week-toolbar";

type View = "month" | "week";

export function Calendar() {
  const [view, setView] = useState<View>("month");
  const [current, setCurrent] = useState(() => new Date());

  const goPrev = () => {
    if (view === "month") {
      setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1));
    } else {
      const d = new Date(current);
      d.setDate(d.getDate() - 7);
      setCurrent(d);
    }
  };
  const goNext = () => {
    if (view === "month") {
      setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1));
    } else {
      const d = new Date(current);
      d.setDate(d.getDate() + 7);
      setCurrent(d);
    }
  };
  const goToday = () => setCurrent(new Date());

  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
        <AppSidebar active="カレンダー" />
        <main className="flex flex-1 flex-col overflow-hidden bg-canvas">
          <header className="flex h-14 shrink-0 items-center gap-3 px-6">
            <Sidebar.Trigger className="-ml-2" />
            <Breadcrumb.Root>
              <Breadcrumb.List>
                <Breadcrumb.Item>
                  <Breadcrumb.CurrentLink>カレンダー</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
              </Breadcrumb.List>
            </Breadcrumb.Root>
            <div className="ml-auto flex items-center gap-3">
              <Tabs.Root
                value={view}
                onValueChange={(d) => setView(d.value as View)}
              >
                <Tabs.List>
                  <Tabs.Trigger value="month">月</Tabs.Trigger>
                  <Tabs.Trigger value="week">週</Tabs.Trigger>
                  <Tabs.Indicator />
                </Tabs.List>
              </Tabs.Root>
              <ThemeToggle />
            </div>
          </header>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="mt-8 flex flex-col gap-4">
              {view === "month" ? (
                <>
                  <CalendarToolbar
                    current={current}
                    onPrev={goPrev}
                    onNext={goNext}
                    onToday={goToday}
                  />
                  <CalendarGrid current={current} />
                </>
              ) : (
                <>
                  <WeekToolbar
                    current={current}
                    onPrev={goPrev}
                    onNext={goNext}
                    onToday={goToday}
                  />
                  <WeekGrid current={current} />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
