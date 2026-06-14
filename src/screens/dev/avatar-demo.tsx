import { User } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-col gap-8">
      <SizeRow />
      <ShapeAndFallbackRow />
      <AvatarGroup />
    </div>
  );
}

const SIZES = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

function SizeRow() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">sizes (xs / sm / md / lg / xl / 2xl)</p>
      <div className="flex flex-wrap items-end gap-3">
        {SIZES.map((size) => (
          <div key={size} className="flex flex-col items-center gap-1">
            <Avatar.Root size={size}>
              <Avatar.Fallback name="あさひ" />
            </Avatar.Root>
            <span className="text-[10px] text-fg-muted">{size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShapeAndFallbackRow() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        shapes (circle / rounded / square) と fallback variations
      </p>
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex flex-col items-center gap-1">
          <Avatar.Root>
            <Avatar.Image
              src="https://i.pravatar.cc/100?img=12"
              alt="from pravatar"
            />
            <Avatar.Fallback name="Asahi K" />
          </Avatar.Root>
          <span className="text-[10px] text-fg-muted">image + initials fallback</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar.Root>
            <Avatar.Image src="broken-url" alt="will fail" />
            <Avatar.Fallback name="Asahi K" />
          </Avatar.Root>
          <span className="text-[10px] text-fg-muted">broken src → initials</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar.Root shape="rounded">
            <Avatar.Fallback name="Acme Inc" />
          </Avatar.Root>
          <span className="text-[10px] text-fg-muted">rounded (team)</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar.Root shape="square" className="bg-surface-sunken text-fg-soft">
            <Avatar.Fallback>
              <User className="size-5" />
            </Avatar.Fallback>
          </Avatar.Root>
          <span className="text-[10px] text-fg-muted">square + icon child</span>
        </div>
      </div>
    </div>
  );
}

const MEMBERS = [
  { name: "Asahi K", src: "https://i.pravatar.cc/64?img=12" },
  { name: "Bea Liu", src: "https://i.pravatar.cc/64?img=32" },
  { name: "Carlos M", src: "https://i.pravatar.cc/64?img=45" },
  { name: "Dana R", src: "https://i.pravatar.cc/64?img=5" },
];

function AvatarGroup() {
  const extra = 8;
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        avatar group (重ね合わせ + ring で背景と分離、+N more)
      </p>
      <div className="flex items-center -space-x-2">
        {MEMBERS.map((member) => (
          <Avatar.Root
            key={member.name}
            size="sm"
            className="ring-2 ring-surface"
          >
            <Avatar.Image src={member.src} alt={member.name} />
            <Avatar.Fallback name={member.name} />
          </Avatar.Root>
        ))}
        <Avatar.Root
          size="sm"
          className="bg-surface-sunken text-fg-soft ring-2 ring-surface"
        >
          <Avatar.Fallback>+{extra}</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </div>
  );
}
