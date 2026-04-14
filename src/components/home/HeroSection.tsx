import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// Replace this with an imported image when ready, e.g.:
// import heroBg from "@/assets/hero-bg.jpg";
const heroBg: string | null = null;
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-[#0D0D0D]">
        {heroBg && (
          <img
            src={heroBg}
            alt="Luxury home technology"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/65 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-10"
        >
          QUBIX
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8"
        >
          Technology,{" "}
          <span className="italic text-gradient-vibrant">designed</span>
          <br />
          to disappear.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg md:text-xl text-platinum/80 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Spaces that respond to you. Sound that surrounds you. Light that adapts to you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-base text-silver italic mb-12"
        >
          This is not automation. This is orchestration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link
            to="/design"
            className="inline-flex items-center px-10 py-4 font-body font-medium text-sm tracking-wider bg-[#FFFFFF] text-[#0A0A0A] rounded-full hover:bg-[#F0F0F0] transition-colors"
          >
            Begin Your Experience
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-body text-xs tracking-widest uppercase text-silver">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-silver" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
