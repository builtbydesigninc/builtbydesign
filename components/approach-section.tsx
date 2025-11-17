"use client"

import { motion } from "framer-motion"
import { HoverButton } from "@/components/ui/hover-button"

export function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We kick things off with a quick discovery call to understand your product idea, goals, and user needs. We focus on Discovery Call, Idea Planning, Roadmap Strategy.",
      tags: ["Discovery Call", "Idea Planning", "Roadmap", "Strategy"],
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We map out features, prioritize what to build first, and align the roadmap around fast validation and clear outcomes.",
      toolHighlight: {
        title: "Our In-House Tool",
        description: "This is our proprietary planning system to help you get started off the bat. We've perfected it based on hundreds of different projects.",
        image: "/launch.png",
      },
      tags: [],
    },
    {
      number: "03",
      title: "Code",
      description:
        "We use industry-standard AI tools like Lovable and Cursor to write clean, scalable code faster. Clean, scalable code, supercharged by AI.",
      tags: ["MVP IN 14 DAYS", "AI LEAD DEVELOPMENT", "SPEED TO MARKET"],
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Once launched, your product is ready to test with users, pitch to investors, or go to market with support from our team along the way. 3x Faster Execution.",
      tags: [],
    },
  ]

  return (
    <section id="process" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center lg:text-left mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mb-6"
          >
            <span className="text-foreground font-semibold">Move at Startup Speed</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl"
          >
            Our 4-step process is built for <span className="text-primary font-semibold">momentum</span>. We keep it lean, focused, and <span className="text-foreground font-semibold">validation-ready</span> so you can launch without delays.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary md:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"} md:w-1/2`}
                >
                  <div className="glass-card p-8 rounded-2xl border-2 border-primary/20 hover:scale-105 transition-all duration-300">
                    <h3 className="font-serif text-2xl md:text-3xl mb-4 font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                    
                    {step.toolHighlight && (
                      <div className={`mt-6 glass-card p-6 rounded-xl border border-primary/30 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <div className="flex flex-col gap-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-2 text-sm">{step.toolHighlight.title}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                              {step.toolHighlight.description}
                            </p>
                          </div>
                          <div className="rounded-lg overflow-hidden border border-primary/20">
                            <img 
                              src={step.toolHighlight.image} 
                              alt={step.toolHighlight.title}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {step.tags && step.tags.length > 0 && (
                      <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        {step.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="glass px-3 py-1 rounded-full border border-primary/30 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
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
