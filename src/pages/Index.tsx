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

      {/* Two paths to a conversation: AI consultant + private form */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-1">
            <AIConsultant />
          </div>
          <div className="order-2">
            <ConsultationCTA />
          </div>
        </div>
      </section>
    </Layout>
  );
}
