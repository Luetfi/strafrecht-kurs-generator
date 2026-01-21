import { User } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(238,161,0,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(238,161,0,0.2),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                +++ Multisensorisches Lernen +++
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Strafrecht ist das einfachste Rechtsgebiet, wenn du es richtig lernst!
            </h1>

            {/* Quote */}
            <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-lg opacity-90">
              "Ich verstehe ehrlich gesagt nicht, wie man Strafrecht noch anders lernen kann – insbesondere, wie man den Stoff ohne dieses Konzept des Lernens mit Schaubildern, Hörbüchern und Videos abspeichern soll. Es ist quasi ein Rundum-Paket, welches dir Schritt für Schritt erklärt, wie du den Stoff strukturiert lernst und auch verstehst! Man baut sich einfach die beste Lerngrundlage, die möglich ist."
            </blockquote>
            <p className="text-sm opacity-75">— Erfahrungsbericht aus dem Grundkurs</p>

            {/* CTA Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-secondary/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <p className="text-secondary font-bold text-lg">Kursstart: 01.03.2026</p>
              </div>
              <div className="bg-secondary/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                <p className="text-secondary font-bold text-lg">Begrenzte Teilnehmerzahl!</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Placeholder Image Container */}
              <div className="w-64 h-80 md:w-80 md:h-96 bg-primary-foreground/10 rounded-2xl border-4 border-secondary/50 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                <div className="w-24 h-24 rounded-full bg-secondary/30 flex items-center justify-center">
                  <User className="w-12 h-12 text-secondary" />
                </div>
                <div className="text-center px-4">
                  <p className="font-semibold text-lg">Dr. Peter Woeller</p>
                  <p className="text-sm opacity-75 mt-1">[Bild-Platzhalter]</p>
                  <p className="text-xs opacity-50 mt-2">Hier kommt dein Foto</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
