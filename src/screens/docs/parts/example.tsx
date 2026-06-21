import { useState, type ReactNode } from "react";
import { SegmentGroup } from "@/components/ui/segment-group";
import { CodeBlock } from "./code";

type ExampleProps = {
  code: string;
  children: ReactNode;
};

/**
 * Preview / Code を SegmentGroup (枠外) で切替。 中身は border 付き box。
 */
export function Example({ code, children }: ExampleProps) {
  const [view, setView] = useState<"preview" | "code">("preview");
  return (
    <div className="flex flex-col gap-3">
      <SegmentGroup.Root
        value={view}
        onValueChange={(d) =>
          d.value && setView(d.value as "preview" | "code")
        }
        className="w-fit"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="preview">
          <SegmentGroup.ItemText>Preview</SegmentGroup.ItemText>
        </SegmentGroup.Item>
        <SegmentGroup.Item value="code">
          <SegmentGroup.ItemText>Code</SegmentGroup.ItemText>
        </SegmentGroup.Item>
      </SegmentGroup.Root>
      <div className="overflow-hidden rounded-lg border border-border">
        {view === "preview" ? (
          <div className="bg-surface p-6">{children}</div>
        ) : (
          <CodeBlock code={code} maxHeight="420px" />
        )}
      </div>
    </div>
  );
}
