import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Lightbulb, Music, Shield, Wifi, Smartphone, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Unified Control",
    description:
      "One Crestron or Control4 interface for lighting, climate, audio, video, shading, and security. No app-juggling, no fragmented experiences.",
  },
  {
    icon: Lightbulb,
    title: "Intelligent Lighting",
    description:
      "Lutron HomeWorks circadian scenes that shift through the day — wake, work, dine, unwind, sleep — without you lifting a finger.",
  },
  {
    icon: Music,
    title: "Whole-Home Audio",
    description:
      "Multi-zone music distribution with PMC, BEC Acoustique, and McIntosh — every room tuned to its acoustics.",
  },
  {
    icon: Shield,
    title: "Security & Access",
    description:
      "AI-powered surveillance, biometric entry, and video intercom — all integrated into the same control fabric.",
  },
  {
    icon: Wifi,
    title: "Enterprise Network",
    description:
      "Wi-Fi 6E backbone, structured cabling, and VLAN segmentation engineered for 100+ connected devices.",
  },
  {
    icon: Smartphone,
    title: "Voice & Mobile",
    description:
      "Natural-language control via voice or phone — from anywhere in the world, with zero compromise on privacy.",
  },
];

const faqs = [
  {
    q: "What is smart home automation?",
    a: "Smart home automation is the integration of lighting, climate, entertainment, security, and shading into a single, unified control system — operated through touch panels, voice, or mobile. At Qubix, we engineer Crestron and Control4 systems for luxury residences across Bangalore.",
  },
  {
    q: "How much does smart home automation cost in Bangalore?",
    a: "Qubix projects typically range from essential single-room installations to bespoke whole-home commissions. Indicative ranges are published on our Investment page — every home is scoped individually based on architecture, scale, and ambition.",
  },
  {
    q: "Which automation brands do you work with?",
    a: "We are authorised partners for Crestron, Control4, Lutron, KNX, Meyer Sound, PMC, McIntosh, BEC Acoustique, REL, SIM2, Trinnov, and others. Brand selection is dictated by the room's purpose — never by margin.",
  },
  {
    q: "Do you serve clients outside Bangalore?",
    a: "Our design studio, experience centre, and engineering team are based in Bangalore. We take on residential commissions across the city and select projects elsewhere in India by referral.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SmartHome() {
  return (
    <Layout>
      <SEO
        title="Smart Home Automation in Bangalore"
        description="Crestron, Control4, and Lutron smart home automation for luxury residences in Bangalore. Unified lighting, audio, climate, security, and shading — engineered by Qubix."
        path="/smart-home"
        jsonLd={faqJsonLd}
      />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Smart Home Automation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-medium mb-6"
          >
            One home. <span className="italic text-gold-gradient">One intelligence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Qubix designs and engineers smart home automation for luxury residences across Bangalore —
            Crestron, Control4, and Lutron systems that disappear into the architecture.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-sm border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <p.icon className="w-8 h-8 text-primary mb-5" />
              <h2 className="font-display text-2xl mb-3">{p.title}</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-12 text-center">
            Frequently asked
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="p-6 rounded-sm border border-border bg-card">
                <h3 className="font-display text-lg mb-3">{f.q}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-6">
            Ready to design your smart home?
          </h2>
          <Link
            to="/design"
            className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium text-sm tracking-wider bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            Begin a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
