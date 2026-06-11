import { PinInput as ArkPinInput } from "@ark-ui/react/pin-input";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  placeholder = "",
  ...props
}: ComponentProps<typeof ArkPinInput.Root>) {
  return (
    <ArkPinInput.Root
      placeholder={placeholder}
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}

function Label({
  className,
  ...props
}: ComponentProps<typeof ArkPinInput.Label>) {
  return (
    <ArkPinInput.Label
      className={cn("text-sm font-medium text-fg-soft", className)}
      {...props}
    />
  );
}

function Control({
  className,
  ...props
}: ComponentProps<typeof ArkPinInput.Control>) {
  return (
    <ArkPinInput.Control
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function Input({
  className,
  ...props
}: ComponentProps<typeof ArkPinInput.Input>) {
  return (
    <ArkPinInput.Input
      className={cn(
        "size-10 rounded-md border border-border bg-surface text-center text-base font-medium tabular-nums text-fg outline-none transition-colors",
        "focus:border-fg focus:ring-2 focus:ring-fg/20",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "data-complete:border-fg",
        className,
      )}
      {...props}
    />
  );
}

const HiddenInput = ArkPinInput.HiddenInput;

export const PinInput = {
  Root,
  Label,
  Control,
  Input,
  HiddenInput,
};
