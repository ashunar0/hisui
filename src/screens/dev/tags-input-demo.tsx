import { TagsInput } from "@/components/ui/tags-input";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function renderItems({ value }: { value: string[] }) {
  return value.map((tag, index) => (
    <TagsInput.Item key={index} index={index} value={tag}>
      <TagsInput.ItemPreview>
        <TagsInput.ItemText>{tag}</TagsInput.ItemText>
        <TagsInput.ItemDeleteTrigger />
      </TagsInput.ItemPreview>
      <TagsInput.ItemInput />
    </TagsInput.Item>
  ));
}

export function TagsInputDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-80 flex-col gap-2">
        <span className="text-xs text-fg-muted">
          Skills + ClearTrigger (Enter で追加、 × で削除、 Clear all で全消し)
        </span>
        <TagsInput.Root defaultValue={["react", "typescript", "tailwind"]}>
          <TagsInput.Label>Skills</TagsInput.Label>
          <TagsInput.Control>
            <TagsInput.Context>{renderItems}</TagsInput.Context>
            <TagsInput.Input placeholder="Add skill..." />
          </TagsInput.Control>
          <div className="flex items-center justify-between">
            <span className="text-xs text-fg-muted">Press Enter to add</span>
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </div>
        </TagsInput.Root>
      </div>

      <div className="flex w-80 flex-col gap-2">
        <span className="text-xs text-fg-muted">
          email recipients + validate (email format でないと追加されない)
        </span>
        <TagsInput.Root
          defaultValue={["asahi@example.com"]}
          validate={(details) => EMAIL_RE.test(details.inputValue)}
        >
          <TagsInput.Label>Invite by email</TagsInput.Label>
          <TagsInput.Control>
            <TagsInput.Context>{renderItems}</TagsInput.Context>
            <TagsInput.Input
              placeholder="name@domain.com"
              type="email"
            />
          </TagsInput.Control>
          <span className="text-xs text-fg-muted">
            invalid な文字列は Enter しても無視される
          </span>
        </TagsInput.Root>
      </div>

      <div className="flex w-80 flex-col gap-2">
        <span className="text-xs text-fg-muted">
          max=5 + Context counter (上限到達で Input が disable)
        </span>
        <TagsInput.Root
          defaultValue={["product", "design", "engineering"]}
          max={5}
        >
          <div className="flex items-center justify-between">
            <TagsInput.Label>Channels</TagsInput.Label>
            <TagsInput.Context>
              {(api) => (
                <span className="text-xs tabular-nums text-fg-muted">
                  {api.value.length} / 5
                </span>
              )}
            </TagsInput.Context>
          </div>
          <TagsInput.Control>
            <TagsInput.Context>{renderItems}</TagsInput.Context>
            <TagsInput.Input placeholder="Add channel..." />
          </TagsInput.Control>
        </TagsInput.Root>
      </div>
    </div>
  );
}
