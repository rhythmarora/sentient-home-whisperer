import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Film, Music, Sofa, TreePine, Wine, BookOpen } from "lucide-react";

const spaces = [
  {
    icon: Film,
    title: "Private Cinema",
    description: "From intimate screening rooms to reference-grade Dolby Atmos cinemas. PMC speakers for accuracy, REL subwoofers for depth, Trinnov altitude for room correction, and SIM2 laser projection. Every seat is the best seat.",
    features: ["PMC speakers + REL subwoofers", "Dolby Atmos 9.4.6", "SIM2 / Epson 4K laser projection", "Trinnov altitude room correction"],
    id: "cinema",
  },
  {
    icon: Music,
    title: "Listening Room",
    description: "Audiophile-grade spaces with PMC studio monitors, McIntosh amplification, and optional Constellation by Meyer Sound active acoustics. Purpose-built rooms where music isn't just heard — it's felt.",
    features: ["PMC / Dynaudio monitors", "McIntosh amplification", "Constellation active acoustics", "Roon Hi-Res streaming"],
    id: "music",
  },
  {
    icon: Sofa,
    title: "Living Spaces",
    description: "Technology that enhances without intruding. BEC Acoustique invisible speakers, Wisdom Audio in-wall arrays, Lutron circadian lighting, and displays that become art — all controlled by Crestron with a single touch.",
    features: ["BEC / Wisdom invisible speakers", "Lutron lighting & shading", "Motorised art displays", "Crestron scene control"],
    id: "living",
  },
  {
    icon: TreePine,
    title: "Outdoor & Landscape",
    description: "Your garden, terrace, and pool become extensions of your entertainment ecosystem. Sonance landscape speakers, in-ground subwoofers, and outdoor cinema — all weather-resistant, all zone-controlled.",
    features: ["Sonance landscape speakers", "In-ground subwoofers", "Outdoor cinema screen", "Weatherproof zone control"],
    id: "outdoor",
  },
  {
    icon: Wine,
    title: "Lounge & Karaoke",
    description: "Social spaces designed for energy. Professional karaoke with Meyer Sound or PMC clarity, Lutron party lighting, and bass that shakes the floor — transitioning from dinner conversation to dance floor in one tap.",
    features: ["Pro karaoke (Meyer / PMC)", "Lutron dynamic lighting", "REL bass integration", "Crestron one-tap scenes"],
    id: "social",
  },
  {
    icon: BookOpen,
    title: "Study & Office",
    description: "Focused work environments with BEC sound masking, professional video conferencing, and Lutron focused lighting that shields you from the world beyond your door.",
    features: ["BEC sound masking", "Video conferencing integration", "Lutron focused lighting", "Background audio zones"],
    id: "study",
  },
];

export default function Spaces() {
  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Spaces
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-medium mb-6"
          >
            Every room has a <span className="italic text-gold-gradient">purpose</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We design technology around how you live — not the other way around. 
            Each space is architected with the world's finest brands to deliver a specific feeling.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {spaces.map((space, i) => (
            <motion.div
              key={space.id}
              id={space.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 rounded-sm border border-border bg-card"
            >
              <div>
                <space.icon className="w-10 h-10 text-primary mb-6" />
                <h2 className="font-display text-3xl font-medium mb-4">{space.title}</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {space.description}
                </p>
                <Link
                  to="/design"
                  className="inline-flex font-body text-sm text-primary hover:text-gold-light transition-colors"
                >
                  Design this space →
                </Link>
              </div>
              <div className="space-y-3">
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-4">
                  Key Technology
                </p>
                {space.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-3 rounded-sm border border-border"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="font-body text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
