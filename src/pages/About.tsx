import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-about.jpg";

const About = () => {
  const values = [
    { icon: Heart, title: "Integrity", description: "We conduct every project with honesty, fairness, and professionalism." },
    { icon: Award, title: "Quality", description: "From foundation to finish — we deliver nothing but the best." },
    { icon: Target, title: "Innovation", description: "We integrate modern techniques, sustainable materials, and smart design strategies." },
    { icon: Users, title: "Client Focus", description: "Your vision guides every decision we make. We listen, collaborate, and deliver." },
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-white/90">Your Vision. Our Commitment.</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Shilp Construction, we don't just build structures — we craft spaces with purpose, passion, and precision. Founded with a strong foundation in architecture and civil engineering, our firm is built on the belief that great construction is the result of thoughtful design, quality materials, skilled execution, and complete client satisfaction.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Shilp Construction was established with a simple goal: to redefine the standards of architecture and construction by blending innovation with reliability. What started as a small team with big dreams has now evolved into a multidisciplinary firm known for quality construction, thoughtful design, and ethical practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the years, we've successfully delivered projects ranging from luxurious private residences to modern office spaces and retail showrooms — all while maintaining our commitment to integrity and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-8">
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a leading name in the construction and design industry by consistently delivering projects that exceed client expectations — in terms of design, durability, and delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-8">
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Provide innovative, sustainable, and client-centric solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Maintain highest quality standards across every phase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Ensure transparency, accountability, and satisfaction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Meet the Team</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Behind every successful project is a team of talented professionals committed to excellence. Our staff includes architects with creative expertise, civil engineers ensuring structural safety, interior designers with an eye for detail, and dedicated on-site supervisors ensuring timely execution.
          </p>
          <p className="text-xl font-semibold">
            Together, we work toward one common goal: to turn your ideas into inspiring spaces.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build the Future Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're building your first home, renovating a cherished property, or starting a commercial project, Shilp Construction is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
