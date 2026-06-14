import { Check, Copy, Filter, Plus, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover } from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <QuickAddPopover />
      <FilterPopover />
      <SharePopover />
    </div>
  );
}

function QuickAddPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="size-4" />
          New task
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-72 p-0">
        <div className="border-b border-border px-4 py-3">
          <h4 className="text-sm font-semibold text-fg">Add task</h4>
          <p className="text-xs text-fg-muted">Enter a title and press Save.</p>
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
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline" size="sm">
          <Filter className="size-4" />
          Status
          {selected.length > 0 && (
            <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-fg px-1 text-[10px] font-medium text-bg">
              {selected.length}
            </span>
          )}
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
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button size="sm">
          <Share2 className="size-4" />
          Share
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-80 p-0">
        <div className="border-b border-border px-4 py-3">
          <h4 className="text-sm font-semibold text-fg">Share link</h4>
          <p className="text-xs text-fg-muted">
            Anyone with this link can view.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-center gap-2">
            <Input value={url} readOnly className="flex-1 font-mono text-xs" />
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
  );
}
