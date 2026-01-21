import { FileText, Video, HelpCircle, ImageIcon } from "lucide-react";

const modules = [
  { id: 1, title: "Strafrecht AT I", subtitle: "Modul 1" },
  { id: 2, title: "Strafrecht AT II", subtitle: "Modul 2" },
  { id: 3, title: "Strafrecht BT I", subtitle: "Modul 3" },
  { id: 4, title: "Strafrecht BT II", subtitle: "Modul 4" },
];

const pillars = [
  {
    id: 1,
    title: "Handouts",
    subtitle: "(über 340 Seiten)",
    description: "Strukturiert & verständlich:",
    features: ["Prüfungsschemata", "Gesamtschaubilder", "Klausurtypische Streitstände"],
    items: ["Handout AT I", "Handout AT II", "Handout BT I", "Handout BT II"],
    testimonial: "Die Handouts sind perfekt, um die Inhalte zu verstehen & im Gedächtnis zu behalten",
    icon: FileText,
  },
  {
    id: 2,
    title: "Clips",
    subtitle: "(Mehr als 60 Clips)",
    description: "Anschaulich & einprägsam:",
    features: ["Einführungs-/Abschluss-Clips", "Über 50 Themen-Clips", "Fragen & Antworten"],
    items: ["Clips AT I", "Clips AT II", "Clips BT I", "Clips BT II"],
    testimonial: "Die Clips erwecken die Schaubilder zum Leben - einmal gesehen und für immer verstanden",
    icon: Video,
  },
  {
    id: 3,
    title: "Testfragen",
    subtitle: "(Über 100 Seiten)",
    description: "Auf den Punkt & kompakt:",
    features: ["Testfragen", "Prüfungsbeispiele", "Abschlussbesprechung"],
    items: ["Testfragen AT I", "Testfragen AT II", "Testfragen BT I", "Testfragen BT II"],
    testimonial: "Die Beantwortung der Testfragen zeigten mir erst, dass ich das Thema richtig verstanden habe",
    icon: HelpCircle,
  },
];

const downloadLinks = [
  { text: "Kostenlose Leseproben Handouts – PDF", link: "#" },
  { text: "Weitere Informationen zum Grundkurs – PDF", link: "#" },
  { text: "Lernplan – PDF", link: "#" },
];

const CourseOverviewGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-secondary">Dr. Woeller</span>
            <span className="text-primary"> - Grundkurs Strafrecht 2026 </span>
            <span className="text-secondary">(Start 01. März 2026)</span>
          </h2>
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Lernziel:</span> Systemwissen & Strukturverständnis für Anfänger & Fortgeschrittene
          </p>
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Effektive Lernstrategie:</span> Lerne von Anfang an systematisch mit unserer einzigartigen visuell-konnektiven Lernmethode
          </p>
        </div>

        {/* Course Grid */}
        <div className="border-4 border-secondary rounded-xl overflow-hidden mb-8">
          {/* Header Row - Modules */}
          <div className="grid grid-cols-[200px_repeat(4,1fr)_200px] bg-primary text-primary-foreground">
            <div className="p-3 border-r border-secondary/30"></div>
            {modules.map((module) => (
              <div key={module.id} className="p-3 text-center border-r border-secondary/30">
                <h3 className="font-bold">{module.title}</h3>
                <p className="text-secondary text-sm">{module.subtitle}</p>
              </div>
            ))}
            <div className="p-3"></div>
          </div>

          {/* Content Rows - Pillars */}
          {pillars.map((pillar, pillarIndex) => (
            <div
              key={pillar.id}
              className={`grid grid-cols-[200px_repeat(4,1fr)_200px] ${
                pillarIndex % 2 === 0 ? "bg-muted" : "bg-card"
              }`}
            >
              {/* Pillar Info */}
              <div className="p-4 border-r border-secondary/30 border-t border-secondary/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-secondary font-bold">{pillar.id}.</span>
                  <h4 className="font-bold text-primary">{pillar.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{pillar.subtitle}</p>
                <p className="text-xs font-semibold text-primary mb-1">{pillar.description}</p>
                <ul className="text-xs text-secondary space-y-0.5">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Module Items */}
              {pillar.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 border-r border-secondary/30 border-t border-secondary/30 flex flex-col items-center justify-center"
                >
                  {/* Placeholder for actual content image */}
                  <div className="w-full aspect-[4/3] bg-card border border-border rounded-lg flex flex-col items-center justify-center mb-2 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                      <pillar.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] text-muted-foreground">[Platzhalter]</span>
                  </div>
                  <p className="text-xs text-center text-primary font-medium">{item}</p>
                </div>
              ))}

              {/* Testimonial */}
              <div className="p-4 border-t border-secondary/30 flex items-center">
                <p className="text-xs italic text-primary leading-relaxed">
                  &bdquo;{pillar.testimonial}&ldquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Download Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          {downloadLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.link}
              className="text-secondary hover:text-secondary/80 underline font-medium transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          [Link-Platzhalter – PDFs hier verlinken]
        </p>
      </div>
    </section>
  );
};

export default CourseOverviewGrid;
