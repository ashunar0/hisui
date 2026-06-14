import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-8">
      <States />
      <Group />
      <SelectAll />
    </div>
  );
}

function States() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        states (default / checked / indeterminate / disabled / disabled+checked)
      </p>
      <div className="flex flex-col gap-2">
        <Checkbox.Root>
          <Checkbox.Control />
          <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root defaultChecked>
          <Checkbox.Control />
          <Checkbox.Label>Remember me on this device</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root checked="indeterminate">
          <Checkbox.Control />
          <Checkbox.Label>Select all (3 of 5 selected)</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root disabled>
          <Checkbox.Control />
          <Checkbox.Label>Disabled option</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root disabled defaultChecked>
          <Checkbox.Control />
          <Checkbox.Label>Disabled checked</Checkbox.Label>
        </Checkbox.Root>
      </div>
    </div>
  );
}

const CATEGORIES = [
  { value: "product", label: "Product updates" },
  { value: "engineering", label: "Engineering blog" },
  { value: "events", label: "Events & meetups" },
  { value: "research", label: "Research notes" },
];

function Group() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Checkbox.Group (value array で複数選択を一括管理、defaultValue で初期選択)
      </p>
      <Checkbox.Group defaultValue={["product", "engineering"]}>
        {CATEGORIES.map((cat) => (
          <Checkbox.Root key={cat.value} value={cat.value}>
            <Checkbox.Control />
            <Checkbox.Label>{cat.label}</Checkbox.Label>
          </Checkbox.Root>
        ))}
      </Checkbox.Group>
    </div>
  );
}

const TODOS = [
  { id: "1", label: "Design system tokens" },
  { id: "2", label: "Migrate Login screen to new primitives" },
  { id: "3", label: "Set up Storybook" },
  { id: "4", label: "Write contribution guide" },
];

function SelectAll() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    "1": true,
    "2": true,
    "3": false,
    "4": false,
  });

  const allCount = TODOS.length;
  const checkedCount = TODOS.filter((t) => checked[t.id]).length;
  const headerState: boolean | "indeterminate" =
    checkedCount === 0
      ? false
      : checkedCount === allCount
        ? true
        : "indeterminate";

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        select all (parent が indeterminate / all / none を反映、TODO 風 list で
        checked 時 strikethrough)
      </p>
      <div className="flex flex-col rounded-md border border-border bg-surface">
        <div className="flex items-center justify-between border-b border-border-muted px-3 py-2">
          <Checkbox.Root
            checked={headerState}
            onCheckedChange={(e) => {
              const next = e.checked === true;
              setChecked(
                Object.fromEntries(TODOS.map((t) => [t.id, next])),
              );
            }}
          >
            <Checkbox.Control />
            <Checkbox.Label className="text-xs font-medium uppercase tracking-wider text-fg-muted">
              All tasks
            </Checkbox.Label>
          </Checkbox.Root>
          <span className="text-[11px] text-fg-muted">
            {checkedCount} / {allCount}
          </span>
        </div>
        <div className="flex flex-col gap-2 px-3 py-2">
          {TODOS.map((todo) => (
            <Checkbox.Root
              key={todo.id}
              checked={checked[todo.id] ?? false}
              onCheckedChange={(e) =>
                setChecked((prev) => ({
                  ...prev,
                  [todo.id]: e.checked === true,
                }))
              }
            >
              <Checkbox.Control />
              <Checkbox.Label
                className={cn(
                  checked[todo.id] && "text-fg-muted line-through",
                )}
              >
                {todo.label}
              </Checkbox.Label>
            </Checkbox.Root>
          ))}
        </div>
      </div>
    </div>
  );
}
