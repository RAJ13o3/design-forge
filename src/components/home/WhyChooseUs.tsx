import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Experienced Team of Architects & Engineers",
  "Transparent Process & Budget-Friendly Solutions",
  "Commitment to Quality and Timely Delivery",
  "Focus on Innovation, Sustainability & Client Satisfaction",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Choose Shilp Construction?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 text-left bg-secondary-foreground/5 p-6 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
