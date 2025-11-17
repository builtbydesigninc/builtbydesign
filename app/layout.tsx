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
  title: "Spark - Design Agency",
  description: "Websites That Convert. A Design Partner That Sticks Around.",
  generator: "v0.app",
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
