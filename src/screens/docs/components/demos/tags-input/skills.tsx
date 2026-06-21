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

export default function TagsInputSkillsDemo() {
  return (
    <div className="w-80">
      <TagsInput.Root defaultValue={["react", "typescript", "tailwind"]}>
        <TagsInput.Label>Skills</TagsInput.Label>
        <TagsInput.Control>
          <TagsInput.Context>{renderItems}</TagsInput.Context>
          <TagsInput.Input placeholder="Add skill..." />
        </TagsInput.Control>
        <div className="flex items-center justify-between">
          <span className="text-fg-muted text-xs">Press Enter to add</span>
          <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
        </div>
      </TagsInput.Root>
    </div>
  );
}
