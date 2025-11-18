"use client"

import { HoverButton } from "@/components/ui/hover-button"
import { IconSparkles } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative glass-card rounded-3xl border-2 border-primary/30 shadow-2xl overflow-hidden"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: 180 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-6"
            >
              <IconSparkles className="w-8 h-8 text-primary" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">Need both?</span> <span className="text-accent">We've got you.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              We'll host your <span className="text-foreground font-semibold">custom landing page</span> at <span className="text-primary font-semibold">yourdomain.com</span> and your app at <span className="text-primary font-semibold">app.yourdomain.com</span> so you're <span className="text-foreground font-semibold">ready to go from day one.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <HoverButton>Book a Slot</HoverButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
