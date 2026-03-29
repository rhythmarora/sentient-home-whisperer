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
    <section className="py-20 px-6 border-b border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Hidden in Plain Sight
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-3">
            Technology you won't see — until you do.
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-2xl">
            Scattered across our demo zones, you'll find innovations hiding in plain sight. 
            These aren't in a specific room — they're woven into the fabric of the experience.
          </p>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {ambientTech.map((item, i) => {
            const Icon = iconMap[item.icon] || Volume2;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="shrink-0 w-56 p-5 rounded-sm border border-border bg-card/50 hover:border-primary/30 transition-colors"
              >
                <Icon className="w-5 h-5 text-primary mb-3" />
                <p className="font-body text-sm font-medium text-foreground mb-1">
                  {item.name}
                </p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
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
