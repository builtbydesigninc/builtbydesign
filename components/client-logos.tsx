import { LogoCloud } from "@/components/ui/logo-cloud-4"

export function ClientLogos() {
  const logos = [
    { src: "/logos/client-logos/cla-logo.png", alt: "CLA", size: "default", url: "https://ClinicLaunchAcademy.com" },
    { src: "/logos/client-logos/clearmeds.png", alt: "Clear Meds", size: "default", url: "https://ClearMeds.com" },
    { src: "/logos/client-logos/cloudhire.png", alt: "Cloud Hire", size: "large", url: "#" },
    { src: "/logos/client-logos/everwell.png", alt: "Everwell", size: "small", url: "https://EverwellUSA.com" },
    { src: "/logos/client-logos/growthaquisition.png", alt: "Growth Acquisition", size: "default", url: "https://GrowAcquisition.com" },
    { src: "/logos/client-logos/hvac.png", alt: "HVAC to Equity", size: "default", url: "https://hvactoequity.com" },
    { src: "/logos/client-logos/peptipharma.png", alt: "Peptipharma", size: "default", url: "https://PeptipharmaRX.com" },
    { src: "/logos/client-logos/thepeptidemarket.png", alt: "The Peptide Market", size: "small", url: "https://thePeptideMarket.com" },
  ]

  return (
    <section className="py-16">
      <div className="w-full">
        <h2 className="text-center mb-8">
          <span className="font-normal text-2xl md:text-3xl text-muted-foreground tracking-tight">
            Companies we have worked with
          </span>
        </h2>
        <LogoCloud logos={logos} />
      </div>
    </section>
  )
}
