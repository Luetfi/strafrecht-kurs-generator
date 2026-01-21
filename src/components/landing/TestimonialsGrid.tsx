const testimonials = [
  "Ich habe das Strafrecht endlich verstanden",
  "Hohes Lernniveau",
  "Ausführlich & umfassend",
  "Es gibt nichts Besseres im Strafrecht",
  "Die Clips erwecken die Schaubilder zum Leben",
  "Die beste Investition in mein Jurastudium",
];

const TestimonialsGrid = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Was Teilnehmer sagen
          </h2>
        </div>

        {/* Testimonial Bubbles */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary flex items-center justify-center p-6 shadow-xl hover:scale-105 transition-transform"
              style={{
                marginTop: index % 2 === 0 ? '0' : '2rem',
              }}
            >
              <p className="text-secondary font-bold text-center text-sm md:text-base leading-tight">
                „{testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
