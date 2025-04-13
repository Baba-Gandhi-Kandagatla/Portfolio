import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const MotionTextarea = motion.textarea

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <MotionTextarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-all duration-300 outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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

export { Textarea }
