import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { InlineCode } from "./code";
import { slugify } from "./slugify";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  return "";
}

const mdxComponents = {
  wrapper: (props: ComponentPropsWithoutRef<"div">) => (
    <div {...props} className={cn("docs-prose", props.className)} />
  ),
  h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <Heading as="h1" size="2xl" {...props}>
      {children}
    </Heading>
  ),
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => {
    const text = textOf(children);
    return (
      <Heading
        as="h2"
        size="sm"
        id={slugify(text)}
        data-doc-section={text}
        className="text-fg-soft scroll-mt-8"
        {...props}
      >
        {children}
      </Heading>
    );
  },
  code: (props: ComponentPropsWithoutRef<"code">) => <InlineCode {...props} />,
};

export { mdxComponents };
