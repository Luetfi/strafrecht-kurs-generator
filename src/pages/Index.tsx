import HeroSection from "@/components/landing/HeroSection";
import ImageCarousel from "@/components/landing/ImageCarousel";
import TestimonialHighlight from "@/components/landing/TestimonialHighlight";
import CourseOverviewGrid from "@/components/landing/CourseOverviewGrid";
import ModulesSection from "@/components/landing/ModulesSection";
import CountdownSection from "@/components/landing/CountdownSection";
import VideoSection from "@/components/landing/VideoSection";
import TestimonialsGrid from "@/components/landing/TestimonialsGrid";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero mit Bild-Platzhalter */}
      <HeroSection />
      
      {/* 2. Bilder-Karussell */}
      <ImageCarousel />
      
      {/* 3. Testimonial Highlight */}
      <TestimonialHighlight />
      
      {/* 4. Kursübersicht Grid (Handouts, Clips, Testfragen) */}
      <CourseOverviewGrid />
      
      {/* 5. Die 4 Module */}
      <ModulesSection />
      
      {/* 6. Countdown & Preis */}
      <CountdownSection />
      
      {/* 7. Erklärvideo */}
      <VideoSection />
      
      {/* 8. Weitere Testimonials */}
      <TestimonialsGrid />
    </main>
  );
};

export default Index;
