import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Sun, Wifi, Shield, ChevronDown } from "lucide-react";

const categories = [
  {
    title: "Entertainment", icon: Film, color: "cinema", tagline: "Sound. Vision. Immersion.",
    items: ["Private Cinema (Dolby Atmos / DTS:X)", "Whole-home Hi-Fi Audio", "Outdoor Landscape Audio", "Karaoke & Performance Systems", "Gaming Environments"],
  },
  {
    title: "Ambience", icon: Sun, color: "social", tagline: "Light that adapts. Climate that responds.",
    items: ["Circadian Lighting Design", "Scene-based Automation", "Motorized Shading", "Climate Zone Control", "Wellness Integration"],
  },
  {
    title: "Infrastructure", icon: Wifi, color: "connectivity", tagline: "The invisible backbone.",
    items: ["Enterprise Wi-Fi 6E", "Structured Cabling", "AV Distribution", "VLAN Network Design", "Remote Monitoring & Management"],
  },
  {
    title: "Protection", icon: Shield, color: "cat-security", tagline: "Powerful, but unseen.",
    items: ["AI-Powered Surveillance", "Biometric Access Control", "Perimeter Detection", "Smart Locks & Intercoms", "24/7 Remote Monitoring"],
  },
];

const colorMap: Record<string, { border: string; text: string; dot: string; glow: string }> = {
  cinema: { border: "border-music/40", text: "text-music", dot: "bg-music", glow: "glow-music" },
  social: { border: "border-music/40", text: "text-music", dot: "bg-music", glow: "glow-music" },
  connectivity: { border: "border-music/40", text: "text-music", dot: "bg-music", glow: "" },
  "cat-security": { border: "border-music/40", text: "text-music", dot: "bg-music", glow: "" },
};

export default function SystemsShowcase() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-2">
            What Powers Your Home
          </h2>
          <p className="font-display text-xl text-gradient-vibrant italic">Not systems. Superpowers.</p>
        </motion.div>

        <div className="space-y-3">
          {categories.map((cat, i) => {
            const isOpen = open === i;
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-sm border transition-all duration-300 ${isOpen ? c.border + " " + c.glow : "border-graphite"} bg-carbon`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <cat.icon className={`w-6 h-6 ${isOpen ? c.text : "text-silver"} transition-colors`} />
                  <div className="flex-1">
                    <h3 className={`font-display text-xl font-semibold ${isOpen ? c.text : "text-foreground"} transition-colors`}>
                      {cat.title}
                    </h3>
                    <p className="font-body text-xs text-silver mt-0.5">{cat.tagline}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-silver transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-16">
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item} className="flex items-center gap-3 font-body text-sm text-platinum/80">
                              <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
