"use client";

import { Avatar } from "@/components/ui/avatar";

const USERS = ["alice", "bob", "carol", "dan"];

export default function AvatarGroupDemo() {
  return (
    <div className="flex -space-x-2">
      {USERS.map((u) => (
        <Avatar.Root key={u} className="ring-2 ring-bg">
          <Avatar.Image src={`https://i.pravatar.cc/100?u=${u}`} alt={u} />
          <Avatar.Fallback name={u} />
        </Avatar.Root>
      ))}
      <Avatar.Root className="ring-2 ring-bg bg-surface-sunken">
        <Avatar.Fallback>
          <span className="text-xs">+3</span>
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
}
