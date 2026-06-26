import type { PropsWithChildren } from "react";

export function HighlightWording({ children }: PropsWithChildren) {
  return <span className="text-white">{children}</span>;
}
