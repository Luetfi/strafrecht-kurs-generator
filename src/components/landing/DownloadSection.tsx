import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const downloads = [
  {
    icon: FileText,
    title: "Kostenlose Leseproben",
    description: "Handout-Auszüge aus allen 4 Modulen zum Reinschnuppern",
    buttonText: "PDF herunterladen",
    link: "#", // Platzhalter-Link
  },
  {
    icon: FileText,
    title: "Weitere Informationen",
    description: "Detaillierte Informationen zum Grundkurs Strafrecht 2026",
    buttonText: "PDF herunterladen",
    link: "#", // Platzhalter-Link
  },
  {
    icon: Calendar,
    title: "Lernplan",
    description: "Strukturierter Lernplan für optimale Prüfungsvorbereitung",
    buttonText: "PDF herunterladen",
    link: "#", // Platzhalter-Link
    comingSoon: true,
  },
];

const DownloadSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Kostenlose Downloads
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Überzeuge dich selbst von der Qualität des Kursmaterials
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {downloads.map((download, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-secondary transition-colors text-center"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <download.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-primary">{download.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{download.description}</p>
                {download.comingSoon ? (
                  <Button variant="outline" disabled className="w-full">
                    Demnächst verfügbar
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    <a href={download.link} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      {download.buttonText}
                    </a>
                  </Button>
                )}
                <p className="text-xs text-muted-foreground">
                  [Link-Platzhalter - PDF hier verlinken]
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
