import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = () => { isDragging.current = true; };
  const handlePointerUp = () => { isDragging.current = false; };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            The <span className="italic text-gradient-vibrant">Transformation</span>
          </h2>
        </motion.div>

        <div
          ref={containerRef}
          className="relative aspect-video rounded-sm overflow-hidden cursor-col-resize select-none touch-none border border-graphite"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerMove={handlePointerMove}
        >
          {/* Before */}
          <div className="absolute inset-0 bg-gradient-to-br from-steel to-graphite flex items-center justify-center">
            <div className="text-center">
              <p className="font-body text-xs uppercase tracking-widest text-ash mb-2">Before</p>
              <p className="font-display text-2xl text-silver">A standard room</p>
              <p className="font-body text-sm text-ash mt-2">Cables. Visible speakers. No atmosphere.</p>
            </div>
          </div>

          {/* After */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-carbon via-void to-carbon flex items-center justify-center"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="text-center">
              <p className="font-body text-xs uppercase tracking-widest text-cinema mb-2">After</p>
              <p className="font-display text-2xl text-gradient-vibrant">A QUBIX Experience</p>
              <p className="font-body text-sm text-platinum/70 mt-2">Invisible. Immersive. Intelligent.</p>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/40 flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-4 bg-white/80 rounded-full" />
                <div className="w-0.5 h-4 bg-white/80 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
