import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, PenTool, Palette, Wrench, ClipboardList, HardHat } from "lucide-react";
import heroImage from "@/assets/hero-services.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      features: [
        "Bungalows, Villas, Duplexes, and Row Houses",
        "Apartment Buildings & Housing Units",
        "Smart & Sustainable Housing Solutions",
        "Premium Materials with On-Site Supervision",
        "Vastu-Compliant Design (on request)",
      ],
    },
    {
      icon: Building2,
      title: "Commercial & Institutional Construction",
      features: [
        "Corporate Offices & Co-working Spaces",
        "Retail Showrooms & Shopping Complexes",
        "Educational & Healthcare Facilities",
        "Warehouses & Industrial Units",
        "Mixed-use Developments",
      ],
    },
    {
      icon: PenTool,
      title: "Architectural Design & Planning",
      features: [
        "Conceptual and Schematic Design",
        "Site Layouts and Floor Planning",
        "3D Views, Elevations & Walkthroughs",
        "Structural Integration",
        "Design for Approvals (Municipality, RERA, Fire NOC)",
      ],
    },
    {
      icon: Palette,
      title: "Interior Design & Execution",
      features: [
        "Space Planning and Theme Development",
        "Modular Furniture & Storage Solutions",
        "Lighting & False Ceiling Design",
        "Paints, Textures, Wallpapers & Finishes",
        "Custom Décor and Soft Furnishings",
      ],
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      features: [
        "Civil Renovations (Walls, Flooring, Toilets)",
        "Kitchen & Bathroom Remodeling",
        "Interior Refurbishment",
        "Structural Repairs and Reinforcements",
        "Façade Redesign and Waterproofing",
      ],
    },
    {
      icon: HardHat,
      title: "Site Development & Infrastructure",
      features: [
        "Land Survey & Site Feasibility Studies",
        "Site Clearing, Leveling & Excavation",
        "Internal Roads & Drainage Layouts",
        "Utility Services Setup",
        "Stormwater Management",
      ],
    },
    {
      icon: ClipboardList,
      title: "Turnkey Project Solutions",
      features: [
        "Budget Estimation & Planning",
        "Design Development & Revisions",
        "Material Selection & Procurement",
        "Construction & Site Supervision",
        "Quality Checks & Final Handover",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90">Complete Construction, Design & Site Development Solutions Under One Roof</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Shilp Construction, we understand that every project is unique — and so is our approach. Whether you're building a residential villa, designing a commercial office, renovating an interior, or preparing land for development, we provide comprehensive, end-to-end solutions with unmatched attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Complete Solutions</h3>
              <p className="opacity-90">From concept to completion, we handle every aspect of your project under one roof.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Quality Assured</h3>
              <p className="opacity-90">Premium materials, skilled workforce, and rigorous quality checks at every stage.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">On-Time Delivery</h3>
              <p className="opacity-90">We value your time and ensure projects are completed within agreed timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
