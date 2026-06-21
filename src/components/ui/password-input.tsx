import { PasswordInput as ArkPasswordInput } from "@ark-ui/react/password-input";
import { Eye, EyeOff } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  ...props
}: ComponentProps<typeof ArkPasswordInput.Root>) {
  return (
    <ArkPasswordInput.Root
      className={cn("flex w-full flex-col gap-2", className)}
      {...props}
    />
  );
}

function Label({
  className,
  ...props
}: ComponentProps<typeof ArkPasswordInput.Label>) {
  return (
    <ArkPasswordInput.Label
      className={cn("block text-sm font-medium text-fg-soft", className)}
      {...props}
    />
  );
}

function Control({
  className,
  ...props
}: ComponentProps<typeof ArkPasswordInput.Control>) {
  return (
    <ArkPasswordInput.Control
      className={cn("relative w-full", className)}
      {...props}
    />
  );
}

function Input({
  className,
  ...props
}: ComponentProps<typeof ArkPasswordInput.Input>) {
  return (
    <ArkPasswordInput.Input
      className={cn(
        "flex h-10 w-full rounded-sm border border-border bg-surface px-3 py-2 pr-10 text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:ring-2 focus:ring-fg-subtle",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function VisibilityTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof ArkPasswordInput.VisibilityTrigger>) {
  return (
    <ArkPasswordInput.VisibilityTrigger
      className={cn(
        "absolute inset-y-0 right-0 flex cursor-pointer items-center px-3 text-fg-subtle hover:text-fg-soft",
        className,
      )}
      {...props}
    >
      {children ?? (
        <ArkPasswordInput.Indicator fallback={<Eye className="size-4" />}>
          <EyeOff className="size-4" />
        </ArkPasswordInput.Indicator>
      )}
    </ArkPasswordInput.VisibilityTrigger>
  );
}

const Indicator = ArkPasswordInput.Indicator;
const Context = ArkPasswordInput.Context;
const RootProvider = ArkPasswordInput.RootProvider;

export const PasswordInput = {
  Root,
  RootProvider,
  Label,
  Control,
  Input,
  VisibilityTrigger,
  Indicator,
  Context,
};
