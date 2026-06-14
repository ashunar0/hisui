import { ScrollArea } from "@/components/ui/scroll-area";

export function ScrollAreaDemo() {
  return (
    <div className="flex flex-col gap-8">
      <VerticalScroll />
      <HorizontalScroll />
      <BothAxesScroll />
    </div>
  );
}

const PARAGRAPHS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
];

function VerticalScroll() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-fg-muted">vertical (h-48)</p>
      <ScrollArea.Root className="h-48 w-full rounded-md border border-border">
        <ScrollArea.Viewport>
          <ScrollArea.Content className="flex flex-col gap-3 p-4 text-sm text-fg-soft">
            {PARAGRAPHS.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}

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

function HorizontalScroll() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-fg-muted">horizontal (chip rail)</p>
      <ScrollArea.Root className="w-full rounded-md border border-border">
        <ScrollArea.Viewport>
          <ScrollArea.Content className="flex w-max gap-2 p-3">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex h-7 items-center rounded-full border border-border bg-surface-sunken px-3 text-xs text-fg-soft"
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
    </div>
  );
}

function BothAxesScroll() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const rows = Array.from({ length: 12 }, (_, i) => `Region ${i + 1}`);
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-fg-muted">
        both axes (Corner で v/h scrollbar 交差点)
      </p>
      <ScrollArea.Root className="h-64 w-full rounded-md border border-border">
        <ScrollArea.Viewport>
          <ScrollArea.Content>
            <table className="w-max text-sm">
              <thead className="bg-surface-sunken text-left text-xs text-fg-muted uppercase">
                <tr>
                  <th className="sticky left-0 z-10 bg-surface-sunken px-3 py-2 font-medium">
                    Region
                  </th>
                  {months.map((m) => (
                    <th
                      key={m}
                      className="px-3 py-2 font-medium whitespace-nowrap"
                    >
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row} className="border-t border-border-muted">
                    <td className="sticky left-0 z-10 bg-surface px-3 py-2 text-fg-soft">
                      {row}
                    </td>
                    {months.map((m) => (
                      <td
                        key={m}
                        className="px-3 py-2 text-fg-soft whitespace-nowrap"
                      >
                        {(i + 1) * (months.indexOf(m) + 1) * 7}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </div>
  );
}
