import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
  size?: "small" | "default" | "large"
  url?: string
}

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[]
}

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative w-full bg-gradient-to-r from-background via-transparent to-background py-6">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-primary/20" />
      <InfiniteSlider gap={64} reverse speed={20} speedOnHover={60}>
        {logos.map((logo) => {
          const sizeClasses = {
            small: "h-6 md:h-8",
            default: "h-10 md:h-14",
            large: "h-12 md:h-16",
          }
          const heightClass = sizeClasses[logo.size || "default"]
          
          const LogoImage = (
            <img
              alt={logo.alt}
              className={`pointer-events-auto select-none opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${heightClass}`}
              height="auto"
              loading="lazy"
              src={logo.src}
              width="auto"
              style={{ objectFit: "contain", display: "block" }}
            />
          )
          
          return (
            <div key={`logo-wrapper-${logo.alt}`} className="flex items-center justify-center">
              {logo.url ? (
                <a 
                  href={logo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center"
                >
                  {LogoImage}
                </a>
              ) : (
                LogoImage
              )}
            </div>
          )
        })}
      </InfiniteSlider>
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
        direction="right"
      />
      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-primary/20" />
    </div>
  )
}
