import { FileText, ImageUp, Trash2, Upload, X } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { IconButton } from "@/components/ui/icon-button";

export function FileUploadDemo() {
  return (
    <div className="flex flex-col gap-8">
      <DropzoneUpload />
      <DocumentUpload />
      <AvatarUpload />
    </div>
  );
}

function DropzoneUpload() {
  return (
    <FileUpload.Root
      maxFiles={5}
      accept="image/*"
      className="flex flex-col gap-3"
    >
      <FileUpload.Label className="text-sm font-medium text-fg">
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
                  <FileUpload.ItemName className="truncate text-sm text-fg" />
                  <FileUpload.ItemSizeText className="text-xs text-fg-muted" />
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
          api.acceptedFiles.length > 0 && (
            <FileUpload.ClearTrigger asChild>
              <Button variant="ghost" size="sm" className="w-fit">
                <X className="size-4" />
                すべてクリア
              </Button>
            </FileUpload.ClearTrigger>
          )
        }
      </FileUpload.Context>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
}

function DocumentUpload() {
  return (
    <FileUpload.Root
      accept="application/pdf"
      maxFiles={1}
      className="flex flex-col gap-3"
    >
      <FileUpload.Label className="text-sm font-medium text-fg">
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
              <div className="flex min-w-0 items-center gap-2 text-sm text-fg-soft">
                <FileText className="size-4 shrink-0" />
                <span className="truncate">{file.name}</span>
              </div>
            ) : (
              <span className="text-sm text-fg-muted">ファイル未選択</span>
            );
          }}
        </FileUpload.Context>
      </div>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
}

function AvatarUpload() {
  return (
    <FileUpload.Root accept="image/*" maxFiles={1} className="flex flex-col gap-3">
      <FileUpload.Label className="text-sm font-medium text-fg">
        プロフィール画像
      </FileUpload.Label>
      <div className="flex items-center gap-4">
        <FileUpload.Context>
          {(api) => {
            const file = api.acceptedFiles[0];
            return (
              <Avatar.Root size="xl">
                {file ? (
                  <Avatar.Image src={URL.createObjectURL(file)} alt="preview" />
                ) : null}
                <Avatar.Fallback name="あさひ" />
              </Avatar.Root>
            );
          }}
        </FileUpload.Context>
        <div className="flex flex-col gap-2">
          <FileUpload.Trigger asChild>
            <Button variant="outline" size="sm">
              画像を変更
            </Button>
          </FileUpload.Trigger>
          <FileUpload.ClearTrigger asChild>
            <Button variant="ghost" size="sm">
              削除
            </Button>
          </FileUpload.ClearTrigger>
        </div>
      </div>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
}
