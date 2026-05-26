import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "danger" | "gold";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            default:
              "bg-[#1a5c2a] hover:bg-[#0d3318] text-white shadow-sm hover:shadow-md",
            outline:
              "border-2 border-[#1a5c2a] text-[#1a5c2a] hover:bg-[#1a5c2a] hover:text-white",
            ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
            danger: "bg-red-500 hover:bg-red-600 text-white",
            gold: "bg-[#c8a000] hover:bg-[#e8c840] text-[#0d3318]",
          }[variant],
          {
            sm: "text-xs px-3 py-1.5",
            md: "text-sm px-4 py-2",
            lg: "text-base px-6 py-3",
          }[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
