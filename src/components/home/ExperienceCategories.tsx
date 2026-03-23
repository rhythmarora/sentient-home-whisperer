import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Film, Music, Sofa, TreePine, Wine, Eye } from "lucide-react";

const categories = [
  {
    icon: Film,
    title: "Cinema",
    description: "Private theatres that rival the world's finest screening rooms",
    href: "/spaces#cinema",
  },
  {
    icon: Music,
    title: "Music",
    description: "Audiophile-grade listening rooms and whole-home audio",
    href: "/spaces#music",
  },
  {
    icon: Sofa,
    title: "Living",
    description: "Invisible technology that elevates everyday moments",
    href: "/spaces#living",
  },
  {
    icon: TreePine,
    title: "Outdoor",
    description: "Landscape audio and weatherproof entertainment zones",
    href: "/spaces#outdoor",
  },
  {
    icon: Wine,
    title: "Social",
    description: "Karaoke, lounge, and entertainment spaces for hosting",
    href: "/spaces#social",
  },
  {
    icon: Eye,
    title: "Invisible Tech",
    description: "Automation, lighting, and security — felt but never seen",
    href: "/systems",
  },
];

export default function ExperienceCategories() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Experience Zones
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium">
            Every space tells a story
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={cat.href}
                className="group block p-8 rounded-sm border border-border bg-card hover:border-primary/30 hover:glow-gold transition-all duration-500"
              >
                <cat.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl mb-3 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
