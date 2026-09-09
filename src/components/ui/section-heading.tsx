import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[.16em] text-[#8db7dc]">
          {eyebrow}
        </span>
      )}
      <h2 className="bg-linear-to-b from-white to-[#a8a8a8] bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-[#a8a8a8] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
