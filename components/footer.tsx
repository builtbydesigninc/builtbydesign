import Link from "next/link"
import { IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram, IconMail } from "@tabler/icons-react"

export function Footer() {
  return (
    <footer className="glass-header border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              {/* Mobile: Show only emblem */}
              <img 
                src="/logos/bbd-emblem.png" 
                alt="Built By Design" 
                className="h-9 w-auto md:hidden"
              />
              {/* Desktop: Show full word-mark */}
              <img 
                src="/logos/word-mark logo.png" 
                alt="Built By Design" 
                className="h-8 w-auto hidden md:block"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Have an idea for a MVP? Join the other founders who trusted us to bring their ideas to life.
            </p>
            <Link href="#hero">
              <button className="glass px-6 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all duration-300">
                Book a Slot
              </button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-muted-foreground hover:text-primary transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ready to build your MVP? Let's turn your idea into reality.
            </p>
            <a
              href="mailto:hello@builtbydesign.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-3"
            >
              <IconMail className="w-4 h-4" />
              hello@builtbydesign.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Built By Design. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <IconBrandTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <IconBrandInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
