import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "The Oberoi Residence",
    location: "Bangalore",
    description: "A 12,000 sq ft penthouse transformed into a cinematic sanctuary — with a Dolby Atmos private theatre, whole-home audio across 14 zones, and lighting that shifts with the sun.",
    systems: ["Cinema", "Audio", "Lighting", "Automation"],
    slug: "oberoi-residence",
  },
  {
    title: "Villa Serenity",
    location: "Goa",
    description: "Where tropical architecture meets invisible technology. Landscape audio flows through gardens, while the open-air lounge features weather-resistant cinema under the stars.",
    systems: ["Outdoor", "Cinema", "Networking"],
    slug: "villa-serenity",
  },
  {
    title: "The Prestige Tower",
    location: "Bangalore",
    description: "A full-floor apartment with a dedicated karaoke room, audiophile listening space, and Crestron automation that anticipates every need before you ask.",
    systems: ["Social", "Music", "Automation"],
    slug: "prestige-tower",
  },
  {
    title: "Emerald Bay Estate",
    location: "Delhi NCR",
    description: "A family estate where every room has its own sonic identity — from the meditative calm of the master suite to the thunderous impact of the 9.4.6 cinema room.",
    systems: ["Cinema", "Audio", "Security", "Lighting"],
    slug: "emerald-bay",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-music mb-4">
              Our Work
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium">
              Stories we've built
            </h2>
          </div>
          <Link
            to="/projects"
            className="mt-4 md:mt-0 font-body text-sm text-music hover:opacity-80 transition-opacity"
          >
            View all projects →
          </Link>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-2 lg:overflow-visible scrollbar-hide">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="min-w-[320px] lg:min-w-0"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group block"
              >
                {/* Placeholder image area */}
                <div className="aspect-[16/10] rounded-sm bg-gradient-to-br from-secondary to-card border border-border mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.systems.map((sys) => (
                        <span
                          key={sys}
                          className="px-2 py-1 text-xs font-body bg-background/80 backdrop-blur-sm rounded-sm text-muted-foreground"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  {project.location}
                </p>
                <h3 className="font-display text-xl mb-3 group-hover:text-music transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
