"use client";

import { Boxes } from "lucide-react";
import Link from "next/link";

export default function OverviewFooter() {
  return (
    <footer className="flex items-center gap-2 border-t border-border pt-6 text-fg-muted text-xs">
      <Boxes className="size-3.5" />
      <span>
        開発用の playground は{" "}
        <Link href="/dev" className="underline hover:text-fg">
          Dev sandbox
        </Link>{" "}
        にある。
      </span>
    </footer>
  );
}