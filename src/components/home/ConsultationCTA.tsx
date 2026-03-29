import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";

const interests = [
  "Private Cinema", "Constellation Room", "Whole Home Audio",
  "Smart Lighting & Shading", "Full Home Automation", "Outdoor Entertainment",
  "Gaming Den", "Karaoke & Social Lounge",
];

const propertyTypes = ["Apartment / Penthouse", "Villa / Bungalow / Independent Home", "Farmhouse / Weekend Home", "Commercial Space"];

export default function ConsultationCTA() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", propertyType: "", interests: [] as string[] });
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (i: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(i)
        ? prev.interests.filter((x) => x !== i)
        : [...prev.interests, i],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushLeadToZoho({
      name: form.name,
      email: form.email,
      phone: form.phone,
      projectType: form.propertyType,
      aiJourneyData: { propertyType: form.propertyType, interests: form.interests.join(", ") },
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email address"
                className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone / WhatsApp number"
                className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50"
              />
              <select
                value={form.propertyType}
                onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                className="px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground focus:outline-none focus:border-cinema/50 appearance-none"
              >
                <option value="" disabled>Property type</option>
                {propertyTypes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Interest chips */}
            <div>
              <p className="font-body text-xs text-silver mb-3">I'm interested in:</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => {
                  const active = form.interests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 font-body text-xs rounded-full border transition-all ${
                        active
                          ? "border-cinema/50 bg-cinema/10 text-cinema"
                          : "border-graphite bg-void text-silver hover:text-foreground"
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 font-body font-medium text-sm tracking-wider bg-gradient-vibrant text-white rounded-sm hover:opacity-90 transition-opacity"
            >
              Start Your Journey
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
