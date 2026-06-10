import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type DivProps = HTMLAttributes<HTMLDivElement>;

function Root({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("rounded-lg border border-neutral-200 bg-white", className)}
      {...props}
    />
  );
}

function Header({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("flex flex-col gap-2 px-6 pt-8 pb-2", className)}
      {...props}
    />
  );
}

function Title({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold text-neutral-700", className)}
      {...props}
    />
  );
}

function Description({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm leading-normal text-neutral-500", className)}
      {...props}
    />
  );
}

function Body({ className, ...props }: DivProps) {
  return <div className={cn("px-6 py-6", className)} {...props} />;
}

function Footer({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("flex items-center px-6 pt-2 pb-6", className)}
      {...props}
    />
  );
}

export const Card = {
  Root,
  Header,
  Title,
  Description,
  Body,
  Footer,
};
