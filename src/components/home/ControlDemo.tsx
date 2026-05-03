import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, Sparkles, Lightbulb, Thermometer, Volume2, Lock, Sun, Moon, Film, Coffee, Wifi, Battery, Shield, Music, Wind } from "lucide-react";

type View = "scenes" | "lights" | "climate" | "audio" | "security";

type Scene = { name: string; detail: string; icon: typeof Sun };

const qubixScenes: Scene[] = [
  { name: "Welcome Home", icon: Sun, detail: "Foyer warms, music follows you in, AC pre-cooled before you arrive." },
  { name: "Movie Night", icon: Film, detail: "Blinds drop, sconces dim to 8%, projector wakes, sub calibrates to the room." },
  { name: "Sunday Morning", icon: Coffee, detail: "Curtains open with the sun, kitchen wakes to your playlist, bedrooms stay quiet." },
  { name: "Goodnight", icon: Moon, detail: "Whole-home off, perimeter armed, kid's nightlight stays at 5%." },
];

const categories: { id: View; label: string; icon: typeof Sun }[] = [
  { id: "scenes", label: "Scenes", icon: Sparkles },
  { id: "lights", label: "Lights", icon: Lightbulb },
  { id: "climate", label: "Climate", icon: Thermometer },
  { id: "audio", label: "Audio", icon: Volume2 },
  { id: "security", label: "Security", icon: Lock },
];

// ====== LEGACY PANEL ======
function LegacyPanel({ view, setView }: { view: View; setView: (v: View) => void }) {
  const titles: Record<View, string> = {
    scenes: "Scene Settings",
    lights: "Lighting Settings",
    climate: "HVAC Settings",
    audio: "Audio Settings",
    security: "Security Settings",
  };

  return (
    <div className="relative mx-auto w-full max-w-[460px] h-[640px] flex flex-col">
      <div className="rounded-[14px] p-4 bg-gradient-to-b from-[#f4f4f2] to-[#d8d6d0] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-white/60 relative flex-1 flex flex-col">
        {/* Sensor strip */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-black/40" />
          <div className="w-1 h-1 rounded-full bg-black/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-black/50" />
          <div className="w-1 h-1 rounded-full bg-black/40" />
        </div>

        <div className="mt-3 rounded-[6px] overflow-hidden border border-black/30 relative flex-1 flex flex-col">
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #1a1f2a 0%, #2a2235 40%, #3a2a40 70%, #1f1a2a 100%)" }}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* UI */}
          <div className="relative z-10 p-4 flex-1 flex flex-col" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-white text-[14px] font-medium">{titles[view]}</p>
              <button className="bg-[#5a5a5a] border border-[#3a3a3a] text-white text-[10px] px-3 py-1 shadow-[inset_0_1px_0_#888]" style={{ borderRadius: 3 }}>
                Close
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex-1"
              >
                {view === "scenes" && <LegacyScenes />}
                {view === "lights" && <LegacyLights />}
                {view === "climate" && <LegacyClimate />}
                {view === "audio" && <LegacyAudio />}
                {view === "security" && <LegacySecurity />}
              </motion.div>
            </AnimatePresence>

            {/* Bottom tabs */}
            <div className="flex gap-0.5 pt-3 mt-auto">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setView(c.id)}
                  className={`flex-1 text-[9px] py-1.5 border border-[#2a2a2a] ${
                    view === c.id
                      ? "bg-[#3a3a3a] text-white"
                      : "bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                  }`}
                  style={{ borderRadius: 2 }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegacyScenes() {
  const zones = ["Zone A", "Zone B", "Zone C", "Master"];
  return (
    <div className="grid grid-cols-4 gap-2">
      {zones.map((zone) => (
        <div key={zone} className="flex flex-col items-center gap-1">
          <p className="text-white text-[10px] mb-0.5">{zone}</p>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <button
              key={n}
              className="w-full bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
              style={{ borderRadius: 2 }}
            >
              Scene {n}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

function LegacyLights() {
  const lights = ["Light 1", "Light 2", "Light 3", "Light 4", "Light 5", "Light 6", "Light 7", "Light 8"];
  const vals = [80, 60, 40, 100, 20, 0, 75, 50];
  return (
    <div className="space-y-1.5">
      {lights.map((l, i) => (
        <div key={l} className="flex items-center gap-2 bg-black/30 px-2 py-1 border border-white/10" style={{ borderRadius: 2 }}>
          <span className="text-[10px] text-white w-12">{l}</span>
          <div className="flex-1 h-2 bg-[#222] border border-[#444] relative">
            <div className="h-full bg-[#ffb43a]" style={{ width: `${vals[i]}%` }} />
          </div>
          <span className="text-[9px] font-mono text-white w-8 text-right">{vals[i]}%</span>
          <button className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] w-5 h-5">−</button>
          <button className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] w-5 h-5">+</button>
        </div>
      ))}
    </div>
  );
}

function LegacyClimate() {
  const zones = [
    { name: "Zone 1 - Living", set: 24, fan: "Auto" },
    { name: "Zone 2 - Dining", set: 23, fan: "Low" },
    { name: "Zone 3 - Bed 1", set: 22, fan: "Med" },
    { name: "Zone 4 - Bed 2", set: 24, fan: "Auto" },
    { name: "Zone 5 - Bed 3", set: 25, fan: "Off" },
  ];
  return (
    <div className="space-y-1.5">
      {zones.map((z) => (
        <div key={z.name} className="bg-black/30 border border-white/10 p-2" style={{ borderRadius: 2 }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-white">{z.name}</span>
            <span className="text-[14px] font-mono text-white">{z.set}°C</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] px-2 py-0.5">Cool</button>
            <button className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] px-2 py-0.5">Heat</button>
            <button className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] px-2 py-0.5">Fan: {z.fan}</button>
            <div className="ml-auto flex gap-0.5">
              <button className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] w-5 h-5">−</button>
              <button className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] w-5 h-5">+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LegacyAudio() {
  const sources = ["Source 1", "Source 2", "Source 3", "Source 4"];
  const zones = ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5", "Zone 6"];
  return (
    <div className="space-y-2">
      <div className="bg-black/30 border border-white/10 p-2" style={{ borderRadius: 2 }}>
        <p className="text-[9px] text-white/70 mb-1 uppercase">Sources</p>
        <div className="grid grid-cols-4 gap-1">
          {sources.map((s) => (
            <button key={s} className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] py-1">{s}</button>
          ))}
        </div>
      </div>
      <div className="bg-black/30 border border-white/10 p-2" style={{ borderRadius: 2 }}>
        <p className="text-[9px] text-white/70 mb-1 uppercase">Zone Volume</p>
        {zones.map((z, i) => (
          <div key={z} className="flex items-center gap-2 mb-1">
            <span className="text-[9px] text-white w-12">{z}</span>
            <div className="flex-1 h-1.5 bg-[#222] border border-[#444]">
              <div className="h-full bg-[#5ec5ff]" style={{ width: `${[40, 60, 0, 30, 70, 20][i]}%` }} />
            </div>
            <span className="text-[9px] font-mono text-white w-6 text-right">{[40, 60, 0, 30, 70, 20][i]}</span>
            <button className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] w-5 h-4">M</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function LegacySecurity() {
  const sensors = [
    "Door 1: Closed", "Door 2: Closed", "Door 3: Open", "Window 1: Closed",
    "Window 2: Closed", "Motion 1: Idle", "Motion 2: Idle", "Smoke: Normal",
    "CO: Normal", "Glass 1: Idle", "Glass 2: Idle", "Panic: Armed",
  ];
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-1">
        {["Arm Stay", "Arm Away", "Disarm"].map((b) => (
          <button key={b} className="bg-gradient-to-b from-[#7a7a7a] to-[#4a4a4a] border border-[#2a2a2a] text-white text-[9px] py-1.5">{b}</button>
        ))}
      </div>
      <div className="bg-black/30 border border-white/10 p-2 space-y-0.5" style={{ borderRadius: 2 }}>
        {sensors.map((s) => {
          const ok = !s.includes("Open");
          return (
            <div key={s} className="flex items-center justify-between text-[9px] font-mono">
              <span className="text-white/80">{s}</span>
              <span className={ok ? "text-[#5eff8a]" : "text-[#ff6a6a]"}>●</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ====== QUBIX PANEL ======
function QubixPanel({
  active, setActive, view, setView,
}: {
  active: number; setActive: (i: number) => void; view: View; setView: (v: View) => void;
}) {
  const headers: Record<View, { eyebrow: string; title: string }> = {
    scenes: { eyebrow: "Good evening", title: "Living Room" },
    lights: { eyebrow: "Lighting", title: "Soft & warm" },
    climate: { eyebrow: "Climate", title: "Comfortably cool" },
    audio: { eyebrow: "Audio", title: "Around the home" },
    security: { eyebrow: "Security", title: "All quiet" },
  };
  const h = headers[view];

  return (
    <div className="relative mx-auto w-full max-w-[460px] h-[640px] flex flex-col">
      <div className="rounded-[40px] p-3 bg-gradient-to-b from-[#f5f5f7] to-[#d9d9dc] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/60 flex-1 flex flex-col">
        <div className="rounded-[28px] overflow-hidden bg-gradient-to-br from-[#fafafa] via-[#f0efed] to-[#e6e3dd] relative flex-1 flex flex-col">
          {/* Status bar */}
          <div className="px-6 pt-3 pb-2 flex items-center justify-between text-[#1d1d1f]">
            <span className="font-body text-[11px] font-semibold">9:41</span>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3 h-3" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Header */}
          <div className="px-6 pt-2 pb-4">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#86868b]">{h.eyebrow}</p>
            <h3 className="font-display text-2xl text-[#1d1d1f] font-medium leading-tight mt-0.5">{h.title}</h3>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {view === "scenes" && <QubixScenes active={active} setActive={setActive} />}
                {view === "lights" && <QubixLights />}
                {view === "climate" && <QubixClimate />}
                {view === "audio" && <QubixAudio />}
                {view === "security" && <QubixSecurity />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick controls strip - clickable */}
          <div className="mx-4 mt-3 mb-4 grid grid-cols-5 gap-2">
            {categories.map((c) => {
              const isActive = view === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setView(c.id)}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${
                    isActive
                      ? "bg-[#1d1d1f] text-white shadow-md"
                      : "bg-white/80 border border-black/[0.04] hover:bg-white"
                  }`}
                >
                  <c.icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#1d1d1f]"}`} />
                  <span className={`font-body text-[9px] ${isActive ? "text-white/80" : "text-[#86868b]"}`}>{c.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/40" />
      </div>
    </div>
  );
}

function QubixScenes({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  const current = qubixScenes[active];
  return (
    <div className="h-full flex flex-col">
      <div className="px-4 grid grid-cols-2 gap-3">
        {qubixScenes.map((s, i) => {
          const Icon = s.icon;
          const isActive = active === i;
          return (
            <button
              key={s.name}
              onClick={() => setActive(i)}
              className={`relative aspect-[4/3] rounded-2xl p-4 text-left overflow-hidden transition-all ${
                isActive ? "bg-[#1d1d1f] text-white shadow-lg scale-[1.02]" : "bg-white/80 text-[#1d1d1f] hover:bg-white shadow-sm border border-black/[0.04]"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#86868b]"}`} />
              <div className="absolute bottom-3 left-4 right-4">
                <p className={`font-display text-base leading-tight ${isActive ? "text-white" : "text-[#1d1d1f]"}`}>{s.name}</p>
                <p className={`font-body text-[10px] mt-0.5 ${isActive ? "text-white/70" : "text-[#86868b]"}`}>{isActive ? "Active now" : "Tap to set"}</p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mx-4 mt-3 p-4 rounded-2xl bg-white/80 border border-black/[0.04]">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#86868b] mb-1.5">Now happening</p>
        <p className="font-body text-[13px] text-[#1d1d1f] leading-snug">{current.detail}</p>
      </div>
    </div>
  );
}

function QubixLights() {
  const moods = [
    { name: "Dinner", icon: Coffee, hint: "Warm 12%" },
    { name: "Read", icon: Sun, hint: "Task lights" },
    { name: "Relax", icon: Moon, hint: "Sconces 30%" },
    { name: "Off", icon: Lightbulb, hint: "Whole room" },
  ];
  return (
    <div className="px-4 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {moods.map((m, i) => (
          <button key={m.name} className={`aspect-[4/3] rounded-2xl p-4 text-left transition-all ${i === 0 ? "bg-[#1d1d1f] text-white shadow-lg" : "bg-white/80 text-[#1d1d1f] border border-black/[0.04]"}`}>
            <m.icon className={`w-5 h-5 ${i === 0 ? "text-white" : "text-[#86868b]"}`} />
            <p className={`font-display text-base mt-auto pt-6 ${i === 0 ? "text-white" : "text-[#1d1d1f]"}`}>{m.name}</p>
            <p className={`font-body text-[10px] ${i === 0 ? "text-white/70" : "text-[#86868b]"}`}>{m.hint}</p>
          </button>
        ))}
      </div>
      <div className="p-4 rounded-2xl bg-white/80 border border-black/[0.04]">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#86868b] mb-2">Brightness</p>
        <div className="h-1.5 bg-black/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#1d1d1f]" style={{ width: "60%" }} />
        </div>
      </div>
    </div>
  );
}

function QubixClimate() {
  return (
    <div className="px-4 space-y-3">
      <div className="p-6 rounded-2xl bg-[#1d1d1f] text-white text-center">
        <Wind className="w-5 h-5 mx-auto mb-2 text-white/70" />
        <p className="font-display text-5xl font-light leading-none">23°</p>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/60 mt-2">Comfortably cool</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Cool", active: true },
          { label: "Quiet", active: false },
          { label: "Away", active: false },
        ].map((m) => (
          <button key={m.label} className={`py-3 rounded-xl text-[11px] font-medium ${m.active ? "bg-[#1d1d1f] text-white" : "bg-white/80 text-[#1d1d1f] border border-black/[0.04]"}`}>
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function QubixAudio() {
  const rooms = [
    { name: "Living Room", playing: "Norah Jones — Sunrise", on: true },
    { name: "Kitchen", playing: "Same as Living", on: true },
    { name: "Bedroom", playing: "Off", on: false },
  ];
  return (
    <div className="px-4 space-y-2">
      <div className="p-4 rounded-2xl bg-[#1d1d1f] text-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
            <Music className="w-5 h-5 text-white/80" />
          </div>
          <div className="flex-1">
            <p className="font-display text-base leading-tight">Sunday Morning</p>
            <p className="font-body text-[10px] text-white/60">Curated playlist · 42 min left</p>
          </div>
        </div>
      </div>
      {rooms.map((r) => (
        <div key={r.name} className="p-3 rounded-2xl bg-white/80 border border-black/[0.04] flex items-center justify-between">
          <div>
            <p className="font-body text-[12px] text-[#1d1d1f] font-medium">{r.name}</p>
            <p className="font-body text-[10px] text-[#86868b]">{r.playing}</p>
          </div>
          <div className={`w-9 h-5 rounded-full p-0.5 transition-all ${r.on ? "bg-[#1d1d1f]" : "bg-black/10"}`}>
            <div className={`w-4 h-4 rounded-full bg-white transition-all ${r.on ? "ml-4" : ""}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

function QubixSecurity() {
  return (
    <div className="px-4 space-y-3">
      <div className="p-5 rounded-2xl bg-[#1d1d1f] text-white text-center">
        <Shield className="w-6 h-6 mx-auto mb-2 text-white/80" />
        <p className="font-display text-xl">All quiet</p>
        <p className="font-body text-[10px] text-white/60 tracking-[0.2em] uppercase mt-1">Home · Disarmed</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Stay", hint: "Family home" },
          { label: "Away", hint: "Lock everything" },
        ].map((m, i) => (
          <button key={m.label} className={`p-4 rounded-2xl text-left ${i === 0 ? "bg-white/80 border border-black/[0.04]" : "bg-white/80 border border-black/[0.04]"}`}>
            <p className="font-display text-base text-[#1d1d1f]">{m.label}</p>
            <p className="font-body text-[10px] text-[#86868b]">{m.hint}</p>
          </button>
        ))}
      </div>
      <div className="p-3 rounded-2xl bg-white/80 border border-black/[0.04]">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-[#86868b] mb-2">Doors & windows</p>
        <p className="font-body text-[12px] text-[#1d1d1f]">All closed · except <span className="italic text-[#86868b]">balcony door (intentional)</span></p>
      </div>
    </div>
  );
}

export function ControlDemo() {
  const [active, setActive] = useState(1);
  const [view, setView] = useState<View>("scenes");

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
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

        <div className="mt-20 rounded-[36px] p-8 md:p-16 relative overflow-hidden border border-platinum/10"
          style={{ background: "radial-gradient(ellipse at 50% 30%, #1c1c1e 0%, #131315 60%, #0a0a0c 100%)" }}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-silver/70 mb-6 text-center">
                Everyone else
              </p>
              <LegacyPanel view={view} setView={setView} />
              <p className="font-body text-sm text-silver/80 mt-8 italic text-center max-w-xs mx-auto leading-relaxed">
                Programmed like a switchboard. The homeowner stops using it within a month.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-platinum" />
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-platinum">
                  The Qubix experience
                </p>
              </div>
              <QubixPanel active={active} setActive={setActive} view={view} setView={setView} />
              <p className="font-body text-sm text-silver/80 mt-8 italic text-center max-w-xs mx-auto leading-relaxed">
                Real moments. Programmed once. Used every day.
              </p>
            </motion.div>
          </div>
          <p className="text-center font-body text-[10px] tracking-[0.3em] uppercase text-silver/50 mt-10">
            Tap any category — both panels switch in sync
          </p>
        </div>

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
