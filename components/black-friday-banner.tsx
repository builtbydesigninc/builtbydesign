"use client"

import { useState, useEffect } from "react"
import { Banner } from "@/components/ui/banner"
import { Zap, ArrowRight } from "lucide-react"

export function BlackFridayBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Show banner after a brief delay for better UX
    const timer = setTimeout(() => setShow(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-5xl px-4 transition-all duration-500">
      <Banner
        show={show}
        onHide={() => setShow(false)}
        variant="default"
        size="lg"
        title="⚡ Black Friday: $500 OFF MVP + Landing Page"
        description="Launch before 2025. Limited to 5 slots only."
        showShade={true}
        closable={true}
        icon={<Zap className="size-5 text-primary animate-pulse" />}
        className="glass-card border-2 border-primary/50 text-foreground shadow-2xl"
        action={
          <a href="#pricing">
            <button className="inline-flex items-center gap-2 rounded-full bg-primary border-2 border-[oklch(0.65_0.05_172)] px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Claim Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </a>
        }
      />
    </div>
  )
}

