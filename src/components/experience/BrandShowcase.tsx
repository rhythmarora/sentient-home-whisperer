import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { brandLogos } from "@/data/brandLogos";
import { experienceBrands } from "@/data/experienceBrands";

export default function BrandShowcase() {
  return (
    <section className="py-24 lg:py-32 px-6 border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            The Brands We Exhibit
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">
            Know the technology behind{" "}
            <span className="italic text-gradient-vibrant">every zone</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
            Each brand at the Qubix Experience Center is chosen for a reason — 
            explore the companies powering your future home.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {experienceBrands.map((brand, i) => {
            const logo = brandLogos[brand.logoKey];
            return (
              <motion.a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="group relative flex flex-col items-center justify-between p-5 md:p-6 rounded-sm border border-border/60 bg-card/40 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              >
                {/* External link icon */}
                <ExternalLink className="absolute top-3 right-3 w-3 h-3 text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-all duration-300" />

                {/* Logo */}
                <div className="h-10 md:h-12 flex items-center justify-center mb-4 w-full">
                  {logo ? (
                    <img
                      src={logo}
                      alt={brand.name}
                      className="h-6 md:h-8 w-auto max-w-[100px] md:max-w-[120px] object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <span className="font-display text-lg font-bold text-foreground/70 group-hover:text-foreground transition-colors">
                      {brand.name}
                    </span>
                  )}
                </div>

                {/* Brand name */}
                <p className="font-display text-xs md:text-sm font-semibold text-foreground mb-1 text-center">
                  {brand.name}
                </p>

                {/* USP */}
                <p className="font-body text-[10px] md:text-xs text-muted-foreground text-center leading-relaxed">
                  {brand.usp}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
