import { TagsInput } from "@/components/ui/tags-input";

function renderItems({ value }: { value: string[] }) {
  return value.map((tag, index) => (
    <TagsInput.Item key={`${tag}-${index}`} index={index} value={tag}>
      <TagsInput.ItemPreview>
        <TagsInput.ItemText>{tag}</TagsInput.ItemText>
        <TagsInput.ItemDeleteTrigger />
      </TagsInput.ItemPreview>
      <TagsInput.ItemInput />
    </TagsInput.Item>
  ));
}

export default function TagsInputMaxCounterDemo() {
  return (
    <div className="w-80">
      <TagsInput.Root
        defaultValue={["product", "design", "engineering"]}
        max={5}
      >
        <div className="flex items-center justify-between">
          <TagsInput.Label>Channels</TagsInput.Label>
          <TagsInput.Context>
            {(api) => (
              <span className="text-fg-muted text-xs tabular-nums">
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
  );
}
