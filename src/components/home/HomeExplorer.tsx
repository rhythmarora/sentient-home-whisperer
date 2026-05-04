import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Lightbulb, Shield, Play, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import livingRoomImg from "@/assets/rooms/living-room.jpg";
import privateTheatreImg from "@/assets/rooms/private-theatre.jpg";
import listeningRoomImg from "@/assets/rooms/listening-room.jpg";
import performanceRoomImg from "@/assets/rooms/performance-room.jpg";
import gardenPoolImg from "@/assets/rooms/garden-pool.jpg";
import studyOfficeImg from "@/assets/rooms/study-office.jpg";

type Room = {
  id: string;
  name: string;
  zone: "indoor" | "outdoor";
  experience: string;
  image?: string;
  audio: string;
  lighting: string[];
  control: string;
  modes?: string[];
  security?: string[];
};

const rooms: Room[] = [
  { id: "cinema", name: "Private Cinema", zone: "indoor", experience: "ENTERTAINMENT", image: privateTheatreImg, audio: "Dolby Atmos 9.4.6 with PMC monitors", lighting: ["Demo", "Movie", "Interval"], control: "Crestron one-touch" },
  { id: "music", name: "Listening Room", zone: "indoor", experience: "MUSIC", image: listeningRoomImg, audio: "PMC monitors + McIntosh amplification", lighting: ["Audition", "Vinyl", "Late Night"], control: "Roon + tactile remote" },
  { id: "living", name: "Living Spaces", zone: "indoor", experience: "LIFESTYLE", image: livingRoomImg, audio: "Invisible in-wall + architectural sub", lighting: ["Morning Calm", "Evening Glow", "Movie Night"], control: "Voice + touch panel" },
  { id: "outdoor", name: "Outdoor & Landscape", zone: "outdoor", experience: "LIFESTYLE", image: gardenPoolImg, audio: "Sonance landscape + buried subwoofer", lighting: ["Sunset", "Pool Party", "Stargazing"], control: "App + outdoor panel" },
  { id: "social", name: "Personal Jam Room", zone: "indoor", experience: "PERFORMANCE", image: performanceRoomImg, audio: "For families who love to jam, sing and have fun together in a dedicated space inside your home — acoustically treated, professionally calibrated. Because music brings everyone together, be it karaoke, Indian classical, percussion or a DJ set. Why not have a space that can be your personal jam room?", lighting: ["Intimate", "Party", "Stage"], control: "Crestron one-tap scenes", modes: ["Karaoke", "Indian Classical", "Percussion", "DJ Set", "Live Jam"] },
  { id: "study", name: "Study & Office", zone: "indoor", experience: "FOCUS", image: studyOfficeImg, audio: "BEC sound masking + background zones", lighting: ["Focus", "Conference", "Reading"], control: "Wall panel + voice" },
];

export default function HomeExplorer() {
  const [selectedRoom, setSelectedRoom] = useState<string>(rooms[0].id);
  const active = rooms.find((r) => r.id === selectedRoom)!;

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            Explore Every <span className="italic text-gradient-vibrant">Space</span>
          </h2>
          <p className="font-body text-base text-silver">
            Swipe through the rooms — tap any tile to reveal the technology within.
          </p>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: false }}
          className="mb-10"
        >
          <CarouselContent className="-ml-4">
            {rooms.map((room) => (
              <CarouselItem
                key={room.id}
                className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <RoomTile
                  room={room}
                  selected={selectedRoom === room.id}
                  onClick={() => setSelectedRoom(room.id)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="p-8 rounded-sm bg-carbon border border-graphite"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block px-2 py-0.5 text-xs font-body rounded bg-music/10 text-music uppercase tracking-wider">
                {active.experience}
              </span>
              <span className="font-body text-xs uppercase tracking-wider text-silver flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {active.zone}
              </span>
            </div>
            <h3 className="font-display text-3xl font-semibold mb-6 text-gradient-vibrant">
              {active.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Volume2 className="w-4 h-4 text-music" />
                  <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Audio</span>
                </div>
                <p className="font-body text-sm text-platinum/80">{active.audio}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-music" />
                  <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Lighting</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.lighting.map((s) => (
                    <span key={s} className="px-3 py-1 text-xs font-body bg-graphite rounded-full text-platinum/80">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">Control</p>
                <p className="font-body text-sm text-platinum/80">{active.control}</p>
              </div>

              {active.security && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-music" />
                    <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Security</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.security.map((s) => (
                      <span key={s} className="px-3 py-1 text-xs font-body bg-graphite rounded-full text-platinum/80">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {active.modes && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Play className="w-4 h-4 text-music" />
                    <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Modes</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.modes.map((m) => (
                      <span key={m} className="px-3 py-1 text-xs font-body bg-graphite rounded-full text-platinum/80">{m}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function RoomTile({ room, selected, onClick }: { room: Room; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full aspect-[3/4] rounded-sm overflow-hidden border transition-all duration-300 ${
        selected
          ? "border-music/60 glow-music"
          : "border-graphite hover:border-muted-foreground/40"
      }`}
    >
      {/* Background image (drop-in: assign room.image). Fallback: textured gradient. */}
      {room.image ? (
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-carbon via-graphite to-void" />
      )}

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />

      {/* Zone tag */}
      <div className="absolute top-3 left-3 z-10">
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-silver/80">
          {room.zone}
        </span>
      </div>

      {/* Title */}
      <div className="absolute inset-x-0 bottom-0 p-4 z-10 text-left">
        <p className="font-body text-[10px] tracking-[0.25em] uppercase text-music/80 mb-1">
          {room.experience}
        </p>
        <h3 className="font-display text-xl font-semibold text-platinum">
          {room.name}
        </h3>
      </div>
    </button>
  );
}
