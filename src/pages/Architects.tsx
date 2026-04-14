import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, Eye, Lightbulb, Speaker, Palette, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";

const partnershipPoints = [
  {
    icon: Layers,
    title: "Early-Stage Consultation",
    description: "We join at the schematic design phase — aligning technology infrastructure with your spatial vision before walls go up.",
  },
  {
    icon: Eye,
    title: "Schematic & Reflected Ceiling Plans",
    description: "Our team provides detailed RCPs, speaker layouts, lighting zones, and conduit drawings that integrate seamlessly with your documentation.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design Collaboration",
    description: "Scene-based architectural lighting design that respects your material palette and enhances spatial hierarchy.",
  },
  {
    icon: Palette,
    title: "Material-Matched Finishes",
    description: "From flush keypads to invisible speakers — every technology touchpoint is selected to honour your design intent.",
  },
];

const invisibleTech = [
  { title: "Concealed Speakers", description: "In-wall and in-ceiling speakers that deliver audiophile-grade sound without visible hardware." },
  { title: "Flush Controls", description: "Keypads, touch panels, and switches that sit perfectly flush with your wall finishes." },
  { title: "Architectural Lighting", description: "Tunable LED systems integrated into coves, niches, and architectural details — invisible by day, transformative by night." },
  { title: "Hidden Infrastructure", description: "All cabling, racks, and equipment concealed in dedicated service areas — never in living spaces." },
];

const designBrands = ["Lutron", "Crestron", "Sonance", "KEF", "Trinnov", "Basalte", "Lutron Palladiom", "Ketra"];

export default function Architects() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", firm: "", projectStage: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushLeadToZoho({
      name: form.name,
      email: form.email,
      phone: form.phone,
      projectType: form.projectStage,
      aiJourneyData: { firm: form.firm, segment: "Architects & Designers" },
      source: "Architects Page CTA",
    });
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cinema/5 blur-[200px]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-cinema mb-6">For Architects & Designers</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8">
            We make your designs <br />
            <span className="italic text-gradient-vibrant">come alive.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-silver max-w-2xl mx-auto mb-10 leading-relaxed">
            Qubix is the technology partner that respects design intent. We integrate sound, light, climate, and control into your spaces — invisibly, elegantly, and precisely.
          </p>
          <a href="#collaborate" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-vibrant text-white font-body font-medium text-sm tracking-wider rounded-full hover:opacity-90 transition-opacity">
            Collaborate With Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Design Partnership */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Design Partnership</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">Technology that <span className="italic">serves design.</span></h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto">We integrate into your workflow — not the other way around. From schematics to site supervision, we're your technology arm.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border hover:border-cinema/30 transition-colors"
              >
                <point.icon className="w-8 h-8 text-cinema mb-4" />
                <h3 className="font-display text-xl font-medium mb-2">{point.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invisible Integration */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">
              Technology that <span className="italic text-gradient-vibrant">disappears.</span>
            </h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto">
              The best technology is the kind you never see. Every component is selected and placed to honour your design language.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {invisibleTech.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-sm border border-border"
              >
                <h3 className="font-display text-lg font-medium mb-2">{item.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Catalog */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Explore</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">Dive deeper into <span className="italic">what we do.</span></h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto mb-10">
              Explore our complete catalog of experiential spaces and technology systems — curated for design professionals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/spaces" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-primary font-body font-medium text-sm tracking-wider rounded-full hover:bg-primary/10 transition-colors">
                Explore Spaces <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/systems" className="inline-flex items-center gap-2 px-8 py-4 border border-cinema/30 text-cinema font-body font-medium text-sm tracking-wider rounded-full hover:bg-cinema/10 transition-colors">
                Explore Systems <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-cinema mb-4">Design-Forward Brands</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">Brands that respect <span className="italic">design.</span></h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto mb-12">
              We work exclusively with brands whose products are designed to integrate, not dominate.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            {designBrands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-8 py-4 rounded-sm bg-background border border-border font-display text-sm tracking-wider text-silver"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="collaborate" className="py-32 lg:py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cinema/5 blur-[150px]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
              Collaborate with <span className="italic text-gradient-vibrant">Qubix.</span>
            </h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto">
              Whether you're at concept stage or construction — we'd love to explore how technology can elevate your next project.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-12 rounded-sm bg-carbon border border-graphite">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-16 h-16 rounded-full bg-relax/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-relax" />
              </motion.div>
              <h3 className="font-display text-2xl font-semibold mb-2">Request Received</h3>
              <p className="font-body text-sm text-silver">Our design partnerships team will reach out within 24 hours. Thank you{form.name ? `, ${form.name}` : ""}.</p>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-5 p-8 rounded-sm bg-carbon border border-graphite">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50" />
                <input required value={form.firm} onChange={(e) => setForm({ ...form, firm: e.target.value })} placeholder="Firm / Studio name" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50" />
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50" />
              </div>
              <select value={form.projectStage} onChange={(e) => setForm({ ...form, projectStage: e.target.value })} className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground focus:outline-none focus:border-cinema/50 appearance-none">
                <option value="" disabled>Project stage</option>
                <option value="Concept / Schematic">Concept / Schematic</option>
                <option value="Design Development">Design Development</option>
                <option value="Construction Documents">Construction Documents</option>
                <option value="Under Construction">Under Construction</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about the project (optional)" rows={3} className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50 resize-none" />
              <button type="submit" className="w-full py-4 font-body font-medium text-sm tracking-wider bg-gradient-vibrant text-white rounded-sm hover:opacity-90 transition-opacity">
                Start a Conversation
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </Layout>
  );
}
