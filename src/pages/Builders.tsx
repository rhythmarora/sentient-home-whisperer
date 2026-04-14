import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Wifi, Monitor, Shield, Zap, CheckCircle2, ArrowRight, Check, ClipboardList, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";

const scaleCapabilities = [
  {
    icon: Monitor,
    title: "Model Flat Integration",
    description: "Fully functional smart home experience flats that sell your vision to buyers before they move in.",
  },
  {
    icon: Building2,
    title: "Multi-Tower Rollout",
    description: "Scalable deployment across hundreds of units with standardised wiring, consistent quality, and zero rework.",
  },
  {
    icon: Wifi,
    title: "Enterprise Networking",
    description: "Ruckus-grade Wi-Fi infrastructure designed for density — seamless connectivity across every floor, every unit.",
  },
  {
    icon: Shield,
    title: "Pre-Wiring Consultation",
    description: "We engage at the slab stage to ensure conduit planning, structured cabling, and infrastructure readiness from day one.",
  },
];

const stats = [
  { value: "500+", label: "Residences delivered with integrated technology" },
  { value: "40+", label: "Years of AV and technology integration expertise" },
  { value: "85+", label: "Global technology brands — direct manufacturer partnerships" },
  { value: "Pan-India", label: "Multi-city deployment with trained, on-ground teams" },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "We study your project — layout, positioning, buyer profile — and recommend the right technology stack." },
  { step: "02", title: "Design & Planning", description: "Detailed drawings, conduit plans, BOQs, and specifications aligned to your construction timeline." },
  { step: "03", title: "Deployment", description: "On-site execution with our trained teams. Phase-wise rollout synced with your construction milestones." },
  { step: "04", title: "Handover & Support", description: "Buyer walkthroughs, system training, and long-term AMC support for every unit delivered." },
];

const brands = ["Crestron", "Lutron", "Meyer Sound", "Ruckus", "Sonance", "Control4", "Ubiquiti", "Atlona"];

const projectTypes = [
  "Residential Township",
  "High-Rise Towers",
  "Villa Community",
  "Mixed-Use Development",
  "Commercial / Hospitality",
];

export default function Builders() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", projectType: "", units: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushLeadToZoho({
      name: form.name,
      email: form.email,
      phone: form.phone,
      projectType: form.projectType,
      aiJourneyData: { company: form.company, units: form.units, segment: "Builders & Developers" },
      source: "Builders Page CTA",
    });
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO title="For Builders & Developers" description="Partner with Qubix for scalable smart home technology across residential towers and villa projects. Pre-wiring, model flats, and enterprise integration." path="/builders" />
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
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">For Builders & Developers</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8">
            Technology that <br />
            <span className="italic text-gradient-vibrant">sells homes.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-silver max-w-2xl mx-auto mb-10 leading-relaxed">
            Qubix partners with India's leading residential developers to deliver smart home technology at scale. We understand construction timelines, contractor ecosystems, milestone billing, and long-term resident support — because we've delivered across 500+ residences and counting. From model flat to full tower rollout, we are your single technology partner.
          </p>
          <a href="#partner" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFFFFF] text-[#0A0A0A] font-body font-medium text-sm tracking-wider rounded-full hover:bg-[#F0F0F0] transition-colors">
            Partner With Us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Scale Capabilities */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Enterprise Scale</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">Built for <span className="italic">volume.</span></h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto">From slab stage consultation to post-handover support — we're built to operate at developer scale.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scaleCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-sm bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <cap.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-medium mb-2">{cap.title}</h3>
                <p className="font-body text-sm text-silver leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Rules */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">We operate by <span className="italic">your site rules.</span></h2>
            <p className="font-body text-base text-silver max-w-2xl mx-auto">Construction sites have protocols. So do we. Our teams are trained in EHS compliance, site safety standards, and documentation requirements — we integrate into your contractor ecosystem without disrupting it.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "EHS Compliant Teams", description: "Every technician deployed follows EHS protocols — PPE, site induction, method statements, and incident reporting aligned to your contractor requirements." },
              { icon: ClipboardList, title: "Documentation Ready", description: "BOQs, as-built drawings, compliance certificates, and handover documentation delivered in the format your project management team needs." },
              { icon: Users, title: "Contractor Coordination", description: "We coordinate directly with your civil, MEP, and interior contractors — conduit planning, ceiling coordination, and snagging handled end-to-end." },
              { icon: CheckCircle2, title: "Quality Audits", description: "Stage-wise quality checks at pre-plaster, pre-ceiling, and pre-handover milestones — with sign-off documentation at every phase." },
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

      {/* Buyer Value Prop */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">
              Technology-ready homes <span className="italic text-gradient-vibrant">sell faster.</span>
            </h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto">
              Integrated smart home technology isn't a cost — it's a competitive advantage. Position your project as premium from day one.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-12">Trusted By</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-center h-24 rounded-sm border-2 border-dashed border-border">
                  <span className="font-body text-xs text-muted-foreground">Partner Logo</span>
                </div>
              ))}
            </div>
            <p className="font-body text-sm italic text-silver">
              Project references and case studies available under NDA upon request.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commercial Terms */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Commercial Terms</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">Built around how <span className="italic">developers work.</span></h2>
            <p className="font-body text-base text-silver max-w-2xl mx-auto">We understand construction finance. Our commercial structures are designed around project milestones — not arbitrary payment schedules.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Milestone-Based Billing", body: "Payments tied to construction milestones — slab, pre-plaster, fit-out, and handover — aligned to your draw-down schedule, not ours." },
              { title: "Volume Pricing", body: "As a scale integrator with direct manufacturer partnerships across 85+ brands, we offer volume-based pricing unavailable to project-by-project vendors." },
              { title: "Single-Vendor Accountability", body: "One contract. One point of contact. Audio, video, lighting, networking, automation, and security — fully integrated under a single commercial agreement." },
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

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Premium Amenities</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">World-class brands, <span className="italic">your differentiator.</span></h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto mb-12">
              Offer your buyers the same technology found in the world's finest residences.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-8 py-4 rounded-sm bg-card border border-border font-display text-sm tracking-wider text-silver"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">How We Work</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium">From blueprint to <span className="italic">handover.</span></h2>
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

      {/* Project References */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">See our <span className="italic text-gradient-vibrant">work.</span></h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto mb-8">
              Explore our portfolio of completed projects across residential and commercial spaces.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-primary font-body font-medium text-sm tracking-wider rounded-full hover:bg-primary/10 transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="partner" className="py-32 lg:py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
              Partner with <span className="italic text-gradient-vibrant">Qubix.</span>
            </h2>
            <p className="font-body text-base text-silver max-w-xl mx-auto">
              Tell us about your project. Our enterprise team will get back to you within 24 hours.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-12 rounded-sm bg-carbon border border-graphite">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-16 h-16 rounded-full bg-relax/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-relax" />
              </motion.div>
              <h3 className="font-display text-2xl font-semibold mb-2">Request Received</h3>
              <p className="font-body text-sm text-silver">Our enterprise partnerships team will reach out within 24 hours. Thank you{form.name ? `, ${form.name}` : ""}.</p>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-5 p-8 rounded-sm bg-carbon border border-graphite">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50" />
                <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50" />
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground focus:outline-none focus:border-primary/50 appearance-none">
                  <option value="" disabled>Project type</option>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <input value={form.units} onChange={(e) => setForm({ ...form, units: e.target.value })} placeholder="Approx. number of units" className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50" />
              </div>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project (optional)" rows={3} className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-primary/50 resize-none" />
              <button type="submit" className="w-full py-4 font-body font-medium text-sm tracking-wider bg-gradient-vibrant text-white rounded-sm hover:opacity-90 transition-opacity">
                Submit Partnership Enquiry
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </Layout>
  );
}
