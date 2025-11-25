import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What type of projects does Shilp Construction handle?",
          a: "We offer end-to-end services for residential and commercial construction, architectural design, interior execution, site development, and renovations. Whether you're building from scratch or upgrading an existing space, we're equipped to handle projects of all sizes.",
        },
        {
          q: "Which cities or regions do you serve?",
          a: "We are based in Ahmedabad and serve clients across Gujarat — including Gandhinagar, Rajkot, Vadodara, Mehsana, and nearby towns. For large-scale or NRI projects, we also consider locations beyond Gujarat.",
        },
        {
          q: "Do you provide turnkey solutions?",
          a: "Yes. Our turnkey solutions cover everything — from design and budgeting to execution and handover — so you can relax while we take care of it all.",
        },
      ],
    },
    {
      category: "Design & Planning",
      questions: [
        {
          q: "Can you help us with architectural drawings and approvals?",
          a: "Absolutely. We provide conceptual and working drawings, 3D views, and help with government approvals (AUDA, AMC, RERA, Fire NOC, etc.).",
        },
        {
          q: "What if I already have my own architect or designer?",
          a: "No problem. We can work collaboratively with your existing design team or take over execution based on approved plans.",
        },
      ],
    },
    {
      category: "Construction & Execution",
      questions: [
        {
          q: "What materials do you use in construction?",
          a: "We use high-quality, certified materials — including branded cement, steel, plumbing, and electrical components. Material transparency is part of our policy and clients can inspect or approve materials.",
        },
        {
          q: "How do you ensure quality control on site?",
          a: "We appoint a dedicated site supervisor and conduct regular quality audits. We also provide milestone-based progress reports to our clients.",
        },
        {
          q: "How long will my project take to complete?",
          a: "Project timelines vary based on size and complexity. A residential bungalow may take 6–9 months, while interiors might take 45–90 days. We share detailed timelines during planning and stick to them as closely as possible.",
        },
      ],
    },
    {
      category: "Payments & Pricing",
      questions: [
        {
          q: "How do you structure your payment terms?",
          a: "Payments are divided into milestone-based stages — such as design confirmation, site start, plinth level, slab completion, interior execution, etc. We maintain full billing transparency.",
        },
        {
          q: "Do you offer cost estimation or BOQ (Bill of Quantities)?",
          a: "Yes, we provide detailed cost estimates, BOQs, and work schedules before project initiation to avoid hidden surprises.",
        },
      ],
    },
    {
      category: "Post-Project & Support",
      questions: [
        {
          q: "Do you provide after-service or maintenance?",
          a: "Yes. We offer a defined defect liability period (usually 6–12 months depending on the project) during which we address any construction-related issues that arise.",
        },
        {
          q: "Can I contact you for small repair or renovation jobs?",
          a: "Absolutely. No project is too small for us. Whether it's a kitchen remodeling, waterproofing, or repainting — we'll be happy to assist.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl">Everything You Need to Know Before We Build Together</p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-16">
              We understand that starting a construction or renovation project involves a lot of questions. At Shilp Construction, we believe in transparency and open communication. Below are answers to some of the most common questions our clients ask.
            </p>

            <div className="space-y-12">
              {faqs.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h2 className="text-3xl font-bold mb-6 text-primary">{section.category}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {section.questions.map((faq, faqIdx) => (
                      <AccordionItem
                        key={faqIdx}
                        value={`${sectionIdx}-${faqIdx}`}
                        className="border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-2">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to help. Contact us anytime to get personalized answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
