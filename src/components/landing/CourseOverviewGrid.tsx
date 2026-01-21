import grundkursOverview from "@/assets/grundkurs-overview.png";

const CourseOverviewGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <img
          src={grundkursOverview}
          alt="Dr. Woeller - Grundkurs Strafrecht 2026: Übersicht der Handouts, Clips und Testfragen für alle 4 Module"
          className="w-full max-w-6xl mx-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default CourseOverviewGrid;
