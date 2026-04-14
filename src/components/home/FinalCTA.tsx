import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-6 leading-tight">
            Let's design{" "}
            <span className="italic text-gold-gradient">your home.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Walk through India's only Constellation by Meyer Sound demo. 
            Experience 12 curated technology zones. Then let's talk about your home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/design"
              className="px-8 py-4 font-body font-medium text-sm tracking-wider bg-[#FFFFFF] text-[#0A0A0A] rounded-sm hover:bg-[#F0F0F0] transition-colors"
            >
              Design My Home
            </Link>
            <Link
              to="/experience-center"
              className="px-8 py-4 font-body text-sm tracking-wider text-foreground border border-border rounded-sm hover:border-primary/50 transition-colors"
            >
              Visit the Experience Center
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
