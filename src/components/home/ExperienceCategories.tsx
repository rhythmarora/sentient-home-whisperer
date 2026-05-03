import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Film, Music, Mic, Gamepad2, PartyPopper, TreePine,
  Sun, Home, Shield, Wifi, Check, Image as ImageIcon, Pause, Play
} from "lucide-react";

const experiences = [
  {
    icon: Film, title: "Cinema", color: "cinema", filter: "Entertainment",
    tagline: "Every seat is the best seat.",
    tier: "Signature Cinema",
    features: ["Dolby Atmos 9.4.6 (PMC)", "REL subwoofer array", "4K Laser Projection", "Trinnov room correction"],
    image: "", // suggested: dim private cinema, screen lit, reference speakers visible
  },
  {
    icon: Music, title: "Music", color: "music", filter: "Entertainment",
    tagline: "Hear the room the artist heard.",
    tier: "Audiophile Grade",
    features: ["PMC / Dynaudio monitors", "McIntosh amplification", "Constellation acoustics", "Hi-Res streaming (Roon)"],
    image: "",
  },
  {
    icon: Mic, title: "Performance", color: "performance", filter: "Entertainment",
    tagline: "Not a room. A stage.",
    tier: "Performance Suite",
    features: ["Meyer Sound clarity", "Concert-grade lighting", "Wireless mics & mixing", "Video sync & recording"],
    image: "",
  },
  {
    icon: Gamepad2, title: "Gaming", color: "gaming", filter: "Entertainment",
    tagline: "Reflexes, rendered.",
    tier: "Gaming Den",
    features: ["Low-latency OLED", "Dolby Atmos surround", "Reactive ambient lighting", "Acoustic isolation"],
    image: "",
  },
  {
    icon: PartyPopper, title: "Party & Social", color: "social", filter: "Lifestyle",
    tagline: "Dinner to dance floor in one tap.",
    tier: "Social Hub",
    features: ["Multi-source audio zones", "Dynamic lighting (Lutron)", "Deep bass (REL)", "One-tap scenes"],
    image: "",
  },
  {
    icon: TreePine, title: "Outdoor", color: "outdoor", filter: "Lifestyle",
    tagline: "The garden becomes the venue.",
    tier: "Landscape Audio",
    features: ["Sonance landscape speakers", "In-ground subwoofers", "Outdoor cinema screen", "Weatherproof control"],
    image: "",
  },
  {
    icon: Sun, title: "Relaxation", color: "relax", filter: "Lifestyle",
    tagline: "A home that helps you exhale.",
    tier: "Wellness Zone",
    features: ["Circadian lighting", "Climate integration", "Sound masking", "Automated wellness scenes"],
    image: "",
  },
  {
    icon: Home, title: "Whole Home", color: "gold", filter: "Lifestyle",
    tagline: "Every room. One language.",
    tier: "Total Integration",
    features: ["Crestron unified control", "Multi-room audio", "Intelligent scenes", "Voice + touch + app"],
    image: "",
  },
  {
    icon: Shield, title: "Security", color: "cat-security", filter: "Infrastructure",
    tagline: "Powerful. Invisible.",
    tier: "Invisible Shield",
    features: ["AI CCTV analytics", "Biometric access", "Perimeter detection", "Remote monitoring"],
    image: "",
  },
  {
    icon: Wifi, title: "Connectivity", color: "connectivity", filter: "Infrastructure",
    tagline: "The invisible backbone.",
    tier: "Enterprise Network",
    features: ["Ruckus Wi-Fi 6E", "VLAN segmentation", "Remote management", "Failover redundancy"],
    image: "",
  },
];

const accentMap: Record<string, string> = {
  cinema: "bg-cinema", music: "bg-music", performance: "bg-performance",
  gaming: "bg-gaming", social: "bg-social", outdoor: "bg-outdoor",
  relax: "bg-relax", gold: "bg-primary", "cat-security": "bg-cat-security",
  connectivity: "bg-connectivity",
};

const ROTATE_MS = 5000;

export default function ExperienceCategories() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % experiences.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const exp = experiences[active];
  const Icon = exp.icon;

  return (
    <section id="experience" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            We design how your home <span className="italic text-gradient-vibrant">feels.</span>
          </h2>
          <p className="font-body text-base text-silver max-w-2xl mx-auto">
            Ten experiences. One seamless system.
          </p>
        </motion.div>

        {/* Featured stage */}
        <div
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-sm overflow-hidden border border-graphite bg-carbon"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Visual */}
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px] bg-obsidian overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                {exp.image ? (
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-obsidian via-carbon to-obsidian">
                    <ImageIcon className="w-10 h-10 text-primary/40 mb-3" />
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-primary/60">
                      {exp.title} Image
                    </p>
                    <p className="font-body text-[11px] text-muted-foreground mt-2 max-w-xs">
                      Suggested: editorial shot of a {exp.title.toLowerCase()} space
                    </p>
                  </div>
                )}
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 h-1 ${accentMap[exp.color]} transition-all duration-[5000ms] ease-linear`}
                     style={{ width: paused ? "0%" : "100%" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${accentMap[exp.color]}/20 border border-${exp.color}/40`}>
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-2xl md:text-3xl font-medium leading-tight">{exp.title}</p>
                    <p className="font-body text-sm text-silver italic">{exp.tagline}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Detail */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={exp.title + "-detail"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  System Architecture
                </p>
                <p className="font-display text-2xl font-semibold mb-5">{exp.tier}</p>
                <ul className="space-y-2.5">
                  {exp.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 font-body text-sm text-platinum/85">
                      <Check className="w-4 h-4 text-music mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/design"
                  className="inline-flex items-center gap-1 mt-6 font-body text-sm text-music hover:opacity-80 transition-opacity"
                >
                  Design this experience →
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-graphite">
              <span className="font-body text-xs text-muted-foreground tabular-nums">
                {String(active + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setPaused((p) => !p)}
                className="text-silver hover:text-foreground transition-colors"
                aria-label={paused ? "Play" : "Pause"}
              >
                {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail rail */}
        <div className="mt-6 grid grid-cols-5 lg:grid-cols-10 gap-2">
          {experiences.map((e, i) => {
            const EIcon = e.icon;
            const isActive = i === active;
            return (
              <button
                key={e.title}
                onClick={() => { setActive(i); setPaused(true); }}
                className={`group relative flex flex-col items-center gap-1.5 p-3 rounded-sm border transition-all ${
                  isActive
                    ? "border-music/60 bg-carbon"
                    : "border-graphite bg-carbon/40 hover:border-muted-foreground/30"
                }`}
              >
                <div className={`h-0.5 w-6 rounded-full ${accentMap[e.color]} ${isActive ? "opacity-100" : "opacity-40 group-hover:opacity-70"}`} />
                <EIcon className={`w-4 h-4 ${isActive ? "text-foreground" : "text-silver"}`} />
                <span className={`font-body text-[10px] text-center leading-tight ${isActive ? "text-foreground" : "text-silver"}`}>
                  {e.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
