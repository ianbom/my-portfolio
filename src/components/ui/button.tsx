import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export function buttonStyles(
  variant: ButtonProps["variant"] = "primary",
  className?: string,
) {
  return cn(
    "inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-white/30",
    variant === "primary" && "bg-[#fafafa] text-[#141414] hover:bg-[#e8e8e8]",
    variant === "outline" &&
      "border border-white/10 bg-transparent text-white hover:bg-white/5",
    variant === "ghost" && "bg-transparent text-white hover:bg-white/5",
    className,
  );
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonStyles(variant, className),
        "disabled:pointer-events-none disabled:opacity-50",
      )}
      {...props}
    />
  );
}
