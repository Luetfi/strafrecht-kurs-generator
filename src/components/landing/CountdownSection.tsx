import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Clock } from "lucide-react";

// Target date: March 1, 2026
const targetDate = new Date("2026-03-01T00:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const orderLink = "#"; // PLATZHALTER: Hier WooCommerce-Produktseite verlinken

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-8">
            <Clock className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-semibold">Begrenzte Teilnehmerzahl & ermäßigte Kursgebühr</span>
          </div>

          {/* Countdown Header */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
            Begrenzte Teilnehmerzahl & aktuell ermäßigte Kursgebühr für kurzen Zeitraum – melde dich bitte frühzeitig an
          </h2>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: "Tage" },
              { value: timeLeft.hours, label: "Stunden" },
              { value: timeLeft.minutes, label: "Minuten" },
              { value: timeLeft.seconds, label: "Sekunden" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 md:p-6"
              >
                <div className="text-3xl md:text-5xl font-bold text-secondary mb-1">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base opacity-75">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Why This Course Section */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-8 text-left">
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-6">
              Warum dieser Kurs für dich (in jeder Lernphase) wichtig ist:
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Kennst du das Geheimnis der <strong className="text-secondary">Prädikatsklausur</strong>, d.h. den Unterschied zwischen Einzelwissen, Systemwissen & Strukturverständnis?
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Warum schöpfen so viele Studenten ihr <strong className="text-secondary">Lernpotential</strong> immer noch nicht aus?
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">•</span>
                <span>
                  Was passiert, wenn die <strong className="text-secondary">effizienteste</strong> und ganz nebenbei <strong className="text-secondary">modernste Lerntechnik</strong> in unser bewährtes <strong className="text-secondary">modulares Erfolgssystem</strong> integriert wird?
                </span>
              </li>
            </ul>
            <p className="text-secondary font-semibold text-center">
              Wir erklären es dir in unserem Info-Clip und in weniger als 10 Minuten!
            </p>
          </div>

          {/* Pricing */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-lg mb-4">Sonderpreis für Frühbucher:</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-2xl line-through opacity-50">249 €</span>
              <span className="text-5xl md:text-6xl font-bold text-secondary">189 €</span>
            </div>
            <p className="text-sm opacity-75 mb-6">
              Einmalzahlung • Lebenslanger Zugang • Sofort verfügbar nach Kursstart
            </p>

            {/* Order Button */}
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto"
            >
              <a href={orderLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Kostenpflichtig bestellen
              </a>
            </Button>

            <p className="text-xs mt-4 opacity-50">
              [Button-Link Platzhalter: Hier deine WooCommerce-Produktseite verlinken]
            </p>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-75">
            <span>✓ Sichere Bezahlung</span>
            <span>✓ 14 Tage Widerrufsrecht</span>
            <span>✓ Sofort-Zugang nach Kursstart</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
