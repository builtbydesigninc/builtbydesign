"use client"

export function PortfolioShowcase() {
  const portfolioItems = [
    {
      image: "/logos/client sites/cla.png",
      alt: "CLA Website"
    },
    {
      image: "/logos/client sites/clearmeds.png",
      alt: "Clear Meds Website"
    },
    {
      image: "/logos/client sites/peptiful.png",
      alt: "Peptiful Website"
    },
    {
      image: "/logos/client sites/thepeptidemarket.png",
      alt: "The Peptide Market Website"
    },
    {
      image: "/logos/client sites/hvactoequity.png",
      alt: "HVAC to Equity Website"
    },
    {
      image: "/logos/client sites/everwell usa.png",
      alt: "Everwell USA Website"
    },
  ]

  return (
    <section className="pt-4 pb-20 overflow-hidden">
      <div className="relative flex">
        {/* First set of images */}
        <div className="flex gap-6 animate-scroll-seamless">
          {portfolioItems.map((item, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg border-2 border-primary/20 glass-card">
                <img src={item.image || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-6 animate-scroll-seamless ml-6" aria-hidden="true">
          {portfolioItems.map((item, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0 w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg border-2 border-primary/20 glass-card">
                <img src={item.image || "/placeholder.svg"} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
