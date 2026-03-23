import { motion } from "framer-motion";

const groups = [
  {
    name: "Entertainment", color: "cinema",
    items: ["Cinema", "Music", "Karaoke", "Gaming"],
  },
  {
    name: "Ambience", color: "social",
    items: ["Lighting", "Shading", "Climate"],
  },
  {
    name: "Infrastructure", color: "connectivity",
    items: ["Network", "AV Distribution", "Cabling"],
  },
  {
    name: "Protection", color: "cat-security",
    items: ["CCTV", "Access", "Alarms"],
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  cinema: { text: "text-cinema", bg: "bg-cinema/10", border: "border-cinema/30" },
  social: { text: "text-social", bg: "bg-social/10", border: "border-social/30" },
  connectivity: { text: "text-connectivity", bg: "bg-connectivity/10", border: "border-connectivity/30" },
  "cat-security": { text: "text-cat-security", bg: "bg-cat-security/10", border: "border-cat-security/30" },
};

export default function HomeOS() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            One Home. One <span className="italic text-gradient-vibrant">Brain.</span>
          </h2>
        </motion.div>

        {/* Hub diagram */}
        <div className="relative max-w-2xl mx-auto">
          {/* Center hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-32 h-32 mx-auto rounded-full bg-gradient-vibrant flex items-center justify-center shadow-2xl relative z-10"
          >
            <div className="text-center">
              <p className="font-display text-lg font-bold text-white">QUBIX</p>
              <p className="font-body text-[9px] text-white/70 uppercase tracking-widest">Home OS</p>
            </div>
          </motion.div>

          {/* Connecting lines + orbiting groups */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {groups.map((group, i) => {
              const c = colorMap[group.color];
              return (
                <motion.div
                  key={group.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`p-5 rounded-sm border ${c.border} ${c.bg}`}
                >
                  {/* Connecting line dot */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${c.text === "text-cinema" ? "bg-cinema" : c.text === "text-social" ? "bg-social" : c.text === "text-connectivity" ? "bg-connectivity" : "bg-cat-security"}`} />
                    <h4 className={`font-display text-lg font-semibold ${c.text}`}>{group.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="px-2.5 py-1 font-body text-xs bg-carbon/80 rounded-full text-platinum/70 border border-graphite">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
