export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductPageData {
  slug: string;
  brandSlug: string;
  brandName: string;
  name: string;
  category: string;
  tagline: string;
  heroDescription: string;
  features: ProductFeature[];
  specifications: ProductSpec[];
  whyQubix: string;
  seo: {
    title: string;
    description: string;
    h1: string;
  };
}

export const productPages: Record<string, ProductPageData> = {
  "luxman-l-509z": {
    slug: "luxman-l-509z",
    brandSlug: "luxman",
    brandName: "Luxman",
    name: "L-509Z",
    category: "Integrated Amplifier",
    tagline: "The definitive integrated amplifier. 120 watts of Japanese perfection.",
    heroDescription: "The L-509Z is Luxman's flagship integrated amplifier — the culmination of nearly a century of Japanese audio engineering distilled into a single, uncompromising chassis. With ODNF 5.0 amplification, LECUA-EX volume control, and 120W per channel of pure Class-AB power, it doesn't just compete with the best separates — it renders them unnecessary.",
    features: [
      {
        title: "ODNF 5.0 Amplification",
        description: "Luxman's fifth-generation Only Distortion Negative Feedback circuit achieves vanishingly low distortion (0.003%) by targeting only the distortion component for correction — leaving the original musical signal untouched. The result is effortless dynamics and breathtaking transparency.",
      },
      {
        title: "LECUA-EX Volume Control",
        description: "The latest evolution of Luxman's legendary Electronically Controlled Ultimate Attenuator uses 88 precision resistors per channel, switched via gold-contact relays. Perfect channel balance at every volume level — from midnight listening to full-scale orchestral peaks.",
      },
      {
        title: "120W × 2 Class-AB Power",
        description: "Massive toroidal transformer and high-capacity power supply deliver 120 watts per channel into 8 ohms (doubling to 240W into 4 ohms), with peak current capability that effortlessly controls even the most demanding loudspeakers.",
      },
      {
        title: "Dual Mono Construction",
        description: "Left and right channels are completely separated from power supply through amplification stages, minimising crosstalk and ensuring an enormous, holographic soundstage with pinpoint imaging.",
      },
      {
        title: "In-House Transformer Manufacturing",
        description: "The custom-wound toroidal power transformer is designed and manufactured at Luxman's Yokohama factory — the heart of the amplifier's effortless power delivery and dead-silent noise floor.",
      },
      {
        title: "Copper-Plated Chassis",
        description: "Internal copper plating provides superior electromagnetic shielding, while the machined aluminium front panel and brushed enclosure reflect Luxman's commitment to build quality that matches the sonics.",
      },
    ],
    specifications: [
      { label: "Power Output", value: "120W × 2 (8Ω) / 240W × 2 (4Ω)" },
      { label: "THD", value: "0.003% (at rated output)" },
      { label: "Frequency Response", value: "20Hz – 100kHz (+0, -3dB)" },
      { label: "S/N Ratio", value: "110dB (IHF-A)" },
      { label: "Damping Factor", value: "370" },
      { label: "Inputs", value: "4 × RCA, 2 × XLR balanced" },
      { label: "Phono Stage", value: "Built-in MM/MC with adjustable loading" },
      { label: "Headphone Output", value: "6.3mm with dedicated amplifier stage" },
      { label: "Speaker Terminals", value: "2 pairs, gold-plated" },
      { label: "Volume Control", value: "LECUA-EX (88-step electronic attenuator)" },
      { label: "Weight", value: "29.3 kg" },
      { label: "Dimensions", value: "440 × 197 × 463 mm (W×H×D)" },
      { label: "Finish", value: "Brushed aluminium (natural or black)" },
      { label: "Made In", value: "Yokohama, Japan" },
    ],
    whyQubix: "At Qubix, you can experience the L-509Z in a purpose-built listening room, paired with reference loudspeakers from PMC, Wharfedale, and Bowers & Wilkins. Our specialists will help you find the perfect speaker pairing and room setup to unlock everything this amplifier is capable of.",
    seo: {
      title: "Luxman L-509Z India | Flagship Integrated Amplifier — Qubix",
      description: "Experience the Luxman L-509Z in India. 120W Class-AB integrated amplifier with ODNF 5.0 and LECUA-EX. Demo at Qubix Experience Center — Japan's finest audio engineering.",
      h1: "Luxman L-509Z — The Definitive Integrated Amplifier",
    },
  },
};
