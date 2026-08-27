export interface ExperienceBrand {
  name: string;
  logoKey: string; // key in brandLogos
  usp: string;
  url: string;
  internalRoute?: string;
  onDemo?: boolean;
}

export const experienceBrands: ExperienceBrand[] = [
  // Flagship / Core
  { name: "Meyer Sound", logoKey: "Meyer Sound", usp: "Concert-hall precision engineered for private spaces.", url: "https://meyersound.com", onDemo: true },
  { name: "Constellation", logoKey: "Constellation", usp: "The world's most advanced active acoustics — only demo in the subcontinent.", url: "https://meyersound.com/product/constellation/", internalRoute: "/constellation", onDemo: true },
  { name: "PMC", logoKey: "PMC", usp: "Studio monitors trusted by Abbey Road — now for your home.", url: "https://pmc-speakers.com", onDemo: true },
  { name: "Wharfedale", logoKey: "Wharfedale", usp: "85 years of British loudspeaker heritage.", url: "https://www.wharfedale.co.uk", onDemo: true },
  { name: "Avantgarde Acoustics", logoKey: "Avantgarde Acoustics", usp: "German spherical horn loudspeakers, pure emotion.", url: "https://www.avantgarde-acoustic.de", onDemo: false },
  { name: "SIM2", logoKey: "SIM2", usp: "Italian ultra-high-end laser projection.", url: "https://www.sim2.com", onDemo: true },
  { name: "Sonos", logoKey: "Sonos", usp: "The simplest way to fill every room with music.", url: "https://www.sonos.com", onDemo: true },
  { name: "Devialet", logoKey: "Devialet", usp: "Phantom engineering — physics-defying active speakers.", url: "https://www.devialet.com", onDemo: true },
  { name: "Arcam", logoKey: "Arcam", usp: "British-engineered AV processing and amplification.", url: "https://www.arcam.co.uk", onDemo: true },
  { name: "Luxman", logoKey: "Luxman", usp: "Japanese precision craftsmanship since 1925.", url: "https://www.luxman.com", onDemo: true },
  { name: "Audiolab", logoKey: "Audiolab", usp: "Refined British amplification for pure music.", url: "https://www.audiolab.co.uk", onDemo: true },
  { name: "Quad", logoKey: "Quad", usp: "Pioneering British electrostatic and valve audio since 1936.", url: "https://quad-hifi.co.uk" },
  { name: "McIntosh", logoKey: "McIntosh", usp: "Legendary American amplification since 1949.", url: "https://www.mcintoshlabs.com", onDemo: true },
  { name: "K-Array", logoKey: "K-Array", usp: "Ultra-slim Italian speakers with extraordinary power.", url: "https://www.k-array.com", onDemo: true },
  { name: "Trinnov", logoKey: "Trinnov", usp: "The world's most advanced immersive audio processor.", url: "https://www.trinnov.com", onDemo: true },
  { name: "Classé", logoKey: "Classé", usp: "Reference-grade amplification with musical purity.", url: "https://www.classeaviation.com", onDemo: true },

  // Speakers & Audio
  { name: "Artcoustic", logoKey: "Artcoustic", usp: "Architectural speakers that double as art.", url: "https://www.artcoustic.com", onDemo: true },
  { name: "Bowers & Wilkins", logoKey: "Bowers & Wilkins", usp: "Iconic British sound trusted by studios worldwide.", url: "https://www.bowerswilkins.com", onDemo: true },
  { name: "Cornered Audio", logoKey: "Cornered Audio", usp: "Corner-mounted speakers that vanish into architecture.", url: "https://www.corneredaudio.com", onDemo: true },
  { name: "Lithe Audio", logoKey: "Lithe Audio", usp: "Wireless ceiling speakers with zero-cable install.", url: "https://www.litheaudio.com", onDemo: true },
  { name: "BEC", logoKey: "BEC", usp: "Discreet architectural speakers for distributed sound systems.", url: "https://www.bec.uk.com", onDemo: true },

  // Electronics & Processing
  { name: "Classé", logoKey: "Classé", usp: "Reference-grade amplification with musical purity.", url: "https://www.classeaviation.com", onDemo: true },
  { name: "Lyngdorf", logoKey: "Lyngdorf", usp: "Digital amplification with RoomPerfect™ calibration.", url: "https://www.lyngdorf.com", onDemo: true },
  { name: "Rotel", logoKey: "Rotel", usp: "Musical transparency through balanced engineering.", url: "https://www.rotel.com", onDemo: true },
  { name: "Lumagen", logoKey: "Lumagen", usp: "Reference-grade video processing and scaling.", url: "https://www.lumagen.com", onDemo: true },

  // Display & Projection
  { name: "BenQ", logoKey: "BenQ", usp: "Cinema-grade projection for home theatres.", url: "https://www.benq.com", onDemo: true },
  { name: "TCL", logoKey: "TCL", usp: "QD-Mini LED displays with stunning scale.", url: "https://www.tcl.com", onDemo: true },

  // DJ & Music Creation
  { name: "Pioneer DJ", logoKey: "Pioneer", usp: "Professional wireless DJ mixing for your home.", url: "https://www.pioneerdj.com", onDemo: true },

  // Enterprise / Studio
  { name: "BirdDog", logoKey: "BirdDog", usp: "NDI-native cameras for broadcast-grade production.", url: "https://www.birddog.tv", onDemo: true },
  { name: "Vizrt", logoKey: "Vizrt", usp: "Real-time graphics and virtual studio technology.", url: "https://www.vizrt.com", onDemo: true },
  { name: "Rosco", logoKey: "Rosco", usp: "Industry-standard lighting and LED studio solutions.", url: "https://www.rosco.com", onDemo: true },
  { name: "Biamp", logoKey: "Biamp", usp: "Professional AV signal processing and conferencing.", url: "https://www.biamp.com", onDemo: true },

  // Control & Infrastructure
  { name: "Crestron Home", logoKey: "Crestron", usp: "The operating system for luxury smart homes.", url: "https://crestron.com" },
  { name: "QuantIQ", logoKey: "QuantIQ", usp: "AI-powered surveillance and edge analytics.", url: "https://www.quantiq.com", onDemo: true },
  { name: "MissionDesk", logoKey: "MissionDesk", usp: "Command-center consoles for NOC and SOC operations.", url: "https://www.missiondesk.com", onDemo: true },
  { name: "Cisco", logoKey: "Cisco", usp: "Enterprise networking and collaboration infrastructure.", url: "https://www.cisco.com", onDemo: true },
];
