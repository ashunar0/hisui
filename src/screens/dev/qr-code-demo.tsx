import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QrCode } from "@/components/ui/qr-code";

export function QrCodeDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-fg-muted">basic</span>
        <QrCode.Root value="https://example.com/booking/abc-123">
          <QrCode.Frame>
            <QrCode.Pattern />
          </QrCode.Frame>
        </QrCode.Root>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-fg-muted">with overlay + download</span>
        <QrCode.Root
          value="https://example.com/booking/abc-123"
          encoding={{ ecc: "H" }}
        >
          <QrCode.Frame>
            <QrCode.Pattern />
          </QrCode.Frame>
          <QrCode.Overlay>
            <span className="text-xs font-semibold text-fg">UI</span>
          </QrCode.Overlay>
          <QrCode.DownloadTrigger
            fileName="booking-qr.png"
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
    </div>
  );
}
