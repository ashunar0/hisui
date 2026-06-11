import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { BookingConfirmation } from "@/screens/booking/booking-confirmation";
import { BookingForm } from "@/screens/booking/booking-form";
import { BookingSummary } from "@/screens/booking/booking-summary";
import { EventInfoPanel } from "@/screens/booking/event-info-panel";
import { MonthPicker } from "@/screens/booking/month-picker";
import { SlotList } from "@/screens/booking/slot-list";

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
          {isConfirmed && selectedDate && selectedTime ? (
            <BookingConfirmation
              date={selectedDate}
              time={selectedTime}
              email={confirmedEmail}
              onReset={reset}
            />
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
                  <BookingSummary date={selectedDate} time={selectedTime} />
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
