import { Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QrCode } from "@/components/ui/qr-code";

export default function QrCodeLogoOverlayDemo() {
  return (
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
  );
}
