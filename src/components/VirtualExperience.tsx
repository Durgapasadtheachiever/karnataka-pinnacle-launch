import { Play, Camera, Eye, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";
import heroBuilding from "@/assets/hero-building.jpg";
import apartmentvision from "@/assets/apartmentkp.mp4"

const VirtualExperience = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Experience Before 
            <span className="text-gradient-gold"> You Buy</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Take a virtual journey through our properties with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Video Preview */}
          <div className="relative group animate-fade-up">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <video
                ref={videoRef}
                src={apartmentvision}   // 👈 change to your video path
                poster={heroBuilding}            // fallback image
                className="w-full h-80 lg:h-96 object-cover"
              />

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 bg-primary/20 flex items-center justify-center cursor-pointer"
                  onClick={handlePlay}
                >
                  <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center shadow-gold transition-luxury">
                    <Play className="h-8 w-8 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Video Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary/80 backdrop-blur-sm rounded-lg p-4 text-primary-foreground">
                <h3 className="font-semibold mb-1">Karnataka Residency Virtual Tour</h3>
                <p className="text-sm text-primary-foreground/80">Complete walkthrough • intro video</p>
              </div>
            </div>
          </div>
          
          {/* Your existing experience cards stay same... */}
        </div>
      </div>
    </section>
  );
};

export default VirtualExperience;
