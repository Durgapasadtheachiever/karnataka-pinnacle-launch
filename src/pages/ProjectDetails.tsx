import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Home, Building2, Calendar, Award, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBuilding from "@/assets/hero-building.jpg";
import villaProject from "@/assets/villa-project.jpg";
import amenitiesComplex from "@/assets/amenities-complex.jpg";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const projectsData = {
    "1": {
      id: 1,
      name: "Karnataka Residency",
      location: "Koramangala, Bangalore",
      type: "Luxury Apartments",
      startingPrice: "₹1.2 Cr onwards",
      image: heroBuilding,
      features: ["3 & 4 BHK", "Ready to Move", "Premium Location"],
      status: "Ready to Move",
      description: "Experience luxury living at Karnataka Residency, located in the heart of Koramangala. These premium apartments offer world-class amenities and are designed for modern families who value comfort and convenience.",
      specifications: {
        "Total Units": "180 Apartments",
        "Floor Plans": "3 BHK (1,450 sq ft) & 4 BHK (1,850 sq ft)",
        "Total Floors": "25 Floors",
        "Parking": "Covered parking for each unit",
        "Possession": "Immediate"
      },
      amenities: [
        "Swimming Pool", "Gymnasium", "Children's Play Area", "Landscaped Gardens",
        "24/7 Security", "Power Backup", "Clubhouse", "Jogging Track",
        "Indoor Games", "Multipurpose Hall", "CCTV Surveillance", "Intercom Facility"
      ],
      gallery: [heroBuilding, villaProject, amenitiesComplex]
    },
    "2": {
      id: 2,
      name: "Heritage Villas",
      location: "Whitefield, Bangalore",
      type: "Premium Villas",
      startingPrice: "₹2.5 Cr onwards",
      image: villaProject,
      features: ["4 & 5 BHK", "Private Pool", "Gated Community"],
      status: "Under Construction",
      description: "Heritage Villas offers spacious independent villas in the prestigious Whitefield area. Each villa comes with a private pool and garden, perfect for families seeking luxury and privacy.",
      specifications: {
        "Total Villas": "45 Independent Villas",
        "Floor Plans": "4 BHK (2,500 sq ft) & 5 BHK (3,200 sq ft)",
        "Plot Size": "40x60 ft & 50x80 ft",
        "Parking": "2-3 Car Parking per villa",
        "Possession": "December 2025"
      },
      amenities: [
        "Private Swimming Pool", "Private Garden", "Gated Community", "24/7 Security",
        "Clubhouse", "Tennis Court", "Jogging Track", "Children's Play Area",
        "Guest Parking", "Maintenance Service", "Power Backup", "Water Treatment Plant"
      ],
      gallery: [villaProject, heroBuilding, amenitiesComplex]
    },
    "3": {
      id: 3,
      name: "Royal Gardens",
      location: "Electronic City, Bangalore",
      type: "Integrated Township",
      startingPrice: "₹85 L onwards",
      image: amenitiesComplex,
      features: ["2 & 3 BHK", "World-Class Amenities", "Green Living"],
      status: "New Launch",
      description: "Royal Gardens is an integrated township offering affordable luxury in Electronic City. With extensive green spaces and modern amenities, it's perfect for young professionals and growing families.",
      specifications: {
        "Total Units": "500 Apartments across 8 towers",
        "Floor Plans": "2 BHK (1,100 sq ft) & 3 BHK (1,350 sq ft)",
        "Total Floors": "15 Floors per tower",
        "Parking": "Stilt + Basement parking",
        "Possession": "March 2026"
      },
      amenities: [
        "Swimming Pool", "Gymnasium", "Yoga Deck", "Landscaped Gardens",
        "Children's Play Area", "Senior Citizen Area", "Amphitheater", "Basketball Court",
        "Badminton Court", "Cycling Track", "Retail Shops", "ATM Facility"
      ],
      gallery: [amenitiesComplex, heroBuilding, villaProject]
    }
  };

  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button variant="hero">View All Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <Badge className={`mb-4 ${
                project.status === 'Ready to Move' 
                  ? 'bg-success text-success-foreground' 
                  : project.status === 'New Launch'
                  ? 'bg-accent-gold text-accent-foreground'
                  : 'bg-primary text-primary-foreground'
              }`}>
                {project.status}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {project.name}
              </h1>
              <div className="flex items-center justify-center text-xl mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                {project.location}
              </div>
              <p className="text-lg opacity-90">{project.type}</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Project Overview */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="text-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm font-medium text-secondary-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">Specifications</h2>
                  <div className="space-y-4">
                    {Object.entries(project.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2">
                        <span className="font-medium text-foreground">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center p-2 bg-secondary/50 rounded">
                        <Award className="h-4 w-4 text-accent-gold mr-2 flex-shrink-0" />
                        <span className="text-sm text-secondary-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg group">
                        <img 
                          src={image} 
                          alt={`${project.name} view ${index + 1}`}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Price & CTA */}
              <Card className="shadow-luxury sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-sm text-muted-foreground mb-2">Starting from</div>
                    <div className="text-3xl font-bold text-accent-gold mb-4">
                      {project.startingPrice}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      {project.type.includes('Villa') ? (
                        <Home className="h-4 w-4 mr-1" />
                      ) : (
                        <Building2 className="h-4 w-4 mr-1" />
                      )}
                      {project.type}
                    </div>
                  </div>

                  <Separator className="mb-6" />

                  <div className="space-y-3">
                    <Link to="/site-visit" className="block">
                      <Button variant="hero" size="lg" className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Site Visit
                      </Button>
                    </Link>
                    
                    <Button variant="luxury" size="lg" className="w-full">
                      Download Brochure
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>sales@karnatakaproperties.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-primary mb-4">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">RERA ID</span>
                      <span className="font-medium">PRM/KA/RERA/{project.id}/2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Builder</span>
                      <span className="font-medium">Karnataka Properties</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-medium">{project.status}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;