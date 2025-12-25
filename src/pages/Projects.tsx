import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Images
import heroHome from "@/assets/hero-home.jpg";
import heroServices from "@/assets/hero-services.jpg";
import heroAbout from "@/assets/hero-about.jpg";

const categories = [
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Modern modular and custom kitchen designs",
    cover: heroHome,
    images: [heroHome, heroServices, heroAbout],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Comfort-focused bedroom interiors",
    cover: heroServices,
    images: [heroServices, heroHome, heroAbout],
  },
  {
    id: "living-room",
    title: "Living Room",
    description: "Elegant and spacious living areas",
    cover: heroAbout,
    images: [heroAbout, heroHome, heroServices],
  },
  {
    id: "bathroom",
    title: "Bathroom",
    description: "Luxury and functional bathroom designs",
    cover: heroHome,
    images: [heroHome, heroAbout],
  },
  {
    id: "office",
    title: "Office / Commercial",
    description: "Professional and productive commercial spaces",
    cover: heroServices,
    images: [heroServices, heroHome],
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<any>(null);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-br from-primary to-orange-600">
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Design Categories
          </h1>
          <p className="text-xl max-w-2xl">
            Explore our interior and construction work by space type
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((cat) => (
              <Card
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpen(true);
                }}
                className="cursor-pointer overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="relative h-72">
                  <img
                    src={cat.cover}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">{cat.title}</h3>
                    <p className="text-sm opacity-90">{cat.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden [&>button]:hidden">
          {activeCategory && (
            <div className="flex flex-col h-[85vh]">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <div>
                  <h2 className="text-2xl font-bold">{activeCategory.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {activeCategory.description}
                  </p>
                </div>

                {/* SINGLE Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Gallery */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeCategory.images.map((img: string, index: number) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg group"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-60 sm:h-64 lg:h-72 object-cover 
                               group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
