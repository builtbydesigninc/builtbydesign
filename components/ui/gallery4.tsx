"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/3d-button"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export interface Gallery4Item {
  id: string
  title: string
  description: string
  href: string
  image?: string
}

export interface Gallery4Props {
  title?: string
  description?: string
  items: Gallery4Item[]
}

const Gallery4 = ({ title = "Case Studies", description, items }: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }

    updateSelection()

    carouselApi.on("select", updateSelection)

    return () => {
      carouselApi.off("select", updateSelection)
    }
  }, [carouselApi])

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">{title}</h2>
            {description && <p className="max-w-lg text-muted-foreground text-lg">{description}</p>}
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev()
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto glass border border-primary/30 hover:bg-primary/10"
            >
              <ArrowLeft className="size-5 text-primary" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext()
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto glass border border-primary/30 hover:bg-primary/10"
            >
              <ArrowRight className="size-5 text-primary" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="max-w-[320px] pl-[20px] lg:max-w-[400px]">
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="group rounded-xl block">
                  <div className="group relative h-full min-h-[24rem] max-w-full overflow-hidden rounded-xl glass-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-start justify-end h-full p-8">
                      <div className="mb-3 pt-4 font-serif text-3xl font-bold text-foreground">
                        {item.title}
                      </div>
                      <div className="mb-8 text-muted-foreground leading-relaxed">{item.description}</div>
                      <div className="flex items-center text-sm text-primary font-semibold">
                        Visit site{" "}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-primary" : "bg-primary/20 hover:bg-primary/40"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Gallery4 }

