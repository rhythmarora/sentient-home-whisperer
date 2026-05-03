import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, Sparkles } from "lucide-react";

type Scene = {
  name: string;
  detail: string;
};

const genericScenes: Scene[] = [
  { name: "Scene 1", detail: "Light 1: 80% · Light 2: 60% · AC: 24°" },
  { name: "Scene 2", detail: "Light 1: 20% · Light 2: 0% · AC: 22°" },
  { name: "Scene 3", detail: "Light 1: 100% · Light 2: 100% · AC: 26°" },
  { name: "Scene 4", detail: "Light 1: 0% · Light 2: 0% · AC: off" },
];

const qubixScenes: Scene[] = [
  { name: "Welcome Home", detail: "Foyer warms, music follows you in, AC pre-cooled before you arrive." },
  { name: "Movie Night", detail: "Blinds drop, sconces dim to 8%, projector wakes, sub calibrates to the room." },
  { name: "Sunday Morning", detail: "Curtains open with the sun, kitchen wakes to your playlist, bedrooms stay quiet." },
  { name: "Goodnight", detail: "Whole-home off, perimeter armed, kid's nightlight stays at 5%." },
];

export default function ControlDemo() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-silver mb-6">
            Automating homes since 2011
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-tight max-w-3xl mx-auto">
            We've learned not just <span className="italic">how</span> to program —
            <br />
            but <span className="italic text-gradient-vibrant">what</span> to program.
          </h2>
          <p className="font-body text-base md:text-lg text-silver mt-8 max-w-2xl mx-auto leading-relaxed">
            Fourteen years of watching customers actually live with their systems taught us which features get used
            every day, and which look impressive in a demo but never make it into the BOQ.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mt-20">
          {/* Everyone else */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-graphite bg-carbon/40 p-8"
          >
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-silver/60 mb-6">
              Everyone else
            </p>
            <div className="space-y-2">
              {genericScenes.map((s) => (
                <div key={s.name} className="p-4 rounded-lg border border-graphite/60 bg-obsidian/40">
                  <p className="font-body text-sm text-platinum/70">{s.name}</p>
                  <p className="font-mono text-[11px] text-silver/50 mt-1">{s.detail}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-silver/60 mt-6 italic">
              Programmed like a switchboard. The homeowner stops using it within a month.
            </p>
          </motion.div>

          {/* Qubix */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-platinum/20 bg-gradient-to-br from-carbon to-obsidian p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-music/10 rounded-full blur-3xl -z-0" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-platinum">
                  The Qubix experience
                </p>
                <Sparkles className="w-3.5 h-3.5 text-music" />
              </div>

              <div className="space-y-2">
                {qubixScenes.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setActive(i)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      active === i
                        ? "border-platinum/40 bg-platinum/5"
                        : "border-graphite/60 bg-obsidian/40 hover:border-graphite"
                    }`}
                  >
                    <p className={`font-display text-base ${active === i ? "text-platinum" : "text-platinum/80"}`}>
                      {s.name}
                    </p>
                    <AnimatePresence mode="wait">
                      {active === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="font-body text-xs text-silver mt-2 leading-relaxed"
                        >
                          {s.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>

              <p className="font-body text-xs text-silver mt-6 italic">
                Real moments. Programmed once. Used every day.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-graphite pt-6"
          >
            <p className="font-display text-2xl font-medium mb-3">Restraint over features</p>
            <p className="font-body text-sm text-silver leading-relaxed">
              We program what gets used — not everything that's possible. A shorter, sharper system the family actually
              touches every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-t border-platinum/30 pt-6"
          >
            <p className="font-display text-2xl font-medium mb-3">Tunable, not exposed</p>
            <p className="font-body text-sm text-silver leading-relaxed">
              Save a favourite, nudge a scene, rename a room — without ever opening the hood. Complexity stays our job.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-graphite pt-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <Headphones className="w-4 h-4 text-platinum" />
              <p className="font-display text-2xl font-medium">Remote support, included</p>
            </div>
            <p className="font-body text-sm text-silver leading-relaxed">
              Every Qubix project ships with secure remote management. When something needs a change, we're already
              connected — zero waiting, no service call.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
