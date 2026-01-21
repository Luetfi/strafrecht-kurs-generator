import { Play, ImageIcon } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Kennst du das Geheimnis der Prädikatsklausur?
            </h2>
            <p className="text-xl text-muted-foreground">
              Ich erkläre es dir in weniger als 10 Minuten
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
              {/* Thumbnail Placeholder */}
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <ImageIcon className="w-16 h-16 text-primary/50" />
              </div>

              {/* Play Button */}
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <Play className="w-10 h-10 text-secondary-foreground ml-1" fill="currentColor" />
              </div>

              {/* Placeholder Text */}
              <div className="mt-6 text-center">
                <p className="text-primary font-semibold">Video-Platzhalter</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hier wird dein Erklärvideo eingebettet
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  [Thumbnail & Video-Embed kommen hier hin]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
