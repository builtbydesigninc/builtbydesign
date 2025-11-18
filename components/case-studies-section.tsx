"use client"

import { motion } from "framer-motion"
import { HoverButton } from "@/components/ui/hover-button"
import CardSwap, { Card } from "@/components/ui/CardSwap"

export function CaseStudiesSection() {
  const projects = [
    {
      title: "CLA",
      description: "Training system for healthcare entrepreneurs",
      image: "/logos/client sites/cla.png",
      href: "https://ClinicLaunchAcademy.com",
    },
    {
      title: "Clear Meds",
      description: "Premium telehealth platform",
      image: "/logos/client sites/clearmeds.png",
      href: "https://EverwellUSA.com",
    },
    {
      title: "The Peptide Market",
      description: "E-commerce for research peptides",
      image: "/logos/client sites/thepeptidemarket.png",
      href: "https://thePeptideMarket.com",
    },
    {
      title: "Peptiful",
      description: "Pharmaceutical grade solutions",
      image: "/logos/client sites/peptiful.png",
      href: "https://PeptipharmaRX.com",
    },
    {
      title: "HVAC to Equity",
      description: "Business investment platform",
      image: "/logos/client sites/hvactoequity.png",
      href: "https://hvactoequity.com",
    },
    {
      title: "Everwell USA",
      description: "Complete wellness solutions",
      image: "/logos/client sites/everwell usa.png",
      href: "https://EverwellUSA.com",
    },
    {
      title: "CloudHire",
      description: "AI-powered recruitment platform",
      image: "/logos/client sites/cloudhire.png",
      href: "https://cloudhire.com",
    },
    {
      title: "GrowAcquisition",
      description: "Business growth & acquisition",
      image: "/logos/client sites/growacquisition.png",
      href: "https://growacquisition.com",
    },
  ]

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-16"
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            Our Projects
          </motion.h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-center lg:text-left max-w-3xl">
            <p>
              <span className="text-primary font-semibold">From telehealth platforms to e-commerce solutions</span>, we've built MVPs across diverse industries.
            </p>
            <p>
              Each project launched in <span className="text-foreground font-semibold">14 days or less</span>. Real products, real results.
            </p>
            <p>
              Your MVP team behind <span className="text-primary font-semibold">40+ successful product launches</span>.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Right: Card Stack - Centered on All Screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative min-h-[350px] lg:h-[500px] w-full flex items-center justify-center lg:col-start-2 overflow-x-hidden overflow-y-visible lg:overflow-visible pb-20 lg:pb-0"
          >
            <div className="w-full max-w-[280px] md:max-w-none">
              <CardSwap width={600} height={340} cardDistance={30} verticalDistance={40} delay={3500} pauseOnHover={true} easing="smooth">
              {projects.map((project, index) => (
                <Card key={index}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative overflow-hidden rounded-xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-contain bg-background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.description}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </CardSwap>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <HoverButton>Book a Slot</HoverButton>
        </motion.div>
      </div>
    </section>
  )
}

