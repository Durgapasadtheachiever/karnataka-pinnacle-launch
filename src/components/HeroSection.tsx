import { ArrowRight, Award, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Karnataka Properties Development" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          
          {/* Trust Badge */}
          <div className="flex items-center justify-center space-x-2 text-accent-gold text-sm font-medium animate-float">
            <Award className="h-4 w-4" />
            <span>RERA Approved • 20+ Years Experience</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Building 
            <span className="text-gradient-gold"> Landmarks</span>
            <br />
            Creating Communities
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Luxury apartments & villas with world-class amenities, delivered on time in Karnataka's most prestigious locations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button variant="hero" size="xl" className="group">
              Schedule Site Visit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="luxury" size="xl">
              Download Brochure
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent-gold">50+</div>
              <div className="text-sm md:text-base text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent-gold">5000+</div>
              <div className="text-sm md:text-base text-primary-foreground/80">Happy Families</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent-gold">100%</div>
              <div className="text-sm md:text-base text-primary-foreground/80">On-Time Delivery</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent-gold">4.9★</div>
              <div className="text-sm md:text-base text-primary-foreground/80">Google Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;