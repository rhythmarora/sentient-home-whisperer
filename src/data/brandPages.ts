export interface BrandTimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface BrandProduct {
  name: string;
  category: string;
  description: string;
}

export interface BrandTechnology {
  name: string;
  description: string;
}

export interface BrandPageData {
  slug: string;
  name: string;
  tagline: string;
  heroSubtitle: string;
  partnerBadge: string; // e.g. "Authorised Constellation Partner"
  logoKey: string;
  founded: string;
  headquarters: string;
  founders: string;
  website: string;
  about: string[]; // paragraphs
  qubixRelationship: string;
  technologies: BrandTechnology[];
  keyProducts: BrandProduct[];
  timeline: BrandTimelineEvent[];
  seo: {
    title: string;
    description: string;
    h1: string;
  };
  contactFormFields: {
    label: string;
    name: string;
    type: "text" | "email" | "tel" | "select" | "textarea";
    placeholder?: string;
    options?: string[];
    required?: boolean;
  }[];
}

export const brandPages: Record<string, BrandPageData> = {
  "meyer-sound": {
    slug: "meyer-sound",
    name: "Meyer Sound",
    tagline: "The world's finest sound — engineered for your home.",
    heroSubtitle: "From the Sydney Opera House to your living room. Qubix is India's authorised Constellation partner, bringing Meyer Sound's legendary concert-hall technology to private residences.",
    partnerBadge: "Authorised Constellation Partner — India",
    logoKey: "Meyer Sound",
    founded: "1979",
    headquarters: "Berkeley, California, USA",
    founders: "John & Helen Meyer",
    website: "https://meyersound.com",
    about: [
      "Meyer Sound Laboratories is the gold standard in professional audio. For over four decades, Meyer Sound systems have defined the listening experience in the world's most demanding venues — from the Sydney Opera House and the Berlin Philharmonie to Coachella and Broadway.",
      "What sets Meyer Sound apart is an obsessive commitment to accuracy. Every loudspeaker is designed, engineered, and manufactured in Berkeley, California, with a vertically integrated approach that controls every variable from transducer design to DSP algorithms.",
      "With Constellation — their revolutionary active acoustics platform — Meyer Sound has made it possible to transform the acoustic character of any room at the touch of a button. A living room can sound like a jazz club, a cathedral, or a concert hall. This isn't post-processing or reverb effects — it's real-time acoustic reinvention using precisely placed microphones, processors, and loudspeakers.",
    ],
    qubixRelationship: "Qubix is the only authorised Constellation partner in India, and home to the subcontinent's first and only Constellation demonstration space. Our 12-zone Experience Center in India features a dedicated Constellation room where you can experience active acoustics first-hand — transforming one room into dozens of acoustic environments.",
    technologies: [
      {
        name: "Constellation® Active Acoustics",
        description: "The world's most advanced acoustic system. Constellation uses a network of microphones, loudspeakers, and proprietary algorithms to reshape the acoustic signature of any room in real time. One room becomes a concert hall, a jazz club, a cathedral — or a perfectly damped mixing studio.",
      },
      {
        name: "TruPower® Amplification",
        description: "Meyer Sound's proprietary Class-D amplification technology is integrated into every self-powered loudspeaker, delivering enormous headroom with vanishingly low distortion. The amplifier is designed as part of the speaker, not bolted on.",
      },
      {
        name: "Intelligent AC™",
        description: "Advanced power supply technology that ensures consistent performance regardless of mains voltage fluctuations — critical for installations in India where power quality varies.",
      },
      {
        name: "QuietPower™ Subwoofers",
        description: "Meyer Sound's patented subwoofer technology delivers room-shaking low frequencies with zero audible distortion, using opposing-driver configurations that cancel mechanical vibration.",
      },
      {
        name: "Spacemap® Go",
        description: "An immersive sound design tool that lets you move audio sources through 3D space in real time. Originally designed for theatrical productions, now available for residential immersive audio experiences.",
      },
    ],
    keyProducts: [
      { name: "Constellation System", category: "Active Acoustics", description: "Complete active acoustics platform that transforms any room's acoustic character in real time. The flagship residential technology." },
      { name: "Bluehorn System", category: "Reference Monitor", description: "The world's first truly phase-perfect full-bandwidth monitor. Used by top mastering engineers and now available for ultra-reference home listening." },
      { name: "Acheron Series", category: "Cinema Loudspeakers", description: "Screen channel loudspeakers designed for immersive cinema. Ultra-low distortion with perfectly controlled coverage patterns." },
      { name: "HMS Series", category: "Home Cinema Surround", description: "Purpose-built surround and immersive cinema loudspeakers for Dolby Atmos and object-based audio installations." },
      { name: "1100-LFC", category: "Low-Frequency Control", description: "Reference-grade subwoofer using QuietPower technology. Musicality and extension that conventional subwoofers cannot match." },
      { name: "UP-4slim", category: "Architectural Speaker", description: "Ultra-compact self-powered loudspeaker for architectural installations where space is limited but performance is non-negotiable." },
    ],
    timeline: [
      { year: "1979", title: "Founded in San Francisco", description: "John and Helen Meyer establish Meyer Sound Laboratories, bringing scientific rigour to professional audio." },
      { year: "1986", title: "First Self-Powered Speaker", description: "Meyer Sound pioneers the self-powered loudspeaker concept with integrated amplification — now an industry standard." },
      { year: "1995", title: "SIM System Launch", description: "Source Independent Measurement revolutionises how audio systems are tuned, becoming the global standard for system optimisation." },
      { year: "2003", title: "Constellation Introduced", description: "Meyer Sound unveils Constellation active acoustics, allowing any room to change its acoustic character at the push of a button." },
      { year: "2009", title: "LEO Family", description: "The LEO-M large-scale line array sets new standards for touring and installed sound, used by artists from Adele to Metallica." },
      { year: "2016", title: "Bluehorn Reference System", description: "The world's first phase-perfect, full-bandwidth studio monitor. A new definition of accuracy." },
      { year: "2020", title: "Spacemap Go", description: "Immersive spatial audio tool launched, enabling real-time 3D sound design for performance and residential applications." },
      { year: "2024", title: "Qubix Constellation Demo — India", description: "Qubix opens India's first and only Constellation demonstration space, bringing Meyer Sound's active acoustics to the subcontinent." },
    ],
    seo: {
      title: "Meyer Sound India | Authorised Constellation Partner — Qubix",
      description: "Experience Meyer Sound in India. Qubix is the authorised Constellation partner with India's only active acoustics demo. Concert-hall precision for private residences — home cinema, immersive audio & Constellation systems.",
      h1: "Meyer Sound India — Authorised Constellation Partner",
    },
    contactFormFields: [
      { label: "Name", name: "name", type: "text", placeholder: "Your name", required: true },
      { label: "Email", name: "email", type: "email", placeholder: "your@email.com", required: true },
      { label: "Phone / WhatsApp", name: "phone", type: "tel", placeholder: "+91", required: true },
      { label: "What interests you most?", name: "interest", type: "select", options: [
        "Constellation Active Acoustics",
        "Home Cinema with Meyer Sound",
        "Bluehorn Reference Listening",
        "Whole-Home Meyer Sound System",
        "Visit the Constellation Demo Room",
        "Other / General Enquiry",
      ], required: true },
      { label: "Property Type", name: "propertyType", type: "select", options: [
        "Apartment", "Villa / Independent Home", "Penthouse", "Farmhouse / Weekend Home", "Bungalow", "Commercial / Hospitality"
      ] },
      { label: "Tell us about your space and vision", name: "message", type: "textarea", placeholder: "Describe your room, what you're looking to achieve, and any specific Meyer Sound products you're interested in." },
    ],
  },
};
