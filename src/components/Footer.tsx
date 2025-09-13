import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/karnataka-properties-logo.jpg";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    { label: "Luxury Apartments", href: "#" },
    { label: "Premium Villas", href: "#" },
    { label: "Residential Plots", href: "#" },
    { label: "Commercial Properties", href: "#" },
    { label: "Property Management", href: "#" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "RERA Compliance", href: "#" },
    { label: "Refund Policy", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Karnataka Properties Logo" 
                className="h-10 w-10 object-contain"
              />
              <div className="text-xl font-bold">Karnataka Properties</div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Building landmarks and creating communities for over two decades. Your trusted partner in premium real estate across Karnataka.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-gold" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-gold" />
                <span className="text-sm">info@karnatakaproperties.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Brigade Road, Koramangala, Bangalore - 560034</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-accent-foreground transition-luxury group"
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-accent-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent-gold transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-accent-gold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent-gold transition-smooth text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-accent-gold">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm">
              Get the latest updates on new projects, offers, and market insights.
            </p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-primary-light text-primary-foreground placeholder:text-primary-foreground/60 border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-accent-gold transition-luxury"
              />
              <Button variant="hero" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>

            {/* Legal Links */}
            <div className="pt-4 border-t border-primary-foreground/20">
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-accent-gold transition-smooth text-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Karnataka Properties. All rights reserved. | RERA: PRM/KA/RERA/1251/309/PR/010101/003515
            </div>

            {/* Awards & Certifications */}
            <div className="flex items-center space-x-4 text-primary-foreground/60 text-xs">
              <span>IGBC Certified</span>
              <span>•</span>
              <span>ISO 9001:2015</span>
              <span>•</span>
              <span>CREDAI Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="hero"
          size="icon"
          className="w-14 h-14 rounded-full shadow-luxury animate-float"
          aria-label="Chat on WhatsApp"
          onClick={() => window.open('https://wa.me/919876543210?text=Hi! I am interested in Karnataka Properties. Please share more details.', '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;