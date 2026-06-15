import { useRef, useState } from "react";
import { Field } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

const VARIANTS = ["outline", "subtle", "flushed"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

export function TextareaDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Variants />
      <Sizes />
      <States />
      <AutoResize />
    </div>
  );
}

function Variants() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        3 variants (outline / subtle / flushed)。 Input と同じ map を踏襲。
        default は variant=outline / size=md。 flushed は px-3 固定。
      </p>
      <div className="flex flex-col gap-3">
        {VARIANTS.map((v) => (
          <div key={v} className="flex flex-col gap-1">
            <span className="text-xs text-fg-muted">{v}</span>
            <Textarea
              variant={v}
              placeholder={`variant=${v}`}
              className="max-w-md"
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
        4 sizes (xs / sm / md / lg)。 min-h-16 / 20 / 24 / 32 にスケール (resize-y
        で下方向に伸ばせる)。
      </p>
      <div className="flex flex-col gap-3">
        {SIZES.map((s) => (
          <div key={s} className="flex flex-col gap-1">
            <span className="text-xs text-fg-muted">{s}</span>
            <Textarea
              size={s}
              placeholder={`size=${s}`}
              className="max-w-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function States() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        invalid / disabled / readOnly の state demo。
      </p>
      <div className="flex flex-col gap-3">
        <Field.Root invalid className="max-w-md">
          <Field.Label>Bio</Field.Label>
          <Textarea defaultValue="@" invalid />
          <Field.ErrorText>Bio は @ で始められません。</Field.ErrorText>
        </Field.Root>
        <Textarea
          disabled
          defaultValue="この textarea は disabled です。"
          className="max-w-md"
        />
        <Textarea
          readOnly
          defaultValue="この textarea は readOnly。コピーは可能。"
          className="max-w-md"
        />
      </div>
    </div>
  );
}

function AutoResize() {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        auto-resize は API として持たない (YAGNI)。 chat input 等で必要なら
        ref + onChange で scrollHeight に追従する手書き。
      </p>
      <Textarea
        ref={ref}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          const el = ref.current;
          if (el) {
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
          }
        }}
        placeholder="改行するたび textarea が伸びます…"
        rows={1}
        className="max-w-md resize-none overflow-hidden"
      />
    </div>
  );
}
