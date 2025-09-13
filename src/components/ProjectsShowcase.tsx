import { MapPin, ArrowRight, Home, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import villaProject from "@/assets/villa-project.jpg";
import amenitiesComplex from "@/assets/amenities-complex.jpg";
import heroBuilding from "@/assets/hero-building.jpg";

const ProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      name: "Karnataka Residency",
      location: "Koramangala, Bangalore",
      type: "Luxury Apartments",
      startingPrice: "₹1.2 Cr onwards",
      image: heroBuilding,
      features: ["3 & 4 BHK", "Ready to Move", "Premium Location"],
      status: "Ready to Move"
    },
    {
      id: 2,
      name: "Heritage Villas",
      location: "Whitefield, Bangalore",
      type: "Premium Villas",
      startingPrice: "₹2.5 Cr onwards",
      image: villaProject,
      features: ["4 & 5 BHK", "Private Pool", "Gated Community"],
      status: "Under Construction"
    },
    {
      id: 3,
      name: "Royal Gardens",
      location: "Electronic City, Bangalore",
      type: "Integrated Township",
      startingPrice: "₹85 L onwards",
      image: amenitiesComplex,
      features: ["2 & 3 BHK", "World-Class Amenities", "Green Living"],
      status: "New Launch"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Flagship 
            <span className="text-gradient-gold"> Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our portfolio of premium residential projects across Karnataka's most sought-after locations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden shadow-card hover:shadow-luxury transition-luxury cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-luxury"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Ready to Move' 
                      ? 'bg-success text-success-foreground' 
                      : project.status === 'New Launch'
                      ? 'bg-accent-gold text-accent-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {project.type.includes('Villa') ? (
                    <Home className="h-6 w-6 text-primary-foreground bg-primary/80 p-1 rounded" />
                  ) : (
                    <Building2 className="h-6 w-6 text-primary-foreground bg-primary/80 p-1 rounded" />
                  )}
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{project.name}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.type}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-lg font-bold text-accent-gold">{project.startingPrice}</p>
                  </div>
                  <Button variant="premium" size="sm" className="group">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="xl" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;