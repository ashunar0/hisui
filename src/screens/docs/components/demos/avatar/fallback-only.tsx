"use client";

import { Avatar } from "@/components/ui/avatar";

export default function AvatarFallbackOnlyDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar.Root>
        <Avatar.Fallback name="Asahi K" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback name="Taro Yamada" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback>?</Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
}
