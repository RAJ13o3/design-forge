import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// import videos
import video1 from "@/assets/VID-20251221-WA0001.mp4";
import video2 from "@/assets/VID-20251221-WA0004.mp4";
import video3 from "@/assets/VID-20251221-WA0005.mp4";
import video4 from "@/assets/VID-20251221-WA0007.mp4";
import video5 from "@/assets/VID-20251221-WA0009.mp4";
import video6 from "@/assets/VID-20251221-WA0011.mp4";

const videos = [video1, video2, video3, video4, video5, video6];

const HeroSection = () => {
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];
  const [active, setActive] = useState(0); // 0 or 1
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentVideo = videoRefs[active].current;
    const nextVideo = videoRefs[1 - active].current;

    if (!currentVideo || !nextVideo) return;

    // Load next video
    nextVideo.src = videos[(index + 1) % videos.length];
    nextVideo.load();

    currentVideo.onended = () => {
      nextVideo.play();
      setActive((prev) => 1 - prev);
      setIndex((prev) => (prev + 1) % videos.length);
    };
  }, [index, active]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
      {/* Video Layer 1 */}
      <video
        ref={videoRefs[0]}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          active === 0 ? "opacity-100" : "opacity-0"
        }`}
        src={videos[index]}
        autoPlay
        muted
        playsInline
      />

      {/* Video Layer 2 */}
      <video
        ref={videoRefs[1]}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          active === 1 ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/70 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Your
            <span className="block text-primary">Dream Spaces</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Transform ideas into inspiring spaces with Shilp Construction.
            Excellence in design, precision in execution.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white hover:text-secondary"
            >
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
