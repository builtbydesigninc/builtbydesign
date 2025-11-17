"use client"

import { motion } from "framer-motion"
import { FloatingHeader } from "@/components/floating-header"

export default function ApplyPage() {
  return (
    <>
      <FloatingHeader />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Let's Get Started
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're going to ask you a few questions to better understand your project and vision. This helps us deliver exactly what you need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div 
              data-tf-live="01KA8AC3R5SCJJJY0WNSSBAHPX"
              data-tf-on-submit="window.location.href='/book'"
              style={{ width: "100%", height: "650px" }}
            ></div>
          </motion.div>
        </div>
      </main>
    </>
  )
}

