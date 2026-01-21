import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Es gibt nichts Besseres im Strafrecht. Vom Umfang als auch vom Inhalt her konkurrenzlos.",
    author: "F.E.",
    location: "Deutschland",
  },
  {
    quote: "Hohes Lernniveau. Das große Wissen und viel Herzblut, das im GK steckt, merkt man auf jeder Seite!",
    author: "D.K.",
    location: "Berlin",
  },
  {
    quote: "Ausführlich & umfassend. Perfekt für Studierende, die das Strafrecht wirklich verstehen wollen.",
    author: "T.R.",
    location: "München",
  },
  {
    quote: "Die Clips erwecken die Schaubilder zum Leben. Endlich verstehe ich die Zusammenhänge!",
    author: "L.M.",
    location: "Hamburg",
  },
  {
    quote: "Die beste Investition in mein Jurastudium. Kann den Grundkurs nur empfehlen!",
    author: "S.H.",
    location: "Köln",
  },
  {
    quote: "Durch die Schaubilder und das visuell-konnektive Konzept habe ich mir das Strafrecht super leicht eingeprägt.",
    author: "A.W.",
    location: "Frankfurt",
  },
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
          <p className="text-muted-foreground">
            Echte Erfahrungen von echten Studierenden
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Quote className="w-5 h-5 text-secondary-foreground" />
              </div>

              {/* Quote Text */}
              <p className="text-foreground mb-4 pt-2 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.author}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Decorative Bubble Tail */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card border-r border-b border-border transform rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
