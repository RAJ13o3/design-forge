import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Together</h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
          Have a project in mind? Want to discuss your ideas or get an estimate?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
            <Link to="/contact">
              <MessageSquare className="mr-2 h-5 w-5" />
              Get in Touch
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary min-w-[200px]">
            <Link to="/projects">
              Explore Projects
            </Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-left">
          <a href="tel:+919227415715" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm opacity-80">Call Us</div>
              <div className="font-semibold text-lg">+91 9227415715</div>
            </div>
          </a>
          
          <a href="mailto:info@shilpconstruction.in" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm opacity-80">Email Us</div>
              <div className="font-semibold text-lg">info@shilpconstruction.in</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
