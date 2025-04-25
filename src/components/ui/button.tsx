import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { hoverVariants } from "@/lib/animations"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const MotionButton = motion.button

// 1) Props when using asChild: only real HTML button props allowed.
// 2) Props when not asChild: include all Framer motion props.
type SlotButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild: true
  }

type MotionButtonProps = VariantProps<typeof buttonVariants> &
  Omit<HTMLMotionProps<"button">, "ref"> & {
    asChild?: false
  }

type ButtonProps = SlotButtonProps | MotionButtonProps

export function Button(props: ButtonProps) {
  const { variant, size, className } = props

  // —— asChild: forward only HTML button props into <Slot> —— 
  if (props.asChild) {
    // Remove our own props, leave only React.ButtonHTMLAttributes
    const { asChild, variant, size, className, ...slotProps } = props
    return (
      <Slot
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...slotProps}
      />
    )
  }

  // —— default (not-asChild): everything else is motion props —— 
  const { asChild, variant: _v, size: _s, className: _c, ...motionProps } = props
  return (
    <MotionButton
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...motionProps}
      // your standard hover/tap overrides
      whileHover={hoverVariants.button.hover}
      whileTap={hoverVariants.button.tap}
    />
  )
}
