import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Sparkles,
  Armchair,
  Projector,
  Tv,
  Volume2,
  Speaker,
  Film,
  Trophy,
  Gamepad2,
  Music,
  Mic2,
  Heart,
} from "lucide-react";
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
    title: "THX-trained team",
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

const credentials = [
  "THX Certified Professional",
  "CEDIA Certified",
  "CEDIA RP22 Designer",
  "CEDIA RP32 Designer",
  "CEDIA CPD Educator",
  "PVA Certified",
  "Meyer Sound Constellation Certified",
  "Trinnov Certified",
  "Dolby Atmos Designer",
  "Crestron",
  "Control4",
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
      "Decoupled walls, floating floor where possible, double-leaf construction for isolation, and a calibrated mix of absorption, diffusion and bass-trapping. We model RT60, modal response, and STC ratings before a single panel goes up. We model every cinema in EASE before construction begins — speaker placement, reflection paths, modal response, and RT60 are simulation-validated, not guessed.",
  },
  {
    n: "03",
    title: "Sightlines & seating geometry",
    short: "Every seat is the best seat.",
    detail:
      "Seat-to-screen ratios per THX/SMPTE, riser heights modelled in 3D, head-clearance and viewing-angle verified for every row. We design around the chair you'll buy — not a generic template. All sightlines are validated in photoreal 3D before a panel is ordered. You see your cinema before it is built.",
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
      "Trinnov room correction, Lumagen video processing, and a full measurement pass with calibrated mics and Spyder/Calman for video. You receive a signed calibration report — frequency response, decay, gamma, colour, the lot. Every Qubix cinema is delivered to CEDIA RP22 (audio) and RP32 (video) — the published industry standards. Ask your other shortlisted vendors which standards they design to.",
  },
  {
    n: "06",
    title: "Handover & care",
    short: "We don't disappear after the screen lights up.",
    detail:
      "We don't disappear after the screen lights up. Annual recalibration. Firmware and content-format management. Remote diagnostics. AV concierge for new releases and upgrades. Some Qubix cinemas have been under our care for over a decade.",
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

const team = [
  {
    name: "Rhythm Arora",
    role: "Director, Qubix HiFi",
    creds: "CEDIA CPD Educator · CEDIA RP22 & RP32 Designer · THX-trained · PVA Certified · Meyer Sound Constellation · Trinnov · Crestron · Control4 · APAC Top 40 Under 40 (2019)",
  },
  {
    name: "Ritika Arora",
    role: "Director, Experience & Operations",
    creds: "Client experience, operations and project delivery across every Qubix cinema.",
  },
  {
    name: "Philip Abraham",
    role: "Senior Sound Engineer",
    creds: "Calibration, room correction and reference-grade tuning across PMC, Meyer Sound and Trinnov systems.",
  },
  {
    name: "Diksha Sinha",
    role: "Cinema Designer",
    creds: "CEDIA RP22 Certified Designer. Acoustic modelling, sightlines and EASE simulation.",
  },
];

const stack = [
  "PMC",
  "Meyer Sound",
  "Trinnov",
  "JBL Synthesis",
  "Steinway Lyngdorf",
  "Christie",
  "Barco",
  "SIM2",
  "Stewart",
  "Lumagen",
  "Control4",
  "Powersoft",
];

const highlights = [
  {
    icon: Sparkles,
    title: "Premium interior design",
    body: "Bespoke acoustic finishes in velvet, leather, micro-perforated wood and stone — designed with your architect, not against them.",
  },
  {
    icon: Armchair,
    title: "Reference cinema seating",
    body: "Motorised recliners, tiered risers and dipped floors. Italian leather, electric headrests, integrated tray tables and side lighting.",
  },
  {
    icon: Tv,
    title: "Wall-sized projection screen",
    body: "Stewart, Screen Research and Da-Lite — anamorphic-ready, micro-perforated for behind-screen LCR, scaled to your room geometry.",
  },
  {
    icon: Projector,
    title: "4K / 8K HDR projection",
    body: "Christie, Barco and SIM2 reference projection. Dolby Vision-grade contrast, laser light engines, Lumagen video processing.",
  },
  {
    icon: Volume2,
    title: "Soundproofed acoustic shell",
    body: "A room within a room. Decoupled walls, floating floor, double-leaf isolation — your cinema doesn't leak into the bedroom above.",
  },
  {
    icon: Speaker,
    title: "Dolby Atmos immersive sound",
    body: "7.4.4 to 15.4.11 layouts with PMC, Meyer Sound, JBL Synthesis or Steinway Lyngdorf — calibrated by Trinnov to reference.",
  },
];

const useCases = [
  {
    icon: Film,
    title: "Movies",
    body: "4K HDR Dolby Vision masters with reference Atmos — watch films the way the director intended.",
  },
  {
    icon: Trophy,
    title: "Live sport",
    body: "F1, Premier League, IPL on a wall-sized screen with stadium-scale sound. Match days, redefined.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    body: "PlayStation 5, Xbox Series X, PC, VR and SimRacing rigs — low-latency 4K120, Atmos game audio.",
  },
  {
    icon: Music,
    title: "Stereo & Atmos music",
    body: "Audiophile two-channel listening sessions and Dolby Atmos music — your cinema doubles as a reference listening room.",
  },
  {
    icon: Mic2,
    title: "Karaoke nights",
    body: "Professional dual-mic karaoke layered onto the Atmos system. Saturday nights at home become an event.",
  },
  {
    icon: Heart,
    title: "Wellness & meditation",
    body: "Guided meditation, yoga, breathwork — immersive sound and ambient lighting tuned for stillness.",
  },
];

const recognition = [
  "Featured in Hidden Wires",
  "Barco Experience³ Keynote 2026",
  "Smart Home Expo Mumbai 2026",
  "NEAT APAC Channel Summit",
  "CEDIA Industry Panels",
  "APAC Top 40 Under 40 (2019)",
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
  {
    q: "Which industry standards do you design to?",
    a: "CEDIA RP22 for audio performance. CEDIA RP32 for video performance. THX and PVA for calibration verification. These are the published reference standards for our field. If you are comparing proposals, ask each shortlisted vendor which standards they design to — you will narrow your shortlist quickly.",
  },
  {
    q: "Can I audition a Qubix cinema before commissioning one?",
    a: "Yes. Our 12-zone Experience Centre on Museum Road, Bangalore, houses India's only Meyer Sound Constellation cinema. We host private auditions by appointment.",
  },
  {
    q: "Do you work with our architect and interior designer?",
    a: "Always. We share our acoustic and electrical drawings directly with your architect, civil contractor, HVAC consultant, and lighting designer. A cinema is a building project as much as a technology project — we behave accordingly.",
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
        title="Home Theatre Design in Bangalore | The Purple Room Cinema by Qubix"
        description="Private home cinemas designed, built and calibrated in Bangalore. Audition The Purple Room — India's only Meyer Sound Constellation cinema. Reference Atmos, 4K HDR projection, soundproofed acoustic shell."
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
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-silver/50 mt-4 max-w-3xl">
            CEDIA RP22 · CEDIA RP32 · PVA · Meyer Sound Constellation · Trinnov — Certified, on one team.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-5"
          >
            <Link
              to="/contact?interest=cinema"
              className="inline-flex items-center px-7 py-3.5 text-sm font-body font-medium bg-white text-[#0A0A0A] rounded-full tracking-wide hover:bg-[#F0F0F0] transition-colors"
            >
              Design your cinema
            </Link>
            <Link
              to="/experience-center"
              className="inline-flex items-center text-sm font-body text-silver hover:text-foreground transition-colors border-b border-silver/40 hover:border-foreground pb-0.5"
            >
              Audition our reference cinema →
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

      {/* Credentials wall */}
      <section className="py-24 lg:py-32 px-6 bg-card/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            On paper
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">
            Credentials, not claims.
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-14">
            Most home cinema vendors hold one or two of these. Our team holds all of them.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {credentials.map((c) => (
              <span
                key={c}
                className="font-body text-xs md:text-sm tracking-[0.15em] uppercase text-silver/70 hover:text-foreground transition-colors border border-border rounded-full px-4 py-2"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The Reference Cinema — The Purple Room */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Museum Road · Bangalore
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-6 max-w-4xl mx-auto">
            <span className="italic text-gold-gradient">The Purple Room Cinema</span> — India's only Meyer Sound Constellation room.
          </h2>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-silver/70 mb-8">
            Our reference cinema. The blueprint for yours.
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At our 12-zone Experience Centre on Museum Road, The Purple Room Cinema is the only Constellation-powered cinema in the country — built around a Meyer Sound Constellation acoustic system, immersive object playback, reference-grade projection, and a room engineered to CEDIA RP22. We invite every serious client to audition it before specifying their own. It is the most honest way to understand what your room could become.
          </p>
          <div className="mt-12 border-y border-border py-5">
            <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-silver/70 leading-loose">
              Acoustic system: Meyer Sound Constellation · Calibration: Trinnov · Acoustic design: EASE-modelled · Reference content: 4K HDR Dolby Vision + Atmos masters
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/experience-center"
              className="inline-flex items-center px-7 py-3.5 text-sm font-body font-medium bg-white text-[#0A0A0A] rounded-full tracking-wide hover:bg-[#F0F0F0] transition-colors"
            >
              Audition The Purple Room →
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights — what's in a Qubix cinema */}
      <section className="py-24 lg:py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
            What's inside
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-center mb-4">
            Six elements. <span className="italic text-gold-gradient">One room.</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Every Qubix cinema — from a media room to a flagship dedicated theatre — is built on the same six fundamentals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border rounded-sm overflow-hidden">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-background/80 p-8 lg:p-10"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-display text-xs text-primary/60 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.25} />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3">{h.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {h.body}
                  </p>
                </motion.div>
              );
            })}
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

      {/* Beyond movies — use cases */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
            Beyond movies
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-center mb-4 max-w-3xl mx-auto">
            A cinema is the <span className="italic text-gold-gradient">most used room</span> in the house.
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Films are the headline. The room itself becomes your concert hall, stadium, gaming arena and sanctuary — every evening.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border rounded-sm overflow-hidden">
            {useCases.map((u, i) => {
              const Icon = u.icon;
              return (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="bg-background/80 p-6 md:p-8"
                >
                  <Icon className="w-6 h-6 text-primary mb-5" strokeWidth={1.25} />
                  <h3 className="font-display text-lg md:text-xl font-medium mb-2">{u.title}</h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {u.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Team */}
      <section className="py-24 lg:py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
            On the floor
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-center mb-16">
            The people designing your cinema.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-border rounded-sm bg-background/40 p-6"
              >
                <div className="aspect-[4/5] bg-card/60 border border-border/50 rounded-sm mb-5" aria-hidden />
                <h3 className="font-display text-xl font-medium mb-1">{t.name}</h3>
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-primary mb-3">
                  {t.role}
                </p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {t.creds}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
              Featured case study
            </span>
            <span className="text-silver/40">·</span>
            <a
              href="https://www.hiddenwires.co.uk/case-studies/article/taking-your-work-home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-xs tracking-[0.2em] uppercase text-silver hover:text-foreground transition-colors border border-border rounded-full px-3 py-1.5"
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
            <div className="lg:col-span-7 space-y-4">
              <img
                src={caseStudyAuditorium}
                alt="Custom red velvet private cinema in a Bangalore residence — tiered seating on dipped floor, concealed LED cove lighting, calibrated Dolby Atmos installation by Qubix"
                className="w-full h-auto rounded-sm border border-border"
                loading="lazy"
              />
              <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map((i) => (
                  <img
                    key={i}
                    src={caseStudyAuditorium}
                    alt={
                      i === 0
                        ? "Wide view of the Bangalore private cinema showing the dipped floor and tiered seating geometry"
                        : i === 1
                          ? "Ceiling and acoustic panel detail — velvet absorption, concealed LED cove lighting"
                          : "Reference projection screen and front-stage acoustic treatment detail"
                    }
                    className="w-full h-full object-cover rounded-sm border border-border aspect-[4/3]"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <blockquote className="border-l-2 border-primary pl-6">
                <p className="font-display text-xl md:text-2xl italic leading-snug mb-3">
                  "The brief was simple — give a man who watches films for a living a room better than the studio he works in."
                </p>
                <footer className="font-body text-xs tracking-[0.2em] uppercase text-silver">
                  Rhythm Arora, Qubix
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

      {/* Selected cinemas */}
      <section className="py-24 lg:py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
            From the portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-center mb-16">
            Selected cinemas.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Bangalore", type: "Dedicated cinema", spec: "PMC reference · Trinnov · Christie 4K" },
              { city: "Bangalore", type: "Media room", spec: "JBL Synthesis · Lumagen · concealed Stewart screen" },
              { city: "Hyderabad", type: "Lounge cinema", spec: "Steinway Lyngdorf · Barco · Control4" },
              { city: "Mumbai", type: "Dedicated cinema", spec: "Meyer Sound · Trinnov · SIM2 projection" },
              { city: "Bangalore", type: "Dedicated cinema", spec: "PMC · Powersoft · Stewart Studiotek" },
              { city: "Goa", type: "Media room", spec: "JBL Synthesis · Trinnov · Crestron" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border border-border rounded-sm bg-background/40 overflow-hidden"
              >
                <div className="aspect-[4/3] bg-card/60" aria-hidden />
                <div className="p-5">
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-primary mb-2">
                    {p.city} · {p.type}
                  </p>
                  <p className="font-body text-sm text-silver/80 leading-relaxed">{p.spec}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-silver/50 text-center mt-12 max-w-3xl mx-auto leading-loose">
            Several Qubix cinemas — including residences of public figures — are covered under NDA. Detailed references available on request.
          </p>
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

      {/* Recognition */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-8">
            Recognised by
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {recognition.map((r) => (
              <span
                key={r}
                className="font-body text-[11px] md:text-xs tracking-[0.25em] uppercase text-silver/70"
              >
                {r}
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
          {/* SEO: ensure full Q&A is in the static DOM for crawlers, even when accordions are collapsed */}
          <div className="sr-only" aria-hidden="true">
            {faqs.map((f, i) => (
              <div key={`seo-${i}`}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
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
          <div className="mt-6">
            <Link
              to="/experience-center"
              className="font-body text-xs tracking-[0.25em] uppercase italic text-silver hover:text-foreground transition-colors"
            >
              Or audition our Bangalore reference cinema before you decide →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
