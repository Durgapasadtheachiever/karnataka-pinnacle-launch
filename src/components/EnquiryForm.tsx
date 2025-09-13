import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us", 
      value: "info@karnatakaproperties.com",
      link: "mailto:info@karnatakaproperties.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Koramangala, Bangalore - 560034",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Get in 
            <span className="text-gradient-gold"> Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to find your dream home? Let's discuss your requirements and find the perfect property for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of the following channels. Our team is available 24/7 to assist you.
              </p>
            </div>

            {contactInfo.map((contact, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-luxury">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{contact.title}</h4>
                      <a 
                        href={contact.link}
                        className="text-muted-foreground hover:text-accent-gold transition-smooth"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* RERA Information */}
            <Card className="border-0 shadow-card bg-gradient-subtle">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">RERA Registration</h4>
                <p className="text-sm text-muted-foreground mb-1">PRM/KA/RERA/1251/309/PR/010101/003515</p>
                <p className="text-xs text-muted-foreground">Karnataka Real Estate Regulatory Authority</p>
              </CardContent>
            </Card>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card className="border-0 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us an Enquiry</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="transition-luxury focus:ring-accent-gold"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Phone Number *
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        className="transition-luxury focus:ring-accent-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="transition-luxury focus:ring-accent-gold"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      I'm Interested In
                    </label>
                    <Select onValueChange={(value) => handleChange('interest', value)}>
                      <SelectTrigger className="transition-luxury focus:ring-accent-gold">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Luxury Apartments</SelectItem>
                        <SelectItem value="villa">Premium Villas</SelectItem>
                        <SelectItem value="plot">Residential Plots</SelectItem>
                        <SelectItem value="commercial">Commercial Properties</SelectItem>
                        <SelectItem value="investment">Investment Opportunities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your requirements, budget, and timeline..."
                      rows={4}
                      className="transition-luxury focus:ring-accent-gold"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="flex-1 group"
                    >
                      Send Enquiry
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button 
                      type="button" 
                      variant="luxury" 
                      size="lg"
                      className="flex-1"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;