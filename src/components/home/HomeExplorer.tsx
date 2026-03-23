import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Lightbulb, Shield, Play } from "lucide-react";

const rooms = [
  // Indoor
  { id: "living", name: "Living Room", zone: "indoor", row: 1, audio: "Distributed ceiling + architectural sub", lighting: ["Morning Calm", "Evening Glow", "Movie Night"], control: "Voice + touch panel" },
  { id: "theatre", name: "Private Theatre", zone: "indoor", row: 1, audio: "Dolby Atmos 9.4.6 with PMC monitors", lighting: ["Demo", "Movie", "Interval"], control: "Crestron one-touch" },
  { id: "bar", name: "Bar & Lounge", zone: "indoor", row: 2, audio: "High-output zone with subwoofer", lighting: ["Intimate", "Party", "Late Night"], control: "Scene buttons" },
  { id: "performance", name: "Performance Room", zone: "indoor", row: 2, audio: "PA-grade with wireless mic integration", lighting: ["Stage", "House", "Blackout"], control: "Performance modes", modes: ["Karaoke", "DJ Set", "Live Music"] },
  { id: "master", name: "Master Suite", zone: "indoor", row: 2, audio: "Invisible in-wall + bedside control", lighting: ["Wake", "Relax", "Sleep"], control: "Bedside panel" },
  { id: "wellness", name: "Wellness Bath", zone: "indoor", row: 3, audio: "Moisture-rated ceiling speakers", lighting: ["Energize", "Spa", "Night Light"], control: "Waterproof remote" },
  // Outdoor
  { id: "terrace", name: "Terrace", zone: "outdoor", row: 4, audio: "Weather-resistant landscape speakers", lighting: ["Sunset", "Dinner", "Party"], control: "Outdoor panel" },
  { id: "garden", name: "Garden & Pool", zone: "outdoor", row: 4, audio: "Buried subwoofer + satellite system", lighting: ["Ambient", "Pool Party", "Stargazing"], control: "App control" },
  { id: "entry", name: "Entry & Gate", zone: "outdoor", row: 4, audio: "Intercom + announcement", lighting: ["Welcome", "Security", "Away"], control: "Biometric + camera", security: ["Facial Recognition", "Plate Detection", "Visitor Log"] },
];

const zoneColors: Record<string, string> = {
  indoor: "border-graphite bg-carbon/50",
  outdoor: "border-dashed border-graphite bg-void/60",
};

export default function HomeExplorer() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const active = rooms.find((r) => r.id === selectedRoom);

  const indoor = rooms.filter((r) => r.zone === "indoor");
  const outdoor = rooms.filter((r) => r.zone === "outdoor");

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            Explore Every <span className="italic text-gradient-vibrant">Space</span>
          </h2>
          <p className="font-body text-base text-silver">
            Tap any room — indoors or out — to reveal the invisible technology within.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Floor Plan */}
          <div className="lg:col-span-3 relative">
            {/* Blueprint dot grid */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: "radial-gradient(hsl(var(--platinum)) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }} />

            <div className="relative space-y-3">
              {/* Zone label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-cinema" />
                <span className="font-body text-xs text-silver uppercase tracking-wider">Indoor</span>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-3">
                {indoor.filter(r => r.row === 1).map(room => (
                  <RoomTile key={room.id} room={room} selected={selectedRoom === room.id} onClick={() => setSelectedRoom(room.id)} />
                ))}
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-3">
                {indoor.filter(r => r.row === 2).map(room => (
                  <RoomTile key={room.id} room={room} selected={selectedRoom === room.id} onClick={() => setSelectedRoom(room.id)} />
                ))}
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 gap-3">
                {indoor.filter(r => r.row === 3).map(room => (
                  <RoomTile key={room.id} room={room} selected={selectedRoom === room.id} onClick={() => setSelectedRoom(room.id)} />
                ))}
              </div>

              {/* Dashed boundary */}
              <div className="border-t border-dashed border-muted-foreground/20 my-4" />

              {/* Outdoor label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-relax" />
                <span className="font-body text-xs text-silver uppercase tracking-wider">Outdoor</span>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-3 gap-3">
                {outdoor.map(room => (
                  <RoomTile key={room.id} room={room} selected={selectedRoom === room.id} onClick={() => setSelectedRoom(room.id)} />
                ))}
              </div>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 rounded-sm bg-carbon border border-graphite sticky top-24"
                >
                  <span className={`inline-block px-2 py-0.5 text-xs font-body rounded ${active.zone === "indoor" ? "bg-cinema/10 text-cinema" : "bg-relax/10 text-relax"}`}>
                    {active.zone}
                  </span>
                  <h3 className="font-display text-2xl font-semibold mt-3 mb-6 text-gradient-vibrant">{active.name}</h3>

                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Volume2 className="w-4 h-4 text-cinema" />
                        <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Audio Architecture</span>
                      </div>
                      <p className="font-body text-sm text-platinum/80">{active.audio}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-social" />
                        <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Lighting Scenes</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {active.lighting.map(s => (
                          <span key={s} className="px-3 py-1 text-xs font-body bg-graphite rounded-full text-platinum/80">{s}</span>
                        ))}
                      </div>
                    </div>

                    {active.security && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-4 h-4 text-cat-security" />
                          <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Security</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {active.security.map(s => (
                            <span key={s} className="px-3 py-1 text-xs font-body bg-graphite rounded-full text-platinum/80">{s}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {active.modes && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Play className="w-4 h-4 text-performance" />
                          <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Performance Modes</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {active.modes.map(m => (
                            <span key={m} className="px-3 py-1 text-xs font-body bg-graphite rounded-full text-platinum/80">{m}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-3 border-t border-graphite">
                      <p className="font-body text-xs text-muted-foreground mb-1">Control</p>
                      <p className="font-body text-sm text-platinum/80">{active.control}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-8 rounded-sm bg-carbon border border-graphite text-center sticky top-24"
                >
                  <p className="font-body text-sm text-silver">Select a room to explore its technology</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoomTile({ room, selected, onClick }: { room: typeof rooms[0]; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-sm text-left transition-all duration-300 ${
        room.zone === "indoor" ? "bg-carbon/50 border border-graphite" : "bg-void/60 border border-dashed border-graphite"
      } ${selected ? "border-cinema/50 glow-cinema" : "hover:border-muted-foreground/30"}`}
    >
      <p className="font-display text-sm font-semibold">{room.name}</p>
      {room.zone === "outdoor" && <span className="font-body text-[10px] text-relax uppercase tracking-wider">outdoor</span>}
    </button>
  );
}
