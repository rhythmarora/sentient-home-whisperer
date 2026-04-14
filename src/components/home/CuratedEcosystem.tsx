import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ecosystem = [
  { name: "Sonance", category: "Architectural Audio", slug: "sonance" },
  { name: "JBL Synthesis", category: "Cinema Systems", slug: "jbl-synthesis" },
  { name: "Lutron", category: "Lighting Control", slug: "lutron" },
  { name: "Ruckus", category: "Enterprise Networking", slug: "ruckus" },
  { name: "Hikvision", category: "Security Systems", slug: "hikvision" },
  { name: "Sony", category: "Projection", slug: "sony" },
];

export default function CuratedEcosystem() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Ecosystem
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-medium">
            Every component, intentionally chosen
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ecosystem.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/brands/${brand.slug}`}
                className="group block p-6 rounded-sm border border-border hover:border-music/20 text-center transition-all duration-300"
              >
                <p className="font-display text-lg font-semibold group-hover:text-music transition-colors">
                  {brand.name}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  {brand.category}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            to="/brands"
            className="font-body text-sm text-music hover:opacity-80 transition-opacity"
          >
            View all brands →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
