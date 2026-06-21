import {
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from "react";
import type { BundledLanguage } from "shiki";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { CodeBlock, InlineCode } from "./code";
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
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
    if (className?.startsWith("language-")) return <code className={className} {...props} />;
    return <InlineCode className={className} {...props} />;
  },
  pre: ({ children }: ComponentPropsWithoutRef<"pre">) => {
    if (!isValidElement(children)) return <pre>{children}</pre>;
    const codeEl = children as ReactElement<{
      className?: string;
      children?: ReactNode;
    }>;
    const className = codeEl.props.className ?? "";
    const langMatch = className.match(/language-(\w+)/);
    const lang = (langMatch?.[1] as BundledLanguage | undefined) ?? "tsx";
    const code = textOf(codeEl.props.children).replace(/\n$/, "");
    return <CodeBlock code={code} lang={lang} />;
  },
};

export { mdxComponents };
