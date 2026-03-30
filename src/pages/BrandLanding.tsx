import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { brandPages } from "@/data/brandPages";
import { brandLogos } from "@/data/brandLogos";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { pushLeadToZoho } from "@/hooks/useZohoSalesIQ";
import { ExternalLink, MapPin, Calendar, Users, Globe, ArrowLeft, ChevronRight, Instagram, BookOpen, ArrowRight } from "lucide-react";

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
      <BrandTechnologies brand={brand} />
      <BrandProducts brand={brand} />
      <BrandTimeline brand={brand} />
      {brand.elfsightAppId && <BrandInstagramFeed brand={brand} />}
      {brand.sources && brand.sources.length > 0 && <BrandSources brand={brand} />}
      <BrandContactForm brand={brand} />
    </Layout>
  );
}

function BrandHero({ brand }: { brand: typeof brandPages[string] }) {
  const logo = brandLogos[brand.logoKey];

  return (
    <section className="pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-background to-background" />
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

        <div className="space-y-4">
          {brand.keyProducts.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-sm border border-border bg-card hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-lg font-medium">{product.name}</h3>
                  <span className="px-2 py-0.5 text-xs font-body tracking-wider uppercase bg-primary/10 text-primary rounded-sm">{product.category}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 hidden sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandTimeline({ brand }: { brand: typeof brandPages[string] }) {
  return (
    <section className="py-20 px-6 bg-card/30 border-t border-border">
      <div className="max-w-4xl mx-auto">
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

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {brand.timeline.map((event, i) => (
              <motion.div
                key={event.year + event.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex gap-6 items-start"
              >
                {/* Dot */}
                <div className="relative z-10 w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-body font-bold text-primary">{event.year.slice(-2)}</span>
                </div>
                <div className="pb-2">
                  <span className="font-body text-xs text-primary tracking-wider">{event.year}</span>
                  <h3 className="font-display text-base font-medium mt-0.5 mb-1">{event.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
    // Load Elfsight platform script once
    if (!document.getElementById("elfsight-platform")) {
      const script = document.createElement("script");
      script.id = "elfsight-platform";
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
          className={`elfsight-app-${brand.elfsightAppId}`}
          data-elfsight-app-lazy
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
