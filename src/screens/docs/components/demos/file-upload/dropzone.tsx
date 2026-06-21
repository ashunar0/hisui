import { ImageUp, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { IconButton } from "@/components/ui/icon-button";

export default function FileUploadDropzoneDemo() {
  return (
    <div className="w-full max-w-lg">
      <FileUpload.Root
        maxFiles={5}
        accept="image/*"
        className="flex flex-col gap-3"
      >
        <FileUpload.Label className="font-medium text-fg text-sm">
          画像をアップロード (最大 5 枚)
        </FileUpload.Label>
        <FileUpload.Dropzone>
          <ImageUp className="size-5" />
          <p>ここに drag & drop か</p>
          <FileUpload.Trigger asChild>
            <Button variant="outline" size="sm">
              ファイル選択
            </Button>
          </FileUpload.Trigger>
        </FileUpload.Dropzone>
        <FileUpload.ItemGroup className="flex flex-col gap-2">
          <FileUpload.Context>
            {(api) =>
              api.acceptedFiles.map((file) => (
                <FileUpload.Item
                  key={file.name}
                  file={file}
                  className="flex items-center gap-3 rounded-md border border-border bg-surface p-2"
                >
                  <FileUpload.ItemPreview
                    type="image/*"
                    className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded bg-surface-sunken"
                  >
                    <FileUpload.ItemPreviewImage className="size-full object-cover" />
                  </FileUpload.ItemPreview>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <FileUpload.ItemName className="truncate text-fg text-sm" />
                    <FileUpload.ItemSizeText className="text-fg-muted text-xs" />
                  </div>
                  <FileUpload.ItemDeleteTrigger asChild>
                    <IconButton aria-label="削除">
                      <Trash2 className="size-4" />
                    </IconButton>
                  </FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              ))
            }
          </FileUpload.Context>
        </FileUpload.ItemGroup>
        <FileUpload.Context>
          {(api) =>
            api.acceptedFiles.length > 0 ? (
              <FileUpload.ClearTrigger asChild>
                <Button variant="ghost" size="sm" className="w-fit">
                  <X className="size-4" />
                  すべてクリア
                </Button>
              </FileUpload.ClearTrigger>
            ) : null
          }
        </FileUpload.Context>
        <FileUpload.HiddenInput />
      </FileUpload.Root>
    </div>
  );
}
