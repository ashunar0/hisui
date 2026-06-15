import { Mail, Search } from "lucide-react";
import { useState } from "react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const VARIANTS = ["outline", "subtle", "flushed"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

export function InputDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Variants />
      <Sizes />
      <States />
      <Composed />
    </div>
  );
}

function Variants() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        3 variants (outline / subtle / flushed)。 Chakra UI v3 と prop 互換。
        default は variant=outline / size=md。 flushed は size 関わらず px-3 で
        揃える (left edge と text を離す)。
      </p>
      <div className="flex flex-col gap-3">
        {VARIANTS.map((v) => (
          <div key={v} className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-xs text-fg-muted">{v}</span>
            <Input
              variant={v}
              placeholder={`variant=${v}`}
              className="max-w-xs"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Sizes() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        4 sizes (xs / sm / md / lg)。 h-7 / h-8 / h-10 / h-12 にスケール。 padding
        も連動 (flushed のみ px-3 固定)。
      </p>
      <div className="flex flex-col gap-3">
        {SIZES.map((s) => (
          <div key={s} className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-xs text-fg-muted">{s}</span>
            <Input size={s} placeholder={`size=${s}`} className="max-w-xs" />
          </div>
        ))}
      </div>
    </div>
  );
}

function States() {
  const [email, setEmail] = useState("invalid email");
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        invalid (aria-invalid + border-danger) / disabled (opacity-50 +
        cursor-not-allowed) / readOnly の各 state。 Chakra v3 流の prop 名 (Was
        isInvalid / isDisabled, now invalid / disabled)。
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="w-16 shrink-0 text-xs text-fg-muted">invalid</span>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            invalid
            placeholder="email"
            className="max-w-xs"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="w-16 shrink-0 text-xs text-fg-muted">disabled</span>
          <Input
            disabled
            defaultValue="readonly value"
            placeholder="disabled"
            className="max-w-xs"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="w-16 shrink-0 text-xs text-fg-muted">readOnly</span>
          <Input
            readOnly
            defaultValue="copy me"
            placeholder="readOnly"
            className="max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}

function Composed() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Field primitive と組合せて Label + HelperText / ErrorText を出す pattern
        と、 内側に icon を持つ Input (manual absolute) の合わせ技。
      </p>
      <div className="flex flex-col gap-4">
        <Field.Root className="max-w-sm">
          <Field.Label>Email</Field.Label>
          <Input type="email" placeholder="you@example.com" />
          <Field.HelperText>
            通知を受け取るアドレス。 後で変更可能。
          </Field.HelperText>
        </Field.Root>
        <Field.Root invalid className="max-w-sm">
          <Field.Label>Email</Field.Label>
          <Input type="email" defaultValue="not-an-email" />
          <Field.ErrorText>有効な email を入力してください。</Field.ErrorText>
        </Field.Root>
        <div className="relative max-w-sm">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-subtle" />
          <Input placeholder="Search..." className="pl-9" />
        </div>
        <div className="relative max-w-sm">
          <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-subtle" />
          <Input
            placeholder="email + icon"
            className="pl-9"
            variant="subtle"
          />
        </div>
      </div>
    </div>
  );
}
