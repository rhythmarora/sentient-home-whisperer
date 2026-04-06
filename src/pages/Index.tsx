import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ExperienceCategories from "@/components/home/ExperienceCategories";
import SoundDemo from "@/components/home/SoundDemo";
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
      <HeroSection />
      <ExperienceCategories />
      <SoundDemo />
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
