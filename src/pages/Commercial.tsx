import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CommercialLayout from "@/components/commercial/CommercialLayout";
import {
  Building2,
  Hotel,
  GraduationCap,
  Monitor,
  Sailboat,
  Landmark,
  Home,
  Sparkles,
  Theater,
  ArrowRight,
  Shield,
  Clock,
  MapPin,
  Award,
  Headphones,
  Users,
  Wrench,
  Lightbulb,
  FolderKanban,
  UserCog,
} from "lucide-react";

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-xs tracking-widest uppercase text-primary font-medium">
              42+ Years of Engineering Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 text-foreground"
          >
            Engineering Excellence
            <br />
            for{" "}
            <span className="text-primary italic">
              Delightful Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            We design, build & support Audio Visual, Lighting and IT
            Infrastructure for living, working, and public spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-body font-medium text-sm tracking-wider bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Connect with Experts
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/commercial/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-body text-sm tracking-wider text-foreground border border-border rounded-full hover:border-primary/50 transition-colors"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ─── */
const stats = [
  { value: "3800+", label: "Projects Delivered" },
  { value: "42+", label: "Years of Experience" },
  { value: "300+", label: "Technical Certifications" },
  { value: "85+", label: "Manufacturer Partners" },
];

function StatsSection() {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Capabilities ─── */
const capabilities = [
  {
    icon: Lightbulb,
    title: "Technology Design Consulting",
    description:
      "Multi-discipline design consulting across Audio Visual, ICT, Lighting & Acoustics. From concept to detailed engineering.",
  },
  {
    icon: Wrench,
    title: "System Integration",
    description:
      "Excellence in installation, engineering, hardware & software, fabrication, testing, project management and documentation.",
  },
  {
    icon: Headphones,
    title: "Managed Services & AMC",
    description:
      "Ensure maximum uptime, utilization & ROI with proactive, reactive on-site, on-call or remote services.",
  },
  {
    icon: FolderKanban,
    title: "Program Management",
    description:
      "Overseeing & coordinating groups of related projects and activities across geographies and timelines.",
  },
  {
    icon: Sparkles,
    title: "Lighting Design",
    description:
      "From workspaces to architectural marvels — one-of-a-kind expertise in designing, installing and managing diverse lighting solutions.",
  },
  {
    icon: UserCog,
    title: "Manpower & Outsourcing",
    description:
      "Hire, onboard and deploy an efficient AV-IT workforce within your walls while maintaining privacy & compliance.",
  },
];

function CapabilitiesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Our Capabilities
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground">
            Creating innovative experiences
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Fusing architecture, communication, technology and people to deliver
            spaces that inspire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {cap.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Markets ─── */
const markets = [
  { icon: Building2, name: "Enterprise", tagline: "Unified AV & IT for conferencing and collaboration" },
  { icon: Hotel, name: "Hospitality", tagline: "Premier solutions for hotels, resorts & restaurants" },
  { icon: GraduationCap, name: "Training & Education", tagline: "Advanced AV & IT solutions for learning" },
  { icon: Monitor, name: "Command & Control", tagline: "Precision technology for mission-critical centers" },
  { icon: Sailboat, name: "Ships & Yachts", tagline: "AV, IT, TVRO & VSAT for maritime" },
  { icon: Landmark, name: "Real Estate", tagline: "Innovative technology for modern developments" },
  { icon: Sparkles, name: "Experience Centers", tagline: "Immersive AV for branded environments" },
  { icon: Theater, name: "Large Venues", tagline: "Exceptional AV for auditoriums & arenas" },
  { icon: Home, name: "Residential", tagline: "Superior solutions for luxury modern living", highlight: true },
];

function MarketsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Markets We Serve
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground">
            Serving all industries
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored technology solutions that optimize operations and enhance
            experiences across every sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, i) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                market.highlight
                  ? "border-primary/40 bg-primary/5 hover:border-primary hover:shadow-lg"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-md"
              }`}
            >
              {market.highlight && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-body font-semibold tracking-wider uppercase rounded-full">
                  Explore Qubix HiFi →
                </div>
              )}
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    market.highlight
                      ? "bg-primary/20"
                      : "bg-primary/10 group-hover:bg-primary/15"
                  } transition-colors`}
                >
                  <market.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {market.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {market.tagline}
                  </p>
                </div>
              </div>
              {market.highlight && (
                <Link
                  to="/"
                  className="mt-4 inline-flex items-center gap-1 font-body text-sm text-primary font-medium hover:underline"
                >
                  Visit Qubix HiFi <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Qubix Advantage ─── */
const advantages = [
  { icon: Clock, title: "Lowest TAT", desc: "Blazing speeds from quote to handover" },
  { icon: MapPin, title: "Pan India Presence", desc: "Multi-city deployments, single partner" },
  { icon: Award, title: "300+ Certifications", desc: "From 85+ manufacturers we work with" },
  { icon: Shield, title: "EHS Integrated", desc: "Protecting business with safety standards" },
  { icon: Headphones, title: "Omni Channel Support", desc: "24/7 via phone, email, ServiceNow, Slack, Teams" },
  { icon: Users, title: "Trusted by the Best", desc: "Shell, ITC, JW Marriott, Taj, WeWork & more" },
];

function AdvantageSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Why Qubix
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            The Qubix Advantage
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <adv.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-body text-base font-semibold text-foreground mb-1">
                  {adv.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {adv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trusted By (Client logos) ─── */
const clients = [
  "Shell", "ITC", "JW Marriott", "Taj Hotels", "The Leela",
  "WeWork", "JLL", "Colliers", "Prestige Group", "BASF",
  "Whirlpool", "Hilton", "Oberoi", "NAB", "Allianz",
];

function TrustedBySection() {
  return (
    <section className="py-20 bg-secondary/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground text-center mb-12"
        >
          Trusted by the best in business
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((client, i) => (
            <motion.span
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="font-body text-sm md:text-base text-muted-foreground/60 font-medium tracking-wide"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Residential Bridge CTA ─── */
function ResidentialBridge() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-white/40 mb-6">
            Qubix HiFi · Residential Division
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            Technology,{" "}
            <span className="italic" style={{ color: "hsl(38 70% 50%)" }}>
              designed to disappear.
            </span>
          </h2>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            For homes that deserve more than automation — experience our
            residential division where sound, light, and cinema become invisible
            art. Curated with Meyer Sound, PMC, REL, and Crestron Home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-4 font-body font-medium text-sm tracking-wider rounded-full transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, hsl(38 80% 35%), hsl(38 70% 50%), hsl(38 60% 65%))",
                color: "hsl(220 20% 4%)",
              }}
            >
              Explore Qubix HiFi
            </Link>
            <Link
              to="/experience-center"
              className="px-8 py-4 font-body text-sm tracking-wider text-white border border-white/20 rounded-full hover:border-white/40 transition-colors"
            >
              Visit the Experience Center
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Experience Center Shared CTA ─── */
function ExperienceCenterCTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-16 text-center"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Bangalore
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Visit Our Experience Center
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-8">
            12 curated technology zones. From boardroom conferencing to
            Constellation by Meyer Sound. Experience it all, first-hand.
          </p>
          <Link
            to="/experience-center"
            className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium text-sm tracking-wider bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Tour
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Commercial() {
  return (
    <CommercialLayout>
      <HeroSection />
      <StatsSection />
      <CapabilitiesSection />
      <MarketsSection />
      <AdvantageSection />
      <TrustedBySection />
      <ResidentialBridge />
      <ExperienceCenterCTA />
    </CommercialLayout>
  );
}
