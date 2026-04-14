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

      {/* The Story — Two Column Narrative */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-16"
          >
            The Story
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="pr-0 md:pr-12 pb-12 md:pb-0"
            >
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-6 leading-tight">
                Born in 1984. Rebuilt for what's next.
              </h2>
              <div className="space-y-5 font-body text-sm md:text-base text-silver leading-relaxed">
                <p>
                  Qubix began as a pioneering force in professional audio visual integration
                  at a time when the industry in India was just finding its footing. Over four decades,
                  we built a reputation across enterprise, hospitality, broadcast, and live venues —
                  delivering technology for Fortune 500 boardrooms, five-star hotels, Asia's
                  largest nightclubs, and yachts.
                </p>
                <p>
                  In 2011, we made a deliberate choice to reinvent — not just update. New methodologies,
                  new standards, and a commitment to bringing the same rigour we applied to enterprise
                  technology into the home.
                </p>
                <p className="text-foreground font-medium">
                  Qubix HiFi is the result of that decision.
                </p>
              </div>
            </motion.div>

            {/* Vertical Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" style={{ position: "relative", width: 0 }}>
              <div className="absolute inset-y-0 left-0 w-px bg-border" />
            </div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="pl-0 md:pl-12 md:border-l border-border"
            >
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-6 leading-tight">
                Two businesses. One standard.
              </h2>
              <div className="space-y-5 font-body text-sm md:text-base text-silver leading-relaxed">
                <p>
                  Qubix Technologies remains India's leading enterprise AV integration company —
                  operating across cities, deploying at scale, and supporting some of the country's most
                  demanding commercial environments.
                </p>
                <p>
                  Qubix HiFi is its residential counterpart — inheriting the same certified engineering
                  team, the same CAD and project management infrastructure, the same direct manufacturer
                  relationships, and the same zero-compromise standard. Deployed not in boardrooms,
                  but in the homes of people who expect nothing less.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
