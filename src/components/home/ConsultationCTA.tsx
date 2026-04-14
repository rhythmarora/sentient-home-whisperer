import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";

export default function ConsultationCTA() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushLeadToZoho({
      name: form.name,
      email: "",
      phone: form.phone,
      projectType: "",
      aiJourneyData: { message: form.message },
      source: "Consultation CTA",
    });
    setSubmitted(true);
  };

  return (
    <section className="py-32 lg:py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            Let's design <span className="italic text-gradient-vibrant">your home.</span>
          </h2>
          <p className="font-body text-base text-silver max-w-xl mx-auto">
            Book a private consultation at the Qubix Experience Center — or we'll come to you. No spec sheets. No pressure. Just a conversation about how your home should feel.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-sm bg-carbon border border-graphite"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-relax/20 flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-8 h-8 text-relax" />
            </motion.div>
            <h3 className="font-display text-2xl font-semibold mb-2">Request Received</h3>
            <p className="font-body text-sm text-silver">
              A Qubix design consultant will reach out within 24 hours — personally, over WhatsApp or email. Thank you{form.name ? `, ${form.name}` : ""}.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 p-8 rounded-sm bg-carbon border border-graphite"
          >
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50"
            />
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="WhatsApp number"
              className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your home — size, location, what you're imagining (optional)"
              rows={3}
              className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50 resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 font-body font-medium text-sm tracking-wider bg-[#FFFFFF] text-[#0A0A0A] rounded-sm hover:bg-[#F0F0F0] transition-colors"
            >
              Request a Private Consultation
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}