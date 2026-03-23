import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Film, PartyPopper, Moon, Volume2, Lightbulb } from "lucide-react";

const rooms = ["Living", "Theatre", "Bedroom", "Terrace"];

const scenes: Record<string, { name: string; icon: typeof Sun; color: string; volume: number; lighting: number }[]> = {
  Living: [
    { name: "Morning", icon: Sun, color: "social", volume: 30, lighting: 80 },
    { name: "Movie Night", icon: Film, color: "cinema", volume: 70, lighting: 15 },
    { name: "Party", icon: PartyPopper, color: "music", volume: 90, lighting: 60 },
    { name: "Goodnight", icon: Moon, color: "relax", volume: 0, lighting: 5 },
  ],
  Theatre: [
    { name: "Morning", icon: Sun, color: "social", volume: 20, lighting: 60 },
    { name: "Movie Night", icon: Film, color: "cinema", volume: 85, lighting: 0 },
    { name: "Party", icon: PartyPopper, color: "music", volume: 95, lighting: 40 },
    { name: "Goodnight", icon: Moon, color: "relax", volume: 0, lighting: 0 },
  ],
  Bedroom: [
    { name: "Morning", icon: Sun, color: "social", volume: 25, lighting: 70 },
    { name: "Movie Night", icon: Film, color: "cinema", volume: 50, lighting: 20 },
    { name: "Party", icon: PartyPopper, color: "music", volume: 40, lighting: 50 },
    { name: "Goodnight", icon: Moon, color: "relax", volume: 10, lighting: 2 },
  ],
  Terrace: [
    { name: "Morning", icon: Sun, color: "social", volume: 35, lighting: 90 },
    { name: "Movie Night", icon: Film, color: "cinema", volume: 60, lighting: 30 },
    { name: "Party", icon: PartyPopper, color: "music", volume: 85, lighting: 70 },
    { name: "Goodnight", icon: Moon, color: "relax", volume: 15, lighting: 10 },
  ],
};

const colorBg: Record<string, string> = {
  social: "bg-social", cinema: "bg-cinema", music: "bg-music", relax: "bg-relax",
};
const colorText: Record<string, string> = {
  social: "text-social", cinema: "text-cinema", music: "text-music", relax: "text-relax",
};

export default function ControlDemo() {
  const [activeRoom, setActiveRoom] = useState("Living");
  const [activeScene, setActiveScene] = useState(0);

  const currentScenes = scenes[activeRoom];
  const current = currentScenes[activeScene];

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            One Touch. <span className="italic text-gradient-vibrant">Everything Responds.</span>
          </h2>
        </motion.div>

        {/* iPad mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto rounded-2xl border border-graphite bg-carbon shadow-2xl overflow-hidden"
        >
          <div className="h-6 bg-graphite flex items-center justify-center">
            <div className="w-12 h-1 bg-steel rounded-full" />
          </div>

          <div className="p-6 space-y-6">
            {/* Room selector */}
            <div className="flex gap-2">
              {rooms.map((r) => (
                <button
                  key={r}
                  onClick={() => { setActiveRoom(r); setActiveScene(0); }}
                  className={`px-4 py-2 font-body text-xs rounded-full transition-all ${
                    activeRoom === r ? "bg-gradient-vibrant text-white" : "bg-graphite text-silver"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Scenes */}
            <div className="grid grid-cols-4 gap-2">
              {currentScenes.map((scene, i) => (
                <button
                  key={scene.name}
                  onClick={() => setActiveScene(i)}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    activeScene === i
                      ? `border-${scene.color}/50 ${colorBg[scene.color]}/10`
                      : "border-graphite"
                  }`}
                >
                  <scene.icon className={`w-5 h-5 mx-auto mb-1 ${activeScene === i ? colorText[scene.color] : "text-silver"}`} />
                  <p className="font-body text-[10px] text-platinum/70">{scene.name}</p>
                </button>
              ))}
            </div>

            {/* Sliders */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeRoom}-${activeScene}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 className="w-4 h-4 text-cinema" />
                    <span className="font-body text-xs text-silver">Volume</span>
                    <span className="font-body text-xs text-platinum ml-auto">{current.volume}%</span>
                  </div>
                  <div className="h-1.5 bg-graphite rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-cinema rounded-full"
                      animate={{ width: `${current.volume}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-social" />
                    <span className="font-body text-xs text-silver">Lighting</span>
                    <span className="font-body text-xs text-platinum ml-auto">{current.lighting}%</span>
                  </div>
                  <div className="h-1.5 bg-graphite rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-social rounded-full"
                      animate={{ width: `${current.lighting}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Visual feedback */}
            <div className={`p-4 rounded-lg border border-graphite text-center transition-all duration-700`}
              style={{ backgroundColor: `hsl(var(--${current.color}) / 0.05)` }}
            >
              <p className={`font-display text-lg ${colorText[current.color]}`}>{current.name} Mode</p>
              <p className="font-body text-xs text-silver mt-1">{activeRoom} is set</p>
            </div>
          </div>

          <div className="h-4 bg-graphite" />
        </motion.div>
      </div>
    </section>
  );
}
