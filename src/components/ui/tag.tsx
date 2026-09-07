import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("inline-flex rounded-full border border-white/10 bg-white/[.03] px-2.5 py-1 text-xs text-[#b8b8b8]", className)}>{children}</span>;
}
