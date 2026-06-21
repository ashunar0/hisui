import { TagsInput } from "@/components/ui/tags-input";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export default function TagsInputValidateEmailDemo() {
  return (
    <div className="w-80">
      <TagsInput.Root
        defaultValue={["asahi@example.com"]}
        validate={(details) => EMAIL_RE.test(details.inputValue)}
      >
        <TagsInput.Label>Invite by email</TagsInput.Label>
        <TagsInput.Control>
          <TagsInput.Context>{renderItems}</TagsInput.Context>
          <TagsInput.Input placeholder="name@domain.com" type="email" />
        </TagsInput.Control>
        <span className="text-fg-muted text-xs">
          invalid な文字列は Enter しても無視される
        </span>
      </TagsInput.Root>
    </div>
  );
}
