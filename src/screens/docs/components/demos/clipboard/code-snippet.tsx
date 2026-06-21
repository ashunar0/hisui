import { Clipboard } from "@/components/ui/clipboard";

export default function ClipboardCodeSnippetDemo() {
  return (
    <Clipboard.Root
      defaultValue={`import { Carousel } from "@/components/ui/carousel";`}
      className="w-full max-w-md gap-3 rounded-md border border-border bg-surface p-3"
    >
      <Clipboard.Label className="text-fg-muted text-xs">
        Import snippet
      </Clipboard.Label>
      <div className="overflow-hidden rounded-sm bg-active px-3 py-2">
        <Clipboard.ValueText className="block truncate text-xs" />
      </div>
      <Clipboard.Trigger className="inline-flex h-8 w-fit cursor-pointer items-center gap-2 self-end rounded-md border border-border bg-surface px-3 font-medium text-fg text-xs outline-none transition-colors hover:bg-hover">
        <Clipboard.Indicator />
        Copy
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
}
