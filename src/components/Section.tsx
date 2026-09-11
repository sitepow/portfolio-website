import { useLandingImages } from "@/hooks/use-landing-images";
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
  const { currentImage } = useLandingImages({ imageFolder });

  return (
    <section
      className={cn(
        "min-h-screen px-5 flex flex-col py-10 justify-center items-center w-full bg-neutral-900 relative scroll-mt-20",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0">
        <div
          key={currentImage}
          className="animate-in fade-in absolute inset-0 size-full bg-cover bg-center opacity-40 duration-1000"
          style={{ backgroundImage: `url('${currentImage}')` }}
        />
      </div>

      <div className="z-10 space-y-5 md:min-w-3xl md:max-w-3xl">{children}</div>
    </section>
  );
}
