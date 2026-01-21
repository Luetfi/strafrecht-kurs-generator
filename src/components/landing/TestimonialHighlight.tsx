import { Quote } from "lucide-react";

const TestimonialHighlight = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icons */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
              <Quote className="w-8 h-8 text-secondary" />
            </div>
          </div>

          {/* Main Quote */}
          <blockquote className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            „Ich habe das Strafrecht endlich verstanden!"
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
              <span className="text-secondary font-bold">YS</span>
            </div>
            <div className="text-left">
              <p className="font-semibold">Yasmin S.</p>
              <p className="text-sm opacity-75">Jena</p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-secondary fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHighlight;
