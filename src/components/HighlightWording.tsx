import type { PropsWithChildren } from "react";

interface HighlightWordingProps extends PropsWithChildren {
  url?: string;
}

export function HighlightWording({ url, children }: HighlightWordingProps) {
  return url ? (
    <a className="text-white underline" href={url} target="_blank">
      {children}
    </a>
  ) : (
    <span className="text-white">{children}</span>
  );
}
