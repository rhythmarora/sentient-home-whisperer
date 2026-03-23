import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Film, Music, Mic, Gamepad2, PartyPopper, TreePine,
  Sun, Home, Shield, Wifi, Check
} from "lucide-react";

const filters = ["All", "Entertainment", "Lifestyle", "Infrastructure"];

const experiences = [
  {
    icon: Film, title: "Cinema", color: "cinema", filter: "Entertainment",
    description: "Private theatres engineered for precision, depth, and immersion.",
    tier: "Signature Cinema", features: ["Dolby Atmos 9.4.6", "Acoustic Treatment", "4K Laser Projection", "Automated Masking"],
  },
  {
    icon: Music, title: "Music", color: "music", filter: "Entertainment",
    description: "Whole-home audio that flows without interruption.",
    tier: "Audiophile Grade", features: ["Hi-Res Streaming", "Multi-zone Audio", "Room Correction", "Vinyl Integration"],
  },
  {
    icon: Mic, title: "Performance", color: "performance", filter: "Entertainment",
    description: "Not a room. A stage. Mic integration, lighting scenes, screen sync.",
    tier: "Performance Suite", features: ["Pro Karaoke System", "Stage Lighting", "Wireless Mics", "Video Sync"],
  },
  {
    icon: Gamepad2, title: "Gaming", color: "gaming", filter: "Entertainment",
    description: "Purpose-built sanctuaries for immersive play.",
    tier: "Gaming Den", features: ["Low-latency Display", "Surround Sound", "Ambient Lighting", "Acoustic Isolation"],
  },
  {
    icon: PartyPopper, title: "Party & Social", color: "social", filter: "Lifestyle",
    description: "Karaoke rooms, lounges, and party spaces designed for energy.",
    tier: "Social Hub", features: ["Multi-source Audio", "Dynamic Lighting", "Bass Integration", "Scene Control"],
  },
  {
    icon: TreePine, title: "Outdoor", color: "outdoor", filter: "Lifestyle",
    description: "Gardens and terraces that transform into entertainment zones.",
    tier: "Landscape Audio", features: ["Weather-resistant Speakers", "Landscape Sub", "Outdoor Cinema", "Zone Control"],
  },
  {
    icon: Sun, title: "Relaxation", color: "relax", filter: "Lifestyle",
    description: "Spaces that adapt — lighting, climate, and control in harmony.",
    tier: "Wellness Zone", features: ["Circadian Lighting", "Climate Integration", "Sound Masking", "Scene Automation"],
  },
  {
    icon: Home, title: "Whole Home", color: "gold", filter: "Lifestyle",
    description: "Every room unified into one seamless living experience.",
    tier: "Total Integration", features: ["Unified Control", "Multi-room Audio", "Smart Scenes", "Voice Control"],
  },
  {
    icon: Shield, title: "Security", color: "cat-security", filter: "Infrastructure",
    description: "Security, monitoring, and access — powerful, but unseen.",
    tier: "Invisible Shield", features: ["AI Surveillance", "Biometric Access", "Perimeter Detection", "Remote Monitor"],
  },
  {
    icon: Wifi, title: "Connectivity", color: "connectivity", filter: "Infrastructure",
    description: "Enterprise-grade networking. The invisible backbone of everything.",
    tier: "Enterprise Network", features: ["Wi-Fi 6E", "VLAN Segmentation", "Remote Management", "Redundancy"],
  },
];

const colorMap: Record<string, string> = {
  cinema: "bg-cinema", music: "bg-music", performance: "bg-performance",
  gaming: "bg-gaming", social: "bg-social", outdoor: "bg-outdoor",
  relax: "bg-relax", gold: "bg-primary", "cat-security": "bg-cat-security",
  connectivity: "bg-connectivity",
};

const textColorMap: Record<string, string> = {
  cinema: "text-cinema", music: "text-music", performance: "text-performance",
  gaming: "text-gaming", social: "text-social", outdoor: "text-outdoor",
  relax: "text-relax", gold: "text-primary", "cat-security": "text-cat-security",
  connectivity: "text-connectivity",
};

export default function ExperienceCategories() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? experiences
    : experiences.filter((e) => e.filter === activeFilter);

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
            Select an experience. Our intelligence will design the architecture required to deliver it.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setExpandedIndex(null); }}
              className={`relative px-5 py-2 font-body text-sm rounded-full transition-colors ${
                activeFilter === f ? "text-white" : "text-silver hover:text-foreground"
              }`}
            >
              {activeFilter === f && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-vibrant rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((exp, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <motion.div
                  key={exp.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="cursor-pointer group p-6 rounded-sm bg-carbon border border-graphite hover:border-muted-foreground/20 transition-all duration-300"
                >
                  {/* Colored accent line */}
                  <div className={`h-0.5 w-12 ${colorMap[exp.color]} rounded-full mb-5`} />
                  <exp.icon className={`w-6 h-6 ${textColorMap[exp.color]} mb-4`} />
                  <h3 className="font-display text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="font-body text-sm text-silver leading-relaxed">{exp.description}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 pt-5 border-t border-graphite">
                          <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-3">
                            AI Recommendation
                          </p>
                          <p className={`font-display text-lg font-semibold ${textColorMap[exp.color]} mb-3`}>
                            {exp.tier}
                          </p>
                          <ul className="space-y-2">
                            {exp.features.map((f) => (
                              <li key={f} className="flex items-center gap-2 font-body text-sm text-platinum/80">
                                <Check className={`w-4 h-4 ${textColorMap[exp.color]}`} />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <Link
                            to="/design"
                            className="inline-block mt-4 font-body text-xs text-primary hover:text-gold-light transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Design this experience →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
