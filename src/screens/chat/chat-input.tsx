import { ArrowUp, Check, ChevronDown, Plus } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Menu } from "@/components/ui/menu";

const MODELS = [
  { value: "opus", label: "Claude Opus 4.7", desc: "最も高度なタスクに" },
  { value: "sonnet", label: "Claude Sonnet 4.6", desc: "バランス重視 (推奨)" },
  { value: "haiku", label: "Claude Haiku 4.5", desc: "高速・軽量" },
];

const CURRENT_MODEL = "sonnet";

export function ChatInput() {
  return (
    <div className="px-4 pt-8 pb-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2)]">
          <textarea
            placeholder="メッセージを入力..."
            rows={2}
            className="scrollbar-soft max-h-64 resize-none border-0 bg-transparent px-4 pt-4 text-sm text-fg field-sizing-content placeholder:text-fg-subtle focus:outline-none"
          />
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-1">
              <IconButton aria-label="ファイル添付">
                <Plus className="size-4" />
              </IconButton>
              <Menu.Root positioning={{ placement: "top-start" }}>
                <Menu.Trigger asChild>
                  <button
                    type="button"
                    className="inline-flex h-8 cursor-pointer items-center gap-1 rounded-md px-2 text-xs text-fg-muted transition-colors hover:bg-hover hover:text-fg-soft data-[state=open]:bg-hover data-[state=open]:text-fg-soft"
                  >
                    Claude Sonnet 4.6
                    <ChevronDown className="size-3" />
                  </button>
                </Menu.Trigger>
                <Menu.Content className="min-w-64">
                  {MODELS.map((m) => (
                    <Menu.Item
                      key={m.value}
                      value={m.value}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm text-fg">{m.label}</span>
                        <span className="text-xs text-fg-muted">{m.desc}</span>
                      </div>
                      {m.value === CURRENT_MODEL && (
                        <Check className="size-4 text-fg-soft" />
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Root>
            </div>
            <IconButton
              aria-label="送信"
              className="bg-fg text-bg hover:bg-fg-soft"
            >
              <ArrowUp className="size-4" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
