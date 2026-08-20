import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { brandLogos } from "@/data/brandLogos";
import type { Zone } from "@/data/experienceZones";

export default function ZoneCard({ zone }: { zone: Zone }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id={zone.id}
      className="scroll-mt-32 py-16 md:py-24 px-6 border-b border-border/50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-px w-24 origin-left mb-8"
          style={{ backgroundColor: zone.color }}
        />

        {/* Zone number */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-medium mb-2"
          style={{ color: `${zone.color}`, opacity: 0.15 }}
        >
          {zone.number}
        </motion.p>

        {/* Name + tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-2"
        >
          <h2 className="font-display text-2xl md:text-4xl font-medium text-foreground">
            {zone.name}
          </h2>
          {zone.tier === "enterprise" && (
            <Badge variant="outline" className="text-[10px] border-primary/30 text-primary">
              Enterprise
            </Badge>
          )}
        </motion.div>

        {/* Powered by — logos + text fallback */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-6"
        >
          <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-3">
            Powered by
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {zone.poweredBy.map((brand) => {
              const logo = brandLogos[brand];
              return logo ? (
                <img
                  key={brand}
                  src={logo}
                  alt={brand}
                  className="h-4 md:h-5 w-auto max-w-[100px] md:max-w-[120px] object-contain brightness-0 invert opacity-70"
                />
              ) : (
                <span
                  key={brand}
                  className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground"
                >
                  {brand}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-lg md:text-xl italic text-foreground/80 mb-4"
        >
          {zone.tagline}
        </motion.p>

        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22 }}
          className={cn(
            "w-full rounded-sm border border-border/40 mb-8 flex items-center justify-center overflow-hidden bg-muted/30",
            !zone.heroImage && "aspect-video"
          )}
        >
          {zone.heroImage ? (
            <img
              src={zone.heroImage}
              alt={zone.name}
              className="w-full h-auto object-contain"
            />
          ) : (
            <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground/50">
              Zone Image — {zone.name}
            </span>
          )}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mb-8"
        >
          {zone.description}
        </motion.p>

        {/* Constellation link */}
        {zone.id === "constellation-room" && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="mb-8"
          >
            <Link
              to="/constellation"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Learn more about Constellation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}

        {/* Book Now link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28 }}
          className="mb-8"
        >
          <a
            href="#book-session"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Book a session for {zone.name}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "flex items-center gap-2 font-body text-sm tracking-wider uppercase transition-colors",
            "text-primary hover:text-primary/80"
          )}
        >
          <span>See the System</span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              expanded && "rotate-180"
            )}
          />
        </motion.button>

        {/* Expanded panel */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div
                className={cn(
                  "mt-6 p-6 rounded-sm border border-border/60 bg-card/60",
                  zone.tier === "enterprise" && "border-primary/15"
                )}
              >
                {zone.roomSize && (
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
                    Room size: {zone.roomSize}
                  </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {zone.systems.map((sys) => (
                    <div key={sys.name} className="flex flex-col gap-1">
                      <p className="font-body text-sm font-medium text-foreground">
                        {sys.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {sys.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
