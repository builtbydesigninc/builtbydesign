import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Built By Design",
  description: "Launch your MVP in 14 days. AI-powered development for startups and founders. From concept to clickable product - we handle strategy, design, and launch.",
  keywords: ["MVP development", "startup development", "AI development", "14 days MVP", "landing page design", "Next.js", "Supabase", "TailwindCSS"],
  authors: [{ name: "Built By Design" }],
  creator: "Built By Design",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://builtbydesign.com",
    title: "Built By Design - MVP in 14 Days",
    description: "Launch your MVP in 14 days. AI-powered development for startups and founders.",
    siteName: "Built By Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built By Design - MVP in 14 Days",
    description: "Launch your MVP in 14 days. AI-powered development for startups and founders.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
        <Script src="https://fast.wistia.com/embed/iwn51pnx1c.js" strategy="afterInteractive" type="module" />
        <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive" />
        <style dangerouslySetInnerHTML={{
          __html: `wistia-player[media-id='iwn51pnx1c']:not(:defined) { 
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/iwn51pnx1c/swatch'); 
            display: block; 
            filter: blur(5px); 
            padding-top:56.25%; 
          }`
        }} />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
