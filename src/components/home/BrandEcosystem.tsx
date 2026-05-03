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
  cinema: "border-t-music", music: "border-t-music", social: "border-t-music", relax: "border-t-music",
};
const textMap: Record<string, string> = {
  cinema: "text-music", music: "text-music", social: "text-music", relax: "text-music",
};

const ecosystemCategories = [
  {
    title: "High-Fidelity & Listening", color: "gaming",
    brands: [
      { name: "McIntosh", slug: "mcintosh" },
      { name: "Luxman", slug: "luxman" },
      { name: "Devialet", slug: "devialet" },
      { name: "Rotel", slug: "rotel" },
      { name: "Wharfedale", slug: "wharfedale" },
    ],
  },
  {
    title: "Architectural & Distributed Audio", color: "outdoor",
    brands: [
      { name: "Sonance", slug: "sonance" },
      { name: "Amina", slug: "amina" },
      { name: "Proficient Audio", slug: "proficient-audio" },
      { name: "Sonos", slug: "sonos" },
    ],
  },
  {
    title: "Immersive & Performance Audio", color: "performance",
    brands: [
      { name: "K-Array", slug: "k-array" },
      { name: "Void Acoustics", slug: "void-acoustics" },
      { name: "CSC Audio", slug: "csc-audio" },
      { name: "Byford Audio", slug: "byford-audio" },
    ],
  },
  {
    title: "Cinema & Video Processing", color: "cinema",
    brands: [
      { name: "Trinnov", slug: "trinnov" },
      { name: "Arcam", slug: "arcam" },
      { name: "StormAudio", slug: "stormaudio" },
      { name: "Lumagen", slug: "lumagen" },
      { name: "SIM2", slug: "sim2" },
    ],
  },
  {
    title: "Amplification & Signal", color: "music",
    brands: [
      { name: "Powersoft", slug: "powersoft" },
      { name: "Blustream", slug: "blustream" },
    ],
  },
  {
    title: "Infrastructure & Control", color: "connectivity",
    brands: [
      { name: "Basalte", slug: "basalte" },
      { name: "KNX", slug: "knx" },
    ],
  },
  {
    title: "Security & Access", color: "cat-security",
    brands: [
      { name: "Ajax", slug: "ajax" },
      { name: "ekey", slug: "ekey" },
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
                  <span className="font-body text-xs text-music italic">{brand.note}</span>
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
            The wider toolkit
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-medium mb-3">
            A few names you'll recognise
          </h3>
          <p className="font-body text-sm text-silver max-w-2xl mx-auto">
            Different rooms call for different tools. These are some of the names we reach for, depending on the brief.
          </p>
        </motion.div>

        <div className="border-t border-graphite">
          {ecosystemCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-graphite items-center"
            >
              <div className="md:col-span-3 flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${ecoColorDotMap[cat.color]}`} />
                <h4 className="font-display text-base font-medium text-platinum">{cat.title}</h4>
              </div>
              <div className="md:col-span-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                {cat.brands.map((b) => (
                  <Link
                    key={b.name}
                    to={`/brands/${b.slug}`}
                    title={b.name}
                    className="group h-9 flex items-center px-3 rounded-sm border border-transparent hover:border-graphite/60 hover:bg-carbon/40 transition-all duration-300"
                  >
                    {brandLogos[b.name] ? (
                      <img
                        src={brandLogos[b.name]}
                        alt={b.name}
                        className="h-5 md:h-6 w-auto max-w-[110px] object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      <span className="font-body text-sm tracking-wide text-silver/70 group-hover:text-platinum transition-colors">
                        {b.name}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-2">
          <p className="font-body text-sm text-silver italic">…and plenty more, depending on the room.</p>
        </div>
      </div>
    </section>
  );
}
