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
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Was Teilnehmer sagen
          </h2>
        </div>

        {/* Testimonial Bubbles - Row 1 */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-full bg-secondary/20 blur-xl scale-90 group-hover:scale-100 transition-transform duration-300" />
              
              {/* Main bubble */}
              <div 
                className="relative w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-6 shadow-2xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-300 border-2 border-secondary/30"
              >
                <p className="text-secondary font-bold text-center text-sm md:text-base leading-snug">
                  „{testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Bubbles - Row 2 */}
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.slice(3, 6).map((testimonial, index) => (
            <div
              key={index + 3}
              className="group relative"
            >
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-full bg-secondary/20 blur-xl scale-90 group-hover:scale-100 transition-transform duration-300" />
              
              {/* Main bubble */}
              <div 
                className="relative w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-6 shadow-2xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-300 border-2 border-secondary/30"
              >
                <p className="text-secondary font-bold text-center text-sm md:text-base leading-snug">
                  „{testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
