import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function AIEntrySection() {
  return (
    <section className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-body text-xs tracking-wider uppercase text-primary">
              AI-Powered
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-medium mb-6 leading-tight">
            Your home.{" "}
            <span className="italic text-gold-gradient">Imagined</span>
            <br />
            in minutes.
          </h2>

          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your lifestyle, your spaces, your vision. Our AI Experience 
            Builder creates a personalized technology blueprint — before you ever 
            speak to anyone.
          </p>

          <Link
            to="/design"
            className="inline-flex items-center gap-3 px-10 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            <Sparkles className="w-4 h-4" />
            Start Designing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
