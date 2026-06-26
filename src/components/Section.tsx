import { useLandingImages } from "@/hooks/use-landing-images";
import type { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  imageFolder?: string;
}

export function Section({ imageFolder, children }: SectionProps) {
  const { currentImage } = useLandingImages({ imageFolder });

  return (
    <div className="h-screen px-5 flex flex-col justify-center items-center w-full bg-neutral-900 relative">
      <div className="absolute inset-0 z-0">
        <div
          key={currentImage}
          className="animate-in fade-in absolute inset-0 size-full bg-cover bg-center opacity-40 duration-1000"
          style={{ backgroundImage: `url('${currentImage}')` }}
        />
      </div>

      <div className="z-10 space-y-5">{children}</div>
    </div>
  );
}
