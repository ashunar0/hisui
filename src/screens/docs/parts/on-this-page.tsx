import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";

type TocItem = { id: string; text: string };

export function OnThisPage() {
  const { pathname } = useLocation();
  const [items, setItems] = useState<TocItem[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    let observer: IntersectionObserver | undefined;
    // 描画後の DOM から section を収集 (レイアウト確定を 1 フレーム待つ)
    const raf = requestAnimationFrame(() => {
      const sections = Array.from(
        main.querySelectorAll<HTMLElement>("[data-doc-section]"),
      );
      setItems(
        sections.map((s) => ({ id: s.id, text: s.dataset.docSection ?? s.id })),
      );
      if (sections.length === 0) {
        setActive(null);
        return;
      }
      const visible = new Map<string, boolean>();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            visible.set(entry.target.id, entry.isIntersecting);
          }
          const firstVisible = sections.find((s) => visible.get(s.id));
          if (firstVisible) setActive(firstVisible.id);
        },
        { root: main, rootMargin: "0px 0px -70% 0px", threshold: 0 },
      );
      sections.forEach((s) => observer?.observe(s));
    });
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  if (items.length === 0) return null;

  return (
    <aside className="sticky top-12 hidden h-fit w-44 shrink-0 xl:block">
      <p className="mb-3 font-medium text-fg-muted text-sm">On this page</p>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={cn(
                "block border-l py-0.5 pl-3 text-sm",
                active === item.id
                  ? "border-fg font-medium text-fg"
                  : "border-border text-fg-muted hover:text-fg",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
