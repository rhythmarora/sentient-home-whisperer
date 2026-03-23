import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Essential", price: "₹15L+", color: "silver",
    description: "Core technology that elevates everyday living. Multi-room audio, basic lighting control, and reliable networking.",
    features: ["Multi-room audio (4–6 zones)", "Basic lighting scenes", "Enterprise Wi-Fi", "Centralized AV", "App control"],
  },
  {
    name: "Premium", price: "₹50L+", color: "cinema",
    description: "A serious home entertainment system. Dedicated cinema room, advanced audio, and intelligent automation.",
    features: ["Dedicated home theatre", "Dolby Atmos / DTS:X", "Advanced lighting", "Climate integration", "Touch panel control", "Security system"],
  },
  {
    name: "Signature", price: "₹2Cr+", color: "music",
    description: "A fully orchestrated living experience. Every room responds to you. Every system works as one.",
    features: ["Full Dolby Atmos cinema", "Whole-home Hi-Fi audio", "Circadian lighting", "Full automation", "Performance room", "Biometric access", "Outdoor entertainment"],
  },
  {
    name: "Bespoke", price: "₹5Cr+", color: "social",
    description: "No limits. Concert-grade sound, gallery-level lighting, museum-quality control. For the extraordinary.",
    features: ["Meyer Sound / PMC reference", "Acoustic engineering", "Custom control UI", "Art & climate integration", "Dedicated server room", "White-glove support", "International standards"],
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  silver: { border: "border-silver/30", text: "text-silver", bg: "bg-silver/10" },
  cinema: { border: "border-cinema/30", text: "text-cinema", bg: "bg-cinema/10" },
  music: { border: "border-music/30", text: "text-music", bg: "bg-music/10" },
  social: { border: "border-social/30", text: "text-social", bg: "bg-social/10" },
};

export default function BudgetEngine() {
  const [selected, setSelected] = useState(1);

  return (
    <section className="py-24 lg:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            Investment <span className="italic text-gradient-vibrant">Tiers</span>
          </h2>
          <p className="font-body text-base text-silver">
            Every tier is a starting point. Every project is unique.
          </p>
        </motion.div>

        {/* Intensity bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="h-1 bg-graphite rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-vibrant rounded-full"
              animate={{ width: `${((selected + 1) / tiers.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {tiers.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setSelected(i)}
                className={`font-body text-xs transition-colors ${selected === i ? "text-foreground" : "text-ash"}`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier, i) => {
            const c = colorMap[tier.color];
            const isSelected = selected === i;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelected(i)}
                className={`cursor-pointer p-6 rounded-sm bg-carbon border transition-all duration-300 ${
                  isSelected ? `${c.border} shadow-lg` : "border-graphite"
                }`}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-body mb-4 ${c.bg} ${c.text}`}>
                  {tier.price}
                </div>
                <h3 className={`font-display text-2xl font-semibold mb-3 ${isSelected ? c.text : "text-foreground"}`}>
                  {tier.name}
                </h3>
                <p className="font-body text-sm text-silver leading-relaxed mb-5">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-xs text-platinum/70">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${c.text}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
