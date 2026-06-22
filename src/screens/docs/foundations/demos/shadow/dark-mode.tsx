"use client";

const SHADOW_MID_DARK =
  "0 1px 0 rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.4), 0 0 4px rgba(0,0,0,0.2)";

export default function ShadowDarkMode() {
  return (
    <pre className="overflow-x-auto rounded-md border border-border bg-canvas p-3 font-mono text-[11px] text-fg-soft">
      {`dark:shadow-[${SHADOW_MID_DARK.replace(/\s/g, "_")}]`}
    </pre>
  );
}
