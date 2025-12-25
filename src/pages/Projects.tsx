import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

/* ----------------------------------
   Vite-safe image imports (STATIC)
----------------------------------- */
const DPREVIEW = import.meta.glob(
  "@/assets/3DPREVIEW/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const ON_SITE_WORK = import.meta.glob(
  "@/assets/ON_SITE_WORK/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const RESIDENTIAL_KITCHEN = import.meta.glob(
  "@/assets/RESIDENTIAL_KITCHEN/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const RESIDENTIAL_BED_ROOM = import.meta.glob(
  "@/assets/RESIDENTIAL_BED_ROOM/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const POOJA_ROOM = import.meta.glob(
  "@/assets/POOJA_ROOM/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

/* ----------------------------------
   Helper: Map glob results
----------------------------------- */
const mapImages = (images: Record<string, any>) =>
  Object.values(images).map((img) => img.default);

/* ----------------------------------
   Categories Config
----------------------------------- */
const categories = [
  {
    id: 1,
    title: "3D PREVIEW",
    description: "High-quality 3D visualization before execution",
    images: mapImages(DPREVIEW),
  },
  {
    id: 2,
    title: "ON SITE WORK",
    description: "Live execution and construction progress",
    images: mapImages(ON_SITE_WORK),
  },
  {
    id: 3,
    title: "RESIDENTIAL KITCHEN",
    description: "Modern and functional kitchen designs",
    images: mapImages(RESIDENTIAL_KITCHEN),
  },
  {
    id: 4,
    title: "RESIDENTIAL BED ROOM",
    description: "Comfort-focused bedroom interiors",
    images: mapImages(RESIDENTIAL_BED_ROOM),
  },
  {
    id: 5,
    title: "POOJA ROOM",
    description: "Traditional yet elegant pooja room designs",
    images: mapImages(POOJA_ROOM),
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
        <div className="container mx-auto px-4 text-white">
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
                  {/* ✅ First image as cover */}
                  <img
                    src={cat.images[0]}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-primary">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {cat.description}
                    </p>
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
                  <h2 className="text-2xl font-bold text-primary uppercase tracking-wide">
                    {activeCategory.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {activeCategory.description}
                  </p>
                </div>

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
                  {activeCategory.images.map(
                    (img: string, index: number) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg group"
                      >
                        <img
                          src={img}
                          alt=""
                          loading="lazy"
                          className="w-full h-60 sm:h-64 lg:h-72 object-cover 
                                     group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )
                  )}
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
