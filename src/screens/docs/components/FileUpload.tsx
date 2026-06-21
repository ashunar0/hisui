import { FileText, ImageUp, Trash2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { IconButton } from "@/components/ui/icon-button";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "FileUpload.Root",
    description:
      "外枠。 accept / maxFiles / maxFileSize で制約、 onFileAccept / onFileReject で callback。 必ず HiddenInput を内側に置く。",
  },
  {
    name: "FileUpload.Label",
    description: "見出し。 a11y のため aria-labelledby に自動接続。",
  },
  {
    name: "FileUpload.Dropzone",
    description:
      "drag & drop 受け付け area。 dashed border + 中央寄せの flex。 data-dragging=true で active 色に。",
  },
  {
    name: "FileUpload.Trigger",
    description:
      "click で native file picker を開く button。 asChild で Button にラップ可。",
  },
  {
    name: "FileUpload.ItemGroup",
    description: "選択済 file の list container。 Context render-prop でループ。",
  },
  {
    name: "FileUpload.Item",
    description:
      "1 file の row。 file prop に File object を渡す。 内部に Preview / Name / SizeText / DeleteTrigger を並べる。",
  },
  {
    name: "FileUpload.ItemPreview / ItemPreviewImage",
    description:
      "image preview の枠と img。 type='image/*' を渡すと該当 file 時のみ render。",
  },
  {
    name: "FileUpload.ItemName / ItemSizeText",
    description: "file 名 / size の text。 自動 format。",
  },
  {
    name: "FileUpload.ItemDeleteTrigger",
    description: "1 file 削除 button。 asChild で IconButton にラップ。",
  },
  {
    name: "FileUpload.ClearTrigger",
    description: "全 file 一括 clear。 1 つ以上選択中なら表示する条件付き UI に使う。",
  },
  {
    name: "FileUpload.HiddenInput",
    description: "form submit 用の hidden input。 Root 内に 1 つ必須。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "accept",
    type: "string | Record<string, string[]>",
    description: 'MIME type / 拡張子で受け入れ制限。 例: "image/*" / { "image/*": [".png", ".jpg"] }。',
  },
  {
    name: "maxFiles",
    type: "number",
    default: "1",
    description: "同時受け入れ枚数。 multi upload で増やす。",
  },
  {
    name: "maxFileSize",
    type: "number",
    description: "ファイル 1 つあたりの最大 byte。",
  },
  {
    name: "minFileSize",
    type: "number",
    description: "ファイル 1 つあたりの最小 byte。",
  },
  {
    name: "allowDrop",
    type: "boolean",
    default: "true",
    description: "drag & drop を許可するか。 click only にする時 false。",
  },
  {
    name: "onFileAccept",
    type: "(details: { files: File[] }) => void",
    description: "OK だった file が来た時。 upload 開始の trigger に。",
  },
  {
    name: "onFileReject",
    type: "(details: { files: { file: File; errors: string[] }[] }) => void",
    description: "制約に外れて拒否された時。 toast 等で notify。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "全体無効化。",
  },
];

function DropzoneExample() {
  return (
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
  );
}

function DocumentExample() {
  return (
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
  );
}

export function FileUploadDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="FileUpload">
        ファイル選択 + drag & drop の compound。 accept / maxFiles /
        maxFileSize で制約、 Context render-prop で選択済 file の list を回す。
        Avatar 画像 / PDF 添付 / 画像 batch upload まで 1 primitive で組める。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Label / Dropzone (+ Trigger) / ItemGroup (Context で Item 描画) / ClearTrigger / HiddenInput。 HiddenInput は必須。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[20rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Dropzone + preview"
        description="dashed bordered の drag&drop area + Trigger button。 受け取った image を thumbnail + 名前 + size + 削除で list 表示。 1 つ以上選択中だけ ClearTrigger が出る。"
      >
        <Example
          code={`<FileUpload.Root maxFiles={5} accept="image/*">
  <FileUpload.Label>画像をアップロード</FileUpload.Label>
  <FileUpload.Dropzone>
    <p>ここに drag & drop か</p>
    <FileUpload.Trigger asChild><Button variant="outline">ファイル選択</Button></FileUpload.Trigger>
  </FileUpload.Dropzone>
  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {(api) => api.acceptedFiles.map((file) => (
        <FileUpload.Item key={file.name} file={file}>
          <FileUpload.ItemPreview type="image/*"><FileUpload.ItemPreviewImage /></FileUpload.ItemPreview>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger />
        </FileUpload.Item>
      ))}
    </FileUpload.Context>
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.Root>`}
        >
          <div className="w-full max-w-lg">
            <DropzoneExample />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Single file (PDF)"
        description="maxFiles=1 + accept=application/pdf。 Dropzone を使わず Trigger button だけの軽量 UI。 Context で選択中 file 名を inline 表示。"
      >
        <Example
          code={`<FileUpload.Root accept="application/pdf" maxFiles={1}>
  <FileUpload.Label>契約書 (PDF)</FileUpload.Label>
  <FileUpload.Trigger asChild>
    <Button variant="outline">PDF を選択</Button>
  </FileUpload.Trigger>
  <FileUpload.Context>
    {(api) => api.acceptedFiles[0]?.name}
  </FileUpload.Context>
  <FileUpload.HiddenInput />
</FileUpload.Root>`}
        >
          <div className="w-full max-w-lg">
            <DocumentExample />
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
