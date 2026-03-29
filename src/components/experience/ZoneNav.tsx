import { useEffect, useRef, useState } from "react";
import { zones } from "@/data/experienceZones";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function ZoneNav() {
  const [activeId, setActiveId] = useState(zones[0].id);
  const navRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one with highest intersection ratio
          const best = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveId(best.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    zones.forEach((z) => {
      const el = document.getElementById(z.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll the nav to keep active pill visible
  useEffect(() => {
    const btn = btnRefs.current[activeId];
    if (btn && navRef.current) {
      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeId]);

  const scrollToZone = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const residentialZones = zones.filter((z) => z.tier === "residential");
  const enterpriseZones = zones.filter((z) => z.tier === "enterprise");

  return (
    <div
      id="zone-nav"
      className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div
        ref={navRef}
        className="max-w-7xl mx-auto flex items-center gap-1 px-4 py-3 overflow-x-auto scrollbar-hide"
      >
        {residentialZones.map((z) => (
          <button
            key={z.id}
            ref={(el) => { btnRefs.current[z.id] = el; }}
            onClick={() => scrollToZone(z.id)}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-body tracking-wide transition-all duration-300",
              activeId === z.id
                ? "bg-primary/20 text-primary border border-primary/40"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            {z.number}. {z.name}
          </button>
        ))}

        <div className="shrink-0 w-px h-5 bg-border mx-2" />

        <Badge variant="outline" className="shrink-0 text-[10px] mr-1 border-muted-foreground/30 text-muted-foreground">
          Enterprise
        </Badge>

        {enterpriseZones.map((z) => (
          <button
            key={z.id}
            ref={(el) => { btnRefs.current[z.id] = el; }}
            onClick={() => scrollToZone(z.id)}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-body tracking-wide transition-all duration-300",
              activeId === z.id
                ? "bg-primary/20 text-primary border border-primary/40"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            {z.number}. {z.name}
          </button>
        ))}
      </div>
    </div>
  );
}
