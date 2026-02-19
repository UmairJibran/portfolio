import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-black uppercase transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-4 border-black",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-brutalist-yellow hover:text-black",
        destructive:
          "bg-brutalist-red text-white hover:bg-black hover:text-brutalist-red",
        outline:
          "bg-white text-black hover:bg-brutalist-yellow hover:text-black",
        secondary:
          "bg-brutalist-yellow text-black hover:bg-black hover:text-brutalist-yellow",
        ghost: "border-0 hover:bg-brutalist-yellow hover:text-black",
        link: "border-0 text-black underline decoration-4 hover:bg-brutalist-yellow",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
