"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface TimelineContentProps {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  animationNum?: number
  timelineRef?: React.RefObject<HTMLElement>
  customVariants?: Variants
  className?: string
}

export function TimelineContent({
  children,
  as: Component = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
}: TimelineContentProps) {
  const localRef = useRef(null)
  const ref = timelineRef || localRef
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  const variants = customVariants || defaultVariants

  return (
    <motion.div
      ref={ref}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {Component === "div" ? children : <Component>{children}</Component>}
    </motion.div>
  )
}

