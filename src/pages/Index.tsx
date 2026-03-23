import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ExperienceCategories from "@/components/home/ExperienceCategories";
import AIEntrySection from "@/components/home/AIEntrySection";
import FlagshipBrands from "@/components/home/FlagshipBrands";
import CuratedEcosystem from "@/components/home/CuratedEcosystem";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import PhilosophyPreview from "@/components/home/PhilosophyPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <ExperienceCategories />
      <AIEntrySection />
      <FlagshipBrands />
      <CuratedEcosystem />
      <ProjectsPreview />
      <PhilosophyPreview />
      <FinalCTA />
    </Layout>
  );
}
