import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroCarousel from "@/components/home/HeroCarousel";
import ExperienceCategories from "@/components/home/ExperienceCategories";

import BrandEcosystem from "@/components/home/BrandEcosystem";
import HomeExplorer from "@/components/home/HomeExplorer";
import AIConsultant from "@/components/home/AIConsultant";
import ControlDemo from "@/components/home/ControlDemo";

import CinematicStory from "@/components/home/CinematicStory";
import ConsultationCTA from "@/components/home/ConsultationCTA";

export default function Index() {
  return (
    <Layout>
      <SEO
        title="Qubix — Luxury Home Technology Design"
        description="Qubix designs immersive luxury residential AV, home automation, and invisible technology experiences for premium Indian homes."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Qubix",
          "url": "https://qubixhifi.com",
          "description": "Luxury home technology design — AV, automation, lighting & acoustics for premium residences.",
          "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "url": "https://qubixhifi.com/contact" }
        }}
      />
      <HeroCarousel />
      <ExperienceCategories />
      
      <BrandEcosystem />
      <HomeExplorer />
      <ControlDemo />
      
      <CinematicStory />

      {/* One heading, two ways to start a conversation */}
      <DesignTogetherSection />
    </Layout>
  );
}

function DesignTogetherSection() {
  const [mode, setMode] = useState<"explore" | "callback">("explore");
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-4">
            Let's design <span className="italic text-gradient-vibrant">your home.</span>
          </h2>
          <p className="font-body text-base text-silver max-w-xl mx-auto">
            Start a guided conversation, or just ask us to call you back at a time that suits you.
          </p>
        </div>

        {/* Mode chooser */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setMode("explore")}
            className={`px-5 py-2.5 font-body text-sm rounded-full border transition-all ${
              mode === "explore"
                ? "border-platinum/60 bg-platinum/10 text-foreground"
                : "border-graphite bg-carbon text-silver hover:text-foreground"
            }`}
          >
            I'd like to explore options
          </button>
          <button
            onClick={() => setMode("callback")}
            className={`px-5 py-2.5 font-body text-sm rounded-full border transition-all ${
              mode === "callback"
                ? "border-platinum/60 bg-platinum/10 text-foreground"
                : "border-graphite bg-carbon text-silver hover:text-foreground"
            }`}
          >
            Just request a callback
          </button>
        </div>

        <div className="max-w-2xl mx-auto">
          {mode === "explore" ? <AIConsultant /> : <ConsultationCTA />}
        </div>
      </div>
    </section>
  );
}
