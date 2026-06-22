"use client";

import { QrCode } from "@/components/ui/qr-code";

export default function QrCodeUsageDemo() {
  return (
    <QrCode.Root value="https://ui-lab.dev/booking/abc-123">
      <QrCode.Center>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Center>
      <span className="font-mono text-fg-soft text-xs">
        ui-lab.dev/booking/abc-123
      </span>
    </QrCode.Root>
  );
}
