import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, PenTool, Palette, Wrench, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "From luxury bungalows to compact urban homes, we design and build residential spaces that reflect your lifestyle.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Functional, high-performing commercial spaces for offices, retail outlets, showrooms, and industrial use.",
  },
  {
    icon: PenTool,
    title: "Architectural Planning",
    description: "Innovative designs that blend aesthetics with functionality, compliant with regulatory standards.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Customized solutions that balance style, space, and comfort for homes and commercial spaces.",
  },
  {
    icon: Wrench,
    title: "Renovation Projects",
    description: "Breathe new life into your old spaces with structural improvements and complete makeovers.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Complete project management from planning to execution, ensuring quality and timely delivery.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full spectrum of services under one roof, tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
          >
            View All Services
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
