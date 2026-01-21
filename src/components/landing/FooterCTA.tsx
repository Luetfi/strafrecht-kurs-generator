import { Button } from "@/components/ui/button";
import { ShoppingCart, ExternalLink } from "lucide-react";

const FooterCTA = () => {
  const orderLink = "#"; // PLATZHALTER: Hier WooCommerce-Produktseite verlinken
  const websiteLink = "https://www.dr-woeller.de"; // Hauptwebsite

  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Final CTA */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit, das Strafrecht zu meistern?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Starte jetzt mit dem Grundkurs Strafrecht 2026 und verstehe das Strafrecht endlich richtig.
          </p>

          {/* Order Button */}
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto mb-8"
          >
            <a href={orderLink} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Jetzt bestellen – nur 189 €
            </a>
          </Button>

          <p className="text-xs opacity-50 mb-8">
            [Button-Link Platzhalter: Hier deine WooCommerce-Produktseite verlinken]
          </p>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            {/* Website Link */}
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mb-6"
            >
              <ExternalLink className="w-4 h-4" />
              www.dr-woeller.de
            </a>

            {/* Info */}
            <div className="text-sm opacity-75 space-y-2">
              <p>Dr. Peter Woeller</p>
              <p>Fragen? Kontaktiere mich über die Hauptwebsite.</p>
            </div>

            {/* Copyright */}
            <p className="text-xs opacity-50 mt-6">
              © 2026 Dr. Peter Woeller. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
