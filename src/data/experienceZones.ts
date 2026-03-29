export type ZoneTier = "residential" | "enterprise";

export interface ZoneSystem {
  name: string;
  details: string;
}

export interface Zone {
  id: string;
  number: string;
  name: string;
  tier: ZoneTier;
  color: string;
  glowClass: string;
  poweredBy: string[];
  tagline: string;
  description: string;
  roomSize?: string;
  systems: ZoneSystem[];
}

export interface AmbientTechItem {
  name: string;
  description: string;
  icon: string;
}

export const zones: Zone[] = [
  {
    id: "personal-stereo",
    number: "01",
    name: "Personal Stereo & DJ Studio",
    tier: "residential",
    color: "hsl(var(--music))",
    glowClass: "glow-music",
    poweredBy: ["PMC", "Lyngdorf", "Pioneer"],
    tagline: "Your escape. Your music. Your rules.",
    description:
      "If you like to listen to music alone — or explore our small room systems optimised for individual and small group listening. And when you listen alone, why not mix your own music? Our individual stereo systems can be upgraded with Professional Wireless DJ Mixers — so bring out that DJ in you, in the comfort of your own home, where you are the audience and the performance. Take an escape, and immerse yourself in pure stereo HiFi music.",
    roomSize: "From 80 sqft",
    systems: [
      { name: "PMC Prodigy Bookshelf / Towers", details: "Reference-grade compact stereo speakers" },
      { name: "Lyngdorf TDAI 1120", details: "Digital DSP Amplifier with RoomPerfect™ calibration" },
      { name: "Pioneer Alpha Theta Portable DJ Console", details: "Bluetooth, WiFi & direct Apple Music integration" },
    ],
  },
  {
    id: "audiophile-living-room",
    number: "02",
    name: "Audiophile Living Room",
    tier: "residential",
    color: "hsl(var(--cinema))",
    glowClass: "glow-cinema",
    poweredBy: ["PMC", "McIntosh", "TCL"],
    tagline: "No projector. No multiple remotes. Just pure performance.",
    description:
      "Only a few systems do equal justice to movies and music. A free-style living room system — no acoustic treatments, wooden floor, charcoal and leather panels, normal seating. No frills. Slim profile speakers mounted alongside a calibrated 100\" QD-Mini LED TV. Enjoy Netflix, music, concerts, music videos, or Atmos music on a HiFi audiophile-grade system.",
    systems: [
      { name: "PMC CI90 Speakers", details: "Slim-profile audiophile speakers for living spaces" },
      { name: "McIntosh MHT300", details: "Integrated AV Processor — the best AVR money can buy" },
      { name: "TCL 100\" QD-Mini LED TV", details: "Calibrated display, no projector needed" },
    ],
  },
  {
    id: "family-home-theatre",
    number: "03",
    name: "Family Home Theatre",
    tier: "residential",
    color: "hsl(var(--cinema))",
    glowClass: "glow-cinema",
    poweredBy: ["Artcoustic", "Wharfedale", "Arcam", "BenQ", "SIM2"],
    tagline: "A small family escape. Punchy, powerful, personal.",
    description:
      "This is a small family escape in an 18×13 room. This system offers excellent value for every rupee spent — nice, punchy, powerful. We have two complete systems in this room so you can compare and choose what resonates with your space and your ears.",
    roomSize: "18 × 13 ft",
    systems: [
      { name: "Option 1: Artcoustic Spitfire", details: "Architectural speakers with stunning visual design" },
      { name: "Option 2: Wharfedale M Series", details: "Dynamic performance in a compact form factor" },
      { name: "Arcam Electronics", details: "British-engineered amplification and processing" },
      { name: "BenQ / SIM2 Projectors", details: "Cinema-grade projection options" },
    ],
  },
  {
    id: "casual-surround",
    number: "04",
    name: "Casual Surround Setup",
    tier: "residential",
    color: "hsl(var(--social))",
    glowClass: "glow-social",
    poweredBy: ["Wharfedale", "Arcam"],
    tagline: "Tower speakers meet everyday living.",
    description:
      "A casual living room tower + center + surround setup that proves you don't need a dedicated room for immersive sound. This system blends into your living space while delivering a surround experience that pulls you into every scene and every track.",
    systems: [
      { name: "Wharfedale Aura Towers", details: "Floor-standing speakers with refined presence" },
      { name: "Wharfedale Aura Center + Surrounds", details: "Complete surround channel coverage" },
      { name: "Arcam AV Receiver", details: "Clean, powerful amplification" },
    ],
  },
  {
    id: "value-atmos",
    number: "05",
    name: "Value Atmos System",
    tier: "residential",
    color: "hsl(var(--social))",
    glowClass: "glow-social",
    poweredBy: ["Wharfedale"],
    tagline: "The best value-for-money Atmos system. Period.",
    description:
      "Proof that immersive Dolby Atmos doesn't have to break the bank. This 5.1.2 in-wall setup from Wharfedale's Diamond series delivers overhead audio channels with minimal visual footprint — perfect for small rooms or living rooms where aesthetics matter as much as sound.",
    systems: [
      { name: "Wharfedale Diamond In-Wall Series", details: "5.1.2 Dolby Atmos configuration" },
    ],
  },
  {
    id: "heritage-stereo",
    number: "06",
    name: "Heritage Stereo Collection",
    tier: "residential",
    color: "hsl(var(--music))",
    glowClass: "glow-music",
    poweredBy: ["Wharfedale", "Luxman", "Audiolab", "Bowers & Wilkins"],
    tagline: "Where craftsmanship meets sonic purity.",
    description:
      "Multiple stereo setups showcasing the range and depth of two-channel audio — from heritage warmth to modern precision. Each pairing is curated to demonstrate a different philosophy of stereo listening.",
    systems: [
      { name: "Wharfedale Linton Heritage", details: "Paired with Audiolab amplification — classic warmth" },
      { name: "Wharfedale Elysian Flagship", details: "Paired with Luxman L-505z — reference-grade stereo" },
      { name: "Bowers & Wilkins Formation Duo", details: "Wireless active stereo — modern precision" },
    ],
  },
  {
    id: "casual-architectural",
    number: "07",
    name: "Casual & Architectural Audio",
    tier: "residential",
    color: "hsl(var(--outdoor))",
    glowClass: "",
    poweredBy: ["Cornered Audio", "Bowers & Wilkins", "Lithe Audio", "BEC", "Sonos", "Rotel"],
    tagline: "Sound that disappears into your architecture.",
    description:
      "Ceiling speakers, in-wall solutions, weatherproof outdoor audio, and casual listening setups. These systems are designed to be heard but not seen — blending into your home's architecture while filling every corner with music.",
    systems: [
      { name: "Cornered Audio CI6 Pair", details: "Corner-mounted architectural speakers" },
      { name: "Bowers & Wilkins AM1", details: "Weather-resistant outdoor speaker" },
      { name: "Lithe Audio Ceiling Speakers", details: "Wireless ceiling-mounted audio" },
      { name: "BEC IC120", details: "In-ceiling speakers powered by Sonos & Rotel" },
    ],
  },
  {
    id: "soundbar-active",
    number: "08",
    name: "Soundbar & Active Systems",
    tier: "residential",
    color: "hsl(var(--performance))",
    glowClass: "",
    poweredBy: ["Bowers & Wilkins", "Sonos", "Devialet"],
    tagline: "From soundbars to the ultimate active speaker system.",
    description:
      "The spectrum of modern active audio — from premium soundbars to an unprecedented 7.7 active speaker system. The Devialet setup, connected via Dante Audio Network, redefines what's possible without traditional amplifiers and receivers.",
    systems: [
      { name: "Bowers & Wilkins Panorama", details: "Premium soundbar experience" },
      { name: "Sonos Arc Ultra + Sub 4 + Era 100 Pair", details: "Complete wireless surround ecosystem" },
      { name: "Devialet Custom 7.7 System", details: "3× Phantom I 108dB + 4× Phantom II on Dante network" },
    ],
  },
  {
    id: "tv-studio",
    number: "09",
    name: "Digital TV Studio",
    tier: "enterprise",
    color: "hsl(var(--connectivity))",
    glowClass: "",
    poweredBy: ["Multi-camera", "Live Production"],
    tagline: "Broadcast-grade. In your building.",
    description:
      "Everything you need to shoot and edit TV channel-grade content. Personal news studios, podcast studios, e-sports setups, and streaming solutions with multi-camera switching and live production capabilities. Content creation at a professional level, in your own space.",
    systems: [
      { name: "Multi-Camera Production", details: "Professional switching and live direction" },
      { name: "Podcast & Streaming Setup", details: "Broadcast-quality audio and video capture" },
      { name: "E-Sports & Gaming Studio", details: "Low-latency streaming with production overlays" },
    ],
  },
  {
    id: "ultimate-hifi",
    number: "10",
    name: "Ultimate HiFi Reference",
    tier: "enterprise",
    color: "hsl(var(--music))",
    glowClass: "glow-music",
    poweredBy: ["PMC", "Classé"],
    tagline: "As pure as sound can get. In a room that feels like home.",
    description:
      "A reference stereo setup that actually resembles your living room — not an audiophile's den. Because HiFi music can be enjoyed with friends and family in everyday spaces. This is what uncompromising audio sounds like when it's designed to live with you.",
    systems: [
      { name: "PMC Prophecy i9 Towers", details: "Flagship transmission-line speakers" },
      { name: "Classé Delta Pre + Monoblocks", details: "Reference-grade amplification chain" },
    ],
  },
  {
    id: "command-control",
    number: "11",
    name: "Command & Control Center",
    tier: "enterprise",
    color: "hsl(var(--security))",
    glowClass: "",
    poweredBy: ["QuantIQ", "MissionDesk", "Cisco"],
    tagline: "See everything. Control everything.",
    description:
      "A Network Operations Center, Security Operations Center, AI-based surveillance system, edge analytics solutions, and computer vision — all in one room. For businesses and ultra-high-net-worth residences that demand total visibility and intelligent automation.",
    systems: [
      { name: "QuantIQ AI Surveillance", details: "Edge analytics and computer vision" },
      { name: "MissionDesk NOC/SOC", details: "Network & security operations consoles" },
      { name: "Cisco Infrastructure", details: "Enterprise networking and collaboration" },
    ],
  },
  {
    id: "immersive-room",
    number: "12",
    name: "The Immersive Room",
    tier: "enterprise",
    color: "hsl(var(--cinema))",
    glowClass: "glow-cinema",
    poweredBy: ["Meyer Sound", "Trinnov", "Lumagen", "SIM2"],
    tagline: "Where you experience the physics, chemistry, and biology of sound.",
    description:
      "40 speakers. 8 subwoofers. All perfectly calibrated in a 30×20 ft room with active acoustics. This is a studio where we blur the lines between what's possible and what's not. This room is not for everybody — but whoever has seen it has seen something different. Like no other in India or nearby.",
    roomSize: "30 × 20 ft",
    systems: [
      { name: "Meyer Sound Speaker Array", details: "40 channels of laboratory-grade active speakers" },
      { name: "Meyer Sound Subwoofers", details: "8 subwoofers for physically immersive bass" },
      { name: "Trinnov Altitude", details: "Reference immersive audio processor" },
      { name: "Lumagen Video Processor", details: "Reference-grade video processing" },
      { name: "SIM2 Projection", details: "Ultra-high-end laser projection" },
    ],
  },
];

export const ambientTech: AmbientTechItem[] = [
  {
    name: "Invisible Speakers",
    description: "Plaster and paint over them. Sound from nowhere.",
    icon: "Volume2",
  },
  {
    name: "Rolling LED Screen",
    description: "An LED screen that rolls up and down like a curtain.",
    icon: "Monitor",
  },
  {
    name: "Mirror TV",
    description: "A display hidden behind a mirror. Invisible when off.",
    icon: "Tv",
  },
  {
    name: "Projection Mapping",
    description: "Surfaces become screens. Architecture becomes canvas.",
    icon: "Projector",
  },
  {
    name: "McIntosh RS150 / RS250",
    description: "HiFi all-in-one wireless speakers with iconic design.",
    icon: "Speaker",
  },
  {
    name: "Crestron Control",
    description: "Touch panels, voice control, total home automation.",
    icon: "Smartphone",
  },
  {
    name: "Collaboration Tech",
    description: "Neat, Cisco, Logitech, Wyrestorm, Shure, Biamp.",
    icon: "Users",
  },
  {
    name: "Interactive Digital Signage",
    description: "Intelligent displays that respond and inform.",
    icon: "PanelTop",
  },
];
