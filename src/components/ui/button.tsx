"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-heading font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer touch-manipulation [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#FF4D00] text-white hover:bg-[#FF7240] shadow-orange-glow-sm hover:shadow-orange-glow active:scale-[0.97]",
        outline:
          "border border-white/20 bg-transparent text-white hover:border-[#FF4D00] hover:text-[#FF4D00] active:scale-[0.97]",
        ghost:
          "bg-transparent text-white hover:bg-white/5 active:scale-[0.97]",
        mint:
          "bg-[#00E8A2] text-[#080B12] font-bold hover:bg-[#00C98C] active:scale-[0.97]",
        dark:
          "bg-white/8 border border-white/10 text-white hover:bg-white/12 hover:border-white/20 active:scale-[0.97]",
      },
      size: {
        default: "h-12 px-7 py-3 text-[15px] rounded-xl",
        sm: "h-9 px-5 text-sm rounded-lg",
        lg: "h-14 px-9 text-base rounded-xl",
        xl: "h-16 px-12 text-lg rounded-2xl",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
