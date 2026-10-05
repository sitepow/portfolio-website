import type { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type LogoBrandProps = Omit<ComponentProps<typeof Link>, "to"> & {
  to?: string;
  hideLogo?: boolean;
};

export function LogoBrand({ className, to = "/", ...props }: LogoBrandProps) {
  return (
    <Link
      to={to}
      className={cn(
        "text-white flex font-homeplace items-center gap-2.5 text-2xl font-bold tracking-tight select-none transition-opacity hover:opacity-90",
        className,
      )}
      {...props}
    >
      <div className="relative">
        <span>Teeraphat Saengkum</span>
        <span className="absolute -top-2.5 right-0 text-[10px] sm:text-xs font-medium tracking-normal uppercase">
          Portfolio
        </span>
      </div>
    </Link>
  );
}
