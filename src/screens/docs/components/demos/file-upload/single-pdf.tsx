import { FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";

export default function FileUploadSinglePdfDemo() {
  return (
    <div className="w-full max-w-lg">
      <FileUpload.Root
        accept="application/pdf"
        maxFiles={1}
        className="flex flex-col gap-3"
      >
        <FileUpload.Label className="font-medium text-fg text-sm">
          契約書 (PDF)
        </FileUpload.Label>
        <div className="flex items-center gap-3">
          <FileUpload.Trigger asChild>
            <Button variant="outline" size="sm">
              <Upload className="size-4" />
              PDF を選択
            </Button>
          </FileUpload.Trigger>
          <FileUpload.Context>
            {(api) => {
              const file = api.acceptedFiles[0];
              return file ? (
                <div className="flex min-w-0 items-center gap-2 text-fg-soft text-sm">
                  <FileText className="size-4 shrink-0" />
                  <span className="truncate">{file.name}</span>
                </div>
              ) : (
                <span className="text-fg-muted text-sm">ファイル未選択</span>
              );
            }}
          </FileUpload.Context>
        </div>
        <FileUpload.HiddenInput />
      </FileUpload.Root>
    </div>
  );
}
