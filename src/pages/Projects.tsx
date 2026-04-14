import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "The Oberoi Residence",
    location: "Bangalore",
    area: "12,000 sq ft",
    type: "Penthouse",
    description: "A cinematic sanctuary high above Bangalore's skyline. A 9.4.6 Dolby Atmos private theatre anchors this penthouse, while 14 audio zones carry music from the master suite to the terrace. Crestron automation orchestrates lighting, climate, and entertainment — all from a single, elegant interface.",
    systems: ["Dolby Atmos Cinema", "14-Zone Audio", "Crestron Automation", "Lutron Lighting", "Security"],
    slug: "oberoi-residence",
  },
  {
    title: "Villa Serenity",
    location: "Goa",
    area: "8,500 sq ft",
    type: "Villa",
    description: "Tropical architecture meets invisible technology. Meyer Sound landscape speakers blend with garden foliage, delivering concert-quality audio across outdoor spaces. The open-air lounge features a weather-resistant cinema that transforms starlit evenings into private screenings.",
    systems: ["Outdoor Cinema", "Landscape Audio", "Enterprise WiFi", "Pool Automation"],
    slug: "villa-serenity",
  },
  {
    title: "The Prestige Tower",
    location: "Bangalore",
    area: "6,200 sq ft",
    type: "Full-Floor Apartment",
    description: "Where social entertaining meets audiophile precision. A dedicated karaoke room with professional-grade audio sits alongside a purpose-built listening room housing PMC speakers. Crestron ties it all together with scenes that shift from dinner party to dance floor at a touch.",
    systems: ["Pro Karaoke Room", "PMC Listening Room", "Crestron Control", "Party Lighting"],
    slug: "prestige-tower",
  },
  {
    title: "Emerald Bay Estate",
    location: "Delhi NCR",
    area: "15,000 sq ft",
    type: "Family Estate",
    description: "A multi-generational family estate where every room has its own sonic identity. The master suite whispers with background music, the children's floor pulses with energy, and the 9.4.6 cinema room delivers impact that rivals commercial IMAX installations.",
    systems: ["9.4.6 Cinema", "Whole-Home Audio", "Biometric Security", "Scene Lighting", "Climate Control"],
    slug: "emerald-bay",
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Projects
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-medium mb-6"
          >
            Stories we've <span className="italic text-gold-gradient">built</span>
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 pb-16 border-b border-border last:border-0"
            >
              {/* Image placeholder */}
              <div className="lg:col-span-2">
                <div className="aspect-[4/3] rounded-sm bg-gradient-to-br from-secondary to-card border border-border" />
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-body text-xs tracking-wider uppercase text-primary">
                    {project.location}
                  </span>
                  <span className="text-border">·</span>
                  <span className="font-body text-xs text-muted-foreground">
                    {project.type} · {project.area}
                  </span>
                </div>
                <h2 className="font-display text-3xl font-medium mb-4">{project.title}</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.systems.map((sys) => (
                    <span
                      key={sys}
                      className="px-3 py-1.5 text-xs font-body border border-border rounded-sm text-muted-foreground"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-6">
            Envision your own project
          </h2>
          <Link
            to="/design"
            className="inline-flex px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            Design My Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
