import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Compass, Code, Award, Building, Camera } from "lucide-react";
import ritikaPhoto from "@/assets/team/ritika-arora.jpg";
import rhythmPhoto from "@/assets/team/rhythm-arora.jpg";
import { useToast } from "@/hooks/use-toast";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        description="Qubix was founded in 1984. Four decades of obsession with sound, light, and technology — refined into luxury residential experiences."
        path="/about"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center pt-28 pb-16">
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
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-10"
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

      {/* Leadership */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-6"
          >
            Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-5xl font-medium mb-10"
          >
            The people behind the work.
          </motion.h2>

          {/* Rhythm Arora */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start"
          >
            {/* Photo — 40% */}
            <div className="md:col-span-2 aspect-[4/5] overflow-hidden rounded-sm max-w-sm mx-auto md:mx-0 w-full">
              <img
                src={rhythmPhoto}
                alt="Rhythm Arora — Founder & Principal Designer at Qubix HiFi"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Content — 60% */}
            <div className="md:col-span-3 flex flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl font-medium mb-1">Rhythm Arora</h3>
              <p className="font-body text-sm text-primary tracking-wide mb-6">Director &amp; Chief Technology Officer</p>

              <div className="space-y-4 font-body text-sm text-silver leading-relaxed">
                <p>
                  Rhythm has spent his career at the intersection of technology and experience — not as an observer, but as a practitioner. He has personally designed and delivered some of India's most technically demanding residential installations — from private cinemas with active acoustics to whole-home systems for the country's most discerning homeowners.
                </p>
                <p>
                  Recognised as one of the Top 40 Under 40 Business Leaders in the APAC region by Inavate APAC in 2019, Rhythm has presented at ISE in Amsterdam and PALME Expo, with projects featured in mondo*dr and Pro AVL Asia.
                </p>
                <p className="text-foreground font-medium">
                  When a home has a Qubix system, Rhythm has either designed it, calibrated it, or signed off on it.
                </p>
              </div>

              {/* Credential Strip */}
              <p className="mt-6 font-body text-xs text-muted-foreground leading-relaxed">
                CEDIA CPD Educator · RP22 · RP32 · THX Certified · PVA Certified · Meyer Sound Constellation · Trinnov Immersive Audio · Crestron · Control4 · APAC Top 40 Under 40 — 2019
              </p>
            </div>
          </motion.div>

          {/* Ritika Arora — Mirrored layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-12 items-start"
          >
            {/* Content — 60% (left on desktop) */}
            <div className="md:col-span-3 flex flex-col justify-center order-2 md:order-1">
              <h3 className="font-display text-2xl md:text-3xl font-medium mb-1">Ritika Arora</h3>
              <p className="font-body text-sm text-primary tracking-wide mb-6">Director — Experience &amp; Operations</p>

              <div className="space-y-4 font-body text-sm text-silver leading-relaxed">
                <p>
                  A luxury residential technology project is a precision logistics operation running across months — multiple trades, supply chains, billing milestones, and a homeowner whose home is being transformed in real time.
                </p>
                <p>
                  Ritika owns that entire dimension of the Qubix HiFi experience. From the moment a project is signed to the day a home is handed over, she ensures every supply movement, documentation requirement, installation schedule, and billing cycle runs with the professionalism the work deserves — the same operational rigour Qubix has applied to enterprise deployments for decades.
                </p>
                <p>
                  Ritika is a member of CEDIA's and AVIXA's Women in Business Leadership Councils.
                </p>
              </div>

              <p className="mt-6 font-body text-xs text-muted-foreground leading-relaxed">
                CEDIA Women in Business Council · AVIXA Women in Business Council
              </p>
            </div>

            {/* Photo — 40% (right on desktop) */}
            <div className="md:col-span-2 aspect-[4/5] overflow-hidden rounded-sm order-1 md:order-2 max-w-sm mx-auto md:mx-0 w-full">
              <img
                src={ritikaPhoto}
                alt="Ritika Arora — Director, Experience & Operations at Qubix HiFi"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Ritika Arora — Mirrored layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-16"
          >
            {/* Content — 40% (left on desktop) */}
            <div className="md:col-span-2 flex flex-col justify-center order-2 md:order-1">
              <h3 className="font-display text-2xl md:text-3xl font-medium mb-1">Ritika Arora</h3>
              <p className="font-body text-sm text-primary tracking-wide mb-8">Director — Experience &amp; Operations</p>

              <div className="space-y-5 font-body text-sm text-silver leading-relaxed">
                <p>
                  A luxury residential technology project is not just a technical undertaking — it is a precision logistics operation running across months, involving multiple trades, supply chains, billing milestones, and a homeowner whose home is being transformed in real time.
                </p>
                <p>
                  Ritika owns that entire dimension of the Qubix HiFi experience. From the moment a project is signed to the day a home is handed over, she ensures that every supply movement, documentation requirement, installation schedule, and billing cycle runs with the professionalism that the work deserves.
                </p>
                <p>
                  She brings to residential projects the same operational rigour that Qubix has applied to enterprise deployments for decades — because a ₹2 crore home system deserves the same level of project governance as a ₹2 crore commercial installation.
                </p>
                <p>
                  Ritika is a member of CEDIA's and AVIXA's Women in Business Leadership Councils — communities she contributes to as actively as she learns from.
                </p>
              </div>

              <p className="mt-8 font-body text-xs text-muted-foreground leading-relaxed">
                CEDIA Women in Business Council · AVIXA Women in Business Council
              </p>
            </div>

            {/* Photo — 60% (right on desktop) */}
            <div className="md:col-span-3 aspect-[3/4] overflow-hidden rounded-sm order-1 md:order-2">
              <img
                src={ritikaPhoto}
                alt="Ritika Arora — Director, Experience & Operations at Qubix HiFi"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialists */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-6"
          >
            The Specialists
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-5xl font-medium mb-4"
          >
            Depth in every discipline.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-body text-base text-silver max-w-2xl leading-relaxed mb-10"
          >
            The most demanding homes require specialists, not generalists. Our residential team brings focused expertise in every domain a luxury home requires.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Philip Abraham */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-border rounded-sm p-6"
            >
              <div className="aspect-[3/4] border-2 border-dashed border-primary/50 rounded-sm flex flex-col items-center justify-center gap-3 bg-primary/5 mb-6">
                <Camera className="w-6 h-6 text-primary/60" />
                <span className="font-body text-sm text-primary/80 tracking-wide font-medium">Philip Abraham — Photo</span>
                <span className="font-body text-[10px] text-muted-foreground uppercase tracking-widest">Replace before launch</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium mb-1">Philip Abraham</h3>
              <p className="font-body text-sm text-primary tracking-wide mb-4">Senior Sound Engineer — Residential</p>
              <p className="font-body text-sm text-silver leading-relaxed">
                Philip brings years of hands-on experience designing and tuning audio environments in some of India's most demanding high-end residences. His work spans reference listening rooms, private cinemas, and whole-home audio systems where accuracy is non-negotiable. He doesn't just install sound — he engineers it.
              </p>
            </motion.div>

            {/* Diksha Sinha */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="border border-border rounded-sm p-6"
            >
              <div className="aspect-[3/4] border-2 border-dashed border-primary/50 rounded-sm flex flex-col items-center justify-center gap-3 bg-primary/5 mb-6">
                <Camera className="w-6 h-6 text-primary/60" />
                <span className="font-body text-sm text-primary/80 tracking-wide font-medium">Diksha Sinha — Photo</span>
                <span className="font-body text-[10px] text-muted-foreground uppercase tracking-widest">Replace before launch</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium mb-1">Diksha Sinha</h3>
              <p className="font-body text-sm text-primary tracking-wide mb-4">Residential Systems Designer</p>
              <p className="font-body text-sm text-silver leading-relaxed">
                Diksha holds CEDIA RP22 certification as a Residential Systems Designer — one of the most rigorous credentials in the industry for residential AV system design. She translates homeowner experiences and architectural intent into precise, buildable system designs that perform exactly as imagined.
              </p>
              <p className="mt-6 font-body text-xs text-muted-foreground leading-relaxed">
                CEDIA RP22 Certified · CEDIA Certified Designer
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Backbone */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-6"
          >
            The Backbone
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-5xl font-medium mb-4 leading-tight"
          >
            Luxury deployed with
            <br />
            enterprise infrastructure.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-body text-base text-silver max-w-3xl leading-relaxed mb-10"
          >
            Every Qubix HiFi project is backed by the full engineering and operational infrastructure of Qubix Technologies — one of India's most certified AV integration companies. This is not a small residential firm learning as it goes. This is enterprise-grade capability applied to private homes.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Compass,
                title: "Certified CAD Team",
                body: "Dedicated CAD engineers producing reflected ceiling plans, conduit drawings, equipment layouts, and as-built documentation to professional standards — the same documentation used on enterprise projects.",
              },
              {
                icon: Code,
                title: "Certified Programmers",
                body: "In-house programmers certified in Crestron Home, Control4, and KNX — the three most demanding residential control platforms. Custom interfaces, scene logic, and integration built from scratch for every home.",
              },
              {
                icon: Award,
                title: "300+ Technical Certifications",
                body: "Across the Qubix team, 300+ technical certifications from 85+ global manufacturers — from Meyer Sound and Trinnov to Lutron, Crestron, and Ruckus. Every specification is backed by certified expertise.",
              },
              {
                icon: Building,
                title: "Enterprise Project Pipeline",
                body: "Large-scale residential projects flow through the same project management pipeline as our enterprise deployments — structured phases, milestone sign-offs, material tracking, and billing compliance built into every engagement.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border border-border rounded-sm p-8"
              >
                <item.icon className="w-6 h-6 text-primary mb-5" />
                <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-6"
          >
            What We Believe
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-5xl font-medium mb-10 leading-tight"
          >
            Four things we don't
            <br />
            compromise on.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                heading: "Technology should disappear.",
                body: "The best system is the one you never notice — until it's off. We design for invisibility first, capability second.",
              },
              {
                heading: "Design intent is sacred.",
                body: "We never fight an architect's or designer's vision. Every component is selected and placed to honour the space it lives in.",
              },
              {
                heading: "Calibration is not optional.",
                body: "A system that isn't calibrated isn't finished. Every Qubix HiFi installation is calibrated by certified engineers before we hand over the keys.",
              },
              {
                heading: "Operations are part of the product.",
                body: "How a project is managed — the documentation, the timelines, the billing, the communication — is as important as the technology itself. We treat both with equal seriousness.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border-t-2 border-primary pt-6"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium mb-3">{item.heading}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-6"
          >
            Recognition
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-5xl font-medium mb-10 leading-tight"
          >
            Credentials that took decades to earn.
          </motion.h2>

          {/* Industry Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="font-display text-xl font-medium mb-8">Industry Credentials</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "CEDIA Certified Company",
                "AVIXA Member",
                "CEDIA RP22 — Residential Systems Design",
                "CEDIA RP32 — Electronic Systems",
                "CEDIA CPD Educator",
                "THX Certified Video Calibration",
                "PVA Certified Calibration",
                "KNX Certified",
                "Crestron Home Certified",
                "Control4 Certified",
                "Meyer Sound Constellation Trained",
                "Trinnov Immersive Audio Trained",
                "300+ Technical Certifications",
                "85+ Direct Manufacturer Partnerships",
                "InAVation Technology Awards Finalist",
                "APAC Top 40 Under 40 — 2019",
              ].map((cred) => (
                <span
                  key={cred}
                  className="px-4 py-2 rounded-full border border-border font-body text-xs text-foreground tracking-wide"
                >
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Press & Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-xl font-medium mb-8">Press &amp; Publications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { pub: "mondo*dr", line: "Mayfair Resort, Raipur — Featured Project" },
                { pub: "Pro AVL Asia", line: "Lord of the Drinks, Mumbai — Asia's Longest Bar Install" },
                { pub: "PALM Magazine", line: "Lord of the Drinks, Mumbai — Club Sound Installation" },
                { pub: "Inavate APAC", line: "Top 40 Under 40 Business Leaders — Rhythm Arora, 2019" },
              ].map((item) => (
                <div key={item.pub} className="border border-border rounded-sm p-6">
                  <p className="font-body text-sm text-primary font-medium mb-2">{item.pub}</p>
                  <p className="font-body text-sm text-foreground leading-relaxed">{item.line}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visit Us — Closing CTA */}
      <VisitSection />
    </Layout>
  );
}

function VisitSection() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = whatsapp.trim();

    if (!trimmedName || !trimmedPhone) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const msg = encodeURIComponent(
        `Hi, I'd like to request a private visit to the Qubix Experience Center.\n\nName: ${trimmedName}\nWhatsApp: ${trimmedPhone}`
      );
      window.open(`https://wa.me/918050200008?text=${msg}`, "_blank");
      toast({ title: "Request sent!", description: "We'll confirm your appointment within one business day." });
      setName("");
      setWhatsapp("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-14 md:py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.5em] uppercase text-silver mb-6">
              Visit Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-8 leading-tight">
              The Experience Center, Bangalore.
            </h2>
            <div className="space-y-5 font-body text-sm text-silver leading-relaxed">
              <p>
                The only address in the Indian subcontinent where you can hear Constellation by Meyer Sound in a residential setting. Every system we recommend, you can hear first. Every brand we specify, we have installed and calibrated ourselves.
              </p>
              <p className="text-foreground font-medium">By private appointment only.</p>
              <p>
                15, State Bank of India Road,
                <br />
                Shanthala Nagar, Ashok Nagar,
                <br />
                Bengaluru — 560025
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-xs text-silver tracking-wide mb-2">Your name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block font-body text-xs text-silver tracking-wide mb-2">WhatsApp number</label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  maxLength={15}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-3.5 font-body font-medium text-sm tracking-wider bg-[#FFFFFF] text-[#0A0A0A] rounded-full hover:bg-[#F0F0F0] transition-colors disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Request a Private Visit"}
              </button>
              <p className="font-body text-xs text-muted-foreground italic text-center">
                We will confirm your appointment within one business day.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
