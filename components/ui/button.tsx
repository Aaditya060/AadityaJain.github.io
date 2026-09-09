import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "text-[#0a0a0b] shadow-[0_8px_30px_-8px_var(--accent)] hover:brightness-110 hover:-translate-y-0.5",
        outline:
          "border border-white/15 bg-white/[0.03] text-zinc-100 hover:border-white/35 hover:bg-white/[0.06]",
        ghost: "text-zinc-300 hover:text-white hover:bg-white/[0.06]",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-4 text-[13px] rounded-lg",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, style, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      style={{ ...(variant === "primary" ? { backgroundColor: "var(--accent)" } : {}), ...style }}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
