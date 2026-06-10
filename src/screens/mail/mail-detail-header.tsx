import {
  Archive,
  Flag,
  FolderInput,
  Mail as MailIcon,
  MoreVertical,
  Reply,
  Star,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { IconButton } from "@/components/ui/icon-button";

type Action = {
  icon: LucideIcon;
  label: string;
};

const PRIMARY_ACTIONS: Action[] = [
  { icon: Archive, label: "アーカイブ" },
  { icon: Flag, label: "報告" },
  { icon: Trash2, label: "削除" },
  { icon: MailIcon, label: "未読にする" },
  { icon: FolderInput, label: "移動" },
];

const SECONDARY_ACTIONS: Action[] = [
  { icon: Star, label: "スター" },
  { icon: Reply, label: "返信" },
];

export function MailDetailHeader() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
      <div className="flex items-center gap-2">
        {PRIMARY_ACTIONS.map(({ icon: Icon, label }) => (
          <IconButton key={label} aria-label={label}>
            <Icon className="size-4" />
          </IconButton>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {SECONDARY_ACTIONS.map(({ icon: Icon, label }) => (
          <IconButton key={label} aria-label={label}>
            <Icon className="size-4" />
          </IconButton>
        ))}
        <ThemeToggle />
        <IconButton aria-label="その他">
          <MoreVertical className="size-4" />
        </IconButton>
      </div>
    </header>
  );
}
