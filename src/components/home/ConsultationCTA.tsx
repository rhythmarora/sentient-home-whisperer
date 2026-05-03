import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";

const timeslots = [
  "Today · Evening",
  "Tomorrow · Morning",
  "Tomorrow · Afternoon",
  "This weekend",
  "Next week",
];

export default function ConsultationCTA() {
  const [form, setForm] = useState({ name: "", phone: "", message: "", slot: timeslots[1], sendMessageFirst: true });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushLeadToZoho({
      name: form.name,
      email: "",
      phone: form.phone,
      projectType: "",
      aiJourneyData: {
        message: form.message,
        preferredSlot: form.slot,
        sendMessageBeforeCalling: String(form.sendMessageFirst),
      },
      source: "Callback Request",
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
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
        <h3 className="font-display text-2xl font-semibold mb-2">Callback Booked</h3>
        <p className="font-body text-sm text-silver">
          A Qubix design consultant will reach out {form.slot.toLowerCase()}{form.name ? `, ${form.name}` : ""}.
          {form.sendMessageFirst && " We'll send a WhatsApp note before calling."}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-5 p-8 rounded-2xl bg-carbon border border-graphite"
    >
      <input
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Your name"
        maxLength={100}
        className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50"
      />
      <input
        required
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        placeholder="WhatsApp number"
        maxLength={20}
        className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50"
      />

      <div>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-silver/60 mb-2">Preferred timeslot</p>
        <div className="flex flex-wrap gap-2">
          {timeslots.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setForm({ ...form, slot: s })}
              className={`px-3 py-1.5 font-body text-xs rounded-full border transition-all ${
                form.slot === s
                  ? "border-platinum/60 bg-platinum/10 text-foreground"
                  : "border-graphite bg-void/50 text-silver hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <textarea
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="Anything you'd like us to know? (optional)"
        rows={2}
        maxLength={1000}
        className="w-full px-4 py-3 font-body text-sm rounded-sm border border-graphite bg-void text-foreground placeholder:text-ash focus:outline-none focus:border-cinema/50 resize-none"
      />

      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={form.sendMessageFirst}
          onChange={(e) => setForm({ ...form, sendMessageFirst: e.target.checked })}
          className="w-4 h-4 accent-platinum"
        />
        <span className="font-body text-xs text-silver group-hover:text-foreground transition-colors">
          Send a WhatsApp message before calling
        </span>
      </label>

      <button
        type="submit"
        className="w-full py-4 font-body font-medium text-sm tracking-wider bg-[#FFFFFF] text-[#0A0A0A] rounded-sm hover:bg-[#F0F0F0] transition-colors"
      >
        Request Callback
      </button>
    </motion.form>
  );
}
