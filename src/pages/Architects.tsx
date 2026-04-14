import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, Eye, Lightbulb, Palette, ArrowRight, Check, FileText, Ruler, Users, PenTool } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
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

const stats = [
  { value: "500+", label: "Residences delivered in collaboration with design firms" },
  { value: "40+", label: "Years of AV and technology integration expertise" },
  { value: "85+", label: "Global brands — architect-grade finishes and invisible integration" },
  { value: "Pan-India", label: "On-ground teams across major metros" },
];

const processSteps = [
  { step: "01", title: "Design Alignment", description: "We study your design intent, material palette, and spatial language — then recommend technology that serves it, not competes with it." },
  { step: "02", title: "Technical Documentation", description: "RCPs, conduit layouts, speaker placement drawings, lighting zone maps, and BOQs — delivered in your documentation format and timeline." },
  { step: "03", title: "Site Coordination", description: "Our teams coordinate directly with your contractors — ceiling details, wall chases, equipment zones — no surprises during fit-out." },
  { step: "04", title: "Commissioning & Handover", description: "Scene programming, system calibration, and client walkthroughs. Your client experiences the space exactly as you designed it — with technology that responds, not intrudes." },
];

const designBrands = ["Lutron", "Crestron", "Sonance", "KEF", "Trinnov", "Basalte", "Ketra", "Savant"];

const projectStages = [
  "Concept / Schematic",
  "Design Development",
  "Construction Documents",
  "Under Construction",
  "General Enquiry",
];

export default function Architects() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", firm: "", projectStage: "", message: "", wantSpecs: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushLeadToZoho({
      name: form.name,
      email: form.email,
      phone: form.phone,
      projectType: form.projectStage,
      aiJourneyData: { firm: form.firm, wantSpecs: form.wantSpecs, segment: "Architects & Designers" },
      source: "Architects Page CTA",
    });
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO title="For Architects & Designers" description="Qubix integrates sound, light, and control into your architectural vision — invisibly and precisely. Collaborate with us from schematic to handover." path="/architects" />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[200px]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">For Architects & Designers</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8">
            We make your designs <br />
            <span className="italic text-gradient-vibrant">come alive.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-silver max-w-2xl mx-auto mb-10 leading-relaxed">
            Qubix is the technology partner that respects design intent. We integrate sound, light, climate, and control into your spaces — invisibly, elegantly, and precisely. With 40+ years of AV expertise and 500+ residences delivered, we understand how to make technology disappear into architecture.
          </p>
          <a href="#collaborate" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFFFFF] text-[#0A0A0A] font-body font-medium text-sm tracking-wider rounded-full hover:bg-[#F0F0F0] transition-colors">
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
                className="p-8 rounded-sm bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <point.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-medium mb-2">{point.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We work the way you work */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">We work the way <span className="italic">you work.</span></h2>
            <p className="font-body text-base text-silver max-w-2xl mx-auto">Design firms have processes. So do we. Our documentation, coordination, and delivery are structured to plug into your project workflow — not create a parallel one.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: "Documentation in Your Format", description: "RCPs, conduit plans, equipment schedules, and BOQs delivered in AutoCAD, Revit, or PDF — matched to your drawing standards and revision protocols." },
              { icon: Ruler, title: "Coordination with Your Contractors", description: "We coordinate directly with your civil, MEP, carpentry, and false ceiling teams — no back-channel communication, no site conflicts." },
              { icon: Users, title: "Single Point of Contact", description: "One dedicated project manager from Qubix for every engagement. Direct access, weekly updates, and alignment calls synced to your project rhythm." },
              { icon: PenTool, title: "Design Review Sessions", description: "Joint review sessions at key milestones — schematic, DD, and pre-construction — to ensure technology and design remain perfectly aligned." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <card.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-medium mb-2">{card.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invisible Integration */}
      <section className="py-24 lg:py-32 px-6">
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
            {[
              { title: "Concealed Speakers", description: "In-wall and in-ceiling speakers that deliver audiophile-grade sound without visible hardware. Paintable grilles, plaster-over options, and invisible mounting." },
              { title: "Flush Controls", description: "Keypads, touch panels, and switches that sit perfectly flush with your wall finishes. Custom engravings, material-matched faceplates, and minimal bezels." },
              { title: "Architectural Lighting", description: "Tunable LED systems integrated into coves, niches, and architectural details — invisible by day, transformative by night. Scene-based control with circadian tuning." },
              { title: "Hidden Infrastructure", description: "All cabling, racks, and equipment concealed in dedicated service areas — never in living spaces. Clean sight lines, zero visual compromise." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-sm border border-border hover:border-primary/30 transition-colors"
              >
                <h3 className="font-display text-lg font-medium mb-2">{item.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">
              Trusted by India's leading <span className="italic text-gradient-vibrant">design firms.</span>
            </h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto">
              We've earned the trust of architects and designers who demand precision, discretion, and follow-through.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-semibold text-gradient-vibrant mb-2">{stat.value}</p>
                <p className="font-body text-xs text-silver">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center h-24 rounded-sm border-2 border-dashed border-border">
                <span className="font-body text-xs text-muted-foreground">Design Firm Logo</span>
              </div>
            ))}
          </div>
          <p className="font-body text-sm italic text-silver text-center">
            Portfolio references and project case studies available upon request.
          </p>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Deliverables</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">What we deliver <span className="italic">to your desk.</span></h2>
            <p className="font-body text-base text-silver max-w-2xl mx-auto">Every engagement includes structured deliverables that integrate into your project documentation — no loose ends, no verbal commitments.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Technical Drawings", body: "Reflected ceiling plans, speaker placement layouts, lighting zone maps, conduit routing, and equipment location drawings — coordinated with your architectural set." },
              { title: "Specifications & BOQs", body: "Detailed bill of quantities with brand, model, finish, and pricing for every component. Updated at each design phase to reflect scope changes." },
              { title: "Programming & Scene Design", body: "Lighting scene schedules, audio zone maps, and automation logic documents — so your client knows exactly what each space will feel like before it's built." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t-2 border-primary pt-6"
              >
                <h3 className="font-display text-lg font-medium mb-3">{item.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Design-Grade Brands</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">Brands that respect <span className="italic">design.</span></h2>
            <p className="font-body text-base text-silver max-w-2xl mx-auto mb-12">
              We work exclusively with brands whose products are designed to integrate, not dominate. Architect-grade finishes, minimal footprints, and custom options for every material palette.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
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
          <p className="font-body text-sm italic text-silver/70">
            Direct authorised partner: Lutron · Crestron · Sonance · KEF · Basalte · Ketra · and 80+ others.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">How We Work</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium">From concept to <span className="italic">commissioning.</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <p className="font-display text-5xl font-bold text-primary/10 mb-2">{step.step}</p>
                <h3 className="font-display text-lg font-medium mb-2">{step.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Centre CTA */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">See It In Person</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">Experience the technology <span className="italic">first-hand.</span></h2>
            <p className="font-body text-base text-silver max-w-2xl mx-auto">
              Visit the Qubix Experience Centre in Bangalore — 12 curated zones showcasing concealed speakers, architectural lighting, home cinema, and invisible control systems. Bring your clients for a private demonstration.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/experience-center" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-primary font-body font-medium text-sm tracking-wider rounded-full hover:bg-primary/10 transition-colors">
              Explore Experience Centre <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-silver font-body font-medium text-sm tracking-wider rounded-full hover:border-primary/30 hover:text-primary transition-colors">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="collaborate" className="py-32 lg:py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
              Collaborate with <span className="italic text-gradient-vibrant">Qubix.</span>
            </h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto">
              Whether you're at concept stage or construction — we'd love to explore how technology can elevate your next project. Our design partnerships team will respond within one business day. For urgent requirements call: <a href="tel:+918050200008" className="text-primary hover:underline">+91 80502 00008</a>
            </p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-12 rounded-sm bg-carbon border border-graphite">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-16 h-16 rounded-full bg-relax/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-relax" />
              </motion.div>
              <h3 className="font-display text-2xl font-semibold mb-2">Request Received</h3>
              <p className="font-body text-sm text-silver">Our design partnerships team will reach out within one business day. Thank you{form.name ? `, ${form.name}` : ""}.</p>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-5 p-8 rounded-sm bg-carbon border border-graphite">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50" />
                <input required value={form.firm} onChange={(e) => setForm({ ...form, firm: e.target.value })} placeholder="Firm / Studio name" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50" />
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50" />
              </div>
              <select value={form.projectStage} onChange={(e) => setForm({ ...form, projectStage: e.target.value })} className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground focus:outline-none focus:border-primary/50 appearance-none">
                <option value="" disabled>Project stage</option>
                {projectStages.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about the project — type of residence, design phase, any specific technology requirements (optional)" rows={3} className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50 resize-none" />
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={form.wantSpecs} onChange={(e) => setForm({ ...form, wantSpecs: e.target.checked })} className="w-4 h-4 rounded border-graphite bg-void text-primary focus:ring-primary/50" />
                <span className="font-body text-sm text-silver">I'd like to receive sample specifications (RCPs, BOQ format, product finish options)</span>
              </label>
              <button type="submit" className="w-full py-4 font-body font-medium text-sm tracking-wider bg-[#FFFFFF] text-[#0A0A0A] rounded-sm hover:bg-[#F0F0F0] transition-colors">
                Start a Conversation
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </Layout>
  );
}
