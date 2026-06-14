import { RatingGroup as ArkRatingGroup } from "@ark-ui/react/rating-group";
import { Star } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  ...props
}: ComponentProps<typeof ArkRatingGroup.Root>) {
  return (
    <ArkRatingGroup.Root
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}

function Label({
  className,
  ...props
}: ComponentProps<typeof ArkRatingGroup.Label>) {
  return (
    <ArkRatingGroup.Label
      className={cn("text-sm font-medium text-fg-soft", className)}
      {...props}
    />
  );
}

function Control({
  className,
  ...props
}: ComponentProps<typeof ArkRatingGroup.Control>) {
  return (
    <ArkRatingGroup.Control
      className={cn(
        "flex w-fit items-center gap-1",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function Item({
  className,
  ...props
}: ComponentProps<typeof ArkRatingGroup.Item>) {
  return (
    <ArkRatingGroup.Item
      className={cn(
        "relative inline-flex cursor-pointer text-fg-subtle outline-none transition-colors",
        "focus-visible:ring-2 focus-visible:ring-fg/30 focus-visible:ring-offset-2",
        "data-disabled:cursor-not-allowed",
        "data-readonly:cursor-default",
        className,
      )}
      {...props}
    >
      <ArkRatingGroup.ItemContext>
        {(item) => (
          <>
            <Star className="size-6" strokeWidth={1.5} />
            {item.highlighted && (
              <Star
                className="absolute inset-0 size-6 fill-fg text-fg"
                strokeWidth={1.5}
                style={
                  item.half ? { clipPath: "inset(0 50% 0 0)" } : undefined
                }
              />
            )}
          </>
        )}
      </ArkRatingGroup.ItemContext>
    </ArkRatingGroup.Item>
  );
}

const Context = ArkRatingGroup.Context;
const HiddenInput = ArkRatingGroup.HiddenInput;

export const RatingGroup = {
  Root,
  Label,
  Control,
  Item,
  Context,
  HiddenInput,
};
