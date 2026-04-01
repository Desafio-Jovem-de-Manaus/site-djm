import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import RecognitionsSection from "@/components/RecognitionsSection";
import NewsSection from "@/components/NewsSection";
import InstagramSection from "@/components/InstagramSection";
import HelpSection from "@/components/HelpSection";
import PartnersCarousel from "@/components/PartnersCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <MissionSection />
      <RecognitionsSection />
      <NewsSection />
      <InstagramSection />
      <HelpSection />
      {/* Partners section at the bottom of home page */}
      <div className="mt-auto border-t border-slate-200">
        <PartnersCarousel />
      </div>
    </div>
  );
}
