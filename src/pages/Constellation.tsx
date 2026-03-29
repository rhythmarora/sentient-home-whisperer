import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Quote, MapPin, ExternalLink } from "lucide-react";
import { brandLogos } from "@/data/brandLogos";

const testimonials = [
  {
    quote: "Acoustics set the playing field for all performances. In jazz, and almost every form of music, extraordinary concerts can only happen when musicians hear each other clearly, and audiences hear and feel exactly what is happening on stage. If you have a space that is even slightly problematic, do yourself a favor and perfect the experience for both musician and listener, install the Constellation.",
    name: "Wynton Marsalis",
    title: "Managing and Artistic Director, Jazz at Lincoln Center",
  },
  {
    quote: "Part of the experience of being in this space is to hear music of many different eras — from ninth century Gregorian chant to music composed today. Constellation provides the optimal acoustics for each genre and has helped us create a space where audience and musicians can explore a new kind of musical journey together.",
    name: "Michael Tilson Thomas",
    title: "Music Director, San Francisco Symphony",
  },
  {
    quote: "Constellation is, to my ears, living proof that skilled engineering and technology can indeed improve the physical spaces where we listen to music.",
    name: "John Adams",
    title: "Pulitzer Prize–Winning Composer",
  },
  {
    quote: "With Constellation, the Meyers have had a democratizing influence, allowing ensembles to obtain pleasing results in problematic spaces. A mirage of the Musikverein can arise almost anywhere, with a few swipes on a screen.",
    name: "Alex Ross",
    title: "Music Critic, The New Yorker",
  },
];

const applications = [
  { name: "Performing Arts Centers", description: "Concert halls, opera houses, and theatres worldwide" },
  { name: "Music Venues", description: "Jazz clubs, recital halls, and live performance spaces" },
  { name: "Houses of Worship", description: "Churches, cathedrals, and multi-purpose worship spaces" },
  { name: "Education", description: "Universities, music schools, and learning environments" },
  { name: "Corporate", description: "Boardrooms, auditoriums, and presentation spaces" },
  { name: "Hospitality", description: "Hotels, restaurants, and premium entertainment venues" },
];

const notableInstallations = [
  "Jazz at Lincoln Center — New York",
  "San Francisco Symphony — SoundBox",
  "Nine Trees Shanghai Future Art Center — Shanghai",
  "Alexela Concert Hall — Tallinn",
  "National Sawdust — Brooklyn",
  "Liberty University School of Music — Virginia",
  "KÀ by Cirque du Soleil — Las Vegas",
  "House of Dancing Water — Macau",
  "ASB Theatre, Aotea Center — Auckland",
  "Barbra Streisand Scoring Stage — Sony Pictures, LA",
  "TRI Studios — San Rafael",
  "Monash University — Melbourne",
];

const whatSetsApart = [
  {
    title: "A Complete Package",
    description: "Constellation combines hardware, software, and design services in one package — digital signal processors, loudspeakers manufactured by Meyer Sound, and microphones calibrated against a reference standard. Design, technical services, and calibration are based on rigorous scientific principles.",
  },
  {
    title: "A Scientific Approach",
    description: "Unlike simple in-line reverb systems, Constellation uses multiple microphones and loudspeakers to capture and redistribute sound throughout the venue. It changes the stage and auditorium's acoustics by increasing reverberation and adding beneficial reflections — resulting in natural sound indistinguishable from the world's finest concert halls.",
  },
  {
    title: "Variable Acoustics in Real Time",
    description: "Control room acoustics with an iPad, laptop, or Crestron panel. Select presets for any performance type — from a dry recording studio to a cathedral with 4-second reverb. Transform a single space into infinite acoustic environments at the touch of a button.",
  },
  {
    title: "140+ Installations Worldwide",
    description: "From Jazz at Lincoln Center and the San Francisco Symphony to Cirque du Soleil and Sony Pictures — Constellation is trusted by the world's most discerning venues and artists across performing arts, education, corporate, hospitality, and worship.",
  },
];

export default function Constellation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-cinema/8 blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="relative text-center max-w-4xl mx-auto">
          {/* Constellation logo */}
          {brandLogos["Constellation"] && (
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={brandLogos["Constellation"]}
              alt="Constellation by Meyer Sound"
              className="h-12 md:h-16 w-auto mx-auto mb-8 brightness-0 invert opacity-80"
            />
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6"
          >
            by Meyer Sound — The World's Most Advanced Active Acoustics
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-[1.1]"
          >
            Change Room Acoustics
            <br />
            <span className="italic text-gold-gradient">with the Push of a Button</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            An electronically adjustable room acoustics system that transforms a single space 
            into a concert hall, a jazz club, a cathedral, or a recording studio — in real time. 
            140+ installations worldwide. One demo in the Indian subcontinent.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-body text-sm text-primary font-medium mb-10"
          >
            Experience it at The Constellation Room — Qubix Experience Center, Mumbai
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/experience-center"
              className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Experience Center
            </Link>
            <a
              href="https://meyersound.com/product/constellation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium text-sm tracking-wider border border-border text-foreground rounded-sm hover:border-primary/40 transition-colors"
            >
              Meyer Sound Official
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What Sets Constellation Apart */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            What Sets It Apart
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-medium mb-12"
          >
            Not a reverb effect.{" "}
            <span className="italic text-muted-foreground">A scientific instrument.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatSetsApart.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-sm border border-border bg-card"
              >
                <h3 className="font-display text-lg font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            In Their Words
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-medium mb-12"
          >
            Trusted by the world's finest artists
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-sm border border-border bg-background relative"
              >
                <Quote className="w-6 h-6 text-primary/20 absolute top-4 right-4" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <footer>
                  <p className="font-body text-sm font-medium text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.title}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            Applications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-medium mb-12"
          >
            From concert halls to{" "}
            <span className="italic text-muted-foreground">your living room</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {applications.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-sm border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <h3 className="font-display text-base font-medium text-foreground mb-1">
                  {app.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Installations */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            140+ Installations Worldwide
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-medium mb-12"
          >
            Where Constellation lives
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {notableInstallations.map((venue, i) => (
              <motion.div
                key={venue}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="font-body text-sm text-muted-foreground">{venue}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-medium mb-6"
          >
            Experience Constellation
            <br />
            <span className="italic text-gold-gradient">in person</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            The Constellation Room at the Qubix Experience Center is the only place in the 
            Indian subcontinent where you can experience this technology. Book a private session.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 font-body font-medium text-sm tracking-wider bg-gold-gradient text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              Book a Private Session
            </Link>
            <Link
              to="/experience-center"
              className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium text-sm tracking-wider border border-border text-foreground rounded-sm hover:border-primary/40 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All 12 Zones
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
