import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface Credential {
  src: string;
  title: string;
  issuer: string;
}

interface CredentialsGalleryProps {
  credentials: Credential[];
  personName: string;
  previewCount?: number;
}

export function CredentialsGallery({
  credentials,
  personName,
  previewCount = 6,
}: CredentialsGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const previews = credentials.slice(0, previewCount);
  const hasMore = credentials.length > previewCount;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % credentials.length));
  }, [credentials.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + credentials.length) % credentials.length
    );
  }, [credentials.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  if (credentials.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="flex items-baseline justify-between mb-4">
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-silver">
          Credentials
        </p>
        {hasMore && (
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="font-body text-xs text-primary hover:text-primary/80 tracking-wide transition-colors"
          >
            View all ({credentials.length}) →
          </button>
        )}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {previews.map((cred, i) => (
          <button
            key={cred.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-card hover:border-primary/60 transition-all duration-300"
            aria-label={`View ${cred.title} certificate`}
          >
            <img
              src={cred.src}
              alt={`${cred.title} — ${cred.issuer}`}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
              <span className="font-body text-[9px] text-foreground tracking-wide leading-tight line-clamp-2 text-left">
                {cred.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={close}
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 rounded-full border border-border bg-card/60 hover:bg-card text-foreground flex items-center justify-center transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 font-body text-xs tracking-[0.3em] uppercase text-silver">
              {personName} · {openIndex + 1} / {credentials.length}
            </div>

            {/* Prev */}
            {credentials.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border bg-card/60 hover:bg-card text-foreground flex items-center justify-center transition-colors z-10"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Image + caption */}
            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 w-full flex items-center justify-center min-h-0">
                <img
                  src={credentials[openIndex].src}
                  alt={`${credentials[openIndex].title} — ${credentials[openIndex].issuer}`}
                  className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
                />
              </div>
              <div className="text-center">
                <p className="font-display text-lg md:text-xl text-foreground font-medium">
                  {credentials[openIndex].title}
                </p>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-silver mt-1">
                  {credentials[openIndex].issuer}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            {credentials.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border bg-card/60 hover:bg-card text-foreground flex items-center justify-center transition-colors z-10"
                aria-label="Next certificate"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
