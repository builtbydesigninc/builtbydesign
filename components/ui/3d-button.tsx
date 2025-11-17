"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { IconLoader2, type TablerIcon } from "@tabler/icons-react"

import { motion, type MotionProps } from "framer-motion"

const TABLER_ICON_STYLE = 14
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 border",
  {
    variants: {
      variant: {
        ai: "bg-indigo-500 text-white hover:bg-indigo-600 border-indigo-700 border-b-4 border-b-indigo-600 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        default:
          "bg-primary text-primary-foreground hover:bg-[oklch(0.78_0.055_168)] border-[oklch(0.65_0.05_172)] border-b-4 border-b-[oklch(0.70_0.05_170)] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        destructive:
          "bg-red-500 text-destructive-foreground hover:bg-red-600 border-red-700 border-b-4 border-red-600 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline: "border glass hover:glass-card border-primary/30 border-b-4 border-b-primary/40 hover:-translate-y-0.5",
        outline_destructive: "border text-red-500 glass hover:bg-red-950/20 border-red-600 border-b-4 border-b-red-500 hover:-translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary/40 border-b-4 hover:-translate-y-0.5",
        ghost: "hover:glass hover:text-accent-foreground",
        ghost_destructive: "bg-transparent text-red-500 hover:bg-red-950/20",
        link: "text-primary underline-offset-4 hover:underline",
        solid: "glass-card text-foreground hover:bg-[oklch(0.30_0.045_175)] border-primary/20 border-b-4 hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        xs: "h-8 rounded-md px-4 text-sm",
        icon: "h-10 w-10 border-b border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

type MotionButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  MotionProps

export interface ButtonProps extends MotionButtonPropsType {
  asChild?: boolean
  supportIcon?: TablerIcon
  leadingIcon?: TablerIcon
  isLoading?: boolean
  stretch?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      stretch = false,
      supportIcon = undefined,
      leadingIcon = undefined,
      isLoading = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const SupportIconRender = supportIcon ?? React.Fragment
    const LeadingIconRender = leadingIcon ?? React.Fragment
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }), stretch && "w-full")}
        ref={ref}
        {...props}
      >
        {isLoading ? <IconLoader2 {...TABLER_ICON_STYLE} className="animate-spin" /> : <></>}
        {!isLoading && supportIcon && <SupportIconRender {...TABLER_ICON_STYLE} />}
        {children}
        {leadingIcon && <LeadingIconRender {...TABLER_ICON_STYLE} />}
      </motion.button>
    )
  },
)
Button.displayName = "Button"

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "button-group flex flex-row overflow-hidden rounded-lg border w-fit divide-x",
        "*:rounded-none *:border-none",
        className,
      )}
      {...props}
    />
  )
})

ButtonGroup.displayName = "ButtonGroup"

export { Button, buttonVariants }
