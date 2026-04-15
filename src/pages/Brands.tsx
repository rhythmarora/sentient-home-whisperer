import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { brandLogos } from "@/data/brandLogos";
import { experienceBrands } from "@/data/experienceBrands";
import { brandPages } from "@/data/brandPages";

export default function Brands() {
  return (
    <Layout>
      <SEO title="Brands" description="Discover the world-class brands Qubix partners with — PMC, Lutron, Crestron, KEF, Trinnov, and more." path="/brands" />
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            Our Partners
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-medium mb-6"
          >
            Curated for <span className="italic text-gradient-vibrant">excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-base text-muted-foreground max-w-2xl mx-auto"
          >
            We don't carry every brand. We carry the right ones — each chosen
            for a specific role in creating extraordinary home experiences.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {experienceBrands.map((brand, i) => {
              const logo = brandLogos[brand.logoKey];
              const slug = Object.keys(brandPages).find(
                (key) => brandPages[key].name === brand.name
              );
              const internalRoute = brand.internalRoute ?? (slug ? `/brands/${slug}` : null);

              const tileContent = (
                <>
                  <ExternalLink className="absolute top-3 right-3 w-3 h-3 text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-all duration-300" />
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
                  <p className="font-display text-xs md:text-sm font-semibold text-foreground mb-1 text-center">
                    {brand.name}
                  </p>
                  <p className="font-body text-[10px] md:text-xs text-muted-foreground text-center leading-relaxed">
                    {brand.usp}
                  </p>
                </>
              );

              const tileClass = "group relative flex flex-col items-center justify-between p-5 md:p-6 rounded-sm border border-border/60 bg-card/40 hover:border-primary/30 hover:bg-card/80 transition-all duration-300";

              return internalRoute ? (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                >
                  <Link to={internalRoute} className={tileClass}>
                    {tileContent}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className={tileClass}
                >
                  {tileContent}
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
