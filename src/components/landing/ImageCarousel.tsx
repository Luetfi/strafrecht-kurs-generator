import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import bild1 from "@/assets/carousel/bild1.png";
import bild2 from "@/assets/carousel/bild2.png";
import bild3 from "@/assets/carousel/bild3.png";
import bild4 from "@/assets/carousel/bild4.png";
import bild5 from "@/assets/carousel/bild5.png";
import bild6 from "@/assets/carousel/bild6.png";
import bild7 from "@/assets/carousel/bild7.png";
import bild13 from "@/assets/carousel/bild13.png";
import bild14 from "@/assets/carousel/bild14.png";

const carouselSlides = [
  { id: 1, src: bild1, alt: "Schaubild 1 - Strafrecht Übersicht" },
  { id: 2, src: bild2, alt: "Schaubild 2 - Strafrecht Struktur" },
  { id: 3, src: bild3, alt: "Schaubild 3 - Tatbestandsmäßigkeit" },
  { id: 4, src: bild4, alt: "Schaubild 4 - Betrugsschema" },
  { id: 5, src: bild5, alt: "Schaubild 5 - Prüfungsschema" },
  { id: 6, src: bild6, alt: "Schaubild 6 - Vermögensdelikte" },
  { id: 7, src: bild7, alt: "Schaubild 7 - Tatbestände" },
  { id: 8, src: bild13, alt: "Schaubild 8 - Übersicht" },
  { id: 9, src: bild14, alt: "Schaubild 9 - Struktur" },
];

const ImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 4 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Visuell-konnektives Lernen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entdecke die einzigartige Lernmethode mit über 100 professionellen Schaubildern, 
            die komplexe Zusammenhänge verständlich machen.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselSlides.map((slide) => (
                <CarouselItem key={slide.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {carouselSlides.slice(0, 5).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
