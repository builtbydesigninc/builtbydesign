"use client"

import { HoverButton } from "@/components/ui/hover-button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-40 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.05] mb-6 text-balance mt-12"
        >
          Build and Validate in{" "}
          <span className="gradient-text-mint">14 Days</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light"
        >
          From concept to clickable product, we handle strategy, design, and launch.
        </motion.p>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="glass-card rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
            <wistia-player media-id="iwn51pnx1c" aspect="1.7777777777777777"></wistia-player>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center"
        >
          <a href="/apply">
            <HoverButton>Book a Slot</HoverButton>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
