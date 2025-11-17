"use client"

import { motion } from "framer-motion"
import TeamSection from "@/components/ui/team"
import { HoverButton } from "@/components/ui/hover-button"

export function TestimonialsSection() {
  const team = [
    {
      name: "Ashfaq Rahman",
      role: "CEO & Co-Founder",
      avatar: "/headshots/Ash.png",
      link: "#",
    },
    {
      name: "Muhammad Bin Sohail",
      role: "Lead Engineer & Product",
      avatar: "/headshots/Muhammad.png",
      link: "#",
    },
    {
      name: "Oliver Ibrahim",
      role: "Growth Lead",
      avatar: "/headshots/Oliver.png",
      link: "#",
    },
  ]

  return (
    <section className="py-32 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center lg:text-left">
            The Team
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p className="text-center lg:text-left">
              <span className="text-primary font-semibold">Brought to you by the team that built data from $50M in ad spend.</span>
            </p>
            <p className="text-center lg:text-left">
              Multiple 8-figure generation for clients. Scaled multiple businesses from 0-1, 1-10, 10-100.
            </p>
            <p className="text-center lg:text-left">
              With experience in multiple industries: Info-Coaching products, community building, talent acquisition, online ads, content generation & marketing, software development, pharma, and government contracts.
            </p>
            <p className="text-center lg:text-left">
              <span className="text-foreground font-semibold">We don't work with everyone.</span> We maintain a low client-to-POC ratio to deliver results fast at a higher quality.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TeamSection members={team} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Your MVP is in a week's reach. <span className="text-primary font-semibold">Apply now</span> →
          </p>
          <HoverButton>Book a Slot</HoverButton>
        </motion.div>
      </div>
    </section>
  )
}
