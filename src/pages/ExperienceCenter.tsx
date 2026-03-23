import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone } from "lucide-react";

export default function ExperienceCenter() {
  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Experience Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-medium mb-6"
          >
            Hear it. <span className="italic text-gold-gradient">Feel it.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Specifications tell you what a system can do. Our Experience Center 
            shows you what it feels like. Book a private session.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* What to expect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                title: "Reference Cinema",
                description: "A purpose-built Dolby Atmos theatre with PMC and Meyer Sound speakers. Experience movies and music the way they were meant to be heard.",
              },
              {
                title: "Living Room Demo",
                description: "See how invisible speakers, automated lighting, and seamless control transform a living space into something extraordinary.",
              },
              {
                title: "Control Gallery",
                description: "Interact with Crestron interfaces, voice control, and automation scenes. Experience the simplicity of a fully integrated home.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-sm border border-border bg-card"
              >
                <h3 className="font-display text-xl mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12 rounded-sm border border-border bg-card"
          >
            <div>
              <h2 className="font-display text-2xl mb-6">Visit Us</h2>
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
                Book a Session
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
