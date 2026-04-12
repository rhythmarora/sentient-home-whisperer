import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, ArrowDown, ExternalLink } from "lucide-react";
import { zones } from "@/data/experienceZones";
import ZoneNav from "@/components/experience/ZoneNav";
import ZoneCard from "@/components/experience/ZoneCard";
import AmbientTech from "@/components/experience/AmbientTech";
import BrandShowcase from "@/components/experience/BrandShowcase";
import BookingForm from "@/components/experience/BookingForm";

export default function ExperienceCenter() {
  const scrollToZones = () => {
    document.getElementById("zone-nav")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/__l5e/assets-v1/70a3f6f7-c7c6-48f3-8d1c-e36d33aac669/experience-center-hero.mp4"
          />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
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
            <a
              href="#book-session"
              className="inline-flex px-8 py-4 font-body font-medium text-sm tracking-wider border border-border text-foreground rounded-sm hover:border-primary/40 transition-colors"
            >
              Book a Private Session
            </a>
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

      {/* Brand showcase tiles */}
      <BrandShowcase />

      {/* Book a Session */}
      <section id="book-session" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              By Appointment Only
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
              Book a Private Session
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
              Every visit is curated. Bring your family, your architect, your designer.
              We'll demonstrate systems tailored to your home and lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <BookingForm />
            </div>
            <div className="lg:col-span-2">
              <div className="p-8 rounded-sm bg-card border border-border h-full">
                <h3 className="font-display text-xl font-medium mb-6">Visit Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm text-foreground">Qubix</p>
                      <p className="font-body text-sm text-muted-foreground">No. 15 Museum Road, Opp SBI Gate No. 2</p>
                      <p className="font-body text-sm text-muted-foreground">Bangalore 560025</p>
                      <a
                        href="https://g.page/qubixindia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-body text-xs text-primary hover:underline mt-1"
                      >
                        View on Google Maps <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm text-foreground">Monday – Saturday</p>
                      <p className="font-body text-sm text-muted-foreground">10:00 AM – 6:00 PM</p>
                      <p className="font-body text-sm text-muted-foreground">1-hour curated sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm text-foreground">Sessions last 60–90 minutes</p>
                      <p className="font-body text-sm text-muted-foreground">
                        A consultant will confirm your session personally over WhatsApp or email.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
