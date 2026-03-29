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
    heroSubtitle: "From Apple Music's mastering facility in Los Angeles to the most discerning residences in South India. Qubix is an authorised PMC demo partner in Bangalore, bringing studio-grade truth to private living spaces.",
    partnerBadge: "Authorised PMC Demo Partner — Bangalore",
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
    qubixRelationship: "Qubix is an authorised PMC demo partner in Bangalore, with dedicated PMC listening rooms in our Experience Center. We specialise in PMC's residential and home cinema speaker systems — from the elegant Prodigy series to the flagship Fenestria. Every PMC system we install is precision-calibrated to the room, ensuring you hear what the world's best studios hear.",
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
      
    ],
    sources: [
      { label: "PMC Official Website — About", url: "https://pmc-speakers.com/about" },
      { label: "Apple Music LA Studio with PMC — Audio Media International", url: "https://audiomediainternational.com/apple-music-launch-giant-next-gen-studio-complex-in-la-inc-live-stage-and-pmc-spatial-studio-room/" },
      { label: "Abbey Road Studios — PMC Installation", url: "https://www.instagram.com/p/CQGNHEpM1ql/" },
    ],
    instagramUrl: "https://www.instagram.com/pmcspeakers/",
    elfsightAppId: "33c81363-ec2c-4fd4-ae9a-cb1267745b58",
    seo: {
      title: "PMC Speakers Bangalore | Authorised Demo Partner — Qubix",
      description: "Experience PMC speakers in Bangalore. Qubix is an authorised PMC demo partner with dedicated listening rooms. From Abbey Road to your home — Fenestria, Prodigy & Dolby Atmos cinema systems for discerning residences.",
      h1: "PMC Speakers — Authorised Demo Partner in Bangalore",
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
  "crestron-home": {
    slug: "crestron-home",
    name: "Crestron Home",
    tagline: "One touch. Every system. Total harmony.",
    heroSubtitle: "Crestron Home is the operating system for luxury residences — unifying lighting, climate, audio, video, shading, and security into a single, intuitive experience. Qubix integrates Crestron Home into India's most discerning private homes.",
    partnerBadge: "Crestron Integration Partner",
    logoKey: "Crestron",
    founded: "1972",
    headquarters: "Rockleigh, New Jersey, USA",
    founders: "George Feldstein",
    website: "https://crestron.com/Products/Market-Solutions/Residential-End-User-Home",
    instagramUrl: "https://www.instagram.com/crestron/",
    about: [
      "Crestron has been the definitive name in control and automation for over five decades — trusted by Fortune 500 boardrooms, government facilities, and the world's most prestigious residences. But Crestron Home is something different: it's Crestron's purpose-built residential platform, designed from the ground up for the way people actually live.",
      "Where most smart home systems are cobbled together from consumer gadgets, Crestron Home is a true operating system — a unified platform where lighting, shading, climate, audio, video, security, and intercom all communicate natively. There are no workarounds, no compatibility issues, no apps fighting each other. Everything simply works, because everything was designed to work together.",
      "The Crestron Home OS powers elegant touchscreens, keypads, and remote interfaces that make controlling an entire residence feel effortless. Whether you're adjusting scenes from a flush-mount keypad, a tabletop touch panel, or your phone from another country — the experience is consistent, instant, and beautiful.",
      "What truly sets Crestron Home apart is its reliability. In a world where consumer smart home devices lose connectivity, need rebooting, or become obsolete in two years, Crestron Home runs on enterprise-grade hardware with local processing. Your home works even when the internet doesn't.",
    ],
    qubixRelationship: "Qubix is a certified Crestron integration partner, specialising in Crestron Home deployments for luxury residences across India. Our team designs, programs, and commissions complete Crestron Home systems — from elegant single-room setups to whole-estate automation spanning lighting, AV, climate, security, and motorised shading. Every system is tailored to how you live, not how the technology works.",
    technologies: [
      {
        name: "Crestron Home® OS",
        description: "A purpose-built residential operating system that unifies every subsystem in your home — lighting, shading, climate, audio, video, security, and intercom — into one seamless, responsive platform.",
      },
      {
        name: "Local Processing Architecture",
        description: "Unlike cloud-dependent consumer systems, Crestron Home runs on local processors. Your home responds instantly and works reliably even without an internet connection.",
      },
      {
        name: "Native Subsystem Integration",
        description: "Crestron Home speaks natively to leading brands — Lutron, Sonos, Apple AirPlay, Sonance, and hundreds more — without relying on third-party bridges or workarounds.",
      },
      {
        name: "Crestron Horizon™ Keypads & Interfaces",
        description: "Architecturally refined keypads, dimmers, and touchscreens designed to blend seamlessly into luxury interiors. Every press is precise, tactile, and satisfying.",
      },
      {
        name: "Scene Intelligence",
        description: "Pre-programmed and user-customisable scenes that adjust multiple systems simultaneously — lights, shades, music, temperature — with a single touch or voice command.",
      },
      {
        name: "DM NAX™ Audio-over-IP",
        description: "Crestron's network audio platform distributes hi-fi music to every room over standard Ethernet. DM NAX amplifiers stream, switch, and amplify audio across zones with zero perceptible latency — replacing racks of traditional equipment with elegant, scalable network audio.",
      },
      {
        name: "Remote Management & Monitoring",
        description: "Crestron Home allows remote diagnostics and system updates by your integrator, meaning issues can often be resolved without a site visit.",
      },
    ],
    keyProducts: [
      { name: "Crestron Home OS", category: "Operating System", description: "The brain of the system. A residential OS that ties together every device and subsystem into one unified, reliable experience." },
      { name: "TSW Touch Screens", category: "Control Interface", description: "Wall-mounted and tabletop touch panels with stunning displays — the primary way residents interact with their home." },
      { name: "Horizon™ Keypads", category: "Control Interface", description: "Minimalist, architectural keypads available in custom finishes. Elegant scene control for every room." },
      { name: "MC4-R Processing", category: "Control Processor", description: "The flagship residential processor powering Crestron Home. Handles complex automation logic with enterprise-grade reliability." },
      { name: "Crestron Lighting & Shading", category: "Environmental Control", description: "Integrated lighting dimmers and motorised shade control — all native to the Crestron Home ecosystem." },
      { name: "DM NAX™ Amplifiers", category: "Network Audio", description: "Audio-over-IP amplifiers that distribute hi-fi music to every room over your home network. Scalable, low-latency, and native to the Crestron ecosystem — replacing racks of traditional equipment." },
      { name: "Crestron Home App", category: "Mobile Control", description: "Full control of your home from anywhere in the world. Elegant interface mirroring the touch panel experience on iOS and Android." },
    ],
    timeline: [
      { year: "1972", title: "Crestron Founded", description: "George Feldstein founds Crestron Electronics in New Jersey, beginning with commercial automation and control systems." },
      { year: "1995", title: "Residential Division Launched", description: "Crestron enters the luxury residential market, bringing enterprise-grade reliability to private homes for the first time." },
      { year: "2005", title: "Touch Panel Revolution", description: "Crestron introduces high-resolution residential touch panels, redefining how homeowners interact with automation." },
      { year: "2015", title: "Pyng / Crestron Home Platform", description: "Crestron launches its dedicated residential platform — later evolving into Crestron Home OS — purpose-built for homeowners, not just integrators." },
      { year: "2019", title: "Crestron Home OS Released", description: "The modern Crestron Home operating system launches, offering a unified residential experience with native subsystem integration." },
      { year: "2022", title: "Horizon™ Keypads & Design Push", description: "Crestron introduces the Horizon line — architecturally refined keypads and dimmers designed to disappear into luxury interiors." },
      { year: "2024", title: "Apple Home & AirPlay Integration", description: "Crestron Home deepens its Apple ecosystem integration, enabling seamless AirPlay 2 streaming and Siri voice control." },
    ],
    sources: [
      { label: "Crestron Home — Official Product Page", url: "https://crestron.com/Products/Market-Solutions/Residential-End-User-Home" },
      { label: "Crestron Home OS Overview", url: "https://crestron.com/Products/Market-Solutions/Residential-End-User-Home/os-home" },
    ],
    seo: {
      title: "Crestron Home India | Smart Home Automation — Qubix",
      description: "Experience Crestron Home automation in India. Qubix is a certified Crestron integration partner — luxury smart home control for lighting, AV, climate, shading & security in premium residences.",
      h1: "Crestron Home — Smart Home Automation by Qubix",
    },
    contactFormFields: [
      { label: "Name", name: "name", type: "text", placeholder: "Your name", required: true },
      { label: "Email", name: "email", type: "email", placeholder: "your@email.com", required: true },
      { label: "Phone / WhatsApp", name: "phone", type: "tel", placeholder: "+91", required: true },
      { label: "What interests you most?", name: "interest", type: "select", options: [
        "Whole-Home Crestron Automation",
        "Crestron Lighting & Shading",
        "Crestron Home Cinema Integration",
        "Crestron Home for New Construction",
        "Retrofit / Upgrade Existing System",
        "Visit the Experience Center",
        "Other / General Enquiry",
      ], required: true },
      { label: "Property Type", name: "propertyType", type: "select", options: [
        "Apartment / Penthouse", "Villa / Bungalow / Independent Home", "Farmhouse / Weekend Home", "Commercial / Hospitality"
      ] },
      { label: "Tell us about your home and vision", name: "message", type: "textarea", placeholder: "Describe your home, what systems you'd like to control, and how you envision your smart home experience." },
    ],
  },
};
