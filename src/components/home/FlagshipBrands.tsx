import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const flagshipBrands = [
  {
    name: "PMC",
    tagline: "The reference standard in studio monitoring, now in your home.",
    description: "Used by Abbey Road Studios and the world's top mastering engineers. PMC speakers deliver truth — every note, exactly as the artist intended.",
    category: "Cinema · Music",
    slug: "pmc",
  },
  {
    name: "Crestron",
    tagline: "The operating system of the intelligent home.",
    description: "The gold standard in residential automation. Crestron unifies lighting, AV, climate, and security into a single, effortless experience.",
    category: "Automation · Control",
    slug: "crestron",
  },
  {
    name: "Wharfedale",
    tagline: "British heritage. Musical soul.",
    description: "Over 90 years of speaker design excellence. Wharfedale brings warmth, musicality, and emotional connection to every listening moment.",
    category: "Music · Living",
    slug: "wharfedale",
  },
  {
    name: "Meyer Sound",
    tagline: "Concert-grade immersion. Residential scale.",
    description: "From the world's finest concert halls to your private cinema. Meyer Sound delivers impact, precision, and emotional power without compromise.",
    category: "Cinema · Social",
    slug: "meyer-sound",
  },
];

export default function FlagshipBrands() {
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
            Flagship Partners
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium">
            Curated for excellence
          </h2>
        </motion.div>

        <div className="space-y-8">
          {flagshipBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={`/brands/${brand.slug}`}
                className="group block p-8 md:p-12 rounded-sm border border-border bg-card hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="md:w-48 shrink-0">
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient group-hover:opacity-90 transition-opacity">
                      {brand.name}
                    </h3>
                    <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-2">
                      {brand.category}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-lg md:text-xl italic text-foreground mb-3">
                      "{brand.tagline}"
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
