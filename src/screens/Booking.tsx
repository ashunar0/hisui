import { ArrowLeft, Calendar, Check, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookingForm } from "@/screens/booking/booking-form";
import { EVENT } from "@/screens/booking/data";
import { EventInfoPanel } from "@/screens/booking/event-info-panel";
import { MonthPicker } from "@/screens/booking/month-picker";
import { SlotList } from "@/screens/booking/slot-list";
import {
  formatDateKey,
  formatLongDate,
} from "@/screens/calendar/data";

type Step = "datetime" | "form" | "confirmed";

export function Booking() {
  const [step, setStep] = useState<Step>("datetime");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmedEmail, setConfirmedEmail] = useState("");

  const isForm = step === "form";
  const isConfirmed = step === "confirmed";

  const reset = () => {
    setStep("datetime");
    setSelectedDate(null);
    setSelectedTime(null);
    setConfirmedEmail("");
  };

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <header className="flex h-14 shrink-0 items-center px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          ホームへ戻る
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 pb-12">
        <div className="w-full max-w-5xl rounded-lg border border-border bg-surface shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06),0_0_4px_rgba(0,0,0,0.03)]">
          {isConfirmed ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50">
                <Check className="size-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-xl font-semibold text-fg">
                予約が完了しました
              </h2>
              {selectedDate && selectedTime && (
                <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
                  {formatLongDate(formatDateKey(selectedDate))} の{" "}
                  {selectedTime} に予約しました。
                  {confirmedEmail && (
                    <>
                      <br />
                      確認メールを {confirmedEmail} 宛に送信しました。
                    </>
                  )}
                </p>
              )}
              <Button variant="outline" size="md" onClick={reset}>
                新しい予約を作る
              </Button>
            </div>
          ) : (
            <div
              className={cn(
                "grid grid-cols-1 gap-6 p-8 md:gap-8",
                !isForm && "md:grid-cols-[280px_1fr_280px]",
                isForm && "md:grid-cols-[280px_1fr]",
              )}
            >
              <div className="flex flex-col gap-4">
                {isForm && (
                  <button
                    type="button"
                    onClick={() => setStep("datetime")}
                    className="-ml-1 inline-flex w-fit items-center gap-1 rounded-sm px-1 py-0.5 text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    <ArrowLeft className="size-4" />
                    戻る
                  </button>
                )}
                <EventInfoPanel />
                {isForm && selectedDate && selectedTime && (
                  <div className="flex flex-col gap-2 border-t border-border pt-4 text-sm text-fg-soft">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4 text-fg-muted" />
                      <span>
                        {formatLongDate(formatDateKey(selectedDate))}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-fg-muted" />
                      <span>
                        {selectedTime} ({EVENT.duration} 分)
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {!isForm ? (
                <>
                  <MonthPicker
                    selected={selectedDate}
                    onSelect={(d) => {
                      setSelectedDate(d);
                      setSelectedTime(null);
                    }}
                  />
                  <SlotList
                    date={selectedDate}
                    onSelect={(t) => {
                      setSelectedTime(t);
                      setStep("form");
                    }}
                  />
                </>
              ) : (
                <BookingForm
                  onSubmit={(data) => {
                    setConfirmedEmail(data.email);
                    setStep("confirmed");
                  }}
                />
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
