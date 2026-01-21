import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ImageIcon } from "lucide-react";

const carouselSlides = [
  { id: 1, title: "Schaubild: Zueignung", description: "Visuelle Darstellung der Zueignungsdelikte" },
  { id: 2, title: "Schaubild: Strafrecht AT", description: "Übersicht Allgemeiner Teil" },
  { id: 3, title: "Schaubild: Vorsatz & Fahrlässigkeit", description: "Abgrenzung und Struktur" },
  { id: 4, title: "Schaubild: Rechtfertigungsgründe", description: "Notwehr, Notstand & mehr" },
  { id: 5, title: "Schaubild: Irrtümer", description: "Tatbestands- und Verbotsirrtum" },
  { id: 6, title: "Schaubild: Versuch & Rücktritt", description: "Prüfungsschema und Fallgruppen" },
  { id: 7, title: "Schaubild: Täterschaft & Teilnahme", description: "Abgrenzung und Aufbau" },
  { id: 8, title: "Schaubild: Körperverletzungsdelikte", description: "BT I Übersicht" },
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
                  <div className="aspect-[4/3] bg-card border-2 border-border rounded-xl flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <ImageIcon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary text-center mb-2">{slide.title}</h3>
                    <p className="text-xs text-muted-foreground text-center">{slide.description}</p>
                    <span className="text-xs text-secondary mt-3 font-medium">[Bild-Platzhalter]</span>
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
