import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, Sparkles, Lightbulb, Thermometer, Volume2, Lock, Sun, Moon, Film, Coffee, Power, Wifi, Battery } from "lucide-react";

type Scene = {
  name: string;
  detail: string;
  icon: typeof Sun;
};

const qubixScenes: Scene[] = [
  { name: "Welcome Home", icon: Sun, detail: "Foyer warms, music follows you in, AC pre-cooled before you arrive." },
  { name: "Movie Night", icon: Film, detail: "Blinds drop, sconces dim to 8%, projector wakes, sub calibrates to the room." },
  { name: "Sunday Morning", icon: Coffee, detail: "Curtains open with the sun, kitchen wakes to your playlist, bedrooms stay quiet." },
  { name: "Goodnight", icon: Moon, detail: "Whole-home off, perimeter armed, kid's nightlight stays at 5%." },
];

// Old GUI panel (left) - Extron-style "Lighting Settings" wall panel
function LegacyPanel() {
  const zones = ["Zone A", "Zone B", "Zone C", "Master"];
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* White plastic bezel - landscape touch panel on a wall */}
      <div className="rounded-[14px] p-4 bg-gradient-to-b from-[#f4f4f2] to-[#d8d6d0] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-white/60 relative">
        {/* Sensor strip */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-black/40" />
          <div className="w-1 h-1 rounded-full bg-black/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
          <div className="w-1 h-1 rounded-full bg-black/40" />
        </div>

        {/* Screen */}
        <div className="mt-3 rounded-[6px] overflow-hidden border border-black/30 relative" style={{ minHeight: 480 }}>
          {/* Dim background "photo" behind UI */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #1a1f2a 0%, #2a2235 40%, #3a2a40 70%, #1f1a2a 100%)",
            }}
          />
          <div className="absolute inset-0 opacity-30" style={{
            background: "radial-gradient(circle at 60% 50%, #6a4a8a 0%, transparent 50%), radial-gradient(circle at 30% 70%, #4a3a6a 0%, transparent 40%)"
          }} />
          <div className="absolute inset-0 bg-black/40" />

          {/* UI overlay */}
          <div className="relative z-10 p-4 h-full" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-white text-[15px] font-medium">Lighting Settings</p>
              <button className="bg-[#5a5a5a] border border-[#3a3a3a] text-white text-[10px] px-3 py-1 shadow-[inset_0_1px_0_#888]" style={{ borderRadius: 3 }}>
                Close
              </button>
            </div>

            {/* 4 zones with scenes 1-8 */}
            <div className="grid grid-cols-4 gap-3">
              {zones.map((zone, zi) => (
                <div key={zone} className="flex flex-col items-center gap-1.5">
                  <p className="text-white text-[11px] mb-1">{zone}</p>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <button
                      key={n}
                      className="w-full bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] active:translate-y-px"
                      style={{ borderRadius: 2 }}
                    >
                      Scene {n}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand label */}
        <p className="text-center font-body text-[9px] text-[#6a6a6a] mt-2 tracking-wider">Extron</p>
      </div>
      <p className="text-center font-mono text-[10px] text-silver/50 mt-3 tracking-widest uppercase">Real install · Programmed like a spreadsheet</p>
    </div>
  );
}

// Modern Crestron-Home style iPad
function QubixPanel({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  const current = qubixScenes[active];
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* iPad bezel */}
      <div className="rounded-[40px] p-3 bg-gradient-to-b from-[#f5f5f7] to-[#d9d9dc] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/60">
        {/* Screen */}
        <div className="rounded-[28px] overflow-hidden bg-gradient-to-br from-[#fafafa] via-[#f0efed] to-[#e6e3dd] relative" style={{ minHeight: 540 }}>
          {/* iOS status bar */}
          <div className="px-6 pt-3 pb-2 flex items-center justify-between text-[#1d1d1f]">
            <span className="font-body text-[11px] font-semibold">9:41</span>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3 h-3" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Header */}
          <div className="px-6 pt-2 pb-4">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#86868b]">Good evening</p>
            <h3 className="font-display text-2xl text-[#1d1d1f] font-medium leading-tight mt-0.5">Living Room</h3>
          </div>

          {/* Scene tiles - Crestron Home style */}
          <div className="px-4 grid grid-cols-2 gap-3">
            {qubixScenes.map((s, i) => {
              const Icon = s.icon;
              const isActive = active === i;
              return (
                <button
                  key={s.name}
                  onClick={() => setActive(i)}
                  className={`relative aspect-[4/3] rounded-2xl p-4 text-left overflow-hidden transition-all ${
                    isActive
                      ? "bg-[#1d1d1f] text-white shadow-lg scale-[1.02]"
                      : "bg-white/80 text-[#1d1d1f] hover:bg-white shadow-sm border border-black/[0.04]"
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-auto ${isActive ? "text-white" : "text-[#86868b]"}`} />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className={`font-display text-base leading-tight ${isActive ? "text-white" : "text-[#1d1d1f]"}`}>
                      {s.name}
                    </p>
                    <p className={`font-body text-[10px] mt-0.5 ${isActive ? "text-white/70" : "text-[#86868b]"}`}>
                      {isActive ? "Active now" : "Tap to set"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Live detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mx-4 mt-3 p-4 rounded-2xl bg-white/80 border border-black/[0.04]"
            >
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#86868b] mb-1.5">Now happening</p>
              <p className="font-body text-[13px] text-[#1d1d1f] leading-snug">{current.detail}</p>
            </motion.div>
          </AnimatePresence>

          {/* Quick controls strip */}
          <div className="mx-4 mt-3 mb-4 grid grid-cols-4 gap-2">
            {[
              { icon: Lightbulb, label: "Lights" },
              { icon: Thermometer, label: "Climate" },
              { icon: Volume2, label: "Audio" },
              { icon: Lock, label: "Security" },
            ].map((q) => (
              <div key={q.label} className="aspect-square rounded-xl bg-white/80 border border-black/[0.04] flex flex-col items-center justify-center gap-1">
                <q.icon className="w-4 h-4 text-[#1d1d1f]" />
                <span className="font-body text-[9px] text-[#86868b]">{q.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Camera dot */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/40" />
      </div>
      <p className="text-center font-mono text-[10px] text-silver/60 mt-3 tracking-widest uppercase">The Qubix experience · Today</p>
    </div>
  );
}

export function ControlDemo() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
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

        {/* Mockup comparison on a soft light backdrop */}
        <div className="mt-20 rounded-[36px] p-8 md:p-16 relative overflow-hidden border border-platinum/10"
          style={{
            background: "radial-gradient(ellipse at 30% 30%, #f4f1ea 0%, #e9e4d8 40%, #d8d2c2 100%)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#1d1d1f]/60 mb-4 text-center">
                Everyone else
              </p>
              <LegacyPanel />
              <p className="font-body text-xs text-[#1d1d1f]/70 mt-6 italic text-center max-w-xs mx-auto">
                Programmed like a switchboard. The homeowner stops using it within a month.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#1d1d1f]" />
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#1d1d1f]">
                  The Qubix experience
                </p>
              </div>
              <QubixPanel active={active} setActive={setActive} />
              <p className="font-body text-xs text-[#1d1d1f]/70 mt-6 italic text-center max-w-xs mx-auto">
                Real moments. Programmed once. Used every day.
              </p>
            </motion.div>
          </div>
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

export default ControlDemo;
