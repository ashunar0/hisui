import { Button } from "@/components/ui/button";

export function DangerZone() {
  return (
    <div className="mt-10 rounded-md border border-rose-200 p-4 dark:border-rose-900/50">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-rose-700 dark:text-rose-400">
            アカウント削除
          </span>
          <p className="text-xs text-fg-muted">
            この操作は取り消せません。すべてのデータが完全に削除されます。
          </p>
        </div>
        <Button className="bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-600">
          Delete account
        </Button>
      </div>
    </div>
  );
}
