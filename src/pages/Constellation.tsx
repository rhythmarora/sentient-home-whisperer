import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Quote, MapPin, ExternalLink, Globe, Music, GraduationCap, Building2, Church, Theater, Clapperboard, UtensilsCrossed } from "lucide-react";
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
  { name: "Performing Arts Centers", description: "Concert halls, opera houses, and theatres across six continents", icon: Theater },
  { name: "Spectacle Shows", description: "Cirque du Soleil (KÀ, O, LOVE, Michael Jackson ONE, Zumanity), Le Rêve, House of Dancing Water", icon: Clapperboard },
  { name: "Music Venues & Studios", description: "Jazz clubs, recording stages, and live performance spaces like National Sawdust and TRI Studios", icon: Music },
  { name: "Education", description: "Universities and music schools — McMaster, McGill, Monash, King Abdullah, Colorado College, and more", icon: GraduationCap },
  { name: "Houses of Worship", description: "Churches and multi-purpose worship spaces with transformable acoustics", icon: Church },
  { name: "Corporate & Government", description: "Boardrooms, auditoriums — Audi HQ, NetApp, PIF Tower Riyadh, Moscow City Hall", icon: Building2 },
  { name: "Hospitality & Restaurants", description: "AMAN New York, Bellota, Kiln, Comal, ACRE Kitchen & Bar", icon: UtensilsCrossed },
  { name: "Museums & Cultural Centers", description: "Museum of the Bible, Exploratorium, Singapore Art House, Parque Cultural Valparaiso", icon: Globe },
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
    title: "Trusted by the World's Best",
    description: "From Jazz at Lincoln Center and the San Francisco Symphony to five Cirque du Soleil productions, Sony Pictures, and AMAN New York — Constellation is the standard for the world's most discerning venues, artists, and architects.",
  },
];

interface InstallationGroup {
  region: string;
  venues: { name: string; location: string }[];
}

const installationsByRegion: InstallationGroup[] = [
  {
    region: "North America",
    venues: [
      { name: "Appel Room, Jazz at Lincoln Center", location: "New York, USA" },
      { name: "SoundBox, San Francisco Symphony", location: "San Francisco, USA" },
      { name: "National Sawdust", location: "Brooklyn, USA" },
      { name: "The Jazz Club NYC / AMAN New York", location: "New York, USA" },
      { name: "KÀ by Cirque du Soleil", location: "Las Vegas, USA" },
      { name: "O by Cirque du Soleil", location: "Las Vegas, USA" },
      { name: "LOVE by Cirque du Soleil", location: "Las Vegas, USA" },
      { name: "Michael Jackson ONE by Cirque du Soleil", location: "Las Vegas, USA" },
      { name: "Le Rêve by Dragone", location: "Las Vegas, USA" },
      { name: "The Beverly Theater", location: "Las Vegas, USA" },
      { name: "Barbra Streisand Scoring Stage, Sony Pictures", location: "Los Angeles, USA" },
      { name: "Tamalpais Research Institute (TRI Studios)", location: "San Rafael, USA" },
      { name: "Octave 9, Seattle Symphony", location: "Seattle, USA" },
      { name: "The Rady Shell at Jacobs Park", location: "San Diego, USA" },
      { name: "Hammer Theater, San Jose State University", location: "San Jose, USA" },
      { name: "Zellerbach Hall, UC Berkeley", location: "Berkeley, USA" },
      { name: "SAFE Credit Union Performing Arts Center", location: "Sacramento, USA" },
      { name: "Soundscape Park WALLCAST®", location: "Miami, USA" },
      { name: "Liberty University Concert Hall", location: "Lynchburg, USA" },
      { name: "Johns Hopkins Bloomberg Center Theater", location: "Washington D.C., USA" },
      { name: "Duke Ellington School of the Arts", location: "Washington D.C., USA" },
      { name: "Museum of the Bible Theatre", location: "Washington D.C., USA" },
      { name: "Steven Tanger Performing Arts Center", location: "Greensboro, USA" },
      { name: "Halloran Center for Performing Arts", location: "Memphis, USA" },
      { name: "LIVELab, McMaster University", location: "Hamilton, Canada" },
      { name: "McGill University", location: "Montreal, Canada" },
      { name: "Cabaret du Casino", location: "Montréal, Canada" },
      { name: "Enbridge Learning Center", location: "Calgary, Canada" },
    ],
  },
  {
    region: "Europe",
    venues: [
      { name: "Alexela Concert Hall", location: "Tallinn, Estonia" },
      { name: "Royal College of Music", location: "London, UK" },
      { name: "Royal Northern College of Music", location: "Manchester, UK" },
      { name: "kING", location: "Ingelheim, Germany" },
      { name: "Audi Global Headquarters", location: "Ingolstadt, Germany" },
      { name: "Stage Operettenhaus", location: "Hamburg, Germany" },
      { name: "MUMUTH", location: "Graz, Austria" },
      { name: "Maersk Tower Auditoriums", location: "Copenhagen, Denmark" },
      { name: "Aarhus Royal Architecture School", location: "Aarhus, Denmark" },
      { name: "Fosnavåg Konserthus", location: "Fosnavåg, Norway" },
      { name: "Kongsberg Musikkteater", location: "Kongsberg, Norway" },
      { name: "Olavshallen Concert Hall", location: "Trondheim, Norway" },
      { name: "Moss Kulturhus", location: "Moss, Norway" },
      { name: "Steinkjer Kulturhus", location: "Steinkjer, Norway" },
      { name: "Logomo", location: "Turku, Finland" },
      { name: "Karolinska Institute", location: "Solna, Sweden" },
      { name: "Örebro University", location: "Örebro, Sweden" },
      { name: "Riddersalen", location: "Copenhagen, Denmark" },
      { name: "Klaipeda Drama Theater", location: "Klaipeda, Lithuania" },
      { name: "Théâtre de la Cité Bleue", location: "Geneva, Switzerland" },
      { name: "Claude Nobs Chalet", location: "Montreux, Switzerland" },
      { name: "Cartuja Center CITE", location: "Seville, Spain" },
      { name: "Laboral De Gijon University", location: "Gijon, Spain" },
      { name: "Central House of Entrepreneurs", location: "Moscow, Russia" },
      { name: "Moscow City Hall", location: "Moscow, Russia" },
    ],
  },
  {
    region: "Asia & Middle East",
    venues: [
      { name: "Nine Trees Shanghai Future Art Centre", location: "Shanghai, China" },
      { name: "NEW BUND 31 Performing Arts Center", location: "Shanghai, China" },
      { name: "Main Theatre, Taiwan Traditional Theatre Center", location: "Taipei, Taiwan" },
      { name: "Huo Guom Opera", location: "Hanoi, Vietnam" },
      { name: "Jakarta International Expo", location: "Jakarta, Indonesia" },
      { name: "Singapore Conference Hall", location: "Singapore" },
      { name: "Singapore Art House", location: "Singapore" },
      { name: "Singapore American School Auditorium", location: "Singapore" },
      { name: "Sohyang Arts Center, Dongseo University", location: "Busan, South Korea" },
      { name: "King Abdullah University (Multipurpose Room & CAVE)", location: "Jeddah, Saudi Arabia" },
      { name: "PIF Tower Auditorium", location: "Riyadh, Saudi Arabia" },
      { name: "Royal Guard of Oman Auditorium", location: "Muscat, Oman" },
      { name: "Solaire Resorts and Casino", location: "Manila, Philippines" },
    ],
  },
  {
    region: "Oceania, South America & Africa",
    venues: [
      { name: "Alexander Theatre, Monash University", location: "Melbourne, Australia" },
      { name: "Sound Gallery, Monash University", location: "Melbourne, Australia" },
      { name: "ASB Theatre, Aotea Center", location: "Auckland, New Zealand" },
      { name: "James Hay Theatre", location: "Christchurch, New Zealand" },
      { name: "Centro Cultural Atacama", location: "Copiapo, Chile" },
      { name: "Parque Cultural Valparaiso", location: "Valparaiso, Chile" },
      { name: "Ashdod Performing Arts Center", location: "Ashdod, Israel" },
      { name: "Be'er Sheva Performing Arts Center", location: "Be'er Sheva, Israel" },
      { name: "Kfar-Saba Hall", location: "Kfar Saba, Israel" },
    ],
  },
];

const cirqueShows = [
  { name: "KÀ", status: "active" },
  { name: "O", status: "active" },
  { name: "LOVE", status: "active" },
  { name: "Michael Jackson ONE", status: "active" },
  { name: "Zumanity", status: "closed" },
];

const totalInstallations = installationsByRegion.reduce((sum, g) => sum + g.venues.length, 0);

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
            {totalInstallations}+ installations across 25+ countries. One demo in the Indian subcontinent.
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

      {/* Cirque du Soleil Spotlight */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            Spectacle & Entertainment
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-medium mb-4"
          >
            5 Cirque du Soleil productions.{" "}
            <span className="italic text-muted-foreground">And counting.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm text-muted-foreground max-w-2xl mb-10"
          >
            Constellation powers some of the most iconic live spectacles in the world — from water shows to aerial acrobatics. 
            It also drives Le Rêve by Dragone and House of Dancing Water in Macau.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            {cirqueShows.map((show, i) => (
              <motion.div
                key={show.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-6 py-4 rounded-sm border border-border bg-background"
              >
                <p className="font-display text-lg font-medium text-foreground">{show.name}</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                  Cirque du Soleil • Las Vegas
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
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
                className="p-6 rounded-sm border border-border bg-card relative"
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
      <section className="py-24 px-6 bg-card/50">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((app, i) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-5 rounded-sm border border-border bg-background hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-display text-sm font-medium text-foreground mb-1">
                    {app.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{app.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installations by Region */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            {totalInstallations}+ Installations Worldwide
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-medium mb-4"
          >
            Where Constellation lives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm text-muted-foreground mb-12 max-w-2xl"
          >
            From performing arts centres and concert halls to Cirque du Soleil spectacles, 
            university auditoriums, and restaurants — a selection of venues worldwide.
          </motion.p>

          <div className="space-y-12">
            {installationsByRegion.map((group, gi) => (
              <motion.div
                key={group.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Globe className="w-4 h-4 text-primary" />
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {group.region}
                  </h3>
                  <span className="font-body text-xs text-muted-foreground">
                    ({group.venues.length} venues)
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
                  {group.venues.map((venue) => (
                    <div key={venue.name} className="flex items-start gap-2.5">
                      <MapPin className="w-3 h-3 text-primary/60 shrink-0 mt-1" />
                      <div>
                        <p className="font-body text-sm text-foreground/90 leading-snug">{venue.name}</p>
                        <p className="font-body text-xs text-muted-foreground">{venue.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card/50">
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
