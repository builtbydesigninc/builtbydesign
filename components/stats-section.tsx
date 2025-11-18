"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

export function StatsSection() {
  const traditionalModel = [
    "3-6 months to launch",
    "Outdated tech stacks",
    "Manual, slow processes",
    "Limited scalability",
    "No ongoing support",
    "High development costs",
    "Rigid workflows",
  ]

  const builtByDesignModel = [
    "Launch-ready MVPs in 14 days",
    "AI-powered development",
    "Scalable, modern tech stack",
    "Full-stack expertise",
    "Next.js, Supabase, TailwindCSS",
    "Continuous deployment",
    "Post-launch support included",
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center lg:text-left mb-4 leading-tight text-balance font-bold"
        >
          Why <motion.span 
            className="text-accent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
          >
            Built By Design
          </motion.span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center lg:text-left text-xl text-muted-foreground max-w-4xl mb-16 leading-relaxed"
        >
          <span className="text-foreground font-semibold">Too many founders waste months</span> just trying to get their MVP off the ground. We move faster, build leaner, and deliver <span className="text-primary font-semibold">a working product in under a month</span> so you can start <span className="text-foreground font-semibold">validating, not waiting.</span>
        </motion.p>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Models Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-8 border border-muted/30 bg-muted/20 opacity-60"
          >
            <h3 className="font-serif text-3xl font-bold mb-4 text-muted-foreground">Traditional Agencies</h3>
            <p className="text-muted-foreground/70 mb-8 text-sm">
              Slow Development, Outdated Processes
            </p>
            <div className="space-y-4">
              {traditionalModel.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Built By Design Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card rounded-3xl p-8 border-2 border-accent shadow-lg shadow-accent/30 hover:shadow-accent/40 transition-all duration-300"
          >
            <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">The Built By Design Model</h3>
            <p className="text-accent mb-8 text-sm font-semibold">
              AI-Driven Development System
            </p>
            <div className="space-y-4">
              {builtByDesignModel.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
