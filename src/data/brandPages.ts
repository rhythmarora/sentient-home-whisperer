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

export interface BrandSource {
  label: string;
  url: string;
}

export interface BrandPageData {
  slug: string;
  name: string;
  tagline: string;
  heroSubtitle: string;
  partnerBadge: string;
  logoKey: string;
  founded: string;
  headquarters: string;
  founders: string;
  website: string;
  instagramUrl?: string;
  elfsightAppId?: string;
  about: string[];
  qubixRelationship: string;
  technologies: BrandTechnology[];
  keyProducts: BrandProduct[];
  timeline: BrandTimelineEvent[];
  sources?: BrandSource[];
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
    heroSubtitle: "From the Sydney Opera House to your living room — and your private nightclub. Qubix is India's authorised Constellation partner, bringing Meyer Sound's legendary concert-hall technology to private residences, party rooms, and entertainment spaces.",
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
      "Beyond cinemas and listening rooms, Meyer Sound systems are increasingly found in private party rooms, home nightclubs, and social entertainment spaces — where owners want the same visceral impact they experience at the world's best clubs and festivals, but in their own home.",
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
    sources: [
      { label: "Meyer Sound Official Website", url: "https://meyersound.com" },
      { label: "Constellation Active Acoustics", url: "https://meyersound.com/product/constellation/" },
    ],
    instagramUrl: "https://www.instagram.com/maboroshiproductions/",
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
        "Apartment / Penthouse", "Villa / Bungalow / Independent Home", "Farmhouse / Weekend Home", "Commercial / Hospitality"
      ] },
      { label: "Tell us about your space and vision", name: "message", type: "textarea", placeholder: "Describe your room, what you're looking to achieve, and any specific Meyer Sound products you're interested in." },
    ],
  },
  "pmc": {
    slug: "pmc",
    name: "PMC",
    tagline: "The speakers trusted by Abbey Road — now in India's finest homes.",
    heroSubtitle: "From Apple Music's mastering facility in Los Angeles to the most discerning residences in India. Qubix is an authorised PMC demo partner, bringing studio-grade truth to private living spaces.",
    partnerBadge: "Authorised PMC Demo Partner — India",
    logoKey: "PMC",
    founded: "1991",
    headquarters: "Luton, Bedfordshire, United Kingdom",
    founders: "Peter Thomas & Adrian Loader",
    website: "https://pmc-speakers.com",
    about: [
      "PMC — Professional Monitor Company — builds loudspeakers that reveal the absolute truth in music. Founded by BBC broadcast engineer Peter Thomas, PMC speakers are the reference standard at Abbey Road Studios, Metropolis Studios, and Apple Music's new mastering facility in Los Angeles. When the world's most critical ears need to hear exactly what's in a recording, they turn to PMC.",
      "What makes PMC unique is their Advanced Transmission Line (ATL™) technology — a proprietary bass-loading method that delivers deep, controlled, distortion-free low frequencies from remarkably compact cabinets. Unlike conventional ported or sealed designs, ATL uses a precisely calculated internal pathway that extends bass response while eliminating the colouration and compression that plague other approaches.",
      "PMC's residential range brings this uncompromising studio DNA into beautifully crafted cabinets designed for living spaces. The result is a speaker that doesn't just play music — it transports you into the recording studio, hearing every detail exactly as the artist and mastering engineer intended.",
    ],
    qubixRelationship: "Qubix is an authorised PMC demo partner in India, with dedicated PMC listening rooms in our Experience Center. We specialise in PMC's residential and home cinema speaker systems — from the elegant Prodigy series to the flagship Fenestria. Every PMC system we install is precision-calibrated to the room, ensuring you hear what the world's best studios hear.",
    technologies: [
      {
        name: "Advanced Transmission Line (ATL™)",
        description: "PMC's signature technology. A carefully tuned internal pathway absorbs unwanted energy and extends bass response far beyond what the cabinet size suggests — delivering deep, articulate bass without distortion or compression.",
      },
      {
        name: "LAMINAIR™ Vent",
        description: "A precision-engineered air outlet inspired by Formula 1 aerodynamics. LAMINAIR smooths the airflow exiting the transmission line, eliminating turbulence and the chuffing noise common in ported designs.",
      },
      {
        name: "D-Appolito Driver Configuration",
        description: "A symmetrical driver arrangement that creates a wide, even listening window. This means every seat in your room gets the same immersive experience — not just the 'sweet spot'.",
      },
      {
        name: "Custom PMC Drivers",
        description: "PMC designs and specifies their own drive units — from hand-coated mid-range domes to long-throw bass drivers — ensuring every component is optimised for the transmission line topology.",
      },
      {
        name: "Precision Crossover Networks",
        description: "Hand-tuned crossover networks using audiophile-grade components, designed to preserve every micro-detail in the signal path from amplifier to driver.",
      },
    ],
    keyProducts: [
      { name: "Fenestria", category: "Flagship Floor-Standing", description: "PMC's statement loudspeaker. A 6-driver, 3-way transmission line design that delivers concert-scale dynamics in a stunningly elegant cabinet. The pinnacle of residential audio." },
      { name: "Prodigy5", category: "Floor-Standing", description: "The sweet spot of PMC's residential range — ATL bass performance, wide dispersion, and a compact footprint that suits Indian living rooms perfectly." },
      { name: "Prodigy1", category: "Bookshelf / Stand-Mount", description: "Compact yet remarkably full-range, the Prodigy1 brings transmission line bass to smaller spaces without compromise." },
      { name: "ci Series", category: "Custom Installation", description: "Purpose-built in-wall and in-ceiling speakers with ATL technology — invisible high-performance audio for whole-home music and cinema." },
      { name: "Dolby Atmos Cinema Systems", category: "Home Cinema", description: "Complete PMC-based Dolby Atmos systems using dedicated LCR, surround, and height channels — the same speaker technology used in Hollywood dubbing stages." },
      { name: "PMC Subwoofers", category: "Low-Frequency", description: "Transmission line subwoofers that deliver musical, controlled bass — seamlessly integrating with PMC speakers for full-range performance." },
    ],
    timeline: [
      { year: "1991", title: "Founded by BBC Engineer", description: "Peter Thomas, a BBC broadcast engineer, founds PMC with a mission to build speakers that reveal the truth in recordings." },
      { year: "1995", title: "Abbey Road Adoption", description: "Abbey Road Studios adopts PMC monitors — beginning a relationship that continues to this day across all their mastering suites." },
      { year: "2004", title: "ATL™ Technology Patent", description: "PMC patents the Advanced Transmission Line technology that defines their acoustic signature and engineering advantage." },
      { year: "2010", title: "fact Series Launch", description: "The fact (File Accuracy Confirmation Test) range bridges the gap between studio monitors and residential speakers." },
      { year: "2016", title: "Fenestria Unveiled", description: "PMC's flagship residential speaker launches — a 6-driver transmission line design that redefines what home speakers can achieve." },
      { year: "2020", title: "LAMINAIR™ Vent Technology", description: "PMC introduces LAMINAIR — an aerodynamically optimised vent that eliminates turbulence noise from the transmission line." },
      { year: "2025", title: "Apple Music LA Studio", description: "Apple Music opens a 15,000 sq ft next-gen studio complex in Culver City, LA — featuring a dedicated Spatial Audio mixing room with a 9.2.4 PMC speaker system." },
      { year: "2024", title: "Qubix PMC Demo Partnership — India", description: "Qubix becomes an authorised PMC demo partner, featuring dedicated PMC listening rooms in their Experience Center." },
    ],
    sources: [
      { label: "PMC Official Website — About", url: "https://pmc-speakers.com/about" },
      { label: "Apple Music LA Studio with PMC — Audio Media International", url: "https://audiomediainternational.com/apple-music-launch-giant-next-gen-studio-complex-in-la-inc-live-stage-and-pmc-spatial-studio-room/" },
      { label: "Abbey Road Studios — PMC Installation", url: "https://www.instagram.com/p/CQGNHEpM1ql/" },
    ],
    instagramUrl: "https://www.instagram.com/pmcspeakers/",
    seo: {
      title: "PMC Speakers India | Authorised Demo Partner — Qubix",
      description: "Experience PMC speakers in India. Qubix is an authorised PMC demo partner with dedicated listening rooms. From Abbey Road to your home — Fenestria, Prodigy & Dolby Atmos cinema systems for India's finest residences.",
      h1: "PMC Speakers India — Authorised Demo Partner",
    },
    contactFormFields: [
      { label: "Name", name: "name", type: "text", placeholder: "Your name", required: true },
      { label: "Email", name: "email", type: "email", placeholder: "your@email.com", required: true },
      { label: "Phone / WhatsApp", name: "phone", type: "tel", placeholder: "+91", required: true },
      { label: "What interests you most?", name: "interest", type: "select", options: [
        "PMC Fenestria Flagship Speakers",
        "PMC Prodigy Series for Living Room",
        "PMC Home Cinema / Dolby Atmos System",
        "PMC Custom Installation (In-Wall / In-Ceiling)",
        "Visit the PMC Demo Room",
        "Other / General Enquiry",
      ], required: true },
      { label: "Property Type", name: "propertyType", type: "select", options: [
        "Apartment / Penthouse", "Villa / Bungalow / Independent Home", "Farmhouse / Weekend Home", "Commercial / Hospitality"
      ] },
      { label: "Tell us about your space and vision", name: "message", type: "textarea", placeholder: "Describe your room, what you're looking to achieve, and any specific PMC products you're interested in." },
    ],
  },
};
