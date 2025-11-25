import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroHome from "@/assets/hero-home.jpg";
import heroServices from "@/assets/hero-services.jpg";
import heroAbout from "@/assets/hero-about.jpg";

const Projects = () => {
  const projects = [
    {
      image: heroHome,
      title: "Luxury Villa - Ahmedabad",
      category: "Residential",
      description: "Modern luxury villa with contemporary design and premium finishes",
      area: "5,000 sq.ft",
    },
    {
      image: heroServices,
      title: "Corporate Office - Gandhinagar",
      category: "Commercial",
      description: "State-of-the-art office building with glass facade and modern amenities",
      area: "15,000 sq.ft",
    },
    {
      image: heroAbout,
      title: "Premium Interior - Rajkot",
      category: "Interior Design",
      description: "Elegant residential interior with custom furniture and lighting",
      area: "3,200 sq.ft",
    },
    {
      image: heroHome,
      title: "Residential Complex - Vadodara",
      category: "Residential",
      description: "Multi-unit residential complex with modern amenities",
      area: "25,000 sq.ft",
    },
    {
      image: heroServices,
      title: "Retail Showroom - Ahmedabad",
      category: "Commercial",
      description: "Contemporary retail space with optimal customer flow",
      area: "8,000 sq.ft",
    },
    {
      image: heroAbout,
      title: "Bungalow Renovation - Surat",
      category: "Renovation",
      description: "Complete transformation of traditional bungalow",
      area: "4,500 sq.ft",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-br from-primary to-orange-600">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl">Showcasing excellence in design, quality, and execution across Gujarat</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From residential villas to commercial complexes, our portfolio showcases our commitment to quality, innovation, and client satisfaction. Each project reflects our dedication to turning visions into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Area: {project.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to See Your Project Here?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create exceptional spaces that stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
