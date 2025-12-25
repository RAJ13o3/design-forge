import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "@/assets/shilp-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="Shilp Construction"
              className="h-16 mb-4 bg-white p-1.5"
            />
            <p className="text-sm text-secondary-foreground/80">
              Transforming ideas into inspiring spaces with purpose, precision,
              and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary-foreground">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Architectural Design</li>
              <li>Interior Design</li>
              <li>Site Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-secondary-foreground/80">
                  F/25, Ganesh Plaza, Kalikund - Kheda highway, Kalikund, Dholka
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="tel:+912714355391"
                  className="hover:text-primary transition-colors"
                >
                  +91 2714355391
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:info@shilpconstruction.in"
                  className="hover:text-primary transition-colors"
                >
                  info@shilpconstruction.in
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/shilp.construction"
                className="hover:text-primary transition-colors"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>
            © {new Date().getFullYear()} Shilp Construction. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
