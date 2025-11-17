"use client"

import Link from "next/link"
import { HoverButton } from "@/components/ui/hover-button"
import GlassSurface from "@/components/ui/GlassSurface"

export function FloatingHeader() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <GlassSurface
        width="100%"
        height={72}
        borderRadius={50}
        backgroundOpacity={0.1}
        saturation={1.2}
        brightness={45}
        blur={14}
        opacity={0.95}
        className="border border-primary/20"
      >
        <div className="w-full px-6 py-2">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              {/* Mobile: Show only emblem */}
              <img
                src="/logos/bbd-emblem.png"
                alt="Built By Design"
                className="h-8 w-auto transition-all duration-300 group-hover:scale-105 md:hidden"
              />
              {/* Desktop: Show full word-mark */}
              <img
                src="/logos/word-mark logo.png"
                alt="Built By Design"
                className="h-7 w-auto transition-all duration-300 group-hover:scale-105 hidden md:block"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <Link href="#process" className="text-sm text-foreground hover:text-primary transition-colors">
                Process
              </Link>
              <Link href="#projects" className="text-sm text-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>

            {/* CTA Button */}
            <HoverButton className="px-6 py-2 text-sm">Book a Slot</HoverButton>
          </div>
        </div>
      </GlassSurface>
    </header>
  )
}

