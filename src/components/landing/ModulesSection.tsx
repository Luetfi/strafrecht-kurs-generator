import { BookOpen, Video, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const modules = [
  {
    id: 1,
    title: "Modul 1",
    subtitle: "Strafrecht AT I",
    description: "Tatbestandsmäßigkeit, Vorsatz, Fahrlässigkeit",
  },
  {
    id: 2,
    title: "Modul 2",
    subtitle: "Strafrecht AT II",
    description: "Rechtswidrigkeit, Schuld, Irrtümer, Versuch",
  },
  {
    id: 3,
    title: "Modul 3",
    subtitle: "Strafrecht BT I",
    description: "Vermögensdelikte, Eigentumsdelikte",
  },
  {
    id: 4,
    title: "Modul 4",
    subtitle: "Strafrecht BT II",
    description: "Leben & Körper, Urkunden, Straßenverkehr",
  },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Handouts",
    description: "Über 340 Seiten",
    details: "Prüfungsschemata, Gesamtschaubilder, Struktur-Übersichten",
  },
  {
    icon: Video,
    title: "Clips",
    description: "Über 60 Clips",
    details: "Einführungs-Clips, Themen-Clips, Abschluss-Clips",
  },
  {
    icon: HelpCircle,
    title: "Testfragen",
    description: "Über 100 Seiten",
    details: "Testfragen, Prüfungsbeispiele, Lösungen",
  },
];

const ModulesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Der Grundkurs Strafrecht 2026
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            4 Module für dein komplettes Strafrecht-Wissen – von den Grundlagen bis zu den Besonderheiten
          </p>
        </div>

        {/* 4 Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modules.map((module) => (
            <Card
              key={module.id}
              className="border-2 border-primary/20 hover:border-secondary transition-colors group"
            >
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/30 transition-colors">
                  <span className="text-secondary font-bold text-lg">{module.id}</span>
                </div>
                <CardTitle className="text-primary">{module.title}</CardTitle>
                <p className="text-secondary font-semibold">{module.subtitle}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3 Pillars */}
        <div className="bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Drei Säulen für deinen Lernerfolg
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">{pillar.title}</h4>
                <p className="text-secondary font-semibold mb-2">{pillar.description}</p>
                <p className="text-sm text-muted-foreground">{pillar.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
