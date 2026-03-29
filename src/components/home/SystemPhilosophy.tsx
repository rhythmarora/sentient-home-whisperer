import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const philosophyBlocks = [
  {
    title: "Sound", color: "cinema",
    body: "We choose speakers that reveal the truth of a recording — not ones that artificially color it. PMC monitors are used in Abbey Road, and they're in our cinemas too. When you hear a voice, you hear the breath behind it.",
    micro: "PMC · Wisdom Audio · BEC Acoustique",
  },
  {
    title: "Bass", color: "music",
    body: "Bass should integrate seamlessly into the room — felt in the chest, never boomy, never localized. REL subwoofers don't just play bass — they pressurize the room. You only notice when they're off.",
    micro: "REL Acoustics",
  },
  {
    title: "Control", color: "social",
    body: "Technology should disappear behind a single, intuitive interface. One touch dims the lights, lowers the shades, starts the film. Your grandmother should be able to use it. If a system needs an instruction manual, we haven't done our job.",
    micro: "Crestron · RTI · Lutron",
  },
  {
    title: "Immersion", color: "relax",
    body: "For select spaces, we design fully immersive environments using Constellation by Meyer Sound — active acoustics that transform a room's sonic character in real time. The only residential demo in the Indian subcontinent is at our Experience Center.",
    micro: "Meyer Sound · Constellation",
  },
];

const designApproach = [
  { num: "01", title: "Designed before it is priced" },
  { num: "02", title: "Simulated before it is installed" },
  { num: "03", title: "Calibrated after it is built" },
];

const textColorMap: Record<string, string> = {
  cinema: "text-cinema", music: "text-music", social: "text-social", relax: "text-relax",
};

export default function SystemPhilosophy() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium text-gradient-vibrant">
            We don't choose products. We choose outcomes.
          </h2>
        </motion.div>
      </div>

      {/* Philosophy blocks */}
      {philosophyBlocks.map((block, i) => (
        <div key={block.title} className={`py-16 px-6 ${i % 2 === 0 ? "" : "bg-card"}`}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
              <div>
                <h3 className={`font-display text-3xl md:text-4xl font-semibold ${textColorMap[block.color]}`}>
                  {block.title}
                </h3>
              </div>
              <div className="md:col-span-2">
                <p className="font-body text-base text-platinum/80 leading-relaxed mb-4">
                  {block.body}
                </p>
                <p className="font-body text-xs text-muted-foreground italic">
                  Powered by: {block.micro}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      ))}

      {/* Design Approach */}
      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {designApproach.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-sm border border-graphite bg-carbon"
              >
                <span className="font-display text-3xl font-bold text-gradient-vibrant">{item.num}</span>
                <p className="font-display text-lg font-medium mt-3">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cinematic finale */}
      <div className="py-32 px-6 film-grain relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <p className="font-display text-4xl md:text-7xl font-medium text-platinum mb-4">
              You don't see the system.
            </p>
            <p className="font-display text-4xl md:text-7xl font-medium text-gradient-vibrant italic">
              You feel it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
