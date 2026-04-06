import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    line1: "Not a home theatre.",
    line2: "A private cinema.",
    color: "cinema",
  },
  {
    line1: "Not active speakers.",
    line2: "Constellation acoustics.",
    color: "music",
  },
  {
    line1: "Not smart home.",
    line2: "Home orchestration.",
    color: "social",
  },
  {
    line1: "The technology",
    line2: "you never see.",
    color: "relax",
  },
];

const gradientMap: Record<string, string> = {
  cinema: "radial-gradient(ellipse at center, hsl(239 84% 67% / 0.08), transparent 70%)",
  music: "radial-gradient(ellipse at center, hsl(330 81% 60% / 0.08), transparent 70%)",
  social: "radial-gradient(ellipse at center, hsl(38 92% 50% / 0.08), transparent 70%)",
  relax: "radial-gradient(ellipse at center, hsl(160 84% 39% / 0.08), transparent 70%)",
};

export default function CinematicStory() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % stories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const story = stories[active];

  return (
    <section
      className="py-32 lg:py-40 flex items-center justify-center relative overflow-hidden"
      style={{ background: gradientMap[story.color] }}
    >
      <div className="text-center px-6 min-h-[200px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-4xl md:text-7xl font-medium text-platinum/60 mb-2">
              {story.line1}
            </p>
            <p className="font-display text-4xl md:text-7xl font-medium text-gradient-vibrant italic">
              {story.line2}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex gap-2 mt-12">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-gradient-vibrant" : "w-1.5 bg-graphite"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
