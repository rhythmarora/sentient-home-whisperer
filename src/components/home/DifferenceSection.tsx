import { motion } from "framer-motion";

const points = [
  { text: "Designed before it is sold", color: "bg-cinema" },
  { text: "Acoustically engineered, not just assembled", color: "bg-music" },
  { text: "Invisible when not in use", color: "bg-social" },
  { text: "One touch. Everything responds.", color: "bg-relax" },
  { text: "Built to evolve with your life", color: "bg-gaming" },
];

export default function DifferenceSection() {
  return (
    <section className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Multi-color radial gradient bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        background: "radial-gradient(ellipse at 20% 50%, hsl(239 84% 67%), transparent 50%), radial-gradient(ellipse at 80% 30%, hsl(330 81% 60%), transparent 50%), radial-gradient(ellipse at 50% 80%, hsl(38 92% 50%), transparent 50%)",
      }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-tight">
            Most systems are installed.
            <br />
            <span className="text-gradient-vibrant italic">Ours are composed.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-graphite md:-translate-x-px" />

          <div className="space-y-12">
            {points.map((point, i) => (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-center gap-8 pl-14 md:pl-0"
              >
                {/* Dot */}
                <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full ${point.color} shadow-lg`}
                  style={{ boxShadow: `0 0 20px currentColor` }}
                />

                {/* Text */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <p className="font-display text-xl md:text-2xl font-medium">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
