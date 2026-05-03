import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { brandPages } from "@/data/brandPages";
import { brandLogos } from "@/data/brandLogos";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";
import { ExternalLink, MapPin, Calendar, Users, Globe, ArrowLeft, ChevronRight, Instagram, BookOpen, ArrowRight } from "lucide-react";
import meyerSoundHero from "@/assets/brands/meyer-sound-hero.jpg";
import meyerPearson1 from "@/assets/brands/meyer-pearson-1.jpg";
import meyerPearson2 from "@/assets/brands/meyer-pearson-2.webp";
import meyerPearson3 from "@/assets/brands/meyer-pearson-3.webp";
import meyerPearson4 from "@/assets/brands/meyer-pearson-4.jpg";
import meyerPearson8 from "@/assets/brands/meyer-pearson-8.webp";
import meyerPearson10 from "@/assets/brands/meyer-pearson-10.webp";
import meyerUltraX40 from "@/assets/meyer-ultra-x40.webp";
import meyerAmie from "@/assets/meyer-amie.webp";
import meyerBluehorn from "@/assets/meyer-bluehorn.webp";
import meyerAcheron from "@/assets/meyer-acheron.jpg";
import meyerConstellation from "@/assets/meyer-constellation.jpg";
import meyerArchitectural from "@/assets/meyer-architectural.jpg";
import pmcHero1 from "@/assets/brands/pmc-hero-1.jpg";
import pmcHero2 from "@/assets/brands/pmc-hero-2.jpg";
import pmcHero3 from "@/assets/brands/pmc-hero-3.jpg";
import pmcHero4 from "@/assets/brands/pmc-hero-4.jpg";
import sonosHero1 from "@/assets/brands/sonos-hero-1.jpg";
import sonosHero2 from "@/assets/brands/sonos-hero-2.jpg";
import sonosHero3 from "@/assets/brands/sonos-hero-3.jpg";
import sonosSonance from "@/assets/brands/sonos-sonance-by-sonos.jpg";
import sonosAmpMulti from "@/assets/brands/sonos-amp-multi.gif";
import sonosArcSeries from "@/assets/brands/sonos-arc-series.jpg";
import sonosEraSeries from "@/assets/brands/sonos-era-series.jpg";

const brandHeroImages: Record<string, string> = {
  "meyer-sound": meyerSoundHero,
  "pmc": pmcHero1,
  "sonos": sonosHero1,
};

const brandHeroSlideshows: Record<string, string[]> = {
  "meyer-sound": [
    meyerSoundHero,
    meyerPearson4,
    meyerPearson2,
    meyerPearson1,
    meyerPearson3,
    meyerPearson10,
    meyerPearson8,
  ],
  "pmc": [pmcHero1, pmcHero2, pmcHero3, pmcHero4],
  "sonos": [sonosHero1, sonosHero2, sonosHero3],
};

const brandProductImages: Record<string, Record<string, string>> = {
  "meyer-sound": {
    "Constellation System": meyerConstellation,
    "Bluehorn System": meyerBluehorn,
    "Acheron Series": meyerAcheron,
    "ULTRA Series": meyerUltraX40,
    "Amie Systems": meyerAmie,
    "Architectural Loudspeakers": meyerArchitectural,
  },
  "pmc": {},
  "sonos": {
    "Arc Series": sonosArcSeries,
    "Era Series": sonosEraSeries,
    "Sonance by Sonos": sonosSonance,
    "Sonos Amp Multi": sonosAmpMulti,
  },
};

export default function BrandLanding() {
  const { slug } = useParams<{ slug: string }>();
  const brand = slug ? brandPages[slug] : null;

  if (!brand) {
    return (
      <Layout>
        <section className="pt-32 pb-24 px-6 text-center">
          <h1 className="font-display text-3xl mb-4">Brand not found</h1>
          <Link to="/brands" className="text-primary underline font-body">← Back to all brands</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* SEO meta handled via document head */}
      <BrandHero brand={brand} />
      <BrandAbout brand={brand} />
      {brand.technologies.length > 0 && <BrandTechnologies brand={brand} />}
      {brand.keyProducts.length > 0 && <BrandProducts brand={brand} />}
      {brand.timeline.length > 0 && <BrandTimeline brand={brand} />}
      {brand.elfsightAppId && <BrandInstagramFeed brand={brand} />}
      {brand.sources && brand.sources.length > 0 && <BrandSources brand={brand} />}
      <BrandContactForm brand={brand} />
    </Layout>
  );
}

function BrandHero({ brand }: { brand: typeof brandPages[string] }) {
  const logo = brandLogos[brand.logoKey];
  const heroImg = brandHeroImages[brand.slug];
  const slideshow = brandHeroSlideshows[brand.slug];
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    if (!slideshow || slideshow.length < 2) return;
    const id = setInterval(() => {
      setSlideIdx((i) => (i + 1) % slideshow.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slideshow]);

  return (
    <section className="pt-28 pb-20 px-6 relative overflow-hidden min-h-[80vh] flex items-center">
      {slideshow && slideshow.length > 0 ? (
        <div className="absolute inset-0">
          {slideshow.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${brand.name} listening environment`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
                i === slideIdx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
        </div>
      ) : heroImg ? (
        <div className="absolute inset-0">
          <img src={heroImg} alt={`${brand.name} listening environment`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-background to-background" />
      )}
      <div className="max-w-6xl mx-auto relative z-10">
        <Link to="/brands" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> All Brands
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-body tracking-widest uppercase bg-primary/10 text-primary rounded-sm mb-6">
              {brand.partnerBadge}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6">
              {brand.seo.h1}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {brand.heroSubtitle}
            </p>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-6 font-body text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Est. {brand.founded}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {brand.headquarters}</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> {brand.founders}</span>
              <a href={brand.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Globe className="w-4 h-4 text-primary" /> Official Site <ExternalLink className="w-3 h-3" />
              </a>
              {brand.instagramUrl && (
                <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4 text-primary" /> Instagram <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.div>

          {logo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="w-48 h-48 rounded-sm border border-border bg-card/60 flex items-center justify-center p-8">
                <img src={logo} alt={`${brand.name} logo`} className="max-w-full max-h-full object-contain" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function BrandAbout({ brand }: { brand: typeof brandPages[string] }) {
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-8">
            The <span className="italic text-gold-gradient">{brand.name}</span> story
          </h2>
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-base">
            {brand.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-sm border border-primary/20 bg-primary/5">
            <h3 className="font-display text-lg font-medium text-primary mb-2">Qubix × {brand.name}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{brand.qubixRelationship}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandTechnologies({ brand }: { brand: typeof brandPages[string] }) {
  return (
    <section className="py-20 px-6 bg-card/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Proprietary Technologies</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-12">
            Engineering that defines the <span className="italic text-gold-gradient">standard</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-sm border border-border bg-card hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="font-display text-lg font-medium mb-3">{tech.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandProducts({ brand }: { brand: typeof brandPages[string] }) {
  const productImages = brandProductImages[brand.slug] || {};
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Key Products</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-12">
            Reference-grade systems for <span className="italic text-gold-gradient">your home</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brand.keyProducts.map((product, i) => {
            const Wrapper = product.slug ? Link : "div";
            const wrapperProps = product.slug ? { to: `/product/${product.slug}` } : {};
            const img = productImages[product.name];
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Wrapper
                  {...(wrapperProps as any)}
                  className={`group relative block aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card ${product.slug ? "cursor-pointer" : ""}`}
                >
                  {img ? (
                    <img
                      src={img}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-card to-background" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="self-start px-2 py-0.5 text-[10px] font-body tracking-wider uppercase bg-primary/15 text-primary rounded-sm mb-2 backdrop-blur-sm">
                      {product.category}
                    </span>
                    <h3 className="font-display text-xl font-medium mb-2 text-foreground">{product.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">{product.description}</p>
                    {product.slug && (
                      <span className="mt-3 inline-flex items-center gap-1 font-body text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {brand.slug === "meyer-sound" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-10 border-t border-border/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <p className="font-body text-sm text-muted-foreground max-w-xl leading-relaxed">
              The full Meyer Sound residential cinema lineup spans screen channels, surrounds, subwoofers and bass management — engineered to work as one system.
            </p>
            <a
              href="/meyer-sound-residential-cinema-products.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              Product Map
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}


function BrandTimeline({ brand }: { brand: typeof brandPages[string] }) {
  return (
    <section className="py-20 px-6 bg-card/30 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Heritage & Milestones</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-12">
            A legacy of <span className="italic text-gold-gradient">innovation</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 pb-6">
          <div className="relative inline-flex gap-6 min-w-full">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-5 h-px bg-border" />
            {brand.timeline.map((event, i) => (
              <motion.div
                key={event.year + event.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative w-[280px] shrink-0"
              >
                {/* Dot */}
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center mb-4">
                  <span className="text-[10px] font-body font-bold text-primary">{event.year.slice(-2)}</span>
                </div>
                <span className="font-body text-xs text-primary tracking-wider">{event.year}</span>
                <h3 className="font-display text-base font-medium mt-0.5 mb-1">{event.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-center font-body text-xs text-muted-foreground/60 mt-2">← scroll →</p>
      </div>
    </section>
  );
}

function BrandSources({ brand }: { brand: typeof brandPages[string] }) {
  if (!brand.sources || brand.sources.length === 0) return null;

  return (
    <section className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-4 h-4 text-muted-foreground" />
          <h3 className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground">Sources & References</h3>
        </div>
        <div className="space-y-2">
          {brand.sources.map((source, i) => (
            <a
              key={i}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-xs text-primary/50">[{i + 1}]</span>
              <span className="group-hover:underline">{source.label}</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandInstagramFeed({ brand }: { brand: typeof brandPages[string] }) {
  useEffect(() => {
    if (!brand.elfsightAppId) return;

    const frame = requestAnimationFrame(() => {
      const widget = document.querySelector<HTMLDivElement>(`.elfsight-app-${brand.elfsightAppId}`);
      widget?.replaceChildren();

      document
        .querySelectorAll<HTMLScriptElement>('script[src^="https://elfsightcdn.com/platform.js"]')
        .forEach((existingScript) => existingScript.remove());

      const script = document.createElement("script");
      script.id = "elfsight-platform";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    });

    return () => cancelAnimationFrame(frame);
  }, [brand.elfsightAppId]);

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Latest from {brand.name}</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Follow <span className="italic text-gold-gradient">@{brand.instagramUrl?.split("/").filter(Boolean).pop()}</span>
            </h2>
          </div>
          {brand.instagramUrl && (
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-border rounded-sm font-body text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              <Instagram className="w-4 h-4" /> Follow on Instagram
            </a>
          )}
        </motion.div>

        <div
          key={`${brand.slug}-${brand.elfsightAppId}`}
          className={`elfsight-app-${brand.elfsightAppId}`}
          data-elfsight-app-lazy=""
        />
      </div>
    </section>
  );
}

function BrandContactForm({ brand }: { brand: typeof brandPages[string] }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushLeadToZoho({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.propertyType,
      source: `Brand Page — ${brand.name}`,
      aiJourneyData: {
        "Brand Interest": brand.name,
        "Product Interest": formData.interest || "",
      },
    });
    toast({
      title: "Thank you for your interest",
      description: `A Qubix ${brand.name} specialist will reach out within 24 hours.`,
    });
    setFormData({});
  };

  return (
    <section className="py-20 px-6 border-t border-border" id="enquire">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Experience {brand.name}</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
              Ready to hear the <span className="italic text-gold-gradient">difference</span>?
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Visit India's only {brand.name} demonstration space at the Qubix Experience Center. 
              Hear {brand.name} systems in purpose-built rooms, experience Constellation active acoustics, 
              and speak with a specialist who understands every product in the range.
            </p>
            <div className="space-y-3 text-sm font-body text-muted-foreground">
              <p>✦ Personal demo at our 12-zone Experience Center</p>
              <p>✦ Response within 24 hours from a {brand.name} specialist</p>
              <p>✦ No obligation — we connect over WhatsApp first</p>
              <p>✦ Authorised partner with full warranty support</p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {brand.contactFormFields.map((field) => (
                <div key={field.name}>
                  <label className="block font-body text-sm text-foreground mb-2">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      rows={4}
                      maxLength={1000}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors resize-none"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  ) : field.type === "select" ? (
                    <select
                      value={formData[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground focus:border-primary/50 focus:outline-none transition-colors"
                      required={field.required}
                    >
                      <option value="">Select</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      maxLength={field.type === "email" ? 255 : 100}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
              >
                Enquire About {brand.name}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
