import { Button } from "@/components/ui/button";
import { PinInput } from "@/components/ui/pin-input";

export function PinInputDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Otp />
      <MaskedPin />
      <WithSubmit />
    </div>
  );
}

function Otp() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        OTP 6 digits (otp prop で autocomplete="one-time-code"、 paste & 自動 focus 移動)
      </p>
      <PinInput.Root otp>
        <PinInput.Label>One-time code</PinInput.Label>
        <PinInput.Control>
          {Array.from({ length: 6 }).map((_, i) => (
            <PinInput.Input key={i} index={i} />
          ))}
        </PinInput.Control>
      </PinInput.Root>
    </div>
  );
}

function MaskedPin() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        masked PIN 4 digits (mask prop で入力値を •  に置き換え、 banking 風)
      </p>
      <PinInput.Root mask>
        <PinInput.Label>Card PIN</PinInput.Label>
        <PinInput.Control>
          {Array.from({ length: 4 }).map((_, i) => (
            <PinInput.Input key={i} index={i} />
          ))}
        </PinInput.Control>
      </PinInput.Root>
    </div>
  );
}

function WithSubmit() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        with submit (Context render-prop で valueLength を見て、 全桁埋まるまで
        submit を disable + counter 表示)
      </p>
      <PinInput.Root>
        <PinInput.Label>Verify code (5 digits)</PinInput.Label>
        <PinInput.Control>
          {Array.from({ length: 5 }).map((_, i) => (
            <PinInput.Input key={i} index={i} />
          ))}
        </PinInput.Control>
        <PinInput.Context>
          {(api) => {
            const filled = api.value.filter(Boolean).length;
            const total = api.value.length;
            return (
              <div className="mt-1 flex items-center justify-between gap-3">
                <span className="text-[11px] text-fg-muted">
                  {filled} / {total} digits
                </span>
                <Button size="sm" disabled={!api.complete}>
                  Verify
                </Button>
              </div>
            );
          }}
        </PinInput.Context>
      </PinInput.Root>
    </div>
  );
}
