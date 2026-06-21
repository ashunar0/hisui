import { ScrollArea } from "@/components/ui/scroll-area";

const TAGS = [
  "React",
  "Solid",
  "Vue",
  "Svelte",
  "Angular",
  "Preact",
  "Lit",
  "Qwik",
  "Astro",
  "Remix",
  "Next.js",
  "Nuxt",
  "SvelteKit",
  "SolidStart",
];

export default function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea.Root className="w-full rounded-md border border-border">
      <ScrollArea.Viewport>
        <ScrollArea.Content className="flex w-max gap-2 p-3">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-7 items-center rounded-full border border-border bg-surface-sunken px-3 text-fg-soft text-xs"
            >
              {tag}
            </span>
          ))}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
