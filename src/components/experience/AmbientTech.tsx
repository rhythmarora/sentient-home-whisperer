import { motion } from "framer-motion";
import {
  Volume2,
  Monitor,
  Tv,
  Projector,
  Speaker,
  Smartphone,
  Users,
  PanelTop,
} from "lucide-react";
import { ambientTech } from "@/data/experienceZones";

const iconMap: Record<string, React.ElementType> = {
  Volume2,
  Monitor,
  Tv,
  Projector,
  Speaker,
  Smartphone,
  Users,
  PanelTop,
};

export default function AmbientTech() {
  return (
    <section className="py-24 lg:py-32 px-6 border-b border-border/50 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Hidden in Plain Sight
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground mb-4">
            Technology you won't see —{" "}
            <span className="italic text-gradient-vibrant">until you do.</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Scattered across our demo zones, you'll find innovations hiding in plain sight. 
            These aren't in a specific room — they're woven into the fabric of the experience.
          </p>
        </motion.div>

        {/* Grid — all visible at once */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ambientTech.map((item, i) => {
            const Icon = iconMap[item.icon] || Volume2;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-sm border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display text-base font-semibold text-foreground mb-2">
                  {item.name}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
