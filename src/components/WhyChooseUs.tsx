import { 
  Clock, 
  Shield, 
  Award, 
  Leaf, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "100% track record of delivering projects on schedule with zero delays",
      highlight: "100% Success Rate"
    },
    {
      icon: Shield,
      title: "Transparent Pricing",
      description: "No hidden costs, clear documentation, and honest dealings",
      highlight: "Zero Hidden Costs"
    },
    {
      icon: Award,
      title: "Award-Winning Architecture", 
      description: "Internationally acclaimed designs and premium construction quality",
      highlight: "25+ Awards"
    },
    {
      icon: Leaf,
      title: "Green & Sustainable",
      description: "Eco-friendly designs with rainwater harvesting and solar solutions",
      highlight: "IGBC Certified"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Dedicated support team and lifetime maintenance services",
      highlight: "24/7 Support"
    },
    {
      icon: TrendingUp,
      title: "Investment Value",
      description: "Properties in prime locations with high appreciation potential",
      highlight: "15%+ Annual Growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Why Choose 
            <span className="text-gradient-gold"> Karnataka Properties?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Two decades of excellence in creating premium living spaces that stand the test of time
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-luxury transition-luxury border-0 shadow-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                
                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-luxury shadow-gold">
                    <feature.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      {feature.highlight}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Check Icon */}
                <div className="flex justify-center">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Journey in Numbers
            </h3>
            <p className="text-primary-foreground/80 text-lg">
              Building trust through consistent delivery and excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">20+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">50+</div>
              <div className="text-primary-foreground/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">5000+</div>
              <div className="text-primary-foreground/80">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">4.9</div>
              <div className="text-primary-foreground/80 flex items-center justify-center">
                <Star className="h-4 w-4 fill-current mr-1" />
                Customer Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;