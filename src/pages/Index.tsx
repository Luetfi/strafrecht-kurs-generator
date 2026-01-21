import HeroSection from "@/components/landing/HeroSection";
import ImageCarousel from "@/components/landing/ImageCarousel";
import TestimonialHighlight from "@/components/landing/TestimonialHighlight";
import ModulesSection from "@/components/landing/ModulesSection";
import DownloadSection from "@/components/landing/DownloadSection";
import CountdownSection from "@/components/landing/CountdownSection";
import VideoSection from "@/components/landing/VideoSection";
import TestimonialsGrid from "@/components/landing/TestimonialsGrid";
import FooterCTA from "@/components/landing/FooterCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero mit Bild-Platzhalter */}
      <HeroSection />
      
      {/* 2. Bilder-Karussell */}
      <ImageCarousel />
      
      {/* 3. Testimonial Highlight */}
      <TestimonialHighlight />
      
      {/* 4. Die 4 Module */}
      <ModulesSection />
      
      {/* 5. Download-Bereich */}
      <DownloadSection />
      
      {/* 6. Countdown & Preis */}
      <CountdownSection />
      
      {/* 7. Erklärvideo */}
      <VideoSection />
      
      {/* 8. Weitere Testimonials */}
      <TestimonialsGrid />
      
      {/* 9. Footer mit CTA */}
      <FooterCTA />
    </main>
  );
};

export default Index;
