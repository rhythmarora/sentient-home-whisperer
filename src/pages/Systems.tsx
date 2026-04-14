import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Film, Sun, Wifi, Shield, Settings } from "lucide-react";

const systemGroups = [
  {
    icon: Film,
    title: "Entertainment",
    subtitle: "Cinema, music, and immersive experiences",
    systems: [
      { name: "Home Theatre", description: "Dolby Atmos, DTS:X, 4K/8K projection, reference-grade audio" },
      { name: "Whole-Home Audio", description: "Multi-zone music distribution with architectural speakers" },
      { name: "Karaoke & Social", description: "Professional karaoke, party audio, and social entertainment" },
      { name: "Outdoor AV", description: "Landscape audio, poolside speakers, and outdoor cinema" },
    ],
  },
  {
    icon: Sun,
    title: "Ambience",
    subtitle: "Lighting that sets the mood",
    systems: [
      { name: "Lighting Control", description: "Automated scenes, circadian tuning, and motorized shading" },
      { name: "Motorized Shading", description: "Automated blinds and curtains integrated with lighting scenes" },
      { name: "Architectural Lighting", description: "Cove lighting, accent lighting, and landscape illumination" },
    ],
  },
  {
    icon: Wifi,
    title: "Infrastructure",
    subtitle: "The backbone of intelligence",
    systems: [
      { name: "Enterprise Networking", description: "High-density WiFi, wired backbone, and network management" },
      { name: "Structured Cabling", description: "Future-proof wiring for data, audio, video, and control" },
      { name: "Equipment Rooms", description: "Ventilated, organized racks with remote management" },
    ],
  },
  {
    icon: Shield,
    title: "Protection",
    subtitle: "Security without intrusion",
    systems: [
      { name: "CCTV & Surveillance", description: "AI-powered cameras with intelligent alerts and analytics" },
      { name: "Access Control", description: "Biometric, RFID, and smart lock integration" },
      { name: "Intercom Systems", description: "Video intercom with mobile integration and recording" },
    ],
  },
  {
    icon: Settings,
    title: "Control",
    subtitle: "The operating system of your home",
    systems: [
      { name: "Home Automation", description: "Crestron, Control4 — unified control for every system" },
      { name: "Voice Control", description: "Natural language commands for lights, music, climate, and more" },
      { name: "Climate Integration", description: "HVAC control synchronized with occupancy and scenes" },
    ],
  },
];

export default function Systems() {
  return (
    <Layout>
      <SEO title="Systems" description="Discover Qubix technology systems — entertainment, lighting, automation, networking, and security for luxury homes." path="/systems" />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Systems
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-medium mb-6"
          >
            Five layers of <span className="italic text-gold-gradient">intelligence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A Qubix home isn't a collection of products — it's an integrated ecosystem 
            where every system works in harmony.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {systemGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <group.icon className="w-8 h-8 text-primary" />
                <div>
                  <h2 className="font-display text-2xl font-medium">{group.title}</h2>
                  <p className="font-body text-sm text-muted-foreground">{group.subtitle}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.systems.map((sys) => (
                  <div
                    key={sys.name}
                    className="p-6 rounded-sm border border-border bg-card hover:border-primary/20 transition-colors"
                  >
                    <h3 className="font-display text-lg mb-2">{sys.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {sys.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-6">
            Ready to build your ecosystem?
          </h2>
          <Link
            to="/design"
            className="inline-flex px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            Design My Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
