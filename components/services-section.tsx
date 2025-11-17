"use client"

import { motion } from "framer-motion"
import DisplayCards from "@/components/ui/display-cards"
import { Globe, Smartphone, Rocket, Bot } from "lucide-react"

export function ServicesSection() {
  const serviceCards = [
    {
      icon: <Smartphone className="size-4 text-orange-400" />,
      title: "Mobile App",
      description: "Cross-platform experiences",
      date: "iOS & Android",
      iconClassName: "text-orange-500",
      titleClassName: "text-orange-500",
      className:
        "[grid-area:stack] hover:-translate-y-20 hover:scale-105 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Bot className="size-4 text-orange-400" />,
      title: "AI SaaS",
      description: "Intelligent SaaS products",
      date: "AI-powered",
      iconClassName: "text-orange-500",
      titleClassName: "text-orange-500",
      className:
        "[grid-area:stack] translate-x-12 md:translate-x-16 translate-y-8 md:translate-y-10 hover:-translate-y-10 hover:scale-105 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Rocket className="size-4 text-orange-400" />,
      title: "Landing Page",
      description: "High-converting startup pages",
      date: "Ready in 7 days",
      iconClassName: "text-orange-500",
      titleClassName: "text-orange-500",
      className:
        "[grid-area:stack] translate-x-24 md:translate-x-32 translate-y-16 md:translate-y-20 hover:-translate-y-5 hover:scale-105 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Globe className="size-4 text-black" />,
      title: "Website Development",
      description: "Full-stack web applications",
      date: "Launch in 14 days",
      iconClassName: "text-black",
      titleClassName: "text-black",
      className:
        "[grid-area:stack] translate-x-36 md:translate-x-48 translate-y-24 md:translate-y-32 hover:translate-y-10 hover:scale-105 !bg-orange-500 !border-orange-500 [&>*>p]:!text-black [&>p]:!text-black",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center lg:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight"
          >
            We build every kind of MVP fast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            <span className="text-foreground font-semibold">Your product, your way.</span> Backed by 40+ successful launches.
          </motion.p>
        </div>

        {/* Display Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center min-h-[500px] md:min-h-[500px] min-h-[420px] overflow-hidden px-4"
        >
          <div className="scale-75 md:scale-100 origin-center">
            <DisplayCards cards={serviceCards} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

