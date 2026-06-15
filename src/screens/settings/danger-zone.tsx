import { Button } from "@/components/ui/button";

export function DangerZone() {
  return (
    <div className="mt-10 rounded-md border border-danger-border p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-danger-fg">
            アカウント削除
          </span>
          <p className="text-xs text-fg-muted">
            この操作は取り消せません。すべてのデータが完全に削除されます。
          </p>
        </div>
        <Button colorPalette="danger">Delete account</Button>
      </div>
    </div>
  );
}
