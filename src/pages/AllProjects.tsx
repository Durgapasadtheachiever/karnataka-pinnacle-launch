import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Home, Building2, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import villaProject from "@/assets/villa-project.jpg";
import amenitiesComplex from "@/assets/amenities-complex.jpg";
import heroBuilding from "@/assets/hero-building.jpg";

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const allProjects = [
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
    },
    {
      id: 4,
      name: "Skyline Heights",
      location: "HSR Layout, Bangalore",
      type: "Luxury Apartments",
      startingPrice: "₹1.8 Cr onwards",
      image: heroBuilding,
      features: ["3 & 4 BHK", "Penthouse Available", "Sky Lounge"],
      status: "New Launch"
    },
    {
      id: 5,
      name: "Green Valley Villas",
      location: "Sarjapur Road, Bangalore",
      type: "Premium Villas",
      startingPrice: "₹3.2 Cr onwards",
      image: villaProject,
      features: ["4 & 5 BHK", "Eco-Friendly", "Private Gardens"],
      status: "Under Construction"
    },
    {
      id: 6,
      name: "Urban Square",
      location: "Marathahalli, Bangalore",
      type: "Commercial Spaces",
      startingPrice: "₹65 L onwards",
      image: amenitiesComplex,
      features: ["Office Spaces", "Retail Shops", "Food Court"],
      status: "Ready to Move"
    }
  ];

  // Filter projects based on search and filters
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === "all" || 
                       (filterType === "apartments" && project.type.includes("Apartments")) ||
                       (filterType === "villas" && project.type.includes("Villas")) ||
                       (filterType === "commercial" && project.type.includes("Commercial"));
    
    const matchesStatus = filterStatus === "all" || project.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our <span className="text-gradient-gold">Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover our complete portfolio of premium residential and commercial properties 
                across Karnataka's most sought-after locations
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Property Type Filter */}
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="apartments">Apartments</SelectItem>
                  <SelectItem value="villas">Villas</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Ready to Move">Ready to Move</SelectItem>
                  <SelectItem value="Under Construction">Under Construction</SelectItem>
                  <SelectItem value="New Launch">New Launch</SelectItem>
                </SelectContent>
              </Select>

              {/* Reset Filters */}
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setFilterType("all");
                  setFilterStatus("all");
                }}
                className="w-full"
              >
                <Filter className="h-4 w-4 mr-2" />
                Reset Filters
              </Button>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
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
                        <Link to={`/project/${project.id}`}>
                          <Button variant="premium" size="sm" className="group">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-primary mb-4">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or filters to find what you're looking for.
                </p>
                <Button 
                  variant="hero"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterType("all");
                    setFilterStatus("all");
                  }}
                >
                  View All Projects
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our property consultants are here to help you find the perfect property 
              that matches your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/site-visit">
                <Button variant="hero" size="xl" className="group">
                  Schedule Site Visit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="luxury" size="xl">
                Speak to Consultant
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;