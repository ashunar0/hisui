import { Check, Copy, Filter, Plus, Share2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover } from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <div className="flex flex-col gap-8">
      <QuickAddPopover />
      <FilterPopover />
      <SharePopover />
    </div>
  );
}

function QuickAddPopover() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        quick add (Title + Description + Arrow + ArrowTip、autoFocus で Input
        フォーカス)
      </p>
      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="outline" size="sm">
              <Plus className="size-4" />
              New task
            </Button>
          </Popover.Trigger>
          <Popover.Content className="w-72 p-0">
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <div className="border-b border-border px-4 py-3">
              <Popover.Title>Add task</Popover.Title>
              <Popover.Description>
                Enter a title and press Save.
              </Popover.Description>
            </div>
            <form
              className="flex flex-col gap-4 p-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field.Root>
                <Field.Label>Title</Field.Label>
                <Input placeholder="Ship the new dashboard" autoFocus />
              </Field.Root>
              <div className="flex justify-end gap-2">
                <Popover.CloseTrigger asChild>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </Popover.CloseTrigger>
                <Popover.CloseTrigger asChild>
                  <Button size="sm" type="submit">
                    Save
                  </Button>
                </Popover.CloseTrigger>
              </div>
            </form>
          </Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
}

const FILTER_OPTIONS = [
  { value: "todo", label: "To do" },
  { value: "in-progress", label: "In progress" },
  { value: "done", label: "Done" },
  { value: "archived", label: "Archived" },
];

function FilterPopover() {
  const [selected, setSelected] = useState<string[]>(["todo", "in-progress"]);
  const toggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        filter (Trigger に Indicator chevron、open で 180° 回転 / Checkbox 複数選択 + count badge)
      </p>
      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="size-4" />
              Status
              {selected.length > 0 && (
                <Badge className="h-4 min-w-4 justify-center rounded-full p-0 text-[10px] leading-none">
                  {selected.length}
                </Badge>
              )}
              <Popover.Indicator>
                <svg
                  viewBox="0 0 12 12"
                  className="size-3 text-fg-muted"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" strokeLinecap="round" />
                </svg>
              </Popover.Indicator>
            </Button>
          </Popover.Trigger>
          <Popover.Content className="w-56 p-0">
            <div className="flex flex-col gap-2 px-3 py-3">
              {FILTER_OPTIONS.map((opt) => (
                <Checkbox.Root
                  key={opt.value}
                  checked={selected.includes(opt.value)}
                  onCheckedChange={() => toggle(opt.value)}
                >
                  <Checkbox.Control />
                  <Checkbox.Label>{opt.label}</Checkbox.Label>
                </Checkbox.Root>
              ))}
            </div>
            <div className="flex justify-between border-t border-border px-3 py-2">
              <button
                type="button"
                className="cursor-pointer text-xs text-fg-muted hover:text-fg"
                onClick={() => setSelected([])}
              >
                Clear
              </button>
              <Popover.CloseTrigger asChild>
                <Button size="sm">Apply</Button>
              </Popover.CloseTrigger>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
}

function SharePopover() {
  const [copied, setCopied] = useState(false);
  const url = "https://ui-lab.dev/booking/abc-123";
  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        share link (Title + Description sub-component で h4 / p を置き換え)
      </p>
      <div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button size="sm">
              <Share2 className="size-4" />
              Share
            </Button>
          </Popover.Trigger>
          <Popover.Content className="w-80 p-0">
            <div className="border-b border-border px-4 py-3">
              <Popover.Title>Share link</Popover.Title>
              <Popover.Description>
                Anyone with this link can view.
              </Popover.Description>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex items-center gap-2">
                <Input
                  value={url}
                  readOnly
                  className="flex-1 font-mono text-xs"
                />
                <Button variant="outline" size="sm" onClick={copy}>
                  {copied ? (
                    <>
                      <Check className="size-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-fg-muted">Link expires in 24 hours.</p>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
}
