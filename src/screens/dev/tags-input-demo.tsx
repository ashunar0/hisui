import { TagsInput } from "@/components/ui/tags-input";

export function TagsInputDemo() {
  return (
    <div className="w-80">
      <TagsInput.Root defaultValue={["react", "typescript", "tailwind"]}>
        <TagsInput.Label>Skills</TagsInput.Label>
        <TagsInput.Control>
          <TagsInput.Context>
            {({ value }) =>
              value.map((tag, index) => (
                <TagsInput.Item key={index} index={index} value={tag}>
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{tag}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger />
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput />
                </TagsInput.Item>
              ))
            }
          </TagsInput.Context>
          <TagsInput.Input placeholder="Add skill..." />
        </TagsInput.Control>
      </TagsInput.Root>
      <p className="mt-2 text-xs text-fg-muted">Press Enter to add</p>
    </div>
  );
}
