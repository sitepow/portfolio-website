import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"section"> {
  imageFolder?: string;
}

export function Section({
  imageFolder,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "p-5 flex flex-col justify-center items-center w-full bg-neutral-900 relative scroll-mt-20",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
