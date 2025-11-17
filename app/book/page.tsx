"use client"

import { motion } from "framer-motion"
import { FloatingHeader } from "@/components/floating-header"

export default function BookPage() {
  return (
    <>
      <FloatingHeader />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Book Your Strategy Call
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Great! Now let's schedule a time to discuss your project in detail.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick a time that works best for you. We'll send you a confirmation email right away.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/1O0VPu5zHsJAoK49rihl"
              style={{ width: "100%", height: "800px", border: "none", borderRadius: "16px" }}
              scrolling="yes"
              id="1O0VPu5zHsJAoK49rihl_1234567890123"
              title="Book Your Strategy Call"
            ></iframe>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Can't find a good time?{" "}
              <a href="mailto:hello@builtbydesign.com" className="text-primary hover:underline">
                Email us directly
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

