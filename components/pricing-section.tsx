"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"
import { TimelineContent } from "@/components/ui/timeline-animation"
import { cn } from "@/lib/utils"
import NumberFlow from "@number-flow/react"
import { CheckCheck, Zap, Rocket, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

const plans = [
  {
    name: "Landing Page",
    description: "Design + Framer build for high-converting startup pages",
    price: 2497,
    deliveryTime: "1 week",
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    icon: <Rocket size={24} />,
    features: [
      { text: "Launch-ready in 7 days" },
      { text: "Figma-to-Framer delivery" },
      { text: "Fully responsive layout" },
    ],
    includes: [
      "Includes:",
      "Conversion-optimized UX",
      "Designed for pitch & validation",
      "Clean, scalable tech setup",
      "2 rounds of revisions",
    ],
  },
  {
    name: "MVP Development",
    description: "Full-stack MVP builds for ambitious startups and founders",
    price: 5497,
    deliveryTime: "14 days",
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    popular: true,
    icon: <Zap size={24} />,
    features: [
      { text: "Launch in 14 days" },
      { text: "AI-powered development" },
      { text: "Next.js + Supabase + Tailwind" },
    ],
    includes: [
      "Everything in LP, plus:",
      "Full-stack expertise",
      "Weekly strategy calls",
      "Post-launch support",
      "Continuous deployment",
      "Post-sales support for feedback iteration*",
    ],
  },
  {
    name: "Bump",
    description: "Great to run ads and validate your idea quickly",
    price: 1500,
    deliveryTime: "Add-on",
    buttonText: "Add to Plan",
    buttonVariant: "outline" as const,
    icon: <TrendingUp size={24} />,
    features: [
      { text: "Funnel design included" },
      { text: "Pixel setup & tracking" },
      { text: "Ad spend management up to $1,500" },
    ],
    includes: [
      "Marketing Add-on:",
      "Additional marketing services",
      "Campaign strategy & setup",
      "Performance monitoring",
      "Quick validation testing",
    ],
  },
]

export function PricingSection() {
  const pricingRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  }

  return (
    <section className="py-24 px-4 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto relative" ref={pricingRef}>
      <article className="text-center lg:text-left mb-12 space-y-6 max-w-3xl">
        <h2 className="md:text-6xl text-4xl font-serif font-bold text-foreground mb-4">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center lg:justify-start"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Pricing Plans
          </VerticalCutReveal>
        </h2>
        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="md:text-lg text-base text-muted-foreground"
        >
          <span className="text-foreground font-semibold">Ready to Ignite Your Idea?</span> Choose the perfect package for your project and <span className="text-primary font-semibold">get started today</span>.
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 gap-6 py-6">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={1 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative glass-card border-2 transition-all duration-300 ${
                plan.popular ? "border-primary shadow-lg shadow-primary/20 scale-105" : "border-primary/20"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg glass border border-primary/30">
                    <span className="text-primary">{plan.icon}</span>
                  </div>
                  {plan.popular && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-sm text-muted-foreground mr-1">Starting at</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground">$</span>
                    <span className="text-4xl font-bold gradient-text">
                      {plan.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-primary font-semibold">{plan.deliveryTime}</div>
              </CardHeader>
              <CardContent className="pt-0">
                <button
                  className={cn(
                    "w-full mb-6 p-4 text-base rounded-xl font-semibold transition-all duration-300",
                    plan.popular
                      ? "bg-primary text-primary-foreground border-2 border-primary hover:scale-105"
                      : "glass border-2 border-primary/30 text-primary hover:bg-primary/10"
                  )}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-primary/20">
                  <h4 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wide">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="h-5 w-5 bg-primary/10 border border-primary rounded-full grid place-content-center mt-0.5 mr-3 flex-shrink-0">
                          <CheckCheck className="h-3 w-3 text-primary" />
                        </span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          *Post-sales support for feedback iteration subject to charges based on complexity
        </p>
      </div>
    </section>
  )
}
