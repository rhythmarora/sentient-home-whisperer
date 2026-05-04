import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Film, Music, Mic, Gamepad2, PartyPopper, TreePine,
  Sun, Home, Shield, Wifi, Image as ImageIcon, Pause, Play
} from "lucide-react";
import { brandLogos } from "@/data/brandLogos";
import cinemaImg from "@/assets/experiences/cinema.jpg";
import musicImg from "@/assets/music/pmc-prophecy9-lakeside.jpg";
import performanceImg from "@/assets/experiences/performance.jpg";
import gamingImg from "@/assets/experiences/gaming.jpg";
import socialImg from "@/assets/experiences/social.jpg";
import outdoorImg from "@/assets/experiences/outdoor.jpg";
import relaxImg from "@/assets/experiences/relax.jpg";
import wholeHomeImg from "@/assets/experiences/whole-home.jpg";
import securityImg from "@/assets/experiences/security.jpg";
import connectivityImg from "@/assets/experiences/connectivity.jpg";
import cineRoom from "@/assets/cinema/cine-room.jpg";
import pmcCiSeries from "@/assets/cinema/pmc-ci-series.jpg";
import meyerCinemaProducts from "@/assets/cinema/meyer-cinema-products.png";
import meyerCinemaSystem from "@/assets/cinema/meyer-cinema-system.png";

const cinemaGallery = [
  { src: cineRoom, caption: "PMC Holme Court — reference cinema" },
  { src: pmcCiSeries, caption: "PMC ci Series — invisible architecture" },
  { src: meyerCinemaProducts, caption: "Meyer Sound — full cinema lineup" },
  { src: meyerCinemaSystem, caption: "Black 7.1.4 — engineered as one" },
];

const experiences = [
  {
    icon: Film, title: "Cinema", color: "cinema",
    tagline: "Every seat is the best seat.",
    promise: "Reference-grade private cinemas calibrated by THX-certified engineers — the only such team in India.",
    brands: ["PMC", "Trinnov", "SIM2", "McIntosh"],
    image: cinemaImg,
  },
  {
    icon: Music, title: "Music", color: "music",
    tagline: "Hear the room the artist heard.",
    promise: "Studio-monitor accuracy paired with audiophile electronics — tuned to your room, not a showroom.",
    brands: ["PMC", "McIntosh", "Luxman", "Devialet"],
    image: musicImg,
  },
  {
    icon: Mic, title: "Performance", color: "performance",
    tagline: "Your personal jam room.",
    promise: "For families who love to jam, sing and have fun together in a dedicated space inside your home — acoustically treated, professionally calibrated. Because music brings everyone together, be it karaoke, Indian classical, percussion or a DJ set. Why not have a space that can be your personal jam room?",
    brands: ["Meyer Sound", "PMC", "Crestron", "Shure"],
    image: performanceImg,
  },
  {
    icon: Gamepad2, title: "Gaming", color: "gaming",
    tagline: "Reflexes, rendered.",
    promise: "Low-latency displays and immersive surround engineered for competitive precision.",
    brands: ["TCL", "Trinnov", "Sonos"],
    image: gamingImg,
  },
  {
    icon: PartyPopper, title: "Party & Social", color: "social",
    tagline: "Dinner to dance floor in one tap.",
    promise: "Multi-zone audio, dynamic lighting and one-touch scenes — your home transforms with the moment.",
    brands: ["Pioneer", "Crestron", "Sonos"],
    image: socialImg,
  },
  {
    icon: TreePine, title: "Outdoor", color: "outdoor",
    tagline: "The garden becomes the venue.",
    promise: "Weatherproof landscape audio and outdoor cinema — invisible by day, immersive by night.",
    brands: ["Sonos", "BEC", "Lithe Audio"],
    image: outdoorImg,
  },
  {
    icon: Sun, title: "Relaxation", color: "relax",
    tagline: "A home that helps you exhale.",
    promise: "Circadian lighting, climate and sound — orchestrated to support how you live, sleep and recover.",
    brands: ["Crestron", "Lutron", "Lyngdorf"].filter(b => brandLogos[b]),
    image: relaxImg,
  },
  {
    icon: Home, title: "Whole Home", color: "gold",
    tagline: "Every room. One language.",
    promise: "A unified Crestron OS — every system, every room, controlled with effortless consistency.",
    brands: ["Crestron", "Cisco", "Sonos"],
    image: wholeHomeImg,
  },
  {
    icon: Shield, title: "Security", color: "cat-security",
    tagline: "Powerful. Invisible.",
    promise: "AI-driven surveillance and access control engineered to protect without intruding on the design.",
    brands: ["QuantIQ", "Cisco"],
    image: securityImg,
  },
  {
    icon: Wifi, title: "Connectivity", color: "connectivity",
    tagline: "The invisible backbone.",
    promise: "Enterprise-grade Wi-Fi 6E and structured networks built to never fail when it matters.",
    brands: ["Cisco", "Crestron"],
    image: connectivityImg,
  },
];

const accentMap: Record<string, string> = {
  cinema: "bg-cinema", music: "bg-music", performance: "bg-performance",
  gaming: "bg-gaming", social: "bg-social", outdoor: "bg-outdoor",
  relax: "bg-relax", gold: "bg-primary", "cat-security": "bg-cat-security",
  connectivity: "bg-connectivity",
};

const ROTATE_MS = 6000;

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
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] bg-obsidian overflow-hidden">
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
                <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                  What we do
                </p>
                <p className="font-display text-xl md:text-2xl font-light leading-snug text-platinum">
                  {exp.promise}
                </p>

                <Link
                  to="/design"
                  className="inline-flex items-center gap-1 mt-8 font-body text-sm text-music hover:opacity-80 transition-opacity"
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
