import { BookOpen, Video, HelpCircle } from "lucide-react";
import moduleOverviewImage from "@/assets/module-overview.png";

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

        {/* 4 Modules Image */}
        <div className="mb-16">
          <img
            src={moduleOverviewImage}
            alt="Übersicht der 4 Module: Strafrecht AT I, AT II, BT I, BT II mit detaillierten Inhalten"
            className="w-full max-w-5xl mx-auto rounded-xl shadow-lg"
          />
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
