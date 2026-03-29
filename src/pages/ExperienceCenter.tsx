import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, ArrowDown } from "lucide-react";
import { zones } from "@/data/experienceZones";
import ZoneNav from "@/components/experience/ZoneNav";
import ZoneCard from "@/components/experience/ZoneCard";
import AmbientTech from "@/components/experience/AmbientTech";
import BrandShowcase from "@/components/experience/BrandShowcase";

export default function ExperienceCenter() {
  const scrollToZones = () => {
    document.getElementById("zone-nav")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-cinema/5 blur-[100px]" />
        </div>

        <div className="relative text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6"
          >
            Qubix Experience Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-[1.1]"
          >
            Hear it. <span className="italic text-gold-gradient">Feel it.</span>
            <br />
            Believe it.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            12 zones. One destination. The most immersive residential technology 
            experience in India. At Qubix — the sky is not even the limit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToZones}
              className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              Explore Zones
              <ArrowDown className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 font-body font-medium text-sm tracking-wider border border-border text-foreground rounded-sm hover:border-primary/40 transition-colors"
            >
              Book a Private Session
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sticky zone navigator */}
      <ZoneNav />

      {/* Zone sections */}
      <div>
        {zones.map((zone) => (
          <ZoneCard key={zone.id} zone={zone} />
        ))}
      </div>

      {/* Ambient tech strip */}
      <AmbientTech />

      {/* Visit / Book section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12 rounded-sm border border-border bg-card"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-8">
                Visit Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm text-foreground">Qubix HiFi Experience Center</p>
                    <p className="font-body text-sm text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm text-foreground">By appointment only</p>
                    <p className="font-body text-sm text-muted-foreground">Private sessions available 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm text-foreground">Contact us to schedule</p>
                    <p className="font-body text-sm text-muted-foreground">Sessions typically last 60–90 minutes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Every visit is a private, curated experience. Bring your family, 
                your architect, your interior designer. We'll demonstrate systems 
                tailored to your home and your lifestyle.
              </p>
              <Link
                to="/contact"
                className="inline-flex self-start px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
              >
                Book a Private Session
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
