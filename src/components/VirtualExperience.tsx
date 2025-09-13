import { Play, Camera, Eye, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBuilding from "@/assets/hero-building.jpg";

const VirtualExperience = () => {
  const experiences = [
    {
      icon: Camera,
      title: "360° Virtual Tours",
      description: "Immersive walkthroughs of our ready apartments and villas",
      action: "Take Tour"
    },
    {
      icon: Eye,
      title: "Drone Footage",
      description: "Aerial views showcasing the complete project and surroundings",
      action: "Watch Video"
    },
    {
      icon: Smartphone,
      title: "AR Experience",
      description: "Visualize interiors and customizations using your smartphone",
      action: "Try AR"
    }
  ];

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
          <div className="relative group cursor-pointer animate-fade-up">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={heroBuilding} 
                alt="Virtual Tour Preview"
                className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-luxury"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-luxury">
                  <Play className="h-8 w-8 text-accent-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Video Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary/80 backdrop-blur-sm rounded-lg p-4 text-primary-foreground">
                <h3 className="font-semibold mb-1">Karnataka Residency Virtual Tour</h3>
                <p className="text-sm text-primary-foreground/80">Complete walkthrough • 5 min video</p>
              </div>
            </div>
          </div>

          {/* Experience Options */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {experiences.map((experience, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card transition-luxury border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:scale-110 transition-luxury">
                      <experience.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {experience.description}
                      </p>
                    </div>
                    
                    <Button variant="luxury" size="sm" className="group">
                      {experience.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Call to Action */}
            <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground mt-8">
              <h3 className="text-xl font-bold mb-3">
                Can't Visit in Person?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Book a live virtual tour with our property expert and get all your questions answered in real-time.
              </p>
              <Button variant="hero" className="w-full">
                Book Live Virtual Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <Camera className="h-8 w-8 text-accent-foreground" />
            </div>
            <h4 className="font-semibold text-primary mb-2">HD Quality Tours</h4>
            <p className="text-sm text-muted-foreground">Crystal clear 4K resolution for detailed exploration</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <Smartphone className="h-8 w-8 text-accent-foreground" />
            </div>
            <h4 className="font-semibold text-primary mb-2">Mobile Friendly</h4>
            <p className="text-sm text-muted-foreground">Optimized experience across all devices</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <Eye className="h-8 w-8 text-accent-foreground" />
            </div>
            <h4 className="font-semibold text-primary mb-2">Interactive Elements</h4>
            <p className="text-sm text-muted-foreground">Click on hotspots to learn more about features</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualExperience;