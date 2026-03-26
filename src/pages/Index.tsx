import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import BonusSection from "@/components/BonusSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <BonusSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
};

export default Index;
