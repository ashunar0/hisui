"use client";

import { QrCode } from "@/components/ui/qr-code";

export default function QrCodeInlineTicketDemo() {
  return (
    <QrCode.Root
      value="https://ui-lab.dev/ticket/E-9F3K"
      className="w-fit flex-row items-center gap-4 p-3"
    >
      <QrCode.Center>
        <QrCode.Frame className="size-24">
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Center>
      <div className="flex flex-col gap-0.5">
        <span className="text-fg-muted text-xs uppercase tracking-wide">
          Admission
        </span>
        <span className="font-semibold text-fg text-sm">UI Lab Night #3</span>
        <span className="text-fg-soft text-xs">2026-07-15 ・ 19:00</span>
        <span className="font-mono text-fg-subtle text-xs">E-9F3K</span>
      </div>
    </QrCode.Root>
  );
}
