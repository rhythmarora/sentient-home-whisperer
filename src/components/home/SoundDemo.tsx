import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, Volume2, Speaker } from "lucide-react";

const philosophies = [
  {
    id: "reference",
    icon: Headphones,
    title: "Reference",
    description: "Studio-grade accuracy. Hear every detail as the artist intended. No coloration, no exaggeration — pure truth.",
    stats: { clarity: 98, immersion: 85, invisibility: 40 },
    waveStyle: "sharp",
    brand: "PMC · Meyer Sound",
  },
  {
    id: "invisible",
    icon: Volume2,
    title: "Invisible",
    description: "Sound without speakers. Architectural audio that disappears into walls and ceilings. You hear it everywhere, see it nowhere.",
    stats: { clarity: 75, immersion: 90, invisibility: 98 },
    waveStyle: "smooth",
    brand: "Sonance · Amina",
  },
  {
    id: "lifestyle",
    icon: Speaker,
    title: "Lifestyle",
    description: "Beautiful objects that happen to sound exceptional. Speakers as furniture, audio as art.",
    stats: { clarity: 82, immersion: 78, invisibility: 70 },
    waveStyle: "flowing",
    brand: "Devialet · B&O",
  },
];

function SoundWave({ style }: { style: string }) {
  const bars = style === "sharp" ? 24 : style === "smooth" ? 20 : 16;
  return (
    <div className="flex items-end justify-center gap-[2px] h-16">
      {Array.from({ length: bars }).map((_, i) => {
        const h = style === "sharp"
          ? Math.abs(Math.sin(i * 0.8)) * 100
          : style === "smooth"
          ? (Math.sin(i * 0.4) + 1) * 40 + 10
          : Math.sin(i * 0.5 + Math.cos(i * 0.3)) * 40 + 50;
        return (
          <motion.div
            key={i}
            className="w-1 rounded-full bg-gradient-to-t from-cinema to-music"
            initial={{ height: 4 }}
            animate={{ height: `${Math.max(h, 8)}%` }}
            transition={{ duration: 0.6, delay: i * 0.03, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}

function StatBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between font-body text-xs">
        <span className="text-silver">{label}</span>
        <span className="text-platinum">{value}%</span>
      </div>
      <div className="h-1 bg-graphite rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cinema to-music rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SoundDemo() {
  const [active, setActive] = useState("reference");
  const current = philosophies.find((p) => p.id === active)!;

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            How Should Sound <span className="italic text-gradient-vibrant">Feel?</span>
          </h2>
        </motion.div>

        {/* Philosophy Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {philosophies.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-sm border font-body text-sm transition-all duration-300 ${
                active === p.id
                  ? "border-cinema/50 bg-cinema/10 text-foreground glow-cinema"
                  : "border-graphite bg-carbon text-silver hover:text-foreground"
              }`}
            >
              <p.icon className="w-4 h-4" />
              {p.title}
            </button>
          ))}
        </div>

        {/* Active Philosophy */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="p-8 rounded-sm bg-carbon border border-graphite">
              <p className="font-display text-2xl font-semibold mb-4">{current.title}</p>
              <p className="font-body text-sm text-silver leading-relaxed mb-6">{current.description}</p>
              <p className="font-body text-xs text-muted-foreground italic">{current.brand}</p>
            </div>

            <div className="p-8 rounded-sm bg-carbon border border-graphite space-y-6">
              <SoundWave style={current.waveStyle} />
              <div className="space-y-4">
                <StatBar label="Clarity" value={current.stats.clarity} delay={0} />
                <StatBar label="Immersion" value={current.stats.immersion} delay={0.1} />
                <StatBar label="Invisibility" value={current.stats.invisibility} delay={0.2} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
