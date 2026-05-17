import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import caseStudyAuditorium from "@/assets/cinema/case-study-auditorium.jpg";

const pillars = [
  {
    title: "THX-certified team",
    body: "Our cinema designers are THX-trained — sightlines, acoustics and calibration are engineered, not estimated.",
  },
  {
    title: "Reference brands only",
    body: "PMC, Meyer Sound, Trinnov, JBL Synthesis, Christie, Lumagen, Control4 — the same tools used in mastering studios and commercial cinemas.",
  },
  {
    title: "Built and calibrated in-house",
    body: "From acoustic shell to first frame, every cinema is delivered and measured by the Qubix team. No outsourcing.",
  },
];

const stages = [
  {
    n: "01",
    title: "Brief & feasibility",
    short: "We start with how you watch — not what you want to buy.",
    detail:
      "A 90-minute consultation covers content type (movies, sport, gaming, concerts), seating count, day/night use, family vs. enthusiast preference, and architectural constraints. We return a feasibility note with room shape, seat count, screen size, and indicative investment band — before any design fee.",
  },
  {
    n: "02",
    title: "Acoustic shell",
    short: "The room is the most important speaker.",
    detail:
      "Decoupled walls, floating floor where possible, double-leaf construction for isolation, and a calibrated mix of absorption, diffusion and bass-trapping. We model RT60, modal response, and STC ratings before a single panel goes up.",
  },
  {
    n: "03",
    title: "Sightlines & seating geometry",
    short: "Every seat is the best seat.",
    detail:
      "Seat-to-screen ratios per THX/SMPTE, riser heights modelled in 3D, head-clearance and viewing-angle verified for every row. We design around the chair you'll buy — not a generic template.",
  },
  {
    n: "04",
    title: "Speaker & screen layout",
    short: "Reference-grade hardware, placed by the millimetre.",
    detail:
      "Speaker positions are derived from the room model, not the wall. Dolby Atmos 7.4.4 and beyond, with PMC, Meyer, JBL Synthesis or Steinway Lyngdorf. Screens from Stewart, Screen Research or Da-Lite; projection from Christie, Barco or SIM2.",
  },
  {
    n: "05",
    title: "Calibration & certification",
    short: "Measured. Tuned. Documented.",
    detail:
      "Trinnov room correction, Lumagen video processing, and a full measurement pass with calibrated mics and Spyder/Calman for video. You receive a signed calibration report — frequency response, decay, gamma, colour, the lot.",
  },
  {
    n: "06",
    title: "Handover & care",
    short: "We don't disappear after the screen lights up.",
    detail:
      "Remote programming, family training, and an annual re-calibration visit. Most of our cinemas are still on their original Qubix service plan five years on.",
  },
];

const roomTypes = [
  {
    label: "Dedicated cinema",
    body: "A fully isolated, acoustically engineered room. Reference projection, tiered seating, Atmos immersion.",
  },
  {
    label: "Media room",
    body: "A multipurpose space — large screen by night, family room by day. Concealed speakers, motorised screen.",
  },
  {
    label: "Lounge cinema",
    body: "A relaxed entertainment lounge — bar, gaming, casual film nights. Optimised for ambience over absolute reference.",
  },
];

const stack = [
  "PMC",
  "Meyer Sound",
  "Trinnov",
  "JBL Synthesis",
  "Christie",
  "Lumagen",
  "Control4",
  "Powersoft",
];

const techSpec = [
  "Custom-built dedicated cinema room — second residence",
  "Tiered seating: 6 motorised recliners on a dipped floor",
  "Velvet acoustic panels with concealed LED cove lighting",
  "Reference projection with anamorphic-ready geometry",
  "Dolby Atmos immersive speaker layout",
  "Trinnov room correction with full calibration report",
  "Control4 single-button orchestration (lights, screen, sound, projector)",
];

const faqs = [
  {
    q: "How much does a private home cinema cost in Bangalore?",
    a: "A dedicated, acoustically treated cinema with reference speakers, projection and calibration typically starts around ₹35–50 lakh and scales up based on room size, brand selection and finishes. We share an indicative band during the feasibility note — before any design fee.",
  },
  {
    q: "How long does it take to design and build?",
    a: "From brief to handover, a dedicated cinema typically takes 14–20 weeks — 3–4 weeks for design and feasibility, 8–10 weeks for civil and acoustic build, and 2–3 weeks for installation, calibration and handover.",
  },
  {
    q: "Do I need a dedicated room, or can it be a media room?",
    a: "Both work — they're different briefs. A dedicated cinema is fully isolated and tuned for reference performance. A media room is multipurpose, with concealed hardware and motorised screen. We help you pick during the brief stage.",
  },
  {
    q: "Which brands do you work with?",
    a: "Reference only — PMC, Meyer Sound, Trinnov, JBL Synthesis, Steinway Lyngdorf, Christie, Barco, SIM2, Stewart, Lumagen, Control4 and Powersoft. We don't sell what we wouldn't put in our own rooms.",
  },
  {
    q: "Do you handle the civil and interior work?",
    a: "Yes. We deliver the acoustic shell, speaker integration, projection, control and calibration end-to-end. We coordinate with your architect or interior designer — or work standalone if you don't have one.",
  },
  {
    q: "Are your cinemas THX-certified?",
    a: "Our designers are THX-trained, and our rooms are designed and calibrated to THX/SMPTE reference standards. Formal THX room certification is available on request for qualifying projects.",
  },
];

export default function HomeTheatre() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "Article",
        headline: "Private cinema for a film industry professional",
        about: "Home theatre design and installation in Bangalore",
        isBasedOn:
          "https://www.hiddenwires.co.uk/case-studies/article/taking-your-work-home",
        publisher: { "@type": "Organization", name: "Qubix" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://qubixhifi.com/" },
          { "@type": "ListItem", position: 2, name: "Home Theatre", item: "https://qubixhifi.com/home-theatre" },
        ],
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="Home Theatre Design in Bangalore | Private Cinema by Qubix"
        description="THX-trained private cinema designers in Bangalore. Reference acoustics, Dolby Atmos, calibrated projection. See our Hidden Wires-featured case study."
        path="/home-theatre"
        image={caseStudyAuditorium}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={caseStudyAuditorium}
          alt="Private home cinema in Bangalore designed and built by Qubix — red velvet acoustic panels, tiered red leather recliners, dipped-floor geometry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6"
          >
            Private Cinema · Bangalore
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] max-w-5xl"
          >
            Every seat is the <span className="italic text-gold-gradient">best seat.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-base md:text-lg text-silver/80 mt-6 max-w-2xl"
          >
            THX-trained private cinemas — designed, built and calibrated in Bangalore.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10"
          >
            <Link
              to="/contact?interest=cinema"
              className="inline-flex items-center px-7 py-3.5 text-sm font-body font-medium bg-white text-[#0A0A0A] rounded-full tracking-wide hover:bg-[#F0F0F0] transition-colors"
            >
              Design your cinema
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
            The Qubix difference
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-center max-w-3xl mx-auto mb-16">
            Reference cinema, engineered — not assembled.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-border pt-6"
              >
                <h3 className="font-display text-xl font-medium mb-3">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — overview + expand */}
      <section className="py-24 lg:py-32 px-6 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
            How we design
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-center mb-16">
            Six stages, one obsession.
          </h2>
          <div className="space-y-4">
            {stages.map((s) => {
              const open = expanded === s.n;
              return (
                <div
                  key={s.n}
                  className="border border-border rounded-sm overflow-hidden bg-background/40"
                >
                  <button
                    onClick={() => setExpanded(open ? null : s.n)}
                    className="w-full px-6 py-5 flex items-start gap-6 text-left hover:bg-card/40 transition-colors"
                  >
                    <span className="font-display text-2xl text-primary/70 shrink-0 w-12">
                      {s.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-medium mb-1">{s.title}</h3>
                      <p className="font-body text-sm text-muted-foreground">{s.short}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-silver shrink-0 mt-1.5 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pl-[88px]"
                    >
                      <p className="font-body text-sm text-silver/80 leading-relaxed border-l border-primary/30 pl-5">
                        {s.detail}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room types */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
            Three rooms we design
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-center mb-16">
            One discipline, three briefs.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-border rounded-sm bg-card/40"
              >
                <h3 className="font-display text-2xl font-medium mb-3">{r.label}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {r.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="py-24 lg:py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
              Featured case study
            </span>
            <span className="text-silver/40">·</span>
            <a
              href="https://www.hiddenwires.co.uk/case-studies/article/taking-your-work-home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-xs tracking-[0.2em] uppercase text-silver hover:text-foreground transition-colors"
            >
              As featured in Hidden Wires <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-medium mb-4 max-w-4xl">
            Taking your work home — a <span className="italic text-gold-gradient">private cinema</span> for a film industry professional.
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-12 max-w-3xl">
            Bangalore residence · Custom-built dedicated cinema room
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <img
                src={caseStudyAuditorium}
                alt="Custom red velvet private cinema in a Bangalore residence — tiered seating on dipped floor, concealed LED cove lighting, calibrated Dolby Atmos installation by Qubix"
                className="w-full h-auto rounded-sm border border-border"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-5 space-y-8">
              <blockquote className="border-l-2 border-primary pl-6">
                <p className="font-display text-xl md:text-2xl italic leading-snug mb-3">
                  "The brief was simple — give a man who watches films for a living a room better than the studio he works in."
                </p>
                <footer className="font-body text-xs tracking-[0.2em] uppercase text-silver">
                  Rhythm Kapur, Qubix
                </footer>
              </blockquote>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                A second residence, a movie professional, and a single non-negotiable: every seat had to be the best seat. We built the room around the chair, the chair around the screen, and the screen around the geometry of how cinema is meant to be watched — dipped floor, tiered seating, fully acoustically isolated shell, calibrated end-to-end.
              </p>
              <div className="border border-border rounded-sm bg-background/40 p-6">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                  Tech spec
                </p>
                <ul className="space-y-2.5">
                  {techSpec.map((t) => (
                    <li
                      key={t}
                      className="font-body text-sm text-silver/90 flex items-start gap-3 leading-relaxed"
                    >
                      <span className="text-primary mt-1.5 shrink-0">—</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
            The stack we trust
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {stack.map((s) => (
              <span
                key={s}
                className="font-display text-lg md:text-xl text-silver/70 hover:text-foreground transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-32 px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
            Frequently asked
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-center mb-12">
            Questions, answered.
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-sm px-5 bg-background/40"
              >
                <AccordionTrigger className="font-display text-base md:text-lg text-left hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-6">
            Design your <span className="italic text-gold-gradient">cinema.</span>
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-xl mx-auto">
            A 90-minute brief with a Qubix cinema designer. No fee, no obligation — feasibility note in your inbox within a week.
          </p>
          <Link
            to="/contact?interest=cinema"
            className="inline-flex items-center px-8 py-4 text-sm font-body font-medium bg-white text-[#0A0A0A] rounded-full tracking-wide hover:bg-[#F0F0F0] transition-colors"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
