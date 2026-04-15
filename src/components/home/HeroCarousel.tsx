import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { brandLogos } from "@/data/brandLogos";

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  logoKey: string;
  link: string;
  external?: boolean;
  accent: string;
}

const slides: HeroSlide[] = [
  {
    title: "Meyer Sound",
    subtitle: "Concert-Hall Precision at Home",
    description: "The world's most respected professional loudspeaker brand — now engineered for private residences. Only at Qubix.",
    logoKey: "Meyer Sound",
    link: "/brands/meyer-sound",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    title: "Constellation",
    subtitle: "Active Acoustics — Only Demo in the Subcontinent",
    description: "Transform any room's acoustic character in real time. From intimate jazz club to cathedral — at the touch of a button.",
    logoKey: "Constellation",
    link: "/constellation",
    accent: "from-purple-500/20 to-transparent",
  },
  {
    title: "PMC",
    subtitle: "The Sound of Abbey Road",
    description: "Studio monitors trusted by the world's greatest recording studios — designed for audiophiles who demand absolute truth.",
    logoKey: "PMC",
    link: "/brands/pmc",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    title: "McIntosh",
    subtitle: "Legendary American Amplification",
    description: "Handcrafted in Binghamton, New York since 1949. The iconic blue meters and autoformers that define high-end audio.",
    logoKey: "McIntosh",
    link: "https://www.mcintoshlabs.com",
    external: true,
    accent: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Wharfedale",
    subtitle: "85 Years of British Heritage",
    description: "From the Yorkshire Dales to the world — timeless loudspeaker engineering that brings music to life.",
    logoKey: "Wharfedale",
    link: "https://www.wharfedale.co.uk",
    external: true,
    accent: "from-amber-500/20 to-transparent",
  },
  {
    title: "Sonos",
    subtitle: "Music in Every Room",
    description: "The simplest, most elegant way to fill your entire home with brilliant sound. Wireless. Effortless. Beautiful.",
    logoKey: "Sonos",
    link: "https://www.sonos.com",
    external: true,
    accent: "from-rose-500/20 to-transparent",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const logo = brandLogos[slide.logoKey];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const Wrapper = slide.external ? "a" : Link;
  const linkProps = slide.external
    ? { href: slide.link, target: "_blank", rel: "noopener noreferrer" }
    : { to: slide.link };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void">
      {/* Accent glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent} transition-all duration-1000`} />
      <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* Brand logo */}
            {logo && (
              <img
                src={logo}
                alt={slide.title}
                className="h-10 md:h-14 object-contain brightness-0 invert opacity-70 mb-8"
              />
            )}

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-4">
              {slide.subtitle}
            </h2>

            <p className="font-body text-base md:text-lg text-platinum/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              {slide.description}
            </p>

            <Wrapper
              {...(linkProps as any)}
              className="inline-flex items-center px-8 py-3.5 font-body font-medium text-sm tracking-wider bg-white text-void rounded-full hover:bg-platinum transition-colors"
            >
              Explore {slide.title}
            </Wrapper>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-silver" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-silver" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-1.5 bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
