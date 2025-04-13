import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const MotionInput = motion.input

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <MotionInput
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-all duration-300 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "hover:border-primary/50 hover:shadow-sm",
        className
      )}
      whileFocus={{ 
        scale: 1.01,
        transition: { duration: 0.3 } 
      }}
      {...props}
    />
  )
}

export { Input }
