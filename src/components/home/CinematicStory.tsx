import { motion } from "framer-motion";

const stories = [
  {
    line1: "Not a home theatre.",
    line2: "A private cinema.",
    color: "cinema",
    gradient: "radial-gradient(ellipse at center, hsl(239 84% 67% / 0.08), transparent 70%)",
  },
  {
    line1: "Music that follows you.",
    line2: "Not rooms.",
    color: "music",
    gradient: "radial-gradient(ellipse at center, hsl(330 81% 60% / 0.08), transparent 70%)",
  },
  {
    line1: "The outdoors,",
    line2: "reimagined.",
    color: "social",
    gradient: "radial-gradient(ellipse at center, hsl(38 92% 50% / 0.08), transparent 70%)",
  },
  {
    line1: "The intelligence",
    line2: "behind everything.",
    color: "relax",
    gradient: "radial-gradient(ellipse at center, hsl(160 84% 39% / 0.08), transparent 70%)",
  },
];

const dividerColorMap: Record<string, string> = {
  cinema: "bg-cinema", music: "bg-music", social: "bg-social", relax: "bg-relax",
};

export default function CinematicStory() {
  return (
    <section>
      {stories.map((story, i) => (
        <div
          key={i}
          className="min-h-screen flex items-center justify-center relative film-grain overflow-hidden"
          style={{ background: story.gradient }}
        >
          {/* Colored divider at top */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 ${dividerColorMap[story.color]}`} />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <p className="font-display text-4xl md:text-7xl font-medium text-platinum/60 mb-2">
              {story.line1}
            </p>
            <p className="font-display text-4xl md:text-7xl font-medium text-gradient-vibrant italic">
              {story.line2}
            </p>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
