export interface ExperienceBrand {
  name: string;
  logoKey: string; // key in brandLogos
  usp: string;
  url: string;
  internalRoute?: string;
}

export const experienceBrands: ExperienceBrand[] = [
  // Flagship / Core
  { name: "Meyer Sound", logoKey: "Meyer Sound", usp: "Concert-hall precision engineered for private spaces.", url: "https://meyersound.com" },
  { name: "Constellation", logoKey: "Constellation", usp: "The world's most advanced active acoustics — only demo in the subcontinent.", url: "https://meyersound.com/product/constellation/", internalRoute: "/constellation" },
  { name: "PMC", logoKey: "PMC", usp: "Studio monitors trusted by Abbey Road — now for your home.", url: "https://pmc-speakers.com" },
  { name: "Wharfedale", logoKey: "Wharfedale", usp: "85 years of British loudspeaker heritage.", url: "https://www.wharfedale.co.uk" },
  { name: "SIM2", logoKey: "SIM2", usp: "Italian ultra-high-end laser projection.", url: "https://www.sim2.com" },
  { name: "Sonos", logoKey: "Sonos", usp: "The simplest way to fill every room with music.", url: "https://www.sonos.com" },
  { name: "Devialet", logoKey: "Devialet", usp: "Phantom engineering — physics-defying active speakers.", url: "https://www.devialet.com" },
  { name: "Arcam", logoKey: "Arcam", usp: "British-engineered AV processing and amplification.", url: "https://www.arcam.co.uk" },
  { name: "Luxman", logoKey: "Luxman", usp: "Japanese precision craftsmanship since 1925.", url: "https://www.luxman.com" },
  { name: "Audiolab", logoKey: "Audiolab", usp: "Refined British amplification for pure music.", url: "https://www.audiolab.co.uk" },
  { name: "Quad", logoKey: "Quad", usp: "Pioneering British electrostatic and valve audio since 1936.", url: "https://quad-hifi.co.uk" },
  { name: "McIntosh", logoKey: "McIntosh", usp: "Legendary American amplification since 1949.", url: "https://www.mcintoshlabs.com" },
  { name: "K-Array", logoKey: "K-Array", usp: "Ultra-slim Italian speakers with extraordinary power.", url: "https://www.k-array.com" },
  { name: "Trinnov", logoKey: "Trinnov", usp: "The world's most advanced immersive audio processor.", url: "https://www.trinnov.com" },
  { name: "Classé", logoKey: "Classé", usp: "Reference-grade amplification with musical purity.", url: "https://www.classeaviation.com" },

  // Speakers & Audio
  { name: "Artcoustic", logoKey: "Artcoustic", usp: "Architectural speakers that double as art.", url: "https://www.artcoustic.com" },
  { name: "Bowers & Wilkins", logoKey: "Bowers & Wilkins", usp: "Iconic British sound trusted by studios worldwide.", url: "https://www.bowerswilkins.com" },
  { name: "Cornered Audio", logoKey: "Cornered Audio", usp: "Corner-mounted speakers that vanish into architecture.", url: "https://www.corneredaudio.com" },
  { name: "Lithe Audio", logoKey: "Lithe Audio", usp: "Wireless ceiling speakers with zero-cable install.", url: "https://www.litheaudio.com" },
  { name: "BEC", logoKey: "BEC", usp: "Discreet architectural speakers for distributed sound systems.", url: "https://www.bec.uk.com" },

  // Electronics & Processing
  { name: "Classé", logoKey: "Classé", usp: "Reference-grade amplification with musical purity.", url: "https://www.classeaviation.com" },
  { name: "Lyngdorf", logoKey: "Lyngdorf", usp: "Digital amplification with RoomPerfect™ calibration.", url: "https://www.lyngdorf.com" },
  { name: "Rotel", logoKey: "Rotel", usp: "Musical transparency through balanced engineering.", url: "https://www.rotel.com" },
  { name: "Lumagen", logoKey: "Lumagen", usp: "Reference-grade video processing and scaling.", url: "https://www.lumagen.com" },

  // Display & Projection
  { name: "BenQ", logoKey: "BenQ", usp: "Cinema-grade projection for home theatres.", url: "https://www.benq.com" },
  { name: "TCL", logoKey: "TCL", usp: "QD-Mini LED displays with stunning scale.", url: "https://www.tcl.com" },

  // DJ & Music Creation
  { name: "Pioneer DJ", logoKey: "Pioneer", usp: "Professional wireless DJ mixing for your home.", url: "https://www.pioneerdj.com" },

  // Enterprise / Studio
  { name: "BirdDog", logoKey: "BirdDog", usp: "NDI-native cameras for broadcast-grade production.", url: "https://www.birddog.tv" },
  { name: "Vizrt", logoKey: "Vizrt", usp: "Real-time graphics and virtual studio technology.", url: "https://www.vizrt.com" },
  { name: "Rosco", logoKey: "Rosco", usp: "Industry-standard lighting and LED studio solutions.", url: "https://www.rosco.com" },
  { name: "Biamp", logoKey: "Biamp", usp: "Professional AV signal processing and conferencing.", url: "https://www.biamp.com" },

  // Control & Infrastructure
  { name: "Crestron Home", logoKey: "Crestron", usp: "The operating system for luxury smart homes.", url: "https://crestron.com" },
  { name: "QuantIQ", logoKey: "QuantIQ", usp: "AI-powered surveillance and edge analytics.", url: "https://www.quantiq.com" },
  { name: "MissionDesk", logoKey: "MissionDesk", usp: "Command-center consoles for NOC and SOC operations.", url: "https://www.missiondesk.com" },
  { name: "Cisco", logoKey: "Cisco", usp: "Enterprise networking and collaboration infrastructure.", url: "https://www.cisco.com" },
];
