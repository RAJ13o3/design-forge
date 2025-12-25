import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone, Mail, Home } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-32 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-24 w-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Thank You for Visiting
              <span className="block text-primary mt-2">
                Shilp Construction
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Your Vision is Our Blueprint.
            </p>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We appreciate you taking the time to explore Shilp Construction
                — where design meets dedication and execution meets excellence.
                Every project we take on is more than just construction — it's a
                collaboration, a shared vision, and a lasting relationship built
                on trust.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're at the idea stage, looking for a partner to bring
                your designs to life, or ready to break ground — we're here to
                help you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a
                href="tel:+912714355391"
                className="flex items-center justify-center gap-3 p-6 bg-card rounded-xl hover:shadow-lg transition-shadow border border-border"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Call Us</div>
                  <div className="font-semibold">+91 2714355391</div>
                </div>
              </a>

              <a
                href="mailto:info@shilpconstruction.in"
                className="flex items-center justify-center gap-3 p-6 bg-card rounded-xl hover:shadow-lg transition-shadow border border-border"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Email Us</div>
                  <div className="font-semibold text-sm">
                    info@shilpconstruction.in
                  </div>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Schedule a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">View Our Portfolio</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Thank You for Trusting Shilp Construction
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Let's create something exceptional — together.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
