import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const allBrands = [
  {
    name: "PMC",
    philosophy: "Truth in sound. PMC speakers are the reference standard in the world's top recording studios — from Abbey Road to Sony Music.",
    fit: "Cinema · Music",
    slug: "pmc",
    featured: true,
  },
  {
    name: "Crestron Home",
    philosophy: "The gold standard in residential automation. Crestron Home unifies every system in your home into a single, elegant control experience.",
    fit: "Automation · Control",
    slug: "crestron-home",
    featured: true,
  },
  {
    name: "Wharfedale",
    philosophy: "Over 90 years of British speaker design heritage. Musical warmth and emotional connection in every note.",
    fit: "Music · Living",
    slug: "wharfedale",
    featured: true,
  },
  {
    name: "Meyer Sound",
    philosophy: "From the world's finest concert halls to your home. Concert-grade immersion at residential scale.",
    fit: "Cinema · Social",
    slug: "meyer-sound",
    featured: true,
  },
  {
    name: "Sonance",
    philosophy: "Architectural audio that disappears into your spaces. Invisible technology, undeniable presence.",
    fit: "Living · Outdoor",
    slug: "sonance",
    featured: false,
  },
  {
    name: "JBL Synthesis",
    philosophy: "Hollywood meets home cinema. Reference-grade systems engineered for the ultimate theatre experience.",
    fit: "Cinema",
    slug: "jbl-synthesis",
    featured: false,
  },
  {
    name: "Lutron",
    philosophy: "The world leader in lighting control. Scenes, shading, and ambience — all orchestrated with precision.",
    fit: "Lighting · Ambience",
    slug: "lutron",
    featured: false,
  },
  {
    name: "Ruckus",
    philosophy: "Enterprise-grade networking for demanding homes. High-density WiFi that never drops, never lags.",
    fit: "Infrastructure",
    slug: "ruckus",
    featured: false,
  },
  {
    name: "Hikvision",
    philosophy: "AI-powered security with intelligent analytics. Protection that's always watching, never intrusive.",
    fit: "Security",
    slug: "hikvision",
    featured: false,
  },
  {
    name: "Sony",
    philosophy: "Pioneering projection technology. Native 4K laser projectors that bring cinema-scale imagery to life.",
    fit: "Cinema · Projection",
    slug: "sony",
    featured: false,
  },
];

export default function Brands() {
  return (
    <Layout>
      <SEO title="Brands" description="Discover the world-class brands Qubix partners with — PMC, Lutron, Crestron, KEF, Trinnov, and more." path="/brands" />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Our Partners
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-medium mb-6"
          >
            Curated for <span className="italic text-gold-gradient">excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We don't carry every brand. We carry the right ones — each chosen 
            for a specific role in creating extraordinary home experiences.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {allBrands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to={`/brands/${brand.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-sm border border-border bg-card hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-gold-gradient w-40 shrink-0">
                    {brand.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed hidden md:block max-w-md">
                    {brand.philosophy}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">
                    {brand.fit}
                  </span>
                  {brand.featured && (
                    <span className="px-2 py-1 text-xs font-body bg-primary/10 text-primary rounded-sm">
                      Flagship
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
