import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budgetRange: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushLeadToZoho({
      name: form.name,
      email: form.email,
      phone: form.phone,
      projectType: form.projectType,
      budgetRange: form.budgetRange,
      source: "Contact Form",
    });
    toast({
      title: "Thank you",
      description: "A Qubix design consultant will reach out within 24 hours — personally, over WhatsApp or email.",
    });
    setForm({ name: "", email: "", phone: "", projectType: "", budgetRange: "", message: "" });
  };

  return (
    <Layout>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Start Your Journey
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-medium mb-6">
                Let's design how your home <span className="italic text-gold-gradient">feels</span>
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Every Qubix project begins with a conversation — about your lifestyle, 
                your spaces, and the experiences that matter to you. Whether it's a 
                Constellation-powered listening room, a reference cinema, or whole-home 
                orchestration — we'll design the technology around how you live.
              </p>
              <div className="space-y-4 text-sm font-body text-muted-foreground">
                <p>✦ No obligation, no pressure — we connect over WhatsApp first</p>
                <p>✦ Response within 24 hours from a design consultant</p>
                <p>✦ Visit our 12-zone Experience Center in person</p>
                <p>✦ India's only Constellation by Meyer Sound demo</p>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      maxLength={15}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="+91"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Property Type</label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa / Independent Home</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="farmhouse">Farmhouse / Weekend Home</option>
                      <option value="bungalow">Bungalow</option>
                      <option value="commercial">Commercial / Hospitality</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Investment Range</label>
                    <select
                      value={form.budgetRange}
                      onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="15-50L">₹15–50 Lakhs</option>
                      <option value="50L-2Cr">₹50 Lakhs – 2 Crore</option>
                      <option value="2Cr-5Cr">₹2 – 5 Crore</option>
                      <option value="5Cr+">₹5 Crore+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Tell us about your vision</label>
                  <textarea
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors resize-none"
                    placeholder="What spaces are you designing? A private cinema, a Constellation room, whole-home audio? Tell us what matters most."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
                >
                  Start the Conversation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
