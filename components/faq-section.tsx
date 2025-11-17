"use client"

import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { HoverButton } from "@/components/ui/hover-button"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do you code everything or use no-code/low-code tools?",
      answer:
        "Yes, we code everything from scratch using a modern AI-first tech stack: Next.js, Supabase, TailwindCSS, powered by tools like Cursor and Claude Code. We've experimented with low-code platforms before, but they're rarely scalable for real-world products. They also end up being slower to customize, especially when features grow. Thanks to AI, writing code is now faster than ever and gives you clean, scalable, and production-grade results.",
    },
    {
      question: "How long does MVP development take?",
      answer:
        "Our standard MVP development takes 14 days from start to launch. We move at startup speed, keeping development lean and focused on validation-ready features.",
    },
    {
      question: "What happens after the MVP is done?",
      answer:
        "Once launched, your product is ready to test with users, pitch to investors, or go to market. We provide ongoing support from our team along the way, including maintenance, optimization, and feature development.",
    },
    {
      question: "What's included in the MVP package?",
      answer:
        "The MVP package includes 60 hours of development time per month, flexible hours allocation, weekly strategy calls, priority feature development, continuous maintenance & optimization, and same-day emergency support.",
    },
    {
      question: "My product has 10–15 core features. Can we build all of them?",
      answer:
        "We map out features and prioritize what to build first, aligning the roadmap around fast validation and clear outcomes. We'll work with you to identify the core features that deliver the most value and build them in a scalable way.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer MVP Development (full-stack builds for startups), Landing Page Design (high-converting pages), Website Development, Mobile App Development, and AI SaaS products. All built with modern tech stacks and AI-powered development.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center lg:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            FAQs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-3"
          >
            <span className="text-foreground font-semibold">All your questions, answered</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know before <span className="text-primary font-semibold">building your MVP</span> with us.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card border-2 border-primary/20 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <IconChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform text-primary ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <HoverButton>Book a Slot</HoverButton>
        </motion.div>
      </div>
    </section>
  )
}
