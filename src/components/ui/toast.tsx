import {
  Toast as ArkToast,
  Toaster as ArkToaster,
  createToaster,
} from "@ark-ui/react/toast";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Loader2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const toaster = createToaster({
  placement: "bottom-end",
  max: 3,
});

const iconByType = {
  success: <CheckCircle2 className="size-4 text-emerald-600" />,
  error: <AlertCircle className="size-4 text-red-600" />,
  warning: <AlertTriangle className="size-4 text-amber-600" />,
  info: <Info className="size-4 text-sky-600" />,
  loading: <Loader2 className="size-4 animate-spin text-fg-muted" />,
} as const;

type ToastType = keyof typeof iconByType;

export function Toaster() {
  return (
    <ArkToaster toaster={toaster}>
      {(toast) => {
        const icon =
          toast.type && toast.type in iconByType
            ? iconByType[toast.type as ToastType]
            : null;
        return (
          <ArkToast.Root
            className={cn(
              "flex w-80 gap-3 rounded-md border border-border bg-surface p-4",
              "shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_0_4px_rgba(0,0,0,0.03)]",
              "[translate:var(--x)_var(--y)] opacity-[var(--opacity)]",
              "transition-[opacity,translate,scale] duration-200 ease-out",
            )}
          >
            {icon ? <div className="pt-0.5">{icon}</div> : null}
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              {toast.title ? (
                <ArkToast.Title className="text-sm font-medium text-fg">
                  {toast.title}
                </ArkToast.Title>
              ) : null}
              {toast.description ? (
                <ArkToast.Description className="text-xs text-fg-muted">
                  {toast.description}
                </ArkToast.Description>
              ) : null}
            </div>
            <ArkToast.CloseTrigger className="shrink-0 cursor-pointer self-start rounded-sm text-fg-muted transition-colors hover:text-fg">
              <X className="size-4" />
            </ArkToast.CloseTrigger>
          </ArkToast.Root>
        );
      }}
    </ArkToaster>
  );
}
