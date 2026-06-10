import { useState } from "react";
import { SettingsRow } from "@/components/settings-row";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";

export function AvatarRow() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  return (
    <SettingsRow
      title="アバター"
      description="PNG / JPG / 1MB 以内"
      align="center"
      className="mt-6"
    >
      <FileUpload.Root
        accept="image/png,image/jpeg"
        maxFiles={1}
        maxFileSize={1024 * 1024}
        onFileAccept={(d) => {
          const file = d.files[0];
          if (file) setAvatarUrl(URL.createObjectURL(file));
        }}
        className="flex items-center gap-3"
      >
        <FileUpload.HiddenInput />
        <Avatar.Root size="md">
          {avatarUrl && <Avatar.Image src={avatarUrl} />}
          <Avatar.Fallback name="あさひ" />
        </Avatar.Root>
        <div className="flex gap-2">
          <FileUpload.Trigger className="inline-flex h-8 cursor-pointer items-center justify-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-fg transition-colors hover:bg-hover">
            Upload
          </FileUpload.Trigger>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAvatarUrl(null)}
            className="text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/50"
          >
            削除
          </Button>
        </div>
      </FileUpload.Root>
    </SettingsRow>
  );
}
