import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Sound",
    principle: "Accuracy over exaggeration",
    description: "We choose speakers that reveal the truth of a recording — not ones that artificially color it. When you hear a voice, you hear the breath behind it. When you hear an orchestra, you hear the room it was recorded in. This is what separates hi-fi from loud.",
  },
  {
    title: "Bass",
    principle: "Integration over loudness",
    description: "Bass isn't about how hard a subwoofer hits. It's about how seamlessly low frequencies blend with mids and highs, how the room disappears, and how you feel the music in your chest without ever hearing a subwoofer. This is the art of bass management.",
  },
  {
    title: "Control",
    principle: "Simplicity over complexity",
    description: "The best automation is the kind you forget exists. One touch dims the lights, lowers the shades, starts the film. Your grandmother should be able to use it. If a system needs an instruction manual, we haven't done our job.",
  },
  {
    title: "Design",
    principle: "Invisible technology",
    description: "Speakers that vanish into walls. Equipment rooms hidden behind panels. Touchscreens that blend with interiors. Technology should enhance a space — never dominate it. The best system is one you never see.",
  },
  {
    title: "Integration",
    principle: "Everything works together",
    description: "A Qubix home isn't a collection of devices — it's a living ecosystem. Your cinema talks to your lighting. Your music follows you room to room. Your security system knows when you're home. Every layer is connected, every system aware.",
  },
];

export default function Philosophy() {
  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            System Philosophy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-medium mb-6"
          >
            What we <span className="italic text-gold-gradient">believe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            These are the principles that guide every system we design. 
            Not specifications — beliefs.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-0">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="py-16 border-b border-border last:border-0"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-body text-xs text-primary tracking-wider">
                  0{i + 1}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-medium">
                  {section.title}
                </h2>
              </div>
              <p className="font-display text-lg italic text-primary mb-6 ml-8">
                {section.principle}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed ml-8 max-w-3xl">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-3xl md:text-5xl italic text-muted-foreground leading-tight"
          >
            "You don't see the system.
            <br />
            <span className="text-gold-gradient">You feel it.</span>"
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
