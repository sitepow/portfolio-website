import type { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-neutral-900/90">
      <Navbar />
      {children}
    </div>
  );
}
