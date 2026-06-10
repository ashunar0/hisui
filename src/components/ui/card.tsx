import { createContext, type HTMLAttributes, useContext } from "react";
import { cn } from "@/lib/utils";

type DivProps = HTMLAttributes<HTMLDivElement>;

type CardSize = "sm" | "md" | "lg";
type CardVariant = "elevated" | "outline" | "subtle";

const CardContext = createContext<{ size: CardSize }>({ size: "md" });
const useCardContext = () => useContext(CardContext);

const variantClasses: Record<CardVariant, string> = {
  elevated:
    "bg-white border border-neutral-100 shadow-[0_1px_0_rgba(0,0,0,0.04),0_4px_8px_rgba(0,0,0,0.06),0_0_4px_rgba(0,0,0,0.03)]",
  outline: "bg-white border border-neutral-200",
  subtle: "bg-neutral-50",
};

const headerPadding: Record<CardSize, string> = {
  sm: "px-4 pt-6 pb-2",
  md: "px-6 pt-8 pb-2",
  lg: "px-8 pt-10 pb-2",
};

const bodyPadding: Record<CardSize, string> = {
  sm: "px-4 py-4",
  md: "px-6 py-6",
  lg: "px-8 py-8",
};

const footerPadding: Record<CardSize, string> = {
  sm: "px-4 pt-2 pb-4",
  md: "px-6 pt-2 pb-6",
  lg: "px-8 pt-2 pb-8",
};

type RootProps = DivProps & {
  variant?: CardVariant;
  size?: CardSize;
};

function Root({
  variant = "elevated",
  size = "md",
  className,
  ...props
}: RootProps) {
  return (
    <CardContext.Provider value={{ size }}>
      <div
        className={cn("rounded-lg", variantClasses[variant], className)}
        {...props}
      />
    </CardContext.Provider>
  );
}

function Header({ className, ...props }: DivProps) {
  const { size } = useCardContext();
  return (
    <div
      className={cn("flex flex-col gap-2", headerPadding[size], className)}
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
  const { size } = useCardContext();
  return <div className={cn(bodyPadding[size], className)} {...props} />;
}

function Footer({ className, ...props }: DivProps) {
  const { size } = useCardContext();
  return (
    <div
      className={cn("flex items-center", footerPadding[size], className)}
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
