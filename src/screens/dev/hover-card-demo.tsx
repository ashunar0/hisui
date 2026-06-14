import { CalendarDays, Info } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { HoverCard } from "@/components/ui/hover-card";

export function HoverCardDemo() {
  return (
    <div className="flex flex-col gap-8">
      <UserMentionCard />
      <LinkPreviewCard />
      <InlineHelpCard />
    </div>
  );
}

function UserMentionCard() {
  return (
    <p className="text-sm leading-relaxed text-fg-soft">
      Replying to{" "}
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <button
            type="button"
            className="cursor-pointer font-medium text-fg underline-offset-2 hover:underline"
          >
            @asahi
          </button>
        </HoverCard.Trigger>
        <HoverCard.Content className="w-72">
          <div className="flex items-start gap-3">
            <Avatar.Root size="lg">
              <Avatar.Fallback name="Asahi K" />
            </Avatar.Root>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-fg">Asahi K</span>
              <span className="text-xs text-fg-muted">@asahi</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-fg-soft">
            Building design systems and small SaaS apps. Tokens, primitives,
            and the occasional rant about shadcn aesthetics.
          </p>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-fg-muted">
            <CalendarDays className="size-3.5" />
            Joined March 2024
          </div>
          <div className="mt-3 flex gap-4 text-xs">
            <span className="text-fg-soft">
              <span className="font-semibold text-fg">128</span> Following
            </span>
            <span className="text-fg-soft">
              <span className="font-semibold text-fg">2,481</span> Followers
            </span>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>{" "}
      about the new design tokens — they look great in dark mode too.
    </p>
  );
}

function LinkPreviewCard() {
  return (
    <p className="text-sm leading-relaxed text-fg-soft">
      The Ark UI docs explain it best on{" "}
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <a
            href="https://ark-ui.com/react/docs/components/hover-card"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-fg underline decoration-fg-muted underline-offset-2 hover:decoration-fg"
          >
            their HoverCard page
          </a>
        </HoverCard.Trigger>
        <HoverCard.Content className="w-80 p-0">
          <div className="flex h-28 items-center justify-center rounded-t-md border-b border-border bg-surface-sunken">
            <span className="font-semibold tracking-tight text-fg-muted">
              ark-ui.com
            </span>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <span className="text-xs text-fg-muted">ark-ui.com</span>
            <span className="text-sm font-semibold text-fg">
              HoverCard — Ark UI
            </span>
            <span className="text-xs text-fg-soft">
              Show a card with extra information when the user hovers over a
              trigger element. Powered by zag-js state machines.
            </span>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
      .
    </p>
  );
}

function InlineHelpCard() {
  return (
    <div className="flex items-center gap-2 text-sm text-fg">
      <span>Annual recurring revenue</span>
      <HoverCard.Root openDelay={100} closeDelay={100}>
        <HoverCard.Trigger asChild>
          <button
            type="button"
            className="inline-flex size-5 cursor-pointer items-center justify-center rounded-full text-fg-muted hover:bg-hover hover:text-fg"
          >
            <Info className="size-3.5" />
            <span className="sr-only">About ARR</span>
          </button>
        </HoverCard.Trigger>
        <HoverCard.Content className="w-64">
          <h4 className="text-sm font-semibold text-fg">
            What counts as ARR?
          </h4>
          <p className="mt-1.5 text-xs text-fg-soft">
            Recurring revenue from active monthly and annual subscriptions,
            normalized to a yearly figure. One-time payments and refunds are
            excluded.
          </p>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  );
}
