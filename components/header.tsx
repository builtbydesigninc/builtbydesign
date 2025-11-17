import Link from "next/link"
import { Button } from "@/components/ui/3d-button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logos/word-mark logo.png" 
              alt="Built By Design" 
              className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
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
          <Button className="rounded-full px-6">Book a Slot</Button>
        </div>
      </div>
    </header>
  )
}
