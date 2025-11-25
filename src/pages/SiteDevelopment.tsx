import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Ruler, Droplets, Zap, Wrench, Shield } from "lucide-react";

const SiteDevelopment = () => {
  const services = [
    {
      icon: MapPin,
      title: "Land Survey & Feasibility",
      items: ["Site Survey & Topographical Analysis", "Soil Testing & Geotechnical Studies", "Site Feasibility Assessment", "Regulatory Compliance Check"],
    },
    {
      icon: Ruler,
      title: "Site Preparation",
      items: ["Land Clearing & Leveling", "Excavation & Earthwork", "Site Grading & Compaction", "Boundary Walls & Fencing"],
    },
    {
      icon: Droplets,
      title: "Drainage & Water Management",
      items: ["Stormwater Drainage Systems", "Sewage Line Layout", "Rainwater Harvesting Setup", "Underground Water Tank Construction"],
    },
    {
      icon: Zap,
      title: "Utility Infrastructure",
      items: ["Electrical Conduit Installation", "Water Supply Pipeline", "Gas Pipeline Setup", "Telecommunication Infrastructure"],
    },
    {
      icon: Wrench,
      title: "Roads & Pathways",
      items: ["Internal Road Construction", "Kerb Stones & Pavement", "Street Lighting Installation", "Parking Area Development"],
    },
    {
      icon: Shield,
      title: "Security & Access",
      items: ["Entrance Gates & Barriers", "Security Cabin Construction", "CCTV Infrastructure Setup", "Access Control Systems"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-secondary to-secondary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Site Development</h1>
            <p className="text-xl mb-8">
              Comprehensive land preparation and infrastructure development services to make your site construction-ready
            </p>
            <Button asChild size="lg" variant="default">
              <Link to="/contact">Request Site Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Site Development Matters</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              A strong project begins with well-prepared land. Our site development services lay the groundwork for safe, stable, and build-ready plots — whether it's an individual property or a large-scale development. We coordinate with local authorities, engineers, and utility service providers to ensure your land is legally compliant and technically sound.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Site Development Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end site preparation and infrastructure development for residential, commercial, and industrial projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span>{item}</span>
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

      {/* Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Site Development Process</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Initial Survey & Assessment", desc: "Comprehensive site analysis including topography, soil testing, and regulatory requirements" },
                { step: "2", title: "Planning & Design", desc: "Detailed site layout planning with utility mapping and drainage design" },
                { step: "3", title: "Approval & Permits", desc: "Coordination with authorities for necessary approvals and permits" },
                { step: "4", title: "Site Preparation", desc: "Clearing, leveling, excavation, and earthwork as per design" },
                { step: "5", title: "Infrastructure Installation", desc: "Installation of utilities, roads, drainage, and boundary structures" },
                { step: "6", title: "Quality Check & Handover", desc: "Final inspection and handover of construction-ready site" },
              ].map((phase, index) => (
                <div key={index} className="flex gap-4 p-6 bg-background rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Develop Your Site?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get expert site development services to ensure your project starts on solid ground.
          </p>
          <Button asChild size="lg" variant="default">
            <Link to="/contact">Schedule Site Visit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SiteDevelopment;
