"use client"

import { motion } from "framer-motion"
import { FloatingHeader } from "@/components/floating-header"
import { CheckCircle2, Calendar, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <>
      <FloatingHeader />
      <main className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 border-2 border-primary mb-8"
          >
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            You're All Set!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Thank you for booking a call with Built By Design. We're excited to help bring your MVP to life!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-2xl p-8 border-2 border-primary/30 mb-8"
          >
            <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">What happens next?</h2>
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Check Your Email</h3>
                  <p className="text-muted-foreground">
                    You'll receive a confirmation email with all the details for your scheduled call.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Prepare for the Call</h3>
                  <p className="text-muted-foreground">
                    Think about your project goals, target users, and any specific features you have in mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">We'll Handle the Rest</h3>
                  <p className="text-muted-foreground">
                    During our call, we'll discuss your vision and create a roadmap to launch your MVP in 14 days.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4"
          >
            <Link
              href="/"
              className="inline-block text-primary hover:underline font-semibold"
            >
              ← Back to Home
            </Link>
            <p className="text-sm text-muted-foreground">
              Questions? Email us at{" "}
              <a href="mailto:hello@builtbydesign.com" className="text-primary hover:underline">
                hello@builtbydesign.com
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </>
  )
}

