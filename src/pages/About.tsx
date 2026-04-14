import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        description="Qubix was founded in 1984. Four decades of obsession with sound, light, and technology — refined into luxury residential experiences."
        path="/about"
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center py-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-10"
          >
            Our Story
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-10"
          >
            Forty years of{" "}
            <span className="italic text-gradient-vibrant">obsession.</span>
            <br />
            Refined into one address.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-base md:text-lg text-silver max-w-3xl mx-auto leading-relaxed"
          >
            Qubix was founded in 1984. For four decades we have designed, built, and lived inside
            the world of sound, light, and technology. Qubix HiFi is the residential expression
            of everything we have learned — built for homes that deserve the same standard as
            the world's finest venues.
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
