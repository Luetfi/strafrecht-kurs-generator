const modules = [
  {
    id: 1,
    title: "Strafrecht AT I",
    subtitle: "Modul 1",
    topics: [
      "Grundlagen des Strafrechts",
      "Das vorsätzliche vollendete Begehungsdelikt",
      "Kausalität & Objektive Zurechnung",
      "Vorsatz",
      "Rechtswidrigkeit",
      "Schuld",
      "Fahrlässigkeitstat",
      "Erfolgsqualifikation",
      "Unterlassungstat",
    ],
  },
  {
    id: 2,
    title: "Strafrecht AT II",
    subtitle: "Modul 2",
    topics: [
      "Versuch – Systematik",
      "Tatentschluss &",
      "Unmittelbares Ansetzen",
      "Rücktritt",
      "Mittäterschaft",
      "Mittelbare Täterschaft",
      "Anstiftung",
      "Beihilfe",
      "Irrtümer",
      "Konkurrenzen",
    ],
  },
  {
    id: 3,
    title: "Strafrecht BT I",
    subtitle: "Modul 3",
    topics: [
      "Diebstahl (Regelbeispiele & Qualifikationen)",
      "Unterschlagung",
      "Betrug",
      "Computerbetrug",
      "Raub",
      "Räuberischer Diebstahl",
      "(Räuberische) Erpressung",
      "Sachbeschädigung",
      "Hehlerei",
    ],
  },
  {
    id: 4,
    title: "Strafrecht BT II",
    subtitle: "Modul 4",
    topics: [
      "Straftaten gegen das Leben – Systematik",
      "Mord & Totschlag",
      "Sterbehilfe",
      "Körperverletzungsdelikte",
      "Nötigung",
      "Beleidigungsdelikte",
      "Urkundenfälschung",
      "Brandstiftungsdelikte",
      "Straßenverkehrsdelikte",
    ],
  },
];

const ModulesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            NEU: Strafrecht AT und BT in <span className="text-secondary">4 Modulen</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Neues Lernen: Mit System & unserer visuell-konnektiven Lernmethode:
          </p>
        </div>

        {/* 4 Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-primary rounded-xl overflow-hidden shadow-lg border-4 border-secondary"
            >
              {/* Module Header */}
              <div className="bg-primary px-4 py-4 text-center border-b border-primary-foreground/20">
                <h3 className="text-primary-foreground font-bold text-lg">
                  {module.title}
                </h3>
                <p className="text-secondary font-semibold">{module.subtitle}</p>
              </div>

              {/* Topics List */}
              <div className="bg-primary px-4 py-4">
                <ol className="space-y-1.5">
                  {module.topics.map((topic, index) => (
                    <li
                      key={index}
                      className="text-primary-foreground text-sm flex gap-2"
                    >
                      <span className="text-secondary font-semibold min-w-[20px]">
                        {index + 1}.
                      </span>
                      <span className="opacity-90">{topic}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        {/* Info Boxes */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-muted rounded-xl p-6">
            <p className="text-foreground">
              <span className="text-secondary font-bold">Effektive Lernstrategie:</span>{" "}
              Im Grundkurs 2026 kombinieren wir unsere neue{" "}
              <span className="font-semibold">Lernstrategie</span> mit unserem modularen{" "}
              <span className="font-semibold">Erfolgssystem!</span>
            </p>
          </div>
          <div className="bg-muted rounded-xl p-6">
            <p className="text-foreground">
              <span className="text-secondary font-bold">Vermeide Fehlerquellen!</span>{" "}
              Als langjähriger Korrektor fiel mir schnell auf, dass Studenten oft dieselben Fehler
              machen. Dies vermeidest du v.a. durch{" "}
              <span className="font-semibold">Systemwissen & Strukturverständnis</span> als deine
              wichtigsten Schlüssel zur Prädikatsklausur. Gute Juristen sind nicht unbedingt
              intelligenter, aber sie lernen jedenfalls effizienter!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
