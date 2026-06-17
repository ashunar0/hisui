import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";

type TocItem = { id: string; text: string };

function collectSections(root: ParentNode) {
  return Array.from(root.querySelectorAll<HTMLElement>("[data-doc-section]"));
}

function toTocItems(sections: HTMLElement[]): TocItem[] {
  return sections.map((s) => ({ id: s.id, text: s.dataset.docSection ?? s.id }));
}

function scrollToSection(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** 表示中の section のうち最も上にあるものを active に流す observer */
function createScrollSpy(
  root: Element,
  sections: HTMLElement[],
  onActive: (id: string) => void,
) {
  const visible = new Map<string, boolean>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        visible.set(entry.target.id, entry.isIntersecting);
      }
      const topmost = sections.find((s) => visible.get(s.id));
      if (topmost) onActive(topmost.id);
    },
    { root, rootMargin: "0px 0px -70% 0px", threshold: 0 },
  );
  for (const section of sections) observer.observe(section);
  return observer;
}

/** main 内の DocSection を走査して目次 + 現在位置を返す */
function useTableOfContents() {
  const { pathname } = useLocation();
  const [items, setItems] = useState<TocItem[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    let spy: IntersectionObserver | undefined;
    // 描画後の DOM を読む (レイアウト確定を 1 フレーム待つ)
    const raf = requestAnimationFrame(() => {
      const sections = collectSections(main);
      setItems(toTocItems(sections));
      setActive(sections[0]?.id ?? null);
      if (sections.length > 0) spy = createScrollSpy(main, sections, setActive);
    });
    return () => {
      cancelAnimationFrame(raf);
      spy?.disconnect();
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
        "block border-l py-0.5 pl-3 text-sm",
        active
          ? "border-fg font-medium text-fg"
          : "border-border text-fg-muted hover:text-fg",
      )}
    >
      {item.text}
    </a>
  );
}

export function OnThisPage() {
  const { items, active } = useTableOfContents();
  if (items.length === 0) return null;

  return (
    <aside className="sticky top-12 hidden h-fit w-44 shrink-0 xl:block">
      <p className="mb-3 font-medium text-fg-muted text-sm">On this page</p>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <TocLink item={item} active={active === item.id} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
