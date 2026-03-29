import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pillars = [
  { title: "Sound", description: "PMC accuracy over exaggeration" },
  { title: "Bass", description: "REL integration over loudness" },
  { title: "Control", description: "Crestron simplicity over complexity" },
  { title: "Design", description: "Invisible technology" },
  { title: "Immersion", description: "Constellation acoustics" },
];

export default function PhilosophyPreview() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-12">
            What we believe
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 border border-border rounded-sm"
            >
              <h3 className="font-display text-lg text-primary mb-2">{pillar.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-display text-xl md:text-2xl italic text-muted-foreground mb-8"
        >
          "You don't see the system. You feel it."
        </motion.p>

        <Link
          to="/philosophy"
          className="font-body text-sm text-primary hover:text-gold-light transition-colors"
        >
          Read our philosophy →
        </Link>
      </div>
    </section>
  );
}
