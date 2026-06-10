import { Switch } from "@/components/ui/switch";

const ITEMS = [
  {
    label: "メール",
    desc: "重要な更新をメールで受け取る",
    defaultChecked: true,
  },
  {
    label: "Push",
    desc: "ブラウザ通知でリアルタイムに",
    defaultChecked: false,
  },
  {
    label: "ダイジェスト",
    desc: "週次まとめを月曜の朝に",
    defaultChecked: true,
  },
];

export function Notifications() {
  return (
    <div className="flex flex-col gap-4 border-b border-border py-6">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">通知</span>
        <p className="text-xs text-fg-muted">どうやって受け取るか</p>
      </div>
      <div className="flex flex-col">
        {ITEMS.map(({ label, desc, defaultChecked }) => (
          <Switch.Root
            key={label}
            defaultChecked={defaultChecked}
            className="flex items-center justify-between gap-4 border-border-muted border-t py-3 first:border-0 first:pt-0"
          >
            <div className="flex flex-col gap-0.5">
              <Switch.Label className="text-fg">{label}</Switch.Label>
              <p className="text-xs text-fg-muted">{desc}</p>
            </div>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch.Root>
        ))}
      </div>
    </div>
  );
}
