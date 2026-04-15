import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroCarousel from "@/components/home/HeroCarousel";
import ExperienceCategories from "@/components/home/ExperienceCategories";

import BrandEcosystem from "@/components/home/BrandEcosystem";
import HomeExplorer from "@/components/home/HomeExplorer";
import AIConsultant from "@/components/home/AIConsultant";
import BudgetEngine from "@/components/home/BudgetEngine";
import ControlDemo from "@/components/home/ControlDemo";
import SystemPhilosophy from "@/components/home/SystemPhilosophy";
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
      <AIConsultant />
      <BudgetEngine />
      <ControlDemo />
      <SystemPhilosophy />
      <CinematicStory />
      <ConsultationCTA />
    </Layout>
  );
}
