"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; text: string };

function collectSections(root: ParentNode) {
  return Array.from(root.querySelectorAll<HTMLElement>("[data-doc-section]"));
}

function toTocItems(sections: HTMLElement[]): TocItem[] {
  return sections.map((s) => ({ id: s.id, text: s.dataset.docSection ?? s.id }));
}

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  const main = document.querySelector("main");
  if (!target || !main) return;
  const top =
    target.getBoundingClientRect().top -
    main.getBoundingClientRect().top +
    main.scrollTop;
  main.scrollTo({ top, behavior: "smooth" });
}

function createScrollSpy(
  root: HTMLElement,
  sections: HTMLElement[],
  onActive: (id: string) => void,
) {
  const visible = new Map<string, boolean>();
  const computeActive = () => {
    const atBottom =
      root.scrollTop + root.clientHeight >= root.scrollHeight - 4;
    if (atBottom) {
      onActive(sections[sections.length - 1].id);
      return;
    }
    const topmost = sections.find((s) => visible.get(s.id));
    if (topmost) onActive(topmost.id);
  };
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        visible.set(entry.target.id, entry.isIntersecting);
      }
      computeActive();
    },
    { root, rootMargin: "0px 0px -70% 0px", threshold: 0 },
  );
  for (const section of sections) observer.observe(section);
  root.addEventListener("scroll", computeActive, { passive: true });
  return () => {
    observer.disconnect();
    root.removeEventListener("scroll", computeActive);
  };
}

function useTableOfContents(initial: TocItem[]) {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>(initial);
  const [active, setActive] = useState<string | null>(initial[0]?.id ?? null);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    let teardownSpy: (() => void) | undefined;
    const raf = requestAnimationFrame(() => {
      const sections = collectSections(main);
      // mount 後に DOM scan で確定値に置き換える (initial が古い等のケース保険)
      const next = toTocItems(sections);
      setItems(next);
      setActive((curr) => curr ?? next[0]?.id ?? null);
      if (sections.length > 0) {
        teardownSpy = createScrollSpy(main, sections, setActive);
      }
    });
    return () => {
      cancelAnimationFrame(raf);
      teardownSpy?.();
    };
  }, [pathname]);

  return { items, active };
}

function TocLink({ item, active }: { item: TocItem; active: boolean }) {
  return (
    <a
      href={`#${item.id}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(item.id);
      }}
      className={cn(
        "-ml-0.5 block border-l-2 py-0.5 pl-3 text-sm",
        active
          ? "border-emerald-500 font-medium text-emerald-700 dark:text-emerald-400"
          : "border-transparent text-fg-muted hover:text-fg",
      )}
    >
      {item.text}
    </a>
  );
}

export function OnThisPage({
  initialItems = [],
}: {
  initialItems?: TocItem[];
}) {
  const { items, active } = useTableOfContents(initialItems);
  if (items.length === 0) return null;

  return (
    <aside className="sticky top-12 hidden h-fit w-44 shrink-0 xl:block">
      <p className="mb-3 font-medium text-fg-muted text-sm">On this page</p>
      <ul className="flex flex-col gap-2 border-l-2 border-border">
        {items.map((item) => (
          <li key={item.id}>
            <TocLink item={item} active={active === item.id} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
