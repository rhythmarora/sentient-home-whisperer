import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { brandLogos } from "@/data/brandLogos";

const flagshipBrands = [
  {
    name: "PMC", color: "cinema", slug: "pmc",
    tagline: "The reference standard in studio monitoring, now in your home.",
    description: "Used by Abbey Road Studios and the world's top mastering engineers. PMC speakers deliver truth — every note, exactly as the artist intended.",
    category: "Cinema · Music",
  },
  {
    name: "REL", color: "music", slug: "rel",
    tagline: "Bass you feel, never just hear.",
    description: "REL subwoofers integrate seamlessly into any room, adding foundation and weight without ever overpowering the music.",
    category: "Bass · Music",
  },
  {
    name: "Crestron", color: "social", slug: "crestron",
    tagline: "The operating system of the intelligent home.",
    description: "The gold standard in residential automation. Crestron unifies lighting, AV, climate, and security into a single, effortless experience.",
    category: "Automation · Control",
  },
  {
    name: "Meyer Sound", color: "relax", slug: "meyer-sound",
    tagline: "Concert-grade immersion. Residential scale.",
    description: "From the world's finest concert halls to your private cinema. Meyer Sound delivers impact, precision, and emotional power without compromise.",
    category: "Cinema · Social",
    note: "select projects",
  },
];

const colorBorderMap: Record<string, string> = {
  cinema: "border-t-cinema", music: "border-t-music", social: "border-t-social", relax: "border-t-relax",
};
const textMap: Record<string, string> = {
  cinema: "text-cinema", music: "text-music", social: "text-social", relax: "text-relax",
};

const ecosystemCategories = [
  {
    title: "High-Fidelity & Listening", color: "gaming",
    brands: [
      { name: "McIntosh", desc: "Legendary amplification" },
      { name: "Luxman", desc: "Japanese precision" },
      { name: "Devialet", desc: "Phantom engineering" },
      { name: "Rotel", desc: "Musical transparency" },
      { name: "Wharfedale", desc: "British heritage" },
    ],
  },
  {
    title: "Architectural & Distributed Audio", color: "outdoor",
    brands: [
      { name: "Sonance", desc: "Invisible speakers" },
      { name: "Amina", desc: "Plaster-over audio" },
      { name: "Proficient Audio", desc: "Distributed systems" },
      { name: "Sonos", desc: "Multi-room streaming" },
    ],
  },
  {
    title: "Immersive & Performance Audio", color: "performance",
    brands: [
      { name: "K-array", desc: "Italian micro speakers" },
      { name: "Void Acoustics", desc: "Club-grade impact" },
      { name: "CSC Audio", desc: "Custom installations" },
      { name: "Byford Audio", desc: "Professional monitoring" },
    ],
  },
  {
    title: "Cinema & Video Processing", color: "cinema",
    brands: [
      { name: "Trinnov", desc: "Room optimization" },
      { name: "Arcam", desc: "British AV processing" },
      { name: "StormAudio", desc: "Immersive processing" },
      { name: "Lumagen", desc: "Video scaling" },
      { name: "SIM2", desc: "Italian projection" },
    ],
  },
  {
    title: "Amplification & Signal", color: "music",
    brands: [
      { name: "Powersoft", desc: "Class-D amplification" },
      { name: "Blustream", desc: "AV distribution" },
    ],
  },
  {
    title: "Infrastructure & Control", color: "connectivity",
    brands: [
      { name: "Basalte", desc: "Elegant interfaces" },
      { name: "KNX", desc: "Building intelligence" },
    ],
  },
  {
    title: "Security & Access", color: "cat-security",
    brands: [
      { name: "Ajax", desc: "Wireless security" },
      { name: "ekey", desc: "Biometric access" },
    ],
  },
];

const ecoColorDotMap: Record<string, string> = {
  gaming: "bg-gaming", outdoor: "bg-outdoor", performance: "bg-performance",
  cinema: "bg-cinema", music: "bg-music", connectivity: "bg-connectivity", "cat-security": "bg-cat-security",
};
const ecoBorderMap: Record<string, string> = {
  gaming: "hover:border-gaming/40", outdoor: "hover:border-outdoor/40", performance: "hover:border-performance/40",
  cinema: "hover:border-cinema/40", music: "hover:border-music/40", connectivity: "hover:border-connectivity/40",
  "cat-security": "hover:border-cat-security/40",
};

export default function BrandEcosystem() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* FLAGSHIP BRANDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            The world's best technology. <span className="italic text-gradient-vibrant">Thoughtfully chosen.</span>
          </h2>
          <p className="font-body text-base text-silver max-w-2xl mx-auto">
            We work with some of the most respected names in sound, control, and immersive technology — integrated into a single seamless system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {flagshipBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/brands/${brand.slug}`}
                className={`group block p-6 rounded-sm bg-carbon border border-graphite border-t-2 ${colorBorderMap[brand.color]} hover:bg-carbon/80 transition-all duration-300`}
              >
                <div className="h-10 flex items-center mb-4">
                  {brandLogos[brand.name] ? (
                    <img
                      src={brandLogos[brand.name]}
                      alt={brand.name}
                      className="h-7 md:h-8 w-auto max-w-[130px] object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <h3 className={`font-display text-2xl font-bold ${textMap[brand.color]}`}>
                      {brand.name}
                    </h3>
                  )}
                </div>
                {brand.note && (
                  <span className="font-body text-xs text-relax italic">{brand.note}</span>
                )}
                <p className="font-body text-sm text-silver mt-3 leading-relaxed">{brand.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="font-body text-sm text-ash italic text-center mb-24">
          Brands appear as validation of our standards, never as the headline.
        </p>

        {/* CURATED ECOSYSTEM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Beyond the Core
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-medium mb-3">
            Curated Technology Ecosystem
          </h3>
          <p className="font-body text-sm text-silver max-w-2xl mx-auto">
            Beyond our core systems, we work with a curated selection of global brands — each chosen for a specific role within a project.
          </p>
        </motion.div>

        <div className="space-y-10">
          {ecosystemCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-2 rounded-full ${ecoColorDotMap[cat.color]}`} />
                <h4 className="font-display text-lg font-semibold">{cat.title}</h4>
              </div>
              <div className="h-px bg-graphite mb-4" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.brands.map((b) => (
                  <div
                    key={b.name}
                    className={`group p-4 rounded-sm bg-carbon/60 border border-graphite ${ecoBorderMap[cat.color]} transition-all duration-300`}
                  >
                    <div className="h-8 flex items-center mb-2">
                      {brandLogos[b.name] ? (
                        <img
                          src={brandLogos[b.name]}
                          alt={b.name}
                          className="h-5 md:h-6 w-auto max-w-[100px] object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <p className="font-display text-base font-semibold">{b.name}</p>
                      )}
                    </div>
                    <p className="font-body text-xs text-silver mt-1">{b.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-2">
          <p className="font-body text-sm text-silver italic">And many more — selected per project, without limitation.</p>
          <p className="font-body text-xs text-ash">We work with the best technology available, not just what's standard.</p>
        </div>
      </div>
    </section>
  );
}
