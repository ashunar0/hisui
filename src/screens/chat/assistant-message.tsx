import { Copy, RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

const ACTIONS = [
  { label: "コピー", Icon: Copy },
  { label: "グッド", Icon: ThumbsUp },
  { label: "バッド", Icon: ThumbsDown },
  { label: "再生成", Icon: RotateCcw },
];

export function AssistantMessage({ content }: { content: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="whitespace-pre-wrap text-sm leading-relaxed text-fg">
        {content}
      </div>
      <div className="flex items-center gap-0.5">
        {ACTIONS.map(({ label, Icon }) => (
          <IconButton
            key={label}
            aria-label={label}
            className="size-7 text-fg-muted hover:text-fg-soft"
          >
            <Icon className="size-3.5" />
          </IconButton>
        ))}
      </div>
    </div>
  );
}
