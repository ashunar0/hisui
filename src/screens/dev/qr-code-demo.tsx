import { Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QrCode } from "@/components/ui/qr-code";

export function QrCodeDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">basic share URL</span>
        <QrCode.Root value="https://ui-lab.dev/booking/abc-123">
          <QrCode.Center>
            <QrCode.Frame>
              <QrCode.Pattern />
            </QrCode.Frame>
          </QrCode.Center>
          <span className="font-mono text-xs text-fg-soft">
            ui-lab.dev/booking/abc-123
          </span>
        </QrCode.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          logo overlay + download (encoding.ecc=H で誤り訂正、 2FA setup 風)
        </span>
        <QrCode.Root
          value="otpauth://totp/ui-lab:asahi?secret=JBSWY3DPEHPK3PXP&issuer=ui-lab"
          encoding={{ ecc: "H" }}
        >
          <QrCode.Center>
            <QrCode.Frame>
              <QrCode.Pattern />
            </QrCode.Frame>
            <QrCode.Overlay>
              <Sparkles className="size-4 text-fg" strokeWidth={2.25} />
            </QrCode.Overlay>
          </QrCode.Center>
          <QrCode.DownloadTrigger
            fileName="2fa-qr.png"
            mimeType="image/png"
            asChild
          >
            <Button variant="outline" size="sm">
              <Download className="size-4" />
              Download PNG
            </Button>
          </QrCode.DownloadTrigger>
        </QrCode.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          compact inline ticket (size-24 + 横に event info)
        </span>
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
            <span className="text-xs uppercase tracking-wide text-fg-muted">
              Admission
            </span>
            <span className="text-sm font-semibold text-fg">
              UI Lab Night #3
            </span>
            <span className="text-xs text-fg-soft">2026-07-15 ・ 19:00</span>
            <span className="font-mono text-xs text-fg-subtle">E-9F3K</span>
          </div>
        </QrCode.Root>
      </div>
    </div>
  );
}
