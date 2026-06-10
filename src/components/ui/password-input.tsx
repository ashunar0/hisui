import { PasswordInput as ArkPasswordInput } from "@ark-ui/react/password-input";
import { Eye, EyeOff } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type PasswordInputVariant = "outline" | "subtle" | "flushed";

type PasswordInputProps = ComponentProps<typeof ArkPasswordInput.Root> & {
  variant?: PasswordInputVariant;
  placeholder?: string;
  inputClassName?: string;
};

const variantClasses: Record<PasswordInputVariant, string> = {
  outline:
    "rounded-sm border border-border bg-surface px-3 focus:ring-2 focus:ring-fg-subtle",
  subtle:
    "rounded-sm border border-transparent bg-hover px-3 focus:bg-surface focus:ring-2 focus:ring-fg-subtle",
  flushed:
    "rounded-none border-b border-border bg-transparent px-0 focus:border-fg-soft",
};

function PasswordInput({
  variant = "outline",
  placeholder,
  inputClassName,
  className,
  ...props
}: PasswordInputProps) {
  return (
    <ArkPasswordInput.Root className={cn("w-full", className)} {...props}>
      <ArkPasswordInput.Control className="relative w-full">
        <ArkPasswordInput.Input
          placeholder={placeholder}
          className={cn(
            "flex h-10 w-full py-2 pr-10 text-sm text-fg placeholder:text-fg-subtle focus:outline-none",
            variantClasses[variant],
            inputClassName,
          )}
        />
        <ArkPasswordInput.VisibilityTrigger className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3 text-fg-subtle hover:text-fg-soft">
          <ArkPasswordInput.Indicator fallback={<Eye className="size-4" />}>
            <EyeOff className="size-4" />
          </ArkPasswordInput.Indicator>
        </ArkPasswordInput.VisibilityTrigger>
      </ArkPasswordInput.Control>
    </ArkPasswordInput.Root>
  );
}

export { PasswordInput };
